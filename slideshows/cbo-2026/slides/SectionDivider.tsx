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

export const ProgressDividerSlide = () => (
  <SectionDivider
    number="1"
    title="Where AI is"
    subtitle="What current models can and cannot do, and how fast the picture is moving."
  />
);

export const MicrosimDividerSlide = () => (
  <SectionDivider
    number="2"
    title="How PolicyEngine works"
    subtitle="Rules, data, and behavioral dynamics — with AI changing how each layer is built."
  />
);

export const UncertaintyDividerSlide = () => (
  <SectionDivider
    number="3"
    title="Uncertainty"
    subtitle="Parameters, model structure, and domains of validity."
  />
);

export const InfraDividerSlide = () => (
  <SectionDivider
    number="4"
    title="A community already scaling"
    subtitle="Many institutions, each adding evidence — and the bigger picture that is starting to come into view."
  />
);
