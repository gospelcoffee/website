# Valo Coffee Website — Context, Rules, and Guidelines

Spec version: 0.6
Branch in use: `rebuild-v0.6`

This file is the source of truth for how the Valo Coffee website should look, sound, and behave. Read it before making changes.

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
| Site type       | Static HTML                                          |
| HTML            | Semantic HTML, real text (never images of text)      |
| CSS             | One main stylesheet                                  |
| JavaScript      | Minimal vanilla JS only — no frameworks              |
| Build process   | None for v1                                          |
| CMS             | None                                                 |
| Browsers        | Safari, Chrome, Edge, Firefox                        |
| Devices         | Mac, Windows, iPhone, Android                        |
| Accessibility   | Readable, zoom-friendly, no horizontal scrolling     |
| Maps            | No embedded Google Map as the primary visual         |

The site must remain understandable if JavaScript fails.

### File structure

```text
/
  index.html
  menu.html
  locations.html
  philosophy.html
  404.html
  CNAME
  robots.txt
  sitemap.xml
  assets/
    css/styles.css
    js/status.js
    img/...
    svg/...
  data/
    locations.json
    menu.json
```

---

## 3. Brand voice and copy rules

### Core public message

```text
The best coffee in Arizona.
```

The homepage stays light. It does not try to explain the philosophy — it grounds the visitor in who Valo is, where Valo is, when Valo is open, and what's on the menu. Context-heavy phrases like "Chosen by flavor. Made with precision." or "We make the cup around the coffee you want to taste." are retired as required supporting copy because they raise questions a first-time visitor can't answer on the home page.

Supporting phrases like "Choose your drink. Choose your bean." remain available on the **menu page**, where the structure of the menu provides the context. The **philosophy page** is where the deeper "why" lives, and visitors reach it by clicking through.

### Voice

Valo should feel: **premium, minimal, precise, quiet, warm, confident, easy to read, easy to visit.**

Valo should NOT feel: busy, generic, trendy, gimmicky, colorful, app-like, over-explained, unclear.

### Copy rules

- **No en-dashes or em-dashes in site copy.** Never use `–` (en-dash, `&ndash;`) or `—` (em-dash, `&mdash;`) as a punctuation mark in prose, headlines, eyebrows, notes, or any visitor-facing copy. The only exceptions are time ranges (`7 AM – 6 PM`) and number ranges (`$5–10`). For pauses or asides, use a comma, colon, period, or rephrase. For separators between a title and a price, use a middot (`·`, `&middot;`), parentheses, or restructure into separate elements. This rule applies to every site page; spec docs may use dashes in technical prose.
- **Don't take credit for the flavor.** Valo does not "highlight," "bring out," or "enhance" the flavors of its ingredients. The flavor is already in the ingredient. Our role is restraint — we don't add anything that would distract from it. The point of that restraint is the *customer's enjoyment*: pure ingredients can be enjoyed clearly. Use verbs that describe the customer's experience (enjoyed clearly, enjoyed purely, experienced cleanly), what the flavor does (comes through, emerges, stays clear), and our restraint (we never add, we don't distract). Avoid verbs that put Valo in the active position of producing flavor (highlight, bring out, enhance, draw out, accentuate, amplify). Also avoid mechanical framings that stop at "the flavor comes through" without connecting to why that matters for the person drinking it.
- **Avoid "natural flavor(s)" as a noun phrase.** On packaged-food ingredient lists, "natural flavors" is a regulated catch-all that can refer to chemically extracted flavor concentrates. We don't use anything like that, and our copy shouldn't echo that wording. Use "naturally occurring flavors", "naturally occurring tasting notes", "the flavor that's already in the bean/ingredient", or similar — phrasing that makes clear we're describing what's inherent to the ingredient, not an additive.
- **Be binary and direct.** No "maybe," "sort of," "one of the," "kind of," "could be," "a coffee experience for some people."
- **Location naming: Valo Curbside and Valo Sit-Down.** The drive-thru location is **Valo Curbside**. The sit-down location is **Valo Sit-Down** — never "Valo" alone, never "Valo Resort", never "Valo at the Prescott Resort" as the primary name. Valo Sit-Down happens to be located inside the Prescott Resort lobby, but the location's *name* is Valo Sit-Down. "Inside the Prescott Resort" is acceptable as a wayfinding sub-line (e.g., on an address card) but never as the location's positioning or primary label. Never write "Valo Resort" or near-forms like "Valo at Resort", "Valo's Resort", "the Valo Resort". Use **Valo Sit-Down** consistently in titles, eyebrows, headings, footer labels, page titles, schema.org @name fields, and the tasting-experience availability note ("Tasting experiences are available at Valo Sit-Down only.").
- **"drive-thru" not "drive-through."** And **"drive-thru speeds"** (plural) when describing the Curbside experience. Example: "Specialty coffee at drive-thru speeds." Never write "the best coffee at drive-thru speeds" — "best" in that phrase narrows the claim to "best for a drive-thru" rather than best overall.
- **Never claim drink scope.** Latte and black coffee are the two coffees we list because they're our most popular — they are not the totality. We can make any espresso drink to order (cortado, cappuccino, flat white, and more). Copy must never say "two drinks", "only two coffees", or anything that implies the printed list is the limit.
- **Do not soften strong claims.** "Some of the best coffee in Prescott" → "The best coffee in Arizona." "A quality-focused beverage experience" → "Coffee chosen by flavor and made with precision."
- **"Best coffee" language is allowed.** There is no rule against it. Use with restraint and confidence — don't force it everywhere, don't avoid it.
- **Treat reviews as one Valo signal.** Reputation language refers to Valo as one brand, not separate reputations for our two locations.
- **Every major section should** tell visitors whether Valo is open, where to go, what makes Valo different, how to choose, or why Valo is worth visiting.

### Customer choice (critical)

Valo guides; it does not prescribe.

Use:
- "Choose your drink. Choose your bean."
- "Start with latte or black coffee. Then choose the coffee flavor you want in the cup."
- "Pick the bean by the flavor you want to taste."

Avoid:
- "Order this."
- "You should get the latte."
- "First-time customers should order dark & smoky."
- Default recommendations or rankings of beans.

---

## 4. Visual design rules

### Palette

Primary: **black, white, warm off-white, soft gray.** Warmth comes from photography (wood, stone, glass, espresso, milk texture, natural light) — not from color accents.

Avoid: bright accents, gradients, color-coded sections, decorative graphics, loud seasonal colors.

### No pill-shaped UI — anywhere

No pill buttons, no pill badges, no pill labels, no pill status indicators, no pill filter chips, no app-style bubbles, no rounded tags.

Use instead: rectangular buttons (2px radius max), thin horizontal dividers, typographic hierarchy, clean spacing, precise alignment, quiet status rows.

#### Open/closed status

Correct:
```text
VALO CURBSIDE

Open now
Today, 6:30 AM – 6:00 PM

Drive up, stay in your car, and we bring your coffee to you.
```

Incorrect: a rounded `[ OPEN NOW ]` pill or colored badge. Status must be readable without relying on color.

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

System fonts are fine for v1. Use `clamp()` for fluid sizing. No tiny menu text, no decorative fonts, no long paragraphs on the homepage, no low-contrast gray body copy.

```css
--font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--text-xs: clamp(0.78rem, 0.74rem + 0.2vw, 0.88rem);
--text-sm: clamp(0.9rem, 0.84rem + 0.25vw, 1rem);
--text-base: clamp(1rem, 0.96rem + 0.3vw, 1.125rem);
--text-lg: clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem);
--text-xl: clamp(1.8rem, 1.35rem + 2vw, 3rem);
```

### Buttons

Rectangular, restrained, easy to tap. `min-height: 44px`. Border-radius max 2px. Black primary, transparent + black border for secondary. `touch-action: manipulation`.

**Stacking on mobile:** in any `.button-row` below 600px viewport width, buttons switch to a single-column stack and stretch to full container width so the primary and secondary buttons are visually identical in size. The primary stays on top (first in source order) and the secondary sits below it. Above 600px, buttons sit side-by-side with their natural widths.

### Photography

Few, strong photos. Subjects: paper menu, espresso being made, finished coffee, bean selection, curbside arrival, view from inside the Prescott Resort, tasting experience, customer handoff.

Avoid: cluttered counters, syrup bottles as hero, busy cafe scenes, novelty drinks, generic stock, muddy interiors. One excellent image > six average ones.

---

## 5. Pages

| Page       | URL                | Purpose                                                  |
| ---------- | ------------------ | -------------------------------------------------------- |
| Home       | `/`                | Status, both locations, create desire to visit           |
| Menu       | `/menu.html`       | HTML mirror of the paper menu                            |
| Locations  | `/locations.html`  | Both locations with directions                           |
| Philosophy | `/philosophy.html` | Why Valo's coffee is different                           |

### Homepage sections (in order)

1. **Header** — logo on the left, simple nav on the right. No pills, no oversized header. A previous "Get directions" nav item was removed because it duplicated Locations. Directions are still reachable via the Get directions buttons inside each location card and footer.

   **Per-page nav rule:** the current page is never present in its own header nav (the visitor is already there). On non-home pages, "Home" is added as the first nav item so the visitor can always get back. The full set of possible items is Home, Locations, Menu, Philosophy — each page shows the three that aren't the current page, in that order:
   - **Home page (/):** Locations, Menu, Philosophy. No "Home" item (you're already home). Every nav item is an in-page anchor (`#today`, `#menu`, `#philosophy`) so the visitor never leaves the home page from the header.
   - **Locations page:** Home, Menu, Philosophy. "Home" leads, "Locations" is omitted.
   - **Menu page:** Home, Locations, Philosophy. "Home" leads, "Menu" is omitted.
   - **Philosophy page:** Home, Locations, Menu. "Home" leads, "Philosophy" is omitted.

   **Dual-mode behavior:** on the home page, the header is in-page anchors only (visitor never leaves the page from the header). On every other page, the header is page navigation (Home + the other deep pages). The rationale is that the home page is the visitor's hub — the header moves them around the page, and the deeper pages are reached via the section CTAs (View full menu, Get directions on each location card, Read our philosophy). This keeps the home page journey simple.
2. **Hero** — full-width banner. The featured image (coffee_look, desktop/mobile responsive) covers the section edge-to-edge. A restrained dark gradient overlay sits on top so the headline and buttons read with strong contrast. Desktop: gradient is darker on the left where text sits, fading toward the image on the right. Mobile: text sits near the bottom with a darker bottom-up gradient. Content: headline + a short subline ("Open daily", styled like a quiet status eyebrow — uppercase, letter-spaced, small) + two actions. Both buttons keep the visitor on the home page: "View locations" scrolls to `#today`, "View menu" scrolls to `#menu`. The /locations.html and /menu.html pages still exist, but the home page hero never sends them elsewhere. Premium and quiet, never a marketing-template feel.
3. **Visit Valo** — anchor target `#today` (the id is kept as `#today` for stability; the user-facing eyebrow is "Visit Valo"). This section is the visitor's complete answer for "can I visit, and how do I get there?" Includes for each location: independent open/closed status, today's hours, street address, short positioning blurb, directions button (opens Google Maps in a new tab), and a "View menu" button that scrolls to `#menu` on the same page. The /locations.html page still exists but the home page must stand on its own.
4. **Menu preview** — anchor target `#menu`. Section sits on the warm paper background (`section-warm`, `--color-paper-warm`) so it reads like a menu page set against the rest of the home page. The warmth is restrained — not a strong color block, just enough that the section feels like its own thing and provides a visual split between Visit Valo (white) above and the philosophy preview (white) below. Because of that bg differentiation, no `<hr class="divider">` is needed on either side. Coffee-only preview: two labeled groups, **Coffee** (latte, black coffee) on the left and **Beans** (the six beans with origins) on the right. The Not coffee section, the tasting feature, and the beans note all live on /menu.html — not here. The home page menu stays coffee-centric to keep the page focused. No rankings, no defaults, no heavy instructional heading. Never claim scope ("two drinks", "six beans" etc.) — the printed coffee list is just our two most popular; any espresso drink can be made to order, but the home page preview does not add a "specialty drinks" disclaimer because it clutters the menu. A "View full menu" link goes out to /menu.html for the complete card.
5. **Coffee philosophy preview** — last section on the home page. Headline: "A simpler menu" (no period — headline, not sentence). One quiet line + link to /philosophy. Do not try to explain the philosophy here — the goal is to invite a click, not to teach.

### Locations page

- Headline: "Two ways to visit Valo."
- Valo Curbside section: address, status, body copy "Drive up, stay in your car, and we bring your coffee to you." Positioning line: "Specialty coffee at drive-thru speeds."
- Valo Sit-Down section: address (1500 AZ-69 · Inside the Prescott Resort), status, body copy "Sit down, take in the view of Prescott, and try our coffees." Positioning line: "The Valo tasting experience lives here." Eyebrow: "Valo Sit-Down".
- Directions: clean address + directions button + arrival instructions + minimal line illustration. No embedded Google Map as primary visual. Directions button can open Google Maps in a new tab.

### Menu page

- Page eyebrow: "Coffee." Use category labels, not imperatives — no "pick", no "choose".
- Core menu card mirrors the paper menu's spacing and simplicity. Step labels are non-imperative category words: **Drinks**, **Bean Menu**, **Optional**.
- Coffee category includes: latte (7), coffee (5), cappuccino (7), flat white (7), cortado (5-7), espresso (5). Cappuccino, flat white, and cortado each show "traditional or extra milk" as a regular-weight sub-line. Cortado's 5-7 is a range that depends on traditional vs. extra milk.
- **Bean Menu** is the section heading for beans. Beneath the list, the bean note reads: "Each tasting note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans."
- **Optional** is a single flat list (no add-in/sweetener sub-headings): vanilla, mocha, caramel, sugar, brown sugar, honey, maple, splenda, stevia.
- **Tasting experience** card opens with the availability note at the top: "Tasting experiences are available at Valo Sit-Down only." Then lists coffee tasting experience (19) and not coffee tasting experience (19). Frame as a feature, not a disclaimer. Don't make Curbside feel like it's missing something.
- **Coffee beans note**: "Available at both locations. For custom grinding and vacuum sealing, visit Valo Sit-Down." Never write "Curbside does not grind beans" — frame the positive.
- Menu must be real HTML text, printable, mobile-readable.

### Philosophy page

Same clean intro pattern as the menu and locations pages: small eyebrow header — no huge display headline. The page stakes out specific brand positions drawn from the internal employee guide, but translated for a public audience. Direct. Confident. No religious content (per the resort/curbside contract).

**Format**: every section's eyebrow is a **philosophical question**, and the body paragraph below is the answer. This turns the page into a conversation the brand has out loud with itself, rather than a list of principles or marketing assertions. Keep questions short (4-7 words) so they read cleanly in the small-caps eyebrow style. Always end with a question mark.

**Stand-alone rule**: because the four lower questions are collapsibles whose answers are hidden by default, each question must make sense on its own without the answer visible. Name the subject in the question — "Why is the menu so simple?" not "Why so simple?" (simple what?). A visitor scanning the collapsed list should be able to tell what each question is about before deciding whether to expand it.

Structure:
1. **Page header + opening lede** in one section, always expanded at the top of the page. Header question: "What is coffee?" Answer: "Coffee, to us, is any drink where you can clearly taste the natural flavor notes of the coffee bean. Any drink you order from our coffee menu highlights this philosophy."
2. **Three collapsible question/answer sections**, each using `<details class="philosophy-detail">` + `<summary>Question?</summary>`. They start collapsed so the page reads light; visitors expand the ones they care about. The summary uses the same small-caps eyebrow styling as the page header, plus a `+` indicator that flips to `−` when open. Order moves from where flavor comes from → why our offering is simple → how we make it:
   - **Where do the tasting notes come from?** — one paragraph: coffee is the seed of a coffee cherry; like any fruit, varietals taste different (Honeycrisp vs. Granny Smith); every coffee variety carries its own naturally occurring flavor notes; we source beans whose flavor matches a recognizable note (strawberry, peach, peanut butter); we close by pointing to the coffee tasting experience at Valo Sit-Down as the best way to discover this.
   - **Why is the menu so simple?** — simplicity runs through everything: the menu is short, the add-in list is short, AND the ingredients of each add-in are short (cocoa is just cacao, salt, and water; honey is just honey; maple is 100% pure maple; vanilla is pure vanilla extract). Do not name specific drinks we "don't sell" (we sell chai, for example); the list is short, not prohibitive.
   - **How do we make espresso?** — we question every traditional espresso parameter (doses, temps, pressure); every detail is tested, and we only keep what proves to be meaningfully better. The closing sentence is: "Each choice lets us highlight the bean's naturally occurring flavor notes so that we can serve you the best cup of coffee we know how to make."
3. Bottom CTA row: Visit Valo | View the menu.

Voice rules apply: no en/em-dashes in copy, no "natural flavors" as a noun phrase (use "naturally occurring"), no claiming Valo "highlights" or "enhances" flavor, no claiming drink scope. Don't copy the employee guide verbatim — translate internal positions to public-facing copy, and verify each claim against what we actually sell (e.g., the internal guide says "we don't have chai as a flavor of latte" but we do sell a chai latte as a not-coffee drink — be careful not to overclaim). Don't over-explain. Don't tell customers what to order.

---

## 6. Open/closed status system

Each location has independent status. Source of truth: `data/locations.json`. Times are in `America/Phoenix`.

Required states:
- Open now
- Closed now
- Opens today at 6:30 AM
- Opens tomorrow at 6:30 AM
- Closes at 6:00 PM
- Today, 6:30 AM &ndash; 6:00 PM

Hour-range format: always show AM/PM on **both** sides of the range, separated by an en-dash with spaces. Use `7 AM &ndash; 6 PM`, not `7&ndash;6 PM`, not `7 AM to 6 PM`. When minutes are `:00`, omit them (`7 AM`, not `7:00 AM`).

### v1: static JSON
Hours live in `data/locations.json`. JS reads it client-side and renders status text.

### v2 (future)
A GitHub Action will sync `data/locations.json` from Google Maps hours. **Never expose Google API keys in browser JS** — keys live in GitHub repository secrets, the Action writes the static JSON, the public site only reads it.

---

## 7. Accessibility & responsive

- **Never disable zoom.** Viewport: `width=device-width, initial-scale=1`. Never `user-scalable=no`.
- Must work at 320px wide, at 200% browser zoom, with larger OS text settings.
- No horizontal scrolling. No clipped text. No fixed-height content boxes.
- Real text always — never images of text.
- Tap targets ≥ 44px. `touch-action: manipulation` on links and buttons.
- Fluid layouts. `img, svg { max-width: 100%; height: auto; }`. `body { overflow-x: hidden; }`.
- On the locations page, the two locations sit side-by-side as a two-column grid on desktop (≥900px) and collapse to one column below that. Curbside is always first in source order, so it leads on both viewports.

---

## 8. SEO

Each page: unique title, meta description, clear H1, clean heading hierarchy, real address text, image alt text, local business language.

**Required head tags on every page:**
- `<title>` — unique per page, ends with `| Valo Coffee` (or includes the brand)
- `<meta name="description">` — unique, under ~160 chars, summarizes the page
- `<meta name="keywords">` — Prescott + specialty coffee + page-specific terms
- `<meta name="author" content="Valo Coffee">`
- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">` (except 404, which is `noindex, follow`)
- `<link rel="canonical">` — absolute URL
- `<link rel="icon">` and `<link rel="apple-touch-icon">`
- `<meta name="geo.region" content="US-AZ">` + `<meta name="geo.placename" content="Prescott, Arizona">`
- **Open Graph**: og:site_name, og:title, og:description, og:type, og:url, og:image, og:image:alt, og:locale (en_US). Image: `https://valocoffee.com/assets/images/coffee_look_desktop.jpeg`.
- **Twitter Card**: summary_large_image with title, description, image.

**Page titles (current):**
- Home: `Valo Coffee | The Best Coffee in Arizona`
- Locations: `Locations | Valo Coffee in Prescott, Arizona`
- Menu: `Coffee Menu | Valo Coffee in Prescott, Arizona`
- Philosophy: `Our Coffee Philosophy | Valo Coffee in Prescott, Arizona`
- 404: `Not Found | Valo Coffee` (with `noindex`)

**Required structured data (JSON-LD `application/ld+json`):**
- **Home**: WebSite, Organization (with legalName "Gospel Coffee LLC", logo, image, telephone, email, areaServed), two CafeOrCoffeeShop entities (Valo Curbside, Valo Sit-Down) with priceRange, image, openingHoursSpecification, hasMenu, servesCuisine.
- **Locations**: BreadcrumbList + the two CafeOrCoffeeShop entities (same enrichment).
- **Menu**: BreadcrumbList + Menu entity with hasMenuSection for Coffee, Beans, Not coffee, Tasting experience, Coffee beans (all items with MenuItem + Offer/price).
- **Philosophy**: BreadcrumbList + FAQPage with each section's question/answer (the collapsibles map directly to FAQ entries — this is what lets the page appear as a rich result in Google "People also ask" style).

**Other SEO standards:**
- `<img>` tags: descriptive alt text, explicit width/height for CLS prevention, `loading="lazy"` for below-the-fold images (`loading="eager"` + `fetchpriority="high"` for the hero).
- Hero image preload: `<link rel="preload" as="image">` with media queries pointing at the responsive desktop/mobile sources.
- Sitemap.xml must list every indexable URL with `<lastmod>` updated when content changes.
- robots.txt allows all crawling and points at the sitemap.

---

## 9. Locations (factual)

**Valo Curbside** — 1500 AZ-69D, Prescott, AZ. Drive up, stay in your car, and we bring your coffee to you.

**Valo Sit-Down** (inside the Prescott Resort lobby) — 1500 AZ-69, Prescott, AZ. Sit down, view of Prescott, tasting experience lives here. Never call this location "Valo" alone or "Valo Resort." See the location naming rule in section 3.

Default hours (both): 6:30 AM – 6:00 PM, every day. Timezone: `America/Phoenix`.

---

## 10. Menu (canonical)

The paper menu is laid out in six numbered steps across one horizontal row, with a "not coffee" section beneath. Steps 5 and 6 sit under an "optional" divider. Within each step, **bold** items are the standard options and regular-weight items are secondary/accommodation options.

```text
Drinks                            Bean Menu                          Optional
   latte                  7          dark & smoky    colombia           vanilla
   coffee                 5          peanut butter   brazil             mocha
   cappuccino             7          peach           colombia           caramel
     traditional or extra milk      strawberry      honduras           sugar
   flat white             7          apple spice     colombia           brown sugar
     traditional or extra milk      decaf           mexico             honey
   cortado                5-7                                          maple
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
```

Bean ordering is fixed — do not re-rank. No defaults. No "recommended."

Weight conventions (mirrored on the digital menu):
- Drinks (latte, coffee, cappuccino, flat white, cortado, espresso): all bold. "traditional or extra milk" shown beneath cappuccino and flat white as a regular-weight sub-line.
- Bean Menu: bean name bold; origin shown in regular weight as a meta value.
- Optional: regular weight, single flat list (no sub-headings).
- Not coffee items: regular weight; prices in bold.

The printed list above mirrors the paper menu. **Latte and coffee are our two most popular coffee drinks; cappuccino, flat white, cortado, and espresso are listed as well.** Prices: latte 7, coffee 5, cappuccino 7, flat white 7, cortado 5-7 (price varies by traditional vs extra milk), espresso 5. Copy must never claim drink scope ("just two drinks", "only six drinks") — the menu is short, but we can make any specialty espresso drink to order.

Layout rule for the digital menu page (`/menu.html`):
- The page is a **single paper-style menu card** with internal section blocks: **Coffee** (Drinks + Bean Menu + Optional), then **Not coffee**, then **Tasting experience**, then **Coffee beans**. The page-level eyebrow is "Menu" (h1). Each section inside the card has its own small-caps section label (h2) and is separated from the next by `--space-7` of vertical padding and a thin top border.
- The digital menu intentionally **does not display temp or milk** as separate steps. Temp and milk are decided at the counter or curbside.
- The Coffee section shows three category columns: **Drinks**, **Bean Menu**, and **Optional**.
- **Desktop (≥900px):** the Coffee section's category grid is three columns horizontally — Drinks (1.6fr) | Bean Menu (1fr) | Optional (1.4fr). Not coffee, Beans, and Optional each use CSS columns: 2 for compact layout.
- **Mobile (<900px):** the Coffee category grid stacks vertically — Drinks → Bean Menu → Optional. Not coffee and Beans collapse to one CSS column. Category labels are slightly larger and more legible than on desktop.
- **Voice rule for category labels:** use plain noun-phrase categories ("Drinks", "Bean Menu", "Optional"). Never imperatives ("pick a drink", "choose your experience"). Imperative labels tell visitors what to do; we let the structure do the guiding.
- **Drink rows with size options**: cappuccino, flat white, and cortado each show name + "traditional or extra milk" italic note + price on a single row, using a flex label-area inside the menu-row. The option text wraps below the name only on very narrow viewports.
- The home page menu preview is intentionally simpler (coffee + beans only) and does not mirror this layout — see section 5 item 4.

---

## 11. Non-goals for v1

Do not build: React, online ordering, accounts, loyalty system, CMS, blog, large photo gallery, heavy animation, embedded Google Map as primary location experience, complex customization menu, e-commerce, employee-guide access.

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
9. Curbside and the Prescott Resort location both clearly shown.
10. Each location has independent open/closed + today's hours.
11. Each location has its own directions action.
12. The Curbside vs Prescott Resort location distinction is obvious.
13. Menu page mirrors the paper menu.
14. Menu shows how to choose, never what to order.
15. Tasting experience inside the Prescott Resort is highlighted as a feature.
16. Works on Safari, Chrome, Edge, iPhone, Android, Mac, Windows.
17. Readable at 200% zoom.
18. No horizontal scrolling.
19. User zoom is never disabled.
20. Essentials still communicate if JavaScript fails.
21. Visitors leave informed, excited, and driven to visit.
