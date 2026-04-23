import CoverSlide from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function TitleSlide() {
  return (
    <CoverSlide
      title="PolicyEngine"
      subtitle="Open microsimulation for US tax-benefit policy analysis"
      speakers={[
        {
          ...speakers['max-ghenis'],
          title: 'Co-founder and CEO',
        },
      ]}
      event="Penn Wharton Budget Model"
      date="2026-04-23"
    />
  );
}
