import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function IntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What we'll cover</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <ul className="list-disc list-inside space-y-4 text-left">
            <li>Introduction to PolicyEngine</li>
            <li>State tax policy modeling capabilities</li>
            <li>Analyzing state EITCs and CTCs</li>
            <li>Measuring impacts on households, budgets, poverty, and inequality</li>
            <li>Hands-on demonstration of the web app</li>
          </ul>
        </SlideContent>
      </div>
    </Slide>
  );
}
