import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Expertise } from "@/components/site/Expertise";
import { HowWeWork } from "@/components/site/HowWeWork";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Graabel Pharma" },
      { name: "description", content: "Aires thérapeutiques, équipes médicales et méthodologie : l'expertise pharmaceutique de Graabel Pharma." },
      { property: "og:title", content: "Notre Expertise — Graabel Pharma" },
      { property: "og:description", content: "Une expertise scientifique et terrain au service des laboratoires." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      breadcrumb="Expertise"
      hero={{
        label: "Expertise",
        title: <>L'exigence scientifique, <br /><span className="text-primary">la proximité terrain</span></>,
        subtitle: "Médecins, pharmaciens et délégués médicaux : une équipe pluridisciplinaire au service de vos aires thérapeutiques prioritaires.",
      }}
    >
      <Expertise />
      <HowWeWork />
    </PageShell>
  );
}
