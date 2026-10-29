import Slide from '@/components/core/Slide';
import SpeakerHeadshot from '@/components/media/SpeakerHeadshot';
import { CALCULATOR_DISPLAY_URL, REPO_DISPLAY_URL } from '../links';
import { WEBINAR_SPEAKERS } from '../speakers';

const links = ['policyengine.org', CALCULATOR_DISPLAY_URL, REPO_DISPLAY_URL, 'hello@policyengine.org'];

export default function QuestionsSlide() {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 pt-16">
        <h1 className="font-display text-5xl font-bold text-white">Questions</h1>
        <p className="text-2xl text-white/80">Use the Q&amp;A panel, or raise a hand.</p>
        <div className="flex gap-14">
          {WEBINAR_SPEAKERS.map((speaker) => (
            <SpeakerHeadshot key={speaker.name} speaker={speaker} size="md" showTitle={false} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-lg text-white/80">
          {links.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </div>
    </Slide>
  );
}
