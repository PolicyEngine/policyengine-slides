import DetailContent from './DetailContent';
import LiveEmbed from './LiveEmbed';
import ScreenshotContent from './ScreenshotContent';
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
        <div className="flex items-baseline justify-between gap-8">
          <SlideTitle>{content.title}</SlideTitle>
          {content.headerLink && (
            <a
              href={content.headerLink.url}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto shrink-0 font-mono text-lg text-pe-teal underline-offset-4 hover:underline"
            >
              {content.headerLink.label}
            </a>
          )}
        </div>
      </SlideHeader>
      {content.embed ? (
        <LiveEmbed title={content.title} embed={content.embed} />
      ) : content.screenshot ? (
        <ScreenshotContent screenshot={content.screenshot} />
      ) : content.detail ? (
        <DetailContent detail={content.detail} />
      ) : (
        <>
          <ol className={content.descriptions ? "space-y-2 mt-6 max-w-6xl" : "space-y-6 mt-8 max-w-6xl"}>
            {content.body.map((item, index) => (
              <li key={item} className={`flex items-start gap-7 text-pe-dark ${content.descriptions ? 'text-xl leading-snug' : 'text-2xl leading-relaxed'}`}>
                <span className="font-mono text-pe-teal font-bold shrink-0 w-10" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className={content.descriptions ? 'text-lg font-semibold leading-snug' : ''}>{item}</p>
                  {content.descriptions?.[index] && (
                    <p className="text-base leading-snug text-gray-600">{content.descriptions[index]}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
          {content.links && (
            <div className="mt-10 flex flex-wrap gap-3">
              {content.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto rounded-lg border border-pe-teal/40 bg-pe-teal/5 px-4 py-2 font-mono text-base text-pe-teal hover:bg-pe-teal/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </>
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
