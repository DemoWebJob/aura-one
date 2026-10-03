# Reference Design Analysis & Technical Specification: Caeli Énergie

## 1. Page Structure & Chapter Narrative
The reference website (`caeli-energie.com`) by studio *Beaucoup* is an Awwwards Site of the Day / Developer Award winning flagship product storytelling experience. It eschews standard SaaS templates in favor of a 7–8 chapter architectural journey where scroll position dictates visual transformation and product choreography.

### Chapter Breakdown:
1. **Header & Persistent Navigation**: Fixed minimalist top bar (`h-[5rem]` to `6rem`), pill-shaped containers, clean typography, language switch, CTA button, subtle backdrop blur.
2. **Hero Stage (The Cover - 500vh to 550vh Scroll Runway)**:
   - Sticky pinned viewport (`h-screen`, `sticky top-0`) spanning 5.5× viewport height.
   - Initial state: Oversized uppercase heading (`body-140`, `font-black`, center-aligned), sub-copy on right grid columns, product unit centered with floating scroll pill.
   - First scroll phase (0% - 35%): Headline and subtext dissolve smoothly; product scales from 2.0x down to 1.0x while moving along Y into an architectural interior room setting (with shadow, shelf, and potted plant layers). Animated aerodynamic airflow vectors emerge.
   - Second scroll phase (35% - 70%): Pinned container expands into a feature narrative modal/layer with dynamic `clip-path: inset()` reveal, introducing 4 core technical pillars.
   - Third scroll phase (70% - 100%): Feature carousel with animated circular step indicators, synchronized title, description, and angle transitions.
3. **Full-Screen Pinned Manifest ("Full-Screen Titles" - 200vh)**:
   - Pinned 200vh section with deep forest green background (`#002E1D`).
   - Dual ambient rotating vector motifs (biomimetic organic curve lines) scaling with scroll.
   - Kinetic editorial typography: Staggered character/line alpha scrub revealing the brand thesis.
4. **Interactive Audience & Segments Slider**:
   - 3 curated archetypes (e.g., Heritage Architecture, Residential, Sustainable Projects).
   - Horizontal composition with large editorial imagery, subtle hover expansion (`scale(1.03)`), and refined typography.
5. **Technology & Quantitative Proof**:
   - High-contrast statistical metrics (COP 16 / 80% reduced consumption) with live animated counters, data comparison bars, and environmental proof points.
6. **Pre-Footer Immersive Climax**:
   - Pinned / dynamic clip-path reveal: `clip-path: inset(var(--top-bottom) var(--left-right) round 1rem)` expanding from inset card to full bleed.
   - 3-layer parallax composition: Background landscape, architectural interior midground, floating foreground product unit moving at differential rates.
   - Oversized editorial CTA to anchor the journey.
7. **Minimalist Editorial Footer**:
   - Clean column layout, newsletter/simulation link, legal notices, and creative studio credits.

---

## 2. Grid & Layout System
- **24-Column Flexible Fluid Grid**: The reference uses an expansive 24-column CSS grid (`grid-w` with `gap-x-grid`), allowing asymmetrical placement of text, imagery, and product assets.
- **Fluid Container Paddings**:
  - Mobile (<768px): `padding: 1.5rem` (`24px`).
  - Tablet (768px–1024px): `padding: 2rem` (`32px`).
  - Desktop (>1200px): `padding: 3rem` (`48px`).
- **Maximum Width**: Designed to look immaculate on ultra-wide monitors (`1440px` baseline grid, scaling gracefully up to 2560px with `clamp()` and viewport units).

---

## 3. Typography
- **Primary Typeface**: Geometric / Neo-Grotesque with architectural proportions (Reference uses *Altform*).
  - For our implementation, we employ **Plus Jakarta Sans** / **Syne** / **Inter** with tailored letter-spacing, tight tracking, and tall x-height.
- **Heading Scale Hierarchy**:
  - `Hero Title`: `clamp(48px, 9vw, 150px)`, tracking `-0.03em`, line-height `0.92`, uppercase editorial punch.
  - `Chapter Title / Manifest`: `clamp(36px, 6vw, 96px)`, tracking `-0.02em`, line-height `1.0`.
  - `Section Sub-titles`: `clamp(22px, 2.5vw, 40px)`, tracking `-0.015em`, line-height `1.15`.
  - `Body / Descriptions`: `clamp(14px, 1.1vw, 17px)`, tracking `0em`, line-height `1.65`, strictly bounded to `45–55ch` width for optimal editorial readability.
  - `Micro-labels & Eyebrows`: `11px–13px`, tracking `0.15em`, uppercase, monospace-inspired precision.

---

## 4. Spacing System
- Strict geometric rhythm based on `4px / 8px / 16px / 24px / 32px / 48px / 64px / 96px / 128px / 192px`.
- Large breathing room: generous vertical negative space between chapters (`120px` to `240px`) to prevent cognitive clutter and amplify product prestige.

---

## 5. Color Strategy
A sophisticated biophilic luxury palette:
- **Alabaster Canvas**: `#FBF9F5` / `#F5F2EB` (warm off-white, soothing and refined).
- **Deep Biophilic Forest**: `#04271B` / `#0A3525` (rich heritage green for high-impact chapters).
- **Sage / Soft Mint Accent**: `#558E78` / `#82B29A` (delicate technological freshness).
- **Charcoal Ink**: `#111614` (deep, warm neutral for ultra-crisp typography).
- **Subtle Surface Greys**: `#EBE8E0` / `#F0EEE6` (card containers and borders).
- **Purity White**: `#FFFFFF` (crisp contrast cards).

---

## 6. Image & Asset Strategy
- **Layered 2.5D Composite Architecture**:
  - Layer 1: Ambient background & interior wall.
  - Layer 2: Subtle architectural shadow plane.
  - Layer 3: High-fidelity transparent product render / isolated silhouette.
  - Layer 4: Interactive environmental props (modern shelving, sculptural plant, soft lighting).
  - Layer 5: Aerodynamic flow paths (delicate SVG curves with animated stroke dashes and gradient glow).
- Avoid blurry AI artifacts; use vector SVG precision, clean geometric forms, and high-resolution architectural photography.

---

## 7. Animation System & Physics
- **Lenis Smooth Scrolling**: Smooth inertia-based scroll with lerp `0.08` to give fluid weight to user gestures.
- **GSAP ScrollTrigger Pinned Choreography**:
  - `scrub: 1` or `scrub: true` for direct 1:1 physical connection between wheel motion and visual transformation.
  - Custom easings: `power2.out`, `power3.inOut`, and `expo.out` for snappy micro-transitions.
- **Text Splitting & Word Reveals**: Staggered character / line opacity fades coupled with subtle `yPercent: [100, 0]` reveals.
- **Dynamic Masking & Clip-Paths**: Utilizing `clip-path: inset()` to morph cards into fullscreen canvases as the user scrolls.

---

## 8. Scroll Interactions
1. `Hero -> Product Stage`: Scroll scrubbing lifts the camera into the room, pulls the product unit into focus, settles the architectural furniture, and activates air circulation lines.
2. `Feature Matrix`: Pinned 4-step story where user scroll transitions through 4 core features, highlighting product hotspots and live metric dials.
3. `Manifesto Section`: Pinned full-bleed dark green atmosphere with rotating organic curves and kinetic character reveals.
4. `Pre-Footer Climax`: Inset container unfurls to fill 100% of the viewport with triple-layer parallax.

---

## 9. Responsive Behavior
- **Desktop (>1200px)**: Complete multi-plane choreography, sticky pinning, multi-layer depth, high-scale typography.
- **Tablet (768px–1199px)**: Preserves pinned product storytelling with optimized translations and tighter typography clamps.
- **Mobile (<768px)**: Streamlined performance-first layout; reduces sticky runway length while keeping product persistent, eliminates heavy multi-layer transforms that risk layout overflow, ensuring rapid touch response and impeccable typography readability.
- **Reduced Motion (`prefers-reduced-motion`)**: Graceful fallback: Lenis disabled, pinning replaced with clean stacked editorial sections, opacity transitions simplified to instant readability.

---

## 10. Trải nghiệm chúng ta tái tạo (Experience Recreated)
1. **The Iconic 500vh Multi-Stage Hero & Product Runway**: Pinned viewport with continuous product tracking from hero title into architectural context and into feature deep-dive.
2. **Dynamic Inset Clip-Path Scaling**: The signature fluid expansion of containers on scroll.
3. **Aerodynamic / Biophilic Micro-animations**: Subtle fluid airflow path vector animation.
4. **Full-Bleed Kinetic Manifesto**: Sticky chapter with character-by-character scrub and rotating organic geometry.
5. **Cinematic Parallax Pre-Footer**: Expanding frame with 3-tier depth parallax before the minimal footer.
6. **Editorial Craftsmanship**: Uncompromised typography hierarchy, generous whitespace, pristine micro-interactions.

---

## 11. Các yếu tố độc lập hoàn toàn (Independent Identity)
- **New Brand Identity**: **AURA** (Product: **AURA ONE** - Deep Architectural Climate Engine).
- **Unique Product Concept**: Magnetic levitation laminar atmospheric displacement, zero external condensers, thermodynamic biophilic heat exchange.
- **100% Original Copywriting**: Bespoke technical specifications, mission statements, and architectural storytelling.
- **Original Vector & Graphic Assets**: Custom-designed SVG streamline aerodynamics, bespoke architectural layouts, handcrafted 2.5D isometric product representations.
- **Zero Proprietary Code or Trademarked Assets**: Built from scratch using modern Next.js 15 / React 19, GSAP, Lenis, and Tailwind CSS.
