import { useState } from "react";
import { Link } from "react-router-dom";
import { resolvedGalleryItems, resolvedVideoItems } from "../utils/gallery";
import { IconArrowRight } from "./Icons";

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-3xl overflow-hidden img-card"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.title} className="img-bg" aria-hidden="true" />
        <img src={item.src} alt={item.title} className="img-fg" style={{ maxHeight: "88vh" }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
          <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">{item.num}</p>
          <h3 className="text-2xl font-black text-white uppercase">{item.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-lg font-bold hover:bg-black"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ── Photo preview (first 6) ───────────────────────────────────────────────────
function PhotoPreview() {
  const [active, setActive] = useState(null);
  const preview = resolvedGalleryItems.slice(0, 6);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight">
          <span className="stroke-text">GUIDE LAW</span>
          <br />
          IN ACTION
        </h2>
        <Link
          to="/gallery"
          className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-bold text-sm hover:opacity-80 transition-opacity uppercase"
        >
          View More <IconArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {preview.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="img-card rounded-3xl cursor-pointer group"
            style={{ minHeight: "300px" }}
          >
            {/* blurred colour fill */}
            <img src={item.src} alt="" className="img-bg" aria-hidden="true" />
            {/* real image, no crop */}
            <img
              src={item.src}
              alt={item.title}
              className="img-fg group-hover:scale-105 transition-transform duration-700"
            />
            {/* overlay + labels */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute top-4 left-4 z-20 font-black text-2xl text-white/40">{item.num}</div>
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <h3 className="text-xl font-black text-white uppercase leading-tight">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 border-2 border-white text-white px-10 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all uppercase"
        >
          View All Photos & Videos <IconArrowRight />
        </Link>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  );
}

// ── Video preview (first 4) — static thumbnail, plays only on click ──────────
function VideoPreview() {
  const [active, setActive] = useState(null);
  const preview = resolvedVideoItems.slice(0, 4);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10 mt-20">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight">
          <span className="stroke-text">GUIDING</span>
          <br />
          IN MOTION
        </h2>
        <Link
          to="/gallery"
          className="flex items-center gap-2 border-2 border-white text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all uppercase"
        >
          All Videos <IconArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {preview.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className="rounded-3xl overflow-hidden relative group cursor-pointer bg-gray-900"
            style={{ height: "320px" }}
          >
            <video
              src={item.src}
              className="w-full h-full object-cover opacity-70"
              preload="metadata"
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-base font-black text-white uppercase leading-tight">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={active.src}
              className="w-full max-h-[65vh] object-contain bg-black"
              controls autoPlay playsInline
            />
            <div className="p-5">
              <h3 className="text-xl font-black text-white uppercase">{active.title}</h3>
            </div>
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center text-lg font-bold hover:bg-white/20"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Gallery() {
  return (
    <section className="py-20 px-6" id="gallery">
      <div className="max-w-7xl mx-auto">
        <PhotoPreview />
        <VideoPreview />
      </div>
    </section>
  );
}
