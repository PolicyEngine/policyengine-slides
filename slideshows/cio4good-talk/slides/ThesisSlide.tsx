import Slide from '@/components/core/Slide';

export default function ThesisSlide() {
  return (
    <Slide>
      <div className="flex flex-col justify-center items-center h-full text-center max-w-4xl mx-auto space-y-10">
        <p className="text-4xl text-gray-700 leading-snug">
          Think about why you chose your organization over a corporate
          job, a government job, another nonprofit.
        </p>
        <p className="text-4xl text-gray-800 font-semibold leading-snug">
          You&apos;re here because the mission matters to you.
        </p>
        <p className="text-3xl text-gray-500 leading-relaxed">
          Now &mdash; have you updated your ambitions to match what&apos;s
          possible?
        </p>
      </div>
    </Slide>
  );
}
