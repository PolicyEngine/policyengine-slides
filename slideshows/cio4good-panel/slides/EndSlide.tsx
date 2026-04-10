import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      subtitle="Happy to dig into any of this during the panel."
      links={[
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'max@policyengine.org', url: 'mailto:max@policyengine.org' },
      ]}
    />
  );
}
