import Slide from '@/components/core/Slide';
import { IconChevronUp, IconSparkles, IconScale, IconUsers } from '@tabler/icons-react';

export default function StackTeaseSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
        {/* Something bigger — unnamed */}
        <div
          className="rounded-2xl border-2 border-dashed px-10 py-3 flex items-center gap-3"
          style={{
            borderColor: 'color-mix(in srgb, var(--pe-teal) 45%, transparent)',
            background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)',
          }}
        >
          <IconSparkles size={26} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
        </div>
        <IconChevronUp size={26} stroke={2} className="text-gray-300 my-1" />

        {/* PolicyEngine — the unifier */}
        <div
          className="w-full rounded-2xl py-4 px-6 text-center text-white"
          style={{ background: 'linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-teal-dark) 100%)' }}
        >
          <span className="text-xl font-bold">PolicyEngine</span>
          <span className="text-white/85 ml-3 text-lg">unifies them into tools anyone can run</span>
        </div>

        <div className="flex gap-28 my-1">
          <IconChevronUp size={24} stroke={2} className="text-gray-300" />
          <IconChevronUp size={24} stroke={2} className="text-gray-300" />
        </div>

        {/* Two open foundations */}
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <IconScale size={24} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
              <h3 className="text-xl font-bold text-pe-dark">Axiom</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              The rules &mdash; the law itself, as open code.
            </p>
          </div>
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <IconUsers size={24} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
              <h3 className="text-xl font-bold text-pe-dark">populace</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              The people &mdash; calibrated, open microdata.
            </p>
          </div>
        </div>

        {/* Tease */}
        <div className="text-center mt-8">
          <p className="text-2xl font-semibold text-pe-dark">
            Two open layers, unified by PolicyEngine.
          </p>
          <p className="text-lg text-gray-500 mt-2">
            They&apos;re parts of something bigger. Find me in the breakouts.
          </p>
        </div>
      </div>
    </Slide>
  );
}
