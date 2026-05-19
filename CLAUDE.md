# Valo Coffee Website — Context, Rules, and Guidelines

Spec version: 0.8

This file is the source of truth for how the Valo Coffee website should look, sound, and behave. Read it before making changes.

> **v0.7 change:** The site is now a **single-page experience**. The homepage (`/`) contains everything — hero, locations, menu, and philosophy. `locations.html`, `menu.html`, and `philosophy.html` are no longer standalone pages; they are redirect stubs that send visitors to the matching homepage section. The full menu opens in an in-page modal, not a separate page.

> **v0.8 change:** The sit-down location is renamed **Valo Lab** (was "Valo Sit-Down"; the `#resort` element/anchor IDs and `data-location="resort"` are kept for compatibility). Location cards no longer show a street address. Open/closed status is now a **two-line** block (`Open now` / `Closes at 6 PM`, or `Closed now` / `Opens at 7 AM`), and Curbside's uniform week collapses to `Open daily` / `7 AM to 6 PM`. The full-menu modal is a single **stacked** column (Coffee → Bean Menu → Optional → Not coffee → Tasting → Coffee beans). Menu fixes: the $5 black drink is **black coffee**, **cortado is $5**, and the "traditional or extra milk" sub-lines are removed. A **bottom smart CTA** opens a new **Visit modal** (`#visit-modal`, reuses the menu-modal chrome) listing both locations. The **Our Approach / philosophy rebuild (revision items 20–27) is intentionally deferred** to a later pass — that section is unchanged except the Valo Lab name in its answer text and FAQ JSON-LD.

> **v0.8.1 change:** The philosophy section is now **"Our Philosophy"** (eyebrow + comment). A required **lexicon** is enforced sitewide: "flavor notes" (never "tasting notes"/"flavor profiles"), "naturally occurring flavor notes" (never "naturally occurring flavors"), "varietal/varietals" (never "variety/varieties"); the earlier approved-brief verbatim lock is retired. The collapsible "Where do the tasting notes come from?" is now "Where do the flavor notes come from?", and a **fifth** collapsible, **"Where does our coffee come from?"**, now carries owner-supplied sourcing/roasting copy (green-coffee buying, offsite Loring roasting, vacuum-sealed offgassing) and **is included in the FAQ JSON-LD**, so the FAQPage again maps **all five** questions 1:1. On-page + FAQ order: What is coffee? → Where do the flavor notes come from? → Where does our coffee come from? → How do we make espresso? → Why is the menu so simple? In the espresso answer, "smoothness" → "balance", and its "We offgas our beans…" sentence was removed so off-gassing lives only in "Where does our coffee come from?". A voice rule-fix pass also corrected "natural flavor notes" → "naturally occurring flavor notes" in "What is coffee?" and removed the discouraged "highlight" verb from "What is coffee?" ("…follows this philosophy") and the espresso answer ("lets the bean's naturally occurring flavor notes come through"), bringing the philosophy copy in line with the "don't take credit for the flavor" rule. Both location descriptions are unified to one canonical wording sourced from `data/locations.json` (`loc.blurb`), rendered identically in the Visit Valo cards and the Visit modal. A **"Closing soon"** status (primary line) now shows when a location is open and closes in 30 minutes or less (`data-status-state="closing-soon"`). Item 5 (off-gassing moved into a sourcing section) is complete: the copy lives in "Where does our coffee come from?" and has been removed from the espresso answer. Still **deferred pending owner copy:** the modern-espresso rebuild (item 6) and tightening "Why is the menu so simple?" (item 8); a broader philosophy voice/cadence harmonization across all five answers is also outstanding (only the objective rule-fixes were applied). The accordion/`<details>` format is **kept**.

---

## 1. What this project is

A static marketing website for Valo Coffee (Prescott, Arizona) hosted on GitHub Pages. Two physical locations: **Valo Curbside** (the drive-thru location, 1500 AZ-69D) and **Valo Lab** (the sit-down / tasting location, 1500 AZ-69, inside the Prescott Resort lobby). The sit-down location is never called "Valo" alone or "Valo Resort" — it's always **Valo Lab**. See the location naming rule in section 3.

The site exists to make visitors feel informed, excited, and driven to visit. It is not a directory listing, not an ordering app, and not a generic cafe site.

### Primary visitor outcomes

After visiting the site, a person should know:
1. Valo has the best coffee in Arizona.
2. Whether Valo Curbside is open right now (and if not, when it opens).
3. Whether Valo Lab is open right now (and if not, when it opens).
4. The difference between Valo Curbside and Valo Lab.
5. How to get to either location.
6. How to choose from the menu.
7. That the brand is premium, careful, precise, and worth visiting intentionally.

---

## 2. Tech stack and constraints

| Area            | Rule                                                 |
| --------------- | ---------------------------------------------------- |
| Hosting         | GitHub Pages                                         |
| Site type       | Static HTML, single-page                             |
| HTML            | Semantic HTML, real text (never images of text)      |
| CSS             | One main stylesheet                                  |
| JavaScript      | Minimal vanilla JS only — no frameworks              |
| Build process   | None                                                 |
| CMS             | None                                                 |
| Browsers        | Safari, Chrome, Edge, Firefox                        |
| Devices         | Mac, Windows, iPhone, Android                        |
| Accessibility   | Readable, zoom-friendly, no horizontal scrolling     |
| Maps            | No embedded Google Map as the primary visual         |

The site must remain understandable if JavaScript fails. With JS off: the carousel holds on the first slide, the full-menu modal still contains the complete static menu in the DOM, the philosophy collapsibles work (native `<details>`), the location cards show hard-coded fallback status/hours, the bottom smart-CTA degrades to a plain anchor to `#today` (the Visit modal also ships a static two-location body in the DOM), and the legacy redirect stubs still redirect (meta refresh).

### File structure

```text
/
  index.html          ← the entire site lives here
  locations.html      ← redirect stub → /#today
  menu.html           ← redirect stub → /?menu=full#menu
  philosophy.html     ← redirect stub → /#philosophy
  404.html
  CNAME
  robots.txt
  sitemap.xml
  plan.md             ← execution plan record (not visitor-facing)
  COPY_DECK.md        ← brand copy working draft (not visitor-facing)
  assets/
    css/styles.css
    js/status.js       ← two-line status + hours; exposes window.ValoStatus
    js/carousel.js     ← hero carousel rotation
    js/menu.js         ← full-menu modal + render from menu.json
    js/visit.js        ← bottom smart CTA + Visit modal (uses ValoStatus)
    images/...
    svg/...
  data/
    locations.json     ← hours + location facts
    menu.json          ← full menu content
```

---

## 3. Brand voice and copy rules

### Core public message

```text
The best coffee in Arizona.
```

The page opens light. The hero grounds the visitor in who Valo is and that Valo is open daily; the sections below answer where Valo is, when each location is open, what's on the menu, and why the coffee is different. Context-heavy taglines like "Chosen by flavor. Made with precision." or "We make the cup around the coffee you want to taste." are retired as required supporting copy.

Because the experience is now one page, the philosophy is no longer "behind a click" — it lives in the **Our Philosophy** section near the bottom of the homepage as a set of collapsible questions, so the deeper "why" is present but never forced on a first-time visitor.

### Voice

Valo should feel: **premium, minimal, precise, quiet, warm, confident, easy to read, easy to visit.**

Valo should NOT feel: busy, generic, trendy, gimmicky, colorful, app-like, over-explained, unclear.

### Copy rules

- **No en-dashes or em-dashes in site copy.** Never use `–` (en-dash, `&ndash;`) or `—` (em-dash, `&mdash;`) as a punctuation mark in prose, headlines, eyebrows, notes, or any visitor-facing copy. The only exceptions are time ranges (`7 AM – 6 PM`) and number ranges (`$5–10`). For pauses or asides, use a comma, colon, period, or rephrase. For separators between a title and a price, use a middot (`·`, `&middot;`), parentheses, or restructure into separate elements. This rule applies to every site page; spec docs may use dashes in technical prose.
- **Don't take credit for the flavor.** Valo does not "highlight," "bring out," or "enhance" the flavors of its ingredients. The flavor is already in the ingredient. Our role is restraint — we don't add anything that would distract from it. The point of that restraint is the *customer's enjoyment*: pure ingredients can be enjoyed clearly. Use verbs that describe the customer's experience (enjoyed clearly, enjoyed purely, experienced cleanly), what the flavor does (comes through, emerges, stays clear), and our restraint (we never add, we don't distract). Avoid verbs that put Valo in the active position of producing flavor (highlight, bring out, enhance, draw out, accentuate, amplify). (The earlier "approved-brief verbatim lock" on the Our Philosophy copy was **retired in v0.8.1** — the owner has directed the lexicon corrections below, so philosophy copy is edited like the rest of the site.)
- **Required lexicon (v0.8.1).** Use these exact terms in all visitor copy and JSON-LD:
  - **"flavor notes"** — never "tasting notes" or "flavor profiles".
  - **"naturally occurring flavor notes"** — never "naturally occurring flavors".
  - **"varietal" / "varietals"** — never "variety" / "varieties" (when referring to coffee/bean kinds).
  - Still avoid the bare noun phrase "natural flavor(s)" (the FDA-regulated ingredient-list term); say "naturally occurring flavor notes" or "the flavor that's already in the bean".
- **Be binary and direct.** No "maybe," "sort of," "one of the," "kind of," "could be," "a coffee experience for some people."
- **Location naming: Valo Curbside and Valo Lab.** The drive-thru location is **Valo Curbside**. The sit-down / tasting location is **Valo Lab** — never "Valo" alone, never "Valo Resort", never "Valo Sit-Down" (the old name, fully retired), never "Valo at the Prescott Resort" as the primary name. Valo Lab happens to be located inside the Prescott Resort lobby, but the location's *name* is Valo Lab. "Inside the Prescott Resort" is acceptable as a wayfinding sub-line but never as the location's positioning or primary label. Never write "Valo Resort" or near-forms like "Valo at Resort", "Valo's Resort", "the Valo Resort". Use **Valo Lab** consistently in eyebrows, headings, schema.org @name fields, and the tasting-experience availability note ("Tasting experiences are available at Valo Lab only."). The `#resort` element/anchor IDs and `data-location="resort"` are internal compatibility handles and stay as-is.
- **"drive-thru" not "drive-through."** And **"drive-thru speeds"** (plural) when describing the Curbside experience. Example: "Specialty coffee at drive-thru speeds." Never write "the best coffee at drive-thru speeds" — "best" in that phrase narrows the claim to "best for a drive-thru" rather than best overall.
- **Never claim drink scope.** Latte and black coffee are the two coffees the homepage preview lists because they're our most popular — they are not the totality. We can make any espresso drink to order (cortado, cappuccino, flat white, and more, all of which appear in the full menu). Copy must never say "two drinks", "only two coffees", or anything that implies the printed list is the limit.
- **Do not soften strong claims.** "Some of the best coffee in Prescott" → "The best coffee in Arizona." "A quality-focused beverage experience" → "Coffee chosen by flavor and made with precision."
- **"Best coffee" language is allowed.** There is no rule against it. Use with restraint and confidence — don't force it everywhere, don't avoid it.
- **Treat reviews as one Valo signal.** Reputation language refers to Valo as one brand, not separate reputations for our two locations.
- **Every major section should** tell visitors whether Valo is open, where to go, what makes Valo different, how to choose, or why Valo is worth visiting.

### Customer choice (critical)

Valo guides; it does not prescribe. The menu uses non-imperative category labels (Coffee, Bean Menu, Optional) and the structure does the guiding.

Avoid:
- "Order this."
- "You should get the latte."
- "First-time customers should order dark & smoky."
- Default recommendations or rankings of beans.
- Imperative menu labels ("pick a drink", "choose your bean", "pick add-ins", "choose your experience").

---

## 4. Visual design rules

### Palette

Primary: **black, white, warm off-white, soft gray.** Warmth comes from photography (wood, stone, glass, espresso, milk texture, natural light) — not from color accents.

Avoid: bright accents, gradients, color-coded sections, decorative graphics, loud seasonal colors.

### No pill-shaped UI — anywhere

No pill buttons, no pill badges, no pill labels, no pill status indicators, no pill filter chips, no app-style bubbles, no rounded tags.

Use instead: rectangular buttons (2px radius max), thin horizontal dividers, typographic hierarchy, clean spacing, precise alignment, quiet status rows.

#### Open/closed status

Status is a quiet two-line typographic block (a display status line + a smaller sub-line, followed by the hours list), never a rounded `[ OPEN NOW ]` pill or colored badge. Status must be readable without relying on color.

### Spacing tokens (required)

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
}
```

No random spacing values. The paper menu's calm, controlled padding is the reference. Never crowded, never loose, always exact.

### Typography

System fonts. Use `clamp()` for fluid sizing. No tiny menu text, no decorative fonts, no long paragraphs in the hero, no low-contrast gray body copy. Token scale: `--text-xs` through `--text-xl` (see `styles.css`).

### Buttons

Rectangular, restrained, easy to tap. `min-height: 44px`. Border-radius max 2px. Black primary, transparent + black border for secondary. `touch-action: manipulation`.

**Stacking on mobile:** in any `.button-row` below 600px viewport width, buttons switch to a single-column stack and stretch to full container width so the primary and secondary buttons are visually identical in size. The primary stays on top (first in source order) and the secondary sits below it. Above 600px, buttons sit side-by-side with their natural widths.

### Hero carousel

- The hero is a crossfade carousel of full-bleed slides (`.hero-carousel > ul.hero-slides > li.hero-slide`), with the dark gradient overlay and the headline/sub/buttons layered on top exactly as the single-image hero was.
- Slide 1 is `is-active` and uses `loading="eager" fetchpriority="high"`; later slides are `loading="lazy"` and `aria-hidden="true"` until active.
- Each slide has its own descriptive `alt` text describing the eventual subject, even while a placeholder image is used in every slot.
- `carousel.js` rotates `is-active` on `data-interval` (default 6000ms), wrapping last → first. It **does nothing** if there is ≤1 slide or if `prefers-reduced-motion: reduce` matches. Rotation pauses on hover, on keyboard focus within the hero, and when the tab is hidden.
- No visible controls (no dots, no prev/next) while every slide is the same placeholder image — dots cycling over an unchanging image reads as broken. Add slide indicators only once the slides differ visually.
- `width`/`height` on every `<img>` prevents layout shift; the `<head>` preload still targets slide 1's responsive sources.

### Full-menu modal

- The full menu opens in an in-page modal (`#menu-modal`, `role="dialog" aria-modal="true" aria-label="Full menu"`), triggered by the `[data-menu-open]` "View full menu" button in the menu section. It is not a separate page.
- Header: the Valo wordmark on the left and an X close button on the right. **Both** close the modal (both carry `data-menu-close`). The wordmark close target is `tabindex="-1"` + `aria-hidden="true"` (mouse convenience, no focus box, never announced). The X button (`.menu-modal-close`, `aria-label="Close menu"`) is the keyboard/screen-reader close affordance and is the element focused on open.
- Behavior (`menu.js`): focus moves to the X on open and returns to the trigger on close; `Tab` is trapped inside the modal; `Escape` and a backdrop click close it; `body.menu-modal-open` locks background scroll.
- The modal body is rendered from `data/menu.json`. The same complete menu also ships as static HTML inside the modal body as the no-JS / fetch-failure fallback (visible to crawlers regardless).
- Deep link: `/?menu=full` (used by the `menu.html` redirect stub) auto-opens the modal on load.
- Rectangular, 2px max radius, no pills. Card max-width 880px; full-screen below 600px.
- **Layout: single stacked column.** The Coffee block reads top-to-bottom — drink list, then **Bean Menu**, then **Optional** — never side-by-side columns. The major blocks then continue stacked: Coffee → Not coffee → Tasting experience → Coffee beans. Each stacked block carries the same `--space-7` rhythm and a thin top divider. Compact item lists (Optional, Not coffee, Coffee beans) may still flow in two CSS columns; the *major sections* are never placed side by side.

### Visit modal + bottom smart CTA

- After the philosophy section, before the footer, a single centered **smart CTA** (`#visit-cta`) holds exactly one primary button — no "Get directions"/"View menu" here. Its label is `Visit Valo today` when at least one location is open **and** stays open more than one hour; otherwise `Visit Valo`. With JS off it is a plain anchor to `#today`.
- The button opens the **Visit modal** (`#visit-modal`), which reuses the `.menu-modal*` chrome (same backdrop, 880px card, sticky header with wordmark + X close, 2px radius, `--space` rhythm, full-screen < 600px) and the same behavior contract (focus to X on open, restored on close, `Tab` trapped, `Escape` + backdrop close, `body.menu-modal-open` scroll lock) — implemented in `visit.js`.
- The modal stacks the two locations vertically. **Valo Lab is listed first only when it is open; otherwise Valo Curbside is first.** Each card: name, two-line status, hours, short description, and one primary button (`Visit Valo Lab` / `Visit Valo Curbside`) that opens that location's Google Maps directions in a new tab. Both primary buttons must be visible without scrolling on a typical viewport.

### Photography

Few, strong photos. Subjects: paper menu, espresso being made, finished coffee, bean selection, curbside arrival, view from inside the Prescott Resort, tasting experience, customer handoff. The carousel currently uses one approved placeholder image in every slide; real images get swapped in slot-by-slot with no markup change.

Avoid: cluttered counters, syrup bottles as hero, busy cafe scenes, novelty drinks, generic stock, muddy interiors. One excellent image > six average ones.

---

## 5. Site structure (single page)

| URL                | Behavior                                                       |
| ------------------ | -------------------------------------------------------------- |
| `/`                | The entire site: hero, Visit Valo, menu, Our Philosophy, footer |
| `/locations.html`  | Redirect stub → `/#today`                                       |
| `/menu.html`       | Redirect stub → `/?menu=full#menu` (opens the full-menu modal)  |
| `/philosophy.html` | Redirect stub → `/#philosophy`                                  |
| `/404.html`        | Not-found page, `noindex, follow`, brand-only header            |

### Homepage sections (in order)

1. **Header** — the Valo wordmark only, on a clean white bar. No navigation links, no hamburger, no pills. The header is intentionally not a multi-page nav: the page is one scroll and the section CTAs do the moving.
2. **Hero** — full-bleed carousel (section 4 "Hero carousel") with the dark gradient overlay. Content: headline **"The best coffee in Arizona"** + a quiet uppercase sub **"Open daily"** + two buttons: **"Visit Valo"** (scrolls to `#today`) and **"See the menu"** (scrolls to `#menu`). Premium and quiet, never a marketing-template feel.
3. **Visit Valo** — anchor `#today` (id kept stable; user-facing eyebrow is "Visit Valo"). The visitor's complete answer for "can I visit, and how do I get there?" Two location cards (`#curbside`, `#resort`), Curbside first in source order. Each card: location name, independent two-line open/closed status, hours list (both generated by `status.js` from `data/locations.json`, with hard-coded fallback text), short positioning blurb, a "Get directions" button (opens Google Maps in a new tab), and a "View menu" button that scrolls to `#menu`. **No visible street address** on the card (the JSON-LD still carries the address for SEO).
4. **Menu preview** — anchor `#menu`, on the warm paper background (`section-warm`). No eyebrow/heading — the section opens directly with the **Coffee** group so it reads as a menu, not a labeled website section. Two groups: **Coffee** (latte 7, black coffee 5) and **Beans** (the six beans with origins) plus the bean note. Never claim scope. A **"View full menu"** button (`[data-menu-open]`) opens the full-menu modal (section 4) — it does not navigate.
5. **Our Philosophy** — anchor `#philosophy`, the last content section. Eyebrow **"Our Philosophy"**, then the opening lede ("Every drink on our menu is made with pure, raw ingredients. We do not add anything else, so the bean's naturally occurring flavor notes can be enjoyed clearly."), then **five** collapsible `<details class="philosophy-detail">` questions, in order: **What is coffee?** → **Where do the flavor notes come from?** → **Where does our coffee come from?** → **How do we make espresso?** → **Why is the menu so simple?** All start collapsed and use the same small-caps summary styling with a `+` that flips to `−`. All five are populated and mapped 1:1 in the FAQ JSON-LD. There is no separate philosophy page and no "Read our philosophy" link. (Further rebuilds — modern-espresso rewrite, tightening "Why is the menu so simple?" — remain **deferred**; see the v0.8.1 note.)
6. **Bottom smart CTA** — `#visit-cta`, one centered primary button that opens the Visit modal (see section 4 "Visit modal + bottom smart CTA"). No other buttons in this section.
7. **Footer** — phone, email, copyright only (`.footer-simple`): `928-910-6087` / `support@valocoffee.com` / `© Valo Coffee`. No location cards, addresses, hours, "Get directions" links, or "Prescott, Arizona" — that information is not duplicated here because the Visit Valo section already carries it in full.

### Legacy redirect stubs

`locations.html`, `menu.html`, `philosophy.html` are each a ~12-line stub: `<meta http-equiv="refresh">` to the target, `<link rel="canonical" href="https://valocoffee.com/">`, `<meta name="robots" content="noindex">`, and an inline `location.replace()` as a hash-preserving safety net. They exist only to keep old bookmarks/inbound links working; they must never grow back into real pages.

### Stand-alone rule for the philosophy questions

Because the four questions are collapsed by default, each `<summary>` must make sense on its own without the answer visible. Name the subject in the question — "Why is the menu so simple?" not "Why so simple?". Questions are short (4–7 words) and end with a question mark.

---

## 6. Open/closed status system

Each location has independent status. Source of truth: `data/locations.json`. Times are in `America/Phoenix`.

Status format (two lines, generated by `assets/js/status.js`; a display `.status-line` over a quieter `.status-sub`, wrapped in `.today-status`):
- Currently open: `Open now` / `Closes at 6 PM`
- Open but closing in **30 minutes or less**: `Closing soon` / `Closes at 6 PM` (still `isOpen: true`; only the primary line changes).
- Closed (before opening, after close, or a fully closed day): `Closed now` / `Opens at 7 AM`. The sub-line uses the next actual opening: same day → `Opens at 7 AM`; next day → `Opens tomorrow at 7 AM`; further out → the full weekday name `Opens Wednesday at 7 AM`.
- `status.js` exposes `window.ValoStatus.getStatus(location)` → `{ isOpen, primary, secondary, closesInMinutes, closesSoon }`, reused by the bottom smart CTA and the Visit modal. `closesSoon` is true when open and `closesInMinutes <= 30`; the card/modal container gets `data-status-state="closing-soon"` in that case (still `open` otherwise). `closesInMinutes > 60` is the separate "stays open more than an hour" test for the CTA label.

Hours-list format (rendered immediately under the status block by `status.js` from `data/locations.json`):
- **Uniform week (Curbside):** when every day shares the same hours, collapse to exactly two lines — `Open daily` / `7 AM to 6 PM` (the word "to", a deliberate exception to the en-dash range format below).
- **Varied week (Valo Lab):** one line per group of consecutive days that share the same hours.
- Day labels use 3-letter abbreviations: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
- Range separator inside the day label is an en-dash with no spaces: `Mon–Sun`, `Wed–Fri`.
- Hour ranges use an en-dash with no spaces, AM/PM on both sides: `7 AM–6 PM`, `7 AM–10 AM`. When minutes are `:00`, omit them (`7 AM`, not `7:00 AM`).
- Closed days inside the list read `Mon–Tue: Closed`.
- Example output (Curbside): two lines — `Open daily` / `7 AM to 6 PM`.
- Example output (Valo Lab): three lines — `Mon–Tue: Closed` / `Wed–Fri: 7 AM–10 AM` / `Sat–Sun: 7 AM–2 PM`.

The dashes-in-copy rule (no dashes in prose) does not apply inside the hours/day-range format — these are time and number ranges where the en-dash is required.

### Static JSON
Hours live in `data/locations.json`. JS reads it client-side and renders status text. Each location card also ships hard-coded fallback status + hours so the section works with JS off.

### Future
A GitHub Action may later sync `data/locations.json` from Google Maps hours. **Never expose Google API keys in browser JS** — keys live in GitHub repository secrets, the Action writes the static JSON, the public site only reads it.

---

## 7. Accessibility & responsive

- **Never disable zoom.** Viewport: `width=device-width, initial-scale=1`. Never `user-scalable=no`.
- Must work at 320px wide, at 200% browser zoom, with larger OS text settings.
- No horizontal scrolling. No clipped text. No fixed-height content boxes.
- Real text always — never images of text.
- Tap targets ≥ 44px. `touch-action: manipulation` on links and buttons.
- Fluid layouts. `img, svg { max-width: 100%; height: auto; }`. `body { overflow-x: hidden; }`.
- **Visit Valo cards** sit side-by-side as a two-column grid on desktop and collapse to one column on small screens. Curbside is always first in source order, so it leads on both viewports.
- **Carousel**: respects `prefers-reduced-motion` (no rotation in JS, no fade transition in CSS — it holds on slide 1). Inactive slides are `aria-hidden="true"`.
- **Full-menu modal**: `role="dialog" aria-modal="true"` with an accessible name; focus moves in on open and is restored to the trigger on close; `Tab` is trapped; `Escape` closes; background scroll is locked. The X close button is keyboard-reachable and labeled; the wordmark close target is out of the tab order and `aria-hidden` (the X is the announced close).
- **Visit modal**: same dialog contract as the full-menu modal (focus moved in/restored, `Tab` trapped, `Escape` + backdrop close, scroll lock). The bottom smart CTA is a real anchor to `#today` so it still works with JS off.
- **Philosophy collapsibles**: native `<details>`/`<summary>` so they work without JS and are keyboard-operable.
- The legacy redirect stubs work without JS (meta refresh) and are `noindex`.

---

## 8. SEO

The site is a single indexable page. The redirect stubs and 404 are `noindex`.

**Required head tags on `/` (index.html):**
- `<title>` — `Valo Coffee | The Best Coffee in Arizona`
- `<meta name="description">` — under ~160 chars, summarizes the whole site (one simple menu, two Prescott locations)
- `<meta name="keywords">` — Prescott + specialty coffee + Curbside/Lab terms
- `<meta name="author" content="Valo Coffee">`
- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`
- `<link rel="canonical" href="https://valocoffee.com/">`
- `<link rel="icon">` and `<link rel="apple-touch-icon">`
- `<meta name="geo.region" content="US-AZ">` + `<meta name="geo.placename" content="Prescott, Arizona">`
- **Open Graph**: og:site_name, og:title, og:description, og:type (`website`), og:url (`https://valocoffee.com/`), og:image, og:image:alt, og:locale (en_US). Image: `https://valocoffee.com/assets/images/coffee_look_desktop.jpeg`.
- **Twitter Card**: summary_large_image with title, description, image, image:alt.

**Redirect stubs (`locations.html`, `menu.html`, `philosophy.html`)**: minimal head — charset, `<meta http-equiv="refresh">`, `<link rel="canonical" href="https://valocoffee.com/">`, `<meta name="robots" content="noindex">`, a short `<title>`. **404**: `noindex, follow`, title `Not Found | Valo Coffee`.

**Required structured data (JSON-LD `application/ld+json`, all on `/`):** one `@graph` containing:
- **WebSite** and **Organization** (legalName "Gospel Coffee LLC", logo, image, telephone, email, areaServed).
- **Two CafeOrCoffeeShop** entities (Valo Curbside `@id #curbside`, Valo Lab `@id #resort`) with priceRange, image, address (kept for SEO even though the visible card no longer shows it), `openingHoursSpecification`, `servesCuisine`, `url` pointing at the homepage anchors (`https://valocoffee.com/#curbside` / `#resort`) and `hasMenu` → `https://valocoffee.com/#menu`.
- **Menu** (`@id https://valocoffee.com/#menu`) with `hasMenuSection` for Coffee, Bean Menu, Not coffee, Tasting experience, Coffee beans (all items with MenuItem + Offer/price; tasting items `availableAtOrFrom` `#resort`).
- **FAQPage** (`@id https://valocoffee.com/#philosophy`) with **all five** philosophy questions/answers, mapping 1:1 to the on-page collapsibles in the same order (What is coffee? → Where do the flavor notes come from? → Where does our coffee come from? → How do we make espresso? → Why is the menu so simple?). Keep the FAQ order and copy in sync with the on-page `<details>` whenever either changes.

There are no BreadcrumbList entities — there is no page hierarchy to describe in a single-page site.

**Other SEO standards:**
- `<img>` tags: descriptive alt text, explicit width/height for CLS prevention, `loading="lazy"` for below-the-fold images (`loading="eager"` + `fetchpriority="high"` for the first hero slide).
- Hero image preload: `<link rel="preload" as="image">` with media queries pointing at the responsive desktop/mobile sources.
- `sitemap.xml` lists only `https://valocoffee.com/` (the single indexable URL) with a `<lastmod>` updated when content changes. The redirected stubs are intentionally absent.
- `robots.txt` allows all crawling and points at the sitemap.

---

## 9. Locations (factual)

**Valo Curbside** — 1500 AZ-69D, Prescott, AZ. Drive up, stay in your car, and we bring your coffee to you. Hours: **Mon–Sun, 7 AM – 6 PM**.

**Valo Lab** (inside the Prescott Resort lobby) — 1500 AZ-69, Prescott, AZ. Sit down, view of Prescott, the full tasting experience lives here. Hours: **Mon–Tue closed, Wed–Fri 7 AM – 10 AM, Sat–Sun 7 AM – 2 PM**. Never call this location "Valo" alone, "Valo Resort", or "Valo Sit-Down" (retired name). See the location naming rule in section 3.

Timezone: `America/Phoenix`. Hours are authoritative in `data/locations.json`; this section must be kept in sync with that file.

---

## 10. Menu (canonical)

The full menu (shown in the modal and mirrored in `data/menu.json` + the static fallback) has these sections, in order: **Coffee** (drink list + **Bean Menu** + **Optional**), **Not coffee**, **Tasting experience**, **Coffee beans**.

```text
Coffee                 Bean Menu                          Optional
   latte         7        dark & smoky    colombia           vanilla
   cappuccino    7        peanut butter   brazil             mocha
   flat white    7        peach           colombia           caramel
   cortado       5        strawberry      honduras           sugar
   black coffee  5        apple spice     colombia           brown sugar
   espresso      5        decaf           mexico             honey
                                                             maple
                                                             splenda
                                                             stevia

not coffee
   cocoa latte                  5
   chai latte                   7
   matcha latte                 7
   ube latte                    7
   golden latte                 7
   butterfly lemonade           7
   hibiscus yuzu                7

Tasting experience (Valo Lab only)
   coffee tasting experience       19
   not coffee tasting experience   19

Coffee beans (half pound bag)
   all six beans                   22
```

Drink order is fixed: latte, cappuccino, flat white, cortado, black coffee, espresso. The $5 black drink is **black coffee** (not "coffee"). **Cortado is a flat $5** (no range). There are **no "traditional or extra milk" sub-lines** anywhere — milk is decided at the counter/curbside.

Bean ordering is fixed — do not re-rank. No defaults. No "recommended." Jamaica is retired (do not reintroduce; hibiscus yuzu already covers that style).

Weight conventions:
- Drinks (latte, cappuccino, flat white, cortado, black coffee, espresso): all bold. No "traditional or extra milk" sub-lines.
- Bean Menu: bean name bold; origin shown in regular weight as a meta value.
- Optional: regular weight, single flat list (no add-in/sweetener sub-headings).
- Not coffee / Coffee beans items: regular weight; prices in bold.

The homepage preview is intentionally simpler (Coffee = latte 7 / black coffee 5, plus the six Beans with the bean note) and does not mirror the full layout. Latte and black coffee are our most popular; we make any specialty espresso drink to order. Copy must never claim drink scope.

### Full menu layout (inside the modal)

- The modal body is one paper-style card (`.menu-card .menu-card-warm .paper-menu-card`) with internal section blocks separated by `--space-7` padding and a thin top border. `menu.js` renders this from `data/menu.json`; the identical structure is also hard-coded as the no-JS fallback.
- **Coffee** section is a single stacked column at every width: drink list, then **Bean Menu**, then **Optional**, each separated by the `--space-7` rhythm with a thin top divider. No sub-label on the drink list — the section is already named Coffee (no-doubling rule). Sub-labels exist only where a block adds a new concept (Bean Menu, Optional). Major sections are never side by side.
- Compact item lists — **Optional**, **Not coffee**, **Coffee beans** — may flow in two CSS columns on desktop, one on mobile (they are lists, not major sections).
- Section labels (Coffee, Not coffee, Tasting experience, Coffee beans) use a quiet uppercase small-caps style at normal (400) weight.
- The digital menu intentionally does not display temp or milk as separate steps — decided at the counter/curbside.
- Voice rule for category labels: plain noun phrases ("Bean Menu", "Optional"), never imperatives.
- **Tasting experience** opens with the availability note at the top: "Tasting experiences are available at Valo Lab only." Then coffee tasting experience (19) and not coffee tasting experience (19), each with a one-line description using identical sentence structure. Frame as a feature, not a disclaimer; never use "inside the Prescott Resort only" as the primary wording.
- **Coffee beans** footnote: "Available at both locations. For custom grinding and vacuum sealing, visit Valo Lab." Never write "Curbside does not grind beans" — frame the positive.

---

## 11. Non-goals

Do not build: React or any framework, online ordering, accounts, loyalty system, CMS, blog, large photo gallery, heavy animation, embedded Google Map as primary location experience, complex customization menu, e-commerce, employee-guide access, or a return to a multi-page site structure.

---

## 12. Acceptance criteria (the bar)

The site is done when:

1. Live on GitHub Pages over HTTPS.
2. Only HTML, CSS, and minimal vanilla JS.
3. No pill-shaped UI anywhere.
4. Spacing uses tokens — no random values.
5. Premium, minimal, black-and-white led.
6. Strong, direct, non-ambiguous copy.
7. "Best coffee in Arizona" used as the strongest reputation claim.
8. No rule in the codebase against "best coffee" language.
9. Single-page experience: hero, Visit Valo, menu, Our Philosophy, footer all on `/`.
10. Header is the brand mark only — no nav, no hamburger.
11. Hero is a crossfade carousel that pauses on hover/focus and holds on slide 1 under reduced motion, with no layout shift.
12. Both locations clearly shown, each with an independent two-line open/closed status (`Open now`/`Closes at …` or `Closed now`/`Opens …`), an hours list (Curbside collapses to `Open daily` / `7 AM to 6 PM`), no visible street address, and its own Get directions action.
13. The full menu opens in an accessible modal (focus trap, Escape, backdrop close, scroll lock, restored focus) and never as a separate page; it is a single stacked column with no side-by-side major sections.
14. Full menu has no "pick"/"choose" labels; Coffee is latte 7, cappuccino 7, flat white 7, cortado 5, black coffee 5, espresso 5 (no "traditional or extra milk" sub-lines); Bean Menu labeled; Jamaica absent; tasting note at the top naming Valo Lab only; Coffee beans note refers to Valo Lab.
15. Menu shows how to choose, never what to order.
16. Philosophy lives on the homepage as the "Our Philosophy" section with five collapsible questions (all populated and mapped 1:1 in the FAQ JSON-LD, order: what is coffee → flavor notes → where our coffee comes from → espresso → why the menu is simple); "How do we make the perfect drink?" is absent. Lexicon enforced: "flavor notes" / "naturally occurring flavor notes" / "varietal(s)" — no "tasting notes", "flavor profiles", "naturally occurring flavors", "variety/varieties", or "smoothness". (Items 6/8 deferred per the v0.8.1 note.)
17. The bottom smart CTA is one button — `Visit Valo today` only when a location is open and stays open more than an hour, else `Visit Valo` — and opens the Visit modal, which stacks both locations (Valo Lab first only when open), each with its own `Visit Valo …` directions button visible without scrolling, using the same modal contract as the full-menu modal.
18. No "Valo Sit-Down" remains in any visitor-facing copy; the sit-down location is "Valo Lab" everywhere.
19. Footer contains only phone, email, and copyright; no duplicate location block.
20. `locations.html`, `menu.html`, `philosophy.html` are noindex redirect stubs to the matching homepage section/state; `sitemap.xml` lists only `/`.
21. Works on Safari, Chrome, Edge, iPhone, Android, Mac, Windows; readable at 200% zoom; no horizontal scrolling; user zoom never disabled.
22. Essentials still communicate if JavaScript fails (carousel holds, modal fallback menu present, collapsibles work, fallback two-line status + hours show, smart CTA degrades to a `#today` anchor, stubs still redirect).
23. Visitors leave informed, excited, and driven to visit.
