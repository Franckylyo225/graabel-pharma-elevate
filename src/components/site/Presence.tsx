import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

type Country = {
  flag: string;
  country: string;
  city?: string;
  badge?: string;
  phone?: string;
  email?: string;
  soon?: boolean;
};

const countries: Country[] = [
  { flag: "🇨🇮", country: "Côte d'Ivoire", badge: "Siège", city: "Abidjan, Cocody Riviera", phone: "+225 27 22 43 17 73", email: "info@graabelpharma.com" },
  { flag: "🇹🇬", country: "Togo", city: "Lomé, Sito Avédji", phone: "+228 22 51 24 44", email: "infotogo@graabelpharma.com" },
  { flag: "🇧🇯", country: "Bénin", city: "Cotonou, Agla", phone: "+229 01 94 78 44 44" },
  { flag: "🇸🇳", country: "Sénégal", soon: true },
  { flag: "🇲🇱", country: "Mali", soon: true },
];

export function Presence() {
  return (
    <section id="presence" className="bg-[color:var(--surface-alt)] py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="label-accent">Notre présence</span>
          <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
            5 pays, une vision commune
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {countries.map((c, i) => (
            <Reveal key={c.country} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.6)]">
                <div className="text-4xl">{c.flag}</div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy group-hover:text-primary-foreground">
                  {c.country}
                </h3>
                {c.badge && (
                  <span className="mt-2 inline-block rounded-full bg-tint px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary group-hover:bg-white/15 group-hover:text-white">
                    {c.badge}
                  </span>
                )}

                {c.soon ? (
                  <p className="mt-5 text-sm font-medium text-accent group-hover:text-white">
                    Bientôt disponible
                  </p>
                ) : (
                  <div className="mt-5 space-y-2.5 text-sm text-subtext group-hover:text-white/85">
                    {c.city && (
                      <p className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{c.city}</span>
                      </p>
                    )}
                    {c.phone && (
                      <p className="flex items-start gap-2">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{c.phone}</span>
                      </p>
                    )}
                    {c.email && (
                      <p className="flex items-start gap-2">
                        <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                        <span className="break-all">{c.email}</span>
                      </p>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
