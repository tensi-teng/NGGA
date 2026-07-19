import assetMap from "./img";

// ── Helper: grab all keys that belong to a folder ─────────────────────────────
function folderImages(folderName) {
  return Object.keys(assetMap)
    .filter((k) => k.startsWith(`${folderName}/`))
    .sort()
    .map((k) => ({ key: k, src: assetMap[k] }));
}

// ── Events ────────────────────────────────────────────────────────────────────
export const galleryEvents = [
  {
    id: "thinking-day",
    title: "World Thinking Day 100th Anniversary",
    description:
      "The Nigerian Girl Guides Association, Rivers State Chapter joyfully celebrated World Thinking Day 100th Anniversary with a series of meaningful and engaging activities. The celebration featured quiz competition, educational presentations in schools, energizers, enrollment ceremony for new members and lots more. The event provided an opportunity for Guides to learn, interact, and strengthen the spirit of friendship and unity. The celebration was a great success, and we remain committed to promoting the values of Guiding, empowering young girls and strengthening our friendship.",
    images: folderImages("Thinking day"),
  },
  {
    id: "birthday",
    title: "Celebrating our Big Mummy",
    description:
      "Celebrating our Big Mummy. Dame Dr. Christie Toby at 85.....Bravooooo",
    images: folderImages("Birthday"),
  },
  {
    id: "thanksgiving",
    title: "Thanksgiving Service",
    description:
      "Thanksgiving Service of NGGA Rivers and Trefoil Guild Rivers at the St. Cyprians Church Port-Harcourt Rivers State for a successful Thinking Day Celebration.",
    images: folderImages("Thanksgiving"),
  },
  {
    id: "meeting",
    title: "Monthly General Meeting",
    description:
      "Monthly General Meeting at the Guide Headquarters, Port-Harcourt, Rivers State.",
    images: folderImages("Meeting"),
  },
];

// ── Videos pool ───────────────────────────────────────────────────────────────
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
  src: assetMap[`videos/${v.key}`] ?? assetMap[v.key] ?? null,
}));

// ── Legacy exports (kept for backward compat) ─────────────────────────────────
export const galleryItems = [];
export const resolvedGalleryItems = [];
