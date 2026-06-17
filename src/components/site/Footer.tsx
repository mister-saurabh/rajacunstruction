import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/rvg-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/90 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl overflow-hidden ring-1 ring-gold/40">
              <img src={logo.url} alt="Raja V.G. logo" className="size-full object-cover" />
            </div>
            <div>
              <div className="font-display font-semibold text-cream tracking-wide">RAJA V.G.</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Home Design Service</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-cream/70 leading-relaxed">
            From Dream to Design, From Design to Reality. Your trusted partner in modern home design & construction.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/er.rajaramgupta/reels/", label: "Instagram" },
              { Icon: Youtube, href: "https://www.youtube.com/@rajav.g748", label: "YouTube" },
              { Icon: MessageCircle, href: "https://wa.me/918736936268", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
