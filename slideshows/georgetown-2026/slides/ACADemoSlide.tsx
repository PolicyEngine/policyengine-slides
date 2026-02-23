import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from 'next/image';

export default function ACADemoSlide() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <SlideTitle>ACA: Texas couple</SlideTitle>
        </SlideHeader>

        <div className="flex flex-col items-center mt-4">
          <div className="text-lg text-gray-600 mb-4">
            25 & 28 year old married couple in Austin, Texas
          </div>
          <div className="relative w-full max-w-4xl h-[420px] bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/aca/texas-couple-ptc.png"
              alt="Texas household ACA benefits by income"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
