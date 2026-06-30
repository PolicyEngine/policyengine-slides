import CoverSlideTemplate from '@/components/layout/CoverSlide';

export default function CoverSlide() {
  return (
    <CoverSlideTemplate
      subtitle="Tax and benefit policy — for every family, district, and state"
      speakers={[
        {
          name: 'Max Ghenis',
          title: 'Founder & CEO, PolicyEngine',
          photo: '/headshots/max-ghenis.png',
        },
      ]}
    />
  );
}
