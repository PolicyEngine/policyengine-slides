import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      subtitle="policyengine.org · max@policyengine.org"
      links={[
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'max@policyengine.org', url: 'mailto:max@policyengine.org' },
      ]}
    />
  );
}
