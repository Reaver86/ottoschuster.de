import importlib.util
import io
import json
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path
from unittest.mock import Mock, patch

spec = importlib.util.spec_from_file_location("deploy", Path(__file__).parents[1] / "deploy.py")
deploy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deploy)


class DeploymentTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)
        self.state_path = self.root / ".deploy/production-state.json"
        for name, value in [("ROOT", self.root), ("STATE_PATH", self.state_path)]:
            patcher = patch.object(deploy, name, value)
            patcher.start()
            self.addCleanup(patcher.stop)
        output = redirect_stdout(io.StringIO())
        output.__enter__()
        self.addCleanup(output.__exit__, None, None, None)
        self.state = {"version": 1, "target": deploy.ORIGIN, "files": {}}
        # No RETR/download method exists: accidental downloads fail the tests.
        self.ftp = Mock(spec=["storbinary", "rename", "mkd", "cwd", "close"])

    def build_files(self, names):
        for name in names:
            path = self.root / "dist" / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(b"public build output")

    def test_only_changed_files_assets_before_html(self):
        self.build_files(["de/index.html", "images/new.svg", "unchanged.pdf"])
        self.state["files"]["unchanged.pdf"] = "same"
        with patch.object(deploy, "connect", return_value=self.ftp):
            count = deploy.upload_changed({"de/index.html": "html", "images/new.svg": "asset", "unchanged.pdf": "same"}, self.state)
        self.assertEqual(count, 2)
        self.assertEqual([call.args[1] for call in self.ftp.rename.call_args_list], ["/images/new.svg", "/de/index.html"])
        self.assertEqual(json.loads(self.state_path.read_text())["files"], self.state["files"])

    def test_unchanged_build_never_connects(self):
        self.state["files"] = {"de/index.html": "same"}
        with patch.object(deploy, "connect") as connect:
            self.assertEqual(deploy.upload_changed(self.state["files"], self.state), 0)
        connect.assert_not_called()

    def test_transient_transfer_reconnects_and_retries(self):
        self.build_files(["de/index.html"])
        broken = Mock(spec=self.ftp)
        broken.storbinary.side_effect = OSError("temporary connection failure")
        with patch.object(deploy, "connect", side_effect=[broken, self.ftp]), patch.object(deploy.time, "sleep"):
            self.assertEqual(deploy.upload_changed({"de/index.html": "new"}, self.state), 1)
        broken.close.assert_called_once()
        self.ftp.rename.assert_called_once()
        self.assertEqual(self.state["files"], {"de/index.html": "new"})

    def test_partial_failure_records_only_completed_files(self):
        self.build_files(["de/index.html", "ro/index.html"])
        self.ftp.rename.side_effect = [None, deploy.ftplib.error_perm("550 denied")]
        with patch.object(deploy, "connect", return_value=self.ftp):
            with self.assertRaises(deploy.ftplib.error_perm):
                deploy.upload_changed({"de/index.html": "first", "ro/index.html": "second"}, self.state)
        self.assertEqual(json.loads(self.state_path.read_text())["files"], {"de/index.html": "first"})

    def test_existing_directory_is_accepted_but_denied_directory_is_not(self):
        self.ftp.mkd.side_effect = deploy.ftplib.error_perm("550 exists")
        deploy.ensure_directory(self.ftp, deploy.PurePosixPath("/de/privacy"), {"/"})
        self.ftp.cwd.assert_any_call("/de/privacy")
        self.ftp.cwd.side_effect = deploy.ftplib.error_perm("550 denied")
        with self.assertRaises(deploy.ftplib.error_perm):
            deploy.ensure_directory(self.ftp, deploy.PurePosixPath("/denied"), {"/"})

    def test_retry_limit_does_not_advance_state(self):
        self.build_files(["de/index.html"])
        with patch.object(deploy, "connect", side_effect=OSError("offline")) as connect, patch.object(deploy.time, "sleep"):
            with self.assertRaises(OSError):
                deploy.upload_changed({"de/index.html": "new"}, self.state)
        self.assertEqual(connect.call_count, 3)
        self.assertFalse(self.state_path.exists())

    def test_dry_run_builds_with_production_settings_without_network_or_state_writes(self):
        self.build_files(["de/index.html", "ro/index.html"])
        with patch.object(deploy.sys, "argv", ["deploy", "--dry-run"]), patch.object(deploy.subprocess, "run", return_value=Mock(returncode=0)) as build, patch.object(deploy, "connect") as connect, patch.object(deploy.urllib.request, "urlopen") as http:
            deploy.main()
        self.assertEqual(build.call_args.args[0][-1], "build")
        environment = build.call_args.kwargs["env"]
        self.assertEqual(environment["SITE_URL"], deploy.ORIGIN)
        self.assertEqual(environment["BASE_PATH"], "/")
        self.assertEqual(environment["PUBLIC_ANALYTICS_ENABLED"], "true")
        connect.assert_not_called()
        http.assert_not_called()
        self.assertFalse(self.state_path.exists())

    def test_build_failure_never_connects_or_updates_state(self):
        with patch.object(deploy.sys, "argv", ["deploy"]), patch.object(deploy.subprocess, "run", return_value=Mock(returncode=1, stdout="Build error")), patch.object(deploy, "connect") as connect, patch.object(deploy.sys, "stderr", io.StringIO()):
            with self.assertRaisesRegex(RuntimeError, "nothing uploaded"):
                deploy.main()
        connect.assert_not_called()
        self.assertFalse(self.state_path.exists())

    def test_normal_deployment_only_checks_homepage(self):
        self.build_files(["de/index.html", "ro/index.html"])
        response = Mock()
        response.__enter__ = Mock(return_value=Mock(status=200))
        response.__exit__ = Mock(return_value=False)
        with patch.object(deploy.sys, "argv", ["deploy"]), patch.object(deploy.subprocess, "run", return_value=Mock(returncode=0)), patch.object(deploy.subprocess, "check_output", side_effect=["commit\n", ""]), patch.object(deploy, "connect", return_value=self.ftp), patch.object(deploy.urllib.request, "urlopen", return_value=response) as http:
            deploy.main()
        http.assert_called_once_with("https://ottoschuster.de/", timeout=20)
        self.assertEqual(json.loads(self.state_path.read_text())["commit"], "commit")
        self.assertEqual(self.ftp.rename.call_count, 2)

    def test_missing_state_means_full_upload_and_wrong_target_is_rejected(self):
        self.assertEqual(deploy.load_state(), self.state)
        deploy.save_state({**self.state, "target": "https://another-site.example"})
        with self.assertRaises(ValueError):
            deploy.load_state()


if __name__ == "__main__":
    unittest.main()
