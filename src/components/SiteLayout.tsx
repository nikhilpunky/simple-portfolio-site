import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 md:px-12 py-6 flex items-center justify-between border-b border-border">
        <Link to="/" className="font-display text-xl tracking-tight">
          Maya Okafor<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-10 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>

      <footer className="px-6 md:px-12 py-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Maya Okafor — Independent designer.</p>
        <p className="font-display italic">Made with care.</p>
      </footer>
    </div>
  );
}