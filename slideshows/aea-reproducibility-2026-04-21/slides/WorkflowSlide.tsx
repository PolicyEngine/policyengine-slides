import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import CodeBlock from '@/components/content/CodeBlock';

export default function WorkflowSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What a researcher does today</SlideTitle>
      </SlideHeader>
      <div className="mt-6 max-w-6xl space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-xl font-semibold text-pe-dark mb-2">
              Run the simulation and emit a citation
            </div>
            <CodeBlock title="python">
              <pre className="text-sm leading-relaxed">{`# requirements.txt
policyengine==4.0.1
policyengine-us==1.653.3
policyengine-us-data==1.78.2

# paper.py
import policyengine
sim = policyengine.simulate(
    country="us",
    reform={"gov.irs.credits.eitc.max": 4000},
    year=2024,
)
print(sim.dataframe()[["eitc", "household_net_income"]])

# From the CLI, emit a citable TRO
# $ policyengine trace-tro us --out paper.trace.tro.jsonld`}</pre>
            </CodeBlock>
          </div>
          <div>
            <div className="text-xl font-semibold text-pe-dark mb-2">
              Replicator verifies the artifact
            </div>
            <CodeBlock title="bash">
              <pre className="text-sm leading-relaxed">{`$ pip install \\
    policyengine==4.0.1 \\
    policyengine-us==1.653.3 \\
    policyengine-us-data==1.78.2
$ python paper.py
$ policyengine trace-tro-validate \\
    paper.trace.tro.jsonld
ok: paper.trace.tro.jsonld

# Every SHA-256 in the TRO must match the
# wheel + HF h5 + manifest bytes the paper
# was generated from.`}</pre>
            </CodeBlock>
          </div>
        </div>
        <div className="text-lg text-gray-600 leading-relaxed max-w-5xl">
          The TRO is the single citable object in the paper. It binds the reform
          definition, model version, data version, and content hashes together
          under a canonical{' '}
          <span className="font-mono text-sm">https://w3id.org/trace/trov/0.1#</span>{' '}
          vocabulary that any third-party validator can consume.
        </div>
      </div>
    </Slide>
  );
}
