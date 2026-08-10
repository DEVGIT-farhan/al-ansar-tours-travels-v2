interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-block rounded-full border border-[#d9a441]/30 bg-[#fff8e9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-bold leading-tight text-[#102a43] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
