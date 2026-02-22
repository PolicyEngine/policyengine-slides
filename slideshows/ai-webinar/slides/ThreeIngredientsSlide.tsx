import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ThreeIngredientsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How does it work?</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center mt-16 space-y-12">
        <div className="flex justify-center items-center gap-12">
          <div style={{ backgroundColor: '#319795', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Policies</h2>
          </div>

          <div style={{ backgroundColor: '#2C7A7B', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Households</h2>
          </div>

          <div style={{ backgroundColor: '#234E52', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
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
