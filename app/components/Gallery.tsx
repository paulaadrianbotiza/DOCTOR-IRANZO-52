"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

type Photo = { src: string; alt: string; catLabel: string };

const categories: { label: string; photos: Omit<Photo, "catLabel">[] }[] = [
  {
    label: "Interior",
    photos: [
      { src: "/INTERIOR/DSC_0253.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0254.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0257.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0263.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0268.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0275.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0278.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0280.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0283.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0292.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0293.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0295.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0302.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0310.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0311.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0312.jpg", alt: "Interior · Doctor Iranzo 52" },
      { src: "/INTERIOR/DSC_0313.jpg", alt: "Interior · Doctor Iranzo 52" },
    ],
  },
  {
    label: "Exterior",
    photos: [
      { src: "/EXTERIOR/DSC_0326.jpg",                         alt: "Exterior · Las Fuentes" },
      { src: "/EXTERIOR/Las%20Fuentes%20Aguadoras%20(1).jpg",  alt: "Plaza Aguadoras · Las Fuentes" },
      { src: "/EXTERIOR/Las%20Fuentes%20Aguadoras%20(2).jpg",  alt: "Plaza Aguadoras · Las Fuentes" },
      { src: "/EXTERIOR/Las%20Fuentes%20Aguadoras%20(3).jpg",  alt: "Las Fuentes · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(7).jpg",             alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(8).jpg",             alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(10).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(11).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(12).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(13).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(14).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(15).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(16).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Bruil%20(17).jpg",            alt: "Parque Bruil · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(1).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(2).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(3).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(4).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(5).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(6).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
      { src: "/EXTERIOR/Parque%20Torre%20Ramona%20(7).jpg",    alt: "Parque Torre Ramona · Zaragoza" },
    ],
  },
  {
    label: "Comunidad",
    photos: [
      { src: "/COMUNIDAD/DSC_0296.jpg",     alt: "Zonas comunes · Doctor Iranzo 52" },
      { src: "/COMUNIDAD/DSC_0297.jpg",     alt: "Zonas comunes · Doctor Iranzo 52" },
      { src: "/COMUNIDAD/DSC_0316-HDR.jpg", alt: "Zonas comunes · Doctor Iranzo 52" },
      { src: "/COMUNIDAD/DSC_0317.jpg",     alt: "Zonas comunes · Doctor Iranzo 52" },
      { src: "/COMUNIDAD/DSC_0322.jpg",     alt: "Zonas comunes · Doctor Iranzo 52" },
    ],
  },
];

const allPhotos: Photo[] = categories.flatMap((cat) =>
  cat.photos.map((p) => ({ ...p, catLabel: cat.label }))
);

const globalStart = categories.map((_, i) =>
  categories.slice(0, i).reduce((acc, c) => acc + c.photos.length, 0)
);

const FADE_MS = 420;

// ── Crossfade carousel ────────────────────────────────────────────────────────

function Carousel({
  cat,
  catIdx,
  onOpen,
}: {
  cat: (typeof categories)[number];
  catIdx: number;
  onOpen: (globalIdx: number) => void;
}) {
  const [curIdx, setCurIdx] = useState(0);
  const [nxtIdx, setNxtIdx] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The "visible" index for UI purposes (counter, dots, lightbox)
  const displayIdx = nxtIdx !== null ? nxtIdx : curIdx;

  const goTo = useCallback(
    (newIdx: number) => {
      if (nxtIdx !== null || newIdx === curIdx) return;
      setNxtIdx(newIdx);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCurIdx(newIdx);
        setNxtIdx(null);
      }, FADE_MS);
    },
    [curIdx, nxtIdx]
  );

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goTo((curIdx - 1 + cat.photos.length) % cat.photos.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    goTo((curIdx + 1) % cat.photos.length);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-zinc-200">
        <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest">
          {cat.label}
        </h3>
        <span className="text-xs text-zinc-400 tabular-nums">
          {displayIdx + 1} / {cat.photos.length}
        </span>
      </div>

      {/* Frame */}
      <div
        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 cursor-zoom-in select-none"
        onClick={() => onOpen(globalStart[catIdx] + displayIdx)}
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const d = touchX - e.changedTouches[0].clientX;
          if (Math.abs(d) > 40)
            goTo(
              d > 0
                ? (curIdx + 1) % cat.photos.length
                : (curIdx - 1 + cat.photos.length) % cat.photos.length
            );
          setTouchX(null);
        }}
      >
        {/* Layer 1 – current image fading out */}
        <div
          className="absolute inset-0"
          style={{
            opacity: nxtIdx !== null ? 0 : 1,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        >
          <Image
            src={cat.photos[curIdx].src}
            alt={cat.photos[curIdx].alt}
            fill
            className="object-cover"
            priority={curIdx === 0 && catIdx === 0}
            quality={80}
            sizes="(max-width: 768px) 90vw, 30vw"
          />
        </div>

        {/* Layer 2 – next image fading in */}
        {nxtIdx !== null && (
          <div
            className="absolute inset-0"
            style={{ animation: `fade-in ${FADE_MS}ms ease-in-out both` }}
          >
            <Image
              src={cat.photos[nxtIdx].src}
              alt={cat.photos[nxtIdx].alt}
              fill
              className="object-cover"
              quality={80}
              sizes="(max-width: 768px) 90vw, 30vw"
            />
          </div>
        )}

        {/* Controls – always above image layers */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Expand hint */}
        <div className="absolute top-2 right-2 z-10 w-7 h-7 rounded-md bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/60 pointer-events-none">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>

        {/* Dot indicators */}
        {cat.photos.length <= 12 && (
          <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center gap-1 pointer-events-none">
            {cat.photos.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  i === displayIdx
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Gallery section + Lightbox ────────────────────────────────────────────────

export function Gallery() {
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);

  const close = useCallback(() => setLbIdx(null), []);
  const goNext = useCallback(
    () => setLbIdx((i) => (i === null ? null : (i + 1) % allPhotos.length)),
    []
  );
  const goPrev = useCallback(
    () => setLbIdx((i) => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length)),
    []
  );

  useEffect(() => {
    if (lbIdx === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lbIdx, goNext, goPrev, close]);

  useEffect(() => {
    document.body.style.overflow = lbIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lbIdx]);

  const current = lbIdx !== null ? allPhotos[lbIdx] : null;

  return (
    <>
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-[10px] font-semibold text-[#EF3340] tracking-[0.3em] uppercase mb-4">
              Galería
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              El piso y el entorno
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {categories.map((cat, catIdx) => (
              <AnimatedSection key={cat.label} delay={catIdx * 80}>
                <Carousel cat={cat} catIdx={catIdx} onOpen={setLbIdx} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lbIdx !== null && current && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const d = touchX - e.changedTouches[0].clientX;
            if (Math.abs(d) > 50) d > 0 ? goNext() : goPrev();
            setTouchX(null);
          }}
        >
          <div className="absolute top-4 left-4 z-10 flex items-center gap-3 pointer-events-none">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">
              {current.catLabel}
            </span>
            <span className="text-white/25 text-xs tabular-nums">
              {lbIdx + 1} / {allPhotos.length}
            </span>
          </div>

          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Anterior"
            className="absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image with fade-in on each change */}
          <div
            className="w-full h-full flex items-center justify-center px-20 sm:px-24 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lbIdx}
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-full object-contain rounded-xl select-none"
              style={{ animation: "fade-in 250ms ease-out both" }}
              draggable={false}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Siguiente"
            className="absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
