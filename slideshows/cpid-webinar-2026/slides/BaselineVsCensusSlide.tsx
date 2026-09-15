import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/** Model-vs-Census validation for the PE block (Max's ask, 9/15). Figures
 * from the Build P production-slice audit against the Census 2024 state
 * child SPM print and IRS state-level credit totals. */
export default function BaselineVsCensusSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>How the model&apos;s baselines compare with Census</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <StatNumber
          value="+4.7%"
          label="Median difference, state child SPM rates"
          sublabel="Model vs. the Census 2024 state print"
        />
        <StatNumber
          value="28 of 51"
          label="States within ±25% on child SPM"
          sublabel="Across all 50 states and DC"
        />
        <StatNumber
          value="+2.4%"
          label="Median state EITC cost vs. official state figures"
          sublabel="23 of 29 states within ±25%"
        />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          Federal credits are calibrated to administrative data by state.
          The model&apos;s poverty level is held out from calibration, so the
          dashboard reports each reform as a change against its own
          baseline, and the baseline is compared with the official numbers
          as each release lands.
        </p>
      </div>
    </Slide>
  );
}
