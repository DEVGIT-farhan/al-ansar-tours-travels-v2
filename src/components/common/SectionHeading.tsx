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
        <span className="inline-block rounded-full bg-[#F4B400]/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-[#F4B400]">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-[#0B3D91] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}