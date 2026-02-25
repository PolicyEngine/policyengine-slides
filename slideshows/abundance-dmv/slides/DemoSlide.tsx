import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

export default function DemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>policyengine.org</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-2">
        <div>
          <div className="content-card overflow-hidden">
            <Image
              src="/screenshots/pe-winners-losers.png"
              alt="PolicyEngine winners and losers analysis"
              width={800}
              height={618}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Winners and losers by income decile
          </p>
        </div>

        <div>
          <div className="content-card overflow-hidden">
            <Image
              src="/screenshots/pe-obbba-scatter.png"
              alt="PolicyEngine household-by-household scatter plot"
              width={800}
              height={618}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Household-by-household impact of the One Big Beautiful Bill Act
          </p>
        </div>
      </div>
    </Slide>
  );
}
