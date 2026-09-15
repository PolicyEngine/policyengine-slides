import { DASHBOARD_URL, DASHBOARD_DISPLAY_URL } from '../dashboardUrl';
import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      message="Thank you"
      subtitle="The dashboard is open now. The recording and slides follow by email."
      links={[
        { label: DASHBOARD_DISPLAY_URL, url: DASHBOARD_URL },
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'hello@policyengine.org', url: 'mailto:hello@policyengine.org' },
      ]}
    />
  );
}
