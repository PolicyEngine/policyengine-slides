import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function GovernanceShiftSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>From governing data to governing how AI serves the mission</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          We occupy a privileged position — open source, open data, minimal user data. That let us skip ahead to the governance questions coming for everyone.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">Data governance</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Where most orgs are today</p>
          <ul className="space-y-3 text-base text-gray-600">
            <li>What data can we share? Who has access?</li>
            <li>How do we protect sensitive information?</li>
            <li>How do we structure data for quality?</li>
          </ul>
          <p className="text-sm text-gray-400 mt-4 italic">Important, but not the whole picture.</p>
        </div>

        <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
          <h3 className="font-mono text-lg font-bold mb-2">Mission governance</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-4 opacity-80">Where CIOs can lead next</p>
          <ul className="space-y-3 text-base text-white/85">
            <li>How do we put AI resources to work toward our mission?</li>
            <li>How do we define mission precisely enough to guide AI agents?</li>
            <li>How do we build feedback loops — like performance management, but for AI?</li>
          </ul>
          <p className="text-sm text-white/50 mt-4 italic">This is the frontier CIOs can shape.</p>
        </div>
      </div>
    </Slide>
  );
}
