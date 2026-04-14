import CoverSlide from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function TitleSlide() {
  return (
    <CoverSlide
      title="Making organizations legible to AI"
      subtitle="How open-source infrastructure turns policy rules into public goods"
      speakers={[speakers['max-ghenis']]}
      event="CIO4Good Panel"
      date="April 14, 2026"
    />
  );
}
