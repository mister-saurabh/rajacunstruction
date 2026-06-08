import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Maximize, Building, Calendar, Wrench, Home } from "lucide-react";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project Not Found" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.location} | Raja V.G.` },
        { name: "description", content: `${p.name} in ${p.location} — ${p.area}. ${p.overview}` },
        { property: "og:title", content: p.name },
        { property: "og:description", content: p.overview },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.thumbnail },
      ],
      links: [{ rel: "canonical", href: `/projects/${p.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center px-5 text-center">
      <div>
        <h1 className="text-3xl font-display font-semibold text-navy">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-flex text-gold font-semibold">
          ← Back to all projects
        </Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  const specs = [
    { icon: Maximize, l: "Plot Size", v: p.plotSize },
    { icon: Building, l: "Built-up Area", v: p.builtUp },
    { icon: Home, l: "Floors", v: p.floors },
    { icon: MapPin, l: "Location", v: p.location },
    { icon: Wrench, l: "Service Type", v: p.serviceType },
    { icon: Calendar, l: "Completion", v: p.completion },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={p.thumbnail} alt={p.name} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 sm:px-8 pb-10 text-cream">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">{p.category}</div>
          <h1 className="mt-3 text-3xl md:text-6xl font-display font-semibold leading-[1.05] max-w-3xl">{p.name}</h1>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-gold" /> {p.location}</span>
            <span className="inline-flex items-center gap-2"><Maximize className="size-4 text-gold" /> {p.area}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="size-4 text-gold" /> {p.completion}</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SPECS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy">Project Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-navy">Client Requirements</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.requirements}</p>
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-navy">Design Approach</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.approach}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-cream border border-border">
                <h4 className="font-semibold text-navy">Challenges</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.challenges}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gold/10 border border-gold/30">
                <h4 className="font-semibold text-navy">Our Solutions</h4>
                <p className="mt-2 text-sm text-navy/80">{p.solutions}</p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="p-7 rounded-2xl bg-navy text-cream">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold font-semibold">Specifications</h3>
              <div className="mt-5 space-y-4">
                {specs.map((s) => (
                  <div key={s.l} className="flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-cream/10 grid place-items-center shrink-0">
                      <s.icon className="size-4 text-gold" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-cream/60">{s.l}</div>
                      <div className="font-medium">{s.v}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center justify-center gap-2 w-full bg-gold text-navy hover:bg-gold-light px-5 py-3 rounded-full font-semibold transition-colors"
              >
                Request Similar Design <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy">Gallery</h2>
          <p className="mt-2 text-muted-foreground">Exterior · Interior · Floor Plans · 3D Views · Progress</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[p.thumbnail, ...related.map((r) => r.thumbnail)].slice(0, 6).map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}
              >
                <img
                  src={src}
                  alt={`${p.name} gallery ${i + 1}`}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy">Related Projects</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/projects/$slug"
                params={{ slug: r.slug }}
                className="group block rounded-2xl overflow-hidden bg-white border border-border hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.thumbnail} alt={r.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">{r.category}</div>
                  <h3 className="mt-1.5 text-lg font-semibold text-navy group-hover:text-gold transition-colors">{r.name}</h3>
                  <div className="mt-2 text-xs text-muted-foreground">{r.location} · {r.area}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 md:p-14 text-cream text-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,#D4A017,transparent_55%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Like this design?
              </h2>
              <p className="mt-3 text-cream/75 max-w-xl mx-auto">Get your custom house plan today — designed personally by Er. Rajaram Gupta.</p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold-light px-7 py-3.5 rounded-full font-semibold shadow-gold transition-colors"
              >
                Request Consultation <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
