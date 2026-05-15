# Valo Coffee Website — Context, Rules, and Guidelines

Spec version: 0.7
Branch in use: `rebuild-v0.7`

This file is the source of truth for how the Valo Coffee website should look, sound, and behave. Read it before making changes.

> **v0.7 change:** The site is now a **single-page experience**. The homepage (`/`) contains everything — hero, locations, menu, and philosophy. `locations.html`, `menu.html`, and `philosophy.html` are no longer standalone pages; they are redirect stubs that send visitors to the matching homepage section. The full menu opens in an in-page modal, not a separate page.

---

## 1. What this project is

A static marketing website for Valo Coffee (Prescott, Arizona) hosted on GitHub Pages. Two physical locations: **Valo Curbside** (the drive-thru location, 1500 AZ-69D) and **Valo Sit-Down** (the sit-down location, 1500 AZ-69, inside the Prescott Resort lobby). The sit-down location is never called "Valo" alone or "Valo Resort" — it's always **Valo Sit-Down**. See the location naming rule in section 3.

The site exists to make visitors feel informed, excited, and driven to visit. It is not a directory listing, not an ordering app, and not a generic cafe site.

### Primary visitor outcomes

After visiting the site, a person should know:
1. Valo has the best coffee in Arizona.
2. Whether Valo Curbside is open right now (and if not, when it opens).
3. Whether Valo Sit-Down is open right now (and if not, when it opens).
4. The difference between Valo Curbside and Valo Sit-Down.
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

The site must remain understandable if JavaScript fails. With JS off: the carousel holds on the first slide, the full-menu modal still contains the complete static menu in the DOM, the philosophy collapsibles work (native `<details>`), the location cards show hard-coded fallback status/hours, and the legacy redirect stubs still redirect (meta refresh).

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
    js/status.js       ← open/closed status + weekly hours
    js/carousel.js     ← hero carousel rotation
    js/menu.js         ← full-menu modal + render from menu.json
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

Because the experience is now one page, the philosophy is no longer "behind a click" — it lives in the **Our Approach** section near the bottom of the homepage as a set of collapsible questions, so the deeper "why" is present but never forced on a first-time visitor.

### Voice

Valo should feel: **premium, minimal, precise, quiet, warm, confident, easy to read, easy to visit.**

Valo should NOT feel: busy, generic, trendy, gimmicky, colorful, app-like, over-explained, unclear.

### Copy rules

- **No en-dashes or em-dashes in site copy.** Never use `–` (en-dash, `&ndash;`) or `—` (em-dash, `&mdash;`) as a punctuation mark in prose, headlines, eyebrows, notes, or any visitor-facing copy. The only exceptions are time ranges (`7 AM – 6 PM`) and number ranges (`$5–10`). For pauses or asides, use a comma, colon, period, or rephrase. For separators between a title and a price, use a middot (`·`, `&middot;`), parentheses, or restructure into separate elements. This rule applies to every site page; spec docs may use dashes in technical prose.
- **Don't take credit for the flavor.** Valo does not "highlight," "bring out," or "enhance" the flavors of its ingredients. The flavor is already in the ingredient. Our role is restraint — we don't add anything that would distract from it. The point of that restraint is the *customer's enjoyment*: pure ingredients can be enjoyed clearly. Use verbs that describe the customer's experience (enjoyed clearly, enjoyed purely, experienced cleanly), what the flavor does (comes through, emerges, stays clear), and our restraint (we never add, we don't distract). Avoid verbs that put Valo in the active position of producing flavor (highlight, bring out, enhance, draw out, accentuate, amplify). **Known exception:** the Our Approach (philosophy) section ships the wording mandated verbatim by the approved website-revisions brief, which includes "Any drink you order from our coffee menu highlights this philosophy" and "Each choice lets us highlight the bean's naturally occurring flavor notes." That copy is approved as-is and should not be silently rewritten; this rule still governs all *new* copy elsewhere on the site.
- **Avoid "natural flavor(s)" as a noun phrase.** On packaged-food ingredient lists, "natural flavors" is a regulated catch-all that can refer to chemically extracted flavor concentrates. We don't use anything like that, and our copy shouldn't echo that wording. Use "naturally occurring flavors", "naturally occurring tasting notes", "the flavor that's already in the bean/ingredient", or similar — phrasing that makes clear we're describing what's inherent to the ingredient, not an additive. (The philosophy section's "natural flavor notes of the coffee bean" is part of the approved brief copy noted above.)
- **Be binary and direct.** No "maybe," "sort of," "one of the," "kind of," "could be," "a coffee experience for some people."
- **Location naming: Valo Curbside and Valo Sit-Down.** The drive-thru location is **Valo Curbside**. The sit-down location is **Valo Sit-Down** — never "Valo" alone, never "Valo Resort", never "Valo at the Prescott Resort" as the primary name. Valo Sit-Down happens to be located inside the Prescott Resort lobby, but the location's *name* is Valo Sit-Down. "Inside the Prescott Resort" is acceptable as a wayfinding sub-line (e.g., on an address card) but never as the location's positioning or primary label. Never write "Valo Resort" or near-forms like "Valo at Resort", "Valo's Resort", "the Valo Resort". Use **Valo Sit-Down** consistently in eyebrows, headings, schema.org @name fields, and the tasting-experience availability note ("Tasting experiences are available at Valo Sit-Down only.").
- **"drive-thru" not "drive-through."** And **"drive-thru speeds"** (plural) when describing the Curbside experience. Example: "Specialty coffee at drive-thru speeds." Never write "the best coffee at drive-thru speeds" — "best" in that phrase narrows the claim to "best for a drive-thru" rather than best overall.
- **Never claim drink scope.** Latte and coffee are the two coffees the homepage preview lists because they're our most popular — they are not the totality. We can make any espresso drink to order (cortado, cappuccino, flat white, and more, all of which appear in the full menu). Copy must never say "two drinks", "only two coffees", or anything that implies the printed list is the limit.
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

Status is a quiet typographic row (status line + weekly hours list), never a rounded `[ OPEN NOW ]` pill or colored badge. Status must be readable without relying on color.

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

### Photography

Few, strong photos. Subjects: paper menu, espresso being made, finished coffee, bean selection, curbside arrival, view from inside the Prescott Resort, tasting experience, customer handoff. The carousel currently uses one approved placeholder image in every slide; real images get swapped in slot-by-slot with no markup change.

Avoid: cluttered counters, syrup bottles as hero, busy cafe scenes, novelty drinks, generic stock, muddy interiors. One excellent image > six average ones.

---

## 5. Site structure (single page)

| URL                | Behavior                                                       |
| ------------------ | -------------------------------------------------------------- |
| `/`                | The entire site: hero, Visit Valo, menu, Our Approach, footer  |
| `/locations.html`  | Redirect stub → `/#today`                                       |
| `/menu.html`       | Redirect stub → `/?menu=full#menu` (opens the full-menu modal)  |
| `/philosophy.html` | Redirect stub → `/#philosophy`                                  |
| `/404.html`        | Not-found page, `noindex, follow`, brand-only header            |

### Homepage sections (in order)

1. **Header** — the Valo wordmark only, on a clean white bar. No navigation links, no hamburger, no pills. The header is intentionally not a multi-page nav: the page is one scroll and the section CTAs do the moving.
2. **Hero** — full-bleed carousel (section 4 "Hero carousel") with the dark gradient overlay. Content: headline **"The best coffee in Arizona"** + a quiet uppercase sub **"Open daily"** + two buttons: **"Visit Valo"** (scrolls to `#today`) and **"See the menu"** (scrolls to `#menu`). Premium and quiet, never a marketing-template feel.
3. **Visit Valo** — anchor `#today` (id kept stable; user-facing eyebrow is "Visit Valo"). The visitor's complete answer for "can I visit, and how do I get there?" Two location cards (`#curbside`, `#resort`), Curbside first in source order. Each card: location name, independent open/closed status line, full weekly hours list (both generated by `status.js` from `data/locations.json`, with hard-coded fallback text), street address, short positioning blurb, a "Get directions" button (opens Google Maps in a new tab), and a "View menu" button that scrolls to `#menu`.
4. **Menu preview** — anchor `#menu`, on the warm paper background (`section-warm`). No eyebrow/heading — the section opens directly with the **Coffee** group so it reads as a menu, not a labeled website section. Two groups: **Coffee** (latte 7, black coffee 5) and **Beans** (the six beans with origins) plus the bean note. Never claim scope. A **"View full menu"** button (`[data-menu-open]`) opens the full-menu modal (section 4) — it does not navigate.
5. **Our Approach** — anchor `#philosophy`, the last content section. Eyebrow **"Our Approach"**, then the opening lede ("Every drink on our menu is made with pure, raw ingredients. We do not add anything else, so the bean's naturally occurring flavors can be enjoyed clearly."), then **four** collapsible `<details class="philosophy-detail">` questions, in order: **What is coffee?** → **Where do the tasting notes come from?** → **Why is the menu so simple?** → **How do we make espresso?** All four start collapsed and use the same small-caps summary styling with a `+` that flips to `−`. There is no separate philosophy page and no "Read our philosophy" link.
6. **Footer** — phone, email, copyright only (`.footer-simple`): `928-910-6087` / `support@valocoffee.com` / `© Valo Coffee`. No location cards, addresses, hours, "Get directions" links, or "Prescott, Arizona" — that information is not duplicated here because the Visit Valo section already carries it in full.

### Legacy redirect stubs

`locations.html`, `menu.html`, `philosophy.html` are each a ~12-line stub: `<meta http-equiv="refresh">` to the target, `<link rel="canonical" href="https://valocoffee.com/">`, `<meta name="robots" content="noindex">`, and an inline `location.replace()` as a hash-preserving safety net. They exist only to keep old bookmarks/inbound links working; they must never grow back into real pages.

### Stand-alone rule for the philosophy questions

Because the four questions are collapsed by default, each `<summary>` must make sense on its own without the answer visible. Name the subject in the question — "Why is the menu so simple?" not "Why so simple?". Questions are short (4–7 words) and end with a question mark.

---

## 6. Open/closed status system

Each location has independent status. Source of truth: `data/locations.json`. Times are in `America/Phoenix`.

Status line format (single line, generated by `assets/js/status.js`):
- Currently open: `Open today until 6 PM`
- Closed before today's opening time: `Opens today at 7 AM`
- Closed after today's hours (we already closed today): `Closed now · Opens tomorrow at 7 AM` — use the next-open day's full weekday name when it's more than one day away: `Closed now · Opens Wednesday at 7 AM`
- Closed for the entire day (today.open is null): plain `Closed today` with no trailing clause. The weekly hours list directly under the status line shows when the next open day is, so the status line stays short.

Hours-list format (weekly hours rendered immediately under the status line, generated dynamically by `status.js` from `data/locations.json`):
- One line per group of consecutive days that share the same hours.
- Day labels use 3-letter abbreviations: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
- Range separator inside the day label is an en-dash with no spaces: `Mon–Sun`, `Wed–Fri`.
- Hour ranges use an en-dash with no spaces, AM/PM on both sides: `7 AM–6 PM`, `7 AM–10 AM`. When minutes are `:00`, omit them (`7 AM`, not `7:00 AM`).
- Closed days inside the list read `Mon–Tue: Closed`.
- Example output (Curbside): `Mon–Sun: 7 AM–6 PM`.
- Example output (Sit-Down): three lines — `Mon–Tue: Closed` / `Wed–Fri: 7 AM–10 AM` / `Sat–Sun: 7 AM–2 PM`.

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
- **Philosophy collapsibles**: native `<details>`/`<summary>` so they work without JS and are keyboard-operable.
- The legacy redirect stubs work without JS (meta refresh) and are `noindex`.

---

## 8. SEO

The site is a single indexable page. The redirect stubs and 404 are `noindex`.

**Required head tags on `/` (index.html):**
- `<title>` — `Valo Coffee | The Best Coffee in Arizona`
- `<meta name="description">` — under ~160 chars, summarizes the whole site (one simple menu, two Prescott locations)
- `<meta name="keywords">` — Prescott + specialty coffee + Curbside/Sit-Down terms
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
- **Two CafeOrCoffeeShop** entities (Valo Curbside `@id #curbside`, Valo Sit-Down `@id #resort`) with priceRange, image, address, `openingHoursSpecification`, `servesCuisine`, `url` pointing at the homepage anchors (`https://valocoffee.com/#curbside` / `#resort`) and `hasMenu` → `https://valocoffee.com/#menu`.
- **Menu** (`@id https://valocoffee.com/#menu`) with `hasMenuSection` for Coffee, Bean Menu, Not coffee, Tasting experience, Coffee beans (all items with MenuItem + Offer/price; tasting items `availableAtOrFrom` `#resort`).
- **FAQPage** (`@id https://valocoffee.com/#philosophy`) with the four philosophy questions/answers, mapping 1:1 to the on-page collapsibles so the section can surface as a Google rich result.

There are no BreadcrumbList entities — there is no page hierarchy to describe in a single-page site.

**Other SEO standards:**
- `<img>` tags: descriptive alt text, explicit width/height for CLS prevention, `loading="lazy"` for below-the-fold images (`loading="eager"` + `fetchpriority="high"` for the first hero slide).
- Hero image preload: `<link rel="preload" as="image">` with media queries pointing at the responsive desktop/mobile sources.
- `sitemap.xml` lists only `https://valocoffee.com/` (the single indexable URL) with a `<lastmod>` updated when content changes. The redirected stubs are intentionally absent.
- `robots.txt` allows all crawling and points at the sitemap.

---

## 9. Locations (factual)

**Valo Curbside** — 1500 AZ-69D, Prescott, AZ. Drive up, stay in your car, and we bring your coffee to you. Hours: **Mon–Sun, 7 AM – 6 PM**.

**Valo Sit-Down** (inside the Prescott Resort lobby) — 1500 AZ-69, Prescott, AZ. Sit down, view of Prescott, tasting experience lives here. Hours: **Mon–Tue closed, Wed–Fri 7 AM – 10 AM, Sat–Sun 7 AM – 2 PM**. Never call this location "Valo" alone or "Valo Resort." See the location naming rule in section 3.

Timezone: `America/Phoenix`. Hours are authoritative in `data/locations.json`; this section must be kept in sync with that file.

---

## 10. Menu (canonical)

The full menu (shown in the modal and mirrored in `data/menu.json` + the static fallback) has these sections, in order: **Coffee** (drink list + **Bean Menu** + **Optional**), **Not coffee**, **Tasting experience**, **Coffee beans**.

```text
Coffee                            Bean Menu                          Optional
   latte                  7          dark & smoky    colombia           vanilla
   coffee                 5          peanut butter   brazil             mocha
   cappuccino             7          peach           colombia           caramel
     traditional or extra milk      strawberry      honduras           sugar
   flat white             7          apple spice     colombia           brown sugar
     traditional or extra milk      decaf           mexico             honey
   cortado                5–7                                          maple
     traditional or extra milk                                          splenda
   espresso               5                                            stevia

not coffee
   cocoa latte                  5
   chai latte                   7
   matcha latte                 7
   ube latte                    7
   golden latte                 7
   butterfly lemonade           7
   hibiscus yuzu                7

Tasting experience (Valo Sit-Down only)
   coffee tasting experience       19
   not coffee tasting experience   19

Coffee beans (half pound bag)
   all six beans                   22
```

Bean ordering is fixed — do not re-rank. No defaults. No "recommended." Jamaica is retired (do not reintroduce; hibiscus yuzu already covers that style).

Weight conventions:
- Drinks (latte, coffee, cappuccino, flat white, cortado, espresso): all bold. "traditional or extra milk" shown beneath cappuccino, flat white, and cortado as a regular-weight sub-line.
- Bean Menu: bean name bold; origin shown in regular weight as a meta value.
- Optional: regular weight, single flat list (no add-in/sweetener sub-headings).
- Not coffee / Coffee beans items: regular weight; prices in bold.

The homepage preview is intentionally simpler (Coffee = latte 7 / black coffee 5, plus the six Beans with the bean note) and does not mirror the full layout. Latte and coffee are our most popular; we make any specialty espresso drink to order. Copy must never claim drink scope.

### Full menu layout (inside the modal)

- The modal body is one paper-style card (`.menu-card .menu-card-warm .paper-menu-card`) with internal section blocks separated by `--space-7` padding and a thin top border. `menu.js` renders this from `data/menu.json`; the identical structure is also hard-coded as the no-JS fallback.
- **Coffee** section shows three category columns on desktop (≥900px): drink list (1.6fr) | **Bean Menu** (1fr) | **Optional** (1.4fr); stacked on mobile. No sub-label on the drink list — the section is already named Coffee (no-doubling rule). Sub-labels exist only where a column adds a new concept (Bean Menu, Optional).
- **Not coffee** and **Coffee beans** use two CSS columns on desktop, one on mobile.
- Section labels (Coffee, Not coffee, Tasting experience, Coffee beans) use a quiet uppercase small-caps style at normal (400) weight.
- The digital menu intentionally does not display temp or milk as separate steps — decided at the counter/curbside.
- Voice rule for category labels: plain noun phrases ("Bean Menu", "Optional"), never imperatives.
- **Tasting experience** opens with the availability note at the top: "Tasting experiences are available at Valo Sit-Down only." Then coffee tasting experience (19) and not coffee tasting experience (19), each with a one-line description using identical sentence structure. Frame as a feature, not a disclaimer; never use "inside the Prescott Resort only" as the primary wording.
- **Coffee beans** footnote: "Available at both locations. For custom grinding and vacuum sealing, visit Valo Sit-Down." Never write "Curbside does not grind beans" — frame the positive.

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
9. Single-page experience: hero, Visit Valo, menu, Our Approach, footer all on `/`.
10. Header is the brand mark only — no nav, no hamburger.
11. Hero is a crossfade carousel that pauses on hover/focus and holds on slide 1 under reduced motion, with no layout shift.
12. Both locations clearly shown, each with independent open/closed status, full weekly hours, and its own Get directions action.
13. The full menu opens in an accessible modal (focus trap, Escape, backdrop close, scroll lock, restored focus) and never as a separate page.
14. Full menu has no "pick"/"choose" labels; Coffee includes latte, coffee, cappuccino, flat white, cortado, espresso; Bean Menu labeled; Jamaica absent; tasting note at the top naming Valo Sit-Down only; Coffee beans note refers to Valo Sit-Down.
15. Menu shows how to choose, never what to order.
16. Philosophy lives on the homepage as the "Our Approach" section with four collapsible questions; "How do we make the perfect drink?" is absent.
17. Footer contains only phone, email, and copyright; no duplicate location block.
18. `locations.html`, `menu.html`, `philosophy.html` are noindex redirect stubs to the matching homepage section/state; `sitemap.xml` lists only `/`.
19. Works on Safari, Chrome, Edge, iPhone, Android, Mac, Windows; readable at 200% zoom; no horizontal scrolling; user zoom never disabled.
20. Essentials still communicate if JavaScript fails (carousel holds, modal fallback menu present, collapsibles work, fallback hours show, stubs still redirect).
21. Visitors leave informed, excited, and driven to visit.
