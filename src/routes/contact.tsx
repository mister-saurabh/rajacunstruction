import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Raja V.G. Home Design — Architect in Jaunpur & Pratapgarh" },
      { name: "description", content: "Get in touch for free consultation. Call +91 87369 36268, email raja123iit@gmail.com, or visit our offices in Jaunpur & Pratapgarh." },
      { property: "og:title", content: "Contact Us — Raja V.G." },
      { property: "og:description", content: "Free consultation for your dream home." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(120),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});

    const d = result.data;
    const text =
      `*New Consultation Request — Raja V.G.*\n\n` +
      `*Name:* ${d.name}\n` +
      `*Phone:* ${d.phone}\n` +
      `*Email:* ${d.email}\n` +
      `*Project Type:* ${d.projectType}\n\n` +
      `*Message:*\n${d.message}`;
    const waUrl = `https://wa.me/918736936268?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    form.reset();
  };

  const inputCls = "w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 text-navy placeholder:text-muted-foreground/60 transition-colors";

  return (
    <>
      <section className="relative bg-navy text-cream py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_30%,#D4A017,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            <span className="h-px w-6 bg-gold" /> Get In Touch
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold leading-[1.05]">
            Let's design your <span className="gold-text">dream home.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-cream/75 text-lg">Free consultation. No obligations.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-10">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: Phone, t: "Call Us",
                items: [
                  { l: "+91 87369 36268", h: "tel:8736936268" },
                  { l: "+91 88816 78176", h: "tel:8881678176" },
                ],
              },
              {
                icon: Mail, t: "Email",
                items: [{ l: "raja123iit@gmail.com", h: "mailto:raja123iit@gmail.com" }],
              },
            ].map((c) => (
              <div key={c.t} className="p-6 rounded-2xl bg-white border border-border">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-navy text-gold grid place-items-center">
                    <c.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-navy">{c.t}</h3>
                </div>
                <div className="mt-4 space-y-1.5">
                  {c.items.map((i) => (
                    <a key={i.l} href={i.h} className="block text-navy/80 hover:text-gold transition-colors">
                      {i.l}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-white border border-border">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-navy text-gold grid place-items-center">
                  <MapPin className="size-5" />
                </div>
                <h3 className="font-semibold text-navy">Offices</h3>
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold font-semibold">Main Office</div>
                  <p className="mt-1 text-navy/80">Usara Bazar, Badlapur,<br />Jaunpur, Uttar Pradesh</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold font-semibold">Branch Office</div>
                  <p className="mt-1 text-navy/80">Takha, Pratapgarh,<br />Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="p-7 md:p-10 rounded-3xl bg-cream border border-border">
              <SectionHeader align="left" eyebrow="Free Consultation" title="Send us a message" />

              {submitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy">Thank you! Your request was sent to our team on WhatsApp.</p>
                    <p className="text-sm text-navy/70 mt-1">If WhatsApp didn't open automatically, please call +91 87369 36268. We'll respond within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input name="name" placeholder="Your Name" className={inputCls} />
                      {errors.name && <p className="text-xs text-cta mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input name="phone" placeholder="Phone Number" className={inputCls} />
                      {errors.phone && <p className="text-xs text-cta mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <input name="email" type="email" placeholder="Email Address" className={inputCls} />
                    {errors.email && <p className="text-xs text-cta mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <select name="projectType" className={inputCls} defaultValue="">
                      <option value="" disabled>Project Type</option>
                      <option>Home Design</option>
                      <option>2D Planning</option>
                      <option>3D Elevation</option>
                      <option>Interior Design</option>
                      <option>Structural Design</option>
                      <option>Site Supervision</option>
                      <option>Other</option>
                    </select>
                    {errors.projectType && <p className="text-xs text-cta mt-1">{errors.projectType}</p>}
                  </div>
                  <div>
                    <textarea name="message" rows={5} placeholder="Tell us about your project, plot size, location & timeline..." className={inputCls} />
                    {errors.message && <p className="text-xs text-cta mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-navy text-cream hover:bg-navy-light px-7 py-3.5 rounded-full font-semibold shadow-elegant transition-colors"
                  >
                    Send Message <Send className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <a
            href="https://www.google.com/maps/place/Usra+bazar/@25.8786279,82.4427919,13.83z/data=!4m14!1m7!3m6!1s0x39906d0017bdf05b:0xe2afc656edd11dc9!2sUsra+bazar!8m2!3d25.8829665!4d82.4516203!16s%2Fg%2F11xvx7g4t3!3m5!1s0x39906d0017bdf05b:0xe2afc656edd11dc9!8m2!3d25.8829665!4d82.4516203!16s%2Fg%2F11xvx7g4t3?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl overflow-hidden border border-border shadow-elegant aspect-[16/8] relative group"
          >
            <iframe
              title="Office location — Usra Bazar, Badlapur, Jaunpur"
              src="https://www.google.com/maps?q=25.8829665,82.4516203&output=embed"
              loading="lazy"
              className="size-full border-0 pointer-events-none"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
            <div className="absolute bottom-4 right-4 bg-navy text-cream text-xs font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              <MapPin className="size-3.5" /> Open in Google Maps
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
