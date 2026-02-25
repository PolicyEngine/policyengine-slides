import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

const organizations: { name: string; logo?: string; smaller?: boolean; textLogo?: string }[] = [
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
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Bureau of Economic Analysis', logo: '/logos/organizations/bea.png' },
  { name: 'Living Wage Calculator', logo: '/logos/organizations/living-wage-calculator.png' },
  { name: 'USC', logo: '/logos/organizations/usc.png', smaller: true },
  { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
  { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.jpg' },
];

export default function PartnersSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who uses PolicyEngine?</SlideTitle>
      </SlideHeader>

      <div className="w-full flex-1 flex items-center mt-4">
        <div className="grid grid-cols-6 gap-x-6 gap-y-14 w-full px-8">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
              style={{ height: '70px' }}
            >
              {org.logo ? (
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={org.smaller ? 80 : 110}
                  height={65}
                  className="object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="text-xs font-semibold text-gray-600 text-center leading-tight">{org.textLogo}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
