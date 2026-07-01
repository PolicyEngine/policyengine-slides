import Slide from '@/components/core/Slide';
import BasePathImage from '@/components/core/BasePathImage';

interface EndSlideProps {
  message?: string;
  subtitle?: string;
  links?: { label: string; url: string }[];
  /** Optional QR code shown on a white card (e.g. a link to the paper). */
  qr?: { src: string; caption?: string };
}

export default function EndSlide({
  message = 'Thank you',
  subtitle = 'Questions?',
  links = [
    { label: 'policyengine.org', url: 'https://policyengine.org' },
    { label: 'github.com/PolicyEngine', url: 'https://github.com/PolicyEngine' },
  ],
  qr,
}: EndSlideProps) {
  return (
    <Slide isEnd>
      <h1 className="font-display text-5xl font-bold mb-4 text-center">
        {message}
      </h1>

      <p className="text-2xl opacity-80 mb-8 text-center">
        {subtitle}
      </p>

      {qr && (
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-lg">
            <BasePathImage
              alt={qr.caption ?? 'QR code'}
              src={qr.src}
              width={172}
              height={172}
            />
          </div>
          {qr.caption && <p className="text-lg opacity-80">{qr.caption}</p>}
        </div>
      )}

      <div className="opacity-70 text-center space-y-2">
        {links.map((link, i) => (
          <p key={i} className="text-lg">{link.label}</p>
        ))}
      </div>
    </Slide>
  );
}
