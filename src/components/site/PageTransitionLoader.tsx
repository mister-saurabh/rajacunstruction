import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function PageTransitionLoader() {
  const status = useRouterState({ select: (s) => s.status });
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);

  // Show on route change for a short, premium duration
  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 850);
    return () => clearTimeout(t);
  }, [pathname]);

  // Also reflect pending router status
  useEffect(() => {
    if (status === "pending") setVisible(true);
  }, [status]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-navy transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Faint blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D4A017 1px, transparent 1px), linear-gradient(to bottom, #D4A017 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative flex flex-col items-center gap-6">
        <svg
          width="140"
          height="120"
          viewBox="0 0 140 120"
          fill="none"
          stroke="#D4A017"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_12px_rgba(212,160,23,0.35)]"
        >
          {/* Ground line */}
          <line x1="10" y1="105" x2="130" y2="105" className="loader-line" style={{ animationDelay: "0ms" }} />
          {/* Left wall */}
          <line x1="25" y1="105" x2="25" y2="55" className="loader-line" style={{ animationDelay: "120ms" }} />
          {/* Right wall */}
          <line x1="115" y1="105" x2="115" y2="55" className="loader-line" style={{ animationDelay: "240ms" }} />
          {/* Roof left */}
          <line x1="25" y1="55" x2="70" y2="20" className="loader-line" style={{ animationDelay: "360ms" }} />
          {/* Roof right */}
          <line x1="70" y1="20" x2="115" y2="55" className="loader-line" style={{ animationDelay: "480ms" }} />
          {/* Door */}
          <rect x="60" y="75" width="20" height="30" className="loader-line" style={{ animationDelay: "600ms" }} />
          {/* Window left */}
          <rect x="35" y="68" width="16" height="16" className="loader-line" style={{ animationDelay: "700ms" }} />
          {/* Window right */}
          <rect x="89" y="68" width="16" height="16" className="loader-line" style={{ animationDelay: "780ms" }} />
        </svg>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Raja V.G.</span>
          <div className="h-px w-24 bg-gold/30 overflow-hidden">
            <div className="h-full w-1/3 bg-gold animate-[loader-sweep_1.1s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
