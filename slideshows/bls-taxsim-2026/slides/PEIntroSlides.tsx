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

      <div className="accent-block mt-7">
        <p className="text-lg text-gray-700 leading-relaxed">
          Five years open source. Used by governments, Congress, researchers and benefit
          navigators, from 10 Downing Street to US statehouses.
        </p>
      </div>
    </Slide>
  );
}

const stats = [
  { value: '95,000+', label: 'parameters in the US model' },
  { value: '5,500+', label: 'variables' },
  { value: '4,693', label: 'test files' },
  { value: '103', label: 'programs in the coverage registry' },
];

const institutions = [
  { org: 'NBER', detail: 'Memorandum of understanding for an open-source TAXSIM emulator.' },
  {
    org: 'Federal Reserve Bank of Atlanta',
    detail: 'Memorandum of understanding that brings the Policy Rules Database into our validation.',
  },
  {
    org: 'No 10 Downing Street',
    detail: 'The data science team built 10ds-microsim on PolicyEngine.',
  },
];

/** Adapted from the gettsim-2026 PEOverviewSlide. */
export function PolicyEngineTodaySlide() {
  return (
    <Slide className={FOOTER_CLEARANCE}>
      <SlideHeader>
        <SlideTitle>PolicyEngine today</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-800 leading-relaxed max-w-5xl">
        Free, open-source software to compute the effect of public policy. US and UK tax-benefit
        models, with public code since June 2021 and 133 contributors to the US model.
      </p>

      <div className="mt-8 grid grid-cols-[1fr_1.1fr] gap-10 items-start">
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="content-card p-5">
              <div className="text-4xl font-extrabold tracking-tight text-pe-teal">{s.value}</div>
              <div className="text-base text-gray-600 leading-snug mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-pe-dark p-7 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-4">
            In other institutions’ hands
          </p>
          <div className="space-y-4">
            {institutions.map((c) => (
              <div key={c.org}>
                <p className="text-lg font-semibold">{c.org}</p>
                <p className="text-base leading-snug font-light text-white/80">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/** maxWidth evens out visual weight: wide wordmarks get more room, tall marks less. */
const organizations: { name: string; logo: string; maxWidth: number; className?: string }[] = [
  { name: 'NBER (TAXSIM)', logo: '/logos/organizations/nber.png', maxWidth: 200 },
  { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png', maxWidth: 200 },
  { name: 'BEA', logo: '/logos/organizations/bea.png', maxWidth: 150 },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png', maxWidth: 110 },
  { name: 'USC', logo: '/logos/organizations/usc.png', maxWidth: 70 },
  { name: 'Georgetown (Better Government Lab)', logo: '/logos/organizations/georgetown.png', maxWidth: 140 },
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

/** Adapted from the cpid-webinar-2026 WhoUsesItSlide. */
export function WhoUsesPolicyEngineSlide() {
  return (
    <Slide className={FOOTER_CLEARANCE}>
      <SlideHeader>
        <SlideTitle>Researchers and developers build with these rules</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-5 gap-x-12 gap-y-12 w-full px-10">
        {organizations.map((org) => (
          <div key={org.name} className="flex items-center justify-center h-[72px]">
            <Image
              src={org.logo}
              alt={org.name}
              width={400}
              height={200}
              className={`h-auto w-auto max-h-[72px] object-contain ${org.className ?? ''}`}
              style={{ maxWidth: org.maxWidth }}
            />
          </div>
        ))}
      </div>
    </Slide>
  );
}
