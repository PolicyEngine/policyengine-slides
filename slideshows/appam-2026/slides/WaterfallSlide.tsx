import Frame from './Frame';
import WaterfallChart, { WATERFALL_COLORS } from './WaterfallChart';
import { familyLines, modelVersion, usd } from '../content';
import styles from './deck.module.css';

const LEGEND = [
  { label: 'Adds to net resources', color: WATERFALL_COLORS.adds },
  { label: 'Subtracts', color: WATERFALL_COLORS.subtracts },
  { label: 'Earnings and net resources', color: WATERFALL_COLORS.total },
];

export default function WaterfallSlide() {
  const { detail, lines, without_subsidy: without } = familyLines;
  return (
    <Frame title={`This family ends up with ${usd(lines.net_resources)} once we compute every line together`}>
      <div className={`flex h-full flex-col ${styles.flow}`}>
        <div className="flex flex-wrap gap-x-[3vh] gap-y-[0.4vh]">
          {LEGEND.map((entry) => (
            <span key={entry.label} className="inline-flex items-center gap-[0.8vh]">
              <span className="inline-block shrink-0 rounded-sm" style={{ width: '1em', height: '1em', background: entry.color }} />
              {entry.label}
            </span>
          ))}
        </div>
        <div className={`min-h-0 flex-1 py-[0.6vh] ${styles.chart} ${styles.waterfallChart}`}>
          <WaterfallChart />
        </div>
        <p className="text-gray-700" style={{ fontSize: '0.74em' }}>
          Federal refundable credits: EITC {usd(detail.eitc)}, child tax credit {usd(detail.refundable_ctc)}. Payroll tax:
          Social Security {usd(detail.employee_social_security_tax)}, Medicare {usd(detail.employee_medicare_tax)},
          Massachusetts paid leave {usd(detail.employee_state_payroll_tax)}. State refundable credits: child and family{' '}
          {usd(detail.ma_child_and_family_credit)}, state EITC {usd(detail.ma_eitc)}. Without the subsidy, the family would
          end up with {usd(without.net_resources)}. We leave out health coverage. PolicyEngine US {modelVersion}.
        </p>
      </div>
    </Frame>
  );
}
