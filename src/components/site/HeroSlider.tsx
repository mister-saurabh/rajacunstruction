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
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 min-h-[100svh] flex flex-col justify-end pb-20 sm:pb-28 md:pb-32">
        <div key={active} className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold font-medium">
            <span className="h-px w-8 bg-gold" />
            Raja V.G. · Architecture & Construction
          </div>
          <h1 className="mt-5 font-display font-light text-white tracking-[-0.03em] leading-[0.98] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Transforming Ideas Into
            <br />
            <span className="italic font-extralight gold-text">Beautiful Homes.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base text-white/75 leading-relaxed">
            Professional Home Design, 2D & 3D Planning, Interior & Exterior Design, Structure Design &
            Site Consultation. Civil & architectural solutions designed around your vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 bg-gold text-navy hover:bg-gold-light px-7 py-4 rounded-full font-medium text-sm transition-all hover:-translate-y-0.5 shadow-gold"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white hover:bg-white hover:text-navy px-7 py-4 rounded-full font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Calendar className="size-4" />
              Book Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-6 right-6 sm:right-10 z-20 flex gap-2">
        {clips.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Clip ${i + 1}`}
            className="relative h-[3px] w-10 sm:w-14 overflow-hidden rounded-full bg-white/25"
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
