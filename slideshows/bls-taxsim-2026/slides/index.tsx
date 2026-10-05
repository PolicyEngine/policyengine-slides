import DetailContent from './DetailContent';
import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { blsSlides, type BlsSlideContent } from '../content';

function DraftSlide({ content }: { content: BlsSlideContent }) {
  if (content.cover) {
    return (
      <Slide isCover>
        <div className="text-center space-y-7 pt-20">
          <p className="text-lg uppercase tracking-widest text-white/70">BLS seminar draft</p>
          <h1 className="font-display text-5xl font-bold text-white leading-tight">{content.title}</h1>
          <p className="text-2xl text-white/90">{content.body[0]}</p>
          <p className="text-xl text-white/80">{content.body[1]}</p>
          <p className="text-lg text-white/70">{content.body[2]}</p>
        </div>
      </Slide>
    );
  }

  return (
    <Slide className="[&>div:last-child]:pr-64">
      <SlideHeader>
        <SlideTitle>{content.title}</SlideTitle>
      </SlideHeader>
      {content.detail ? (
        <DetailContent detail={content.detail} />
      ) : content.image ? (
        <div className="flex flex-col items-center gap-3">
          <Image
            src={content.image}
            alt="PolicyEngine TAXSIM website, reused from the PWBM presentation"
            width={2560}
            height={1440}
            className="w-auto max-w-full max-h-[44vh] object-contain"
          />
          <a
            href="https://policyengine.org/us/taxsim"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto text-lg text-pe-teal underline underline-offset-4"
          >
            Open the TAXSIM emulator
          </a>
        </div>
      ) : (
        <ol className={content.descriptions ? "space-y-2 mt-6 max-w-6xl" : "space-y-6 mt-8 max-w-6xl"}>
          {content.body.map((item, index) => (
            <li key={item} className="flex items-start gap-7 text-2xl leading-relaxed text-pe-dark">
              <span className="font-mono text-pe-teal font-bold shrink-0 w-10" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className={content.descriptions ? 'text-xl font-semibold' : ''}>{item}</p>
                {content.descriptions?.[index] && (
                  <p className="mt-1 text-lg leading-snug text-gray-600">{content.descriptions[index]}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </Slide>
  );
}

export const blsSlideComponents = blsSlides.map((content) => {
  function BlsSlide() {
    return <DraftSlide content={content} />;
  }
  BlsSlide.displayName = `BlsTaxsim_${content.id}`;
  return BlsSlide;
});
