# PsalmoteeData – VTU Frontend

A production-ready React + Vite frontend for the **PsalmoteeData** VTU platform.
Designed to be embedded inside a WordPress site via the **VTU Press Ultimate** plugin.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| Axios | HTTP client (ready for API calls) |

---

## Project Structure

```
psalmoteedata/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Root component + page router
    ├── styles/
    │   └── index.css         # Global CSS + Tailwind directives + design tokens
    ├── data/
    │   └── faqData.js        # All FAQ content (edit questions here)
    ├── assets/
    │   ├── psalmoteedata-logo.png
    │   └── pdlogo.ico
    ├── components/
    │   ├── Header.jsx         # Sticky nav + mobile drawer
    │   ├── Hero.jsx           # Hero section with wallet card
    │   ├── Services.jsx       # Services grid (4 cards)
    │   ├── Features.jsx       # Why Choose Us (4 features)
    │   ├── HowItWorks.jsx     # 3-step process
    │   ├── Testimonials.jsx   # Customer reviews
    │   ├── MiniFAQ.jsx        # Homepage FAQ preview (4 questions)
    │   ├── CTA.jsx            # Call-to-action section
    │   ├── Footer.jsx         # Footer with links + contact
    │   ├── FAQItem.jsx        # Accordion item (question/answer)
    │   ├── FAQSearch.jsx      # Real-time search input
    │   ├── FAQCategory.jsx    # Sidebar category button
    │   ├── ScrollProgress.jsx # Top scroll progress bar
    │   └── BackToTop.jsx      # Floating back-to-top button
    └── pages/
        ├── Home.jsx           # Homepage (assembles all sections)
        └── FAQ.jsx            # Full FAQ page
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your logo assets
Place your logo files into `src/assets/`:
- `psalmoteedata-logo.png`
- `pdlogo.ico`

### 3. Start dev server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```
Outputs to `dist/` — upload to your WordPress theme or embed as needed.

---

## WordPress Integration

This app is designed to mount inside a `<div id="root"></div>` injected by the **VTU Press Ultimate** plugin.

1. Run `npm run build`
2. Upload `dist/assets/` files to your WordPress media/theme folder
3. Enqueue the JS and CSS in your theme's `functions.php`
4. Ensure `<div id="root"></div>` is present on the target page

All navigation uses plain `<a href="">` links — no React Router required.

---

## Customization

### Colors
Edit `src/styles/index.css` and `tailwind.config.js`:
```css
:root {
  --primary:  #0EA5C6;   /* Teal */
  --blue:     #2563EB;   /* Blue */
  --accent:   #F59E0B;   /* Amber */
  --bg:       #0B1220;   /* Dark background */
  --card:     #111827;   /* Card surface */
}
```

### FAQ Content
Edit `src/data/faqData.js` — add, remove, or reorder categories and questions.

### Service Links
Edit the `href` props in `src/components/Services.jsx` and `src/components/Hero.jsx`
to match your WordPress page URLs.

---

## Design System

- **Font Display:** Clash Display (700, 600, 500)
- **Font Body:** DM Sans (400, 500, 600)
- **Border Radius:** `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** Soft glow using `rgba(14,165,198,…)`
- **Motion:** Framer Motion `useInView` for scroll-triggered fade-ups

---

## License
Private — PsalmoteeData © 2025
