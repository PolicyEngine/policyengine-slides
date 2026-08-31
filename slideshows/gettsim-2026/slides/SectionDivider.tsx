import Slide from '@/components/core/Slide';

interface SectionDividerProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionDivider({
  number,
  title,
  subtitle,
}: SectionDividerProps) {
  return (
    <Slide>
      <div className="h-full grid grid-cols-[0.85fr_1.15fr] gap-10 items-center pl-16 pr-12">
        <div className="flex flex-col justify-center items-start">
          <span className="font-mono text-[11rem] font-bold leading-none text-pe-teal/20">
            {number}
          </span>
          <h2 className="font-mono text-6xl font-bold text-pe-dark mt-[-1.5rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 mt-5 max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </Slide>
  );
}

export const RulesDividerSlide = () => (
  <SectionDivider
    number="1"
    title="Rules"
    subtitle="How AI encodes law — six stages of evolution — and the Axiom rules engine: statute text, machine-readable rules, and the computation graph, published together."
  />
);

export const DataDividerSlide = () => (
  <SectionDivider
    number="2"
    title="Data"
    subtitle="Microcosm — the microdata underneath the models, calibrated to what the statistical agencies publish, with every target and its error in the open."
  />
);

export const MicrosimDividerSlide = () => (
  <SectionDivider
    number="3"
    title="Microsimulation"
    subtitle="PolicyEngine — rules plus data at population scale, graded against external scorekeepers."
  />
);
