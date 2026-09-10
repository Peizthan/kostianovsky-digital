import { Eye, FlaskConical, Info } from "lucide-react";

export type ExampleBadgeVariant = "ejemplo" | "simulacion" | "propuesta-visual";

const variantConfig: Record<ExampleBadgeVariant, { label: string; Icon: typeof Info }> = {
  ejemplo: { label: "EJEMPLO", Icon: Info },
  simulacion: { label: "SIMULACIÓN", Icon: FlaskConical },
  "propuesta-visual": { label: "PROPUESTA VISUAL", Icon: Eye },
};

interface ExampleBadgeProps {
  variant: ExampleBadgeVariant;
  description: string;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function ExampleBadge({ variant, description, label, tone = "light", className = "" }: ExampleBadgeProps) {
  const { label: defaultLabel, Icon } = variantConfig[variant];
  const isDark = tone === "dark";

  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 ${
        isDark ? "border-amber-300/25 bg-amber-400/10" : "border-amber-300/70 bg-amber-50"
      } ${className}`}
    >
      <Icon size={14} className={`mt-0.5 shrink-0 ${isDark ? "text-amber-300" : "text-amber-700"}`} aria-hidden="true" />
      <p className={`text-xs leading-5 ${isDark ? "text-amber-100/90" : "text-amber-900"}`}>
        <span className="font-semibold uppercase tracking-[0.16em]">{label ?? defaultLabel}</span>
        {" — "}
        {description}
      </p>
    </div>
  );
}
