import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — Graabel Pharma" },
      { name: "description", content: "Annonces, formations, événements et insights de Graabel Pharma sur le secteur pharmaceutique en Afrique de l'Ouest." },
      { property: "og:title", content: "Actualités — Graabel Pharma" },
      { property: "og:description", content: "Les dernières actualités de Graabel Pharma." },
    ],
  }),
  component: Page,
});

const news = [
  {
    tag: "Événement",
    date: "12 mars 2026",
    title: "Graabel Pharma au congrès AFRAVIH 2026 à Dakar",
    excerpt: "Nos équipes médicales étaient présentes au congrès international francophone, aux côtés de cinq laboratoires partenaires.",
  },
  {
    tag: "Formation",
    date: "04 février 2026",
    title: "Lancement du programme de formation continue en oncologie",
    excerpt: "Un cycle de six modules pour les pharmaciens hospitaliers, conçu avec un comité scientifique pluridisciplinaire.",
  },
  {
    tag: "Partenariat",
    date: "21 janvier 2026",
    title: "Nouveau partenariat avec un laboratoire européen de cardiologie",
    excerpt: "Graabel Pharma assure désormais la promotion d'une nouvelle gamme cardiovasculaire sur les cinq marchés couverts.",
  },
  {
    tag: "Réglementaire",
    date: "08 décembre 2025",
    title: "Mise à jour des procédures d'enregistrement UEMOA",
    excerpt: "Notre équipe affaires réglementaires décrypte les évolutions récentes et leur impact sur les dossiers en cours.",
  },
  {
    tag: "Entreprise",
    date: "15 novembre 2025",
    title: "Ouverture officielle de notre succursale de Bamako",
    excerpt: "Une équipe locale de huit collaborateurs prend ses fonctions pour couvrir le marché malien.",
  },
  {
    tag: "Formation",
    date: "02 octobre 2025",
    title: "Symposium régional sur la pharmacovigilance à Abidjan",
    excerpt: "Plus de 120 professionnels de santé réunis autour des meilleures pratiques de notification.",
  },
];

function Page() {
  return (
    <PageShell
      breadcrumb="Actualités"
      hero={{
        label: "Actualités",
        title: <>Le pouls <span className="text-primary">de Graabel Pharma</span></>,
        subtitle: "Événements, formations, partenariats et regards d'experts : suivez nos engagements au service de la santé en Afrique de l'Ouest.",
      }}
    >
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(13,43,94,0.35)]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-tint px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                      {n.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-subtext">
                      <Calendar className="h-3.5 w-3.5" />
                      {n.date}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-xl font-bold leading-snug text-navy">
                    {n.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-subtext">
                    {n.excerpt}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
                  >
                    Lire la suite
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
