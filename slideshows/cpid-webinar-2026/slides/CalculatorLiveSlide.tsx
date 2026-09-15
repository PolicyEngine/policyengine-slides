import LiveAppSlide from '@/slideshows/iariw-2026/slides/LiveAppSlide';

/** Max's live walk-through of the SPM threshold calculator. Demo values are from the
 * published package (spm-calculator 1.0.0, forecast 3d86d5c4), the artifact the app serves. */
export default function CalculatorLiveSlide() {
  return (
    <LiveAppSlide
      title="SPM threshold calculator"
      url="https://spm-calculator.vercel.app/us/spm-calculator"
      displayUrl="policyengine.org/us/spm-calculator"
      sideWidth="0.5fr"
    >
      <div className="content-card px-5 py-4">
        <p className="text-base font-semibold text-gray-800 mb-2">Walk-through</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-base text-gray-700">
          <li>Los Angeles, two adults and two children, renting, 2025: $51,944 against the national $41,701</li>
          <li>Same family in nonmetro Mississippi: $33,914</li>
          <li>Los Angeles in 2030, a conditional forecast: $61,057</li>
          <li>Every result shows its pieces and a Python snippet with the data hash</li>
        </ol>
      </div>
      <div className="content-card px-5 py-4">
        <p className="text-base text-gray-500">
          2022 to 2025 use BLS-published thresholds; 2026 to 2035 are forecasts from rolling Consumer Expenditure and American Community
          Survey windows. Open source, with a methods paper at /paper.
        </p>
      </div>
    </LiveAppSlide>
  );
}
