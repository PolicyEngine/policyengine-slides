import Slide from '@/components/core/Slide';
import SpeakerHeadshot from '@/components/media/SpeakerHeadshot';
import { speakers } from '@/lib/speakers';

export default function QuestionsSlide() {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center text-center space-y-10">
        <h1 className="font-display text-5xl font-bold text-white">Questions</h1>
        <p className="text-2xl text-white/80">Use the Q&amp;A panel, or raise a hand.</p>
        <div className="flex gap-14 mt-4">
          <SpeakerHeadshot speaker={speakers['cynthia-osborne']} size="md" showTitle={false} />
          <SpeakerHeadshot speaker={speakers['joshua-mccabe']} size="md" showTitle={false} />
          <SpeakerHeadshot speaker={speakers['david-trimmer']} size="md" showTitle={false} />
          <SpeakerHeadshot speaker={speakers['max-ghenis']} size="md" showTitle={false} />
        </div>
      </div>
    </Slide>
  );
}
