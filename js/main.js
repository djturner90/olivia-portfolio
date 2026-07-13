function imgPath(name) {
  return `project_1_guardians_of_the_ocean/${encodeURIComponent(name)}`;
}

function storyImg(name) {
  return `project_1_guardians_of_the_ocean/to_use/${encodeURIComponent(name)}`;
}

function foldImg(name) {
  return `Project%202%20%28fold%29/${encodeURIComponent(name)}`;
}

function femImg(name) {
  return `Project%203%20%28Future%20of%20Femininity%29/${encodeURIComponent(name)}`;
}

// Thin reformer-spring coil as an SVG (side view = a sine helix with two anchor
// dots). Used purely decoratively in the blank space beside the app video.
function reformerSpringSvg(coils, delay) {
  const w = 172;
  const h = 30;
  const mid = h / 2;
  const amp = mid - 3;
  const n = coils * 20;
  let d = `M6,${mid}`;
  for (let i = 1; i <= n; i++) {
    const x = 6 + ((w - 12) * i) / n;
    const y = mid - amp * Math.sin((2 * Math.PI * coils * i) / n);
    d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return `<svg class="spring" style="animation-delay:${delay}s" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="${d}" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="6" cy="${mid}" r="2" fill="currentColor"/>
    <circle cx="${w - 6}" cy="${mid}" r="2" fill="currentColor"/>
  </svg>`;
}

const projects = {
  one: {
    title: "Guardians of the Ocean",
    meta: "Final Year Project (100 Credits) — Grade: First Class",
    tags: ["Fashion Design", "Sustainable Materials"],
    overview:
      "Guardians of the Ocean is a concept-driven collection inspired by ocean conservation, exploring how fashion can become a powerful tool for environmental storytelling. As Creative Director, I developed the project from initial research and hand-drawn concepts through to fully realised garments, transforming two-dimensional ideas into immersive three-dimensional designs. Using sustainable materials and innovative construction techniques, the collection reflects my commitment to creating meaningful work that inspires greater awareness of our oceans.",
    text:
      "My goal was to show that sustainability should drive creativity, not simply influence material choices. By combining original marine inspired artwork with innovative garment construction, I created a product collection that champions ocean conservation through design.",
      story: [
      {
        type: "intro",
        image: { src: storyImg("1.jpg"), arch: true, position: "center 25%" },
      },
      {
        type: "pair",
        tall: true,
        images: [
          { src: storyImg("2.jpeg"), arch: true },
          { src: storyImg("3.jpeg"), arch: true },
        ],
      },
      {
        type: "solo",
        image: { src: storyImg("4.jpg"), arch: true },
      },
      {
        type: "pair",
        images: [
          { src: storyImg("5.png"), arch: false, fit: "contain", zoom: 0.7 },
          { src: storyImg("6.jpeg"), arch: true },
        ],
      },
      {
        type: "text",
        text: "I created the Colony Corset, Colony Bag and The Guardian Dress using sustainable materials and original design concepts inspired by marine life. Each piece reflects my passion for creating products that are both innovative and environmentally conscious.",
      },
      {
        type: "solo",
        image: { src: storyImg("8.png"), arch: true },
      },
    ],
  },
  two: {
    title: "FÔLD",
    meta: "Brand Identity · Apparel · Product & Digital Design",
    tags: ["Branding", "Product Design"],
    overview:
      "As Lead Designer at FÔLD reformer and first official employee of the start up, I was responsible for leading the design process from concept through to final production across a wide range of products. My work included designing apparel, accessories and reformer equipment, such as matts and resistant bands, while ensuring each product reflected the brand’s premium identity and vision.",
    text:
      "Alongside product design, I contributed to the development of the brand identity, sourced and liaised with manufacturers, and worked closely with the co-founders, business team and social media creators throughout the development process. This role strengthened my organisational skills and ability to manage multiple projects while collaborating across a fast-paced, multidisciplinary team.",
    // ─────────────────────────────────────────────────────────────
    // HOW TO REORDER: each { ... } block below is one row on the page,
    // top to bottom. To change the order, cut a whole block and paste it
    // where you want it. Row types:
    //   intro = title + text on the left, big image on the right (first row)
    //   solo  = one full-width image
    //   pair  = two images side by side  (add tall: true for portrait images)
    //   text  = a centred line of text (a breather between image rows)
    // To swap an image, just change the filename inside foldImg("...").
    // ─────────────────────────────────────────────────────────────
    story: [
      {
        type: "intro",
        image: { src: foldImg("New.webp"), arch: true },
      },
      {
        // Custom row: big brand board · app phone · fold 10 + fold 11 stacked.
        // Images size to their natural aspect and top-align (no blank space).
        // The app column's flex is tuned so the phone's height matches the
        // board on the left. Resize any column by changing its "flex".
        type: "columns",
        columns: [
          {
            flex: 2.4,
            images: [
              { src: foldImg("Fold 19.png"), arch: true },
            ],
          },
          {
            flex: 0.75,
            images: [
              { src: foldImg("app-transparent.png"), arch: true },
            ],
          },
          {
            flex: 1.1,
            align: "center",
            images: [
              { src: foldImg("fold 10.PNG"), arch: true, zoom: 0.85 },
              { src: foldImg("fold 11.PNG"), arch: true, zoom: 0.85 },
            ],
          },
        ],
      },
      {
        // Explanatory text on the left, the important Vogue image on the right.
        // Write the caption in "heading" / "text" below.
        type: "feature",
        heading: "Featured by British Vogue",
        text: "FÔLD reformer was mentioned by British Vogue. They published comments about my product designs, specifically my grip socks which I designed on my own and worked closely with the manufacturer to ensure high quality and innovation for a sticky grip.",
        image: { src: foldImg("vogue.jpg"), arch: true },
      },
      {
        // Three-image row: fold 3 photo (left) · isolated socks (middle, nudged
        // left) · navy grip-sock pack cropped from fold 4 (right). Sizes via flex.
        type: "columns",
        columns: [
          {
            flex: 1,
            align: "center",
            images: [
              { src: foldImg("fold 3.PNG"), arch: true },
            ],
          },
          {
            flex: 1.5,
            align: "center",
            offsetX: "-5%",
            images: [
              { src: foldImg("socks-transparent.png"), arch: true, zoom: 0.8 },
            ],
          },
          {
            flex: 0.46,
            align: "center",
            offsetX: "-12%",
            images: [
              { src: foldImg("fold 4.png"), arch: true, zoom: 0.9 },
            ],
          },
        ],
      },
      {
        // Two-image row: fold 9 bands isolated on transparent (left) ·
        // fold 6 close-up (right). Small centred caption in the text row below.
        type: "columns",
        columns: [
          {
            flex: 2,
            align: "center",
            images: [
              { src: foldImg("bands-transparent.png"), arch: true, zoom: 0.8 },
            ],
          },
          {
            flex: 1,
            align: "center",
            images: [
              { src: foldImg("fold 6.png"), arch: true },
            ],
          },
        ],
      },
      {
        type: "text",
        text: "Here are a couple of examples where my concept designs have then been translated to 3D products ready for customers.",
      },
      {
        // Looping video directly below the caption. Its original white
        // background is stripped to transparency (WebM = real alpha, MP4 =
        // black-baked fallback). Plays muted on a continuous loop.
        type: "video",
        sources: [foldImg("vid.webm"), foldImg("vid.mp4")],
      },
      {
        // Two ÔWEAR garment flats side by side in one row, directly below the
        // video. Both had their white backgrounds stripped to transparency
        // (fold5-transparent.png / fold7-transparent.png).
        type: "columns",
        columns: [
          {
            flex: 1,
            align: "center",
            images: [{ src: foldImg("fold5-transparent.png"), arch: true }],
          },
          {
            flex: 1,
            align: "center",
            images: [{ src: foldImg("fold7-transparent.png"), arch: true }],
          },
        ],
      },
      {
        // Closing caption — last thing on the page, below the ÔWEAR flats.
        type: "text",
        text: "ÔWEAR is the apparel line for FÔLD reformer, and it became the area I focused on most — designing across both apparel and accessories from first concept through to the finished product. As lead designer I was able to fully own this range, balancing my own creative direction with the needs of the brand so that every piece stayed true to the FÔLD identity while still feeling considered and original.",
      },
    ],
  },
  three: {
    title: "Future of Femininity",
    meta: "Fashion Collection · Concept & Design",
    tags: ["Fashion Design", "Concept Development"],
    overview:
      "[ Add the Future of Femininity overview here — the concept behind the collection, your role, and what it explores. ]",
    text:
      "[ Add a second short paragraph here — the materials, process, or the story behind the gold draping and the “digital Venus” identity. ]",
    // Same row vocabulary as Projects 1 & 2 — intro first (title + text on the
    // left, opening image on the right), then a mix of pair / solo / columns /
    // text rows. Reorder by moving whole { } blocks; swap an image by changing
    // the filename inside femImg("...").
    story: [
      {
        type: "intro",
        image: {
          src: femImg("f3.jpeg"),
          arch: true,
        },
      },
      {
        // Two photographed looks side by side (portraits).
        type: "pair",
        tall: true,
        images: [
          { src: femImg("f1.jpeg"), arch: true },
          { src: femImg("f2.jpeg"), arch: true },
        ],
      },
      {
        type: "text",
        text: "[ Add a short centred line about the collection or concept here. ]",
      },
      {
        // Research / mood board — shown at natural aspect, no crop.
        type: "columns",
        columns: [
          { flex: 1, images: [{ src: femImg("f16.png"), arch: true }] },
        ],
      },
      {
        // Two design-development boards side by side.
        type: "columns",
        columns: [
          { flex: 1, images: [{ src: femImg("f13.png"), arch: true }] },
          { flex: 1, images: [{ src: femImg("f14.png"), arch: true }] },
        ],
      },
      {
        // Two fashion illustrations (the narrow one gets less width via flex).
        type: "columns",
        columns: [
          {
            flex: 1,
            align: "center",
            images: [{ src: femImg("f6.PNG"), arch: true }],
          },
          {
            flex: 0.6,
            align: "center",
            images: [{ src: femImg("f7.PNG"), arch: true }],
          },
        ],
      },
      {
        // Gold silk texture / detail, full-width.
        type: "solo",
        image: { src: femImg("f8.PNG"), arch: true },
      },
      {
        // Branding: the "digital Venus" logo · the swing tags.
        type: "columns",
        columns: [
          {
            flex: 1,
            align: "center",
            images: [{ src: femImg("f5.PNG"), arch: true }],
          },
          {
            flex: 1,
            align: "center",
            images: [{ src: femImg("f4.png"), arch: true }],
          },
        ],
      },
      {
        // Colour / material palette.
        type: "columns",
        columns: [
          { flex: 1, images: [{ src: femImg("f12.png"), arch: true }] },
        ],
      },
    ],
  },
  // Empty scaffolds — ready to fill in the same way as Projects 1–3. Give each
  // a `tags: [...]`, a real `overview`/`text`, and a `story: [ ... ]` array
  // (start with an `intro` row), then set the card thumbnail in index.html.
  four: {
    title: "Project Four",
    meta: "[Role] — [Year]",
    overview:
      "[ Placeholder — replace with the Project Four overview. Add tags and a story array to build out the case study. ]",
  },
  five: {
    title: "Project Five",
    meta: "[Role] — [Year]",
    overview:
      "[ Placeholder — replace with the Project Five overview. Add tags and a story array to build out the case study. ]",
  },
};

const overlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalHero = document.getElementById("modalHero");
const modalGallery = document.getElementById("modalGallery");
const caseSections = document.getElementById("caseSections");
const caseStory = document.getElementById("caseStory");
const caseHeader = document.querySelector(".case-header");
const caseLogoHome = document.getElementById("caseLogoHome");
const caseNavWork = document.getElementById("caseNavWork");
const caseNavContact = document.getElementById("caseNavContact");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let activeGallery = [];
let activeIndex = 0;

function buildStoryImage(image, altText) {
  const wrap = document.createElement("a");
  wrap.className = image.arch === false ? "" : "case-arch";
  wrap.href = image.src;
  wrap.style.display = "block";
  wrap.style.height = "100%";

  const idx = activeGallery.length;
  activeGallery.push(image.src);
  wrap.addEventListener("click", (e) => {
    e.preventDefault();
    openLightbox(idx);
  });

  const img = document.createElement("img");
  img.src = image.src;
  img.loading = "lazy";
  img.alt = altText;
  if (image.position) {
    img.style.objectPosition = image.position;
  }
  if (image.fit) {
    img.style.objectFit = image.fit;
  }
  if (image.zoom) {
    img.style.transform = `scale(${image.zoom})`;
  }
  wrap.appendChild(img);

  return wrap;
}

function openModal(id) {
  const project = projects[id];
  if (!project) return;

  modalTitle.textContent = project.title;
  modalMeta.textContent = project.meta || "";
  modalDescription.textContent = project.overview;

  modalGallery.innerHTML = "";
  caseSections.innerHTML = "";
  caseStory.innerHTML = "";

  if (project.story) {
    modalHero.style.display = "none";
    caseHeader.style.display = "none";
    modalGallery.style.display = "none";
    caseSections.style.display = "none";
    caseStory.style.display = "block";

    activeGallery = [];

    project.story.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "case-story-row";

      if (row.type === "intro") {
        rowEl.classList.add("case-story-intro");

        const textCol = document.createElement("div");
        textCol.className = "case-story-intro-text";

        const topGroup = document.createElement("div");
        topGroup.className = "case-story-intro-top";

        const heading = document.createElement("h2");
        heading.textContent = project.title;
        topGroup.appendChild(heading);

        if (project.tags && project.tags.length) {
          const tagWrap = document.createElement("div");
          tagWrap.className = "case-tags";
          project.tags.forEach((tag) => {
            const tagEl = document.createElement("span");
            tagEl.className = "case-tag";
            tagEl.textContent = tag;
            tagWrap.appendChild(tagEl);
          });
          topGroup.appendChild(tagWrap);
        }

        const overviewEl = document.createElement("p");
        overviewEl.textContent = project.overview;
        topGroup.appendChild(overviewEl);

        if (project.text) {
          const extraTextEl = document.createElement("p");
          extraTextEl.className = "case-story-intro-text-bold";
          extraTextEl.textContent = project.text;
          topGroup.appendChild(extraTextEl);
        }

        textCol.appendChild(topGroup);

        const imageCol = document.createElement("div");
        imageCol.className = "case-story-intro-image";
        if (row.image.height) {
          imageCol.style.height = row.image.height;
        }
        imageCol.appendChild(buildStoryImage(row.image, project.title));

        rowEl.appendChild(textCol);
        rowEl.appendChild(imageCol);
      } else if (row.type === "pair") {
        rowEl.classList.add("case-story-pair");
        if (row.tall) {
          rowEl.classList.add("case-story-pair--tall");
        }
        row.images.forEach((image) => {
          const cell = document.createElement("div");
          cell.appendChild(buildStoryImage(image, project.title));
          rowEl.appendChild(cell);
        });
      } else if (row.type === "columns") {
        rowEl.classList.add("case-story-columns");
        if (row.height) {
          rowEl.style.height = row.height;
        }
        rowEl.style.gridTemplateColumns = row.columns
          .map((col) => `${col.flex || 1}fr`)
          .join(" ");
        row.columns.forEach((col) => {
          const colEl = document.createElement("div");
          colEl.className = "case-story-col";
          if (col.offsetX) {
            colEl.style.transform = `translateX(${col.offsetX})`;
          }
          if (col.align) {
            // vertical position of a shorter column within the row: center | end
            colEl.style.alignSelf = col.align;
          }
          col.images.forEach((image) => {
            const cell = document.createElement("div");
            cell.className = "case-story-col-cell";
            cell.appendChild(buildStoryImage(image, project.title));
            colEl.appendChild(cell);
          });
          rowEl.appendChild(colEl);
        });
      } else if (row.type === "feature") {
        // Text explanation on the left, one important image on the right.
        rowEl.classList.add("case-story-feature");

        const textCol = document.createElement("div");
        textCol.className = "case-story-feature-text";
        if (row.heading) {
          const h = document.createElement("h3");
          h.className = "case-story-feature-heading";
          h.textContent = row.heading;
          textCol.appendChild(h);
        }
        if (row.text) {
          const p = document.createElement("p");
          p.textContent = row.text;
          textCol.appendChild(p);
        }

        const imageCol = document.createElement("div");
        imageCol.className = "case-story-feature-image";
        imageCol.appendChild(buildStoryImage(row.image, project.title));

        rowEl.appendChild(textCol);
        rowEl.appendChild(imageCol);
      } else if (row.type === "solo") {
        rowEl.classList.add("case-story-solo");
        rowEl.appendChild(buildStoryImage(row.image, project.title));
      } else if (row.type === "text") {
        rowEl.classList.add("case-story-text");
        rowEl.textContent = row.text;
      } else if (row.type === "video") {
        // Looping, muted, autoplay video with its original white background
        // stripped to transparency (per-frame flood-fill baked into the files).
        // WebM carries a real alpha channel; the MP4 fallback bakes the removed
        // area to black, which is identical against the modal's #000 backdrop.
        rowEl.classList.add("case-story-video");
        const video = document.createElement("video");
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("muted", "");
        (row.sources || [row.src]).forEach((src) => {
          const s = document.createElement("source");
          s.src = src;
          if (src.endsWith(".webm")) s.type = "video/webm";
          else if (src.endsWith(".mp4")) s.type = "video/mp4";
          video.appendChild(s);
        });
        rowEl.appendChild(video);
        // Delicate reformer-spring motion filling the blank space either side of
        // the phone: thin coils that slowly breathe (stretch/relax) toward it.
        ["left", "right"].forEach((side) => {
          const panel = document.createElement("div");
          panel.className = `case-story-springs case-story-springs--${side}`;
          panel.setAttribute("aria-hidden", "true");
          panel.innerHTML =
            reformerSpringSvg(7, 0) +
            reformerSpringSvg(9, 1.4) +
            reformerSpringSvg(6, 2.8);
          rowEl.appendChild(panel);
        });
      }

      caseStory.appendChild(rowEl);
    });

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    return;
  }

  modalHero.style.display = "";
  caseHeader.style.display = "";
  caseStory.style.display = "none";

  if (project.heroImage) {
    modalHero.classList.remove("placeholder-media");
    modalHero.style.backgroundImage = `url('${project.heroImage}')`;
  } else {
    modalHero.classList.add("placeholder-media");
    modalHero.style.backgroundImage = "";
  }

  if (project.sections) {
    modalGallery.style.display = "none";
    caseSections.style.display = "block";

    const srcOf = (image) => (typeof image === "string" ? image : image.src);
    activeGallery = project.sections.flatMap((section) =>
      section.images.map(srcOf)
    );
    let runningIndex = 0;

    project.sections.forEach((section) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "case-section";

      const heading = document.createElement("h3");
      heading.className = "case-section-title";
      heading.textContent = section.title;

      const text = document.createElement("p");
      text.className = "case-section-text";
      text.textContent = section.text;

      const grid = document.createElement("div");
      grid.className = "case-bento";

      section.images.forEach((image) => {
        const src = srcOf(image);
        const isCover = typeof image === "object" && image.cover;
        const index = runningIndex++;
        const card = document.createElement("a");
        card.className = "case-bento-item" + (isCover ? " case-bento-item--cover" : "");
        card.href = src;
        card.addEventListener("click", (e) => {
          e.preventDefault();
          openLightbox(index);
        });

        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        img.alt = `${project.title} — ${section.title}`;

        card.appendChild(img);
        grid.appendChild(card);
      });

      sectionEl.appendChild(heading);
      sectionEl.appendChild(text);
      sectionEl.appendChild(grid);
      caseSections.appendChild(sectionEl);
    });
  } else {
    caseSections.style.display = "none";
    modalGallery.style.display = "grid";
    activeGallery = project.gallery || [];

    activeGallery.forEach((src, index) => {
      const link = document.createElement("a");
      link.href = src;
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(index);
      });

      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";
      img.alt = `${project.title} — image ${index + 1}`;

      link.appendChild(img);
      modalGallery.appendChild(link);
    });
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function openLightbox(index) {
  activeIndex = index;
  lightboxImg.src = activeGallery[activeIndex];
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

function showLightboxOffset(offset) {
  if (!activeGallery.length) return;
  activeIndex = (activeIndex + offset + activeGallery.length) % activeGallery.length;
  lightboxImg.src = activeGallery[activeIndex];
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.project));
});

caseLogoHome.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
caseNavWork.addEventListener("click", closeModal);
caseNavContact.addEventListener("click", closeModal);

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => showLightboxOffset(-1));
lightboxNext.addEventListener("click", () => showLightboxOffset(1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxOffset(-1);
    if (e.key === "ArrowRight") showLightboxOffset(1);
    return;
  }
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});

// Reactive background: a soft highlight glow eases toward the cursor.
const root = document.documentElement;

let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

window.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateGlow() {
  currentX += (targetX - currentX) * 0.06;
  currentY += (targetY - currentY) * 0.06;

  root.style.setProperty("--mx", `${(currentX / window.innerWidth) * 100}%`);
  root.style.setProperty("--my", `${(currentY / window.innerHeight) * 100}%`);

  requestAnimationFrame(animateGlow);
}

animateGlow();
