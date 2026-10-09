import { IconArrowsShuffle, IconScale, IconUsers, type Icon } from '@tabler/icons-react';
import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** Keeps the footer text clear of the deck's navigation controls. */
const FOOTER_CLEARANCE = '[&>div:last-child]:pr-64';

const pillars: { icon: Icon; color: string; title: string; items: string[] }[] = [
  {
    icon: IconScale,
    color: 'var(--pe-teal)',
    title: 'Rules',
    items: [
      'Federal income and payroll tax',
      'State income tax: all 50 states and DC',
      'CTC, EITC, SNAP, Medicaid, SSI, ACA',
      'Thousands of unit-tested parameters',
    ],
  },
  {
    icon: IconUsers,
    color: 'var(--pe-teal-dark)',
    title: 'Households',
    items: [
      'CPS and ACS survey foundation',
      'Enhanced with IRS and SCF data',
      'Calibrated to official totals',
      'Or enter any household yourself',
    ],
  },
  {
    icon: IconArrowsShuffle,
    color: 'var(--pe-dark)',
    title: 'Reforms',
    items: [
      'Change any parameter',
      'Budget cost or savings',
      'Poverty and inequality',
      'Winners and losers by group',
    ],
  },
];

/** Adapted from the cpid-webinar-2026 WhatIsPESlide. */
export function WhatIsPolicyEngineSlide() {
  return (
    <Slide className={FOOTER_CLEARANCE}>
      <SlideHeader>
        <SlideTitle>PolicyEngine: free, open-source microsimulation</SlideTitle>
      </SlideHeader>

      <div className="[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.88] [@media(max-height:740px)]:[zoom:0.78]">
      <div className="grid grid-cols-3 gap-6 mt-2">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="content-card overflow-hidden">
            <div className="text-white text-center py-4" style={{ background: pillar.color }}>
              <pillar.icon size={28} stroke={1.5} className="mx-auto mb-1" aria-hidden="true" />
              <h3 className="text-xl font-bold">{pillar.title}</h3>
            </div>
            <ul className="p-5 space-y-2">
              {pillar.items.map((item) => (
                <li key={item} className="text-base text-gray-600 leading-relaxed pl-4 relative">
                  <span
                    className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: pillar.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="content-card px-4 py-3">
            <div className="text-3xl font-extrabold tracking-tight text-pe-teal">{s.value}</div>
            <div className="text-sm text-gray-600 leading-snug mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      </div>
    </Slide>
  );
}

const stats = [
  { value: '95,000+', label: 'parameters in the US model' },
  { value: '6,000+', label: 'variables' },
  { value: '4,932', label: 'test files' },
  { value: '103', label: 'programs in the coverage registry' },
  { value: '133', label: 'contributors to the US model since 2021' },
];

/** maxWidth evens out visual weight: wide wordmarks get more room, tall marks less. */
const organizations: { name: string; logo: string; maxWidth: number; className?: string }[] = [
  { name: 'BEA', logo: '/logos/organizations/bea.png', maxWidth: 150 },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png', maxWidth: 110 },
  { name: 'University of Michigan', logo: '/logos/organizations/umich.png', maxWidth: 170 },
  { name: 'USC', logo: '/logos/organizations/usc.png', maxWidth: 70 },
  { name: 'Georgetown (Better Government Lab)', logo: '/logos/organizations/georgetown.png', maxWidth: 140 },
  { name: 'UHERO', logo: '/logos/organizations/uhero.png', maxWidth: 130 },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png', maxWidth: 160 },
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png', maxWidth: 110 },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png', maxWidth: 110 },
  { name: 'Starlight', logo: '/logos/organizations/starlight.png', maxWidth: 80 },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png', maxWidth: 150 },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png', maxWidth: 150 },
  { name: 'Brookings', logo: '/logos/organizations/brookings.svg', maxWidth: 160 },
  { name: 'AEI', logo: '/logos/organizations/aei.png', maxWidth: 110 },
  { name: 'Committee for a Responsible Federal Budget', logo: '/logos/organizations/crfb.png', maxWidth: 150, className: 'invert' },
];

const funders: { name: string; logo: string; maxWidth: number; className?: string }[] = [
  { name: 'Arnold Ventures', logo: '/logos/funders/arnold-ventures.svg', maxWidth: 170 },
  { name: 'National Science Foundation', logo: '/logos/funders/nsf.webp', maxWidth: 70 },
  { name: 'Nuffield Foundation', logo: '/logos/funders/nuffield.webp', maxWidth: 190 },
  { name: 'NEO Philanthropy', logo: '/logos/funders/neo-philanthropy.png', maxWidth: 140 },
  { name: 'Pritzker Children’s Initiative', logo: '/logos/funders/pritzker-childrens-initiative.webp', maxWidth: 190, className: '[filter:brightness(0)_saturate(100%)] opacity-80' },
];

function LogoCell({ name, logo, maxWidth, className, height }: { name: string; logo: string; maxWidth: number; className?: string; height: number }) {
  return (
    <div className="flex items-center justify-center" style={{ height }}>
      <Image
        src={logo}
        alt={name}
        width={400}
        height={200}
        className={`h-auto w-auto object-contain ${className ?? ''}`}
        style={{ maxWidth, maxHeight: height }}
      />
    </div>
  );
}

/** Users, adapted from the cpid-webinar-2026 WhoUsesItSlide, and funders from policyengine.org/us/supporters. */
export function WhoUsesPolicyEngineSlide() {
  return (
    <Slide className={FOOTER_CLEARANCE}>
      <SlideHeader>
        <SlideTitle>Who uses and funds PolicyEngine</SlideTitle>
      </SlideHeader>

      <div className="[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.88] [@media(max-height:740px)]:[zoom:0.78]">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Used by</p>
        <div className="mt-3 grid grid-cols-5 gap-x-12 gap-y-6 w-full px-10">
          {organizations.map((org) => (
            <LogoCell key={org.name} {...org} height={60} />
          ))}
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-500">Funded by</p>
        <div className="mt-3 grid grid-cols-5 gap-x-12 w-full px-10">
          {funders.map((f) => (
            <LogoCell key={f.name} {...f} height={72} />
          ))}
        </div>
        <p className="mt-5 text-base text-gray-600">
          A nonprofit, fiscally sponsored by the PSL Foundation, with support from organizations that build on the models, such as MyFriendBen.
        </p>
      </div>
    </Slide>
  );
}
