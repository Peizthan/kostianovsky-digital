import { Info } from "lucide-react";

interface SimpleExplanationProps {
  term: string;
  text: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SimpleExplanation({ term, text, tone = "light", className = "" }: SimpleExplanationProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 ${
        isDark ? "border-white/15 bg-white/[0.06]" : "border-stone-200 bg-stone-50"
      } ${className}`}
    >
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          isDark ? "bg-brand-light/20 text-brand-light" : "bg-brand/10 text-brand"
        }`}
      >
        <Info size={12} aria-hidden="true" />
      </span>
      <p className={`text-sm leading-6 ${isDark ? "text-white/85" : "text-stone-700"}`}>
        <span className={`font-semibold ${isDark ? "text-white" : "text-stone-900"}`}>{term}.</span> {text}
      </p>
    </div>
  );
}
