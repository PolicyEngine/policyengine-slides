import Slide from '@/components/core/Slide';
import { Kicker, BigStatement } from './WorkshopComponents';

export default function DemoResultSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center items-center text-center px-12">
        <Kicker>Back to the demo</Kicker>
        <BigStatement className="text-center">
          What did the agent
          <br />
          <span className="text-pe-teal">actually produce?</span>
        </BigStatement>
        <p className="text-2xl text-gray-600 leading-relaxed mt-8 max-w-3xl">
          Cut to the live terminal — show the memo, the distributional chart,
          the budget line. Same model the audience can call themselves.
        </p>
      </div>
    </Slide>
  );
}
