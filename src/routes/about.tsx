import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maya Okafor" },
      { name: "description", content: "About Maya Okafor — independent designer based in Lisbon." },
      { property: "og:title", content: "About — Maya Okafor" },
      { property: "og:description", content: "Independent designer based in Lisbon." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-12 pt-20 pb-24 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">About</p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-12">
          I'm Maya — a designer who believes in <span className="italic text-accent">slow work</span> and sharp ideas.
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            For the last eight years I've worked with founders, museums, and small studios to build identity systems that hold up over time. My practice sits at the intersection of editorial design, typography, and digital craft.
          </p>
          <p>
            Before going independent in 2020, I led design at a Brooklyn studio and lectured at the Lisbon School of Visual Arts. I studied graphic design at Central Saint Martins.
          </p>
          <p>
            Outside the studio: long walks, used bookshops, and an ongoing personal type project I'll release one day.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-10 border-t border-border pt-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Clients</p>
            <ul className="space-y-1 font-display text-lg">
              <li>Praxis Foundation</li>
              <li>Atlas Coffee Co.</li>
              <li>Marin Architects</li>
              <li>Verba Press</li>
              <li>Field Notes Quarterly</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Recognition</p>
            <ul className="space-y-1 font-display text-lg">
              <li>TDC Annual, 2024</li>
              <li>Brand New Awards, 2023</li>
              <li>It's Nice That feature</li>
              <li>D&AD Wood Pencil</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}