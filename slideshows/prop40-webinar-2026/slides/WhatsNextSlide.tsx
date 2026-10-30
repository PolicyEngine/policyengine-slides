import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconAdjustments,
  IconChecklist,
  IconFileText,
  IconRefresh,
  type Icon,
} from '@tabler/icons-react';
import { BALLOT_MEASURES_DISPLAY_URL, PAPER_DISPLAY_URL } from '../links';

/** Each card says what exists today and marks what is planned. Sources: the
 * working paper (draft of October 23, 2026, and its "Limitations and
 * extensions"), the daily update workflow in the calculator repo, and the
 * ballot measures dashboard (on policyengine.org since October 30). */
const items: { icon: Icon; status: string; title: string; text: string; link?: string }[] = [
  {
    icon: IconFileText,
    status: 'Draft live',
    title: 'The working paper',
    text: 'Every calculator figure in it is computed by the code from a dated snapshot. SSRN posting planned.',
    link: PAPER_DISPLAY_URL,
  },
  {
    icon: IconRefresh,
    status: 'Daily',
    title: 'Current through Election Day and after',
    text: 'Forbes data refresh every day, behind tests and a sanity check. We plan to keep the calculator updated after November 3.',
  },
  {
    icon: IconChecklist,
    status: 'Live',
    title: 'More state ballot measures',
    text: 'Our 2026 ballot measures dashboard covers seven measures in five states.',
    link: BALLOT_MEASURES_DISPLAY_URL,
  },
  {
    icon: IconAdjustments,
    status: 'Planned',
    title: 'Model extensions',
    text: "From the paper's limitations: separate Forbes values from values reported for tax, and model deferral accounts and private-business valuation.",
  },
];

export default function WhatsNextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What we are doing next</SlideTitle>
      </SlideHeader>
      <div className="-mt-2 grid grid-cols-2 gap-5">
        {items.map((item) => (
          <div key={item.title} className="content-card px-6 py-4 flex gap-5 items-start">
            <item.icon size={34} stroke={1.5} className="text-pe-teal shrink-0 mt-1" />
            <div className="min-w-0">
              <p className="inline-flex items-center rounded-full bg-pe-50 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-pe-700">
                {item.status}
              </p>
              <h3 className="mt-2 text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="mt-1 text-base text-gray-700 leading-snug">{item.text}</p>
              {item.link && (
                <p className="mt-2 font-mono text-sm text-pe-teal break-all">{item.link}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
