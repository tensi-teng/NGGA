import { useState, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { galleryEvents, resolvedVideoItems } from "../utils/gallery";
import SwipeLightbox from "../components/SwipeLightbox";

// ── Lightbox / VideoLightbox replaced by SwipeLightbox ───────────────────────

// ── Event Accordion ───────────────────────────────────────────────────────────
function EventAccordion({ event }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);

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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                onClick={() => setActiveIdx(i)}
                className="rounded-xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={img.src}
                  alt={`${event.title} ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <SwipeLightbox
        items={event.images}
        index={activeIdx}
        onClose={() => setActiveIdx(null)}
        onNav={setActiveIdx}
        type="image"
      />
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

function VideoThumb({ item, onClick }) {
  const ref = useRef(null);
  const wrapRef = useRef(null);

  // Desktop: hover to preview
  function handleMouseEnter() {
    if (ref.current) { ref.current.currentTime = 0; ref.current.play().catch(() => {}); }
  }
  function handleMouseLeave() {
    if (ref.current) { ref.current.pause(); ref.current.currentTime = 0; }
  }

  // Mobile: play when scrolled into view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = ref.current;
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.currentTime = 0;
          vid.play().catch(() => {});
        } else {
          vid.pause();
          vid.currentTime = 0;
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl overflow-hidden relative group cursor-pointer bg-black"
      style={{ height: "280px" }}
    >
      <video
        ref={ref}
        src={item.src}
        className="w-full h-full object-cover object-top"
        preload="metadata"
        playsInline
        muted
        loop
        onTimeUpdate={(e) => {
          if (e.target.currentTime >= 6) e.target.currentTime = 0;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-black text-white uppercase">{item.title}</h3>
      </div>
    </div>
  );
}

function VideosTab() {
  const [activeIdx, setActiveIdx] = useState(null);
  const videos = resolvedVideoItems.filter((v) => v.src);

  return (
    <div>
      {videos.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No videos available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((item, i) => (
            <VideoThumb key={i} item={item} onClick={() => setActiveIdx(i)} />
          ))}
        </div>
      )}
      <SwipeLightbox
        items={videos}
        index={activeIdx}
        onClose={() => setActiveIdx(null)}
        onNav={setActiveIdx}
        type="video"
      />
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
