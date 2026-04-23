import Slide from '@/components/core/Slide';

interface ScopeGroup {
  label: string;
  items: string[];
}

interface SectionDividerProps {
  number: string;
  title: string;
  subtitle?: string;
  scopeGroups?: ScopeGroup[];
}

export default function SectionDivider({
  number,
  title,
  subtitle,
  scopeGroups,
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

        {scopeGroups && scopeGroups.length > 0 && (
          <div className="flex flex-col gap-5">
            {scopeGroups.map((group) => (
              <div key={group.label} className="content-card p-6">
                <div className="slide-tag mb-3">{group.label}</div>
                <div className="text-lg text-gray-700 leading-relaxed">
                  {group.items.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Slide>
  );
}

export const RulesDividerSlide = () => (
  <SectionDivider
    number="1"
    title="Rules"
    subtitle="Statutes and regulations, encoded as code."
    scopeGroups={[
      {
        label: 'Taxes',
        items: [
          'Federal income and payroll',
          'All 50 states plus DC',
          'Filing units, credits, deductions',
          'State-specific interactions',
        ],
      },
      {
        label: 'Benefits',
        items: [
          'SNAP',
          'Medicaid, CHIP, ACA PTC',
          'SSI, TANF, WIC, CCDF',
          'School meals, LIHEAP, ACP',
          'Federal, state, and local benefit cliffs',
        ],
      },
      {
        label: 'How we work',
        items: [
          'Legislative references per parameter',
          'Thousands of unit tests',
          'Live coverage tracker',
        ],
      },
    ]}
  />
);

export const DataDividerSlide = () => (
  <SectionDivider
    number="2"
    title="Data"
    subtitle="One calibrated microdata pipeline, pinned to every run."
    scopeGroups={[
      {
        label: 'Inputs',
        items: [
          'CPS ASEC',
          'IRS PUF (via SOI access)',
          'ACS, SCF, SIPP',
          'Administrative targets',
        ],
      },
      {
        label: 'Targets',
        items: [
          'National aggregates',
          'State aggregates',
          'Congressional-district aggregates',
          'CBO-based ageing',
        ],
      },
      {
        label: 'Artifacts',
        items: [
          'National calibrated file',
          'Larger local file sharded across 436 districts',
          'Release manifest pins both',
        ],
      },
    ]}
  />
);

export const TheoryDividerSlide = () => (
  <SectionDivider
    number="3"
    title="Theory"
    subtitle="Behavioral responses on top of the rules engine."
    scopeGroups={[
      {
        label: 'What users can toggle',
        items: [
          'Labor-supply elasticities (substitution and income)',
          'Capital-gains realization responses',
          'Reform-specific elasticity overrides',
        ],
      },
      {
        label: 'What we publish',
        items: [
          'Static and behavioral estimates side by side',
          'Distributional outputs under each assumption',
          'Effective marginal rates from the full rules stack',
        ],
      },
      {
        label: 'What we don’t do',
        items: [
          'No intertemporal optimization',
          'No general equilibrium',
          'No broader savings or capital response',
        ],
      },
    ]}
  />
);

export const AIDividerSlide = () => (
  <SectionDivider
    number="4"
    title="AI"
    subtitle="How we use it for scale. What we study in it. Why it expands the mission."
  />
);
