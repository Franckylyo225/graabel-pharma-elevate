import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Services } from "@/components/site/Services";
import { HowWeWork } from "@/components/site/HowWeWork";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Graabel Pharma" },
      { name: "description", content: "Promotion médicale, formation continue, affaires réglementaires et pharmacovigilance — toute la chaîne de valeur pharmaceutique." },
      { property: "og:title", content: "Nos Services — Graabel Pharma" },
      { property: "og:description", content: "Promotion, formation et affaires réglementaires en Afrique de l'Ouest." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      breadcrumb="Services"
      hero={{
        label: "Services",
        title: <>Une offre intégrée, <br /><span className="text-primary">de bout en bout</span></>,
        subtitle: "Nous accompagnons les laboratoires sur l'ensemble de la chaîne de valeur : enregistrement, promotion médicale, formation et pharmacovigilance.",
      }}
    >
      <Services />
      <HowWeWork />
      <CtaBand />
    </PageShell>
  );
}
