// ============================================================
// John Kenneth Lopez — Portfolio scripts
// Handles: mobile nav, theme toggle, scroll-reveal animation
// ============================================================

(function () {
  "use strict";

  /* ---------- mobile navigation ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  function closeMenu() {
    hamburger.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }

  function toggleMenu() {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- theme toggle ---------- */
  const THEME_KEY = "jkl-portfolio-theme";
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      themeToggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      themeToggle.setAttribute("aria-pressed", "false");
    }
  }

  // Note: no localStorage — theme resets to dark (the default) on reload.
  let currentTheme = "dark";
  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".section__inner > *, .project-card, .info-card, .fact-card, .path__step, .contact-card"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // No IntersectionObserver support, or reduced motion preferred: show everything.
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }
})();
