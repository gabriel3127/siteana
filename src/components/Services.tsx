"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem, AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

const accents = ["#c97a5d", "#a3b18a", "#c97a5d", "#a3b18a"];

export default function Services() {
  const { T } = useLanguage();
  const s = T.services;
  const mainItems = s.items.slice(0, 4);
  const featuredItem = s.items[4];

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

        {/* Main 4 cards — 2x2 grid */}
        <div style={{ backgroundColor: "rgba(245,240,232,0.06)", borderRadius: "1.25rem", overflow: "hidden" }}>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px" staggerDelay={0.1}>
          {mainItems.map((item, i) => (
            <StaggerItem key={item.number}>
              <div
                className="group relative p-8 md:p-10 h-full cursor-default transition-colors duration-300"
                style={{ backgroundColor: "#1e1712" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(245,240,232,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1e1712")}
              >
                {/* Accent bar top */}
                <div
                  className="w-8 h-[3px] rounded-full mb-6 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: accents[i] }}
                />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold leading-snug" style={{ color: "#f5f0e8" }}>
                    {item.title}
                  </h3>
                  <span
                    className="font-playfair text-3xl font-bold leading-none opacity-20 flex-shrink-0 mt-1"
                    style={{ color: accents[i] }}
                  >
                    {item.number}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(194,212,178,0.7)" }}>
                  {item.description}
                </p>

                <ul className="space-y-2.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(245,240,232,0.5)" }}>
                      <span
                        className="w-4 h-[1px] flex-shrink-0"
                        style={{ backgroundColor: accents[i] }}
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>

        {/* Featured card — Executive Assistant with photo background */}
        <AnimatedSection delay={0.15} direction="up">
          <div className="relative mt-4 rounded-[1.25rem] overflow-hidden min-h-[340px] md:min-h-[380px] cursor-default group">

            {/* Photo background */}
            <Image
              src="/ana_work2.jpg"
              alt="Ana working"
              fill
              className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Gradient overlay — stronger on left for text readability */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to left, rgba(30,23,18,0.97) 35%, rgba(30,23,18,0.75) 55%, rgba(30,23,18,0.3) 75%, rgba(30,23,18,0.05) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 md:max-w-[55%] md:ml-auto">
              {/* Accent bar */}
              <div
                className="w-8 h-[3px] rounded-full mb-6 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: "#c97a5d" }}
              />

              <div className="flex items-start gap-4 mb-4">
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold leading-snug" style={{ color: "#f5f0e8" }}>
                  {featuredItem.title}
                </h3>
                <span
                  className="font-playfair text-3xl font-bold leading-none opacity-20 flex-shrink-0 mt-1"
                  style={{ color: "#c97a5d" }}
                >
                  {featuredItem.number}
                </span>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(194,212,178,0.8)" }}>
                {featuredItem.description}
              </p>

              <ul className="space-y-2.5">
                {featuredItem.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(245,240,232,0.6)" }}>
                    <span
                      className="w-4 h-[1px] flex-shrink-0"
                      style={{ backgroundColor: "#c97a5d" }}
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
