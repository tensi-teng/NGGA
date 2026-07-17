import { asset } from "./img";

// Guide Law "in action" gallery items
// Each item maps to a renamed asset from /assests/
export const galleryItems = [
  {
    num: "01",
    title: "Trusted",
    bg: "C6FF3D",
    copy: "A Guide's word is her bond — she can be relied upon at all times.",
    image: "gallery-trusted",
  },
  {
    num: "02",
    title: "Loyal",
    bg: "E8447A",
    copy: "She shows loyalty to her family, her leaders, her country and the world.",
    image: "gallery-loyal",
  },
  {
    num: "03",
    title: "Useful & Helpful",
    bg: "F4B740",
    copy: "Every day brings a Good Turn, freely given to someone in need.",
    image: "gallery-useful",
  },
  {
    num: "04",
    title: "A Friend to All",
    bg: "5FC9D6",
    copy: "She reaches across every divide to build sisterhood and understanding.",
    image: "gallery-friend-to-all",
  },
  {
    num: "05",
    title: "Courteous",
    bg: "123626",
    copy: "Politeness and respect guide how she treats everyone she meets.",
    image: "gallery-courteous",
  },
  {
    num: "06",
    title: "Friend to Living Things",
    bg: "E8447A",
    copy: "She protects nature and cares for every living creature around her.",
    image: "gallery-friend-living-things",
  },
  {
    num: "07",
    title: "Obedient",
    bg: "F4B740",
    copy: "She follows guidance with a willing heart and a thoughtful mind.",
    image: "gallery-obedient",
  },
  {
    num: "08",
    title: "Cheerful",
    bg: "C6FF3D",
    copy: "She meets difficulty with a smile and lifts the spirits of those around her.",
    image: "gallery-cheerful",
  },
  {
    num: "09",
    title: "Thrifty",
    bg: "5FC9D6",
    copy: "She values resources, saves wisely, and never wastes what she is given.",
    image: "gallery-thrifty",
  },
  {
    num: "10",
    title: "Pure in Thought, Word & Deed",
    bg: "123626",
    copy: "She holds herself to the highest standard of honesty and integrity.",
    image: "gallery-pure",
  },
];

// Resolve asset URLs at call time
export const resolvedGalleryItems = galleryItems.map((item) => ({
  ...item,
  src: asset(item.image, 400, 500, item.title, item.bg),
  video: item.video ?? null,
}));

// Videos pool for the video gallery section
export const videoItems = [
  { key: "vid-01", title: "Camp Life" },
  { key: "vid-02", title: "Sisterhood" },
  { key: "vid-03", title: "Badge Work" },
  { key: "vid-04", title: "Leadership" },
  { key: "vid-05", title: "Community Service" },
  { key: "vid-06", title: "Outdoor Adventure" },
  { key: "vid-07", title: "Ceremony" },
  { key: "vid-08", title: "The Promise" },
  { key: "vid-09", title: "Guiding Moments" },
  { key: "vid-10", title: "Our Sisterhood" },
];

export const resolvedVideoItems = videoItems.map((v) => ({
  ...v,
  src: asset(v.key),
}));

// Opens full gallery in a new tab
export const openGalleryInNewTab = () => {
  const imagesHtml = resolvedGalleryItems
    .map((item) => {
      const media = item.video
        ? `<video src="${item.video}" style="width:100%;border-radius:16px;display:block;" controls playsinline/>`
        : `<img src="${item.src}" alt="${item.title}" style="width:100%;border-radius:16px;display:block;" />`;

      return `
        <figure style="margin:0 0 40px;break-inside:avoid;">
          ${media}
          <figcaption style="margin-top:14px;font-family:'Anton',sans-serif;text-transform:uppercase;font-size:22px;">
            <span style="opacity:0.4;">${item.num}</span> ${item.title}
          </figcaption>
          <p style="color:#aaa;font-size:14px;line-height:1.6;margin-top:4px;max-width:520px;">${item.copy}</p>
        </figure>
      `;
    })
    .join("");

  const pageHtml = `<!DOCTYPE html>
<html><head>
  <meta charset="UTF-8">
  <title>NGGA — Guide Law in Action | Full Gallery</title>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body{background:#0b1f17;color:#F6F1E4;font-family:'Inter',sans-serif;margin:0;padding:60px 24px;}
    .wrap{max-width:960px;margin:0 auto;columns:2;column-gap:36px;}
    h1{font-family:'Anton',sans-serif;text-transform:uppercase;font-size:clamp(32px,6vw,56px);margin-bottom:40px;}
    @media(max-width:700px){.wrap{columns:1;}}
  </style>
</head>
<body>
  <h1>Guide Law in Action — Full Gallery</h1>
  <div class="wrap">${imagesHtml}</div>
</body></html>`;

  const blob = new Blob([pageHtml], { type: "text/html" });
  window.open(URL.createObjectURL(blob), "_blank");
};
