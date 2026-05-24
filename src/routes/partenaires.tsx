import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Partners } from "@/components/site/Partners";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — Graabel Pharma" },
      { name: "description", content: "Plus de 20 laboratoires partenaires en Europe, au Maghreb, en Inde et en Afrique font confiance à Graabel Pharma." },
      { property: "og:title", content: "Nos Partenaires — Graabel Pharma" },
      { property: "og:description", content: "Les laboratoires de référence qui nous font confiance." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      breadcrumb="Partenaires"
      hero={{
        label: "Partenaires",
        title: <>Des laboratoires <br /><span className="text-primary">de référence mondiale</span></>,
        subtitle: "De l'Europe au Maghreb, de l'Inde à l'Afrique de l'Ouest, nous représentons les marques qui font avancer la santé.",
      }}
    >
      <Partners />
      <CtaBand />
    </PageShell>
  );
}
