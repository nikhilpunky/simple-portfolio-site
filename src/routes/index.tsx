import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil — Independent Designer & Art Director" },
      {
        name: "description",
        content:
          "Portfolio of Nikhil, an independent designer crafting editorial-leaning brand and digital work.",
      },
      { property: "og:title", content: "Nikhil — Independent Designer" },
      {
        property: "og:description",
        content: "Editorial-leaning brand and digital design.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-12 pt-20 md:pt-32 pb-24 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Nikhil — Portfolio 2020 / 2025
        </p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95]">
          Hi, I'm <span className="italic text-accent">Nikhil</span> — a
          designer building bold, considered brands for ambitious teams.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Eight years deep into independent practice, I partner with founders
          and studios on identity systems, editorial direction, and digital
          products that feel sharp, warm, and unmistakably theirs.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-col md:flex-row gap-4 md:items-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background text-sm hover:bg-accent transition-colors"
          >
            View selected work →
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-sm hover:border-foreground transition-colors"
          >
            Start a project
          </Link>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 pb-32 grid md:grid-cols-3 gap-12 max-w-6xl border-t border-border pt-16">
        {[
          { k: "Practice", v: "Brand identity, editorial systems, and product design for studios, founders, and cultural institutions." },
          { k: "Recognition", v: "Featured in It's Nice That, Brand New, and the Type Directors Club annual." },
          { k: "Currently", v: "Accepting two new projects for Q3. Based in Lisbon, working worldwide." },
        ].map((item) => (
          <div key={item.k}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{item.k}</p>
            <p className="font-display text-xl leading-snug">{item.v}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
