// Renders one project page from PROJECTS (js/projects.js). Each page in
// work/<slug>/index.html sets <main id="project" data-slug="<slug>">.

const main = document.getElementById("project");
const slug = main.dataset.slug;
const project = PROJECTS[slug];

// Every image on the page, in order, for lightbox ← / → navigation.
const gallery = [];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function asImage(image) {
  return typeof image === "string" ? { src: image } : image;
}

// One clickable image. The figure's flex-grow is set to the image's aspect
// ratio once it loads, so images in the same row end up the same height
// without any cropping.
function buildImage(image, { eager = false } = {}) {
  image = asImage(image);
  const index = gallery.length;
  gallery.push(image);

  const fig = el(
    "a",
    "p-img" + (image.pad ? " p-img--pad" : "") + (image.white ? " p-img--pad p-img--white" : "")
  );
  fig.href = image.src;
  if (image.maxWidth) fig.style.maxWidth = image.maxWidth;
  fig.addEventListener("click", (e) => {
    e.preventDefault();
    openLightbox(index);
  });

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt || project.title;
  if (!eager) img.loading = "lazy";
  // scale: 0.8 shows the image at 80% of its slot, centred, for breathing room.
  if (image.scale) img.style.width = `${image.scale * 100}%`;
  const setRatio = () => {
    if (img.naturalWidth) {
      fig.style.setProperty("--ratio", img.naturalWidth / img.naturalHeight);
    }
  };
  if (img.complete) setRatio();
  else img.addEventListener("load", setRatio);

  fig.appendChild(img);
  return fig;
}

function buildRow(row) {
  const type = row.type || "images";
  const wrap = el("div", "p-row p-row--" + type);
  if (row.id) wrap.id = row.id;

  if (type === "images") {
    const imgs = el("div", "p-row-images" + (row.spaced ? " p-row-images--spaced" : ""));
    imgs.dataset.count = row.images.length;
    row.images.forEach((image) => imgs.appendChild(buildImage(image)));
    wrap.appendChild(imgs);
  } else if (type === "text") {
    wrap.appendChild(el("p", "p-row-text", row.text));
  } else if (type === "feature") {
    const text = el("div", "p-feature-text");
    if (row.heading) text.appendChild(el("h3", "p-feature-heading", row.heading));
    if (row.text) text.appendChild(el("p", null, row.text));
    const media = el("div", "p-feature-media");
    media.appendChild(buildImage(row.image));
    wrap.append(text, media);
  } else if (type === "video") {
    // WebM keeps a real transparent background; the MP4 fallback (Safari) has
    // it baked to black — both sit on the same dark panel so they match.
    const panel = el(
      "div",
      "p-video" + (row.white ? " p-video--white" : "") + (row.transparent ? " p-video--clear" : "")
    );
    const video = document.createElement("video");
    Object.assign(video, { autoplay: true, loop: true, muted: true, playsInline: true });
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    // Safari and every iOS browser (all WebKit) can't show transparent WebM,
    // so they skip it and play the MP4 instead.
    const ua = navigator.userAgent;
    const isWebKit = /AppleWebKit/.test(ua) && !/Chrome|Chromium|Edg|Android/.test(ua);
    const sources = isWebKit ? row.sources.filter((src) => !src.endsWith(".webm")) : row.sources;
    sources.forEach((src) => {
      const s = document.createElement("source");
      s.src = src;
      s.type = src.endsWith(".webm") ? "video/webm" : "video/mp4";
      video.appendChild(s);
    });
    panel.appendChild(video);
    wrap.appendChild(panel);
  } else if (type === "youtube") {
    const frame = el("div", "p-embed");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${row.videoId}`;
    iframe.title = row.title || project.title;
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    frame.appendChild(iframe);
    wrap.appendChild(frame);
  } else if (type === "link") {
    const a = el("a", "p-row-link", row.text);
    a.href = row.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.insertAdjacentHTML("beforeend", ' <span aria-hidden="true">↗</span>');
    wrap.appendChild(a);
  }

  if (row.caption) {
    const cap = el("p", "p-caption" + (row.captionAbove ? " p-caption--above" : ""), row.caption);
    if (row.captionAbove) wrap.prepend(cap);
    else wrap.appendChild(cap);
  }
  return wrap;
}

function buildSection(label, rows) {
  const section = el("section", "p-section");
  const head = el("div", "p-section-head");
  head.appendChild(el("h2", "label", label));
  section.appendChild(head);
  rows.forEach((row) => section.appendChild(buildRow(row)));
  return section;
}

function render() {
  if (!project) {
    main.appendChild(el("p", "p-missing", "Project not found."));
    return;
  }

  const position = PROJECT_ORDER.indexOf(slug);

  // ── Header: title + facts
  const header = el("header", "p-header");
  const eyebrow = el("p", "label label--accent");
  eyebrow.textContent = `Project ${String(position + 1).padStart(2, "0")} / ${String(PROJECT_ORDER.length).padStart(2, "0")}`;
  header.appendChild(eyebrow);
  header.appendChild(el("h1", "p-title", project.title));

  const facts = el("dl", "p-facts");
  [["Discipline", project.categories.join(", ")], ...project.facts].forEach(([k, v]) => {
    const item = el("div", "p-fact");
    item.append(el("dt", "label label--muted", k), el("dd", null, v));
    facts.appendChild(item);
  });
  header.appendChild(facts);
  main.appendChild(header);

  // ── Hero
  const hero = el("div", "p-hero");
  if (project.hero.images) {
    // Side-by-side opening images, each shown no larger than its real size.
    hero.classList.add("p-hero--row");
    const imgs = el("div", "p-row-images");
    imgs.dataset.count = project.hero.images.length;
    project.hero.images.forEach((image) => imgs.appendChild(buildImage(image, { eager: true })));
    hero.appendChild(imgs);
  } else {
    hero.appendChild(buildImage(project.hero, { eager: true }));
  }
  main.appendChild(hero);

  // ── Overview + contribution
  const intro = el("section", "p-intro");
  const ov = el("div", "p-intro-block");
  ov.append(el("h2", "label", "Overview"), el("p", "p-lead", project.overview));
  const contrib = el("div", "p-intro-block");
  contrib.appendChild(el("h2", "label", "My contribution"));
  project.contribution.forEach((para) => contrib.appendChild(el("p", null, para)));
  if (project.contributionLink) {
    const p = el("p", "p-intro-link");
    const a = el("a", null, project.contributionLink.text + " ");
    a.href = project.contributionLink.href;
    a.insertAdjacentHTML("beforeend", '<span aria-hidden="true">→</span>');
    p.appendChild(a);
    contrib.appendChild(p);
  }
  intro.append(ov, contrib);
  main.appendChild(intro);

  // ── Imagery
  main.appendChild(buildSection("Finished work", project.finished));
  if (project.development && project.development.length) {
    main.appendChild(buildSection("Development", project.development));
  }
}

// ── Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
let activeIndex = 0;

function showLightbox() {
  const image = asImage(gallery[activeIndex]);
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt || "";
}
function openLightbox(index) {
  activeIndex = index;
  showLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}
function step(offset) {
  activeIndex = (activeIndex + offset + gallery.length) % gallery.length;
  showLightbox();
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => step(-1));
document.getElementById("lightboxNext").addEventListener("click", () => step(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// Swipe between images on touch screens.
let touchX = null;
lightbox.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
lightbox.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  touchX = null;
});

render();

// Linking straight to a row (e.g. …/oceans-by-olivia/#campaign-film). The page
// is built by script and images above the target change height as they load,
// so scroll once it's built, then keep it in place while those images load —
// until the page has finished loading or the visitor scrolls themselves.
(function scrollToHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id && document.getElementById(id);
  if (!target) return;

  // Load the images above the target straight away rather than on scroll.
  main.querySelectorAll("img").forEach((img) => {
    if (img.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING) img.loading = "eager";
  });

  let userMoved = false;
  const stop = () => (userMoved = true);
  ["wheel", "touchstart", "keydown", "mousedown"].forEach((ev) =>
    window.addEventListener(ev, stop, { once: true, passive: true })
  );
  const align = () => {
    if (!userMoved) target.scrollIntoView({ block: "start", behavior: "instant" });
  };
  align();
  main.querySelectorAll("img").forEach((img) => img.addEventListener("load", align));
  window.addEventListener("load", () => {
    align();
    setTimeout(align, 300);
  });
})();
