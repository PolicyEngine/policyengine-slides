import CoverSlide from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function TitleSlide() {
  return (
    <CoverSlide
      title="Reproducing a PolicyEngine result"
      subtitle="Separating rules, calibrated microdata, and run-level citations"
      speakers={[speakers['max-ghenis']]}
      event="Working meeting with Lars Vilhuber, Tara Watson, John Sabelhaus"
      date="April 21, 2026"
    />
  );
}
