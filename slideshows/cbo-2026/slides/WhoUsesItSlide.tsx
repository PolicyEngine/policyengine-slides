import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const organizations: { name: string; logo: string; smaller?: boolean }[] = [
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
];

export default function WhoUsesItSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Researchers and developers build with these rules</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-5 gap-x-10 gap-y-14 w-full px-10">
        {organizations.map((org) => (
          <div
            key={org.name}
            className="flex items-center justify-center h-[90px]"
          >
            <Image
              src={org.logo}
              alt={org.name}
              width={org.smaller ? 110 : 150}
              height={85}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </Slide>
  );
}
