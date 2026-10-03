# AURA ONE — Autonomous Architectural Climate Module

An editorial, cinematic product storytelling experience engineered for **AURA ONE**, a revolutionary zero-emission thermodynamic air regenerator designed for luxury residential sanctuaries, protected heritage facades, and sustainable commercial landmarks.

Inspired by the award-winning craftsmanship and motion choreography of modern digital design studios, AURA ONE delivers an immersive scroll narrative without external compressor cages, noise pollution, or harmful refrigerants.

---

## Key Highlights

- **The Pinned Hero Runway (450vh)**: Seamless 1:1 scroll choreography scrubbing the monolithic climate console from hero stage into an architectural interior room setting and through four key engineering breakthroughs.
- **Thermodynamic Performance (COP 18.2)**: Delivering 18.2W of cooling output for every 1W of electricity consumed—over 5 times the efficiency of conventional multi-split HVAC.
- **14 dB Laminar Inaudibility**: Magnetic levitation air displacement operating below the ambient noise floor of a private library.
- **Zero Outdoor Footprint**: 100% internal thermodynamic cycle preserving protected facades and terrace vistas.
- **Kinetic Typographic Manifesto (240vh)**: Pinned deep forest green chapter with rotating biophilic geometric curves and cross-fading typography.
- **Cinematic Pre-Footer Climax**: Dynamic `clip-path: inset(...)` frame expansion expanding from a framed card to full-bleed viewport with differential 3-tier parallax depth.
- **Lenis Smooth Scroll & GSAP Sync**: Fluid inertia-based momentum scrolling synchronized frame-for-frame with GSAP ScrollTrigger.
- **Performance & Accessibility First**: Zero layout thrashing, strict reduced-motion fallback (`prefers-reduced-motion`), semantic HTML5, and responsive design across 1440px, 1024px, 768px, and 390px viewports.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS, CSS Custom Properties, Fluid `clamp()` Typography
- **Animation**: GSAP 3 (ScrollTrigger, Timelines)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Quality Gates**: ESLint (`next/core-web-vitals`), TypeScript Strict Mode, Automated Headless Chrome QA

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+ (tested on Node v22.15)
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

### Verification & Linting

```bash
# Run ESLint check
npm run lint

# Run automated browser QA test suite
node scripts/verify_browser.mjs
```

---

## Project Structure

```
├── docs/
│   └── reference-design-analysis.md    # Reference site breakdown & design tokens
├── scripts/
│   └── verify_browser.mjs              # Multi-viewport headless QA test runner
├── public/
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css                 # Design tokens, typography clamp, grid system
│   │   ├── icon.svg                    # Vector brand favicon
│   │   ├── layout.tsx                  # Root layout & SmoothScroll provider
│   │   └── page.tsx                    # Assembled narrative chapters
│   ├── components/
│   │   ├── common/
│   │   │   └── CountUp.tsx             # ScrollTrigger numerical counter
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Minimalist fixed navigation & mobile drawer
│   │   │   ├── Footer.tsx              # Architectural editorial footer
│   │   │   └── SmoothScroll.tsx        # Lenis smooth scroll engine
│   │   ├── product/
│   │   │   ├── ProductVisual.tsx       # 2.5D architectural console module
│   │   │   └── AirflowVectors.tsx      # SVG animated laminar streamlines
│   │   └── sections/
│   │       ├── HeroStage.tsx           # 450vh pinned cover & 4-feature story
│   │       ├── ManifestoChapter.tsx    # 240vh full-screen dark forest manifesto
│   │       ├── AudienceSection.tsx     # 3 architectural archetypes & tabs
│   │       ├── TechnologyMatrix.tsx    # Quantitative KPI tiles & COP comparison
│   │       └── CinematicPreFooter.tsx  # Dynamic inset clip-path & parallax CTA
│   └── lib/
│       └── utils.ts                    # Class name merging utility
```

---

## License

Private & Confidential — Built for DemoWebJob / AURA Climate Technologies.
