import CodeBlock from '@/components/content/CodeBlock';
import Frame from './Frame';

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
  return (
    <Frame title="We record when each value took effect and cite its sources">
      <div className="flex h-full items-center gap-[4vh]">
        <CodeBlock title="gov/states/ma/tax/income/credits/child_and_family/amount.yaml (excerpt)" className="min-w-0 flex-[3]">
          <pre className="overflow-hidden" style={{ fontSize: 'clamp(12px, 1.95vh, 24px)' }}>
            {YAML}
          </pre>
        </CodeBlock>
        <div className="flex-[2] space-y-[3vh]" style={{ fontSize: '1.08em' }}>
          <p>
            The Massachusetts Legislature raised this credit to $310 for 2023 and $440 for 2024, and
            lifted its two-dependent cap.
          </p>
          <p>
            Read this file and the rest of our parameters at{' '}
            <a
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
