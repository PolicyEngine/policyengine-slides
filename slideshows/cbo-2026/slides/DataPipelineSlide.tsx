import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DataPipelineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Microdata: fused, calibrated, reproducible</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-[1fr_1.2fr] gap-12">
        <div className="space-y-6">
          <div>
            <div className="slide-tag mb-2">Sources</div>
            <p className="text-xl text-gray-800 leading-relaxed">CPS, IRS SOI, ACS, SCF, SIPP, administrative targets.</p>
          </div>
          <div>
            <div className="slide-tag mb-2">Fusion</div>
            <p className="text-xl text-gray-800 leading-relaxed">Quantile regression forests impute variables across sources.</p>
          </div>
          <div>
            <div className="slide-tag mb-2">Calibration</div>
            <p className="text-xl text-gray-800 leading-relaxed">Gradient-descent reweighting to ~7,000 administrative targets simultaneously.</p>
          </div>
          <div>
            <div className="slide-tag mb-2">Reproducibility</div>
            <p className="text-xl text-gray-800 leading-relaxed">Every published dataset is versioned and reproducible from public inputs.</p>
          </div>
        </div>

        <div className="content-card p-8">
          <h3 className="text-2xl font-bold text-pe-dark mb-4">Where AI changes this layer</h3>
          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex gap-3"><span className="text-pe-teal font-bold">·</span> Auto-generating tests against external calculators (TAXSIM, TPC, JCT scoring postmortems).</li>
            <li className="flex gap-3"><span className="text-pe-teal font-bold">·</span> Surfacing miscalibrations as administrative data updates land.</li>
            <li className="flex gap-3"><span className="text-pe-teal font-bold">·</span> Drafting validation reports across many slices in minutes, not days.</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
