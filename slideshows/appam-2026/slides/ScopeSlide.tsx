import { stateBaseline } from '../content';
import Frame from './Frame';
import styles from './deck.module.css';

const coverage = [
  'We model child care subsidies in all 51 jurisdictions from August 2026.',
  'We copy each parameter’s earliest value back to 2015, so check historical runs against each year’s rules.',
  `Our local-area file holds an effective sample of about ${stateBaseline.medianEffective} households with children in the median state. Our child poverty estimates on that file miss Census’s 2023 to 2025 averages by ${stateBaseline.meanCensusGap.toFixed(1)} points on average, and in ${stateBaseline.beyondCensusMargin} of 51 jurisdictions they fall outside Census’s margin of error. For state child poverty rates, bring your own microdata.`,
];

const mechanisms = [
  'We take earnings and paid leave benefits as inputs and hold them fixed when you change minimum wage or paid leave law.',
  'When you change rates or benefits, we hold hours and earnings fixed unless you set a labor supply response.',
  'We model medically needy Medicaid for aged, blind and disabled people, and leave out other medically needy groups and some spenddown rules.',
  'The family on slides 3 to 5 takes up every benefit it qualifies for. We apply the take-up flags in Populace US to population runs.',
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
    <Frame title="What we leave out">
      <div className={`grid h-full grid-cols-2 content-center items-start gap-[6vh] ${styles.flow}`}>
        <Column title="Years and states" items={coverage} />
        <Column title="Mechanisms" items={mechanisms} />
      </div>
    </Frame>
  );
}
