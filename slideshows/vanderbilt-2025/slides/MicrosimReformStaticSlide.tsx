import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function MicrosimReformStaticSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Let's see a microsimulation example</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center mt-12">
          <div className="space-y-2">

            <table className="text-xl border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-1"></th>
                  <th className="px-6 py-1"></th>
                  <th className="px-6 py-1 text-center font-bold text-xl">Baseline</th>
                  <th className="px-6 py-1 text-center font-bold text-xl text-green-600" colSpan={5}>Reform</th>
                </tr>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-6 py-3 text-left w-32">Gross income</th>
                  <th className="px-6 py-3 text-left w-24"># kids</th>
                  <th className="px-6 py-3 text-left bg-blue-50 w-28">Taxes</th>
                  <th className="px-6 py-3 text-left bg-green-50 w-32">Taxes Static</th>
                  <th className="px-6 py-3 text-left bg-yellow-50 opacity-0 w-32">Δ earnings</th>
                  <th className="px-6 py-3 text-left bg-green-50 opacity-0 w-36">Tax w/ behavior</th>
                  <th className="px-6 py-3 text-left bg-purple-50 opacity-0 w-24">Δ tax</th>
                  <th className="px-6 py-3 text-left bg-gray-100 opacity-0 w-24">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3">$100,000</td>
                  <td className="px-6 py-3">0</td>
                  <td className="px-6 py-3 bg-blue-50">$21,000</td>
                  <td className="px-6 py-3 bg-green-50">$20,000</td>
                  <td className="px-6 py-3 bg-yellow-50 opacity-0">+$700</td>
                  <td className="px-6 py-3 bg-green-50 opacity-0">$20,150</td>
                  <td className="px-6 py-3 bg-purple-50 opacity-0">-$850</td>
                  <td className="px-6 py-3 bg-gray-100 opacity-0">500k</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center">
              <div className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg text-xl">
                Policies
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
