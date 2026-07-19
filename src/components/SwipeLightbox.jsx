import { useEffect, useRef, useState } from "react";

/**
 * SwipeLightbox — modal viewer with keyboard, button, and touch-swipe navigation.
 *
 * Props:
 *   items      — array of { src, key?, title?, num? }  (images)  OR
 *                array of { src, title? }               (videos)
 *   index      — currently open index (null = closed)
 *   onClose    — () => void
 *   onNav      — (newIndex) => void
 *   type       — "image" | "video"   default "image"
 */
export default function SwipeLightbox({ items, index, onClose, onNav, type = "image" }) {
  const touchStartX = useRef(null);
  const total = items?.length ?? 0;

  const prev = () => index > 0 && onNav(index - 1);
  const next = () => index < total - 1 && onNav(index + 1);

  // Keyboard navigation
  useEffect(() => {
    if (index === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index]);

  if (index === null || !items || !items[index]) return null;
  const item = items[index];

  // Touch handlers for swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50)  prev();
    if (dx < -50) next();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Media container */}
      <div
        className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {type === "image" ? (
          <img
            src={item.src}
            alt={item.title ?? item.key ?? ""}
            className="w-full max-h-[85vh] object-contain"
          />
        ) : (
          <>
            <video
              key={item.src}
              src={item.src}
              className="w-full max-h-[70vh] object-contain bg-black"
              controls
              autoPlay
              playsInline
            />
            {item.title && (
              <div className="px-5 py-4">
                <h3 className="text-lg font-black text-white uppercase">{item.title}</h3>
              </div>
            )}
          </>
        )}

        {/* Title overlay for images */}
        {type === "image" && item.title && (
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/85 to-transparent pointer-events-none">
            {item.num && <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">{item.num}</p>}
            <h3 className="text-xl font-black text-white uppercase">{item.title}</h3>
          </div>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-lg font-bold hover:bg-black transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Prev button */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {index < total - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-xs font-bold text-white/50 uppercase tracking-widest">
        {index + 1} / {total}
      </div>
    </div>
  );
}
