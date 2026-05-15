# Claude Code Planning Brief: Valo Coffee Website Revisions

## Source Review Notes

The live site currently has top navigation links for Locations, Menu, and Philosophy, a single hero image, two Visit Valo location cards, and repeated location details in the footer. The full menu page still uses labels like “pick a drink,” “pick a bean,” “pick add-ins,” and includes “Jamaica.” The philosophy content is currently on a separate page and includes the “How do we make the perfect drink?” section that should be removed.

## Goal

Refactor the Valo Coffee website into a cleaner, simpler, mostly single-page experience with improved location clarity, better menu structure, clearer navigation, stronger copy, and less duplication.

Use consistent naming throughout the site:

- **Valo Curbside**
- **Valo Sit-Down**

Do not use the generic location name “Valo” by itself for the sit-down location.

---

## 1. Site structure and navigation

### Current issue

The site currently separates Locations, Menu, and Philosophy into separate navigation destinations. This makes the experience feel fragmented and creates awkward navigation behavior, especially from the full menu page.

### Required change

Make the homepage the primary experience.

The homepage should contain, in order:

1. Hero
2. Visit Valo
3. Menu preview
4. Full menu toggle or modal
5. Our Approach / Philosophy
6. Contact footer

### Top navigation

Simplify the top navigation.

Remove these top navigation links:

- Locations
- Menu
- Philosophy

Keep the top bar white, minimal, and visually clean. The header can include the Valo logo or wordmark, but it should not feel like a multi-page navigation bar.

### Legacy page handling

If `/locations.html`, `/menu.html`, or `/philosophy.html` continue to exist, they should not create a confusing alternate experience.

Preferred behavior:

- `/locations.html` redirects to the homepage Visit Valo section.
- `/philosophy.html` redirects to the homepage Philosophy section.
- `/menu.html` redirects to the homepage Menu section with the full menu opened, if that state can be supported.

---

## 2. Hero section

### Required change

Replace the single hero image with a carousel of strong Valo images.

### Carousel requirements

Use a rotating hero carousel with high-quality brand images. Good candidates include:

- Espresso or milk being poured into a Valo cup
- Curbside coffee handoff
- Sit-down/tasting experience
- Prescott Resort view
- Coffee beans or tasting flight

### Implementation requirements

- Use multiple approved images, not random stock imagery.
- Add smooth transitions.
- Include accessible alt text for each image.
- Respect `prefers-reduced-motion`.
- Avoid layout shift while images load.
- Optimize image sizes for web performance.

---

## 3. Visit Valo section

### Location names

Use the following two location names:

1. **Valo Curbside**
2. **Valo Sit-Down**

Do not use “Valo” alone for the sit-down location.

### Status line

Replace generic status text like “Open now,” “Open daily,” or “Open Wed–Sun” with a more informative daily status.

Preferred format:

- **Open today until 6 PM**
- **Open today until 10 AM**
- **Open today until 2 PM**
- **Closed today**
- **Closed now · Opens Wednesday at 7 AM**

Use the America/Phoenix timezone.

### Hours display

Each location card must include full weekly hours directly under the status line.

#### Valo Curbside

**Status line example:**  
Open today until 6 PM

**Hours:**  
Mon–Sun: 7 AM–6 PM

#### Valo Sit-Down

**Status line example:**  
Open today until 10 AM

**Hours:**  
Mon–Tue: Closed  
Wed–Fri: 7 AM–10 AM  
Sat–Sun: 7 AM–2 PM

### Location copy

#### Valo Curbside

Use this copy:

> Drive up, stay in your car, and we bring your coffee to you. Specialty coffee at drive-thru speeds.

Important wording details:

- Use **drive-thru**, not “drive-through.”
- Use **speeds**, plural.

#### Valo Sit-Down

Use this copy:

> Sit down, take in the view of Prescott, and try our coffees. The Valo tasting experience lives here.

### CTA buttons

Each location card can retain:

- Get directions
- View menu

The View menu button should scroll to the homepage menu section, not navigate to a separate full-page menu unless that page is intentionally preserved.

---

## 4. Menu preview and full menu behavior

### Current issue

The full menu is currently a separate page. When navigating from that page, the experience becomes awkward because top navigation takes the user away from the menu context.

### Required change

Do not make the full menu feel like a separate website page.

Use one of these two patterns.

### Preferred pattern: inline menu toggle

The homepage menu section should begin with a simplified menu.

Add a button:

> View full menu

When clicked, the simplified menu section expands or swaps into the full menu.

At the bottom of the full menu, include:

> View simplified menu

This creates a simple toggle between the short and full versions.

### Acceptable alternative: modal

The full menu can open as a modal.

If using a modal:

- The upper-right control should say **Go back** or use a clear X close button.
- Closing the modal should return the user to the same place on the homepage.
- The background page should not navigate away.
- The modal should be keyboard accessible.

---

## 5. Full menu content changes

### General menu style

Remove imperative labels such as:

- pick a drink
- pick a bean
- pick add-ins
- pick a sweetener
- choose your experience

Use simple category labels instead.

---

## 6. Coffee section

### Current issue

The full coffee menu only lists latte and coffee, making it look like it was copied from the curbside menu.

### Required change

The Coffee section should include these items:

- Latte
- Coffee
- Cappuccino
- Flat White
- Cortado
- Espresso

For **Cappuccino** and **Flat White**, include this option text:

> Traditional or extra milk

### Pricing note

Keep existing prices where already defined. Do not invent customer-visible prices for newly added drinks unless the codebase already has approved pricing data.

---

## 7. Bean menu

### Heading change

Replace:

> pick a bean

With:

> Bean Menu

### Bean note

Replace the current bean note with:

> Each tasting note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans.

Keep the existing bean list unless there is a separate updated bean inventory.

---

## 8. Optional add-ins and sweeteners

### Current issue

The section currently says “pick add-ins” and “pick a sweetener.”

### Required change

Keep the **Optional** section, but remove those imperative subheadings.

Use a simple list instead.

Example structure:

**Optional**

- Vanilla
- Mocha
- Caramel
- Sugar
- Brown sugar
- Honey
- Maple
- Splenda
- Stevia

The distinction between add-ins and sweeteners can be implied by the item names.

---

## 9. Not Coffee section

### Required change

Remove:

- Jamaica

Reason: hibiscus yuzu already covers that style of drink, so Jamaica is duplicative.

Keep:

- Cocoa latte
- Chai latte
- Matcha latte
- Ube latte
- Golden latte
- Butterfly lemonade
- Hibiscus yuzu

---

## 10. Tasting Experience section

### Current issue

The “Available inside the Prescott Resort only” line appears low in the section, which makes it ambiguous whether it applies to only the not-coffee tasting experience or to all tasting experiences.

### Required change

Move the availability note to the top of the Tasting Experience section.

Use this wording:

> Tasting experiences are available at Valo Sit-Down only.

Then list:

- Coffee tasting experience
- Not coffee tasting experience

Do not use “inside the Prescott Resort only” as the primary wording. Use the location name consistently.

---

## 11. Coffee Beans section

### Required change

The current Coffee Beans section can remain separate.

Keep the half-pound bag structure.

Update the custom grinding/vacuum sealing note.

Replace:

> Available at both locations. For custom grinding and vacuum sealing, visit us inside the Prescott Resort.

With:

> Available at both locations. For custom grinding and vacuum sealing, visit Valo Sit-Down.

---

## 12. Philosophy / Our Approach section

### Current issue

Philosophy should not be a separate page. It should be included near the bottom of the homepage.

### Required change

Move the philosophy content into the homepage.

Remove the separate “Read our philosophy” page flow.

The homepage section can be titled:

> Our Approach

or:

> Our Coffee Philosophy

### Opening copy

Replace the current simple-menu copy with:

> Every drink on our menu is made with pure, raw ingredients. We do not add anything else, so the bean’s naturally occurring flavors can be enjoyed clearly.

---

## 13. Philosophy copy revisions

### Section: What is coffee?

Replace the current text with:

> Coffee, to us, is any drink where you can clearly taste the natural flavor notes of the coffee bean. Any drink you order from our coffee menu highlights this philosophy.

### Section: Where do the tasting notes come from?

Replace the current text with:

> Coffee is the seed of a coffee cherry. Like any fruit, it comes in many varietals. For example, a Honeycrisp and a Granny Smith naturally have their own unique flavor profiles. The same is true of coffee. Every variety carries its own naturally occurring flavor notes. We source beans with relatable and recognizable flavor notes such as strawberry, peach, and peanut butter. The best way to discover how this works is to try our coffee tasting experience at our Valo Sit-Down location.

### Section: How do we make espresso?

Keep the existing section, but replace the final sentence with:

> Each choice lets us highlight the bean’s naturally occurring flavor notes so that we can serve you the best cup of coffee we know how to make.

### Remove this section entirely

Delete:

> How do we make the perfect drink?

Also delete the paragraph beneath it.

---

## 14. Footer

### Current issue

The footer repeats location cards, addresses, hours, and Get directions links. Once the Visit Valo section includes full hours, this duplication is unnecessary.

### Required change

Remove from the footer:

- Location names
- Addresses
- Hours
- Get directions links
- “Prescott, Arizona”

The footer should only include:

- Phone number
- Email address
- Copyright

Suggested footer format:

> 928-910-6087  
> support@valocoffee.com  
> © Valo Coffee

---

## 15. Copy consistency rules

Apply these across the site:

- Use **Valo Curbside** and **Valo Sit-Down** consistently.
- Do not use “Valo” alone when referring to the sit-down location.
- Prefer clear category labels over instructions.
- Avoid “pick,” “choose,” and other imperative menu labels.
- Use “drive-thru” instead of “drive-through.”
- Use “naturally occurring flavor notes” consistently.
- Avoid ambiguous phrases like “inside the Prescott Resort” when the intended meaning is “Valo Sit-Down only.”
- Keep the tone simple, direct, and confident.

---

## 16. Technical implementation notes

### Data structure

Create or centralize reusable data for:

- Locations
- Weekly hours
- Menu categories
- Menu items
- Bean list
- Footer contact info

Do not hardcode the same hours in multiple components.

### Hours logic

The status line should be generated from the same hours data shown in the location card.

Required status behavior:

- If currently open: `Open today until [closing time]`
- If closed before opening: `Opens today at [opening time]`
- If closed for the day: `Closed now · Opens [next open day] at [opening time]`
- If closed all day: `Closed today · Opens [next open day] at [opening time]`

Use America/Phoenix time.

### Full menu state

If using the inline toggle:

- Button state should be accessible.
- The expanded full menu should remain in the same page flow.
- The simplified menu button should return the section to the shorter version.

If using the modal:

- Trap focus inside the modal.
- Support Escape to close.
- Restore focus to the button that opened it.
- Prevent background scrolling while open.

---

## 17. Acceptance criteria

The update is complete when all of the following are true:

- The homepage has a hero image carousel.
- The top nav no longer shows Locations, Menu, and Philosophy.
- The homepage uses **Valo Curbside** and **Valo Sit-Down**.
- Each location card shows a useful current status plus full weekly hours.
- The full menu no longer uses “pick” or “choose” labels.
- Coffee includes latte, coffee, cappuccino, flat white, cortado, and espresso.
- Cappuccino and flat white include “Traditional or extra milk.”
- The bean section is labeled **Bean Menu**.
- The bean note says nothing has ever been added to the coffee beans.
- Jamaica is removed from Not Coffee.
- Tasting Experience availability appears at the top of that section and says it is available at Valo Sit-Down only.
- Coffee Beans custom grinding/vacuum sealing copy refers to Valo Sit-Down.
- Philosophy is part of the homepage, not a separate experience.
- “How do we make the perfect drink?” is removed.
- The footer only contains phone, email, and copyright.
- There is no duplicate location block in the footer.
- Full menu navigation no longer creates an awkward separate-page flow.
