import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

const beats = [
  {
    n: 1,
    title: "The threads you've raised",
    body: "The district grant, Social Security, SNAP payment errors, tariffs.",
  },
  {
    n: 2,
    title: "Five projects, one chain of checks",
    body: "The stack, each layer with the loop that grades it — and Axiom live.",
  },
  {
    n: 3,
    title: "The near-term picture",
    body: "The capabilities that decide how capital-taxation options score.",
  },
  { n: 4, title: "Over to you", body: "Most of the time is yours." },
];

export default function AgendaSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Today</SlideTitle>
      </SlideHeader>

      <div className="mt-8 flex flex-col gap-5 max-w-5xl">
        {beats.map((b) => (
          <div key={b.n} className="flex items-baseline gap-6">
            <span className="font-mono text-3xl font-bold text-pe-teal w-10 shrink-0 text-right">
              {b.n}
            </span>
            <div>
              <div className="text-2xl font-bold text-pe-dark">{b.title}</div>
              <div className="text-lg text-gray-600 mt-1">{b.body}</div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
