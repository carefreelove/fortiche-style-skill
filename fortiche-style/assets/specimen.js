/* Optional enhancement. All artwork, links and project details work without JS. */
(() => {
  const root = document.querySelector(".ft");
  if (!root) return;

  const menu = root.querySelector("#site-menu");
  const trigger = root.querySelector(".ft-menu-trigger");
  const closeButton = menu?.querySelector(".ft-menu-close");
  if (menu && trigger && closeButton && typeof menu.showModal === "function") {
    let destination = null;
    let previousOverflow = "";

    trigger.addEventListener("click", () => {
      destination = null;
      previousOverflow = document.body.style.overflow;
      menu.showModal();
      document.body.style.overflow = "hidden";
      trigger.setAttribute("aria-expanded", "true");
    });
    closeButton.addEventListener("click", () => menu.close());
    menu.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const controls = [...menu.querySelectorAll("button:not([disabled]), a[href]")];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    menu.addEventListener("close", () => {
      document.body.style.overflow = previousOverflow;
      trigger.setAttribute("aria-expanded", "false");
      (destination || trigger).focus({ preventScroll: true });
      destination = null;
    });
    menu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        destination = document.getElementById(link.hash.slice(1));
        menu.close();
      });
    });
    trigger.hidden = false;
    trigger.closest("header").dataset.enhanced = "true";
  }

  const filters = root.querySelector(".ft-filters");
  const count = root.querySelector("#work-count");
  const projects = [...root.querySelectorAll(".ft-project[data-kind]")];
  if (filters && count && projects.length) {
    const buttons = [...filters.querySelectorAll("button[data-filter]")];
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.filter;
        let visible = 0;
        projects.forEach((project) => {
          const matches = category === "all" || project.dataset.kind === category;
          project.hidden = !matches;
          if (matches) visible += 1;
        });
        buttons.forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        count.textContent = `显示 ${visible} / ${projects.length} 组作品`;
      });
    });
    filters.hidden = false;
  }
})();
