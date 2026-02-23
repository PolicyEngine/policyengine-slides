import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from 'next/image';

export default function ACADemoSlide2() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <SlideTitle>ACA: New York family</SlideTitle>
        </SlideHeader>

        <div className="flex flex-col items-center mt-4">
          <div className="text-lg text-gray-600 mb-4">
            Family of 3 in New York: two 40 year old parents, one 3 year old child
          </div>
          <div className="text-md text-gray-500 mb-4">
            This household receives Medicaid, CHIP, and/or PTC depending on income
          </div>
          <div className="relative w-full max-w-4xl h-[380px] bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/aca/ny-family-healthcare.png"
              alt="New York family healthcare benefits by income"
              fill
              className="object-contain"
            />
          </div>
          <a
            href="https://aca-calc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-teal-600 hover:text-teal-800 underline"
          >
            aca-calc.vercel.app
          </a>
        </div>
      </div>
    </Slide>
  );
}
