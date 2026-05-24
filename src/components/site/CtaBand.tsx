import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container-x text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-primary-foreground lg:text-5xl">
            Votre produit mérite la meilleure promotion.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
            Contactez-nous pour discuter de votre projet.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-background px-8 py-4 text-base font-semibold text-primary transition-transform duration-200 hover:scale-[1.03]"
          >
            Démarrer une collaboration
          </a>
        </Reveal>
      </div>
    </section>
  );
}
