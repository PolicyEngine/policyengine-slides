import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';
import { IconFileText, IconChartBar, IconUsers, IconRefresh, IconArrowRight } from '@tabler/icons-react';

const stages = [
  { icon: IconFileText, label: 'Encode' },
  { icon: IconChartBar, label: 'Score' },
  { icon: IconUsers, label: 'Implement' },
  { icon: IconRefresh, label: 'Evaluate' },
];

const statuteText = `(a) In general.\u2014 There is hereby
imposed a tax equal to 3.8 percent
of the lesser of net investment
income or modified AGI in excess
of the threshold amount.`;

const racCode = `niit_rate:
    from 2013-01-01: 0.038

niit:
    entity: TaxUnit
    from 2013-01-01:
        niit_rate * min(nii, excess_magi)`;

export default function FutureSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI enables a new paradigm of encoding</SlideTitle>
      </SlideHeader>

      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
        AI amplifies the need to encode our rules so policymakers can simulate change, respond in real time, and design policies that produce the outcomes we all want.
      </p>

      {/* Statute → AutoRAC → .rac diagram */}
      <div className="flex items-stretch gap-0 w-full max-w-4xl mx-auto mb-5">
        {/* Statute panel */}
        <div className="flex-1 rounded-l-xl overflow-hidden border border-gray-200 bg-gray-50">
          <div className="px-3 py-1.5 bg-gray-100 border-b border-gray-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-xs font-mono text-gray-500">26 USC § 1411(a)</span>
          </div>
          <pre className="p-3 text-xs font-mono text-gray-600 leading-relaxed whitespace-pre-wrap">{statuteText}</pre>
        </div>

        {/* AutoRAC arrow */}
        <div className="flex flex-col items-center justify-center px-4 gap-1">
          <IconArrowRight size={28} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          <span className="text-xs font-bold tracking-wide" style={{ color: 'var(--pe-teal)' }}>AutoRAC</span>
        </div>

        {/* .rac panel */}
        <div className="flex-1 rounded-r-xl overflow-hidden border border-blue-200 bg-blue-50">
          <div className="px-3 py-1.5 bg-blue-100 border-b border-blue-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-mono text-blue-500">statute/26/1411/a.rac</span>
          </div>
          <pre className="p-3 text-xs font-mono text-blue-800 leading-relaxed whitespace-pre-wrap">{racCode}</pre>
        </div>
      </div>

      {/* Cycle: Encode → Score → Implement → Evaluate */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="content-card flex items-center gap-1.5 px-4 py-2">
              <stage.icon size={18} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
              <span className="text-sm font-semibold text-pe-dark">{stage.label}</span>
            </div>
            {i < stages.length - 1 && (
              <span className="text-gray-300 text-lg">&rarr;</span>
            )}
          </div>
        ))}
        <span className="text-gray-300 text-lg">&rarr;</span>
        <span className="text-gray-400 text-xs italic">cycle repeats</span>
      </div>

      {/* RF logo */}
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/logos/rules-foundation.svg"
          alt="Rules Foundation"
          width={130}
          height={34}
          className="object-contain"
        />
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Open infrastructure for this cycle &mdash; a virtuous loop for the public good.
        </p>
      </div>
    </Slide>
  );
}
