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

# 2. Materialize the result. "results" can be aggregates
#    for the paper's tables/figures, OR the full per-
#    household simulation frame (parquet/HDF5) for
#    downstream distributional work, OR both.
results = ...

# 3. Emit the citable simulation TRO. Any file passed is
#    content-hashed, so the TRO pins whichever artifacts
#    the paper wants replicators to cite.
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
    policyengine==4.3.1 \\
    policyengine-us==1.653.3 \\
    policyengine-us-data==1.85.2 \\
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
        <div className="text-base text-gray-600 leading-relaxed max-w-6xl">
          The paper cites the simulation TRO, which chains reform + results onto
          a certified bundle TRO under canonical{' '}
          <span className="font-mono text-xs">https://w3id.org/trace/trov/0.1#</span>.
          Shipping the full per-household weighted frame (a few MB of parquet)
          lets replicators compute any custom split or subgroup aggregate —
          state &times; child count, income deciles, any variable PolicyEngine
          calculates — without rerunning the simulation or touching the raw
          licensed microdata.
        </div>
      </div>
    </Slide>
  );
}
