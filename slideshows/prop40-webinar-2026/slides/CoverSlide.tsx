import CoverSlideTemplate from '@/components/layout/CoverSlide';
import { WEBINAR_SPEAKERS } from '../speakers';

/** Title slide in the September webinar's style: the three faces, the date,
 * the question. October 30, 2026 is a Friday; noon Pacific is 3 pm Eastern.
 * The template capitalizes the event line, so the event rides on the date
 * line instead, in sentence case. */
export default function CoverSlide() {
  return (
    <CoverSlideTemplate
      title="Why the Prop 40 revenue estimates differ"
      subtitle="Published estimates run from about $100 billion to a negative net present value. One open model shows which assumptions make the difference."
      contentClassName="pt-28"
      event=""
      date="Live webinar · Friday, October 30, 2026 · 3:00 pm ET (noon PT)"
      speakers={WEBINAR_SPEAKERS}
    />
  );
}
