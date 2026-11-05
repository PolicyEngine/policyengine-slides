import Frame from './Frame';
import styles from './deck.module.css';

const work = [
  {
    area: 'State poverty',
    body: 'We’re working on state poverty accuracy, starting with a diagnosis of why our child poverty rates differ from Census’s.',
    label: 'microcosm #1445',
    href: 'https://github.com/PolicyEngine/microcosm/pull/1445',
  },
  {
    area: 'Medicaid',
    body: 'We’re applying each state’s rule for an applicant whose spouse isn’t aged, blind or disabled.',
    label: 'policyengine-us #10640',
    href: 'https://github.com/PolicyEngine/policyengine-us/pull/10640',
  },
  {
    area: 'Heating assistance',
    body: 'We’re adding LIHEAP in five more states, including California.',
    label: 'policyengine-us #10607',
    href: 'https://github.com/PolicyEngine/policyengine-us/pull/10607',
  },
  {
    area: 'Local taxes',
    body: 'We’re placing households in Denver, Yonkers, Wilmington and Philadelphia from their geography, so their local rules apply in our microdata.',
    label: 'microcosm #1453',
    href: 'https://github.com/PolicyEngine/microcosm/pull/1453',
  },
  {
    area: 'Student loans',
    body: 'We’re imputing federal student loan balances from the 2025 SCF.',
    label: 'microcosm #1246',
    href: 'https://github.com/PolicyEngine/microcosm/pull/1246',
  },
];

export default function WorkingOnSlide() {
  return (
    <Frame title="We’re working on state poverty accuracy, Medicaid rules, heating assistance and local taxes">
      <div className={`flex h-full items-center ${styles.flow}`}>
        <dl className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-[3vh] gap-y-[2.2vh] max-[640px]:grid-cols-1">
          {work.map((item) => (
            <div key={item.area} className="contents">
              <dt className="font-semibold text-pe-dark">{item.area}</dt>
              <dd>{item.body}</dd>
              <dd>
                <a className="pointer-events-auto whitespace-nowrap" style={{ textDecoration: 'underline' }} href={item.href}>
                  {item.label}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
}
