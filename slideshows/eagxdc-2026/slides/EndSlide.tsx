import EndSlideLayout from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideLayout
      message="Thank you"
      subtitle="Questions, or reach me at max@policyengine.org"
      links={[
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'policybench.org', url: 'https://policybench.org' },
        { label: 'axiom-foundation.org', url: 'https://axiom-foundation.org' },
        { label: 'github.com/PolicyEngine', url: 'https://github.com/PolicyEngine' },
      ]}
    />
  );
}
