import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { galleryEvents, resolvedVideoItems } from "../utils/gallery";

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.key}
          className="w-full max-h-[88vh] object-contain"
        />
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
        <video
          src={item.src}
          className="w-full max-h-[70vh] object-contain bg-black"
          controls
          autoPlay
          playsInline
        />
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

// ── Event Accordion ───────────────────────────────────────────────────────────
function EventAccordion({ event }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden mb-4">
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
            {event.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1 leading-relaxed max-w-2xl">
            {event.description}
          </p>
          <p className="text-gray-600 text-xs mt-2 font-bold uppercase tracking-widest">
            {event.images.length} {event.images.length === 1 ? "photo" : "photos"}
          </p>
        </div>
        <div
          className={`ml-4 flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Image grid */}
      {open && (
        <div className="px-4 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {event.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActive(img)}
                className="rounded-xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={img.src}
                  alt={`${event.title} ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Lightbox item={active} onClose={() => setActive(null)} />
    </div>
  );
}

// ── Images Tab ────────────────────────────────────────────────────────────────
function ImagesTab() {
  return (
    <div>
      {galleryEvents.map((event) => (
        <EventAccordion key={event.id} event={event} />
      ))}
    </div>
  );
}

// ── Videos Tab ────────────────────────────────────────────────────────────────
function VideosTab() {
  const [active, setActive] = useState(null);
  const videos = resolvedVideoItems.filter((v) => v.src);

  return (
    <div>
      {videos.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No videos available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item)}
              className="rounded-2xl overflow-hidden relative group cursor-pointer bg-gray-900"
              style={{ height: "280px" }}
            >
              <video
                src={item.src}
                className="w-full h-full object-cover object-top"
                preload="metadata"
                playsInline
              />
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
      )}
      <VideoLightbox item={active} onClose={() => setActive(null)} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") === "videos" ? "videos" : "images");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:opacity-60 transition-opacity"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
          NGGA Gallery
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        {/* Page heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none">
            <span className="stroke-text">OUR</span>
            <br />
            GALLERY
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-xl">
            Photos and videos from across the Nigerian Girl Guides Association — 30 states, one sisterhood.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          <button
            onClick={() => setTab("images")}
            className={`px-7 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              tab === "images"
                ? "bg-white text-black"
                : "border border-white/20 text-gray-400 hover:border-white hover:text-white"
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setTab("videos")}
            className={`px-7 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              tab === "videos"
                ? "bg-white text-black"
                : "border border-white/20 text-gray-400 hover:border-white hover:text-white"
            }`}
          >
            Videos
          </button>
        </div>

        {tab === "images" ? <ImagesTab /> : <VideosTab />}
      </div>
    </div>
  );
}
