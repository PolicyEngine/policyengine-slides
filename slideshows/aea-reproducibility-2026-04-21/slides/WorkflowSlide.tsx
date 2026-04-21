import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import CodeBlock from '@/components/content/CodeBlock';

export default function WorkflowSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How the replication packet should work</SlideTitle>
      </SlideHeader>
      <div className="mt-6 max-w-6xl space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-xl font-semibold text-pe-dark mb-2">
              Author freezes a specific run
            </div>
            <CodeBlock title="python">
              <pre className="text-sm leading-relaxed">{`from policyengine.results import write_results_with_trace_tro

# 1. Start from the certified rules + data bundle
bundle_tro = ...  # shipped / CI-generated bundle TRO

# 2. Run the reform and materialize the paper's results.json
results = ...  # ResultsJson for the published tables/figures

# 3. Emit the citable simulation TRO
write_results_with_trace_tro(
    results,
    "results.json",
    bundle_tro=bundle_tro,
    bundle_tro_url="https://.../us.trace.tro.jsonld",
    reform_payload={"gov.irs.credits.eitc.max": 4000},
)`}</pre>
            </CodeBlock>
          </div>
          <div>
            <div className="text-xl font-semibold text-pe-dark mb-2">
              Replicator validates and replays
            </div>
            <CodeBlock title="bash">
              <pre className="text-sm leading-relaxed">{`# install line comes from the cited bundle manifest
$ pip install \\
    policyengine==4.3.0 \\
    policyengine-us==1.653.3 \\
    policyengine-us-data==1.73.0 \\
    jsonschema
$ policyengine trace-tro-validate \\
    results.trace.tro.jsonld
ok: results.trace.tro.jsonld

# Then the reviewer checks:
# 1. sha256(bundle TRO) matches bundle_tro_url
# 2. sha256(results.json) matches the TRO
# 3. sha256(reform.json) matches the TRO
# 4. rerunning installs the exact cited bundle`}</pre>
            </CodeBlock>
          </div>
        </div>
        <div className="text-lg text-gray-600 leading-relaxed max-w-5xl">
          The paper cites the simulation TRO. That object chains the reform and
          results onto a certified bundle TRO, which separately pins the rules
          bundle and the frozen calibrated microdata artifact under the canonical{' '}
          <span className="font-mono text-sm">https://w3id.org/trace/trov/0.1#</span>{' '}
          vocabulary that any third-party validator can consume.
        </div>
      </div>
    </Slide>
  );
}
