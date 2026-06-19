import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import clip0 from "@/assets/project-clip-0.mp4.asset.json";
import clip1 from "@/assets/project-clip-1.mp4.asset.json";
import clip2 from "@/assets/project-clip-2.mp4.asset.json";
import clip3 from "@/assets/project-clip-3.mp4.asset.json";
import poster from "@/assets/hero-poster.jpg.asset.json";

const clips = [clip0.url, clip1.url, clip2.url, clip3.url];
const INTERVAL = 6500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % clips.length), INTERVAL);
    return () => clearTimeout(t);
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

  return (
    <section className="relative -mt-16 md:-mt-20 min-h-[100svh] w-full overflow-hidden bg-navy">
      {clips.map((src, i) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[i] = el; }}
          src={src}
          poster={poster.url}
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <img src={poster.url} alt="" aria-hidden className="absolute inset-0 size-full object-cover -z-10" />

      {/* Subtle bottom gradient for text legibility only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 min-h-[100svh] flex flex-col justify-end pb-16 sm:pb-20 md:pb-24">
        <div key={active} className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-gold font-medium">
            <span className="h-px w-6 bg-gold" />
            Raja V.G. · Architecture & Construction
          </div>
          <h1 className="mt-3 font-display font-light text-white tracking-[-0.02em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming Ideas Into
            <br />
            <span className="italic font-extralight gold-text">Beautiful Homes.</span>
          </h1>
          <p className="mt-4 max-w-xl text-xs sm:text-sm text-white/75 leading-relaxed">
            Professional home design, 2D & 3D planning, interior & exterior design, structural engineering & site supervision.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold-light px-5 py-2.5 rounded-full font-medium text-xs transition-all hover:-translate-y-0.5 shadow-gold"
            >
              View Projects
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white hover:bg-white hover:text-navy px-5 py-2.5 rounded-full font-medium text-xs transition-all hover:-translate-y-0.5"
            >
              <Calendar className="size-3.5" />
              Book Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-5 right-5 sm:right-8 z-20 flex gap-2">
        {clips.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Clip ${i + 1}`}
            className="relative h-[2px] w-8 sm:w-12 overflow-hidden rounded-full bg-white/30"
          >
            {i === active && (
              <span key={active} className="absolute inset-y-0 left-0 bg-gold animate-hero-progress" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

