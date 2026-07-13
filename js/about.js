// About page — draws the hand-drawn "story line" over the hero photo. The line
// starts at a visible point on the RIGHT (where the "Start here" arrow points),
// sweeps to the LEFT, loops around, and curves back to the right. There are no
// visible dots: invisible hover zones sit along the line, and each reveals a
// little black label box (e.g. "Coffee / Matcha Lover") when hovered.

const W = 1200; // SVG viewBox width  (matches about.html)
const H = 560;  // SVG viewBox height

// The looping path. Starts upper-right (visible on the page), sweeps left,
// curls into a loop on the far left, then returns to the right edge.
const PATH_D = [
  "M 900,90",
  "C 1010,205 945,300 850,300",   // small dip just left of the start
  "C 738,300 655,140 525,132",    // rise up into the big central arch
  "C 372,123 245,195 188,300",    // descend toward the far left
  "C 140,388 195,470 330,468",    // curl down into the loop
  "C 470,466 468,350 362,342",    // loop back up
  "C 256,334 250,452 398,474",    // and cross over — closing the loop
  "C 600,502 850,470 1050,452",   // sweep back along the bottom to the right
  "C 1128,445 1176,432 1200,422", // exit at the right edge
].join(" ");

const path = document.getElementById("aboutWavePath");
path.setAttribute("d", PATH_D);

// Labels, in order along the line (start on the right → left → loop → right).
// TO EDIT: rename, reorder, or add/remove entries — they're spread evenly
// along the line automatically.
const labels = [
  "Adventurous",
  "Ocean Advocate",
  "Coffee / Matcha Lover",
  "Scuba Diver",
  "Artist",
  "Disney Lover",
  "Formula 1 Supporter",
  "Community",
  "Animal Lover",
];

const dotsWrap = document.getElementById("aboutDots");
const totalLen = path.getTotalLength();

labels.forEach((text, i) => {
  // Spread the hover zones evenly along the line, keeping clear of the very
  // start and end.
  const frac = 0.06 + (i / (labels.length - 1)) * 0.88;
  const pt = path.getPointAtLength(frac * totalLen);

  // Put the box above the line up high (open sky) and below it in the middle;
  // anything low goes back above so it never runs off the bottom.
  let side = pt.y < H * 0.5 ? "top" : "bottom";
  if (pt.y > H * 0.72) side = "top";

  const dot = document.createElement("div");
  dot.className = `about-dot about-dot--${side}`;
  dot.style.left = (pt.x / W) * 100 + "%";
  dot.style.top = (pt.y / H) * 100 + "%";
  dot.innerHTML =
    `<div class="about-dot-label about-dot-label--${side}">${text}</div>` +
    `<div class="about-dot-hit"></div>`;
  dotsWrap.appendChild(dot);
});

// Reactive background glow (shared behaviour with the homepage).
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
