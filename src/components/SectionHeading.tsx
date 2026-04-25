interface SectionHeadingProps {
  overline: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className={`text-xs uppercase font-semibold tracking-wider ${
          light ? "text-orange-400" : "text-orange-500"
        }`}
      >
        {overline}
      </p>
      <h2
        className={`text-4xl font-bold mt-3 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg mt-4 ${
            light ? "text-white/70" : "text-gray-500"
          } ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
