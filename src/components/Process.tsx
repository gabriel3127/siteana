"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

const stepIcons = [
  <svg key="clock" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2a9 9 0 1 1 0 18A9 9 0 0 1 11 2zm0 4v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="mail" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M3 7l8 6 8-6M3 7h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="phone" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 4 4L13 12l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="doc" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-6zm-4 13l-3-3 1.5-1.5L10 12l4.5-4.5L16 9l-6 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

function ProcessStep({ step, icon, index, isLast }: { step: { number: string; title: string; description: string }; icon: React.ReactNode; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0" style={{ backgroundColor: "#c97a5d", color: "#f5f0e8" }}>
          {icon}
        </div>
        {!isLast && (
          <motion.div
            className="w-[1px] flex-1 min-h-[60px] mt-1"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "top", backgroundColor: "rgba(245,240,232,0.15)" }}
          />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? "pb-0" : "pb-12"}>
        <span className="text-xs font-medium tracking-[0.15em] uppercase mb-2 block" style={{ color: "#c97a5d" }}>
          Step {step.number}
        </span>
        <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3" style={{ color: "#f5f0e8" }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(194,212,178,0.75)" }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const { T } = useLanguage();
  const p = T.process;

  return (
    <section id="process" className="py-24 md:py-32" style={{ backgroundColor: "#5c4f45" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
          <AnimatedSection>
            <span className="text-xs tracking-[0.2em] uppercase font-medium mb-3 block" style={{ color: "#c97a5d" }}>
              {p.label}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight" style={{ color: "#f5f0e8" }}>
              {p.title1}
              <br />
              <em className="not-italic" style={{ color: "#a3b18a" }}>{p.title2}</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="right">
            <p className="text-base leading-relaxed md:pt-16" style={{ color: "rgba(194,212,178,0.8)" }}>
              {p.subtitle}
            </p>
            <a
              href="mailto:ana@email.com"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-all duration-200 hover:gap-3"
              style={{ color: "#c97a5d" }}
            >
              {p.cta}
            </a>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="max-w-xl">
          {p.steps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              icon={stepIcons[i]}
              index={i}
              isLast={i === p.steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
