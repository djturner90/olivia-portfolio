// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CONTENT — every project page (work/<slug>/index.html) is rendered
// from this file by js/project.js. Edit text and images here.
//
// ORDER: PROJECT_ORDER sets each page's "Project 01 / 05" number.
// The homepage grid (index.html) is plain HTML — keep it in the same order.
//
// Each project has:
//   title, categories   — shown under the cover and at the top of the page
//   facts               — small label/value pairs under the title
//   hero                — the large image at the top of the page
//   overview            — short description of the project
//   contribution        — what Olivia did (one string per paragraph)
//   contributionLink    — optional { text, href } link shown under the contribution
//   finished            — rows of finished imagery
//   development         — rows of process work (sketches, flats, boards, materials)
//
// ROW TYPES (each { ... } is one row, top to bottom):
//   { images: [a, b, c], caption: "...", spaced: true }
//        1–3 images side by side. They are shown uncropped and scaled to the
//        same height, so portrait and landscape images can share a row.
//        On phones they stack. caption is optional. spaced: true adds generous
//        space around and between them (for logos on a transparent background).
//   { type: "text", text: "..." }                    a short paragraph
//   { type: "feature", heading, text, image }        text left, image right
//   { type: "video", sources: [webm, mp4], caption } looping silent video
//        black panel by default; white: true for a white panel; transparent: true
//        for no panel (webm with transparency + an mp4 on the page colour for Safari)
//   { type: "youtube", videoId, title, caption }     embedded YouTube film
//   { type: "link", text, href }                     external link
//
// Any row can take captionAbove: true to put its caption above it instead of below,
// and id: "some-name" so other pages can link straight to it (…/#some-name).
//
// IMAGES are either a path, or { src, alt, pad, white, maxWidth, scale }:
//   pad: true      sits the image on a soft panel with breathing room
//   white: true    the same, on a white tile
//   maxWidth: "900px"  never show the image wider than this (for soft/low-res files)
//   scale: 0.8     show the image at 80% of its space, centred (more breathing room)
//
// hero can be one image, or { images: [a, b] } for a side-by-side opening pair.
//
// "-web.jpg" files are compressed copies of very large originals (which are
// kept alongside them). Use the path helpers below — folder and file names
// contain spaces, brackets and accents and must be URL-encoded.
// ─────────────────────────────────────────────────────────────────────────────

// Project pages live two folders deep (work/<slug>/), so they set
// <html data-root="../../">; every asset path is prefixed with it.
const ROOT = document.documentElement.dataset.root || "";

function enc(folder, name) {
  return ROOT + folder + "/" + encodeURIComponent(name);
}
const imgPath = (name) => enc("project_1_guardians_of_the_ocean", name);
const storyImg = (name) => enc("project_1_guardians_of_the_ocean/to_use", name);
const foldImg = (name) => enc("Project%202%20%28fold%29", name);
const foldShop = (name) => enc("project_2_fold", name); // cream-background product shots
const femImg = (name) => enc("Project%203%20%28Future%20of%20Femininity%29", name);
const oboImg = (name) => enc("Project%204%20%28OCEANS%20by%20OLIVIA%29", name);
const uwImg = (name) => enc("Project%205%20%28Universal%20Works%29", name);

const PROJECT_ORDER = [
  "fold",
  "guardians-of-the-ocean",
  "oceans-by-olivia",
  "universal-works",
  "future-of-femininity",
];

const PROJECTS = {
  // ───────────────────────────────────────────────────────────── FÔLD
  fold: {
    title: "FÔLD",
    categories: ["Branding", "Product Design", "Graphic Design"],
    cover: ROOT + "covers/fold.jpg",
    facts: [
      ["Role", "Fashion Designer"],
      ["Client", "FÔLD reformer"],
      ["Scope", "Brand Identity · Apparel · Product & Digital Design"],
    ],
    // Opening pair of product photos. These originals are only 750px wide, so
    // they are shown side by side at (at most) their real size, never stretched.
    hero: {
      images: [
        { src: foldImg("New.webp"), alt: "FÔLD grip socks on the reformer" },
        { src: foldShop("photo-reformer.jpg"), alt: "FÔLD grip socks in use" },
      ],
    },
    overview:
      "As Lead Designer at FÔLD reformer and first official employee of the start-up, I was responsible for leading the design process from concept through to final production across a wide range of products, ensuring each one reflected the brand’s premium identity and vision.",
    contribution: [
      "My work included designing apparel, accessories and reformer equipment, such as mats and resistance bands. Alongside product design, I contributed to the development of the brand identity, sourced and liaised with manufacturers, and worked closely with the co-founders, business team and social media creators throughout the development process.",
      "ÔWEAR, the apparel line for FÔLD reformer, became the area I focused on most — designing across both apparel and accessories from first concept through to the finished product.",
    ],
    finished: [
      {
        type: "feature",
        heading: "Featured by British Vogue",
        text: "FÔLD reformer was mentioned by British Vogue, who published comments about my product designs — specifically my grip socks, which I designed on my own and worked closely with the manufacturer on to ensure high quality and innovation for a sticky grip.",
        image: { src: foldImg("vogue.jpg"), alt: "FÔLD in British Vogue" },
      },
      {
        images: [
          { src: foldShop("grip-socks-pack-web.webp"), alt: "Grip sock packaging" },
          { src: foldShop("band-stack.png"), alt: "Resistance bands" },
        ],
      },
      {
        images: [
          { src: foldShop("towels-web.webp"), alt: "FÔLD towels" },
          { src: foldShop("photo-sock.jpg"), alt: "Pink grip sock" },
        ],
      },
      {
        images: [
          { src: foldImg("app-transparent.png"), alt: "FÔLD app screen" },
          // Grey background removed — the mats sit straight on the page.
          { src: foldShop("reformer-mats-transparent.png"), alt: "Reformer mats" },
        ],
        caption: "Digital design and reformer equipment.",
      },
    ],
    development: [
      {
        spaced: true, // extra space around and between the two logos
        images: [
          // Fully transparent versions of the wordmarks (the originals had
          // black inside the O and D), sitting straight on the page background.
          { src: foldShop("logo-wordmark-green-transparent.png"), alt: "FÔLD wordmark, green" },
          { src: foldShop("logo-wordmark-pink-transparent.png"), alt: "FÔLD wordmark, berry" },
        ],
      },
      {
        // Brand board. The source file is soft, so it is capped at 900px wide
        // rather than stretched across the page.
        images: [{ src: foldImg("Fold 19-web.jpg"), alt: "FÔLD brand identity board", maxWidth: "900px" }],
        caption: "Brand identity — wordmark colourways, colour palette and brand applications.",
      },
      {
        images: [
          // Original white-background versions, so every line and label stays
          // readable when opened full screen.
          { src: foldImg("fold 5.PNG"), alt: "ÔWEAR sweatshirt flats" },
          { src: foldImg("fold 7.PNG"), alt: "ÔWEAR tops flats" },
        ],
      },
      {
        images: [
          { src: foldImg("fold 1-web.jpg"), alt: "Striped merchandise flats" },
          { src: foldImg("fold 2-web.jpg"), alt: "Grip sock design" },
        ],
        caption: "ÔWEAR apparel and accessory designs.",
      },
      {
        // Original white-background version (labels stay readable full screen).
        images: [{ src: foldImg("fold 14.PNG"), alt: "Tote bag colourways" }],
      },
      {
        type: "video",
        // Transparent background: vid.webm has real transparency. Safari and
        // iPhones can't show that, so they get vid-page.mp4 — the same video
        // rendered onto the page background colour, so it blends in.
        sources: [foldImg("vid.webm"), foldImg("vid-page.mp4")],
        transparent: true,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── OCEANS by OLIVIA
  "oceans-by-olivia": {
    title: "OCEANS by OLIVIA",
    categories: ["Branding", "Marketing", "Content Creation"],
    cover: ROOT + "covers/oceans-by-olivia.jpg",
    facts: [
      ["Season", "Spring/Summer 2026"],
      ["Scope", "Brand Identity · Marketing · Film"],
      ["Origin", "Extension of Guardians of the Ocean"],
    ],
    hero: {
      src: oboImg("Black and White Modern Initials Business Card - 1-web.jpg"),
      alt: "OCEANS by OLIVIA brand pattern and logo",
    },
    overview:
      "OCEANS by OLIVIA (O by O) is the branding and marketing extension of Guardians of the Ocean, transforming the collection into a cohesive fashion brand centred around ocean conservation. Inspired by the materials, colours and marine life featured throughout the collection, I developed a complete visual identity that communicates the brand’s values across every touchpoint.",
    contribution: [
      "I designed the full brand identity, including the logo, website and a range of marketing materials such as a lookbook, promotional film, business cards and swing tags. Every element was created to build a strong, recognisable brand that reinforces the collection’s message.",
      "I also filmed and directed the campaign film, and edited it using CapCut.",
    ],
    finished: [
      {
        images: [
          { src: oboImg("Look book - 1-web.jpg"), alt: "Lookbook cover" },
          { src: oboImg("Untitled design - 6.jpg"), alt: "Wear the Wild campaign image" },
        ],
      },
      {
        images: [
          { src: oboImg("exhi.jpg"), alt: "Exhibition installation" },
          { src: oboImg("exhi2.JPG"), alt: "Exhibition installation, second view" },
        ],
        caption: "OCEANS by OLIVIA at an exhibition, presenting the pieces as artwork.",
      },
      {
        images: [
          { src: oboImg("TAG.png"), alt: "Swing tags" },
          { src: oboImg("card-web.jpg"), alt: "Business cards" },
        ],
      },
      {
        images: [{ src: oboImg("phone-web.webp"), alt: "OCEANS by OLIVIA website on phones" }],
      },
      { type: "link", text: "OceansbyOlivia.com", href: "https://oceansbyolivia.com" },
      {
        type: "youtube",
        videoId: "FwC8Op-v3RA",
        title: "OCEANS by OLIVIA — campaign film",
        caption: "Campaign film — filmed, directed and edited by me.",
        captionAbove: true, // caption sits above the video
        id: "campaign-film", // link target: ../oceans-by-olivia/#campaign-film
      },
    ],
    development: [
      {
        // OBO label close-up beside the whale shark pencil sketch — first row
        // of Development, so the heading sits straight under the film.
        images: [
          { src: oboImg("corset-web.jpg"), alt: "OBO label sewn into the mussel-shell corset" },
          { src: oboImg("whale-shark-sketch.jpg"), alt: "Pencil sketch of a whale shark" },
        ],
      },
      {
        images: [
          { src: oboImg("logo.PNG"), alt: "OBO logo on navy" },
          // Swing-tag designs with the white background removed.
          // scale: 0.8 = shown 20% smaller within their space, so the row isn't crowded.
          { src: oboImg("IMG_9208-transparent.png"), alt: "OBO swing tag, front", scale: 0.8 },
          { src: oboImg("IMG_9209-transparent.png"), alt: "The Colony Corset swing tag", scale: 0.8 },
        ],
        caption: "Logo and swing-tag design.",
      },
      {
        images: [
          { src: oboImg("one-web.jpg"), alt: "Business card front" },
          { src: oboImg("two-web.jpg"), alt: "Business card back" },
        ],
      },
      {
        type: "text",
        text: "As well as using sustainable materials, I also conducted a coastal litter pick. I wanted to have a real impact, even if it was just a small one.",
      },
      {
        images: [
          { src: oboImg("IMG_8017-web.jpg"), alt: "Ocean waste found on the beach" },
          { src: oboImg("Look book - 11-web.jpg"), alt: "Collected litter" },
          { src: oboImg("beach-cleanup-web.jpg"), alt: "Coastal litter pick" },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── Guardians of the Ocean
  "guardians-of-the-ocean": {
    title: "Guardians of the Ocean",
    categories: ["Fashion Design", "Sustainable Materials", "Concept Development"],
    cover: ROOT + "covers/guardians-of-the-ocean.jpg",
    facts: [
      ["Role", "Creative Director and Designer"],
      ["Context", "Final Year Project (100 Credits)"],
      ["Grade", "First Class"],
    ],
    hero: { src: storyImg("4.jpg"), alt: "Guardians of the Ocean on the dunes" },
    overview:
      "Guardians of the Ocean is a concept-driven collection inspired by ocean conservation, exploring how fashion can become a powerful tool for environmental storytelling. Using sustainable materials and innovative construction techniques, the collection reflects my commitment to creating meaningful work that inspires greater awareness of our oceans.",
    contribution: [
      "As Creative Director, I developed the project from initial research and hand-drawn concepts through to fully realised garments, transforming two-dimensional ideas into immersive three-dimensional designs.",
      "I created the Colony Corset, Colony Bag and The Guardian Dress using sustainable materials and original design concepts inspired by marine life. My goal was to show that sustainability should drive creativity, not simply influence material choices.",
      "I also helped with the photography and videography for the collection, and I edited and created the campaign film, which can be seen on the OCEANS by OLIVIA project.",
    ],
    // Link shown under "My contribution".
    contributionLink: { text: "Watch the campaign film", href: "../oceans-by-olivia/#campaign-film" },
    finished: [
      {
        images: [
          { src: storyImg("thumbnail.JPEG"), alt: "Colony Corset and Colony Bag on the dunes" },
          { src: storyImg("3.jpeg"), alt: "The Guardian Dress" },
        ],
      },
      {
        images: [
          { src: storyImg("1.jpg"), alt: "Colony Corset" },
          { src: storyImg("2.jpeg"), alt: "Colony Bag" },
          { src: imgPath("DA93D9F5-7DD8-4C4D-ADE0-34D94B717D4D.jpg"), alt: "The Guardian Dress in movement" },
        ],
      },
      {
        images: [
          { src: imgPath("DSCF1311.jpg"), alt: "Mussel-shell detail" },
          { src: imgPath("DSCF1316.jpg"), alt: "Mussel shells and pearls" },
          { src: imgPath("DSCF1273.jpg"), alt: "Colony Bag on the sand" },
        ],
        caption: "Details — recycled mussel shells and pearls.",
      },
      {
        images: [
          { src: imgPath("wild.JPG"), alt: "Wear the Wild" },
          { src: storyImg("5.png"), alt: "Mussel-shell earrings" },
        ],
      },
    ],
    development: [
      {
        images: [{ src: storyImg("8.png"), alt: "Process board" }],
      },
      {
        images: [
          { src: imgPath("Look book - 35.jpg"), alt: "Illustration of The Guardian Dress" },
          { src: imgPath("Look book - 36.jpg"), alt: "Illustration of the Colony Corset look" },
          { src: imgPath("IMG_8837.jpg"), alt: "Technical drawings of The Guardian Dress", pad: true },
        ],
        caption: "Illustrations and technical drawings.",
      },
      {
        images: [{ src: imgPath("corsetd-transparent.png"), alt: "Colony Corset, front and back", pad: true }],
      },
      {
        images: [
          { src: imgPath("bag-transparent.png"), alt: "Colony Bag", pad: true },
          { src: imgPath("muscles-transparent.png"), alt: "Mussel-shell material study", pad: true },
        ],
        caption: "Colony Bag and a mussel-shell material study.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── Universal Works
  "universal-works": {
    title: "Universal Works",
    categories: ["Collaboration", "Menswear", "Concept Development"],
    cover: ROOT + "covers/universal-works.jpg",
    facts: [
      ["Project", "‘Progressive Functions’"],
      ["Client", "Universal Works"],
      ["Format", "Group collaboration"],
    ],
    hero: { src: uwImg("porfolio.jpg"), alt: "Progressive Functions portfolio title board" },
    overview:
      "A group collaboration with Universal Works, culminating in a presentation to the senior team at the brand. Titled ‘Progressive Functions’, the project was inspired by military menswear and functional clothing, reinterpreting these influences through the brand’s relaxed, utility-focused aesthetic.",
    contribution: [
      "As part of the team, I contributed to a considered capsule of denim, shirting and outerwear, taking designs from initial research and material exploration through to finished, wearable garments.",
      "I was involved in developing the collection from concept to completion, contributing to pattern drafting, fit refinement and the construction and detailing of each piece. Every design decision was informed by Universal Works’ ethos of functional, enduring clothing.",
    ],
    finished: [
      {
        images: [
          { src: uwImg("7.jpg"), alt: "The team wearing the collection" },
          { src: uwImg("IMG_7199.jpg"), alt: "Outerwear look" },
          { src: uwImg("IMG_7140.jpg"), alt: "The collection" },
        ],
      },
      {
        images: [
          { src: uwImg("IMG_7220.jpg"), alt: "Wide-leg jeans" },
          { src: uwImg("IMG_8908.JPG"), alt: "Denim waistband detail" },
          { src: uwImg("IMG_8852-web.jpg"), alt: "Seed-pocket sustainability detail" },
        ],
        caption: "Denim waistband detail and seed-pocket sustainability detail.",
      },
    ],
    development: [
      {
        images: [
          { src: uwImg("swatch.JPG"), alt: "Material swatches" },
          { src: uwImg("flat-web.jpg"), alt: "Shirt and jeans laid flat" },
          { src: uwImg("IMG_8904.JPG"), alt: "Shirt in progress on the stand" },
        ],
        caption: "Working as a team we decided on a colour palette and final materials for the collection.",
      },
      {
        images: [
          { src: uwImg("IMG_2514.PNG"), alt: "Shirt pattern pieces", pad: true },
          { src: uwImg("jeans-flats-transparent.png"), alt: "Coloured technical flats of the jeans", pad: true },
        ],
        caption: "I drafted the full pattern set and technical drawings myself, translating each design into production-ready specifications.",
      },
      {
        images: [
          { src: uwImg("C8BCD217-86E5-49FF-A010-1EA737CC451D.png"), alt: "Universal Works × Olivia Turner", pad: true },
          { src: uwImg("phoneuw-transparent.png"), alt: "Universal Works × Olivia Turner on a phone", pad: true },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── Future of Femininity
  "future-of-femininity": {
    title: "Future of Femininity",
    categories: ["Fashion Design", "Innovation", "Concept Development"],
    cover: ROOT + "covers/future-of-femininity.jpg",
    facts: [
      ["Type", "Fashion Collection"],
      ["Scope", "Concept & Design"],
      ["Materials", "Repurposed & recycled"],
    ],
    hero: { src: femImg("f9-web.jpg"), alt: "The golden shield top" },
    overview:
      "Future of Femininity reimagines femininity through a futuristic lens, exploring female strength, identity and empowerment. Inspired by the power of the Roman era, the symbolism of gold, and the tension between freedom and control, the collection presents a bold vision of modern womanhood.",
    contribution: [
      "The project aimed to push the boundaries of contemporary fashion through material innovation and experimental construction. Using unconventional materials, including a top created from a repurposed picture frame, alongside advanced sewing techniques to create texture, the collection challenged traditional approaches to garment design.",
      "I created a golden shield top made 100% from recycled products and moulded it myself. I also created a two-piece draped skirt with textured sewing techniques.",
    ],
    finished: [
      {
        images: [
          { src: femImg("thumb-web.jpg"), alt: "Golden shield top" },
          { src: femImg("f3-web.jpg"), alt: "Full look with draped skirt" },
          { src: femImg("f1-web.jpg"), alt: "Two-piece draped skirt" },
        ],
      },
      {
        images: [
          { src: femImg("f2-web.jpg"), alt: "Moulded gold top" },
          { src: femImg("f5-inverted.png"), alt: "digital Venus branding" },
        ],
      },
      {
        images: [{ src: femImg("f4-transparent.png"), alt: "Swing tags", pad: true }],
      },
    ],
    development: [
      {
        images: [{ src: femImg("f16.png"), alt: "Research mood board" }],
        caption: "Research and mood board.",
      },
      {
        images: [
          { src: femImg("f12.png"), alt: "Colour and material palette" },
          { src: femImg("f8-web.jpg"), alt: "Gold texture study" },
        ],
      },
      {
        images: [
          { src: femImg("f15-web.jpg"), alt: "Design development board" },
          { src: femImg("f14-web.jpg"), alt: "Design development board" },
        ],
        caption:
          "Early development boards, where the drape, tension and gold tones were tested before being carried through into the final garments.",
      },
      {
        images: [{ src: femImg("f13-web.jpg"), alt: "Collection line-up illustration" }],
      },
      {
        images: [
          { src: femImg("f6-web.jpg"), alt: "Fashion illustration" },
          { src: femImg("f7.PNG"), alt: "Fashion illustration of the final look" },
        ],
        caption: "Fashion illustrations.",
      },
    ],
  },
};
