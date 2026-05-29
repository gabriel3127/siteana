"use client";

import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function Experience() {
  const { T } = useLanguage();
  const e = T.experience;

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#a3b18a" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="font-playfair text-[20vw] font-bold leading-none opacity-[0.07] whitespace-nowrap" style={{ color: "#1e1712" }}>
          {e.label.toUpperCase()}
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left */}
          <AnimatedSection direction="left">
            <span className="text-xs tracking-[0.2em] uppercase font-medium mb-4 block" style={{ color: "#5c4f45" }}>
              {e.label}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6" style={{ color: "#1e1712" }}>
              {e.title1}
              <br />
              <em className="not-italic" style={{ color: "#5c4f45" }}>{e.title2}</em>
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#3a302a" }}>{e.p1}</p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#3a302a" }}>{e.p2}</p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
              style={{ backgroundColor: "#1e1712", color: "#f5f0e8" }}
              aria-label={e.cta_aria}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v9m0 0L5 7m3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {e.cta}
            </a>
          </AnimatedSection>

          {/* Right — timeline cards */}
          <AnimatedSection delay={0.25} direction="right">
            <div className="space-y-5">
              {e.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "rgba(245,240,232,0.35)", borderColor: "rgba(92,79,69,0.15)" }}
                >
                  <span className="text-xs font-medium tracking-wide" style={{ color: "#5c4f45" }}>{item.period}</span>
                  <p className="font-playfair text-lg font-semibold mt-1 mb-0.5" style={{ color: "#1e1712" }}>{item.role}</p>
                  <p className="text-sm font-medium" style={{ color: "#3a302a" }}>{item.org}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(58,48,42,0.65)" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
