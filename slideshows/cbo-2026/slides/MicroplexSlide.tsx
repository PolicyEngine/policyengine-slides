import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const changes = [
  {
    title: 'Multi-spine, not single-spine',
    detail:
      'CPS and ACS combined as the foundation, with structured ingestion from each — rather than treating CPS as the spine and bolting everything onto it.',
  },
  {
    title: 'Automated target discovery',
    detail:
      'Agents continuously crawl agency publications for new administrative totals, structured into the canonical target format.',
  },
  {
    title: 'Promote-on-review',
    detail:
      'New targets land in a reserve queue. An analyst decides whether each becomes a live calibration target or stays as reference information.',
  },
  {
    title: 'Replicable, versioned, public',
    detail:
      'Every microplex release is reproducible end-to-end from public inputs. Calibration scores published openly, per release.',
  },
];

export default function MicroplexSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Microplex: rethinking the whole pipeline</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1fr_1.2fr] gap-8 items-start">
        <div className="space-y-5">
          <p className="text-xl text-gray-800 leading-relaxed">
            We are replacing Enhanced CPS with a new microdata paradigm we
            call <span className="font-semibold text-pe-teal">Microplex</span>.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Same imputation + calibration discipline. Different architecture
            &mdash; designed so the next decade of survey changes,
            administrative releases, and program reforms can flow through
            without rebuilding from scratch.
          </p>
          <div className="accent-block">
            <p className="text-base text-gray-700 leading-relaxed">
              AI is what makes this scope tractable. Without it, rebuilding
              the substrate at this depth would take many years of analyst
              time. With it, we can iterate releases on a quarterly cadence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {changes.map((c) => (
            <div key={c.title} className="content-card p-4">
              <h3 className="text-base font-bold text-pe-dark mb-1">
                {c.title}
              </h3>
              <p className="text-sm text-gray-700 leading-snug">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
