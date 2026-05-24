import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Check } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — Graabel Pharma" },
      {
        name: "description",
        content:
          "Plus de 20 laboratoires internationaux font confiance à Graabel Pharma pour leur présence en Afrique de l'Ouest.",
      },
      { property: "og:title", content: "Nos partenaires — Graabel Pharma" },
      {
        property: "og:description",
        content: "Des laboratoires de référence mondiale, présents sur 5 pays.",
      },
    ],
  }),
  component: Page,
});

const ciPartners = [
  "Piex Life Provider", "Afric-Phar", "Cross Pharm", "Ferrer",
  "Salvat", "Faes Farma", "Aldo-Unión", "Extendis Pharma",
  "Noventure", "Almeddix", "Apexfarma", "Almirall",
  "h.i by Kelix Bio", "Zrenie Healthcare", "MPL", "Groikan",
  "Pharma5", "MSLab", "Laprophan", "Amanys Pharma",
  "Micro Labs", "Walter Ritter", "PlanetPharma", "Cooper Pharma",
];

const tgPartners = [
  "Médicale Pharmaceutique", "Luex Healthcare", "Laprophan", "PlanetPharma",
  "Zrenie Healthcare", "Micro Labs", "masculan", "MSLab", "bottu",
];

const bjPartners = [
  "Grimberg Laboratoires", "Almirall", "Micro Labs", "La Renon",
  "Intermed Groupe", "Groikan", "Zrenie Healthcare", "MSLab", "masculan",
];

const benefits = [
  "Équipe terrain dédiée dès le premier mois",
  "Reporting détaillé et transparent",
  "Connaissance approfondie des marchés locaux",
  "Réseau de distribution établi",
  "Formation produit assurée",
  "Gestion des enregistrements réglementaires",
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function LogoTile({ name, index }: { name: string; index: number }) {
  return (
    <Reveal delay={(index % 8) * 0.04}>
      <div className="group flex h-28 items-center justify-center gap-3 rounded-xl border border-[#E2E8F0] bg-background p-5 grayscale transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:grayscale-0 hover:shadow-[0_18px_40px_-22px_rgba(13,43,94,0.35)]">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-tint font-display text-xs font-extrabold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {initials(name)}
        </span>
        <span className="truncate font-display text-sm font-bold text-navy">{name}</span>
      </div>
    </Reveal>
  );
}

function CountryBlock({
  label,
  subtitle,
  partners,
  altBg,
}: {
  label: string;
  subtitle?: string;
  partners: string[];
  altBg?: boolean;
}) {
  return (
    <section className={altBg ? "bg-[#FAFBFF] py-24 lg:py-28" : "py-24 lg:py-28"}>
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="label-accent">{label}</span>
              {subtitle && (
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
                  {subtitle}
                </h2>
              )}
            </div>
            <span className="rounded-full bg-tint px-4 py-1.5 text-xs font-semibold text-primary">
              {partners.length} partenaires
            </span>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p, i) => (
            <LogoTile key={`${label}-${p}-${i}`} name={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <PageShell
      breadcrumb="Partenaires"
      hero={{
        label: "Partenaires",
        title: <>Ils nous font <span className="text-primary">confiance.</span></>,
        subtitle:
          "Des laboratoires de référence mondiale qui choisissent Graabel Pharma pour leur présence en Afrique de l'Ouest.",
      }}
    >
      {/* Intro */}
      <section className="py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-[680px] text-center text-lg leading-relaxed text-subtext">
              Depuis 1996, GRAABEL PHARMA collabore avec des laboratoires pharmaceutiques
              internationaux de premier plan. Ces partenariats sont fondés sur la confiance,
              la transparence et des résultats terrain démontrés.
            </p>
          </Reveal>
        </div>
      </section>

      <CountryBlock
        label="Côte d'Ivoire — Siège"
        subtitle="Nos partenaires actifs en Côte d'Ivoire"
        partners={ciPartners}
      />

      <CountryBlock
        label="Togo — Lomé"
        subtitle="Nos partenaires actifs au Togo"
        partners={tgPartners}
        altBg
      />

      <CountryBlock
        label="Bénin — Cotonou"
        subtitle="Nos partenaires actifs au Bénin"
        partners={bjPartners}
      />

      {/* Devenir partenaire */}
      <section className="bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white ring-1 ring-inset ring-white/30">
                Devenir partenaire
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight lg:text-5xl">
                Votre laboratoire veut s'implanter en Afrique de l'Ouest&nbsp;?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Rejoignez les 20+ laboratoires qui nous font déjà confiance.
                Bénéficiez de notre réseau de +300 délégués dans 5 pays.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-background px-7 py-4 text-base font-semibold text-navy transition-transform duration-200 hover:scale-[1.03]"
              >
                Devenir partenaire
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5 text-sm leading-snug text-white/90"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-inset ring-white/30">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <figure className="relative mx-auto max-w-4xl text-center">
              <Quote
                aria-hidden
                className="mx-auto h-[110px] w-[110px] text-primary/15"
                strokeWidth={1.5}
              />
              <blockquote className="-mt-4 font-display text-xl italic leading-[1.55] text-navy md:text-2xl lg:text-[26px]">
                « Graabel Pharma est pour nous bien plus qu'un prestataire. C'est un véritable
                partenaire terrain qui comprend nos produits et les défend avec conviction. »
              </blockquote>
              <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-subtext">
                — Un laboratoire partenaire, Espagne
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
