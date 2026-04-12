import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ThesisSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full bg-slate-900/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-pe-teal">
              CIO4Good panel
            </span>
            <SlideTitle className="max-w-5xl text-pe-dark">
              AI is most useful when it runs against your real rules and data.
            </SlideTitle>
          </div>
        </SlideHeader>

        <div className="grid gap-8 md:grid-cols-[1.2fr,0.85fr] md:items-start">
          <div className="space-y-8 text-2xl leading-relaxed text-slate-600">
            <p>
              At PolicyEngine, we use AI to turn legislative text into working
              policy logic, simulation inputs, and reviewable analysis.
            </p>

            <div className="accent-block">
              <p className="text-2xl font-semibold leading-relaxed text-pe-dark">
                The bottleneck is rarely model access. It is whether the
                organization is legible enough for humans and machines to work
                from the same source of truth.
              </p>
            </div>
          </div>

          <div className="content-card p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What I will cover
            </p>
            <ul className="slide-list text-xl text-slate-800">
              <li>A real case study from PolicyEngine</li>
              <li>What AI actually needed from our data, documents, and workflows</li>
              <li>How to make this an operating model, not a side project</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
