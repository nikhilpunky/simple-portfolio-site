import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maya Okafor" },
      { name: "description", content: "Get in touch about a new project, collaboration, or talk." },
      { property: "og:title", content: "Contact — Maya Okafor" },
      { property: "og:description", content: "Get in touch about a project or collaboration." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-12 pt-20 pb-32 max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Contact</p>
        <h1 className="font-display text-4xl md:text-7xl leading-tight mb-16">
          Let's make something <span className="italic text-accent">worthwhile</span>.
        </h1>

        <div className="grid md:grid-cols-2 gap-12 border-t border-border pt-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Email</p>
            <a
              href="mailto:hello@mayaokafor.studio"
              className="font-display text-2xl md:text-3xl hover:text-accent transition-colors"
            >
              hello@mayaokafor.studio
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Elsewhere</p>
            <ul className="space-y-2 font-display text-xl">
              <li><a href="#" className="hover:text-accent transition-colors">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Are.na ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Read.cv ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-secondary">
          <p className="font-display italic text-2xl md:text-3xl leading-snug max-w-2xl">
            "Maya has the rare ability to translate a fuzzy idea into something inevitable. Working with her felt like turning on a light."
          </p>
          <p className="mt-6 text-sm text-muted-foreground">— Iris Chen, Founder, Atlas Coffee Co.</p>
        </div>
      </section>
    </SiteLayout>
  );
}