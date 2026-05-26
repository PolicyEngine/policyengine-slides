import CoverSlide from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function TitleSlide() {
  return (
    <CoverSlide
      title="Model-building and AI"
      subtitle="Where AI is, where it is heading, and what it could mean for federal policy modeling"
      speakers={[
        {
          ...speakers['max-ghenis'],
          title: 'Co-founder and CEO, PolicyEngine',
        },
      ]}
      event="Congressional Budget Office"
      date="2026-05-27"
    />
  );
}
