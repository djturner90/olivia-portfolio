function imgPath(name) {
  return `project_1_guardians_of_the_ocean/${encodeURIComponent(name)}`;
}

function storyImg(name) {
  return `project_1_guardians_of_the_ocean/to_use/${encodeURIComponent(name)}`;
}

function foldImg(name) {
  return `project_2_fold/${encodeURIComponent(name)}`;
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
    meta: "[Role] — [Year] — Reformer Pilates Brand & Product System",
    overview:
      "[Write 2–3 sentences here about the FÔLD brand: who they are, what you were asked to design, and your role across brand identity, apparel, and digital.]",
    heroImage: foldImg("IMG_8192.WEBP"),
    sections: [
      {
        title: "Brand Identity",
        text: "[Write about the FÔLD wordmark, colour system, and overall brand direction here.]",
        images: ["IMG_6747.jpg", "IMG_6748.jpg", "IMG_6986.jpg"].map(foldImg),
      },
      {
        title: "Apparel & Merch",
        text: "[Write about the ÔWEAR and HÔF Pilates Studio merch lines here — concept, fabric, and colourways.]",
        images: [
          "HOUSE of FOLD merch.jpg",
          "IMG_0266.jpg",
          "IMG_0267.jpg",
          "IMG_0268.jpg",
          "IMG_0272.jpg",
          "IMG_0273.jpg",
          "IMG_6994.jpg",
        ].map(foldImg),
      },
      {
        title: "Accessories & Equipment",
        text: "[Write about the resistance bands, tote bags, and reformer mat here.]",
        images: [
          "O_tote_bags_4_colours.jpg",
          "IMG_6995.jpg",
          "IMG_0274.jpg",
          "IMG_0275.jpg",
          "IMG_0271.WEBP",
          "IMG_8441.WEBP",
          "IMG_8785.WEBP",
          "IMG_8787.WEBP",
          "IMG_8793.jpg",
          "IMG_6992.jpg",
        ].map(foldImg),
      },
      {
        title: "Digital Experience",
        text: "[Write about the FÔLD app/website experience here — what it does and your role in designing it.]",
        images: ["Sketchbook plan e (Rirekisho (A3)).png"].map(foldImg),
      },
    ],
  },
  three: {
    title: "Project Three",
    meta: "[Role] — [Year]",
    overview:
      "Placeholder description for Project Three. Swap this out with a short summary of the work, your role, and the outcome.",
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
      } else if (row.type === "solo") {
        rowEl.classList.add("case-story-solo");
        rowEl.appendChild(buildStoryImage(row.image, project.title));
      } else if (row.type === "text") {
        rowEl.classList.add("case-story-text");
        rowEl.textContent = row.text;
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

    activeGallery = project.sections.flatMap((section) => section.images);
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

      section.images.forEach((src) => {
        const index = runningIndex++;
        const card = document.createElement("a");
        card.className = "case-bento-item";
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
