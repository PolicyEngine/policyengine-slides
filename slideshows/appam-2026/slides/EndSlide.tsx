import BasePathImage from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';

const links = [
  { label: 'policyengine.org', href: 'https://www.policyengine.org' },
  { label: 'pip install policyengine-us' },
  {
    label: 'github.com/PolicyEngine/policyengine-slides',
    href: 'https://github.com/PolicyEngine/policyengine-slides/tree/main/slideshows/appam-2026',
  },
  { label: 'max@policyengine.org', href: 'mailto:max@policyengine.org' },
];

const DECK_URL = 'policyengine.org/slides/appam-2026';

export default function EndSlide() {
  return (
    <Slide isEnd>
      <div className="flex items-center justify-center gap-20 pt-16">
        <div>
          <h1 className="font-display mb-3 text-5xl font-bold">Thank you</h1>
          <p className="mb-8 text-2xl opacity-80">Questions?</p>
          <div className="space-y-2 opacity-90">
            {links.map(({ label, href }) => (
              <p key={label} className="text-lg">
                {href ? <a href={href}>{label}</a> : label}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-lg">
            <BasePathImage alt={DECK_URL} src="/images/appam-2026/qr-deck.png" width={172} height={172} loading="eager" />
          </div>
          <p className="text-lg opacity-80">{DECK_URL}</p>
        </div>
      </div>
    </Slide>
  );
}
