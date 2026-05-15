/* Valo Coffee — hero carousel
 * Crossfades through the hero slides. No-JS / reduced-motion fallback:
 * the first slide (.is-active) stays visible and the carousel is static.
 */
(function () {
  "use strict";

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initCarousel(root) {
    const slides = Array.prototype.slice.call(
      root.querySelectorAll("[data-slides] > .hero-slide")
    );
    if (slides.length < 2 || reduceMotion) return;

    const interval = parseInt(root.getAttribute("data-interval"), 10) || 6000;
    let index = slides.findIndex((s) => s.classList.contains("is-active"));
    if (index < 0) index = 0;
    let timer = null;

    function show(next) {
      const current = slides[index];
      const upcoming = slides[next];
      current.classList.remove("is-active");
      current.setAttribute("aria-hidden", "true");
      upcoming.classList.add("is-active");
      upcoming.removeAttribute("aria-hidden");
      index = next;
    }

    function advance() {
      show((index + 1) % slides.length);
    }

    function start() {
      if (timer) return;
      timer = window.setInterval(advance, interval);
    }

    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    start();
  }

  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
})();
