import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';

const CONTACTS = [
  { speaker: speakers['max-ghenis'], email: 'max@policyengine.org' },
  { speaker: speakers['pavel-makarchuk'], email: 'pavel@policyengine.org' },
  { speaker: speakers['david-trimmer'], email: 'david@policyengine.org' },
];

/** Closing slide on the cover gradient: thank you, each speaker with an email, and the TAXSIM site. */
export function ThankYouSlide() {
  return (
    <Slide isEnd>
      <div className="relative z-10 flex flex-col items-center space-y-10 text-center">
        <h1 className="font-display text-5xl font-bold text-white lg:text-6xl">Thank you</h1>

        <div className="flex items-start justify-center gap-12 lg:gap-16">
          {CONTACTS.map(({ speaker, email }) => (
            <div key={email} className="flex w-56 shrink-0 flex-col items-center">
              <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full border-2 border-white/40 lg:h-28 lg:w-28">
                <Image src={speaker.photo} alt={speaker.name} fill className="object-cover" />
              </div>
              <p className="text-xl font-semibold text-white">{speaker.name}</p>
              <a
                href={`mailto:${email}`}
                className="pointer-events-auto mt-1 font-mono text-base text-teal-200 underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </div>
          ))}
        </div>

        <p className="text-lg text-white/70">policyengine.org/us/taxsim</p>
      </div>
    </Slide>
  );
}
