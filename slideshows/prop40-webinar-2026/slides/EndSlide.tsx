import EndSlideTemplate from '@/components/layout/EndSlide';
import { CALCULATOR_DISPLAY_URL, CALCULATOR_URL, OPA_DISPLAY_URL, OPA_URL, REPO_DISPLAY_URL, REPO_URL } from '../links';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      message="Thank you"
      subtitle="The calculator is open now and updates daily with Forbes data."
      links={[
        { label: CALCULATOR_DISPLAY_URL, url: CALCULATOR_URL },
        { label: REPO_DISPLAY_URL, url: REPO_URL },
        { label: OPA_DISPLAY_URL, url: OPA_URL },
        { label: 'hello@policyengine.org', url: 'mailto:hello@policyengine.org' },
      ]}
    />
  );
}
