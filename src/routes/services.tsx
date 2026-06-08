import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, PenTool, Box, Sofa, Layers, Wrench, Trees, HardHat, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Architecture & Construction Services — Raja V.G. Jaunpur" },
      { name: "description", content: "Home design, 2D planning, 3D elevation, interior & exterior design, structural design, landscaping and site supervision in Jaunpur & Pratapgarh." },
      { property: "og:title", content: "Our Services — Raja V.G. Home Design" },
      { property: "og:description", content: "Comprehensive architecture, structural engineering & construction services." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Home,
    name: "Home Design",
    desc: "Custom residential planning tailored to your plot, family and budget — every drawing is unique.",
    points: ["Site analysis", "Vastu integration", "Custom floor planning"],
  },
  {
    icon: PenTool,
    name: "2D Planning",
    desc: "Detailed architectural floor plans with dimensions, furniture layouts and circulation diagrams.",
    points: ["Floor plans", "Working drawings", "Submission drawings"],
  },
  {
    icon: Box,
    name: "3D Elevation",
    desc: "Photorealistic visualisation of your building exterior — see your home before construction starts.",
    points: ["Photorealistic renders", "Material studies", "Multiple options"],
  },
  {
    icon: Sofa,
    name: "Interior Design",
    desc: "Living room, bedroom, kitchen and office interiors — designed, sourced and executed.",
    points: ["Living & bedrooms", "Modular kitchens", "Office spaces"],
  },
  {
    icon: Layers,
    name: "Exterior Design",
    desc: "Modern facade design using contemporary materials, light, texture and proportion.",
    points: ["Facade studies", "Material selection", "Lighting design"],
  },
  {
    icon: Wrench,
    name: "Structural Design",
    desc: "Foundation, beam, column and slab design — earthquake-resistant and code-compliant.",
    points: ["Foundation design", "Beam & column design", "Earthquake resistance"],
  },
  {
    icon: Trees,
    name: "Landscaping",
    desc: "Garden and outdoor planning to extend your home into nature.",
    points: ["Garden layout", "Outdoor furniture", "Plant selection"],
  },
  {
    icon: HardHat,
    name: "Site Supervision",
    desc: "On-ground monitoring through every construction phase to ensure quality and timelines.",
    points: ["Weekly site visits", "Quality checks", "Contractor coordination"],
  },
  {
    icon: ClipboardCheck,
    name: "Consultancy Services",
    desc: "Technical guidance, second opinions and planning support for self-builders and contractors.",
    points: ["Plan review", "Material guidance", "Technical advisory"],
  },
];

function Services() {
  return (
    <>
      <section className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_30%,#D4A017,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            <span className="h-px w-6 bg-gold" /> Our Services
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold leading-[1.05] max-w-3xl">
            Everything you need to build, <span className="gold-text">under one roof.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-cream/75 text-lg">
            From the first sketch to handover — a full-stack design and construction practice for homes and commercial buildings.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="group p-7 rounded-2xl bg-white border border-border hover:border-gold hover:shadow-elegant transition-all hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-colors" />
                <div className="relative">
                  <div className="size-14 rounded-2xl bg-navy text-gold grid place-items-center group-hover:rotate-6 transition-transform">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-navy/80">
                        <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <SectionHeader
            eyebrow="Get Started"
            title="Not sure which service fits your project?"
            description="Tell us about your plot and goals — we'll recommend a package that suits your budget and timeline."
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold-light px-7 py-3.5 rounded-full font-semibold shadow-gold transition-colors"
          >
            Request a Free Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
