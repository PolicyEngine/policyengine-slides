import { stateBaseline } from '../content';
import Frame from './Frame';

const coverage = [
  'We model child care subsidies in 46 jurisdictions through 2023, 48 in 2024, 50 in 2025 and all 51 from August 2026.',
  'We copy each parameter’s earliest value back to 2015, so validate historical runs separately.',
  'The model applies Wisconsin’s current child care schedules to earlier years.',
  `Our local-area file holds an effective sample of about ${stateBaseline.medianEffective} households with children in the median state. Its child poverty rates miss Census’s 2023 to 2025 averages by ${stateBaseline.meanCensusGap.toFixed(1)} points on average, and ${stateBaseline.beyondCensusMargin} of 51 jurisdictions fall outside Census’s margin. Bring your own microdata for state levels.`,
];

const mechanisms = [
  'Earnings enter as an input, so minimum wage and paid leave laws leave a family’s income unchanged.',
  'Hours and earnings stay fixed when a reform changes rates or benefits, unless you set a labor supply response.',
  'The Medicaid model leaves out medically needy groups other than aged, blind and disabled people, and some spenddown rules.',
  'The family here claims all it qualifies for. Population runs use the take-up flags in Populace US.',
];

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="mb-[1.5vh] font-semibold text-pe-dark" style={{ fontSize: '1.15em' }}>
        {title}
      </h2>
      <ul className="space-y-[1.8vh]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ScopeSlide() {
  return (
    <Frame title="What these results leave out">
      <div className="grid h-full grid-cols-2 content-center items-start gap-[6vh]">
        <Column title="Years and states" items={coverage} />
        <Column title="Mechanisms" items={mechanisms} />
      </div>
    </Frame>
  );
}
