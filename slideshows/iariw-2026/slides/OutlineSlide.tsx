import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const sections: {
  number: string;
  mark?: { src: string; alt: string; height: number; width: number; h: number };
  markText?: string;
  detail: string;
}[] = [
  {
    number: '1',
    mark: {
      src: '/logos/axiom-foundation.svg',
      alt: 'The Axiom Foundation',
      width: 1026,
      height: 363,
      h: 44,
    },
    detail: 'The rules, executable — verified against EUROMOD in Belgium.',
  },
  {
    number: '2',
    mark: {
      src: '/logos/chronicle.png',
      alt: 'Chronicle',
      width: 732,
      height: 160,
      h: 34,
    },
    detail: 'Official statistics as source-backed facts.',
  },
  {
    number: '3',
    mark: {
      src: '/logos/microcosm.png',
      alt: 'Microcosm',
      width: 608,
      height: 84,
      h: 26,
    },
    detail: 'The world at micro level, calibrated to administrative truth.',
  },
  {
    number: '4',
    mark: {
      src: '/logos/teal.svg',
      alt: 'PolicyEngine',
      width: 350,
      height: 100,
      h: 36,
    },
    detail: 'The model that composes them — live, in the browser and in Python.',
  },
  {
    number: '5',
    mark: {
      src: '/logos/thesis-institute.png',
      alt: 'The Thesis Institute',
      width: 532,
      height: 112,
      h: 32,
    },
    detail: 'Judgment and uncertainty — open forecasts, scored against reality.',
  },
];

export default function OutlineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Five primitives, five demos</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-5 gap-4">
        {sections.map((section) => (
          <div key={section.number} className="content-card p-5 flex flex-col">
            <span className="font-mono text-3xl font-bold text-pe-teal leading-none">
              {section.number}
            </span>
            <div className="h-[64px] mt-4 flex items-center">
              {section.mark ? (
                <Image
                  src={section.mark.src}
                  alt={section.mark.alt}
                  width={section.mark.width}
                  height={section.mark.height}
                  style={{ height: `${section.mark.h}px`, width: 'auto' }}
                />
              ) : (
                <span className="font-mono text-[26px] font-semibold text-[#1c2733] lowercase">
                  {section.markText}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              {section.detail}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
