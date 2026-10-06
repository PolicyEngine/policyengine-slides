import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      message="Thank you"
      subtitle="Preliminary results. Questions and corrections welcome before or during the call."
      links={[
        { label: 'max@policyengine.org', url: 'mailto:max@policyengine.org' },
        { label: 'david@policyengine.org', url: 'mailto:david@policyengine.org' },
        { label: 'policyengine.org', url: 'https://policyengine.org' },
      ]}
    />
  );
}
