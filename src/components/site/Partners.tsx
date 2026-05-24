import { Reveal } from "./Reveal";

const row1 = ["Piex", "Afric-Phar", "Cross Pharm", "Ferrer", "Salvat", "Faes Farma", "Aldo-Union", "Extendis Pharma", "Noventure", "Almeddix", "Apexfarma", "Almirall"];
const row2 = ["h.i by Kelix Bio", "Zrenie Healthcare", "MPL", "Groikan", "Pharma5", "MSLab", "Laprophan", "Amanys Pharma", "Micro Labs", "Walter Ritter", "PlanetPharma", "Cooper"];

function LogoStrip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap overflow-hidden">
      <div className={reverse ? "marquee-reverse" : "marquee"}>
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="mx-4 flex h-20 min-w-[200px] items-center justify-center rounded-xl border border-border bg-background px-8 font-display text-lg font-bold text-subtext grayscale transition-all duration-300 hover:grayscale-0 hover:text-primary hover:border-primary/40"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="label-accent">Ils nous font confiance</span>
          <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
            Des laboratoires de référence mondiale
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 space-y-6">
        <LogoStrip items={row1} />
        <LogoStrip items={row2} reverse />
      </div>
    </section>
  );
}
