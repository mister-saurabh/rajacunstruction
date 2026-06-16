import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Compass,
  Layers,
  Building,
  HardHat,
  Ruler,
  Home,
  PenTool,
  ShieldCheck,
  Quote,
  Star,
  Trophy,
  GraduationCap,
  Award,
} from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeader } from "@/components/site/SectionHeader";
import founderImg from "@/assets/founder.jpg.asset.json";
import teamImg from "@/assets/team-photo.jpg.asset.json";
import siteVisitImg from "@/assets/site-visit.jpg.asset.json";
import frame8 from "@/assets/project-frame-8.jpg.asset.json";
import frame20 from "@/assets/project-frame-20.jpg.asset.json";
import frame32 from "@/assets/project-frame-32.jpg.asset.json";
import frame42 from "@/assets/project-frame-42.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raja V.G. Home Design & VG Construction — Architect in Jaunpur" },
      {
        name: "description",
        content:
          "Premium home design, 2D & 3D planning, interior & exterior design, and structural engineering by Er. Rajaram Gupta. Serving Jaunpur, Pratapgarh & Sultanpur.",
      },
      { property: "og:title", content: "Raja V.G. Home Design & VG Construction" },
      {
        property: "og:description",
        content: "Transforming Ideas Into Beautiful Homes — Civil & Architectural Solutions.",
      },
      { property: "og:image", content: frame8.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home2,
});

const featured = [
  {
    img: frame8.url,
    type: "Residential Construction",
    location: "Jaunpur, UP",
    title: "RCC Frame Residence",
    desc: "Multi-storey reinforced concrete framework with engineered columns and structural integrity.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: frame20.url,
    type: "Structural Engineering",
    location: "Badlapur",
    title: "Column & Beam Layout",
    desc: "Precision column casting executed under direct site supervision.",
    span: "",
  },
  {
    img: frame32.url,
    type: "Site Development",
    location: "Pratapgarh",
    title: "Foundation & Plinth",
    desc: "Detailed plinth-level execution following the approved structural drawings.",
    span: "",
  },
  {
    img: frame42.url,
    type: "Project Supervision",
    location: "Jaunpur",
    title: "On-Site Quality Control",
    desc: "Daily walkthroughs by the lead engineer to certify build quality.",
    span: "lg:col-span-2",
  },
];

const whyUs = [
  { icon: Compass, label: "Vastu Based Planning" },
  { icon: Layers, label: "2D & 3D Visualization" },
  { icon: Home, label: "Interior & Exterior Design" },
  { icon: Building, label: "Structural Expertise" },
  { icon: HardHat, label: "Site Visit Support" },
  { icon: PenTool, label: "Personalized Home Design" },
];

const testimonials = [
  { name: "Anil Kumar", loc: "Jaunpur", text: "Er. Rajaram designed our duplex beautifully — every corner is functional and Vastu compliant." },
  { name: "Sunita Devi", loc: "Pratapgarh", text: "From 2D plans to interior selection, the experience was seamless. Our villa turned out exactly like the 3D render." },
  { name: "Rakesh Singh", loc: "Jaunpur", text: "Outstanding structural design and supervision. Finished on time and within budget." },
];

function Home2() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* LOCATION TRUST BAR */}
      <section className="relative bg-navy text-cream border-y border-white/10">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_50%,#D4A017,transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-8 items-center">
            <div className="flex items-start gap-4">
              <div className="size-12 shrink-0 rounded-xl bg-gold/15 grid place-items-center ring-1 ring-gold/30">
                <MapPin className="size-5 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Main Office</div>
                <div className="mt-1 font-display text-lg sm:text-xl font-light">
                  Usra Bazar, Badlapur, <span className="gold-text italic">Jaunpur</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Serving Clients Across</div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {["Madiyahu Market, Jaunpur", "Sultanpur Road, Pratapgarh", "Badlapur Region", "Jaunpur District"].map(
                  (loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm text-cream/90"
                    >
                      <span className="size-1.5 rounded-full bg-gold" />
                      {loc}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — masonry */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              align="left"
              eyebrow="Featured Projects"
              title="Real work, real engineering"
              description="A close look at active and recently completed sites across Jaunpur and Pratapgarh — supervised end-to-end by our lead engineer."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-navy text-cream hover:bg-navy-light px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px] gap-6">
            {featured.map((p, i) => (
              <article
                key={p.title}
                className={`lux-card group relative overflow-hidden rounded-[28px] bg-navy ring-1 ring-navy/10 shadow-elegant hover:shadow-gold transition-shadow duration-700 ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.08]"
                />
                {/* Cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(212,160,23,0.18),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Shimmer */}
                <div className="shimmer" />

                {/* Top corner index */}
                <div className="absolute top-5 left-5 z-[3] flex items-center gap-2.5">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-gold/90 font-medium">
                    0{i + 1}
                  </span>
                  <span className="h-px w-8 bg-gold/60" />
                </div>

                {/* Content */}
                <div className="relative h-full min-h-[280px] flex flex-col justify-end p-7 sm:p-8 text-white z-[3]">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-gold font-medium">
                    {p.type} · {p.location}
                  </div>
                  <h3 className="mt-3 font-display text-2xl sm:text-[28px] font-light leading-[1.1] tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-gold/60 group-hover:w-24 transition-all duration-500" />
                  <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT FOUNDER */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy">
                <img
                  src={founderImg.url}
                  alt="Er. Rajaram Gupta — Civil Engineer & Architect"
                  className="size-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-gold text-navy px-6 py-5 rounded-2xl shadow-gold max-w-[220px]">
                <div className="text-3xl font-display font-light leading-none">10+</div>
                <div className="mt-1.5 text-xs uppercase tracking-[0.2em] font-medium">
                  Years of Engineering Practice
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-gold font-medium">
                <span className="h-px w-6 bg-gold" /> About the Founder
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy leading-[1.1] tracking-[-0.02em]">
                Er. Rajaram Gupta
                <br />
                <span className="italic gold-text">Civil Engineer & Architect</span>
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-medium">
                  <GraduationCap className="size-3.5" /> M.Tech Structure
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-medium">
                  <Award className="size-3.5" /> Licensed Engineer
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-medium">
                  <Ruler className="size-3.5" /> Home Planning Specialist
                </span>
              </div>
              <p className="mt-6 text-base text-navy/75 leading-relaxed">
                A decade of hands-on civil engineering and architectural practice across Eastern UP. Every
                project is personally led — from the first vastu-aligned sketch to the final structural
                certificate — with an obsession for build quality and design clarity.
              </p>
              <p className="mt-4 text-base text-navy/75 leading-relaxed">
                Specialising in modern residential planning, earthquake-resistant structures, and
                turnkey supervision, Er. Rajaram has guided 100+ families through the journey of
                building a home they're proud of.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5 max-w-md">
                {[
                  { n: "100+", l: "Homes Designed" },
                  { n: "10+", l: "Years Practice" },
                  { n: "3", l: "Districts Served" },
                ].map((s) => (
                  <div key={s.l} className="border-l-2 border-gold pl-4">
                    <div className="text-2xl sm:text-3xl font-display font-light text-navy">{s.n}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-navy/60 font-medium">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
                >
                  Read full profile <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="section-pad bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,#D4A017,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: `url(${siteVisitImg.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-gold font-medium">
              <span className="h-px w-6 bg-gold" /> Why Clients Choose Us
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em]">
              Engineering precision, <span className="italic gold-text">designed for living.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {whyUs.map((w) => (
              <div
                key={w.label}
                className="group bg-navy hover:bg-navy-light transition-colors p-7 sm:p-8 flex items-start gap-5"
              >
                <div className="size-12 shrink-0 rounded-xl bg-gold/15 ring-1 ring-gold/30 grid place-items-center group-hover:bg-gold group-hover:ring-gold transition-all">
                  <w.icon className="size-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-light text-cream">{w.label}</h3>
                  <div className="mt-2 h-px w-10 bg-gold/40 group-hover:w-20 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STRIP */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[7fr_5fr] gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <img src={teamImg.url} alt="VG Construction site team" className="size-full object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-gold font-medium">
              <span className="h-px w-6 bg-gold" /> Our Team
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-light text-navy leading-[1.1] tracking-[-0.02em]">
              A trained crew, <span className="italic gold-text">on every site.</span>
            </h2>
            <p className="mt-5 text-navy/70 leading-relaxed">
              From masons to supervising engineers, the VG Construction crew works under safety-first
              protocols and personal direction from Er. Rajaram. The same people who plan your home are
              the ones standing on your slab.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <ShieldCheck className="size-5 text-gold" />
              <span className="text-sm font-medium text-navy">
                Engineer-led · Safety equipped · Quality assured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader eyebrow="Client Stories" title="Loved by homeowners across UP" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl bg-cream border border-border hover:border-gold transition-colors relative"
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
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 md:p-16 text-cream">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#D4A017,transparent_55%)]" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  <Trophy className="size-3.5" /> Let's Build Together
                </div>
                <h2 className="mt-3 text-3xl md:text-5xl font-display font-light leading-[1.1]">
                  Ready to build your <span className="gold-text italic">dream home?</span>
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
