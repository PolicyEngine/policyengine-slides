import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

/**
 * Filled September 15, 2026 from "Poverty in the United States: 2025" (P60-290) and its
 * tables (table_1_opm_person, table_4_spm_person, table_8_spm_hist). This report re-bases
 * 2024 to Vintage 2025 population controls, so its 2024 figures differ slightly from
 * P60-287 and WP2026-17: official child 14.4% (10,370k), SPM child 13.5% (9,753k).
 * 2025: official child 13.4% (9,607k of 71,660k); SPM child 13.4% (9,657k of 72,080k);
 * SPM all people 13.1% (+0.1); SPM 65 and over 15.4% (+0.2).
 */
export default function WhyTodaySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>This morning at 10 am, the Census Bureau published the 2025 numbers</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <StatNumber value="13.4%" label="Official child poverty rate, 2025" sublabel="2024: 14.4%, down 1.0 pp" />
        <StatNumber value="13.4%" label="SPM child poverty rate, 2025" sublabel="2024: 13.5%, down 0.1 pp" />
        <StatNumber value="9.7M" label="Children below the SPM threshold, 2025" sublabel="2024: 9.8M" />
      </div>
      <div className="mt-8 content-card px-8 py-5">
        <p className="text-xl text-gray-700">
          Source: U.S. Census Bureau, <em>Poverty in the United States: 2025</em> (P60-290), released September 15, 2026.
          Official child poverty fell 1.0 point to 13.4%. SPM child poverty was 13.4%, down 0.1. The SPM rate for all people rose 0.1 to 13.1%, and for people 65 and over rose 0.2 to 15.4%.
        </p>
      </div>
    </Slide>
  );
}
