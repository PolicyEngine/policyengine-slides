import EndSlide from '@/components/layout/EndSlide';

export default function QuestionsSlide() {
  return (
    <EndSlide
      message="Thank you"
      subtitle="See you at the roundtable at 16:00"
      qr={{
        src: '/images/iariw-2026/qr-axiom.png',
        caption: 'axiom.org — browse the encoded law',
      }}
      links={[
        { label: 'axiom.org', url: 'https://axiom.org' },
        { label: 'policyengine.org/be', url: 'https://policyengine.org/be' },
        { label: 'github.com/PolicyEngine · github.com/TheAxiomFoundation', url: 'https://github.com/PolicyEngine' },
      ]}
    />
  );
}
