import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleryEvents, resolvedVideoItems } from "../utils/gallery";
import { IconArrowRight } from "./Icons";
import SwipeLightbox from "./SwipeLightbox";

// ── Pick a handful of images spread across all event folders ──────────────────
function pickImages() {
  const picks = [];
  // thinking day — first 3
  const td = galleryEvents.find((e) => e.id === "thinking-day")?.images ?? [];
  picks.push(...td.slice(0, 3));
  // birthday — first 2
  const bd = galleryEvents.find((e) => e.id === "birthday")?.images ?? [];
  picks.push(...bd.slice(0, 2));
  // thanksgiving — first 1
  const tg = galleryEvents.find((e) => e.id === "thanksgiving")?.images ?? [];
  picks.push(...tg.slice(0, 1));
  // meeting — first 2
  const mt = galleryEvents.find((e) => e.id === "meeting")?.images ?? [];
  picks.push(...mt.slice(0, 2));
  return picks; // 8 total
}

const previewImages = pickImages();
// Show only the first 4 videos that actually have a src
const previewVideos = resolvedVideoItems.filter((v) => v.src).slice(0, 4);

// ── Lightbox ──────────────────────────────────────────────────────────────────
// (replaced by SwipeLightbox)

// ── Video lightbox ─────────────────────────────────────────────────────────────
// (replaced by SwipeLightbox)

// ── Short looping video thumbnail ─────────────────────────────────────────────
function VideoThumb({ item, onClick }) {
  const ref = useRef(null);
  const wrapRef = useRef(null);

  // Desktop: play on hover
  function handleMouseEnter() {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play().catch(() => {});
    }
  }
  function handleMouseLeave() {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }

  // Mobile: play a short clip when the card scrolls into view
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
      className="relative rounded-3xl overflow-hidden cursor-pointer group bg-black"
      style={{ height: "260px" }}
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
      {/* play icon — fades out while playing */}
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>

    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [photoIdx, setPhotoIdx] = useState(null);
  const [videoIdx, setVideoIdx] = useState(null);

  return (
    <section className="py-20 px-6" id="gallery">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="stroke-text">OUR</span>
            <br />
            GALLERY
          </h2>
          <Link
            to="/gallery"
            className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-bold text-sm hover:opacity-80 transition-opacity uppercase"
          >
            View All <IconArrowRight />
          </Link>
        </div>

        {/* ── Photo scroll strip ── */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-14 pb-1">
          {previewImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setPhotoIdx(i)}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
              style={{ width: "220px", height: "280px" }}
            >
              <img
                src={img.src}
                alt={`Gallery photo ${i + 1}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* ── Videos header ── */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="stroke-text">GUIDING</span>
            <br />
            IN MOTION
          </h3>
          <Link
            to="/gallery?tab=videos"
            className="flex items-center gap-2 border-2 border-white text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all uppercase"
          >
            All Videos <IconArrowRight />
          </Link>
        </div>

        {/* ── Video strip — horizontal scroll on mobile, 4-col grid on desktop ── */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {previewVideos.map((item, i) => (
            <div key={i} className="snap-start flex-shrink-0 w-72 lg:w-auto lg:flex-shrink">
              <VideoThumb item={item} onClick={() => setVideoIdx(i)} />
            </div>
          ))}
        </div>

      </div>

      {/* Swipeable photo lightbox */}
      <SwipeLightbox
        items={previewImages}
        index={photoIdx}
        onClose={() => setPhotoIdx(null)}
        onNav={setPhotoIdx}
        type="image"
      />

      {/* Swipeable video lightbox */}
      <SwipeLightbox
        items={previewVideos}
        index={videoIdx}
        onClose={() => setVideoIdx(null)}
        onNav={setVideoIdx}
        type="video"
      />
    </section>
  );
}
