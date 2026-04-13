import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const limits = [
  {
    problem: 'Consistency',
    detail: 'Every prompt produced slightly different code patterns. No two programs looked alike.',
  },
  {
    problem: 'Reliability',
    detail: '70% error rate on complex programs. Made up tax rates, ignored edge cases, no citations.',
  },
  {
    problem: 'Throughput',
    detail: 'One program at a time. 50+ states with unique rules. We needed to parallelize.',
  },
  {
    problem: 'Verification',
    detail: 'No way to know if the output was correct without a human reading the entire statute again.',
  },
];

export default function BridgeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where one-prompt systems stopped being enough</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-5 mt-6">
        {limits.map((l) => (
          <div key={l.problem} className="border border-gray-200 rounded-xl p-6 flex items-start gap-4">
            <span className="flex-shrink-0 text-lg font-bold text-white bg-red-500 rounded-full w-9 h-9 flex items-center justify-center">
              &#10007;
            </span>
            <div>
              <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">{l.problem}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{l.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-6 rounded-xl p-6 text-white"
        style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
      >
        <p className="text-lg leading-relaxed">
          The bottleneck shifted from <strong>&ldquo;can AI do this task?&rdquo;</strong> to{' '}
          <strong>&ldquo;can AI do this task reliably, at scale, with accountability?&rdquo;</strong>{' '}
          That required a completely different approach.
        </p>
      </div>
    </Slide>
  );
}
