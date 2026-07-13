# Olivia Turner — Portfolio

A single-page portfolio website for **Olivia Turner**, a First Class Fashion Design graduate (NTU, 2026). The site presents her design work as an interactive gallery, with each project opening into a full-screen case study.

Built as a lightweight static site — **plain HTML, CSS, and vanilla JavaScript**, no build step, no dependencies.

---

## Table of contents

- [Preview](#preview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Running locally](#running-locally)
- [How it works](#how-it-works)
- [Adding or editing a project](#adding-or-editing-a-project)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Known issues & roadmap](#known-issues--roadmap)

---

## Preview

The homepage has three parts:

1. **Hero / bio** — logo, intro headline, and a short bio.
2. **Skills marquee** — two auto-scrolling rows of design disciplines (Creative Design, Brand Direction, Textile Design, etc.).
3. **Work grid** — clickable project cards that open a case study overlay.

Clicking a project opens a full-screen **case study** with a scrollable, editorially-laid-out story. Clicking any image within opens a **lightbox** with keyboard navigation.

---

## Features

- **Interactive case studies** — each project card opens a modal overlay rendered from a JavaScript data object, so layouts are data-driven rather than hand-coded per project.
- **Two case-study layout modes:**
  - **Story mode** (`story`) — a bespoke editorial flow of intro, paired images, solo images, and text blocks (used by *Guardians of the Ocean*).
  - **Sections mode** (`sections`) — titled sections each with a text block and a bento-style image grid (used by *FÔLD*).
- **Lightbox gallery** — click any image to enlarge; navigate with `←` / `→`, close with `Esc` or by clicking the backdrop.
- **Reactive background glow** — a soft highlight eases toward the cursor via `requestAnimationFrame`, driven by CSS custom properties (`--mx` / `--my`).
- **Lazy-loaded images** — gallery images use `loading="lazy"`.
- **Responsive & accessible touches** — semantic sections, `aria` attributes on the modal and lightbox controls, and `prefers`-friendly markup.
- **Zero dependencies** — only an external Google Font (Cormorant Garamond).

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 (single `index.html`) |
| Styling | CSS3 (`css/style.css`, ~860 lines) — custom properties, flexbox/grid, keyframe marquees |
| Behaviour | Vanilla JavaScript (`js/main.js`, ~420 lines) — no framework, no bundler |
| Fonts | Cormorant Garamond via Google Fonts |
| Hosting | Static — any static host (GitHub Pages, Netlify, etc.) |

---

## Project structure

```
olivia-portfolio/
├── index.html                          # The entire page markup
├── logo.png                            # Site logo
├── css/
│   └── style.css                       # All styles
├── js/
│   └── main.js                         # Project data + all interactivity
│
├── project_1_guardians_of_the_ocean/   # Project 1 — wired into the site
│   └── to_use/                         # Curated images used in the case study
│       ├── thumbnail.JPEG              # Card thumbnail
│       └── 1.jpg … 8.png               # Story images
│
├── Project 2 (fold)/                   # Project 2 — raw assets (FÔLD)
├── Project 3 (Future of Femininity)/   # Project 3 — raw assets
├── Project 4 (OCEANS by OLIVIA)/       # Project 4 — raw assets
└── Project 5 (Universal Works)/        # Project 5 — raw assets
```

Each `Project N (…)` folder holds the source imagery (PNG / JPG / WEBP / HEIC). The site currently renders projects from the `projects` data object in [`js/main.js`](js/main.js) — see [Adding or editing a project](#adding-or-editing-a-project).

> **Note on folder names:** `project_1_guardians_of_the_ocean` uses lowercase-underscore naming to match the paths in `main.js`, while the other folders use their original `Project N (Name)` names. This matters for deployment — see [Known issues](#known-issues--roadmap).

---

## Running locally

No build step is required. Because the JavaScript references images by relative path, serve the folder over HTTP rather than opening `index.html` via `file://` (some browsers restrict `file://` behaviour).

**Option A — Python (built in on most systems):**

```bash
python -m http.server 8000
# then open http://localhost:8000
```

**Option B — Node (if you have it):**

```bash
npx serve .
# or: npx http-server -p 8000
```

**Option C — VS Code:** use the *Live Server* extension and "Open with Live Server".

---

## How it works

All content and behaviour lives in [`js/main.js`](js/main.js).

- A `projects` object holds one entry per project (`one`, `two`, `three`), keyed to the `data-project` attribute on each `.project-card` button in [`index.html`](index.html).
- Clicking a card calls `openModal(id)`, which reads that project's data and renders the overlay:
  - if the project has a `story` array → **story mode**,
  - else if it has a `sections` array → **sections mode**,
  - else it falls back to a simple `gallery` grid.
- Image helpers (`imgPath`, `storyImg`, `foldImg`) build encoded relative URLs so filenames with spaces/accents resolve correctly.
- `openLightbox` / `showLightboxOffset` manage the enlarged image viewer and its keyboard controls.
- A small `animateGlow` loop updates CSS variables to move the background highlight toward the pointer.

---

## Adding or editing a project

1. **Drop images** into the project's folder (a curated sub-folder like `to_use/` keeps the case study tidy).
2. **Add a card** in [`index.html`](index.html) inside `<section class="projects">`:

   ```html
   <button class="project-card" data-project="four">
     <div class="project-media cover-image"
          style="background-image: url('path/to/thumbnail.jpg')"></div>
     <div class="project-card-info">
       <h2>Project Title</h2>
       <p class="project-card-tags">Tag One <span>Tag Two</span></p>
     </div>
   </button>
   ```

3. **Add a matching entry** to the `projects` object in [`js/main.js`](js/main.js). Use whichever layout fits:

   **Sections mode:**
   ```js
   four: {
     title: "Project Title",
     meta: "Role — Year",
     overview: "Short summary of the work and your role.",
     heroImage: "path/to/hero.jpg",
     sections: [
       {
         title: "Brand Identity",
         text: "What this section shows.",
         images: ["a.jpg", "b.jpg"].map((n) => `folder/${n}`),
       },
     ],
   }
   ```

   **Story mode** supports `intro`, `pair` (optionally `tall`), `solo`, and `text` rows — see the `one:` entry for a full example.

The card's `data-project` value **must** match the object key (`four` above).

---

## Deployment (GitHub Pages)

1. Push to GitHub (already linked to [`djturner90/olivia-portfolio`](https://github.com/djturner90/olivia-portfolio)).
2. In the repo: **Settings → Pages → Build and deployment**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. The site publishes at `https://djturner90.github.io/olivia-portfolio/`.

> ⚠️ **Case-sensitivity:** GitHub Pages serves from a Linux (case-sensitive) filesystem, unlike Windows/macOS. Before deploying, resolve the path mismatches noted below or images will 404.

---

## Known issues & roadmap

These work locally on Windows (case-insensitive filesystem) but **will break on GitHub Pages / any Linux host**, and are worth fixing before going live:

- [x] ~~**Logo path case** — `index.html` referenced `logo.png` but the file was `Logo.png`.~~ Fixed: file renamed to `logo.png`.
- [ ] **Project 2 folder path** — `main.js` and the card thumbnail reference `project_2_fold/…`, but the folder on disk is `Project 2 (fold)/`. Rename the folder to `project_2_fold` (recommended) or update the paths in `main.js`.
- [ ] **Filename extensions** — some entries in `main.js` reference `.jpg` where the source files are `.PNG`/`.WEBP` (e.g. FÔLD images). Confirm each path matches the actual file, including extension case.
- [ ] Needs to be mobile-friendly. Currently the nav bar is not mobile friendly and does not render well on a mobile device.

Content roadmap:

- [ ] Wire up **Project 3 (Future of Femininity)**, **Project 4 (OCEANS by OLIVIA)**, and **Project 5 (Universal Works)** — assets are present but not yet in the `projects` data object (card three is still a placeholder).
- [ ] Fill in the `[bracketed placeholder]` copy in the FÔLD case study.
- [ ] Update the contact `mailto:` — the visible email is `olivia.turnerdj@gmail.com`, but the `href` still points to `you@example.com`.
- [ ] Consider converting `.HEIC` source images to web-friendly formats (`.jpg`/`.webp`) — HEIC does not render in most browsers.

---

<sub>Static portfolio site · HTML / CSS / vanilla JS · No build step.</sub>
