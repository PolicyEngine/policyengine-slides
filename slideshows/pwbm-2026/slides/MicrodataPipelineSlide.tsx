import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stages = [
  {
    title: 'Sources',
    detail: 'CPS ASEC + IRS PUF, then ACS, SIPP, and SCF for additional variables.',
  },
  {
    title: 'Geography',
    detail: 'Households are cloned across geography, then simulated before calibration.',
  },
  {
    title: 'Calibration',
    detail: 'Unified sparse-matrix calibration across national, state, and congressional district targets.',
  },
  {
    title: 'Output',
    detail: 'A national dataset and a larger local dataset that also calibrates to congressional-district aggregates.',
  },
];

export default function MicrodataPipelineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We document the microdata pipeline alongside the rules</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[1.02fr,0.98fr] gap-8 mt-6">
        <div className="content-card overflow-hidden border border-gray-200 flex items-center justify-center bg-white">
          <Image
            src="/screenshots/pwbm-2026/model-data-pipeline.png"
            alt="PolicyEngine microdata pipeline diagram"
            width={2560}
            height={1440}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          {stages.map((stage) => (
            <div key={stage.title} className="content-card p-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="slide-tag">{stage.title}</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {stage.detail}
              </p>
            </div>
          ))}

          <div
            className="rounded-2xl px-6 py-5 text-white"
            style={{ background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-xl leading-relaxed text-white/90">
              One pipeline produces both files. The larger local dataset
              extends the same calibration to congressional-district
              aggregates.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
