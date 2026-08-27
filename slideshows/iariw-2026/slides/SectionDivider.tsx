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

export const AxiomDividerSlide = () => (
  <SectionDivider
    number="1"
    title="Axiom"
    subtitle="The rules, executable — how AI encodes law, and how EUROMOD keeps us honest in Belgium."
  />
);

export const ChronicleDividerSlide = () => (
  <SectionDivider
    number="2"
    title="Chronicle"
    subtitle="Official statistics as source-backed facts, with lineage to every publisher."
  />
);

export const MicrocosmDividerSlide = () => (
  <SectionDivider
    number="3"
    title="Microcosm"
    subtitle="The world at micro level — populations calibrated to administrative truth."
  />
);

export const EngineDividerSlide = () => (
  <SectionDivider
    number="4"
    title="PolicyEngine"
    subtitle="The model that composes them — in the browser, and in a few lines of Python."
  />
);

export const TogetherDividerSlide = () => (
  <SectionDivider
    number="5"
    title="Thesis"
    subtitle="Putting it together — open forecasts of public outcomes, scored against reality."
  />
);

export const LookingForwardDividerSlide = () => (
  <SectionDivider
    number="6"
    title="Looking forward"
    subtitle="If the baseline moves — and what that asks of policy analysis."
  />
);
