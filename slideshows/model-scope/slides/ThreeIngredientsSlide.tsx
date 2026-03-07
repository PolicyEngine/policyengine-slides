import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { colors } from '@policyengine/design-system/tokens/colors';

export default function ThreeIngredientsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We combine three ingredients</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center gap-12 mt-20">
          <div style={{ backgroundColor: colors.primary[300], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Policies</h2>
          </div>

          <div style={{ backgroundColor: colors.primary[400], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Dynamics</h2>
          </div>

          <div style={{ backgroundColor: colors.primary[600], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Households</h2>
          </div>
        </div>
      </div>
    </Slide>
  );
}
