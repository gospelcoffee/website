# Valo Copy Deck

Use this file as the single working draft for brand copy updates.

How to use
- Edit copy in this file first.
- Keep location references explicit: Valo Curbside (drive-up) or Valo at the Prescott Resort (sit-down). Never write "Valo Resort" together as a title.
- Use inside the Prescott Resort as supporting context when needed.
- After edits are approved, copy updates into page files and publish.

---

## Global Brand Copy

### Core message
- Primary claim: The best coffee in Arizona.
- Choice line (menu page only): Choose your drink. Choose your bean.
- Retired (do not reintroduce on home): Chosen by flavor. Made with precision.
- Retired (do not reintroduce on home): We make the cup around the coffee you want to taste.

The home page stays light. It does not try to explain the philosophy — it grounds the visitor in who Valo is, where Valo is, when Valo is open, and what is on the menu. The philosophy page is where the deeper why lives.

### Location naming standard
- Preferred labels: Valo Curbside (drive-up), Valo (sit-down, inside the Prescott Resort)
- Never write "Valo Resort" together as a title, heading, eyebrow, footer label, page title, or schema.org @name. Valo is not a resort - it's a coffee brand with a location inside the Prescott Resort.
- Disambiguate the sit-down location with surrounding context: "inside the Prescott Resort", "at the Prescott Resort", or by listing the address (1500 AZ-69).

### Menu scope rule (important)
- Never claim drink scope. Copy must not say "two drinks", "only two coffees", or anything that implies the printed coffee list is the limit.
- Latte and black coffee are our two most popular coffee drinks. We can make any specialty espresso drink to order - cortado, cappuccino, flat white, and more.
- When the coffee list appears in marketing copy, pair it with language like "Our most popular. Ask for any specialty drink." or similar.

### Hours format
- Always show AM/PM on both sides of a time range, separated by an en-dash with spaces: "7 AM – 6 PM", not "7–6 PM", not "7 AM to 6 PM".
- Omit minutes when they are :00 ("7 AM", not "7:00 AM"). Show minutes only when non-zero ("6:30 AM").
- Day-range abbreviations (Wed–Fri, Sat–Sun) keep their en-dash without spaces. Hour ranges use spaces.

### Dashes rule (site copy)
- Never use en-dash (–) or em-dash (—) anywhere in site copy: prose, headlines, eyebrows, notes, status text, captions, alt text. Only exceptions: time ranges (7 AM – 6 PM) and number ranges ($5–10), where the en-dash is required.
- For pauses or asides, use a comma, colon, period, or rephrase ("Nothing added before or after the roast." not "Nothing added — before or after the roast.").
- For separators between a title and a price, use a middot (·) or restructure into separate elements ("Tasting experiences · 19" not "Tasting experiences — 19").

---

## Home Page (`/index.html`)

### Metadata
- Page title: Valo Coffee | The Best Coffee in Arizona
- Meta description: Valo Coffee serves the best coffee in Arizona through a simple menu, precise recipes, and two ways to visit: Curbside and Resort.
- OG title: Valo Coffee | The Best Coffee in Arizona
- OG description: Valo Coffee in Prescott, Arizona. Two locations: Curbside and Resort.

### Header / Navigation
- Nav item: Locations
- Nav item: Menu
- Nav item: Philosophy
- Nav item: Get directions

### Hero
- Layout: full-width banner. Featured image covers the section edge-to-edge with a dark gradient overlay so the headline and buttons read with strong contrast.
- Headline: The best coffee in Arizona (no trailing period - headline, not sentence)
- No supporting subline. The image and overlay carry the atmosphere.
- Primary CTA: View locations (scrolls to #today on the same page, does not navigate)
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate) (scrolls to #menu on the same page, does not navigate)

### Today at Valo
- Section eyebrow: Today at Valo
- Section anchor: #today (the hero "View locations" button scrolls here)
- Goal: this section gives a visitor everything they need to make the visit - status, hours, address, brief positioning, directions.

#### Card: Valo Curbside
- Location label: Valo Curbside
- Status headline fallback: Open daily
- Status meta fallback: 7 AM – 6 PM
- Address line 1: 300 Heather Heights
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you. The best coffee at drive-through speed.
- Primary CTA: Get directions
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate)

#### Card: Valo (inside the Prescott Resort)
- Location label: Valo (never "Valo Resort")
- Status headline fallback: Open Wed-Sun
- Status meta fallback: Wed-Fri, 7 AM – 10 AM · Sat-Sun, 7 AM – 2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona · Inside the Prescott Resort
- Body: Sit down with a view of Prescott and explore the coffees we are serving. The Valo tasting experience lives here.
- Primary CTA: Get directions
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate)

### Menu preview
- Section eyebrow: The menu
- Section anchor: #menu (the hero "View menu" button scrolls here)
- No headline. The eyebrow plus the menu groups speak for themselves. Never claim drink scope ("two drinks", "six beans", etc.) - see global copy rules.

#### Group: Coffee (left column, top)
- Group label: Coffee
- Item: latte - 7
- Item: black coffee - 5
- No support note on the home page. The previous "Ask for any specialty drink" line was removed because it cluttered the menu. The home page preview shows the most popular two; visitors who want the full picture click "View full menu" or speak with a barista. Do not reintroduce a specialty-drink disclaimer here.

#### Group: Not coffee (left column, below Coffee)
- Group label: Not coffee
- Items (in order): butterfly lemonade 7, matcha latte 7, ube latte 7, golden latte 7, chai latte 7, hot cocoa 5, hot tea 5

#### Group: Beans (right column)
- Group label: Beans
- Items (in order): dark & smoky / colombia, peanut butter / brazil, peach / colombia, strawberry / honduras, apple spice / colombia, decaf / mexico
- Support note: Each bean is named for the flavor it naturally carries.

#### Bottom CTA
- CTA: View full menu (still navigates out to /menu.html for the complete card)

### Coffee philosophy preview
- Position: last section on the home page, before the footer.
- Section eyebrow: Our approach
- Headline: A simpler menu (no trailing period - headline, not sentence)
- Body: Every flavor on our menu is naturally in the bean. Nothing added - before or after the roast.
- Link CTA: Read our philosophy

### Footer
- Location heading: Valo Curbside
- Address: 300 Heather Heights, Prescott, AZ
- Hours line: Daily, 7 AM – 6 PM
- Link CTA: Get directions

- Location heading: Valo (never "Valo Resort")
- Address: 1500 AZ-69, Prescott, AZ
- Location context line: Inside the Prescott Resort
- Hours line 1: Wed-Fri, 7 AM – 10 AM
- Hours line 2: Sat-Sun, 7 AM – 2 PM
- Link CTA: Get directions

- Contact label: Contact
- Phone: 928-910-6087
- Email: support@valocoffee.com

---

## Locations Page (`/locations.html`)

### Metadata
- Page title: Locations | Valo Coffee
- Meta description: Two ways to visit Valo. Curbside for drive-up coffee, or inside the Prescott Resort for a sit-down experience with a view of Prescott.

### Intro
- Eyebrow: Locations
- H1: TWO WAYS TO VISIT VALO.
- Lede: Two locations. Two distinct ways to visit Valo.

### Location section: Valo Curbside
- Eyebrow: Valo Curbside
- H2: Drive up. Stay in your car.
- Positioning line: High-quality coffee at drive-through speed.
- Status headline fallback: Open daily
- Status meta fallback: 7 AM – 6 PM
- Address line 1: 300 Heather Heights
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you.
- CTA: Get directions

### Location section: Valo (inside the Prescott Resort)
- Eyebrow: Valo (never "Valo Resort")
- H2: Inside the Prescott Resort lobby.
- Positioning line: The Valo tasting experience lives here.
- Status headline fallback: Open Wed-Sun
- Status meta fallback: Wed-Fri, 7 AM – 10 AM · Sat-Sun, 7 AM – 2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona
- Body: Sit down inside the Prescott Resort and explore the coffees we are serving.
- CTA: Get directions

### Footer
- Use same footer copy as Home.

---

## Menu Page (`/menu.html`)

### Metadata
- Page title: Menu | Valo Coffee
- Meta description: The Valo Coffee menu. Choose your drink. Choose your bean. Or choose from our other beverages.

### Menu intro
- Eyebrow: Menu
- H1: Menu
- Lede: Choose your drink. Choose your bean. Or choose from our other beverages.

### Core menu card
- Step label: 1. Choose your drink
- Step label: 2. Choose a coffee bean
- Support note: We discover coffee beans that have distinct, naturally occurring flavor notes. Pick a bean and we brew your coffee with it.
- Section label: Not coffee

### Inside Prescott Resort feature
- Step label: Inside Prescott Resort (never "Valo Resort feature")
- Headline: Tasting experiences - 19
- Body line 1: Choose one tasting flight.
- Body line 2: Coffee tasting experience: Four coffees as pour-overs in a flight, then any full-size drink from the menu.
- Body line 3: Not coffee tasting flight: Any four not coffee lattes in a flight, then any full-size drink from the menu.
- Body line 4: Available inside the Prescott Resort only.

### Coffee beans note
- Headline: Coffee beans
- Body line 1: Whole beans are available at both locations.
- Body line 2: For custom grinding and vacuum sealing, visit us inside the Prescott Resort.

### Bottom CTA row
- Primary CTA: View locations
- Secondary CTA: Why we built the menu this way

### Footer
- Use same footer copy as Home.

---

## Philosophy Page (`/philosophy.html`)

### Metadata
- Page title: Our Philosophy | Valo Coffee
- Meta description: Most coffee shops ask you to choose flavors. Valo asks you to choose coffee. The natural flavor of the bean shapes the drink.

### Intro
- Eyebrow: Philosophy
- H1 line 1: Most coffee shops ask you to choose flavors.
- H1 line 2: Valo asks you to choose coffee.

### Warm section
- Body line 1: The bean's natural flavor leads the drink. Nothing is added to the coffee to create the notes you taste.
- Body line 2: We start with simple drinks, then let you choose the bean by the flavor it naturally brings to the cup.
- Body line 3: We hold every ingredient to the same standard: pure, simple, carefully selected, and always coffee first.

### Three principles
- Section heading: Coffee first
- Body: The bean leads the drink. Milk, sweetness, and add-ins support the coffee.

- Section heading: Simple choices
- Body: A smaller menu helps us make better drinks. Choose your drink, choose your bean, and we guide the rest.

- Section heading: Made with care
- Body: We make your drink right. If it needs an adjustment, we fix it.

### Bottom CTA row
- Primary CTA: View the menu
- Secondary CTA: Choose your location

### Footer
- Use same footer copy as Home.

---

## Sign-off Checklist
- Every location mention is explicit or clearly anchored by section context.
- Curbside appears first in dual-location contexts.
- Resort is clearly positioned as the tasting experience destination.
- Copy is concise, inviting, elegant, and direct.
- No prescriptive recommendation language.
