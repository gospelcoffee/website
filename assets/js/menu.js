/* Valo Coffee — full menu modal
 * Renders /data/menu.json into the modal and handles open/close,
 * focus trap, Escape, scroll lock, and the ?menu=full deep link.
 * No-JS fallback: the modal body ships with the full static menu in the HTML.
 */
(function () {
  "use strict";

  const modal = document.getElementById("menu-modal");
  if (!modal) return;

  const body = modal.querySelector("[data-menu-body]");
  const openers = document.querySelectorAll("[data-menu-open]");
  const closers = modal.querySelectorAll("[data-menu-close]");
  let lastFocused = null;

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function coffeeSection(data) {
    const drinks = data.coffee.items
      .map((it) => {
        const option = it.options
          ? `<span class="row-option">${esc(it.options)}</span>`
          : "";
        return `<li class="menu-row"><span class="row-label-area"><strong class="label">${esc(it.name)}</strong>${option}</span><span class="meta meta-strong">${esc(it.price)}</span></li>`;
      })
      .join("");

    const beans = data.beans.items
      .map(
        (it) =>
          `<li class="menu-row"><strong class="label">${esc(it.name)}</strong><span class="meta">${esc(it.origin)}</span></li>`
      )
      .join("");

    const optional = data.optional.items
      .map((name) => `<li class="menu-row"><span class="label">${esc(name)}</span></li>`)
      .join("");

    return `
      <section class="menu-section-block">
        <h2 class="menu-section-label">${esc(data.coffee.label)}</h2>
        <div class="paper-menu">
          <div class="paper-menu-step paper-step-drink">
            <ul class="menu-list">${drinks}</ul>
          </div>
          <div class="paper-menu-step paper-step-bean">
            <p class="paper-menu-num">${esc(data.beans.label)}</p>
            <ul class="menu-list">${beans}</ul>
            <p class="menu-note" style="margin-top: var(--space-4)">${esc(data.beans.note)}</p>
          </div>
          <div class="paper-menu-optional">
            <p class="paper-menu-optional-label">${esc(data.optional.label)}</p>
            <ul class="menu-list">${optional}</ul>
          </div>
        </div>
      </section>`;
  }

  function notCoffeeSection(data) {
    const rows = data.notCoffee.items
      .map(
        (it) =>
          `<li class="menu-row"><span class="label">${esc(it.name)}</span><span class="meta meta-strong">${esc(it.price)}</span></li>`
      )
      .join("");
    return `
      <section class="menu-section-block not-coffee-card">
        <h2 class="menu-section-label">${esc(data.notCoffee.label)}</h2>
        <ul class="menu-list">${rows}</ul>
      </section>`;
  }

  function tastingSection(data) {
    const items = data.tasting.items
      .map(
        (it) => `
        <div class="resort-tasting-item">
          <div class="menu-row">
            <strong class="label">${esc(it.name)}</strong>
            <span class="meta meta-strong">${esc(it.price)}</span>
          </div>
          <p class="resort-tasting-desc">${esc(it.desc)}</p>
        </div>`
      )
      .join("");
    return `
      <section class="menu-section-block resort-tasting-card">
        <h2 class="menu-section-label">${esc(data.tasting.label)}</h2>
        <p class="resort-tasting-footnote" style="margin-bottom: var(--space-5)">${esc(data.tasting.availability)}</p>
        <div class="resort-tasting-items">${items}</div>
      </section>`;
  }

  function beansForSaleSection(data) {
    const rows = data.beansForSale.items
      .map(
        (it) =>
          `<li class="menu-row"><span class="label">${esc(it.name)}</span><span class="meta meta-strong">${esc(it.price)}</span></li>`
      )
      .join("");
    return `
      <section class="menu-section-block beans-card">
        <h2 class="menu-section-label">${esc(data.beansForSale.label)}</h2>
        <p class="paper-menu-num">${esc(data.beansForSale.sublabel)}</p>
        <ul class="menu-list">${rows}</ul>
        <p class="beans-card-footnote">${esc(data.beansForSale.note)}</p>
      </section>`;
  }

  function renderMenu(data) {
    return `<article class="menu-card menu-card-warm paper-menu-card">${coffeeSection(
      data
    )}${notCoffeeSection(data)}${tastingSection(data)}${beansForSaleSection(data)}</article>`;
  }

  fetch("data/menu.json", { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("menu fetch failed"))))
    .then((data) => {
      body.innerHTML = renderMenu(data);
    })
    .catch(() => {
      /* leave the static fallback menu in place */
    });

  function openModal() {
    if (!modal.hasAttribute("hidden")) return;
    lastFocused = document.activeElement;
    modal.removeAttribute("hidden");
    document.body.classList.add("menu-modal-open");
    const closeBtn = modal.querySelector(".menu-modal-close");
    if (closeBtn) closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeModal() {
    if (modal.hasAttribute("hidden")) return;
    modal.setAttribute("hidden", "");
    document.body.classList.remove("menu-modal-open");
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
      return;
    }
    if (e.key === "Tab") trapFocus(e);
  }

  function trapFocus(e) {
    const focusables = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  openers.forEach((b) => b.addEventListener("click", openModal));
  closers.forEach((b) => b.addEventListener("click", closeModal));

  if (new URLSearchParams(location.search).get("menu") === "full") {
    openModal();
  }
})();
