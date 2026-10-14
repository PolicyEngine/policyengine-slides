import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SectionDivider from '@/slideshows/iariw-2026/slides/SectionDivider';

// Every figure here comes from TheAxiomFoundation/rulespec-il main at
// 171f0373 (2026-10-14): the module list under il/statutes/, and the first
// case of il/statutes/composed/worker-with-children-monthly-net-pipeline.test.yaml.

const he = (text: string) => (
  <span dir="rtl" style={{ unicodeBidi: 'isolate' }}>
    {text}
  </span>
);

export const IsraelDividerSlide = () => (
  <SectionDivider
    number="IL"
    title="Israel"
    subtitle="A proof of concept: Israeli income tax and National Insurance law, encoded from the Hebrew text and tested."
  />
);

export function IsraelEncodedSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Israeli tax and benefit law as executable code</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-2 gap-8 items-start">
        <div className="content-card p-7">
          <div className="slide-tag mb-4">Encoded so far: 18 provisions</div>
          <ul className="text-xl text-gray-700 leading-relaxed space-y-3">
            <li>
              <b>Income Tax Ordinance:</b> rate brackets (§121), additional tax
              on high incomes ({he('§121ב')}), credit points (
              {he('§§33א, 34, 36, 36א')}), child credit points (§66),{' '}
              {he('§120ב')}
            </li>
            <li>
              <b>National Insurance Law:</b> child allowance (§§1, 66&ndash;68);
              employee contributions (§§334, 337, 342, 348 and the rate
              schedules {he('לוח י׳')}, {he('לוח י״א')})
            </li>
            <li>
              One composed pipeline: monthly net income for an employed parent
            </li>
          </ul>
        </div>

        <div
          className="content-card p-7"
          style={{ borderLeftColor: 'var(--pe-amber)' }}
        >
          <div className="slide-tag mb-4" style={{ color: 'var(--pe-amber)' }}>
            How each provision is built
          </div>
          <ul className="text-xl text-gray-700 leading-relaxed space-y-3">
            <li>Encoded from the Hebrew text; each rule cites its provision</li>
            <li>
              Every number is checked against the source text, and every
              module has test cases
            </li>
            <li>
              Corpus: the Income Tax Ordinance, the National Insurance Law, the
              2026 budget act and the National Health Insurance Law (1,633
              provisions)
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-base text-gray-500">
        Open source &middot; browse at{' '}
        <span className="font-mono">axiom.org/il</span>
      </p>
    </Slide>
  );
}

const rows: { label: string; value: string; total?: boolean }[] = [
  { label: 'Income tax before credits (§121), per year', value: '₪25,392' },
  {
    label: 'Credit points: resident 2, woman 0.5, travel 0.25, children 4.5 + 2',
    value: '9.25',
  },
  { label: 'Credit value: 9.25 × ₪2,904', value: '₪26,862' },
  { label: 'Income tax after credits', value: '₪0' },
  { label: 'Child allowance, per month (₪173 + ₪219)', value: '₪392' },
  {
    label: 'Monthly income after income tax and child allowance',
    value: '₪15,392',
    total: true,
  },
];

export function IsraelExampleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          A mother earning ₪15,000 a month, with children aged 2 and 8 (2026)
        </SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-2 gap-8 items-start">
        <div className="content-card p-7">
          <table className="w-full text-xl text-gray-700">
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.label}
                  className={r.total ? 'font-bold border-t-2 border-gray-800' : 'border-b border-gray-200'}
                >
                  <td className="py-2 pr-4">{r.label}</td>
                  <td className="py-2 text-right whitespace-nowrap tabular-nums">
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="content-card p-7"
          style={{ borderLeftColor: 'var(--pe-amber)' }}
        >
          <div className="slide-tag mb-4" style={{ color: 'var(--pe-amber)' }}>
            What the example shows
          </div>
          <ul className="text-xl text-gray-700 leading-relaxed space-y-3">
            <li>
              Each line is computed by an encoded provision, and the case is a
              test in the repository
            </li>
            <li>
              The pipeline has 15 such cases: fathers, minimum wage, high
              earners, a child in its birth year or turning 18, a child living
              abroad
            </li>
            <li className="text-gray-500">
              Current-year amounts (the credit-point value and the
              child-allowance basic amounts) are inputs for now, and employee
              National Insurance and health contributions are not yet
              subtracted
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}

export function IsraelNextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What a PolicyEngine model of Israel would need</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-2 gap-8 items-start">
        <div className="content-card p-7">
          <div className="slide-tag mb-4">Have</div>
          <ul className="text-xl text-gray-700 leading-relaxed space-y-3">
            <li>
              Rules as code for income tax, credit points and child allowance,
              with citations and tests
            </li>
            <li>
              Employee National Insurance contribution rules encoded; health
              insurance ({he('§14')}) in progress
            </li>
            <li>
              The PolicyEngine method from the US and UK models: household
              calculator, reform analysis, budget and distributional impacts
            </li>
          </ul>
        </div>

        <div
          className="content-card p-7"
          style={{ borderLeftColor: 'var(--pe-amber)' }}
        >
          <div className="slide-tag mb-4" style={{ color: 'var(--pe-amber)' }}>
            Need
          </div>
          <ul className="text-xl text-gray-700 leading-relaxed space-y-3">
            <li>
              <b>Household microdata:</b> Central Bureau of Statistics household
              surveys
            </li>
            <li>
              <b>Calibration</b> to National Insurance Institute and Tax
              Authority totals
            </li>
            <li>
              <b>More rules:</b> the remaining benefits and contributions, and
              current-year amounts from official publications
            </li>
            <li>
              <b>Validation</b> against the ministry&apos;s own estimates
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
