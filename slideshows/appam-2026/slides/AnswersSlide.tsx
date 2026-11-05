'use client';

import { isExportMode } from '@/lib/slide-url';
import AnswersChart from './AnswersChart';
import Frame from './Frame';
import { countWord, familyLines, modelAnswers, snapPath, usd } from '../content';
import styles from './deck.module.css';

export default function AnswersSlide({ buildStep }: { buildStep?: number }) {
  // The room sees the answers first, then the reveal. A PDF export and a static render show the reveal.
  const reveal = buildStep !== 1 || isExportMode(new URLSearchParams(window.location.search));
  const hidden = { visibility: reveal ? ('visible' as const) : ('hidden' as const) };
  const { detail, without_subsidy: without } = familyLines;
  const { answers, within_ten_percent: withinTen, within_one_dollar: withinOne } = modelAnswers.snap.shown;
  return (
    <Frame title="We didn’t survey experts. We surveyed AI models.">
      <div className={`flex h-full flex-col ${styles.flow}`}>
        <div className={`min-h-0 flex-1 py-[0.6vh] ${styles.chart} ${styles.answersChart}`}>
          <AnswersChart reveal={reveal} />
        </div>
        <p style={hidden}>
          PolicyEngine&rsquo;s answer comes to {snapPath(familyLines.monthly_snap)}. {countWord(withinTen)} of the {answers}{' '}
          answers came within 10%, and {countWord(withinOne).toLowerCase()} came within $1. Massachusetts pays all but{' '}
          {usd(detail.childcare_expenses)} of the {usd(without.snap_dependent_care_deduction)} bill, so the family deducts{' '}
          {usd(detail.snap_dependent_care_deduction)} for SNAP. Without the subsidy, it deducts{' '}
          {usd(without.snap_dependent_care_deduction)} and SNAP comes to {usd(without.snap)}.
        </p>
        <p className="mt-[0.6vh] text-gray-700" style={{ fontSize: '0.74em' }}>
          We asked the seven newest versions five times each on November 5, with no tools, in PolicyBench&rsquo;s format, and
          told them to assume the subsidy for all twelve months. PolicyBench grades against PolicyEngine.
        </p>
      </div>
    </Frame>
  );
}
