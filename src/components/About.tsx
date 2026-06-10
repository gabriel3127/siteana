"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { T } = useLanguage();
  const a = T.about;

  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection delay={0.1}>
          <span className="text-xs tracking-[0.2em] uppercase font-medium mb-4 block" style={{ color: "#c97a5d" }}>
            {a.label}
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — Pull quote + stats */}
          <AnimatedSection delay={0.2} direction="left">
            <blockquote className="font-playfair text-3xl md:text-4xl leading-[1.3] font-medium" style={{ color: "#1e1712" }}>
              &ldquo;{a.quote.split(a.quoteAccent1)[0]}
              <span style={{ color: "#c97a5d" }}>{a.quoteAccent1}</span>
              {a.quote.split(a.quoteAccent1)[1]?.split(a.quoteAccent2)[0]}
              <span style={{ color: "#a3b18a" }}>{a.quoteAccent2}</span>
              {a.quote.split(a.quoteAccent2)[1]?.split(a.quoteAccent3)[0]}
              <span style={{ color: "#5c4f45" }}>{a.quoteAccent3}</span>
              {a.quote.split(a.quoteAccent3)[1]}&rdquo;
            </blockquote>

            <StaggerContainer className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t" staggerDelay={0.12}>
              {[
                { value: a.stat1_value, label: a.stat1_label },
                { value: a.stat2_value, label: a.stat2_label },
                { value: a.stat3_value, label: a.stat3_label },
              ].map((s) => (
                <StaggerItem key={s.label}>
                  <p className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: "#c97a5d" }}>{s.value}</p>
                  <p className="text-xs mt-1 leading-snug" style={{ color: "#5c4f45" }}>{s.label}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* Right — Bio + tags */}
          <AnimatedSection delay={0.35} direction="right">
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#3a302a" }}>
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Figma", "Miro", "Jira", "Trello", "Confluence", "Notion", "Canva", "Blender", "UX Research", "Agile"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{ borderColor: "rgba(92,79,69,0.25)", color: "#5c4f45" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Work photo */}
        <AnimatedSection delay={0.5}>
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mt-16">
            <Image
              src="/ana_work1.jpg"
              alt="Ana working"
              fill
              className="object-cover object-center"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
