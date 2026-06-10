import { useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.mp4.asset.json";
import hero2 from "@/assets/hero-2.mp4.asset.json";
import hero3 from "@/assets/hero-3.mp4.asset.json";
import hero4 from "@/assets/hero-4.mp4.asset.json";
import fallback from "@/assets/hero-luxury.jpg";

const slides = [
  {
    src: hero1.url,
    eyebrow: "Engineering Excellence",
    title: "Built by Engineers,",
    accent: "Designed for Life.",
  },
  {
    src: hero2.url,
    eyebrow: "Architectural Precision",
    title: "From Blueprint",
    accent: "to Bespoke Reality.",
  },
  {
    src: hero3.url,
    eyebrow: "On-Site Mastery",
    title: "Luxury Villas,",
    accent: "Crafted with Care.",
  },
  {
    src: hero4.url,
    eyebrow: "Signature Residences",
    title: "Architecture for",
    accent: "a life well lived.",
  },
];

const INTERVAL = 6500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length);
    }, INTERVAL);
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [active]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const current = slides[active];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      {/* Videos */}
      {slides.map((s, i) => (
        <video
          key={s.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={s.src}
          poster={fallback}
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <img
        src={fallback}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover -z-10"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 min-h-[100svh] flex flex-col justify-end pb-28 sm:pb-36 md:pb-40">
        <div key={active} className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold font-medium">
            <span className="h-px w-8 bg-gold" />
            {current.eyebrow}
          </div>
          <h1 className="mt-5 font-display font-light text-white tracking-[-0.03em] leading-[0.98] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            {current.title}
            <br />
            <span className="italic font-extralight gold-text">{current.accent}</span>
          </h1>
        </div>
      </div>

      {/* Vertical slider navigation */}
      <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 z-20 flex flex-col gap-4">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className="group flex items-center gap-3 text-white"
            >
              <span
                className={`hidden sm:block text-[10px] uppercase tracking-[0.3em] transition-all ${
                  isActive ? "opacity-100 text-gold" : "opacity-0 group-hover:opacity-70"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`relative block overflow-hidden rounded-full transition-all duration-500 ${
                  isActive
                    ? "h-12 w-[3px] bg-white/25"
                    : "h-8 w-[2px] bg-white/30 group-hover:bg-white/60"
                }`}
              >
                {isActive && (
                  <span
                    key={active}
                    className="absolute inset-x-0 top-0 bg-gold animate-hero-progress"
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em]">
        Scroll
        <span className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
