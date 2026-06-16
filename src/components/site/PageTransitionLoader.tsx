import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/rvg-logo.jpg.asset.json";

export function PageTransitionLoader() {
  const status = useRouterState({ select: (s) => s.status });
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (status === "pending") setVisible(true);
  }, [status]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-navy transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Faint blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D4A017 1px, transparent 1px), linear-gradient(to bottom, #D4A017 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.18),transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-7">
        {/* Logo ring */}
        <div className="relative size-32 sm:size-36">
          {/* Rotating gold ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 size-full animate-[loader-spin_3.5s_linear_infinite]"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4A017" stopOpacity="0" />
                <stop offset="50%" stopColor="#F0D78C" stopOpacity="1" />
                <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="60 240"
            />
          </svg>
          {/* Counter-rotating inner dashed ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-2 size-[calc(100%-1rem)] animate-[loader-spin-rev_6s_linear_infinite]"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#D4A017"
              strokeOpacity="0.35"
              strokeWidth="0.6"
              strokeDasharray="2 6"
            />
          </svg>
          {/* Logo */}
          <div className="absolute inset-4 rounded-full overflow-hidden ring-1 ring-gold/50 shadow-[0_0_40px_rgba(212,160,23,0.45)] animate-[loader-pulse_2.4s_ease-in-out_infinite]">
            <img src={logo.url} alt="" className="size-full object-cover" />
          </div>
        </div>

        {/* Brand caption */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
              Raja V.G.
            </span>
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <div className="text-[9px] uppercase tracking-[0.4em] text-cream/60">
            Home Design Service
          </div>
          {/* Progress bar */}
          <div className="mt-1 h-px w-40 bg-gold/15 overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent animate-[loader-sweep_1.4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
