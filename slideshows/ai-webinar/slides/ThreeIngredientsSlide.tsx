import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { colors } from '@policyengine/design-system/tokens/colors';

export default function ThreeIngredientsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How does it work?</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center mt-16 space-y-12">
        <div className="flex justify-center items-center gap-12">
          <div style={{ backgroundColor: colors.primary[500], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Policies</h2>
          </div>

          <div style={{ backgroundColor: colors.primary[600], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Households</h2>
          </div>

          <div style={{ backgroundColor: colors.primary[800], width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Dynamics</h2>
          </div>
        </div>

        <p className="text-3xl font-semibold text-pe-dark">
          Microsimulation combines these ingredients
        </p>
      </div>
    </Slide>
  );
}
