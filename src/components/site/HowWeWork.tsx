import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Déploiement structuré", desc: "Mise en place et organisation des équipes terrain." },
  { n: "02", title: "Animation scientifique", desc: "Promotion médicale et animation auprès du corps médical." },
  { n: "03", title: "Encadrement opérationnel", desc: "Pilotage commercial et suivi des indicateurs clés." },
  { n: "04", title: "Gouvernance groupe", desc: "Supervision et reporting depuis le siège d'Abidjan." },
];

export function HowWeWork() {
  return (
    <section className="bg-[color:var(--surface-alt)] py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="label-accent">Méthodes de travail</span>
          <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
            Une approche terrain, structurée et performante
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <li className="relative">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold ring-8 ring-[color:var(--surface-alt)]">
                    {s.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-subtext">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
