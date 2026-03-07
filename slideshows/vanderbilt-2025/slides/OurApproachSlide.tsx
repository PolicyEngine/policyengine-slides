import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function OurApproachSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Our approach to each ingredient</SlideTitle>
        </SlideHeader>

        <div className="mt-8 px-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Policies Column */}
            <div>
              <div className="bg-pe-500 text-white text-center py-6 rounded-t-lg mb-6">
                <h2 className="text-4xl font-bold">Policies</h2>
              </div>
              <ul className="space-y-3 text-xl text-pe-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Federal income & payroll tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>State income tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>SNAP, Medicaid, CHIP, ACA PTC, SSI, WIC, Free & reduced price school meals, TANF & CCDF (select states)</span>
                </li>
              </ul>
            </div>

            {/* Households Column */}
            <div>
              <div className="bg-pe-600 text-white text-center py-6 rounded-t-lg mb-6">
                <h2 className="text-4xl font-bold">Households</h2>
              </div>
              <ul className="space-y-3 text-xl text-pe-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>CPS ASEC foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Integrates IRS PUF, ACS, SCF, and SIPP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Calibrates to national aggregates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>CBO-based ageing</span>
                </li>
              </ul>
            </div>

            {/* Dynamics Column */}
            <div>
              <div className="bg-pe-800 text-white text-center py-6 rounded-t-lg mb-6">
                <h2 className="text-4xl font-bold">Dynamics</h2>
              </div>
              <ul className="space-y-3 text-xl text-pe-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Labor supply elasticities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row with methodology */}
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg italic text-pe-blue-700 font-semibold">
                Legislative references & thousands of unit tests
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg italic text-pe-blue-700 font-semibold">
                Adjustable parameters with US CBO presets
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg italic text-pe-blue-700 font-semibold">
                Machine learning (QRF + GD) boosts accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
