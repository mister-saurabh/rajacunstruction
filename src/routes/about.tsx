import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Target, Eye, ArrowRight, CheckCircle2 } from "lucide-react";
import founder from "@/assets/founder.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Er. Rajaram Gupta — Architect & Civil Engineer | Raja V.G." },
      { name: "description", content: "Meet Er. Rajaram Gupta — Civil Engineer, Architect & M.Tech Structure. 12+ years designing modern, Vastu-compliant homes in Jaunpur & Pratapgarh." },
      { property: "og:title", content: "About Raja V.G. Home Design Services" },
      { property: "og:description", content: "Engineering-led architecture firm built on trust, expertise & beautiful homes." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_30%,#D4A017,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            <span className="h-px w-6 bg-gold" /> About Us
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold leading-[1.05] max-w-3xl">
            Engineering-led design for <span className="gold-text">homes built to last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-cream/75 text-lg">
            Raja V.G. Home Design Services & VG Construction is an architecture and structural engineering practice serving Jaunpur, Pratapgarh and surrounding districts.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Our Story"
              title="Twelve years of crafting modern Indian homes"
            />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are a personal-scale practice that treats every project as a flagship. Founded by Er. Rajaram Gupta, we combine architectural sensibility with deep structural knowledge — a rare combination that lets us design homes that are as beautiful as they are buildable.
              </p>
              <p>
                Our philosophy is simple: <strong className="text-navy">modern design, Vastu wisdom, and engineering rigour</strong>. We listen first, plan carefully, and stay involved through construction so the home you imagined becomes the home you live in.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["150+", "Homes Designed"],
                ["12+", "Years Experience"],
                ["50+", "Cities Served"],
                ["100%", "Client Satisfaction"],
              ].map(([v, l]) => (
                <div key={l} className="p-5 rounded-2xl bg-cream border border-border">
                  <div className="text-3xl font-display font-bold text-navy">{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-2/3 h-2/3 bg-gold/15 rounded-3xl -z-10" />
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
              <img src={founder} alt="Er. Rajaram Gupta" loading="lazy" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl shadow-elegant max-w-[240px]">
              <div className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Founder</div>
              <div className="mt-1 font-display font-semibold text-navy">Er. Rajaram Gupta</div>
              <div className="text-xs text-muted-foreground">Civil Engineer & Architect · M.Tech Structure</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Founder"
            title="Er. Rajaram Gupta"
            description="Civil Engineer · Architect · M.Tech Structure"
          />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { icon: Award, t: "M.Tech Structure", d: "Post-graduate specialisation in structural engineering — earthquake & load analysis." },
              { icon: Target, t: "150+ Projects", d: "Residential, luxury villas and commercial blocks across UP." },
              { icon: CheckCircle2, t: "Hands-on Supervision", d: "Personally involved from foundation drawing to final handover." },
            ].map((c) => (
              <div key={c.t} className="p-6 rounded-2xl bg-white border border-border hover:border-gold transition-colors">
                <div className="size-11 rounded-xl bg-navy text-gold grid place-items-center">
                  <c.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-6">
          <div className="p-10 rounded-3xl bg-navy text-cream relative overflow-hidden">
            <div className="absolute -top-16 -right-16 size-60 rounded-full bg-gold/15" />
            <Eye className="size-10 text-gold relative" />
            <h3 className="mt-5 text-3xl font-display font-semibold relative">Our Vision</h3>
            <p className="mt-3 text-cream/80 leading-relaxed relative">
              To provide modern, affordable and technically sound architectural solutions — making thoughtful design accessible to every Indian family.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-gold/10 border border-gold/30 relative overflow-hidden">
            <Target className="size-10 text-gold" />
            <h3 className="mt-5 text-3xl font-display font-semibold text-navy">Our Mission</h3>
            <p className="mt-3 text-navy/80 leading-relaxed">
              To help clients build safe, beautiful and future-ready structures — guided by sound engineering, modern design and Vastu wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy">
            Let's design your next home together.
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-navy text-cream hover:bg-navy-light px-7 py-3.5 rounded-full font-semibold shadow-elegant transition-colors"
          >
            Start a Conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
