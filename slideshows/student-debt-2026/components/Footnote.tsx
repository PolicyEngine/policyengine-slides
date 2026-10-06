import meta from '../data/run_metadata.json';

/** Provenance line for every PolicyEngine chart in this deck. */
export function ModelFootnote({ extra }: { extra?: string }) {
  return (
    <p className="mt-3 text-sm text-gray-500 leading-snug">
      Preliminary. PolicyEngine-US branch {meta.branch} @ {meta.commit.slice(0, 8)} (pull requests #9721 and #9724, in review),
      run {meta.run_date}. October 2026 payment for one borrower with ${meta.balance.toLocaleString('en-US')} of undergraduate
      Direct Loans at {(meta.interest_rate * 100).toFixed(2)}%; AGI set directly; 2026 poverty guidelines, 48 states. SAVE is the
      codified rule computed as if it were available.{extra ? ` ${extra}` : ''}
    </p>
  );
}
