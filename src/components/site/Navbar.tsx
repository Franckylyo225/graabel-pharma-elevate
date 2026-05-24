import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/qui-sommes-nous", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/expertise", label: "Expertise" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/succursales", label: "Succursales" },
  { to: "/actualites", label: "Actualités" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-sm tracking-tight">
            GP
          </span>
          <span className="font-display text-lg font-bold text-navy">
            Graabel Pharma
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.slice(0, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/85"
              }`}
              activeProps={{ className: "text-primary" }}
              activeOptions={l.to === "/" ? { exact: true } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90"
        >
          Nous contacter
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-navy"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background animate-fade-in lg:hidden">
          <div className="container-x flex h-18 items-center justify-between py-4">
            <span className="font-display text-lg font-bold text-navy">Graabel Pharma</span>
            <button
              aria-label="Fermer"
              className="grid h-10 w-10 place-items-center rounded-md text-navy"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-x mt-8 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 text-2xl font-semibold text-navy"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
