import type { BlsSlideContent } from '../content';

export default function DetailContent({ detail }: { detail: NonNullable<BlsSlideContent['detail']> }) {
  return (
    <div className="max-w-6xl space-y-3 text-pe-dark">
      {detail.intro && <p className="text-xl leading-snug">{detail.intro}</p>}
      {detail.columns && detail.rows && (
        <table className="w-full border-collapse text-lg leading-snug">
          <thead>
            <tr>
              {detail.columns.map((label) => (
                <th key={label} scope="col" className="border-b-2 border-pe-teal py-2 pr-6 text-left font-semibold">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detail.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={index} className={`border-b border-gray-200 py-2 pr-6 align-top ${index === 0 ? 'font-semibold w-[23%]' : ''}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {detail.code && <pre className="whitespace-pre-wrap text-xl leading-relaxed font-mono"><code>{detail.code}</code></pre>}
      {detail.caption && <p className="text-lg text-gray-600">{detail.caption}</p>}
      {detail.takeaway && <p className="text-xl leading-snug font-medium pt-1">{detail.takeaway}</p>}
      {detail.source && <a className="pointer-events-auto inline-block text-sm text-gray-600 underline underline-offset-2" href={detail.source.url} target="_blank" rel="noreferrer">Source: {detail.source.label}</a>}
    </div>
  );
}
