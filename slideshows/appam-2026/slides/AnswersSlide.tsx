'use client';

import { isExportMode } from '@/lib/slide-url';
import AnswersChart from './AnswersChart';
import Frame from './Frame';
import { familyLines, modelAnswers, usd } from '../content';
import styles from './deck.module.css';

const WORDS = ['None', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

export default function AnswersSlide({ buildStep }: { buildStep?: number }) {
  // The room sees the answers first, then the reveal. A PDF export and a static render show the reveal.
  const reveal = buildStep !== 1 || isExportMode(new URLSearchParams(window.location.search));
  const hidden = { visibility: reveal ? ('visible' as const) : ('hidden' as const) };
  const { detail, without_subsidy: without } = familyLines;
  return (
    <Frame title="We didn’t survey experts. We surveyed AI models.">
      <div className={`flex h-full flex-col ${styles.flow}`}>
        <div className={`min-h-0 flex-1 py-[0.6vh] ${styles.chart} ${styles.answersChart}`}>
          <AnswersChart reveal={reveal} />
        </div>
        <p style={hidden}>
          {WORDS[modelAnswers.shownSnapWithinTenPercent]} of the {WORDS[modelAnswers.shownSnap.length].toLowerCase()} came
          within 10%. The subsidy cuts the bill the family pays from {usd(without.snap_dependent_care_deduction)} to{' '}
          {usd(detail.childcare_expenses)}, so SNAP&rsquo;s dependent care deduction falls with it. Without the subsidy, SNAP
          comes to {usd(without.snap)}.
        </p>
        <p className="mt-[0.6vh] text-gray-700" style={{ fontSize: '0.74em' }}>
          We asked each model once on November 5, with no tools, in PolicyBench&rsquo;s format, and told it to assume the
          family gets any child care subsidy it qualifies for. PolicyBench grades against PolicyEngine.
        </p>
      </div>
    </Frame>
  );
}
