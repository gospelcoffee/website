# Valo Coffee Website — Context, Rules, and Guidelines

Spec version: 0.6
Branch in use: `rebuild-v0.6`

This file is the source of truth for how the Valo Coffee website should look, sound, and behave. Read it before making changes.

---

## 1. What this project is

A static marketing website for Valo Coffee (Prescott, Arizona) hosted on GitHub Pages. Two physical locations: **Valo Curbside** (the drive-up location) and **Valo** at the Prescott Resort (the sit-down location, inside the Prescott Resort lobby). Valo is never called "Valo Resort" — Valo is not a resort. See the location naming rule in section 3.

The site exists to make visitors feel informed, excited, and driven to visit. It is not a directory listing, not an ordering app, and not a generic cafe site.

### Primary visitor outcomes

After visiting the site, a person should know:
1. Valo has the best coffee in Arizona.
2. Whether Valo Curbside is open right now (and if not, when it opens).
3. Whether Valo inside the Prescott Resort is open right now (and if not, when it opens).
4. The difference between Curbside and the Prescott Resort location.
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
- **Never call the sit-down location "Valo Resort."** Valo is not a resort — it's a coffee brand with a location *inside* the Prescott Resort. The location's name is **Valo**. When the location must be disambiguated from Valo Curbside, use surrounding context like "inside the Prescott Resort" or "at the Prescott Resort." Never write the two words "Valo Resort" together as a title, eyebrow, heading, footer label, page title, or schema.org @name. Same for any near-form (e.g., "Valo at Resort", "Valo's Resort", "the Valo Resort"). The host hotel is "the Prescott Resort"; that's distinct from us.
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

1. **Header** — logo, simple nav (Locations, Menu, Philosophy, Get directions). No pills, no oversized header. **Dual-mode behavior:** on the home page, every nav item is an in-page anchor (`#today`, `#menu`, `#philosophy`, `#today`) so the visitor never leaves the home page from the header. On every other page (locations.html, menu.html, philosophy.html), the same nav items link to the corresponding .html files like normal. The rationale is that the home page is the visitor's hub: the header moves them around the page, and the deeper pages are reached via the section CTAs (View full menu, Get directions, Read our philosophy). This keeps the home page journey simple.
2. **Hero** — full-width banner. The featured image (coffee_look, desktop/mobile responsive) covers the section edge-to-edge. A restrained dark gradient overlay sits on top so the headline and buttons read with strong contrast. Desktop: gradient is darker on the left where text sits, fading toward the image on the right. Mobile: text sits near the bottom with a darker bottom-up gradient. Content: headline + a short subline ("Open daily", styled like a quiet status eyebrow — uppercase, letter-spaced, small) + two actions. Both buttons keep the visitor on the home page: "View locations" scrolls to `#today`, "View menu" scrolls to `#menu`. The /locations.html and /menu.html pages still exist, but the home page hero never sends them elsewhere. Premium and quiet, never a marketing-template feel.
3. **Visit Valo** — anchor target `#today` (the id is kept as `#today` for stability; the user-facing eyebrow is "Visit Valo"). This section is the visitor's complete answer for "can I visit, and how do I get there?" Includes for each location: independent open/closed status, today's hours, street address, short positioning blurb, directions button (opens Google Maps in a new tab), and a "View menu" button that scrolls to `#menu` on the same page. The /locations.html page still exists but the home page must stand on its own.
4. **Menu preview** — anchor target `#menu`. Section sits on the warm paper background (`section-warm`, `--color-paper-warm`) so it reads like a menu page set against the rest of the home page. The warmth is restrained — not a strong color block, just enough that the section feels like its own thing and provides a visual split between Visit Valo (white) above and the philosophy preview (white) below. Because of that bg differentiation, no `<hr class="divider">` is needed on either side. Coffee-only preview: two labeled groups, **Coffee** (latte, black coffee) on the left and **Beans** (the six beans with origins) on the right. The Not coffee section, the tasting feature, and the beans note all live on /menu.html — not here. The home page menu stays coffee-centric to keep the page focused. No rankings, no defaults, no heavy instructional heading. Never claim scope ("two drinks", "six beans" etc.) — the printed coffee list is just our two most popular; any espresso drink can be made to order, but the home page preview does not add a "specialty drinks" disclaimer because it clutters the menu. A "View full menu" link goes out to /menu.html for the complete card.
5. **Coffee philosophy preview** — last section on the home page. Headline: "A simpler menu" (no period — headline, not sentence). One quiet line + link to /philosophy. Do not try to explain the philosophy here — the goal is to invite a click, not to teach.

### Locations page

- Headline: "Two ways to visit Valo."
- Curbside section: address, status, "Drive up, we'll take your order and bring your drink to you. The best coffee, at drive through speeds." Positioning line: "High-quality coffee at drive-through speed."
- Resort section: address, status, "Valo is inside the Prescott Resort, located in the lobby." Positioning line: "The Valo tasting experience lives here."
- Directions: clean address + directions button + arrival instructions + minimal line illustration. No embedded Google Map as primary visual. Directions button can open Google Maps in a new tab.

### Menu page

- Headline: "Menu." Supporting: "Choose your drink. Choose your bean."
- Core menu card mirrors the paper menu's spacing and simplicity.
- **Inside Prescott Resort feature** card highlights the tasting experience ($19) — frame as a feature, not a disclaimer. Don't make Curbside feel like it's missing something.
- **Coffee beans note**: "Whole beans are available at both locations. For custom grinding and vacuum sealing, visit us inside the Prescott Resort." Never write "Curbside does not grind beans" — frame the positive.
- Menu must be real HTML text, printable, mobile-readable.

### Philosophy page

Short. Direct. Three sections: Coffee first, Simple choices, Made with care. Don't copy the employee guide. Don't over-explain. Don't tell customers what to order.

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
- Two-column location grid collapses to one column ≤ 760px.

---

## 8. SEO

Each page: unique title, meta description, clear H1, clean heading hierarchy, real address text, image alt text, local business language.

- Home title: `Valo Coffee | The Best Coffee in Arizona`
- Home meta: `Valo Coffee serves the best coffee in Arizona. A simple menu, precise recipes, and two locations in Prescott: drive-up at Curbside or sit-down inside the Prescott Resort.`
- Menu: `Menu | Valo Coffee`
- Locations: `Locations | Valo Coffee`
- Philosophy: `Our Philosophy | Valo Coffee`

---

## 9. Locations (factual)

**Valo Curbside** — 300 Heather Heights, Prescott, AZ. Drive up, we'll take your order and bring your drink to you.

**Valo** (sit-down location, inside the Prescott Resort) — 1500 AZ-69, Prescott, AZ. Sit-down, view of Prescott, tasting experience lives here. Never label this location "Valo Resort." See the location naming rule in section 3.

Default hours (both): 6:30 AM – 6:00 PM, every day. Timezone: `America/Phoenix`.

---

## 10. Menu (canonical)

The paper menu is laid out in six numbered steps across one horizontal row, with a "not coffee" section beneath. Steps 5 and 6 sit under an "optional" divider. Within each step, **bold** items are the standard options and regular-weight items are secondary/accommodation options.

```text
1. pick a drink              2. pick a temp 3. pick a milk   4. pick a bean                     optional ─────────────
   latte                7       hot            whole            dark & smoky    colombia        5. pick add-ins    6. pick a sweetener
   coffee               5       iced           oat              peanut butter   brazil             vanilla            sugar
                                extra hot      half & half      peach           colombia           mocha              brown sugar
                                kids' temp                      strawberry      honduras           caramel            honey
                                                                apple spice     colombia                              maple
                                                                decaf           mexico                                splenda | stevia

not coffee
   cocoa latte                  5
   chai latte                   7
   matcha latte                 7
   ube latte                    7
   golden latte                 7
   Jamaica                      7
   butterfly lemonade           7
   hibiscus yuzu                7

Feature (inside the Prescott Resort)
   tasting experience           19
   A guided tasting of the coffees we're serving.
```

Bean ordering is fixed — do not re-rank. No defaults. No "recommended."

Weight conventions (mirrored on the digital menu):
- Step 1 latte/coffee: bold.
- Step 2: hot/iced bold; extra hot/kids' temp regular.
- Step 3: whole/oat bold; half & half regular.
- Step 4 beans: all bold; origin shown in regular weight as a meta value.
- Steps 5 & 6 (optional): all regular weight.
- Not coffee items: regular weight; prices in bold.

The printed list above mirrors the paper menu. It is not the limit of what we make. **Latte and coffee are our two most popular coffee drinks; we can prepare any specialty espresso drink to order — cortado, cappuccino, flat white, and more.** This must be communicated wherever the coffee list appears in marketing copy, but the printed/digital menu stays simple. See the copy rules in section 3.

Layout rule for the digital menu page (`/menu.html`):
- **Desktop (≥900px):** the six steps render as a horizontal row, mirroring the paper menu. All steps and step numbers are visible.
- **Mobile (<900px):** the layout is simplified for scannability — **step numbers are hidden**, and **steps 2 (temp) and 3 (milk) are hidden entirely**. Mobile flow: pick a drink → pick a bean → optional → (pick add-ins | pick a sweetener as two side-by-side columns) → not coffee. Add-ins and sweetener stay side-by-side on mobile because they're short lists that scan faster as a pair than stacked. Step labels are slightly larger and more legible than on desktop. The "not coffee" section always sits below at full width.
- **Voice rule for step labels:** every step label leads with a verb ("pick a drink", "pick a bean", "pick a sweetener"). Never just the noun ("bean", "temp") — it's too ambiguous and lacks a directive. The paper menu only had "pick a drink" on step 1, but on the digital menu we apply "pick" universally for clarity.
- The home page menu preview is intentionally simpler (coffee + beans only) and does not mirror either layout — see section 5 item 4.

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
