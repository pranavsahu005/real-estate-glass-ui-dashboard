You are a senior product designer and production-grade frontend engineer. Build a **premium TV dashboard preview website for “Infinity Core, Bhopal”**, designed specifically for display on a large office TV / Android TV screen.

The goal is NOT to create a normal responsive website. The goal is to create a **high-end, wide-screen real-estate/business analytics dashboard** that looks like a premium SaaS product presentation running continuously on a TV.

## 1. PROJECT CONTEXT

This is a **preview/demo version** of an internal application.

The actual application contains multiple tables and business data related to the real-estate workflow. The dashboard should visually represent that data in a polished executive overview.

The company is:

**Infinity Core, Bhopal**

The design should feel suitable for:

* Real-estate company office TV
* Management dashboard
* Sales/CRM overview
* Client activity monitoring
* Site visit tracking
* Calls and interactions
* Daily business performance

The dashboard must look premium enough that it could realistically be shown to a client or company director.

Do NOT make it look like a generic admin template.

---

# 2. REFERENCE DESIGN

Use the uploaded/reference image as the primary visual direction.

The reference has:

* Warm luxury real-estate photography
* Large architectural property image as the visual foundation
* Soft cream / beige / champagne interface panels
* Transparent glass panels
* Subtle frosted-glass effect
* Rounded cards
* Thin borders
* Very soft shadows
* Elegant spacing
* Minimal typography
* Premium editorial composition
* Data widgets floating over the property image
* Circular analytics
* Small KPI cards
* Horizontal data panels
* A sophisticated luxury-property presentation style

Recreate the **design language and visual hierarchy**, not a literal pixel-by-pixel copy.

The final dashboard should immediately communicate:

**Luxury Real Estate + Business Intelligence + Executive Dashboard**

Avoid the appearance of:

* Banking software
* Crypto dashboard
* Gaming dashboard
* Developer dashboard
* Generic Bootstrap admin panel
* Dark SaaS dashboard

---

# 3. MOST IMPORTANT DESIGN DIRECTION

The entire dashboard must be:

**LIGHT + PREMIUM + GLASSY + WARM + EDITORIAL + PROFESSIONAL**

Absolutely DO NOT use:

* Dark UI
* Black backgrounds
* Neon
* Cyberpunk
* Purple gradients
* Blue glowing effects
* Excessive gradients
* Excessive blur
* Fake 3D plastic cards
* Childish animations
* Huge bold typography
* Cartoon icons
* Excessive glass transparency
* Overloaded UI
* Generic dashboard templates
* Giant numbers everywhere
* Excessive borders
* Cheap-looking shadows

This is a **luxury corporate dashboard**, not a flashy technology dashboard.

---

# 4. TV-FIRST CANVAS

Design the primary experience for a **wide TV display**.

Use:

**16:9 aspect ratio**

The main target should feel like:

1920 × 1080

It should also scale gracefully to:

* 1366 × 768
* 1600 × 900
* 1920 × 1080
* 2560 × 1440
* Large Android TV displays

The dashboard should use the entire available viewport.

Do NOT create a narrow centered website with large unused margins.

Do NOT design it primarily for mobile.

Desktop/TV is the primary target.

---

# 5. EXISTING ASSETS

The project folder is:

`D:\Downloads Devloper\Infinity Code tv Glass Dashboard`

Current files:

* `company logo.jpeg`
* `company_logo-removebg-preview.png`
* `Dune preview dashbord.jpeg`
* `house ui image.jpeg`
* `wide img.jpeg`

These assets are intentionally provided for the dashboard.

IMPORTANT:

Before implementing the UI:

1. Inspect every provided image.
2. Understand which image represents the company branding.
3. Identify the architectural/property image.
4. Identify the dashboard reference image.
5. Identify the wide image.
6. Convert usable raster assets to **WebP** where appropriate to reduce storage and improve loading performance.
7. Preserve visual quality.
8. Do not blindly convert the company logo if doing so damages transparency or quality.
9. Use the correct company logo in the appropriate branding location.
10. Do not create fake replacement assets when a provided asset is suitable.

The property image should become an important part of the dashboard visual composition.

The additional wide image is only a secondary demo asset. Do not force every image into the first dashboard if it damages the composition.

---

# 6. FIRST VERSION SCOPE

For this first implementation, create **ONLY ONE MAIN DASHBOARD PAGE**.

Do not waste time creating unnecessary pages yet.

However, structure the project properly so additional TV dashboard pages can be added later without restructuring the application.

Create a proper pages/components architecture.

For example, logically separate:

* Dashboard page
* Header
* KPI cards
* Analytics panels
* Activity panels
* Chart components
* Property visual
* Footer/status bar
* Reusable glass panels

Do not dump everything into one huge component.

Use clean reusable React components.

---

# 7. DASHBOARD INFORMATION ARCHITECTURE

The main dashboard should represent today's business activity.

The primary KPI concepts are:

### Clients Today

Show:

* Number of clients today
* Small comparison with previous period
* Subtle trend indicator

Example:

**Clients Today**
`24`

`+12.4% from yesterday`

---

### Interactions Today

Show:

* Total client interactions
* Small trend
* Supporting information

Example:

**Interactions**
`68`

`42 completed`

---

### Calls

Show:

* Calls made
* Calls connected
* Optional completion percentage

Example:

**Calls**
`37`

`29 connected`

---

### Site Visits

Show:

* Site visits today
* Confirmed visits
* Completed visits

Example:

**Site Visits**
`12`

`8 completed`

Do not blindly use these exact numbers as permanent data.

Create a clean mock-data layer so the values can later be replaced by real Supabase/API data.

---

# 8. ADDITIONAL EXECUTIVE ANALYTICS

The dashboard should not only contain four KPI cards.

Create a sophisticated analytics area.

Include:

### Client Activity Trend

A refined line/area chart showing activity throughout the day.

Possible data:

09 AM
10 AM
11 AM
12 PM
01 PM
02 PM
03 PM
04 PM
05 PM
06 PM

Use a sophisticated thin chart.

Avoid the typical oversized dashboard graph.

---

### Lead / Client Distribution

Create a clean circular or semi-circular chart.

Possible categories:

* New
* Contacted
* Interested
* Site Visit
* Converted

Use restrained warm neutral tones.

No rainbow charts.

---

### Site Visit Performance

Create a horizontal analytical card showing:

Scheduled
Confirmed
Completed
Follow-up

Use elegant progress indicators rather than giant percentages.

---

### Recent Client Activity

Create a compact glass panel containing realistic business activity.

Example rows:

`09:42`
New client enquiry
Residential property

`10:18`
Site visit confirmed
Green Glades Estate

`11:05`
Client call completed
Follow-up scheduled

`12:32`
New interaction
Property enquiry

Keep these subtle and readable from a TV.

---

# 9. PROPERTY VISUAL AS THE HERO BACKGROUND

The architectural/property image should be treated as the visual foundation of the page.

Do NOT simply put the image inside a normal card.

Create a premium composition where the property image occupies a large portion of the screen.

The image should feel integrated into the dashboard.

Possible composition:

* Full viewport warm property image
* Extremely subtle overlay for readability
* Glass analytics panels positioned over the image
* Main analytics concentrated around the edges
* Central architectural area kept visually clean

The property should remain clearly visible.

Do not cover the entire building with cards.

The image must feel like part of the brand experience, not a random background.

---

# 10. GLASS DESIGN SYSTEM

Use a **premium light glassmorphism system**.

Panels should look like:

frosted warm glass

not:

transparent plastic.

Recommended visual direction:

* Warm ivory / cream transparency
* Slightly opaque surfaces
* Very subtle backdrop filtering
* Thin soft white borders
* Gentle shadows
* Large sophisticated corner radius
* Extremely subtle internal highlights

Glass must remain readable.

Do not overuse blur.

Do not make the cards so transparent that text becomes difficult to read.

The reference image has a refined frosted-glass appearance. Match that level of restraint.

---

# 11. COLOUR SYSTEM

Base palette should be inspired by:

* Warm ivory
* Soft cream
* Champagne
* Sand
* Light taupe
* Architectural beige
* Soft charcoal
* Muted bronze
* Warm grey

Use dark charcoal only for text.

The dashboard must remain predominantly light.

No neon accent colours.

No saturated gradients.

No bright blue SaaS colours.

No purple.

No black dashboard.

---

# 12. TYPOGRAPHY

Typography should be premium and restrained.

Use a modern high-quality sans-serif such as:

* Inter
* Geist
* Manrope
* Plus Jakarta Sans

Choose ONE appropriate font system.

Typography hierarchy must be elegant.

Avoid oversized heavy/bold headings.

The reference uses sophisticated small-to-medium typography.

Use:

* Medium
* Regular
* Semibold only where genuinely necessary

Avoid excessive `font-bold`.

The company name should feel premium, not loud.

---

# 13. COMPANY BRANDING

Use the supplied Infinity Core logo.

The branding should appear in the header in a refined manner.

Do not create a huge logo.

Do not distort the logo.

Do not recolour it unless absolutely necessary.

Create a subtle header such as:

**Infinity Core**
Bhopal

with the actual logo.

The branding should feel like a luxury real-estate company.

---

# 14. HEADER

Create a minimal premium top header.

Possible structure:

Left:

Infinity Core logo
Infinity Core
Bhopal

Center or secondary area:

**Executive Overview**

Right:

**Today**
05 September 2026

and a small live/status indicator.

Keep everything subtle.

Do not make the header consume too much vertical space.

---

# 15. MAIN LAYOUT

Create a carefully composed TV dashboard.

Suggested visual hierarchy:

TOP:
Minimal brand/header

UPPER CONTENT:
4 executive KPI glass cards

CENTER:
Large property visual + primary analytics

LOWER AREA:
Charts + activity + site visit analytics

BOTTOM:
Thin white footer/status line

The layout should look intentionally art-directed.

Do not make every section equal-sized boxes.

Use visual hierarchy.

The property image should dominate.

Analytics should complement the image.

---

# 16. FOOTER

The reference image contains a thin white/light area at the bottom.

Recreate this concept as a subtle dashboard footer.

The footer should be attached to the bottom of the viewport.

Keep it extremely minimal.

Possible content:

`Infinity Core • Bhopal`

`Executive Dashboard`

`Last updated 01:42 PM`

Do not create a conventional website footer with links.

This is a TV application, so the footer should behave like a **status bar**.

---

# 17. ICONS

Use a professional icon library such as:

Lucide React

or another lightweight modern icon library.

Use icons sparingly.

Icons should be:

* Thin
* Elegant
* Small
* Consistent

Do not use emojis.

Do not use colourful icons.

Do not use giant decorative icons.

---

# 18. CHARTS

Use a reliable React charting library such as:

Recharts

or another lightweight production-grade solution.

Charts must look premium.

Do NOT use:

* giant axes
* excessive grid lines
* colourful legends
* default chart styling
* childish pie charts

Use subtle:

* thin lines
* soft fills
* clean tooltips
* minimal labels
* restrained colours

Charts should look like part of the reference luxury dashboard.

---

# 19. ANIMATION

The TV dashboard can have subtle motion.

Use very restrained animations:

* KPI values fade in
* Cards gently appear
* Chart line draws subtly
* Property image loads smoothly
* Activity indicators update subtly

No:

* bouncing
* excessive zoom
* parallax overload
* spinning cards
* flashy transitions
* neon glow
* distracting motion

The dashboard should remain comfortable to watch for hours.

---

# 20. DATA ARCHITECTURE

For now, use local mock data.

Create a clean structure such as:

`src/data/dashboardData.js`

or an equivalent TypeScript data layer.

The architecture must make it easy later to replace:

mock data

with:

Supabase/API/database data.

Do NOT implement Supabase now.

Do NOT add authentication now.

Do NOT build admin functionality now.

The client will connect the actual backend later.

Just make the frontend architecture integration-ready.

---

# 21. TECHNOLOGY

Use:

**React**

with a modern lightweight setup.

Preferred:

React + Vite

Use:

**Tailwind CSS**

for styling if it produces cleaner maintainable code.

Use modern component architecture.

Recommended:

* React
* Vite
* Tailwind CSS
* Lucide React
* Recharts
* CSS backdrop-filter where appropriate

Avoid unnecessary libraries.

Do not install huge UI frameworks just for basic cards.

---

# 22. PROJECT STRUCTURE

Create a clean production-ready structure.

For example:

src/
components/
dashboard/
DashboardHeader
KPIGrid
KPICard
ClientActivityChart
ClientDistribution
SiteVisitPerformance
RecentActivity
PropertyHero
DashboardFooter
data/
dashboardData
pages/
Dashboard
assets/
styles/
App
main

The exact structure can be improved if a better architecture is appropriate.

The important requirement is:

**No monolithic App.jsx.**

---

# 23. RESPONSIVENESS

Although TV is the primary target, the dashboard must not break on normal desktop screens.

Support:

1920 × 1080
1600 × 900
1366 × 768
1280 × 720

Also make it reasonably responsive for smaller screens for development/testing.

However:

DO NOT allow mobile-first styling decisions to ruin the TV layout.

The 16:9 desktop/TV experience is the priority.

---

# 24. TV EXPERIENCE

This dashboard should behave like an installed TV application.

Therefore:

* Full viewport
* No browser-like website feeling
* No unnecessary scrolling
* No visible vertical scrollbar
* No horizontal scrollbar
* Content should fit naturally inside the viewport
* Avoid accidental overflow
* Use `100dvh` appropriately
* Prevent layout shifts
* Avoid elements being cut off

The entire dashboard should be visible at once on a standard 1080p TV.

Scrolling should NOT be necessary for the main dashboard.

---

# 25. IMAGE PERFORMANCE

Because this will run on a TV:

Optimize image loading.

Use:

* WebP
* Proper dimensions
* `object-fit`
* `loading` strategy
* Avoid unnecessarily huge source images
* Avoid repeatedly decoding the same image

Do not sacrifice visual quality.

If a loading skeleton is needed, use a subtle warm skeleton that matches the dashboard palette.

Do not use a dark skeleton.

---

# 26. VISUAL DETAILS THAT MATTER

Pay extreme attention to:

* Corner radius consistency
* Panel spacing
* Alignment
* Text hierarchy
* Image cropping
* Glass opacity
* Border softness
* Shadow softness
* Chart proportions
* Empty space
* Logo sizing
* Footer alignment
* TV readability

The dashboard should look like someone intentionally designed every pixel.

---

# 27. NO PATCHWORK

This is extremely important.

Do NOT build a basic dashboard first and then randomly decorate it with glass effects.

Design the entire visual system first.

Everything must belong to one coherent design language.

Do not produce:

Card + card + card + card + random image + random chart.

Instead create a single composition.

The dashboard should look like a **premium real-estate intelligence screen**.

---

# 28. REFERENCE IMAGE ANALYSIS

Use the supplied reference to understand:

* Glass panel proportions
* Rounded panel treatment
* Property-image relationship
* Warm colour temperature
* Analytics positioning
* Minimal typography
* Luxury visual rhythm
* Soft card borders
* Circular analytics treatment
* Bottom status/footer structure

The final result should feel like it belongs to the same design family.

However, adapt the content specifically for:

**Infinity Core Bhopal**

and the real-estate business workflow.

---

# 29. MOCK DATA

Create believable realistic demo values.

Use business-oriented information such as:

Clients Today
24

Interactions Today
68

Calls
37

Site Visits
12

Conversion-related analytics can include:

New Enquiries
18

Qualified
11

Follow-ups
23

Site Visit Scheduled
9

Site Visit Completed
8

Do not make all values huge.

The dashboard should feel like a real internal company dashboard.

---

# 30. PROPERTY CONTEXT

The dashboard is related to real estate and should use the provided bungalow/property imagery.

The property image should feel like:

a premium development being monitored through a modern business intelligence system.

Do not add fake property names unless they fit naturally.

If using a development name, prefer a neutral label such as:

**Property Portfolio**

or

**Featured Development**

rather than inventing unnecessary branding.

---

# 31. INTERACTION

The dashboard can include subtle interactions for preview/demo purposes:

* Hovering over KPI cards
* Chart tooltip
* Activity hover state
* Small information reveal
* Smooth micro transitions

But because this is intended for a TV, interactions must remain secondary.

No giant hover animations.

---

# 32. ACCESSIBILITY

Maintain:

* Strong text contrast
* Readable font sizes
* Semantic HTML
* Proper aria labels for icon-only buttons
* Keyboard accessibility where applicable

Do not sacrifice readability for visual effects.

---

# 33. QUALITY BAR

Before considering the implementation complete, inspect the dashboard as if it were being presented to:

* CEO
* Real-estate director
* Client
* Office visitor
* Design agency reviewer

Ask:

Does this look like a premium commercial product?

Does it look expensive?

Does it look intentionally designed for a TV?

Does the property photography feel integrated?

Does the glass look refined?

Does the analytics look professional?

Does the Infinity Core branding feel natural?

Does anything look like a template?

Does anything look childish?

Does anything look unnecessarily flashy?

If yes, refine it.

---

# 34. IMPORTANT VISUAL NEGATIVES

Absolutely avoid:

NO DARK MODE
NO NEON
NO CYBERPUNK
NO PURPLE
NO BRIGHT BLUE
NO EXCESSIVE GRADIENTS
NO 3D PLASTIC
NO HUGE BOLD TEXT
NO CHILDISH UI
NO EMOJIS
NO GENERIC ADMIN TEMPLATE
NO BOOTSTRAP LOOK
NO OVERLOADED SIDEBAR
NO SIDEBAR NAVIGATION FOR THIS FIRST SCREEN
NO EXCESSIVE GLASS BLUR
NO EXCESSIVE GLOW
NO RANDOM SHADOWS
NO SCROLLBAR
NO MOBILE-APP-LIKE NARROW LAYOUT
NO UNNECESSARY BUTTONS
NO FAKE FEATURES
NO PLACEHOLDER TEXT
NO LOREM IPSUM

---

# 35. FINAL SCREEN COMPOSITION

The first screen should roughly communicate:

**Infinity Core**
Bhopal

Executive Overview

[ Clients Today ] [ Interactions ] [ Calls ] [ Site Visits ]

Then a large premium property visual with integrated glass analytics.

Within the composition:

Client Activity
Performance analytics
Site visit analytics
Client distribution
Recent activity

And at the bottom:

A thin elegant light footer/status bar.

The entire thing should feel like one premium visual composition rather than multiple disconnected components.

---

# 36. DEVELOPMENT REQUIREMENT

Actually inspect the supplied assets before implementing.

Use the existing folder assets intelligently.

Convert suitable images to WebP.

Then build the React application.

Run the project.

Check it visually at a 16:9 desktop viewport.

Fix:

* overflow
* clipping
* spacing
* typography
* image scaling
* chart alignment
* responsive issues
* loading behaviour

Do not stop after generating the first rough version.

Iterate until the UI looks polished.

---

# 37. CODE QUALITY

Write clean production-grade code.

Use:

* reusable components
* clear naming
* centralized mock data
* maintainable styling
* sensible component boundaries
* no duplicated giant CSS blocks
* no inline-style chaos
* no unnecessary dependencies

Do not leave unfinished sections.

Do not leave TODO comments.

Do not leave placeholder components.

Do not create unnecessary architecture for features that are not currently required.

---

# 38. MOST IMPORTANT FINAL INSTRUCTION

Build **ONE exceptionally polished TV dashboard page** first.

Do not build five mediocre pages.

I want the first page to be visually impressive and production-quality.

It should look like:

**a luxury real-estate executive intelligence dashboard displayed on a premium office TV**

with the **provided property image as the visual foundation**, **Infinity Core branding**, **warm light glassmorphism**, **professional analytics**, **subtle charts**, **clean KPI cards**, **excellent spacing**, and the **thin bottom status/footer line inspired by the reference**.

The final result must be:

**LIGHT**
**WARM**
**GLASSY**
**PREMIUM**
**MINIMAL**
**EDITORIAL**
**REAL-ESTATE**
**EXECUTIVE**
**TV-FIRST**

No dark UI. No neon. No childish styling. No unnecessary bold typography. No generic dashboard template. No patchwork.

Make it look like a premium product that a professional design agency would confidently present to the client.
