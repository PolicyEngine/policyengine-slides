import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

function StackBox({
  name,
  desc,
  mark,
  markH,
  markW,
  markSrcH,
  accent = false,
  dotted = false,
}: {
  name: string;
  desc: string;
  mark: string;
  markH: number;
  markW: number;
  markSrcH: number;
  accent?: boolean;
  dotted?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-xl px-8 py-3.5 text-center ${
        dotted
          ? 'border-2 border-dashed border-gray-300 bg-white'
          : accent
            ? 'border-2 border-pe-teal bg-teal-50'
            : 'border border-gray-300 bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-center h-9">
        <Image
          src={mark}
          alt={name}
          width={markW}
          height={markSrcH}
          style={{ height: `${markH}px`, width: 'auto' }}
        />
      </div>
      <p className="text-base text-gray-500 mt-1.5 leading-snug">{desc}</p>
    </div>
  );
}

export default function StackRecapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The five, as one stack</SlideTitle>
      </SlideHeader>

      <div className="mt-6 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center gap-1.5">
          <StackBox
            dotted
            name="The Thesis Institute"
            mark="/logos/thesis-institute.png"
            markW={532}
            markSrcH={112}
            markH={28}
            desc="judgment and uncertainty — open forecasts, scored against reality"
          />
          <div className="text-gray-300 text-2xl leading-none">┊</div>
          <StackBox
            name="PolicyEngine"
            mark="/logos/teal.svg"
            markW={350}
            markSrcH={100}
            markH={32}
            desc="the model that composes them — any reform, any question, on the fly"
          />
          <div className="text-gray-400 text-2xl leading-none">↑</div>
          <StackBox
            accent
            name="Microcosm"
            mark="/logos/microcosm.png"
            markW={608}
            markSrcH={84}
            markH={24}
            desc="the world at micro level, calibrated to administrative truth"
          />
          <div className="text-gray-400 text-2xl leading-none">↑</div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <StackBox
              name="The Axiom Foundation"
              mark="/logos/axiom-foundation.svg"
              markW={1026}
              markSrcH={363}
              markH={36}
              desc="the rules, executable — the interpretation as a published artifact"
            />
            <StackBox
              name="Chronicle"
              mark="/logos/chronicle.png"
              markW={732}
              markSrcH={160}
              markH={30}
              desc="official statistics as sourced, dated, machine-readable facts"
            />
          </div>
        </div>
        <p className="mt-5 text-lg text-gray-600 leading-snug max-w-3xl text-center">
          Two substrates, a construction layer, a model that answers questions
          &mdash; and, dotted because it is the newest, the layer that decides
          which questions matter.
        </p>
      </div>
    </Slide>
  );
}
