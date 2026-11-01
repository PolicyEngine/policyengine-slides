import EndSlideTemplate from '@/components/layout/EndSlide';

const links = [
  { label: 'policyengine.org', url: 'https://policyengine.org' },
  { label: 'pip install policyengine-us', url: 'https://github.com/PolicyEngine/policyengine-us' },
  { label: 'max@policyengine.org', url: 'mailto:max@policyengine.org' },
];

export default function EndSlide() {
  return (
    <EndSlideTemplate
      links={links}
      qr={{
        src: '/images/appam-2026/qr-deck.png',
        caption: 'policyengine.org/slides/appam-2026',
      }}
    />
  );
}
