import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ page }: { page: string }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="border-b border-border bg-background/60"
    >
      <div className="container-x flex h-12 items-center gap-2 text-xs font-medium text-subtext">
        <Link to="/" className="transition-colors hover:text-primary">
          Accueil
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-border" />
        <span className="text-navy">{page}</span>
      </div>
    </nav>
  );
}
