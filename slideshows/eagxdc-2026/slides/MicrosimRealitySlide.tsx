import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const institutions = [
  { acronym: 'CBO', name: 'Congressional Budget Office', what: 'Federal budget scoring' },
  { acronym: 'JCT', name: 'Joint Committee on Taxation', what: 'Tax bill revenue estimates' },
  { acronym: 'OTA', name: 'Treasury Office of Tax Analysis', what: 'Distributional tax analysis' },
  { acronym: 'TPC', name: 'Tax Policy Center', what: 'Tax policy modeling' },
  { acronym: 'ITEP', name: 'Institute on Taxation and Economic Policy', what: 'State and federal incidence' },
  { acronym: 'PWBM', name: 'Penn Wharton Budget Model', what: 'Macro-distributional analysis' },
];

export default function MicrosimRealitySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How public-finance assessment actually happens</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Microsimulation is the standard tool. Government and think-tank
          decisions about taxes, transfers, and budgets all run through these
          models.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-9">
        {institutions.map((inst) => (
          <div key={inst.acronym} className="content-card p-6">
            <div className="text-3xl font-black text-pe-teal mb-2">
              {inst.acronym}
            </div>
            <div className="text-base font-bold text-pe-dark mb-2">
              {inst.name}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{inst.what}</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-9 max-w-5xl">
        <p className="text-2xl text-gray-700 leading-relaxed">
          A microsimulation model is a representative population of households
          plus the rules of the tax-and-transfer system, run forward to score
          a policy change.
        </p>
      </div>
    </Slide>
  );
}
