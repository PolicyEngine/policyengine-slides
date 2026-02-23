import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DataSourcesSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Should we use tax data or surveys?</SlideTitle>
        </SlideHeader>

        <div className="mt-8 px-12">
          <div className="grid grid-cols-2 gap-12">
            {/* Tax Data Column */}
            <div>
              <div className="bg-[#319795] text-white text-center py-4 rounded-t-lg mb-6">
                <h2 className="text-3xl font-bold">IRS Tax Data</h2>
                <p className="text-lg opacity-80">(Public Use File)</p>
              </div>
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>More accurate income measurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Detailed income sources & deductions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Better for analyzing top incomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span>Misses non-filers (often low-income)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span>Limited demographics</span>
                </li>
              </ul>
            </div>

            {/* Survey Data Column */}
            <div>
              <div className="bg-[#2C7A7B] text-white text-center py-4 rounded-t-lg mb-6">
                <h2 className="text-3xl font-bold">CPS Survey Data</h2>
                <p className="text-lg opacity-80">(Current Population Survey)</p>
              </div>
              <ul className="space-y-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Captures benefit program impacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Rich demographics (race, age, geography)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Includes non-filers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span>Income underreporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span>Top incomes truncated</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-[#234E52] text-white px-8 py-4 rounded-lg text-2xl font-semibold">
              PolicyEngine uses both, with machine learning
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
