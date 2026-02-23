import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function McKeeProposalSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Governor McKee's CTC: Key features</SlideTitle>
        </SlideHeader>

        <div className="mt-8 px-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Left column - Key features */}
            <div className="space-y-6">
              <div className="bg-pe-teal/10 p-5 rounded-lg text-center">
                <p className="text-5xl font-bold text-pe-teal">$325</p>
                <p className="text-xl text-pe-dark mt-2">per child, fully refundable</p>
              </div>

              <div className="space-y-3 text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-pe-teal text-xl">✓</span>
                  <span>Children under 19 years old</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pe-teal text-xl">✓</span>
                  <span>Phase-out begins at $261,000 AGI</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pe-teal text-xl">✓</span>
                  <span>All filing statuses eligible</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-pe-teal text-xl">✓</span>
                  <span>Replaces existing personal exemption for children</span>
                </div>
              </div>
            </div>

            {/* Right column - Quote */}
            <div className="flex items-center">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pe-teal">
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  "I'm grateful to the PolicyEngine team for building the models that helped us see clearly how different policy choices would affect Rhode Island families. That ability to test options in real time strengthened our proposal and helped us design a Child Tax Credit that will deliver more than $30 million each year to the families who need it most."
                </p>
                <p className="mt-4 text-pe-dark font-semibold">
                  — Rhode Island Governor Dan McKee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
