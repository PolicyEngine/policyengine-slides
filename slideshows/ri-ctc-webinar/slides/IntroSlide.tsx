import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function IntroSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>What we'll cover</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <ul className="list-disc list-inside space-y-4 text-left">
            <li>Introduction to PolicyEngine</li>
            <li>How we built the Rhode Island CTC Calculator</li>
            <li>Live demonstration of the calculator, including Gov. Dan McKee's CTC proposal</li>
            <li>What's next for Rhode Island tax policy analysis</li>
            <li>Q&A</li>
          </ul>
        </SlideContent>
      </div>
    </Slide>
  );
}
