import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import BulletList from '@/components/content/BulletList';
import CodeBlock from '@/components/content/CodeBlock';

export default function CaseStudySlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Case study: from legislative text to runnable analysis</SlideTitle>
        </SlideHeader>

        <div className="grid gap-8 md:grid-cols-[1.05fr,0.95fr] md:items-start">
          <div className="space-y-8">
            <BulletList
              size="sm"
              items={[
                { text: 'Read statute, agency guidance, and policy references' },
                { text: 'Encode the rules as versioned, testable policy logic' },
                { text: 'Run household simulations on representative microdata' },
                { text: 'Publish cited, reviewable results for analysts and advocates' },
              ]}
            />

            <div className="accent-block">
              <p className="text-xl font-semibold leading-relaxed">
                This is not a chatbot answering from memory. It is an agent
                working against source documents, tests, and real data.
              </p>
            </div>
          </div>

          <CodeBlock title="policy-agent">
            <pre className="whitespace-pre-wrap text-base text-slate-100">{`input:
  legislative text
  parameter references
  baseline household data

workflow:
  trace statute -> encode rules -> write tests
  run simulations -> inspect outputs -> publish

output:
  household impacts
  budget effects
  poverty and inequality metrics`}</pre>
          </CodeBlock>
        </div>
      </div>
    </Slide>
  );
}
