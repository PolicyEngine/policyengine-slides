import Slide from '@/components/core/Slide';

function Divider({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h1 className="font-display text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-white/80 max-w-3xl">{subtitle}</p>
      </div>
    </Slide>
  );
}

export function MeasureDividerSlide() {
  return (
    <Divider
      title="Proposition 40"
      subtitle="The 2026 Billionaire Tax Act, on California's November 3 ballot"
    />
  );
}

export function EstimatesDividerSlide() {
  return (
    <Divider
      title="The two competing estimates"
      subtitle="Berkeley: about $100 billion. Hoover: a negative net present value."
    />
  );
}

export function DemoDividerSlide() {
  return (
    <Divider
      title="Demo: one model, both sets of assumptions"
      subtitle="The same people and the same data, with each disputed assumption as a setting"
    />
  );
}
