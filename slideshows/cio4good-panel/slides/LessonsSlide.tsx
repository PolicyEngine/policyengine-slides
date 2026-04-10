import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const lessons = [
  {
    title: 'Data governance first, AI second',
    desc: 'We spent 2 years encoding policy rules before touching AI. That structured foundation is what makes AI-assisted scaling trustworthy.',
  },
  {
    title: 'Define your mission precisely enough to be the harness',
    desc: 'As AI does more execution, the mission statement becomes the performance management system. Vague missions produce vague AI output.',
  },
  {
    title: 'Give everyone full AI access and watch what happens',
    desc: 'The variation across your team will reshape how you think about staffing, roles, and who is ready to lead in this new mode.',
  },
  {
    title: 'Build for the AIs, not just with them',
    desc: 'The biggest shift is designing products and infrastructure that AI agents can operate on — not just tools that humans use with AI help.',
  },
];

export default function LessonsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Lessons for the room</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-5 mt-6">
        {lessons.map((l, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 flex items-start gap-4">
            <span className="flex-shrink-0 text-lg font-bold text-white bg-[var(--pe-teal)] rounded-full w-9 h-9 flex items-center justify-center">
              {i + 1}
            </span>
            <div>
              <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">{l.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
