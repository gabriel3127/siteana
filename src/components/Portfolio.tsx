"use client";

import { StaggerContainer, StaggerItem, AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

const cardColors = [
  { bg: "#5c4f45", accent: "#c97a5d" },
  { bg: "#a3b18a", accent: "#1e1712" },
  { bg: "#c97a5d", accent: "#f5f0e8" },
  { bg: "#1e1712", accent: "#a3b18a" },
];

export default function Portfolio() {
  const { T } = useLanguage();
  const p = T.portfolio;

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
            return (
              <StaggerItem key={item.id}>
                <article
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{ backgroundColor: bg }}
                >
                  {/* Visual area */}
                  <div className="relative h-44 md:h-52 flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)`,
                      }}
                      aria-hidden="true"
                    />
                    <span className="font-playfair text-7xl font-bold opacity-20 select-none" style={{ color: accent }} aria-hidden="true">
                      {item.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-xs font-medium tracking-wide" style={{ color: `${accent}99` }}>
                        {item.type}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: accent }} aria-hidden="true">
                        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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
