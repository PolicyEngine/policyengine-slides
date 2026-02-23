import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import Image from 'next/image';

export default function UsersSlide() {
  const organizations = [
    { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
    { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
    { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
    { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
    { name: 'Mothers Outreach Network', logo: '/logos/organizations/mothers-outreach-network.png' },
    { name: 'NBER', logo: '/logos/organizations/nber.png' },
    { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png' },
    { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
    { name: 'UBI Center', logo: '/logos/organizations/ubicenter.png' },
    { name: 'Georgetown University', logo: '/logos/organizations/georgetown.png' },
    { name: 'University of Michigan', logo: '/logos/organizations/umich.png' },
    { name: 'UHERO', logo: '/logos/organizations/uhero.png' },
    { name: 'USC', logo: '/logos/organizations/usc.png', smaller: true },
    { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
    // Benefit access API users
    { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
    { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
    { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
    { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
    { name: 'UN Digital Public Goods Alliance', logo: '/logos/organizations/dpga-official.png', isUN: true },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who uses PolicyEngine?</SlideTitle>
      </SlideHeader>

      <div className="w-full mt-4">
        <div className="grid grid-cols-5 gap-x-6 gap-y-8 w-full px-8">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className={`
                flex items-center justify-center
                ${org.isUN ? 'col-span-5' : ''}
              `}
              style={{
                height: org.isUN ? '70px' : '70px'
              }}
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={org.isUN ? 200 : (org as any).smaller ? 80 : 120}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
