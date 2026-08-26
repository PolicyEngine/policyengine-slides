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
    subtitle="Law as executable code — what exists today, how AI encodes it, and how EUROMOD keeps us honest in Belgium."
  />
);

export const DataDividerSlide = () => (
  <SectionDivider
    number="2"
    title="Data"
    subtitle="Populations calibrated to administrative truth — and what that looks like for Belgium."
  />
);

export const LiveDividerSlide = () => (
  <SectionDivider
    number="3"
    title="Live"
    subtitle="Browse the law, run a reform, score a policy in a few lines of Python."
  />
);

export const FutureDividerSlide = () => (
  <SectionDivider
    number="4"
    title="Where this goes"
    subtitle="Conductors, uncertainty, and entering public administrations."
  />
);
