import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

/** The September webinar's logo wall. Two changes from that copy: every logo
 * is capped at the row height, so tall and square marks (USC, JEC, Mirza,
 * Starlight) no longer spill into the next row, and the CRFB mark, which is
 * white, sits on a dark tile so it shows on the white slide. */
const organizations: { name: string; logo: string; smaller?: boolean; onDark?: boolean }[] = [
  { name: 'NBER (TAXSIM)', logo: '/logos/organizations/nber.png' },
  { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png' },
  { name: 'BEA', logo: '/logos/organizations/bea.png' },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
  { name: 'USC', logo: '/logos/organizations/usc.png', smaller: true },
  {
    name: 'Georgetown (Better Government Lab)',
    logo: '/logos/organizations/georgetown.png',
  },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
  { name: 'Starlight', logo: '/logos/organizations/starlight.png' },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
  { name: 'Brookings', logo: '/logos/organizations/brookings.svg' },
  { name: 'AEI', logo: '/logos/organizations/aei.png' },
  {
    name: 'Committee for a Responsible Federal Budget',
    logo: '/logos/organizations/crfb.png',
    onDark: true,
  },
];

export default function WhoUsesItSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Researchers and developers build with these rules</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-5 gap-x-10 gap-y-8 w-full px-10">
        {organizations.map((org) => (
          <div key={org.name} className="flex items-center justify-center h-[90px]">
            <div className={org.onDark ? 'rounded-xl bg-pe-dark px-5 py-4' : ''}>
              <Image
                src={org.logo}
                alt={org.name}
                width={org.smaller ? 110 : 150}
                height={80}
                className="object-contain"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: org.smaller ? 110 : 150,
                  maxHeight: org.onDark ? 48 : 80,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
