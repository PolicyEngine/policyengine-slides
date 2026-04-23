import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const cards = [
  {
    title: 'PolicyEngine TAXSIM',
    detail:
      'Open-source TAXSIM emulator with TAXSIM-35 drop-in compatibility, side-by-side comparison, and year stitching across older TAXSIM and newer PolicyEngine years.',
  },
  {
    title: 'Discrepancies route to root cause',
    detail:
      'The issue tracker separates PolicyEngine bugs, emulator-mapping bugs, and confirmed TAXSIM bugs, turning validation into a debugging workflow.',
  },
  {
    title: 'Atlanta Fed PRD',
    detail:
      'We are using PolicyEngine to validate the Atlanta Fed’s Policy Rules Database, turning benefits-side differences into specific, reviewable discrepancies.',
  },
];

export default function ValidationSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We validate against multiple external models</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          NBER TAXSIM anchors tax validation. PolicyEngine is also helping
          validate the Atlanta Fed’s Policy Rules Database.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.02fr,0.98fr] gap-8 mt-6">
        <div className="content-card overflow-hidden border border-gray-200">
          <Image
            src="/screenshots/pwbm-2026/taxsim-page.png"
            alt="PolicyEngine TAXSIM page"
            width={2560}
            height={1440}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="content-card p-6">
            <div className="flex items-center justify-between gap-6 mb-5">
              <Image
                src="/logos/organizations/nber.png"
                alt="NBER"
                width={180}
                height={80}
                className="h-14 w-auto max-w-[190px] object-contain"
              />
              <Image
                src="/logos/organizations/atlanta-fed.png"
                alt="Atlanta Fed"
                width={180}
                height={80}
                className="h-10 w-auto max-w-[170px] object-contain"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              PolicyEngine extends the TAXSIM pattern to a broader
              tax-and-benefit validation surface.
            </p>
          </div>

          {cards.map((card) => (
            <div key={card.title} className="content-card p-6">
              <h3 className="font-mono text-xl font-bold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
