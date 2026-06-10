"use client";

import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

const linkIcons = [
  <svg key="email" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 5.5l7 5 7-5M3 5.5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="linkedin" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8.5V14M6 6v.01M10 14v-3c0-1 .5-2 2-2s2 1 2 2v3M10 8.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="upwork" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10c0 2 1.5 3.5 3.5 3.5S14 12 14 10s-1.5-3.5-3.5-3.5M7 10c.5 1 1.5 1.5 2.5 1l4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

const linkHrefs = [
  "mailto:ana.malmeida08@gmail.com",
  "https://www.linkedin.com/in/ana-luisa-mota-almeida/",
  "https://www.upwork.com/freelancers/~01165990f48d6f832b",
];

export default function Contact() {
  const { T } = useLanguage();
  const c = T.contact;

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: "#c97a5d" }}>
      <div className="absolute -top-1/2 -right-1/4 w-[70vw] h-[70vw] rounded-full pointer-events-none opacity-15" style={{ backgroundColor: "#a85e43" }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 text-center">
        <AnimatedSection>
          <span className="text-xs tracking-[0.2em] uppercase font-medium mb-4 block" style={{ color: "rgba(245,240,232,0.7)" }}>
            {c.label}
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 max-w-3xl mx-auto" style={{ color: "#f5f0e8" }}>
            {c.title1}
            <br />
            <em className="italic">{c.title2}</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto mb-12" style={{ color: "rgba(245,240,232,0.8)" }}>
            {c.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <a
            href="mailto:ana.malmeida08@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] mb-16"
            style={{ backgroundColor: "#1e1712", color: "#f5f0e8" }}
          >
            {c.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {c.links.map((l, i) => (
              <a
                key={l.label}
                href={linkHrefs[i]}
                target={linkHrefs[i].startsWith("http") ? "_blank" : undefined}
                rel={linkHrefs[i].startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 group transition-all duration-200"
                style={{ color: "rgba(245,240,232,0.9)" }}
                aria-label={`${l.label}: ${l.value}`}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 group-hover:bg-white/10"
                  style={{ border: "1px solid rgba(245,240,232,0.3)" }}
                >
                  {linkIcons[i]}
                </span>
                <div className="text-left">
                  <p className="text-xs opacity-60 leading-none mb-0.5">{l.label}</p>
                  <p className="text-sm font-medium group-hover:underline">{l.value}</p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.65}>
          <div className="mt-20 pt-8 border-t text-xs" style={{ borderColor: "rgba(245,240,232,0.2)", color: "rgba(245,240,232,0.45)" }}>
            <p>{c.footer}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
