import DetailContent from './DetailContent';
import LiveEmbed from './LiveEmbed';
import ProcessFlow from './ProcessFlow';
import { PolicyEngineTodaySlide, WhatIsPolicyEngineSlide, WhoUsesPolicyEngineSlide } from './PEIntroSlides';
import { BenefitChains, CompareFlow, DropIn, IconCards, Partnership, QuestionsAndLinks, ResourceBars, SourcesPanel, WorkedExample } from './Visuals';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { blsSlides, type BlsSlideContent } from '../content';

const CUSTOM_SLIDES = {
  'what-is-pe': WhatIsPolicyEngineSlide,
  'pe-today': PolicyEngineTodaySlide,
  'who-uses-pe': WhoUsesPolicyEngineSlide,
} satisfies Record<NonNullable<BlsSlideContent['custom']>, () => React.JSX.Element>;

function DeckSlide({ content }: { content: BlsSlideContent }) {
  if (content.custom) {
    const Custom = CUSTOM_SLIDES[content.custom];
    return <Custom />;
  }

  if (content.cover) {
    return (
      <Slide isCover>
        <div className="text-center space-y-7 pt-20">
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
      ) : content.process ? (
        <ProcessFlow process={content.process} />
      ) : content.cards ? (
        <IconCards cards={content.cards} hero={content.hero} />
      ) : content.chains ? (
        <BenefitChains chains={content.chains} />
      ) : content.sourcesPanel ? (
        <SourcesPanel panel={content.sourcesPanel} />
      ) : content.resourceBars ? (
        <ResourceBars bars={content.resourceBars} />
      ) : content.dropIn ? (
        <DropIn dropIn={content.dropIn} />
      ) : content.partnership ? (
        <Partnership partnership={content.partnership} />
      ) : content.worked ? (
        <WorkedExample worked={content.worked} />

      ) : content.compare ? (
        <CompareFlow compare={content.compare} />
      ) : content.links ? (
        <QuestionsAndLinks questions={content.body} links={content.links} />

      ) : content.detail ? (
        <DetailContent detail={content.detail} />
      ) : (
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
      )}
    </Slide>
  );
}

export const blsSlideComponents = blsSlides.map((content) => {
  function BlsSlide() {
    return <DeckSlide content={content} />;
  }
  BlsSlide.displayName = `BlsTaxsim_${content.id}`;
  return BlsSlide;
});
