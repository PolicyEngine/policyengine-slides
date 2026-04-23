import EndSlide from '@/components/layout/EndSlide';

export default function QuestionsSlide() {
  return (
    <EndSlide
      message="Discussion"
      links={[
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'policybench.org', url: 'https://policybench.org' },
        { label: 'economic-parameter-atlas.vercel.app', url: 'https://economic-parameter-atlas.vercel.app' },
      ]}
    />
  );
}
