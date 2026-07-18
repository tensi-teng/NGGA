import { useState } from "react";
import { Link } from "react-router-dom";
import { resolvedGalleryItems, resolvedVideoItems } from "../utils/gallery";
import assetMap from "../utils/img";

const photoPool = Array.from({ length: 51 }, (_, i) => {
  const key = `photo-${String(i + 1).padStart(2, "0")}`;
  return { key, src: assetMap[key] ?? null };
}).filter((p) => p.src);

// ── Image Lightbox ─────────────────────────────────────────────────────────────
function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title ?? item.key}
          className="w-full max-h-[88vh] object-contain"
        />
        {item.title && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
            {item.num && <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">{item.num}</p>}
            <h3 className="text-2xl font-black text-white uppercase">{item.title}</h3>
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center text-lg font-bold hover:bg-black"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ── Video Lightbox ─────────────────────────────────────────────────────────────
function VideoLightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <video src={item.src} className="w-full max-h-[70vh] object-contain bg-black" controls autoPlay playsInline />
        <div className="p-5">
          <h3 className="text-xl font-black text-white uppercase">{item.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center text-lg font-bold hover:bg-white/20"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ── Guide Law Grid ────────────────────────────────────────────────────────────
function GuideLawGrid() {
  const [active, setActive] = useState(null);
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
        <span className="stroke-text">GUIDE LAW</span>
        <br />
        IN ACTION
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resolvedGalleryItems.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="img-card rounded-2xl cursor-pointer group"
            style={{ height: "340px" }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />
            <div className="absolute top-4 left-4 z-20 font-black text-2xl text-white/40">{item.num}</div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-lg font-black text-white uppercase">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}

// ── Videos Grid ───────────────────────────────────────────────────────────────
function VideosGrid() {
  const [active, setActive] = useState(null);
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
        <span className="stroke-text">GUIDING</span>
        <br />
        IN MOTION
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resolvedVideoItems.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="rounded-2xl overflow-hidden relative group cursor-pointer bg-gray-900"
            style={{ height: "300px" }}
          >
            <video src={item.src} className="w-full h-full object-cover object-top opacity-65" preload="metadata" playsInline />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/35 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-black text-white uppercase">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <VideoLightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}

// ── Full Photo Pool ───────────────────────────────────────────────────────────
function PhotoPool() {
  const [active, setActive] = useState(null);
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
        <span className="stroke-text">ALL</span>
        <br />
        PHOTOS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photoPool.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="img-card rounded-xl cursor-pointer group"
            style={{ height: "300px" }}
          >
            <img
              src={item.src}
              alt={item.key}
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:opacity-60 transition-opacity"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">NGGA Gallery</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none">
            <span className="stroke-text">OUR</span>
            <br />
            GALLERY
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-xl">
            Photos and videos from across the Nigerian Girl Guides Association — 30 states, one sisterhood.
          </p>
        </div>

        <GuideLawGrid />
        <VideosGrid />
        <PhotoPool />
      </div>
    </div>
  );
}
