"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem, AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

const cardColors = [
  { bg: "#5c4f45", accent: "#c97a5d" },
  { bg: "#a3b18a", accent: "#1e1712" },
  { bg: "#c97a5d", accent: "#f5f0e8" },
  { bg: "#1e1712", accent: "#a3b18a" },
];

const cardImages = [
  "/Ebook mockup.png",
  "/Trxk+_logo.png",
  "",
  "",
];

export default function Portfolio() {
  const { T, lang } = useLanguage();
  const p = T.portfolio;
  const comingSoon = lang === "pt" ? "Em breve" : "Coming soon";

  return (
    <section id="portfolio" className="py-24 md:py-32" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <AnimatedSection>
            <span className="text-xs tracking-[0.2em] uppercase font-medium mb-3 block" style={{ color: "#c97a5d" }}>
              {p.label}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight" style={{ color: "#1e1712" }}>
              {p.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="right">
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#5c4f45" }}>{p.subtitle}</p>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
          {p.items.map((item, i) => {
            const { bg, accent } = cardColors[i];
            const img = cardImages[i];
            const isEbook = img === "/Ebook mockup.png";
            const isLogo = img && !isEbook;
            const isComingSoon = !img;

            return (
              <StaggerItem key={item.id}>
                <article
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col h-[520px]"
                  style={{
                    backgroundColor: bg,
                    cursor: item.link ? "pointer" : "default",
                  }}
                  onClick={() => item.link && window.open(item.link, "_blank", "noopener noreferrer")}
                >
                  {/* ── EBOOK: full-card background image, content at bottom ── */}
                  {isEbook && (
                    <>
                      {/* image fills entire card — clipped only by card's overflow-hidden */}
                      <div className="absolute inset-0">
                        <Image
                          src={img}
                          alt={item.title}
                          fill
                          className="object-cover object-top"
                          style={{ transform: "scale(1.06)", transformOrigin: "center top" }}
                        />
                      </div>
                      {/* gradient covering bottom 55% solid, so text area is always opaque */}
                      <div
                        className="absolute inset-0 z-10"
                        style={{
                          background: `linear-gradient(to top, ${bg} 45%, ${bg}e0 60%, ${bg}80 72%, transparent 88%)`,
                        }}
                        aria-hidden="true"
                      />
                    </>
                  )}

                  {/* ── LOGO: centered in flex-1 area ── */}
                  {isLogo && (
                    <div className="flex-1 relative flex items-center justify-center p-6">
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.08) 20px, rgba(255,255,255,0.08) 21px)` }}
                        aria-hidden="true"
                      />
                      <div className="relative w-full transition-transform duration-500 group-hover:scale-105" style={{ height: "220px" }}>
                        <Image src={img} alt={item.title} fill className="object-contain" />
                      </div>
                    </div>
                  )}

                  {/* ── COMING SOON ── */}
                  {isComingSoon && (
                    <div className="flex-1 flex flex-col items-center justify-center gap-3">
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.08) 20px, rgba(255,255,255,0.08) 21px)` }}
                        aria-hidden="true"
                      />
                      <span className="font-playfair text-7xl font-bold opacity-10 select-none" style={{ color: accent }}>
                        {item.id}
                      </span>
                      <span
                        className="text-xs tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full border opacity-40"
                        style={{ color: accent, borderColor: `${accent}40` }}
                      >
                        {comingSoon}
                      </span>
                    </div>
                  )}

                  {/* ── CONTENT ── */}
                  <div className={`relative z-20 p-6 md:p-7 ${isEbook ? "mt-auto" : ""}`}>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-xs font-medium tracking-wide" style={{ color: `${accent}99` }}>
                        {item.type}
                      </span>
                      {item.link && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: accent }} aria-hidden="true">
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2 leading-snug" style={{ color: accent }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: `${accent}99` }}>
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${accent}15`, color: accent, border: `1px solid ${accent}20` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
