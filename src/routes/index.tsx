import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, Pencil, Layers, Building, HardHat, Trophy, Quote, Star } from "lucide-react";
import heroVilla from "@/assets/hero-luxury.jpg";
import heroVideo from "@/assets/hero-cinematic.mp4.asset.json";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raja V.G. Home Design & VG Construction — Architect in Jaunpur" },
      { name: "description", content: "Design your dream home with expert engineers & architects. 2D Planning, 3D Elevation, Structural Design, Interior Design & Construction Consultancy in Jaunpur & Pratapgarh." },
      { property: "og:title", content: "Raja V.G. Home Design & VG Construction" },
      { property: "og:description", content: "From Dream to Design, From Design to Reality." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trustItems = [
  "Civil Engineer & Architect",
  "M.Tech Structure Expert",
  "Vastu-Based Planning",
  "Modern Design Concepts",
  "Site Supervision",
  "Affordable Design Packages",
];

const services = [
  { icon: Compass, name: "Home Design", desc: "Custom residential planning tailored to your land & lifestyle." },
  { icon: Pencil, name: "2D Planning", desc: "Detailed architectural floor plans, scaled and Vastu-aligned." },
  { icon: Layers, name: "3D Elevation", desc: "Photorealistic visualisation of your dream facade." },
  { icon: Building, name: "Interior Design", desc: "Living, bedrooms, kitchen, office — turnkey interiors." },
  { icon: Building, name: "Exterior Design", desc: "Modern facade design with premium materials." },
  { icon: Layers, name: "Structural Design", desc: "Foundations, beams, columns — earthquake-resistant." },
  { icon: Compass, name: "Landscaping", desc: "Garden & outdoor planning to extend your home." },
  { icon: HardHat, name: "Site Supervision", desc: "On-ground monitoring for build quality & timelines." },
];

const steps = [
  { n: "01", t: "Consultation", d: "Free discussion of your vision, plot and budget." },
  { n: "02", t: "Requirement Analysis", d: "Detailed brief, Vastu & site study." },
  { n: "03", t: "2D Planning", d: "Architectural floor plans for review." },
  { n: "04", t: "3D Visualization", d: "Photorealistic elevation & interiors." },
  { n: "05", t: "Construction Guidance", d: "Structural drawings & on-site supervision." },
  { n: "06", t: "Project Completion", d: "Handover of a safe, beautiful, future-ready home." },
];

const testimonials = [
  { name: "Anil Kumar", loc: "Jaunpur", text: "Er. Rajaram designed our duplex beautifully — every corner is functional and Vastu compliant. Highly professional team." },
  { name: "Sunita Devi", loc: "Pratapgarh", text: "From 2D plans to interior selection, the experience was seamless. Our villa turned out exactly like the 3D render." },
  { name: "Rakesh Singh", loc: "Jaunpur", text: "Outstanding structural design and supervision. We finished on time and within budget. Strongly recommend VG Construction." },
];

function Home() {
  return (
    <>
      {/* HERO — cinematic full-screen */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy">
        <img
          src={heroVilla}
          alt="Luxury modern residence at blue hour"
          className="absolute inset-0 size-full object-cover scale-105"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold/90 font-medium">
            <span className="h-px w-8 bg-gold/60" />
            Raja V.G. · Est. Jaunpur
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="mt-7 sm:mt-9 font-display font-light text-white text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
            Architecture for a <br className="hidden sm:block" />
            <span className="italic font-extralight gold-text">life well lived.</span>
          </h1>
          <p className="mx-auto mt-7 sm:mt-8 max-w-xl text-white/75 text-base sm:text-lg leading-relaxed font-light">
            Bespoke residential design and construction, crafted by qualified engineers.
          </p>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy hover:bg-gold-light px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all hover:-translate-y-0.5 shadow-gold"
            >
              Book Consultation
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* TRUST */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Why choose us"
            title="Engineering expertise you can build on"
            description="Modern design, structural soundness, and on-ground supervision — every project handled personally by a qualified engineer."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {trustItems.map((t) => (
              <div
                key={t}
                className="group flex items-center gap-3 p-5 rounded-2xl bg-white border border-border hover:border-gold hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="size-10 rounded-xl bg-gold/10 grid place-items-center group-hover:bg-gold/20 transition-colors">
                  <CheckCircle2 className="size-5 text-gold" />
                </div>
                <span className="font-medium text-navy text-sm md:text-base">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="Comprehensive design & construction services"
            description="End-to-end solutions from concept sketches to keys in your hand."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.name}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-gold hover:shadow-elegant transition-all hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-gold/5 group-hover:bg-gold/15 transition-colors" />
                <div className="relative">
                  <div className="size-12 rounded-xl bg-navy text-gold grid place-items-center group-hover:rotate-6 transition-transform">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,#D4A017,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              <span className="h-px w-6 bg-gold" /> Working Process
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold leading-[1.1]">
              A clear path from vision to keys
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="glass-dark p-7 rounded-2xl hover:border-gold/50 transition-colors"
              >
                <div className="text-5xl font-display font-bold text-gold/40 leading-none">{s.n}</div>
                <h3 className="mt-3 text-xl font-semibold text-cream">{s.t}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              align="left"
              eyebrow="Featured Work"
              title="Recently completed projects"
              description="A glimpse of our residential, luxury, and commercial work across Jaunpur and Pratapgarh."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-navy text-cream hover:bg-navy-light px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-2xl overflow-hidden bg-white border border-border hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">{p.category}</div>
                  <h3 className="mt-1.5 text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.location}</span>
                    <span>{p.area}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Client Stories"
            title="Loved by homeowners across UP"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl bg-white border border-border hover:border-gold transition-colors relative"
              >
                <Quote className="size-8 text-gold/40 absolute top-5 right-5" />
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold" />
                  ))}
                </div>
                <p className="mt-4 text-navy/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="size-11 rounded-full bg-navy text-gold grid place-items-center font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 md:p-16 text-cream">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#D4A017,transparent_55%)]" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  <Trophy className="size-3.5" /> Let's Build Together
                </div>
                <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold leading-[1.1]">
                  Ready to build your <span className="gold-text">dream home?</span>
                </h2>
                <p className="mt-4 text-cream/75">
                  Book a free 30-minute consultation with Er. Rajaram Gupta. No obligations — just clarity.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold-light px-8 py-4 rounded-full font-semibold shadow-gold transition-all hover:-translate-y-0.5"
                >
                  Get Free Consultation <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
