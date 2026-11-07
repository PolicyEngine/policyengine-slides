import Image from '@/components/core/BasePathImage';
import Frame from './Frame';
import { axiomEngineVersion, axiomRuns, usdCents } from '../content';
import styles from './deck.module.css';

const runs = [
  {
    family: `Earns ${usdCents(axiomRuns.monthlyEarnings)} a month`,
    result: `Deduction of ${usdCents(axiomRuns.deduction)} a month`,
  },
  { family: 'Ask for November 2019', result: 'Engine refuses: the encoded section starts December 2019' },
];

export default function AxiomSlide() {
  return (
    <Frame title="The Axiom Foundation encodes rules with source text and dates">
      <div className={`flex h-full flex-col justify-center gap-[2.2vh] ${styles.flow}`}>
        {/* Leaves room under the graph for the rule and the engine's runs. */}
        <figure className="m-0" style={{ maxWidth: '120vh' }}>
          <div className="content-card overflow-hidden border border-gray-200">
            <Image
              src="/images/appam-2026/axiom-3612-graph.png"
              alt="Axiom’s graph of section 3612: Total Countable Gross Earned Income and Assistance Unit Failed To Report Earned Income Timely lead to Earned Income Deduction Allowed, which joins the Earned Income Deduction Rate and Total Countable Gross Earned Income to give Earned Income Deduction"
              width={2080}
              height={584}
              loading="eager"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-[1vh] text-gray-700" style={{ fontSize: '0.8em' }}>
            Explore Axiom&rsquo;s graph of section 3612 at{' '}
            <a
              className="pointer-events-auto"
              style={{ textDecoration: 'underline' }}
              href="https://axiom.org/app?compose=us-ga:policies/dfcs/snap/3612"
            >
              axiom.org
            </a>
            . Georgia allows the deduction for a household with earned income, and applies the rate to its
            total countable gross earned income.
          </figcaption>
        </figure>
        <div className={`grid grid-cols-2 gap-[4vh] ${styles.flow}`}>
          <div>
            <p>
              For example, Congress sets SNAP&rsquo;s 20% earned income deduction, and Georgia&rsquo;s Division
              of Family and Children Services applies it in section 3612 of its SNAP manual. Axiom encodes that
              rule and records the manual&rsquo;s words beside each value: &ldquo;20% earned income
              deduction&rdquo; and &ldquo;Effective Date: December 2019.&rdquo;
            </p>
          </div>
          <div>
            <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.05em' }}>
              Axiom Rules Engine {axiomEngineVersion}, running the rule
            </h2>
            <dl className="space-y-[1.2vh]">
              {runs.map((run) => (
                <div key={run.family}>
                  <dt className="text-gray-700" style={{ fontSize: '0.88em' }}>
                    {run.family}
                  </dt>
                  <dd className="font-semibold">{run.result}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Frame>
  );
}
