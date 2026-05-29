# Dialogues 254

> **Putting young voices at the heart of decision-making**

Dialogues 254 is the official web platform for **Dialogues 254**, a youth-led community organisation based in Kenya. The platform communicates the organisation's mission, showcases its impact, presents its programmes, and provides pathways for young people to volunteer, donate, and get involved in civic life.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Live Features](#live-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Design System](#design-system)
8. [Pages & Components](#pages--components)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [Contact & Credits](#contact--credits)

---

## Project Overview

Dialogues 254 facilitates structured civic conversations that bridge ethnic, economic, and generational divides across Kenya. To date the organisation has:

| Metric | Value |
|---|---|
| Youth directly engaged | **5,200+** |
| Structured dialogues facilitated | **47** across 12 counties |
| Policy recommendations submitted | **28** to national & county governments |
| Participants reporting increased civic confidence | **63%** |

The web application serves as the organisation's primary digital presence — enabling the public to learn about the mission, explore programmes, register interest via the Volunteer modal, and donate to fund grassroots dialogues.

---

## Live Features

- **Hero landing page** with animated call-to-action and impact statistics
- **About page** — organisation history, team, values, and constitutional grounding (Articles 10 & 118)
- **Programmes page** — detailed breakdown of the three core programme pillars
- **Get Involved page** — volunteer registration form, partnership inquiry, and FAQ accordion
- **Contact page** — contact form with Google Maps embed and full contact details
- **Donate page** — donation tiers, M-Pesa and bank transfer instructions
- **Volunteer modal** — overlay form accessible from multiple pages
- **Responsive Navbar** — mobile hamburger menu with smooth animated transitions
- **Animated page sections** — scroll-triggered entrance animations via Framer Motion
- **Glassmorphism UI elements** — `.glass` and `.glass-dark` utility classes

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [React](https://react.dev) | 19.x |
| Build tool | [Vite](https://vite.dev) | 8.x |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | 4.x |
| Animation | [Framer Motion](https://www.framer.com/motion/) | 12.x |
| Icons | [Lucide React](https://lucide.dev) | 1.x |
| Routing | [React Router DOM](https://reactrouter.com) | 7.x |
| Language | JavaScript (ES Modules) | — |
| Linting | ESLint (with React Hooks & Refresh plugins) | 10.x |

---

## Project Structure

```
Dialogue254/
└── dialogue254/          # Vite application root
    ├── public/
    │   └── favicon.png   # Organisation logo (used as browser tab icon)
    ├── src/
    │   ├── assets/       # Optimised image assets (cover, image1–image11)
    │   ├── components/
    │   │   ├── Navbar.jsx          # Responsive top navigation bar
    │   │   ├── Footer.jsx          # Site-wide footer with links & socials
    │   │   ├── VolunteerModal.jsx  # Reusable volunteer registration overlay
    │   │   ├── FAQAccordion.jsx    # Animated accordion for FAQ section
    │   │   └── Img.jsx             # Lazy-loading image wrapper component
    │   ├── pages/
    │   │   ├── Home.jsx            # Landing page (hero, stats, programmes, gallery, CTA)
    │   │   ├── About.jsx           # About the organisation
    │   │   ├── Programmes.jsx      # Core programme details
    │   │   ├── GetInvolved.jsx     # Volunteer, partner, FAQ
    │   │   ├── Contact.jsx         # Contact form + map
    │   │   └── Donate.jsx          # Donation options & payment instructions
    │   ├── App.jsx                 # Root router and layout shell
    │   ├── main.jsx                # React DOM entry point
    │   └── index.css               # Global styles, Tailwind theme, glass utilities
    ├── index.html                  # HTML shell (Google Fonts, favicon, viewport)
    ├── vite.config.js              # Vite + Tailwind plugin configuration
    ├── eslint.config.js            # ESLint flat config
    └── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x  
- **npm** ≥ 9.x  

### Installation

```bash
# Clone the repository
git clone https://github.com/Benjakusa/Dialogue254-WebApp.git
cd dialogue254/dialogue254

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (Vite default).  
Hot Module Replacement (HMR) is enabled — changes to `.jsx` and `.css` files reflect instantly.

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Bundle optimised production files to `dist/` |
| Preview | `npm run preview` | Serve the `dist/` build locally for final checks |
| Lint | `npm run lint` | Run ESLint across all source files |

---

## Design System

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#00097a` | Navy blue — headings, buttons, borders, icons |
| `--color-secondary` | `#00eff8` | Cyan — accents, highlights, hover states |
| White | `#ffffff` | Page backgrounds, card surfaces |
| `#1a1a2e` | — | Default body text |

> **Contrast rule:** Cyan (`#00eff8`) is always paired with **black or navy text/backgrounds** to ensure WCAG-compliant readability. Never place cyan text on a white background.

### Typography

| Element | Font | Weight |
|---|---|---|
| Body, paragraphs, UI | Inter | 400 / 500 / 600 |
| Headings (h1–h6) | Outfit | 600 / 700 / 800 |

Google Fonts are loaded via `<link>` in `index.html` with `display=swap` for performance.

### Utility Classes

```css
.glass       /* Frosted-glass card — white/40 + backdrop-blur */
.glass-dark  /* Dark frosted-glass — primary/40 + backdrop-blur */
```

### Animation Conventions

All scroll-triggered entrance animations use Framer Motion's `whileInView` with `once: true` to prevent repeat firings. Standard variants used site-wide:

- **`fadeUp`** — opacity 0→1, y 30→0, 0.6s ease-out  
- **`staggeredContainer`** — staggerChildren: 0.15s

---

## Pages & Components

### Pages

| Route | File | Summary |
|---|---|---|
| `/` | `Home.jsx` | Hero section, impact stats, programme cards, featured story, values grid, gallery, CTA |
| `/about` | `About.jsx` | Mission, history, team profiles, constitutional grounding |
| `/programmes` | `Programmes.jsx` | Structured Dialogues, Civic Education, Youth Leadership & Inclusion |
| `/get-involved` | `GetInvolved.jsx` | Volunteer form, partnership info, FAQ accordion |
| `/contact` | `Contact.jsx` | Contact form, location map, office details |
| `/donate` | `Donate.jsx` | Donation tiers, M-Pesa Paybill / Till, bank transfer details |

### Components

| Component | Responsibility |
|---|---|
| `Navbar.jsx` | Responsive navigation with mobile hamburger menu and animated link transitions |
| `Footer.jsx` | Organisation info, navigation links, social media, copyright |
| `VolunteerModal.jsx` | Full-screen overlay modal with volunteer registration form; triggered from Home and Get Involved |
| `FAQAccordion.jsx` | Animated expand/collapse FAQ items used on the Get Involved page |
| `Img.jsx` | Thin wrapper around `<img>` that applies consistent object-fit and lazy-loading behaviour |

---

## Deployment

### Build for production

```bash
cd dialogue254
npm run build
```

The optimised output is written to `dialogue254/dist/`. This folder can be deployed to any static hosting provider.

### Recommended Platforms

| Platform | Notes |
|---|---|
| **Vercel** | Zero-config for Vite apps — connect GitHub repo, set root directory to `dialogue254/` |
| **Netlify** | Add `_redirects` file in `public/` with `/* /index.html 200` for SPA routing |
| **GitHub Pages** | Use `vite-plugin-gh-pages` or GitHub Actions workflow |

#### Vercel configuration (`vercel.json`) — if needed at repo root

```json
{
  "root": "dialogue254",
  "outputDirectory": "dialogue254/dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### Netlify `public/_redirects`

```
/*  /index.html  200
```

> **Note:** Because this is a **Single Page Application** using React Router, all unknown paths must be redirected to `index.html` to allow client-side routing to handle navigation. Failing to configure this will result in 404 errors on page refresh.

---

## Contributing

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and ensure the app builds without errors:
   ```bash
   npm run build && npm run lint
   ```
3. Commit with a clear message and open a Pull Request against `main`.
4. All PRs are reviewed before merging.

---

## Contact & Credits

**Developer**  
Benard Ochieng  
Software Developer — [Opendesk](https://opendesk.co.ke)  
📧 [ben@opendesk.co.ke](mailto:ben@opendesk.co.ke)  
📞 +254 722 839 617  

**Organisation**  
Dialogues 254  
A youth-led community organisation committed to meaningful public participation across Kenya.  

---

*Built with ❤️ for Kenyan youth civic engagement.*
