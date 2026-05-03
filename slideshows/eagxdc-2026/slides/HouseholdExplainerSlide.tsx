import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { BrowserFrame, FramedPanel } from './WorkshopComponents';

const points = [
  'Expose intermediate calculations, not just final benefit amounts.',
  'Explain eligibility and marginal incentives in plain language.',
  'Let a household, analyst, or advocate ask follow-up questions.',
];

export default function HouseholdExplainerSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI also makes the calculation tree legible</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          The same stack can serve households and technical analysts because
          the model retains the underlying calculation chain.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-8 mt-7 h-[calc(100vh-320px)]">
        <BrowserFrame
          src="/screenshots/household-ai-explainer.gif"
          alt="PolicyEngine household AI explainer"
          caption="household calculation explainer"
          className="h-full"
        />

        <FramedPanel className="flex flex-col justify-center">
          <div className="text-sm uppercase tracking-[0.16em] font-bold text-gray-500 mb-7">
            Why it changes the workflow
          </div>
          <div className="space-y-6">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-pe-teal shrink-0" />
                <span className="text-2xl text-gray-700 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </FramedPanel>
      </div>
    </Slide>
  );
}
