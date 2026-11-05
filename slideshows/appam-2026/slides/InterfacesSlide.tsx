import CodeBlock from '@/components/content/CodeBlock';
import { instrument, percent } from '../content';
import Frame from './Frame';
import styles from './deck.module.css';

const PYTHON = `people = pd.read_csv("your_survey.csv")
# Name columns as PolicyEngine variables and
# drop county and finer geography.

for fips in STATE_FIPS.values():  # all 51
    people["state_fips__2024"] = fips
    data = Dataset.from_dataframe(people, 2024)
    sim = Microsimulation(dataset=data)
    snap = sim.calculate("is_snap_eligible", "2024-01")`;

const snap = instrument.lines[0].values;
const STATE_NAMES: Record<string, string> = { AR: 'Arkansas', TN: 'Tennessee', MD: 'Maryland' };

const ways = [
  {
    name: 'TAXSIM interface',
    links: [{ address: 'policyengine.org/us/taxsim', href: 'https://www.policyengine.org/us/taxsim' }],
    body: 'Runs TAXSIM-format files through PolicyEngine for tax years 2021 onward, and through TAXSIM35 for earlier years.',
  },
  {
    name: 'Web apps',
    links: [
      { address: 'app.policyengine.org/us/build', href: 'https://app.policyengine.org/us/build' },
      { address: 'policyengine.org/us/cliffwatch', href: 'https://www.policyengine.org/us/cliffwatch' },
    ],
    body: 'Build a reform and run a report, or find a household’s cliffs.',
  },
  {
    name: 'Custom interfaces',
    links: [
      {
        address: 'policyengine.org/us/child-poverty-impact-dashboard',
        href: 'https://www.policyengine.org/us/child-poverty-impact-dashboard',
      },
    ],
    body: 'For example, run child tax credit, EITC, SNAP and state tax credit reforms state by state.',
  },
  {
    name: 'Claude Code plugin',
    links: [
      { address: 'github.com/PolicyEngine/policyengine-claude', href: 'https://github.com/PolicyEngine/policyengine-claude' },
    ],
    body: 'Gives Claude Code our agents, commands and skills.',
  },
  {
    name: 'Open source',
    links: [{ address: 'github.com/PolicyEngine/policyengine-us', href: 'https://github.com/PolicyEngine/policyengine-us' }],
    body: 'Read and edit every rule and parameter.',
  },
];

export default function InterfacesSlide() {
  const low = snap[0];
  const tied = snap.filter((entry) => entry.value === low.value);
  const high = snap[snap.length - 1];
  return (
    <Frame title="You can reach the same PolicyEngine model through Python, TAXSIM, web apps and AI tools">
      <div className={`flex h-full items-center gap-[4vh] ${styles.flow}`}>
        <div className="min-w-0 flex-[5] space-y-[2vh]">
          <h2 className="font-semibold text-pe-dark" style={{ fontSize: '1.05em' }}>
            Python package: build a simulated eligibility measure on your own microdata
          </h2>
          <CodeBlock title="One run per state">
            <pre className="overflow-hidden" style={{ fontSize: 'clamp(11px, 1.75vh, 22px)' }}>
              {PYTHON}
            </pre>
          </CodeBlock>
          <p style={{ fontSize: '0.9em' }}>
            For example, we held {instrument.households.toLocaleString('en-US')} households with children fixed and changed only the
            state, under {instrument.year} rules. They pass SNAP&rsquo;s tests at rates from {percent(low.value)} in{' '}
            {tied.map((entry) => STATE_NAMES[entry.code]).join(' and ')} to {percent(high.value)} in {STATE_NAMES[high.code]}.
          </p>
        </div>
        <dl className="min-w-0 flex-[4] space-y-[1vh]" style={{ fontSize: '0.86em' }}>
          {ways.map((way) => (
            <div key={way.name}>
              <dt className="font-semibold text-pe-dark">{way.name}</dt>
              <dd>
                {way.links.map((link, i) => (
                  <span key={link.address}>
                    {i > 0 && ', '}
                    <a className="pointer-events-auto" style={{ textDecoration: 'underline' }} href={link.href}>
                      {link.address}
                    </a>
                  </span>
                ))}
                <p>{way.body}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
}
