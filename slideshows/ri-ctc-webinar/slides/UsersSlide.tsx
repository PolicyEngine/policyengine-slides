import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import Image from 'next/image';

export default function UsersSlide() {
  const organizations = [
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
    { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
    { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
    { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
    { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
    { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
    { name: 'UN Digital Public Goods Alliance', logo: '/logos/organizations/dpga-official.png' },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who uses PolicyEngine?</SlideTitle>
      </SlideHeader>

      <div className="w-full mt-2">
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 w-full px-8">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
              style={{ height: '60px' }}
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={100}
                height={55}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
