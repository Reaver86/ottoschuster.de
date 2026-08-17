const header = document.querySelector<HTMLElement>("[data-site-header]");
const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");

const updateHeader = () => {
  header?.classList.toggle("is-compact", window.scrollY > 24);
};

const setMenu = (open: boolean) => {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? menuToggle.dataset.closeLabel ?? "Close" : menuToggle.dataset.openLabel ?? "Open",
  );
  mobileNav.hidden = !open;
  document.body.classList.toggle("menu-open", open);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuToggle.focus();
  }
});

const desktopQuery = window.matchMedia("(min-width: 900px)");
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

const detailQuery = window.matchMedia("(max-width: 639px)");
const priceDetails = document.querySelectorAll<HTMLDetailsElement>("[data-price-details]");
const updatePriceDetails = (mobile: boolean) => {
  priceDetails.forEach((details) => {
    details.open = !mobile;
  });
};

updatePriceDetails(detailQuery.matches);
detailQuery.addEventListener("change", (event) => updatePriceDetails(event.matches));

const catalogue = document.querySelector<HTMLElement>("[data-price-catalogue]");

if (catalogue) {
  const search = catalogue.querySelector<HTMLInputElement>("[data-price-search]");
  const filters = Array.from(catalogue.querySelectorAll<HTMLButtonElement>("[data-price-filter]"));
  const entries = Array.from(catalogue.querySelectorAll<HTMLElement>("[data-price-entry]"));
  const count = catalogue.querySelector<HTMLElement>("[data-price-count]");
  const empty = catalogue.querySelector<HTMLElement>("[data-price-empty]");
  const list = catalogue.querySelector<HTMLElement>("[data-price-list]");
  const clear = catalogue.querySelector<HTMLButtonElement>("[data-price-clear]");
  let activeCategory = "all";

  const normalize = (value: string) =>
    value
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const updateResults = () => {
    const query = normalize(search?.value ?? "");
    let visible = 0;

    entries.forEach((entry) => {
      const inCategory = activeCategory === "all" || entry.dataset.category === activeCategory;
      const searchable = normalize(entry.dataset.search ?? "");
      const matchesQuery = !query || searchable.includes(query);
      const matches = inCategory && matchesQuery;
      entry.hidden = !matches;
      if (matches) visible += 1;
    });

    if (count) {
      const locale = document.documentElement.lang;
      count.textContent = locale === "ro"
        ? `${visible} ${visible === 1 ? "rezultat" : "rezultate"}`
        : `${visible} ${visible === 1 ? "Eintrag" : "Einträge"}`;
    }

    if (empty) empty.hidden = visible !== 0;
    if (list) list.hidden = visible === 0;
  };

  const setActiveCategory = (category: string, updateUrl = false) => {
    const matchingFilter = filters.find((filter) => filter.dataset.priceFilter === category);
    activeCategory = matchingFilter?.dataset.priceFilter ?? "all";

    filters.forEach((filter) => {
      const active = filter.dataset.priceFilter === activeCategory;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (activeCategory === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", activeCategory);
      }
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }

    updateResults();
  };

  search?.addEventListener("input", () => {
    const url = new URL(window.location.href);
    const searchTerm = search.value;
    if (searchTerm.trim()) {
      url.searchParams.set("search", searchTerm);
    } else {
      url.searchParams.delete("search");
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    updateResults();
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      setActiveCategory(filter.dataset.priceFilter ?? "all", true);
    });
  });

  clear?.addEventListener("click", () => {
    if (search) search.value = "";
    const url = new URL(window.location.href);
    url.searchParams.delete("category");
    url.searchParams.delete("search");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    setActiveCategory("all");
    search?.focus();
  });

  const initialUrl = new URL(window.location.href);
  const requestedCategory = initialUrl.searchParams.get("category") ?? "all";
  if (search) search.value = initialUrl.searchParams.get("search") ?? "";
  setActiveCategory(requestedCategory);
}
