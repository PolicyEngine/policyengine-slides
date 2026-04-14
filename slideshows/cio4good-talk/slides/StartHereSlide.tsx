import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function StartHereSlide() {
  return (
    <Slide>
      <div className="flex flex-col justify-center items-center h-full text-center max-w-4xl mx-auto space-y-10">
        <p className="text-4xl text-gray-700 leading-snug">
          You chose this organization because the mission matters to you.
        </p>
        <p className="text-4xl text-gray-800 font-semibold leading-snug">
          You now have enormous new resources to pursue it.
        </p>
        <p className="text-3xl text-gray-500 leading-relaxed">
          The question isn&apos;t whether to adopt AI. It&apos;s whether
          you&apos;re thinking big enough about what your organization
          can accomplish.
        </p>
      </div>
    </Slide>
  );
}
