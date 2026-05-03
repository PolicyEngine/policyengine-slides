import CoverSlide from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function TitleSlide() {
  return (
    <CoverSlide
      title="Harnessing AI for policy research"
      subtitle="How PolicyEngine is using AI to accelerate rigorous, transparent policy analysis"
      speakers={[
        {
          ...speakers['max-ghenis'],
          title: 'Co-founder and CEO',
        },
      ]}
      event="EAGxDC · Capitol & Congress"
      date="2026-05-03"
    />
  );
}
