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

export function MicrosimulationDividerSlide() {
  return (
    <Divider
      title="How PolicyEngine measures child poverty"
      subtitle="Open-source rules, calibrated microdata, and the Supplemental Poverty Measure"
    />
  );
}

export function DashboardDividerSlide() {
  return (
    <Divider
      title="The Child Poverty Impact Dashboard"
      subtitle="Configure a reform, see what it does to child poverty and budgets in any state"
    />
  );
}

export function LookingAheadDividerSlide() {
  return (
    <Divider title="What comes next" subtitle="Scope, programs, and the years ahead" />
  );
}
