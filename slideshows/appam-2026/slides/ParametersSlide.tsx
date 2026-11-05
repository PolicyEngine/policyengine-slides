import CodeBlock from '@/components/content/CodeBlock';
import Frame from './Frame';
import { familyLines, massachusetts, usd } from '../content';
import styles from './deck.module.css';

const YAML = `description: Massachusetts provides this amount for each
  dependent in its child and family tax credit.
values:
  2021-01-01: 180
  2023-01-01: 310
  2024-01-01: 440
metadata:
  reference:
    - title: Form 1 2023 Massachusetts Resident Income
        Tax (line 46)
      href: https://www.mass.gov/doc/2023-form-1-instructions/...
    - title: Massachusetts Session Laws Chapter 50 of the
        Acts of 2023 Sections 21, 22, 45 and 49
      href: https://malegislature.gov/Laws/SessionLaws/...`;

export default function ParametersSlide() {
  const { doubled_credit: doubled, lines } = familyLines;
  const rows = [
    { label: `Credit today, two dependents at $${massachusetts.current}`, value: usd(familyLines.detail.ma_child_and_family_credit) },
    { label: `Credit at $${massachusetts.reformed} per dependent`, value: usd(doubled.ma_child_and_family_credit) },
    { label: 'Net resources today', value: usd(lines.net_resources) },
    { label: 'Net resources with the doubled credit', value: usd(doubled.lines.net_resources) },
  ];
  return (
    <Frame title={`Doubling the Massachusetts child and family credit would give this family ${usd(doubled.lines.net_resources - lines.net_resources)} more`}>
      <div className={`flex h-full items-center gap-[4vh] ${styles.flow}`}>
        <CodeBlock title="gov/states/ma/tax/income/credits/child_and_family/amount.yaml (excerpt)" className="min-w-0 flex-[3]">
          <pre className="overflow-hidden" style={{ fontSize: 'clamp(12px, 1.95vh, 24px)' }}>
            {YAML}
          </pre>
        </CodeBlock>
        <div className="min-w-0 flex-[2] space-y-[2.4vh]">
          <p>
            We record when each value took effect and cite its sources. The Massachusetts Legislature raised this credit
            to $310 for 2023 and $440 for 2024, and lifted its two-dependent cap.
          </p>
          <dl>
            {rows.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-[0.6vh]">
                <dt>{row.label}</dt>
                <dd className="whitespace-nowrap font-semibold tabular-nums">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            Read this file and the rest of our parameters at{' '}
            <a
              className="pointer-events-auto"
              style={{ textDecoration: 'underline' }}
              href="https://github.com/PolicyEngine/policyengine-us/blob/main/policyengine_us/parameters/gov/states/ma/tax/income/credits/child_and_family/amount.yaml"
            >
              github.com/PolicyEngine/policyengine-us
            </a>
            .
          </p>
        </div>
      </div>
    </Frame>
  );
}
