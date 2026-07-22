import assetMap from "./img";

// ── Helpers ───────────────────────────────────────────────────────────────────
// Images: all jpg/jpeg/png keys under a folder (excludes video-named files)
function folderImages(folderName) {
  return Object.entries(assetMap)
    .filter(([k]) => {
      if (!k.startsWith(`${folderName}/`)) return false;
      // exclude mp4/video keys — they contain "vid" in the filename
      const filename = k.split('/').pop();
      return !filename.includes('vid');
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, src]) => ({ key, src }));
}

// Videos: all mp4 keys under a folder — filename contains "vid"
function folderVideos(folderName, title) {
  return Object.entries(assetMap)
    .filter(([k]) => {
      if (!k.startsWith(`${folderName}/`)) return false;
      const filename = k.split('/').pop();
      return filename.includes('vid');
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, src]) => ({ key, src, title }));
}

// ── Events ────────────────────────────────────────────────────────────────────
export const galleryEvents = [
  {
    id: "cambodia",
    title: "Nigerian Delegation at the 39th WAGGGS World Conference",
    description:
      "🇳🇬 Nigerian Delegation Arrives in Cambodia for the 39th WAGGGS World Conference 🇰🇭 After an extensive journey of over 22 hours, the Nigerian delegation has safely arrived in Siem Reap, Cambodia, to participate in the 39th World Conference of the World Association of Girl Guides and Girl Scouts (WAGGGS). We are deeply grateful for a safe and successful journey and excited to join fellow Girl Guides and Girl Scouts from across the globe. The Conference provides a unique platform to exchange ideas, share experiences, strengthen global partnerships, learn from one another, and contribute to important discussions that will shape the future of our Movement. The Nigerian delegation comprises: Deaconess Rhoda Olufunmilola Thomas – Chief Commissioner, Head of Delegation | Mrs. Tejiri Okeregbe, MNIM – International Commissioner, Delegate | Ms. Afomachi Obiora – Young Leader, Observer | Dr. Kalalali Asimini-Hart – State Commissioner, Delegate Observer | Mrs. Asmau Nephatiti Aliyu – National Youth Commissioner, International Service Team (IST).",
    images: folderImages("cambodia"),
  },
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
const mainVideos = [
  { key: "vid-01", },
  { key: "vid-02", },
  { key: "vid-03", },
  { key: "vid-04", },
  { key: "vid-05", },
  { key: "vid-06", },
  { key: "vid-07", },
  { key: "vid-08", },
  { key: "vid-09", },
  { key: "vid-10"  },
].map((v) => ({
  ...v,
  src: assetMap[`videos/${v.key}`] ?? assetMap[v.key] ?? null,
}));

const cambodiaVideos = folderVideos("cambodia", "Cambodia — WAGGGS World Conference");

export const resolvedVideoItems = [
  ...mainVideos,
  ...cambodiaVideos,
].filter((v) => v.src);

// ── Legacy exports ────────────────────────────────────────────────────────────
export const galleryItems = [];
export const resolvedGalleryItems = [];
