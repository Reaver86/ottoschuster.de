"""Build production and upload changed files over FTPS; no remote downloads."""

import argparse
import ftplib
import hashlib
import json
import os
import ssl
import subprocess
import sys
import time
import urllib.request
import uuid
from datetime import datetime, timezone
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://www.ottoschuster.de"
STATE_PATH = ROOT / ".deploy/production-state.json"
CREDENTIALS_PATH = ROOT / ".deploy/netcup.json"


def save_state(state):
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    temporary = STATE_PATH.with_suffix(".tmp")
    temporary.write_text(json.dumps(state, indent=2) + "\n")
    temporary.replace(STATE_PATH)


def load_state():
    if not STATE_PATH.exists():
        return {"version": 1, "target": ORIGIN, "files": {}}
    state = json.loads(STATE_PATH.read_text())
    if state.get("version") != 1 or state.get("target") != ORIGIN or not isinstance(state.get("files"), dict):
        raise ValueError("Unexpected production state; review .deploy/production-state.json")
    return state


def inventory():
    result = {}
    for path in sorted((ROOT / "dist").rglob("*")):
        if path.is_symlink():
            raise ValueError("Build output must not contain symlinks")
        if path.is_file():
            result[path.relative_to(ROOT / "dist").as_posix()] = hashlib.sha256(
                path.read_bytes()
            ).hexdigest()
    if "de/index.html" not in result or "ro/index.html" not in result:
        raise ValueError("Production build is incomplete")
    return result


def connect():
    if not CREDENTIALS_PATH.exists():
        raise ValueError("Missing .deploy/netcup.json; restore the deployment credentials")
    credentials = json.loads(CREDENTIALS_PATH.read_text())
    expected = {
        "host": "ae8e5.netcup.net",
        "ftp_port": 21,
        "ftp_root": "/",
        "ftp_username": "ottoschuster-deploy",
    }
    if any(credentials.get(key) != value for key, value in expected.items()):
        raise ValueError("Unexpected FTPS target in .deploy/netcup.json")
    ftp = ftplib.FTP_TLS(context=ssl.create_default_context(), timeout=30)
    try:
        ftp.connect(credentials["host"], credentials["ftp_port"])
        ftp.login(credentials["ftp_username"], credentials["ftp_password"])
        ftp.prot_p()
        ftp.set_pasv(True)
        if ftp.pwd() != "/":
            raise ValueError("Unexpected FTP root")
        return ftp
    except Exception:
        ftp.close()
        raise


def ensure_directory(ftp, parent, known):
    for directory in reversed([parent, *parent.parents]):
        name = str(directory)
        if name in known:
            continue
        try:
            ftp.mkd(name)
        except ftplib.error_perm as error:
            if not str(error).startswith("550"):
                raise
            # An existing directory is fine; other 550 errors must still fail.
            ftp.cwd(name)
            ftp.cwd("/")
        known.add(name)


def upload_changed(manifest, state):
    changed = sorted(
        (name for name, digest in manifest.items() if state["files"].get(name) != digest),
        key=lambda name: (name.endswith(".html"), name),
    )
    ftp = None
    known = {"/"}
    try:
        for name in changed:
            destination = PurePosixPath("/" + name)
            temporary = str(destination.parent / (".upload-" + uuid.uuid4().hex))
            for attempt in range(3):
                try:
                    if ftp is None:
                        ftp = connect()
                    ensure_directory(ftp, destination.parent, known)
                    with (ROOT / "dist" / name).open("rb") as source:
                        ftp.storbinary("STOR " + temporary, source, blocksize=262144)
                    ftp.rename(temporary, str(destination))
                    break
                except (OSError, EOFError, ftplib.error_temp):
                    if ftp is not None:
                        ftp.close()
                        ftp = None
                    if attempt == 2:
                        raise
                    print(f"Retrying {name} ({attempt + 1}/2)", flush=True)
                    time.sleep(1)
            # Journal each completed file so a retry skips successful uploads.
            state["files"][name] = manifest[name]
            save_state(state)
            print(f"Uploaded {name}", flush=True)
    finally:
        if ftp is not None:
            ftp.close()
    return len(changed)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="build and list changes; no network or state writes")
    args = parser.parse_args()
    state = load_state()
    environment = {
        **os.environ,
        "SITE_URL": ORIGIN,
        "BASE_PATH": "/",
        "PUBLIC_ANALYTICS_ENABLED": "true",
    }
    # Direct build: deliberately skip npm test and npm run build's validation step.
    print("Building production…", flush=True)
    build = subprocess.run(
        [str(ROOT / "node_modules/.bin/astro"), "build"], cwd=ROOT,
        env=environment, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True,
    )
    if build.returncode:
        print(build.stdout, file=sys.stderr)
        raise RuntimeError("Production build failed; nothing uploaded")
    manifest = inventory()
    if args.dry_run:
        changed = [name for name in manifest if state["files"].get(name) != manifest[name]]
        print(f"Dry run: {len(changed)} changed files; no network requests or state writes.")
        for name in changed:
            print(name)
        return
    uploaded = upload_changed(manifest, state)
    state.update({
        "commit": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip(),
        "working_tree": subprocess.check_output(["git", "status", "--porcelain"], cwd=ROOT, text=True),
        "deployed_at": datetime.now(timezone.utc).isoformat(),
    })
    save_state(state)
    try:
        with urllib.request.urlopen("https://ottoschuster.de/", timeout=20) as response:
            if response.status != 200:
                raise ValueError(f"HTTP {response.status}")
    except Exception:
        raise RuntimeError("Files uploaded, but the homepage reachability check failed") from None
    print(f"Deployed: {uploaded} files uploaded. {ORIGIN} is reachable.")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, RuntimeError, ftplib.Error, subprocess.CalledProcessError) as error:
        print(f"Deployment stopped: {error}", file=sys.stderr)
        sys.exit(1)
