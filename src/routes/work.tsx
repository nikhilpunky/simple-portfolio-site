import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Maya Okafor" },
      { name: "description", content: "Selected brand and digital projects from 2020 to today." },
      { property: "og:title", content: "Selected Work — Maya Okafor" },
      { property: "og:description", content: "Selected brand and digital projects." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { year: "2025", name: "Lumen & Loam", type: "Brand identity", color: "oklch(0.62 0.18 35)" },
  { year: "2024", name: "Field Notes Quarterly", type: "Editorial system", color: "oklch(0.45 0.12 200)" },
  { year: "2024", name: "Atlas Coffee Co.", type: "Packaging & web", color: "oklch(0.55 0.14 140)" },
  { year: "2023", name: "Praxis Foundation", type: "Identity & report", color: "oklch(0.35 0.05 280)" },
  { year: "2023", name: "Marin Architects", type: "Website", color: "oklch(0.7 0.1 60)" },
  { year: "2022", name: "Verba Press", type: "Type & books", color: "oklch(0.4 0.08 20)" },
];

function WorkPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-12 pt-20 pb-12 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Selected Work</p>
        <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
          Long-form collaborations with people who care about the craft.
        </h1>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <ul className="border-t border-border">
          {projects.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border-b border-border"
            >
              <div className="grid grid-cols-12 items-center py-8 cursor-pointer">
                <span className="col-span-2 md:col-span-1 text-sm text-muted-foreground">{p.year}</span>
                <div className="col-span-7 md:col-span-8">
                  <h2 className="font-display text-2xl md:text-4xl group-hover:italic transition-all">
                    {p.name}
                  </h2>
                </div>
                <span className="col-span-3 text-right md:text-left text-sm text-muted-foreground">
                  {p.type}
                </span>
                <span
                  className="hidden md:block col-span-1 justify-self-end h-3 w-3 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}