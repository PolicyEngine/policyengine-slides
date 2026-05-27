import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const organizations: { name: string; logo: string; smaller?: boolean }[] = [
  { name: 'Brookings', logo: '/logos/organizations/brookings.svg' },
  { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
  { name: 'CRFB', logo: '/logos/organizations/crfb.png' },
  { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
  { name: 'University of Michigan', logo: '/logos/organizations/umich.png' },
  { name: 'UHERO', logo: '/logos/organizations/uhero.png' },
  { name: 'Living Wage Calculator', logo: '/logos/organizations/living-wage-calculator.png' },
  { name: 'UBI Center', logo: '/logos/organizations/ubicenter.png' },
  { name: "Mothers Outreach Network", logo: '/logos/organizations/mothers-outreach-network.png' },
  { name: 'FGA', logo: '/logos/organizations/fga.png' },
];

export default function AnalysisLogosSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Researchers and policy analysts use it directly</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-5 gap-x-8 gap-y-12 w-full px-8">
        {organizations.map((org) => (
          <div
            key={org.name}
            className="flex items-center justify-center h-[80px]"
          >
            <Image
              src={org.logo}
              alt={org.name}
              width={org.smaller ? 90 : 120}
              height={75}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </Slide>
  );
}
