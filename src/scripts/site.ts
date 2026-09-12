const header = document.querySelector<HTMLElement>("[data-site-header]");

const updateHeader = () => {
  header?.classList.toggle("is-compact", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
