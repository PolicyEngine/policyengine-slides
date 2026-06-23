import Slide from "@/components/core/Slide";

function SectionDivider({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center max-w-5xl">
        <span
          className="font-display text-[10rem] font-bold leading-none"
          style={{ color: "var(--pe-teal)", opacity: 0.15 }}
        >
          {number}
        </span>
        <h2 className="font-display text-6xl font-bold text-pe-dark mt-[-0.75rem] leading-tight tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-2xl text-gray-500 mt-5 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </Slide>
  );
}

export const TodayDividerSlide = () => (
  <SectionDivider number="1" title="Policy analysis today" />
);

export const DeterministicDividerSlide = () => (
  <SectionDivider
    number="2"
    title="A future for deterministic policy analysis"
    subtitle="Rules as code"
  />
);

export const PredictiveDividerSlide = () => (
  <SectionDivider number="3" title="A future for predictive policy analysis" />
);
