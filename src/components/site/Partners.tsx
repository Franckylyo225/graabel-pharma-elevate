import { Reveal } from "./Reveal";
import { Globe2, ShieldCheck, Handshake } from "lucide-react";


type Logo = { name: string; mark?: string };

const row1: Logo[] = [
  { name: "Piex" }, { name: "Afric-Phar", mark: "AP" }, { name: "Cross Pharm", mark: "CP" },
  { name: "Ferrer" }, { name: "Salvat" }, { name: "Faes Farma", mark: "FF" },
  { name: "Aldo-Union", mark: "AU" }, { name: "Extendis Pharma", mark: "EX" },
  { name: "Noventure" }, { name: "Almeddix" }, { name: "Apexfarma" }, { name: "Almirall" },
];
const row2: Logo[] = [
  { name: "h.i by Kelix Bio", mark: "hi" }, { name: "Zrenie Healthcare", mark: "ZH" },
  { name: "MPL" }, { name: "Groikan" }, { name: "Pharma5", mark: "P5" }, { name: "MSLab" },
  { name: "Laprophan" }, { name: "Amanys Pharma", mark: "AM" }, { name: "Micro Labs", mark: "ML" },
  { name: "Walter Ritter", mark: "WR" }, { name: "PlanetPharma", mark: "PP" }, { name: "Cooper" },
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

function LogoCard({ logo }: { logo: Logo }) {
  const mark = logo.mark ?? initials(logo.name);
  return (
    <div className="group mx-3 flex h-24 min-w-[240px] items-center gap-4 rounded-2xl border border-border bg-background px-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(13,43,94,0.35)]">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-tint font-display text-sm font-extrabold tracking-tight text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {mark}
      </span>
      <div className="min-w-0">
        <p className="truncate font-display text-base font-bold text-navy">
          {logo.name}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-subtext">
          Partenaire
        </p>
      </div>
    </div>
  );
}

function LogoStrip({ items, reverse = false }: { items: Logo[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />
      <div className={reverse ? "marquee-reverse" : "marquee"}>
        {doubled.map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

const proof = [
  { value: 20, suffix: "+", label: "Laboratoires partenaires" },
  { value: 12, suffix: "", label: "Nationalités représentées" },
  { value: 30, suffix: " ans", label: "De relations construites" },
  { value: 100, suffix: "%", label: "Conformité réglementaire" },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <span className="label-accent">Ils nous font confiance</span>
            <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
              Des laboratoires de référence{" "}
              <span className="text-primary">mondiale</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-subtext lg:text-right">
              De l'Europe au Maghreb, de l'Inde à l'Afrique de l'Ouest — nous
              représentons les marques qui font avancer la santé.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 space-y-5">
        <LogoStrip items={row1} />
        <LogoStrip items={row2} reverse />
      </div>

      <div className="container-x mt-20">
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label} className="bg-[color:var(--surface-alt)] p-8 text-center">
                <dt className="font-display text-4xl font-extrabold text-navy lg:text-5xl">
                  <Counter to={p.value} suffix={p.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-subtext">{p.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
