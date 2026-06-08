import { Link } from "@tanstack/react-router";
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/90 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-xl bg-gold/15 border border-gold/30 grid place-items-center">
              <Building2 className="size-5 text-gold" />
            </div>
            <div>
              <div className="font-display font-semibold text-cream">Raja V.G.</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold">VG Construction</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-cream/70 leading-relaxed">
            From Dream to Design, From Design to Reality. Your trusted partner in modern home design & construction.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="size-9 rounded-full border border-cream/15 grid place-items-center hover:bg-gold hover:text-navy hover:border-gold transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/70 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li>Home Design</li>
            <li>2D Planning</li>
            <li>3D Elevation</li>
            <li>Interior Design</li>
            <li>Structural Design</li>
            <li>Site Supervision</li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 text-gold mt-0.5 shrink-0" />
              <div>
                <a href="tel:8736936268" className="block hover:text-gold">+91 87369 36268</a>
                <a href="tel:8881678176" className="block hover:text-gold">+91 88816 78176</a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 text-gold mt-0.5 shrink-0" />
              <a href="mailto:raja123iit@gmail.com" className="hover:text-gold break-all">raja123iit@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 text-gold mt-0.5 shrink-0" />
              <span>Usara Bazar, Badlapur, Jaunpur, UP</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-cream/60 flex flex-col sm:flex-row gap-2 justify-between items-center">
          <p>© {new Date().getFullYear()} Raja V.G. Home Design Services & VG Construction. All rights reserved.</p>
          <p>Designed by Er. Rajaram Gupta — M.Tech Structure</p>
        </div>
      </div>
    </footer>
  );
}
