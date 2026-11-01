import Frame from './Frame';

const uses = [
  {
    title: 'Compare families',
    body: 'Net resources, effective marginal tax rates and benefit cliffs, across states and recent years.',
  },
  {
    title: 'Measure your own sample',
    body: 'Simulated eligibility and benefits for the households in your survey or administrative data.',
  },
  {
    title: 'Estimate reforms',
    body: 'Who would gain or lose if lawmakers adopted a proposed reform.',
  },
];

export default function WhatItDoesSlide() {
  return (
    <Frame title="PolicyEngine computes taxes and benefits for a family or a population">
      <div className="flex h-full flex-col justify-center gap-[4.5vh]">
        <p style={{ fontSize: '1.2em' }}>
          PolicyEngine is a nonprofit that provides free, open source software to compute the impact
          of public policy.
        </p>
        <div className="grid grid-cols-3 gap-[3vh]">
          {uses.map((use) => (
            <div key={use.title} className="content-card p-[2.4vh]">
              <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.25em' }}>
                {use.title}
              </h2>
              <p>{use.body}</p>
            </div>
          ))}
        </div>
        <p>
          The US model covers federal and state income taxes and credits, SNAP, SSI, TANF, WIC,
          school meals, child care subsidies, Medicaid and CHIP eligibility, and ACA premium tax
          credits. It includes every state income tax and the TANF and child care subsidy rules of
          all 50 states and DC.
        </p>
      </div>
    </Frame>
  );
}
