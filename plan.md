# Valo Website Revisions — Stepped Execution Plan

## Context

The Valo Coffee site (`/Users/brosiah/Git/Valo/`) runs as four pages — Home, Locations, Menu, Philosophy — with duplicated footer location cards, a single hero image, a separate full-menu page, and a separate philosophy page. The `valo_website_revisions_claude_code_brief.md` directs us to consolidate into a single-page experience: strip the top nav, surface the full menu without leaving the homepage, move philosophy onto the homepage, simplify the footer, and add a hero carousel.

Most of the brief's *content* work already shipped (status lines, weekly hours, Bean Menu label, expanded Coffee section, Optional flat list, Jamaica removed, Tasting Experience note at top, Coffee Beans copy, philosophy Q&A wording). The remaining work is **structural** and is sequenced below as 8 ordered, independently shippable steps. The site stays fully working for visitors after every step.

**Locked-in decisions** (confirmed with the user):
- Hero: build the full carousel now; every slide uses the existing image as a placeholder (real images swapped in later, no markup changes).
- Full menu: opens in an accessible **modal** from the homepage.
- Legacy pages: become meta-refresh **redirect stubs** to homepage anchors.
- Menu data: centralized into `data/menu.json`, modal rendered from it.
- Copy: philosophy eyebrow = **"Our Approach"**; hero buttons = **"Visit Valo"** / **"See the menu"**; modal title = **"Full menu"**; modal close = **X icon** button.

---

## STEP 1 — Add `data/menu.json`

**Goal:** Centralize all menu content into one data file. No behavior change yet (nothing reads it until Step 2).

**File:** `data/menu.json` (new)

**Content:** lift verbatim from [menu.html:198-290](menu.html#L198-L290):
```json
{
  "coffee": {
    "label": "Coffee",
    "items": [
      { "name": "latte", "price": "7" },
      { "name": "coffee", "price": "5" },
      { "name": "cappuccino", "price": "7", "options": "traditional or extra milk" },
      { "name": "flat white", "price": "7", "options": "traditional or extra milk" },
      { "name": "cortado", "price": "5–7", "options": "traditional or extra milk" },
      { "name": "espresso", "price": "5" }
    ]
  },
  "beans": {
    "label": "Bean Menu",
    "note": "Each tasting note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans.",
    "items": [
      { "name": "dark & smoky", "origin": "colombia" },
      { "name": "peanut butter", "origin": "brazil" },
      { "name": "peach", "origin": "colombia" },
      { "name": "strawberry", "origin": "honduras" },
      { "name": "apple spice", "origin": "colombia" },
      { "name": "decaf", "origin": "mexico" }
    ]
  },
  "optional": {
    "label": "Optional",
    "items": ["vanilla", "mocha", "caramel", "sugar", "brown sugar", "honey", "maple", "splenda", "stevia"]
  },
  "notCoffee": {
    "label": "Not coffee",
    "items": [
      { "name": "cocoa latte", "price": "5" },
      { "name": "chai latte", "price": "7" },
      { "name": "matcha latte", "price": "7" },
      { "name": "ube latte", "price": "7" },
      { "name": "golden latte", "price": "7" },
      { "name": "butterfly lemonade", "price": "7" },
      { "name": "hibiscus yuzu", "price": "7" }
    ]
  },
  "tasting": {
    "label": "Tasting experience",
    "availability": "Tasting experiences are available at Valo Sit-Down only.",
    "items": [
      { "name": "coffee tasting experience", "price": "19", "desc": "Four coffees of your choice, served as a pour-over flight, then any full-size drink from the menu." },
      { "name": "not coffee tasting experience", "price": "19", "desc": "Four not coffee lattes of your choice, served as a sample flight, then any full-size drink from the menu." }
    ]
  },
  "beansForSale": {
    "label": "Coffee beans",
    "sublabel": "half pound bag",
    "items": [
      { "name": "dark & smoky", "price": "22" },
      { "name": "peanut butter", "price": "22" },
      { "name": "peach", "price": "22" },
      { "name": "strawberry", "price": "22" },
      { "name": "apple spice", "price": "22" },
      { "name": "decaf", "price": "22" }
    ],
    "note": "Available at both locations. For custom grinding and vacuum sealing, visit Valo Sit-Down."
  }
}
```

**Verify:** JSON parses (`python3 -m json.tool data/menu.json`). Item names/prices match `menu.html` exactly.

---

## STEP 2 — Build the menu modal (markup + CSS + JS)

**Goal:** The homepage "View full menu" button opens the full menu in an accessible modal. The simplified Coffee + Beans preview on the page stays as-is.

**File: `index.html`**
- In the Menu preview section ([index.html:271-273](index.html#L271-L273)), replace `<a class="button button-secondary" href="menu.html">View full menu</a>` with `<button class="button button-secondary" type="button" data-menu-open>View full menu</button>`.
- Append before `</main>`:
```html
<div class="menu-modal" id="menu-modal" role="dialog" aria-modal="true" aria-labelledby="menu-modal-title" hidden>
  <div class="menu-modal-backdrop" data-menu-close></div>
  <div class="menu-modal-card" role="document">
    <div class="menu-modal-header">
      <h2 id="menu-modal-title" class="eyebrow">Full menu</h2>
      <button class="menu-modal-close" type="button" aria-label="Close menu" data-menu-close>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false">
          <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
    </div>
    <div class="menu-modal-body" data-menu-body>
      <!-- No-JS fallback: paste the full static menu markup from menu.html:196-292 here verbatim. -->
    </div>
  </div>
</div>
```
- Add `<script src="assets/js/menu.js?v=1" defer></script>` after the existing `status.js` include.

**File: `assets/js/menu.js`** (new) — skeleton:
```js
(function () {
  const modal = document.getElementById('menu-modal');
  if (!modal) return;
  const body = modal.querySelector('[data-menu-body]');
  const openers = document.querySelectorAll('[data-menu-open]');
  const closers = modal.querySelectorAll('[data-menu-close]');
  let lastFocused = null;

  fetch('/data/menu.json')
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((data) => { body.innerHTML = renderMenu(data); })
    .catch(() => { /* keep static fallback markup */ });

  function renderMenu(data) {
    // Build the same .menu-card / .menu-section-block / .paper-menu structure
    // that menu.html uses today so existing CSS styles it unchanged.
    // Order: Coffee (drinks + Bean Menu + Optional), Not coffee, Tasting experience, Coffee beans.
  }

  function openModal() {
    if (!modal.hasAttribute('hidden')) return;
    lastFocused = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.classList.add('menu-modal-open');
    modal.querySelector('.menu-modal-close').focus();
    document.addEventListener('keydown', onKeydown);
  }
  function closeModal() {
    if (modal.hasAttribute('hidden')) return;
    modal.setAttribute('hidden', '');
    document.body.classList.remove('menu-modal-open');
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }
  function onKeydown(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
    if (e.key === 'Tab') trapFocus(e);
  }
  function trapFocus(e) {
    const f = modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  openers.forEach((b) => b.addEventListener('click', openModal));
  closers.forEach((b) => b.addEventListener('click', closeModal));
  if (new URLSearchParams(location.search).get('menu') === 'full') openModal();
})();
```

**File: `assets/css/styles.css`** — append:
- `.menu-modal` — `position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center;` (hidden via `[hidden]` attribute, no extra rule).
- `.menu-modal-backdrop` — `position: absolute; inset: 0; background: rgba(0,0,0,.7);`
- `.menu-modal-card` — white; `position: relative;` `max-width: 880px; width: calc(100% - var(--space-6)); max-height: min(90vh, 90dvh); overflow-y: auto; border-radius: 2px;` inner padding via spacing tokens.
- `.menu-modal-header` — `position: sticky; top: 0;` white bg; flex row, space-between; thin bottom border.
- `.menu-modal-close` — `min-width: 44px; min-height: 44px;` no pill; `touch-action: manipulation;`
- `body.menu-modal-open { overflow: hidden; }`
- `@media (max-width: 600px)` — `.menu-modal-card { max-width: 100%; width: 100%; max-height: 100vh; border-radius: 0; }`

**Verify** (`python3 -m http.server 8000`, open `http://localhost:8000/`): button opens modal; full menu renders matching `menu.html`; Escape / X / backdrop close it; focus moves to close button on open and returns to the trigger on close; Tab cycles inside the modal only; background scroll locked; `http://localhost:8000/?menu=full` auto-opens the modal; with JS disabled the fallback static menu is present in the DOM.

---

## STEP 3 — Convert the hero to a carousel

**Goal:** Replace the single hero image with a 3-slide auto-rotating carousel. All slides use the existing image for now (distinct alt text). Rename the two CTA buttons.

**File: `index.html`** — replace the hero `<picture>` block ([index.html:173-188](index.html#L173-L188)) with:
```html
<section class="hero home-hero">
  <div class="hero-carousel" data-carousel data-interval="6000">
    <ul class="hero-slides" data-slides>
      <li class="hero-slide is-active" aria-roledescription="slide" aria-label="1 of 3">
        <picture class="hero-media">
          <source media="(max-width: 760px)" srcset="assets/images/Coffee_look_mobile.jpeg" />
          <source media="(min-width: 761px)" srcset="assets/images/coffee_look_desktop.jpeg" />
          <img src="assets/images/coffee_look.jpg" alt="Espresso and milk poured into a Valo coffee cup." loading="eager" decoding="async" fetchpriority="high" width="3872" height="2178" />
        </picture>
      </li>
      <li class="hero-slide" aria-roledescription="slide" aria-label="2 of 3" aria-hidden="true">
        <picture class="hero-media">
          <source media="(max-width: 760px)" srcset="assets/images/Coffee_look_mobile.jpeg" />
          <source media="(min-width: 761px)" srcset="assets/images/coffee_look_desktop.jpeg" />
          <img src="assets/images/coffee_look.jpg" alt="A coffee handoff at Valo Curbside." loading="lazy" decoding="async" width="3872" height="2178" />
        </picture>
      </li>
      <li class="hero-slide" aria-roledescription="slide" aria-label="3 of 3" aria-hidden="true">
        <picture class="hero-media">
          <source media="(max-width: 760px)" srcset="assets/images/Coffee_look_mobile.jpeg" />
          <source media="(min-width: 761px)" srcset="assets/images/coffee_look_desktop.jpeg" />
          <img src="assets/images/coffee_look.jpg" alt="Inside Valo Sit-Down at the Prescott Resort." loading="lazy" decoding="async" width="3872" height="2178" />
        </picture>
      </li>
    </ul>
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="container hero-content">
    <h1 class="hero-headline">The best coffee in Arizona</h1>
    <p class="hero-sub">Open daily</p>
    <div class="button-row">
      <a class="button" href="#today">Visit Valo</a>
      <a class="button button-secondary" href="#menu">See the menu</a>
    </div>
  </div>
</section>
```
- Add `<script src="assets/js/carousel.js?v=1" defer></script>` alongside the other script includes.

**File: `assets/js/carousel.js`** (new), ~60 lines:
- For each `[data-carousel]`: read `data-interval` (default 6000), collect `[data-slides] > li.hero-slide`.
- If ≤1 slide OR `matchMedia('(prefers-reduced-motion: reduce)').matches` → do nothing (first slide stays visible, no rotation).
- Else every interval: move `is-active` to the next slide, set `aria-hidden="true"` on the outgoing and remove it from the incoming; wrap last → first.
- Pause on `mouseenter`/`focusin`, resume on `mouseleave`/`focusout`; pause on `document.visibilitychange` when hidden.

**File: `assets/css/styles.css`** — append:
- `.hero-carousel` — `position: absolute; inset: 0;` (mirrors today's `.hero-media`).
- `.hero-slides` — `list-style: none; margin: 0; padding: 0; position: absolute; inset: 0;`
- `.hero-slide` — `position: absolute; inset: 0; opacity: 0; transition: opacity 800ms ease;`
- `.hero-slide.is-active` — `opacity: 1;`
- `.hero-slide picture, .hero-slide img` — `width: 100%; height: 100%; object-fit: cover; display: block;`
- `@media (prefers-reduced-motion: reduce) { .hero-slide { transition: none; } }`

**Verify:** three slides in the DOM; inspect that `is-active` moves through the `<li>`s every ~6s; hover/focus pauses; DevTools "Emulate prefers-reduced-motion: reduce" stops rotation and disables fade; no layout shift on load; hero headline + buttons render above the image with correct contrast; "Visit Valo" → scrolls to `#today`, "See the menu" → scrolls to `#menu`.

---

## STEP 4 — Move philosophy onto the homepage

**Goal:** Replace the short philosophy preview with the full philosophy content. No separate philosophy experience.

**File: `index.html`** — replace the philosophy preview section ([index.html:277-289](index.html#L277-L289)) with:
- Eyebrow: `Our Approach`
- Lede (brief §12): *"Every drink on our menu is made with pure, raw ingredients. We do not add anything else, so the bean's naturally occurring flavors can be enjoyed clearly."*
- "What is coffee?" heading + answer paragraph (verbatim from [philosophy.html:122-123](philosophy.html#L122-L123)).
- Three `<details class="philosophy-detail">` blocks — "Where do the tasting notes come from?", "Why is the menu so simple?", "How do we make espresso?" — verbatim from [philosophy.html:131-150](philosophy.html#L131-L150).
- Keep the section `id="philosophy"` (the redirect stub in Step 7 targets `/#philosophy`).
- Reuse existing classes (`.philosophy-detail`, `.philosophy-detail-body`, `.philosophy-body`, `.philosophy-lede`, `.eyebrow`) — no new CSS.
- Drop the "Read our philosophy" link.

**Verify:** section renders under "Our Approach"; collapsibles start closed and toggle on click; no "How do we make the perfect drink?" anywhere; no CSS regression (classes already exist in styles.css).

---

## STEP 5 — Strip header nav + simplify footer

**Goal:** Header = brand mark only. Footer = phone, email, copyright only.

**File: `index.html`**
- Header ([index.html:151-166](index.html#L151-L166)): remove the `<nav class="site-nav">` block and the `nav-toggle` `<button>`. Keep `.site-header` / `.site-header-inner` / `.brand`.
- Footer ([index.html:293-327](index.html#L293-L327)): replace the entire `.footer-grid` + `.footer-bottom` with:
```html
<div class="footer-simple">
  <a href="tel:+19289106087">928-910-6087</a>
  <a href="mailto:support@valocoffee.com">support@valocoffee.com</a>
  <span>&copy; Valo Coffee</span>
</div>
```

**File: `assets/css/styles.css`** — add `.footer-simple` (horizontal flex row, `gap: var(--space-5)`, centered; stacks to column under 600px). Leave orphaned `.nav-toggle`/`.site-nav` rules in place (harmless; prune later).

**Verify:** header shows only the logo (no hamburger, no links) at desktop and 375px; footer shows only the three items; no location cards/addresses/hours/directions/"Prescott, Arizona"; in-page anchor scrolling (`#today`, `#menu`, `#philosophy`) still works from hero + location-card buttons.

---

## STEP 6 — Update schema.org in `index.html`

**Goal:** Keep structured-data coverage complete once the legacy pages become redirects.

**File: `index.html`** — in the JSON-LD `@graph` ([index.html:41-141](index.html#L41-L141)):
1. Both `CafeOrCoffeeShop.url`: `/locations.html#curbside|resort` → `https://valocoffee.com/#curbside|resort`.
2. Both `CafeOrCoffeeShop.hasMenu`: `/menu.html` → `https://valocoffee.com/#menu`.
3. Add the `Menu` entity (all 6 MenuSections + items + prices) lifted from [menu.html:49-159](menu.html#L49-L159); set `@id` to `https://valocoffee.com/#menu`.
4. Add the `FAQPage` entity (4 Question/Answer pairs) from [philosophy.html:49-85](philosophy.html#L49-L85) — they already match the on-page philosophy content.
5. Add `id="curbside"` / `id="resort"` to the two `.today-card` `<article>`s so the schema URLs resolve to real anchors (does not conflict with `status.js` selectors).

**Verify:** paste rendered `index.html` into Google Rich Results Test — detects Organization, WebSite, 2× CafeOrCoffeeShop, Menu, FAQPage with no errors.

---

## STEP 7 — Replace legacy pages with redirect stubs

**Goal:** Old URLs keep working but land on the consolidated homepage. No fragmented alternate experience.

**Files:** overwrite each entirely with a stub (example for `philosophy.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=/#philosophy" />
  <link rel="canonical" href="https://valocoffee.com/" />
  <meta name="robots" content="noindex" />
  <title>Valo Coffee</title>
  <script>location.replace('/#philosophy');</script>
</head>
<body><p>Redirecting to <a href="/#philosophy">Valo Coffee</a>.</p></body>
</html>
```
- `locations.html` → `/#today`
- `philosophy.html` → `/#philosophy`
- `menu.html` → `/?menu=full#menu` (the `?menu=full` query makes `menu.js` auto-open the modal)

The inline `location.replace` is a hash-preserving safety net on top of the meta refresh; both work without user interaction, `replace` adds no back-button trap.

**Verify:** visit `/locations.html`, `/menu.html`, `/philosophy.html` directly — each lands on the right homepage section near-instantly; `/menu.html` ends with the modal open; browser Back button returns to wherever the visitor came from (no redirect loop).

---

## STEP 8 — Trim `sitemap.xml` + check `404.html`

**Goal:** Discoverability reflects the single-page structure.

**Files:**
- `sitemap.xml`: remove the `<url>` entries for `/locations.html`, `/menu.html`, `/philosophy.html`; keep `/` and `/404.html`; bump `<lastmod>` on `/` to today (2026-05-15).
- `404.html`: read it; if it carries the old multi-link nav, strip it to the brand-only header to match Step 5. If already minimal, no change.

**Verify:** `sitemap.xml` is valid XML and lists only live URLs; `404.html` header matches the new minimal header.

---

## Edge cases & risks

- **Hash-preserving redirects:** meta refresh + inline `location.replace` both keep the `#anchor`. Worst case (both stripped) the visitor still lands on the homepage — degraded, not broken.
- **`?menu=full` deep-link:** `#menu` scrolls the page and `menu.js` opens the modal; closing returns the visitor to the Menu section. No history state pushed, so no URL junk.
- **Modal no-JS:** static fallback markup inside `[data-menu-body]` keeps the full menu in the DOM for crawlers/no-JS; the JSON-LD `Menu` entity carries complete data regardless.
- **Carousel placeholder phase:** identical images make rotation invisible; no dots are rendered (dots cycling on a static image would look broken). Rotation still runs so the mechanism is exercised in production from day one.
- **Reduced motion:** carousel respects it twice — JS skips rotation, CSS drops the fade. Modal has no custom animation.
- **Hero preload:** `<head>`'s `<link rel="preload" as="image">` still hits because slide 1's eager `<img>` references the same files. No `<head>` change needed.
- **iOS `vh`:** modal uses `min(90vh, 90dvh)` so the iOS dynamic toolbar doesn't overflow the card.
- **`status.js` untouched:** it keys off `[data-status-headline]`/`[data-status-hours]` inside `.today-card[data-location]`; adding `id="curbside|resort"` to those articles is additive.

## What is NOT changing

- The single hero image asset (carousel infra goes in; real images are a follow-up).
- `assets/js/status.js`, `data/locations.json` — already correct.
- Paper-menu visual styling — modal reuses the same classes.
- Visit Valo card copy.
- `CLAUDE.md` — needs a v0.7 rewrite (follow-up, see below).

## Final end-to-end verification (after all 8 steps)

Run `python3 -m http.server 8000`, open `http://localhost:8000/`:
1. Header: brand only. Footer: phone/email/copyright only.
2. Hero carousel rotates (invisibly), pauses on hover/focus, respects reduced motion, no layout shift; CTAs are "Visit Valo" / "See the menu" and scroll in-page.
3. "View full menu" opens the modal; full menu correct; Escape/X/backdrop close; focus trap + restore; scroll lock.
4. "Our Approach" section: lede + "What is coffee?" + three working collapsibles; no "perfect drink" section.
5. `/locations.html`, `/menu.html`, `/philosophy.html` redirect to `/#today`, `/?menu=full#menu` (modal open), `/#philosophy`.
6. JS off: menu preview, philosophy `<details>`, location cards (fallback hours) all still render; redirect stubs still work (meta refresh).
7. 375px + 200% zoom: no horizontal scroll, header/footer/modal/collapsibles all clean.
8. Google Rich Results Test on `index.html`: Organization, WebSite, 2× CafeOrCoffeeShop, Menu, FAQPage, no errors.
9. Cross-check brief §17 acceptance criteria — every box ticked except real carousel imagery (deferred follow-up).

## Critical files

- [index.html](index.html) — major: hero carousel, menu modal trigger + markup, philosophy section, header, footer, schema, scripts
- [menu.html](menu.html), [locations.html](locations.html), [philosophy.html](philosophy.html) — redirect stubs
- [data/menu.json](data/menu.json) — new
- [assets/js/carousel.js](assets/js/carousel.js) — new
- [assets/js/menu.js](assets/js/menu.js) — new
- [assets/css/styles.css](assets/css/styles.css) — hero carousel + modal + footer-simple
- [sitemap.xml](sitemap.xml), [404.html](404.html) — trim / header check

## Follow-ups (not in this pass)

- Rewrite `CLAUDE.md` v0.6 → v0.7 (single-page architecture) — it contradicts the new structure in §3, §5, §8.
- Source real hero images (curbside handoff, sit-down/tasting, Prescott Resort view, beans/flight) and swap into slides 2–3; add slide indicators once slides differ visually.
- Prune dead `.nav-toggle` / `.site-nav` CSS.

---

## v0.8 edit pass (2026-05-16)

Owner's 37-point revision list executed: sit-down location renamed **Valo Lab** sitewide
(`#resort` IDs kept), location cards de-addressed, two-line status (`Open now` / `Closes at …`),
Curbside collapses to `Open daily` / `7 AM to 6 PM`, full-menu modal restacked to one column,
menu fixes (black coffee, cortado $5, milk sub-lines removed), and a new bottom smart CTA →
**Visit modal** (`assets/js/visit.js`, reuses the menu-modal chrome; `status.js` now exposes
`window.ValoStatus`). `CLAUDE.md` bumped to spec v0.8.

**Deferred (later pass):** the Our Approach / philosophy rebuild (revision items 20–27 —
rename to "Our Philosophy", remove the accordion, reorder to five topics, move off-gassing to a
sourcing section, modern-espresso rewrite). Only the Valo Lab rename was applied inside the
philosophy answer text and FAQ JSON-LD this pass, per the owner's explicit instruction.
`COPY_DECK.md` left as a working draft.
