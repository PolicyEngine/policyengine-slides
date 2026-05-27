import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DataChallengeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          Building a dataset that is comprehensive and accurate
        </SlideTitle>
      </SlideHeader>

      <div className="mt-10 space-y-8">
        <p className="text-2xl text-gray-800 leading-relaxed">
          To represent every household&apos;s tax and benefit position, the
          microdata needs to be{' '}
          <span className="font-medium text-pe-teal">comprehensive</span>{' '}
          enough to cover the relevant variables and{' '}
          <span className="font-medium text-pe-teal">accurate</span> enough to
          reproduce administrative totals.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="content-card p-6">
            <div className="slide-tag mb-3">The catch</div>
            <p className="text-base text-gray-700 leading-relaxed">
              No single public survey has everything. The CPS misses capital
              gains. The SCF misses program participation. Administrative data
              is locked behind privacy walls we cannot link through.
            </p>
          </div>

          <div className="content-card p-6">
            <div className="slide-tag mb-3">Our approach since day one</div>
            <p className="text-base text-gray-700 leading-relaxed">
              Machine learning. Fuse multiple public sources statistically;
              reweight against published administrative totals. No private
              keys, no linking we are not allowed to do &mdash; just careful
              imputation and calibration.
            </p>
          </div>
        </div>

        <div className="accent-block max-w-5xl">
          <p className="text-xl text-gray-700 leading-relaxed">
            AI has accelerated both halves of this work &mdash; from
            understanding what each source actually contains, to ingesting the
            growing universe of administrative targets, to rethinking the
            whole pipeline from scratch.
          </p>
        </div>
      </div>
    </Slide>
  );
}
