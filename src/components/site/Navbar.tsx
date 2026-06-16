import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rvg-logo.jpg.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-11 rounded-xl overflow-hidden ring-1 ring-gold/40 shadow-elegant bg-navy group-hover:ring-gold transition-all">
            <img src={logo.url} alt="Raja V.G. Home Design Service logo" className="size-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-navy text-[15px] tracking-wide">RAJA V.G.</div>
            <div className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Home Design Service</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-navy/80 hover:text-navy rounded-md transition-colors relative"
              activeProps={{ className: "!text-navy" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-5 bg-gold rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center bg-navy text-cream hover:bg-navy-light px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-elegant"
        >
          Free Consultation
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden size-10 grid place-items-center rounded-md text-navy"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-navy font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-navy text-cream px-5 py-3 rounded-full text-sm font-medium"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
