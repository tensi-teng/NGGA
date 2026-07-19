// Vite imports all assets in /assests (including subfolders) as a map via import.meta.glob
const assetModules = import.meta.glob('/assests/**/*.{jpg,jpeg,png,mp4,webp}', { eager: true });

// Build a name → url map: e.g. "hero-01" → "/assests/hero-01.jpg"
// For subfolders, key is "FolderName/filename" e.g. "Birthday/birthday-01"
const assetMap = {};
for (const [filePath, mod] of Object.entries(assetModules)) {
  const filename = filePath.split('/').pop(); // e.g. "hero-01.jpg"
  const key = filename.replace(/\.[^.]+$/, '');  // strip extension → "hero-01"
  assetMap[key] = mod.default;

  // Also store with folder prefix for subfolders: "Birthday/birthday-01"
  const parts = filePath.split('/');
  if (parts.length > 3) { // /assests/Folder/file.jpg has 4 parts
    const folder = parts[parts.length - 2];
    const folderKey = `${folder}/${key}`;
    assetMap[folderKey] = mod.default;
  }
}

/**
 * Returns the resolved asset URL for a given asset key.
 * Falls back to a placehold.co URL if the asset isn't found.
 *
 * @param {string} key  - asset key, e.g. "hero-01", "gallery-trusted", "vid-01"
 * @param {number} w    - fallback placeholder width
 * @param {number} h    - fallback placeholder height
 * @param {string} text - fallback placeholder text
 * @param {string} bg   - fallback placeholder bg color hex (no #)
 */
export const asset = (key, w = 400, h = 400, text = key, bg = '333') =>
  assetMap[key] ?? `https://placehold.co/${w}x${h}/${bg}/fff?text=${encodeURIComponent(text)}`;

// Legacy helper — kept so nothing breaks during migration
export const img = (w, h, text, bg = '333') =>
  `https://placehold.co/${w}x${h}/${bg}/fff?text=${encodeURIComponent(text)}`;

export default assetMap;
