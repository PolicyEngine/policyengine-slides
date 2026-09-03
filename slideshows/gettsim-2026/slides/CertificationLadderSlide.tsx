import { Fragment } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconChevronRight } from '@tabler/icons-react';

const rungs = [
  {
    label: 'Encoded',
    detail: 'The program exists as executable rules.',
  },
  {
    label: 'Conformant',
    detail: 'Agrees with the reference engine, with zero unexplained mismatches.',
  },
  {
    label: 'Closed',
    detail: 'Every law-derived dependency it relies on is encoded too.',
    amber: true,
  },
  {
    label: 'Certified',
    detail: 'Conformant, exercised, closed, and executable, with zero open defects.',
    unreached: true,
  },
];

export default function CertificationLadderSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Complete is not certified</SlideTitle>
      </SlideHeader>

      <p className="text-xl text-gray-800 leading-relaxed max-w-5xl">
        Agreement with the reference engine is necessary, and nowhere
        near sufficient.
      </p>

      <div className="mt-4 flex items-stretch gap-2">
        {rungs.map((rung, i) => (
          <Fragment key={rung.label}>
            {i > 0 && (
              <div className="flex items-center shrink-0">
                <IconChevronRight size={28} className="text-gray-400" />
              </div>
            )}
            {rung.unreached ? (
              <div className="flex-1 rounded-2xl border-2 border-dashed border-gray-300 bg-white p-4">
                <h3 className="text-xl font-bold text-gray-500 mb-1">
                  {rung.label}
                </h3>
                <p className="text-base text-gray-500 leading-snug">
                  {rung.detail}
                </p>
              </div>
            ) : (
              <div
                className="flex-1 content-card p-4"
                style={
                  rung.amber
                    ? { borderLeftColor: 'var(--pe-amber)' }
                    : undefined
                }
              >
                <h3 className="text-xl font-bold text-pe-dark mb-1">
                  {rung.label}
                </h3>
                <p className="text-base text-gray-700 leading-snug">
                  {rung.detail}
                </p>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-[2.2fr_1fr] gap-8 items-stretch">
        <div className="space-y-4">
          <div
            className="content-card p-6"
            style={{ borderLeftColor: 'var(--pe-amber)' }}
          >
            <div
              className="slide-tag mb-2"
              style={{
                color: 'var(--pe-amber)',
                background:
                  'color-mix(in srgb, var(--pe-amber) 12%, transparent)',
              }}
            >
              Where Denmark stops
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Denmark&apos;s child and youth benefit matches EUROMOD on every
              case across three reference legs, and its blocker list is empty.
              Certified still reads no: dependency closure fails, with
              81 law-derived dependencies open, among them the income basis in
              personskatteloven &sect;7.
            </p>
          </div>
          <p className="text-lg text-gray-600 leading-snug">
            The US tariff schedule tells the same story: 216 million
            row-level comparisons against the Yale Budget Lab statutory panel,
            zero unexplained mismatches, and conformant still reads no with
            1.59M units open.
          </p>
        </div>

        <div className="content-card p-6 flex flex-col items-center justify-center text-center">
          <div className="stat-number">0 / 13</div>
          <p className="text-lg text-gray-700 mt-1">programs certified today</p>
          <p className="text-base text-gray-500 mt-1">10 of 13 conformant</p>
        </div>
      </div>

      <div className="accent-block mt-5 max-w-5xl">
        <p className="text-lg text-gray-800 leading-relaxed">
          Certified is computed, never set by hand, and the registry publishes
          whatever the computation says. The scoreboard grades itself honestly.
          That is the point.
        </p>
      </div>
    </Slide>
  );
}
