import Slide from '@/components/core/Slide';

const openings = [
  'A calculator in every campaign, town hall, and constituent inbox',
  'District-by-district accountability after every vote',
  'Policy designed, polled, and refined in days',
];

export default function OpportunitySlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="gradient-bg w-full h-full flex items-center">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-20">
          <h1 className="font-display text-6xl font-bold leading-tight text-white mb-6">
            Where this is headed
          </h1>
          <p className="text-2xl leading-snug text-white/75 mb-10">
            PolicyEngine builds the credible, nonpartisan engine — on a shoestring, with no comms team.
            The interfaces and the reach on top are still mostly unbuilt.
          </p>

          <div className="space-y-4">
            {openings.map((o) => (
              <div key={o} className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-pe-300" />
                <div className="text-2xl text-white">{o}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-2xl font-semibold text-pe-300">
            That part takes imagination — and partners like you.
          </p>
        </div>
      </div>
    </Slide>
  );
}
