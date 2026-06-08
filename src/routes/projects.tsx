import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Maximize, ArrowRight } from "lucide-react";
import { projects, categories } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Architecture & Construction Portfolio | Raja V.G." },
      { name: "description", content: "Explore our portfolio of residential, duplex, luxury villas, commercial buildings, interior design and 3D elevation projects in Jaunpur & Pratapgarh." },
      { property: "og:title", content: "Our Projects — Raja V.G." },
      { property: "og:description", content: "Explore our architecture and construction portfolio." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  const [active, setActive] = useState<string>("All Projects");
  const filtered = active === "All Projects" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_30%,#D4A017,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            <span className="h-px w-6 bg-gold" /> Portfolio
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold leading-[1.05]">
            Our <span className="gold-text">Projects</span>
          </h1>
          <p className="mt-6 max-w-2xl text-cream/75 text-lg">
            Explore our architecture and construction portfolio across Jaunpur, Pratapgarh and beyond.
          </p>
        </div>
      </section>

      <section className="py-10 sticky top-16 md:top-20 z-30 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "bg-navy text-cream shadow-elegant"
                  : "bg-white border border-border text-navy/70 hover:border-gold hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No projects in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-2xl overflow-hidden bg-white border border-border hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={p.thumbnail}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] text-navy font-semibold">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" /> {p.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Maximize className="size-3.5" /> {p.area}
                      </span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                      View Project <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
