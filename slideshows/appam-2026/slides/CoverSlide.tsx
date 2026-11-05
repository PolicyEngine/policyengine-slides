import CoverSlideTemplate from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';
import styles from './deck.module.css';

export default function CoverSlide() {
  return (
    <div className={styles.title}>
      <CoverSlideTemplate
        subtitle="State policy impacts on family resources: tools to improve policy analysis"
        speakers={[{ ...speakers['max-ghenis'], title: 'PolicyEngine' }]}
        event="APPAM 2026, Boston"
        contentClassName={`pt-16 ${styles.cover}`}
      />
    </div>
  );
}
