import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Check } from "lucide-react";

const info = [
  { icon: MapPin, label: "Siège social", value: "Abidjan, Cocody Riviera — Côte d'Ivoire" },
  { icon: Phone, label: "Téléphone", value: "+225 27 22 43 17 73" },
  { icon: Mail, label: "Email", value: "info@graabelpharma.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <span className="label-accent">Contact</span>
          <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
            Discutons de votre projet
          </h2>
          <p className="mt-5 text-subtext">
            Notre équipe vous répond sous 48h ouvrées. Présentez-nous votre besoin et
            nous reviendrons vers vous avec une proposition adaptée.
          </p>

          <ul className="mt-12 space-y-6">
            {info.map((i) => (
              <li key={i.label} className="flex items-start gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tint text-primary">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-subtext">
                    {i.label}
                  </p>
                  <p className="mt-1 font-medium text-navy">{i.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-[color:var(--surface-alt)] p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom" name="name" required />
              <Field label="Société" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Pays" name="country" />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-subtext">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] disabled:bg-emerald-600"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Message envoyé
                </>
              ) : (
                "Envoyer"
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-subtext">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}
