import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Calendar, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — Graabel Pharma" },
      {
        name: "description",
        content:
          "Actualités, formations, événements et partenariats — toute l'info de Graabel Pharma et du secteur pharma en Afrique de l'Ouest.",
      },
      { property: "og:title", content: "Actualités — Graabel Pharma" },
      { property: "og:description", content: "Restez informé du secteur pharmaceutique ouest-africain." },
    ],
  }),
  component: Page,
});

type Category =
  | "Partenariats"
  | "Formations"
  | "Expansion"
  | "Expertises"
  | "Événements"
  | "Recrutement";

type Article = {
  category: Category;
  date: string;
  title: string;
  excerpt: string;
  /** seed for the gradient placeholder */
  seed: number;
};

const featured = {
  category: "Événement" as const,
  date: "15 Mai 2026",
  title: "Graabel Pharma lance sa nouvelle plateforme digitale",
  excerpt:
    "Dans le cadre de sa stratégie de modernisation, Graabel Pharma renforce sa présence digitale avec un nouveau site web corporate multilingue et des outils de reporting en temps réel pour ses laboratoires partenaires.",
};

const articles: Article[] = [
  {
    category: "Partenariats",
    date: "02 Mai 2026",
    title: "Nouveau partenaire : Cooper Pharma rejoint le réseau Graabel",
    excerpt:
      "Le laboratoire marocain confie la promotion de sa gamme cardiovasculaire à Graabel Pharma pour les marchés ouest-africains.",
    seed: 1,
  },
  {
    category: "Formations",
    date: "24 Avril 2026",
    title: "Session EPU à Cotonou : 45 médecins formés sur les nouveaux protocoles",
    excerpt:
      "Une journée scientifique dédiée aux dernières recommandations en cardiologie et endocrinologie pour les praticiens béninois.",
    seed: 2,
  },
  {
    category: "Expansion",
    date: "12 Avril 2026",
    title: "Graabel Pharma Sénégal : les premières équipes terrain déployées",
    excerpt:
      "Une équipe pilote de huit délégués démarre la couverture du grand Dakar, en attendant l'ouverture officielle de la succursale.",
    seed: 3,
  },
  {
    category: "Expertises",
    date: "28 Mars 2026",
    title: "Lancement réussi : le produit X dépasse ses objectifs S1 en Côte d'Ivoire",
    excerpt:
      "Six mois après son introduction, le médicament confié à Graabel Pharma affiche +18 % sur les objectifs initiaux du laboratoire.",
    seed: 4,
  },
  {
    category: "Événements",
    date: "15 Mars 2026",
    title: "Participation au congrès pharmaceutique de l'UEMOA 2026",
    excerpt:
      "Graabel Pharma était présent à Lomé aux côtés de cinq laboratoires partenaires pour échanger sur la régulation régionale.",
    seed: 5,
  },
  {
    category: "Recrutement",
    date: "08 Mars 2026",
    title: "Graabel Pharma recrute 20 délégués médicaux dans 3 pays",
    excerpt:
      "Une campagne de recrutement structurée pour renforcer les équipes en Côte d'Ivoire, au Togo et au Bénin.",
    seed: 6,
  },
  {
    category: "Formations",
    date: "22 Février 2026",
    title: "Programme annuel de formation continue : 12 modules lancés",
    excerpt:
      "Le département formation déploie un cycle complet sur l'oncologie, la pharmacovigilance et la communication médicale.",
    seed: 7,
  },
  {
    category: "Partenariats",
    date: "05 Février 2026",
    title: "Extension de partenariat avec un groupe pharmaceutique européen",
    excerpt:
      "Trois nouvelles aires thérapeutiques rejoignent le portefeuille géré par Graabel Pharma sur la zone UEMOA.",
    seed: 8,
  },
  {
    category: "Événements",
    date: "21 Janvier 2026",
    title: "Symposium régional pharmacovigilance : 120 professionnels réunis",
    excerpt:
      "Un événement co-organisé à Abidjan autour des meilleures pratiques de notification d'effets indésirables.",
    seed: 9,
  },
];

const FILTERS: ("Tous" | Category)[] = [
  "Tous",
  "Partenariats",
  "Formations",
  "Expansion",
  "Expertises",
  "Événements",
  "Recrutement",
];

const PAGE_SIZE = 6;

const gradients = [
  "linear-gradient(135deg, #1E40AF 0%, #3B82F6 60%, #93C5FD 100%)",
  "linear-gradient(135deg, #0D2B5E 0%, #2563EB 80%)",
  "linear-gradient(135deg, #2563EB 0%, #60A5FA 50%, #DBEAFE 100%)",
  "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 70%, #F59E0B 130%)",
  "linear-gradient(135deg, #1D4ED8 0%, #38BDF8 100%)",
  "linear-gradient(135deg, #0D2B5E 0%, #1E40AF 50%, #2563EB 100%)",
];

function ArticleVisual({ seed, height = "h-40" }: { seed: number; height?: string }) {
  const g = gradients[seed % gradients.length];
  return (
    <div
      className={`relative w-full overflow-hidden ${height}`}
      style={{ background: g }}
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 200" preserveAspectRatio="none">
        <circle cx={60 + seed * 20} cy="40" r="80" fill="white" fillOpacity="0.18" />
        <circle cx={320 - seed * 10} cy="180" r="120" fill="white" fillOpacity="0.12" />
        <path
          d={`M0 ${120 + (seed % 3) * 10} Q 100 ${60 + seed * 5}, 200 ${110 - seed * 4} T 400 ${100 + seed * 3}`}
          stroke="white"
          strokeOpacity="0.35"
          fill="none"
        />
      </svg>
    </div>
  );
}

function Page() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (filter === "Tous") return articles;
    return articles.filter((a) => a.category === filter);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <PageShell
      breadcrumb="Actualités"
      hero={{
        label: "Actualités",
        title: <>Restez <span className="text-primary">informé.</span></>,
        subtitle:
          "Toute l'actualité de Graabel Pharma et du secteur pharmaceutique en Afrique de l'Ouest.",
      }}
    >
      {/* Featured */}
      <section className="py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <article className="grid overflow-hidden rounded-3xl border border-border bg-background shadow-[0_30px_70px_-30px_rgba(13,43,94,0.25)] lg:grid-cols-[1.05fr_1fr]">
              <ArticleVisual seed={0} height="h-64 lg:h-full lg:min-h-[420px]" />
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-tint px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-subtext">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-subtext">
                  {featured.excerpt}
                </p>
                <a
                  href="#articles"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
                >
                  Lire la suite <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Filters + Grid */}
      <section id="articles" className="pb-24 lg:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5">
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => {
                      setFilter(f);
                      setPage(1);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_rgba(37,99,235,0.55)]"
                        : "border border-border bg-background text-subtext hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {visible.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-border bg-background py-20 text-center text-sm text-subtext">
              Aucun article dans cette catégorie pour le moment.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((a, i) => (
                <Reveal key={`${a.title}-${i}`} delay={i * 0.05}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(13,43,94,0.3)]">
                    <div className="relative">
                      <ArticleVisual seed={a.seed} />
                      <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-background/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
                        {a.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-subtext">
                        <Calendar className="h-3.5 w-3.5" />
                        {a.date}
                      </span>
                      <h3 className="mt-3 line-clamp-2 font-display text-lg font-bold leading-snug text-navy">
                        {a.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-subtext">
                        {a.excerpt}
                      </p>
                      <a
                        href="#articles"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
                      >
                        Lire la suite <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-14 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-navy transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Page précédente"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                const active = n === safePage;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_rgba(37,99,235,0.55)]"
                        : "border border-border bg-background text-subtext hover:border-primary/40 hover:text-primary"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {n}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-navy transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Page suivante"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#EFF6FF] py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl bg-background p-10 text-center shadow-[0_30px_60px_-30px_rgba(13,43,94,0.2)] ring-1 ring-border md:p-14">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-tint text-primary">
                <Mail className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
                Ne manquez aucune <span className="text-primary">actualité</span>
              </h2>
              <p className="mt-4 text-base text-subtext">
                Recevez nos dernières nouvelles directement dans votre boîte mail.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm text-navy placeholder:text-subtext/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
                >
                  S'abonner
                </button>
              </form>
              <p className="mt-4 text-xs text-subtext">
                Pas de spam. Désinscription en un clic.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
