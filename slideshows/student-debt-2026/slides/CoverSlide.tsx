import CoverSlideTemplate from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function CoverSlide() {
  return (
    <CoverSlideTemplate
      title="Student debt in PolicyEngine"
      subtitle="Preliminary results"
      event="Check-in"
      date="October 7, 2026"
      contentClassName="pt-28"
      speakers={[
        { ...speakers['max-ghenis'], title: 'CEO, PolicyEngine' },
        { ...speakers['david-trimmer'], title: 'Research Analyst, PolicyEngine' },
      ]}
    />
  );
}
