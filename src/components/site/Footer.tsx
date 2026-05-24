import { Link } from "@tanstack/react-router";

const links = [
  { to: "/qui-sommes-nous", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/expertise", label: "Expertise" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/succursales", label: "Succursales" },
  { to: "/actualites", label: "Actualités" },
  { to: "/contact", label: "Contact" },
] as const;

const countries = ["Côte d'Ivoire — Siège", "Togo", "Bénin", "Sénégal", "Mali"];

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary font-bold text-white">
              GP
            </span>
            <span className="font-display text-lg font-bold text-white">Graabel Pharma</span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-white/60">
            Formation & Promotion Pharmaceutique depuis 1996.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
            Navigation
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
            Présence
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {countries.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white">www.graabelpharma.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Graabel Pharma. Tous droits réservés.</p>
          <a href="#" className="hover:text-white transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
