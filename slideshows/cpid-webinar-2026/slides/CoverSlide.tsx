import CoverSlideTemplate from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

/** Social-post style title slide: the four faces, the date, the hook. */
export default function CoverSlide() {
  return (
    <CoverSlideTemplate
      title="The new child poverty numbers, and how state reforms would affect them"
      subtitle="Census publishes the 2025 numbers at 10 am ET. Four hours later: what they mean, live."
      contentClassName="pt-28"
      event="Live webinar"
      date="Tuesday, September 15, 2026 · 2:00 pm ET"
      speakers={[
        speakers['cynthia-osborne'],
        speakers['joshua-mccabe'],
        { ...speakers['david-trimmer'], title: 'Research Analyst, PolicyEngine' },
        { ...speakers['max-ghenis'], title: 'CEO, PolicyEngine' },
      ]}
    />
  );
}
