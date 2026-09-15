import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SpeakerHeadshot from '@/components/media/SpeakerHeadshot';
import { speakers } from '@/lib/speakers';
import { SpeakerInfo } from '@/lib/types';

function RemarksSlide({ speaker, prompt }: { speaker: SpeakerInfo; prompt: string }) {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>Remarks: {speaker.name}</SlideTitle>
      </SlideHeader>
      <div className="mt-10 grid grid-cols-[260px_1fr] items-center gap-12">
        <div className="rounded-3xl px-6 py-8" style={{ background: 'var(--pe-dark)' }}>
          <SpeakerHeadshot speaker={speaker} size="lg" />
        </div>
        <div className="content-card px-8 py-6">
          <p className="text-2xl text-gray-700 leading-relaxed">{prompt}</p>
        </div>
      </div>
    </Slide>
  );
}

export function CynthiaRemarksSlide() {
  return (
    <RemarksSlide
      speaker={speakers['cynthia-osborne']}
      prompt="What the 2025 numbers say about young children and their families, and what the Prenatal-to-3 Policy Impact Center will be watching in the states this year."
    />
  );
}

export function JoshRemarksSlide() {
  return (
    <RemarksSlide
      speaker={speakers['joshua-mccabe']}
      prompt="What the 2025 numbers say about the Child Tax Credit and state family policy, and where the evidence points next."
    />
  );
}
