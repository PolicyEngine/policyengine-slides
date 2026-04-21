import CoverSlide from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function TitleSlide() {
  return (
    <CoverSlide
      title="PolicyEngine reproducibility architecture"
      subtitle="Content-addressed provenance from raw microdata to published result"
      speakers={[speakers['max-ghenis']]}
      event="Working meeting with Lars Vilhuber, Tara Watson, John Sabelhaus"
      date="April 21, 2026"
    />
  );
}
