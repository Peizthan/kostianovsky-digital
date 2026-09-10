import { contactInfo } from "@/data/site";

const PLACEHOLDER_PREFIX = "REEMPLAZAR_";

function isValid(value: string) {
  return Boolean(value) && !value.startsWith(PLACEHOLDER_PREFIX);
}

// wa.me y tel: requieren el número sin espacios ni caracteres decorativos.
function toDialNumber(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function Footer() {
  const channels = [
    { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, external: false },
    { label: "Teléfono", value: contactInfo.phone, href: `tel:${toDialNumber(contactInfo.phone)}`, external: false },
    { label: "WhatsApp", value: contactInfo.whatsapp, href: `https://wa.me/${toDialNumber(contactInfo.whatsapp).replace("+", "")}`, external: true },
    { label: "LinkedIn", value: contactInfo.linkedin, href: contactInfo.linkedin, external: true },
    { label: "Portfolio", value: contactInfo.portfolio, href: contactInfo.portfolio, external: true },
  ].filter((channel) => isValid(channel.value));

  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-14 text-stone-300">
      <h2 className="sr-only">Contacto</h2>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl text-white">{contactInfo.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-400 md:text-sm">{contactInfo.role}</p>
          </div>

          {channels.length > 0 ? (
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="text-stone-300 underline-offset-4 transition hover:text-white hover:underline"
                >
                  {channel.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone-800 pt-6 text-xs uppercase tracking-[0.24em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Propuesta digital · Kostianovsky 2026</span>
        </div>
      </div>
    </footer>
  );
}
