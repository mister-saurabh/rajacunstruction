export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-2xl`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold`}>
          <span className="h-px w-6 bg-gold" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
