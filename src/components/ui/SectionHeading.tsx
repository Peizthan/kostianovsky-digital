interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const isDark = tone === "dark";

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] ${isDark ? "text-brand-light" : "text-muted"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-4xl leading-none md:text-5xl xl:text-6xl ${isDark ? "text-white" : "text-stone-900"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 md:text-lg ${isDark ? "text-white/80" : "text-stone-600"}`}>{description}</p>
      ) : null}
    </div>
  );
}
