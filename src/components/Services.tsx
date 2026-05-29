"use client";

import { StaggerContainer, StaggerItem, AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

const accents = ["#c97a5d", "#a3b18a", "#c97a5d", "#a3b18a"];

export default function Services() {
  const { T } = useLanguage();
  const s = T.services;

  return (
    <section id="services" className="py-24 md:py-32" style={{ backgroundColor: "#1e1712" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <AnimatedSection>
            <span className="text-xs tracking-[0.2em] uppercase font-medium mb-3 block" style={{ color: "#c97a5d" }}>
              {s.label}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight" style={{ color: "#f5f0e8" }}>
              {s.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="right">
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#a3b18a" }}>
              {s.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
          {s.items.map((item, i) => (
            <StaggerItem key={item.number}>
              <div
                className="group relative rounded-2xl p-7 md:p-9 border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "rgba(245,240,232,0.04)", borderColor: "rgba(245,240,232,0.08)" }}
              >
                <span className="font-playfair text-5xl font-bold opacity-25 mb-4 block leading-none" style={{ color: accents[i] }}>
                  {item.number}
                </span>
                <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 leading-snug" style={{ color: "#f5f0e8" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(194,212,178,0.75)" }}>
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(245,240,232,0.6)" }}>
                      <span className="mt-[6px] w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accents[i] }} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div
                  className="absolute bottom-0 left-7 right-7 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  style={{ backgroundColor: accents[i] }}
                  aria-hidden="true"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
