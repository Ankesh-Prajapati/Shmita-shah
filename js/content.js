/* ============================================================
   EDIT HERE — all copy, links and image paths live in SITE.
   Photos: drop files in /assets and change the paths below.
   Landscape or portrait both work; portrait ~4:5 at 1600px+ is ideal.
   ============================================================ */
const SITE = {
  name: "Shmitaa Shah",
  title: "Cinematographer & Visual Storyteller",
  opening: "Every frame holds a memory.",
  eye: { chapter: "Chapter 01 — The Eye", title: "She sees it before it happens.",
    p1: "Shmita is a cinematographer, photographer and visual storyteller. Her work begins with patience: waiting for the breath before the laugh, the glance before the embrace.",
    p2: "She believes in emotion, movement and moments that cannot be recreated. Light is only the language. The story is always the person in front of the lens.",
    pull: "Light is only the language." },
  chareveti: { chapter: "Chapter 02 — Chareveti Films", wm1: "चरैवेति", wm2: "FILMS", tag: "Keep moving. Keep going.", role: "Founder & Cinematographer",
    p1: "Shmita first founded Chareveti Films. The name, चरैवेति, is a philosophy she follows in her own life  keep moving, keep going, never stop. It reflects how she approaches life, creativity and overcoming challenges." },
  /* the turn: not a company, a person — described as someone she considers like a son */
  joy: { chapter: "Chapter 03 — Joykeneth", name: "Joykeneth", line: "Someone who became family by the heart.",
    p1: "Later, Joykeneth became an important part of Shmita's life someone she loves and considers like her own son. The bond, and the happiness that came with it, inspired what came next." },
  moj: { chapter: "Chapter 04 — Memories of Joy", wm1: "Memories of Joy", wm2: "", tag: "A name inspired by the joy and memories connected to him.", role: "Wedding & pre-wedding photography",
    p1: "Shmita changed the company's name from Chareveti Films to Memories of Joy. Chareveti is her philosophy of moving forward; Memories of Joy is a deeply personal chapter of her life.",
    p2: "Weddings and pre-wedding stories from Surat and Mumbai, told through light, movement and the small moments in between the ones that outlast the day." },
  tss: { chapter: "Chapter 05 — Tinyy Steps Studio", wm1: "Tinyy Steps", wm2: "STUDIO", title: "The earliest chapters.", role: "Founder",
    p1: "From wedding stories to the beginning of family life. Maternity, newborn and growing-years photography, from first kicks to first birthdays." },
  framesIntro: { chapter: "Chapter 06 — The Frames", title: "Stills from the archive." },
  beyond: { chapter: "Chapter 07 — Beyond the Frame", title: "The person behind the camera.",
    bio: "Founder of Memories of Joy — which began as Chareveti Films and of Tinyy Steps Studio. Shmita is a cinematographer, photographer and visual storyteller based in Surat, Gujarat. She believes in emotion, movement and moments that cannot be recreated. Light is only the language. The story is always the person in front of the lens.",
    philosophy: "Be present, be quiet, let the moment lead. I have always believed that a photograph or a film should do more than show a moment — it should make you feel it again. People change, children grow, celebrations become memories. What remains are the little frames we chose to preserve. For me, photography and cinema are not just about creating beautiful images. They are about holding on to a feeling, a story, a chapter of life and giving it a place to live forever.",
    workHead: "Selected work", placesHead: "Locations" },
  work: [["Memories of Joy","Formerly Chareveti Films · Wedding & pre-wedding"],["Tinyy Steps Studio","Founder · trusted by 1000+ mothers"]],
  places: [["Surat","Gujarat"],["Mumbai","Maharashtra"],["[Add location]",""]],
  final: ["Some moments happen once.", "Some stories deserve to live forever."],
  contact: [
    /* no social links on purpose. To add a way to reach her, e.g.: { label: "hello@yourdomain.com", href: "mailto:hello@yourdomain.com" } */
  ],
  /* Optional: drop the real Chareveti logo into /assets and uncomment — it replaces the typeset चरैवेति FILMS lockup */
  logos: { /* chareveti: "assets/chareveti-logo.png" */ },
  footer: "© Shmitaa Shah",
  seals: { moj: "assets/moj-logo.jpg", tss: "assets/tss-logo.jpg" },
  images: {
    hero:      { src: "assets/photo-girl-bw.jpg",     alt: "Black and white portrait of Shmita, eyes closed",   caption: "Stillness",  pos: "50% 40%" },
    eye:       { src: "assets/photo-portrait.jpg",    alt: "Portrait of Shmita smiling, seated on stone steps",  caption: "Portrait",   pos: "50% 30%" },
    chareveti: { src: "assets/photo-chareveti.jpg",   alt: "Aeroplane window at dusk with the Chareveti mark",   caption: "Chareveti" },
    joy:       { src: "assets/photo-joykeneth.jpg",   alt: "Joykeneth, smiling in a black graduation gown", caption: "Joykeneth", pos: "50% 32%" },
    moj:       { src: "assets/photo-clay.jpg",        alt: "Woman resting her chin among clay pots",             caption: "Amber hour" },
    tss:       { src: "assets/photo-field.jpg",       alt: "Woman in a white embroidered outfit in a green field", caption: "Open field", pos: "50% 35%" },
    credits:   { src: "assets/photo-pottery.jpg",     alt: "" },
    final:     { src: "assets/photo-silhouette.jpg",  alt: "Backlit silhouette in golden smoke" }
  },
  frames: [
    { src: "assets/photo-clay.jpg",        alt: "Woman among clay pots",                    caption: "Amber hour" },
    { src: "assets/photo-portrait.jpg",    alt: "Portrait, smiling on steps",               caption: "Portrait" },
    { src: "assets/photo-chareveti.jpg",   alt: "Aeroplane window",                         caption: "Chareveti" },
    { src: "assets/photo-pottery.jpg",     alt: "Woman facing shelves of terracotta pots",  caption: "Terracotta" },
    { src: "assets/photo-girl-bw.jpg",     alt: "Portrait, eyes closed",                    caption: "Stillness" },
    { src: "assets/photo-field.jpg",       alt: "Woman laughing in a green field",          caption: "Open field" },
    { src: "assets/photo-silhouette.jpg",  alt: "Backlit silhouette in golden smoke",       caption: "Backlight" },
    { src: "assets/photo-reading.jpg",     alt: "Woman reading in transit",                 caption: "In transit" }
  ]
};
