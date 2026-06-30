import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';

export default function GovernorQuoteSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="gradient-bg w-full h-full flex items-center">
        <div className="relative z-10 mx-auto flex max-w-6xl items-center gap-16 px-20">
          <div className="flex-1">
            <div className="text-8xl leading-none text-white/25 mb-1">“</div>
            <blockquote className="-mt-6 text-4xl font-medium leading-snug text-white">
              I&apos;m grateful to the PolicyEngine team for building the models that helped us see
              clearly how different policy choices would affect Rhode Island families. That ability to{' '}
              <span className="font-semibold text-pe-300">test options in real time</span> strengthened
              our proposal and helped us design a Child Tax Credit that will deliver more than $30
              million each year to the families who need it most.
            </blockquote>
          </div>

          <div className="flex w-[280px] shrink-0 flex-col items-center gap-5">
            <Image
              src="/images/dan-mckee.png"
              alt="Governor Dan McKee"
              width={220}
              height={220}
              className="rounded-full border-4 border-pe-300 object-cover shadow-2xl"
              style={{ height: 'auto' }}
            />
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">Governor Dan McKee</div>
              <div className="text-white/60">Rhode Island</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
