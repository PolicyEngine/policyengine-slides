import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ClosingSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>To close</SlideTitle>
      </SlideHeader>

      <div className="mt-10 max-w-5xl space-y-8">
        <p className="text-3xl text-gray-900 leading-relaxed font-light">
          AI has transformed how we build economic models &mdash; and even
          our organizational mindset, spurring the creation of{' '}
          <span className="font-medium text-pe-teal">Axiom Foundation</span>{' '}
          and{' '}
          <span className="font-medium text-pe-teal">Microplex</span>.
        </p>

        <p className="text-2xl text-gray-800 leading-relaxed">
          We are especially motivated to execute quickly because we also
          anticipate dramatic economic changes that policymakers will have to
          respond to more quickly than ever.
        </p>

        <div className="accent-block">
          <p className="text-2xl text-gray-800 leading-relaxed">
            When uncertainty is high,{' '}
            <span className="font-medium text-pe-dark">strong epistemics</span>{' '}
            become more important, not less.
          </p>
        </div>

        <p className="text-2xl text-gray-800 leading-relaxed">
          It is a big challenge, and it will require the full modeling
          community. I am grateful to be part of this ecosystem with you all.
        </p>

        <p className="text-3xl text-pe-teal leading-relaxed font-medium">
          Let&apos;s help society achieve its goals together.
        </p>
      </div>
    </Slide>
  );
}
