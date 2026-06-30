import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      message="Let's build."
      subtitle="Try it, partner with us, or reach out directly."
      links={[
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'hello@policyengine.org', url: 'mailto:hello@policyengine.org' },
        { label: 'max@policyengine.org', url: 'mailto:max@policyengine.org' },
      ]}
    />
  );
}
