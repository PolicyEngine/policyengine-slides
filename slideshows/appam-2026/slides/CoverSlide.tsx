import CoverSlideTemplate from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

export default function CoverSlide() {
  return (
    <CoverSlideTemplate
      subtitle="State policy impacts on family resources: tools to improve policy analysis"
      speakers={[{ ...speakers['max-ghenis'], title: 'PolicyEngine' }]}
      event="APPAM 2026, Boston"
      contentClassName="pt-16"
    />
  );
}
