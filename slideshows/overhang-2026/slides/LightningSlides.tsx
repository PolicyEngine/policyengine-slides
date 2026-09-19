import BasePathImage from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { speakers } from '@/lib/speakers';

/** Title for the Expectations lightning talk: the same frame as the session title slide, different claim. */
export function SpfTitleSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="gradient-bg absolute inset-0 flex flex-col px-16 py-12 text-white">
        <div className="flex items-center gap-10">
          <BasePathImage src="/logos/white.svg" alt="PolicyEngine" width={280} height={80} className="h-12 w-auto" priority />
          <span className="h-10 w-px bg-white/30" aria-hidden="true" />
          <BasePathImage src="/logos/axiom-foundation-white.svg" alt="The Axiom Foundation" width={260} height={90} className="h-14 w-auto" priority />
        </div>
        <div className="my-auto py-9">
          <h1 className="max-w-5xl font-display text-[68px] font-bold leading-[1.08] tracking-tight">How sure are<br />the pros?</h1>
          <p className="mt-7 text-3xl text-white/85">Scoring 58 years of probabilistic economic forecasts</p>
        </div>
        <div className="flex items-end justify-between gap-8">
          <div className="flex items-center gap-4">
            <BasePathImage src={speakers['max-ghenis'].photo} alt="Max Ghenis" width={64} height={64} className="h-16 w-16 rounded-full object-cover border border-white/40" />
            <div><p className="text-2xl font-semibold">Max Ghenis</p><p className="mt-1 text-base text-white/70">maxghenis.com/expectations</p></div>
          </div>
          <div className="text-right text-sm leading-relaxed text-white/70">
            <p>The Overhang 2026 · Lightning talks</p><p>American Geophysical Union, Washington DC</p><p>September 19, 2026</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

const studies = [
  { figure: '≤0.66%', unit: 'TFP over ten years, later revised below 0.53%', who: 'Acemoglu, NBER, May 2024', url: 'https://www.nber.org/papers/w32487' },
  { figure: '+1.5 pts', unit: 'productivity growth a year for a decade; global GDP +7%', who: 'Goldman Sachs, Briggs and Kodnani, March 2023', url: 'https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent' },
  { figure: '3.3–3.7%', unit: 'a year, 2025–29, median under rapid AI progress: economists 3.3%, AI experts 3.7%', who: 'Forecasting Research Institute, Karger et al., 2026', url: 'https://forecastingresearch.org/research/economic-effects-of-ai' },
  { figure: '30%+', unit: 'a year sometime this century, odds about even', who: 'Epoch, Erdil and Besiroglu, September 2023', url: 'https://epoch.ai/blog/explosive-growth-from-ai-a-review-of-the-arguments' },
];

/** Preface: the spread of published answers to "how much will AI add to growth?" */
export function AiGrowthStudiesSlide() {
  return (
    <Slide>
      <SlideHeader><SlideTitle>How much will AI add to growth? Pick your study.</SlideTitle></SlideHeader>
      <div className="mt-8 grid grid-cols-4 gap-5">
        {studies.map((s) => (
          <a key={s.who} href={s.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="content-card block p-6">
            <p className="text-4xl font-bold tracking-tight text-pe-teal">{s.figure}</p>
            <p className="mt-3 text-lg leading-snug text-gray-700">{s.unit}</p>
            <p className="mt-4 text-sm text-gray-500">{s.who}</p>
          </a>
        ))}
      </div>
      <p className="mt-6 border-l-4 border-pe-teal pl-5 text-2xl font-medium text-pe-dark">Same question, answers two orders of magnitude apart, and none of them scored yet.</p>
      <p className="mt-4 text-xs text-gray-500">Horizons and outcomes differ across these sources; each card states its own. Read 19 September 2026.</p>
    </Slide>
  );
}

/** The pivot: a scorable series of growth forecasts that predates every forecasting platform. */
export function SeriesQuestionSlide() {
  const facts = [
    { big: '1968', text: 'The Philadelphia Fed’s Survey of Professional Forecasters starts asking its panel to spread probability across bins of next-year US output growth.' },
    { big: '1999', text: 'The ECB asks the same of euro-area forecasters.' },
    { big: '3,695', text: 'Round-by-horizon pooled distributions across nine variables, scored against the numbers the agencies now publish.' },
  ];
  return (
    <Slide>
      <SlideHeader><SlideTitle>Is there a series of forecasts we can score? Before Metaculus?</SlideTitle></SlideHeader>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {facts.map((f) => (
          <div key={f.big} className="content-card p-6">
            <p className="text-5xl font-bold tracking-tight text-pe-teal">{f.big}</p>
            <p className="mt-3 text-lg leading-snug text-gray-700">{f.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xl leading-relaxed text-gray-700">Each histogram records what a point forecast cannot: how much confidence the forecaster puts behind the number.</p>
      <p className="mt-4 text-xs text-gray-500"><a href="https://maxghenis.com/expectations/" target="_blank" rel="noreferrer">maxghenis.com/expectations</a> · code and data: <a href="https://github.com/MaxGhenis/expectations" target="_blank" rel="noreferrer">github.com/MaxGhenis/expectations</a></p>
    </Slide>
  );
}

// Pooled next-year US real GDP growth forecasts, first-quarter SPF rounds, from outputs/measures.csv and
// outputs/calibration.csv in github.com/MaxGhenis/expectations (read 19 September 2026). realized = BEA annual growth as now published.
const series = [
  { round: 1992, target: 1993, mean: 2.59, sd: 1.27, realized: 2.7, inside: true },
  { round: 1993, target: 1994, mean: 3.12, sd: 1.06, realized: 4.0, inside: true },
  { round: 1994, target: 1995, mean: 2.86, sd: 1.13, realized: 2.7, inside: true },
  { round: 1995, target: 1996, mean: 2.25, sd: 1.34, realized: 3.8, inside: false },
  { round: 1996, target: 1997, mean: 1.90, sd: 1.37, realized: 4.4, inside: false },
  { round: 1997, target: 1998, mean: 2.09, sd: 1.23, realized: 4.5, inside: false },
  { round: 1998, target: 1999, mean: 2.22, sd: 1.22, realized: 4.8, inside: false },
  { round: 1999, target: 2000, mean: 2.05, sd: 1.44, realized: 4.1, inside: false },
  { round: 2000, target: 2001, mean: 2.88, sd: 1.33, realized: 1.0, inside: false },
  { round: 2001, target: 2002, mean: 3.03, sd: 1.48, realized: 1.7, inside: true },
  { round: 2002, target: 2003, mean: 2.91, sd: 1.35, realized: 2.8, inside: true },
  { round: 2003, target: 2004, mean: 3.17, sd: 1.38, realized: 3.8, inside: true },
  { round: 2004, target: 2005, mean: 3.71, sd: 1.38, realized: 3.5, inside: true },
  { round: 2005, target: 2006, mean: 3.39, sd: 1.19, realized: 2.8, inside: true },
  { round: 2006, target: 2007, mean: 2.84, sd: 1.25, realized: 2.0, inside: true },
  { round: 2007, target: 2008, mean: 2.82, sd: 1.17, realized: 0.1, inside: false },
  { round: 2008, target: 2009, mean: 2.30, sd: 1.25, realized: -2.6, inside: false },
  { round: 2009, target: 2010, mean: 1.69, sd: 1.45, realized: 2.7, inside: true },
  { round: 2010, target: 2011, mean: 2.89, sd: 1.29, realized: 1.6, inside: false },
  { round: 2011, target: 2012, mean: 3.17, sd: 1.28, realized: 2.3, inside: true },
  { round: 2012, target: 2013, mean: 2.55, sd: 1.41, realized: 2.1, inside: true },
  { round: 2013, target: 2014, mean: 2.51, sd: 1.18, realized: 2.5, inside: true },
  { round: 2014, target: 2015, mean: 2.80, sd: 1.27, realized: 2.9, inside: true },
  { round: 2015, target: 2016, mean: 2.70, sd: 1.23, realized: 1.8, inside: true },
  { round: 2016, target: 2017, mean: 1.97, sd: 1.24, realized: 2.5, inside: true },
  { round: 2017, target: 2018, mean: 2.20, sd: 1.34, realized: 3.0, inside: true },
  { round: 2018, target: 2019, mean: 2.30, sd: 1.27, realized: 2.6, inside: true },
  { round: 2019, target: 2020, mean: 1.78, sd: 1.30, realized: -2.1, inside: false },
  { round: 2020, target: 2021, mean: 1.70, sd: 1.24, realized: 6.2, inside: false },
  { round: 2021, target: 2022, mean: 3.51, sd: 2.18, realized: 2.5, inside: true },
  { round: 2022, target: 2023, mean: 2.63, sd: 1.93, realized: 2.9, inside: true },
  { round: 2023, target: 2024, mean: 1.36, sd: 1.80, realized: 2.8, inside: true },
  { round: 2024, target: 2025, mean: 1.75, sd: 1.86, realized: 2.1, inside: true },
  { round: 2025, target: 2026, mean: 1.87, sd: 1.46, realized: null, inside: null },
  { round: 2026, target: 2027, mean: 1.91, sd: 1.41, realized: null, inside: null },
];

function SpfChart({ step }: { step: number }) {
  const W = 1000, H = 540, L = 70, R = 24, T = 24, B = 48;
  const x0 = 1993, x1 = 2027, y0 = -4, y1 = 8;
  const px = (t: number) => L + ((t - x0) / (x1 - x0)) * (W - L - R);
  const py = (v: number) => T + ((y1 - v) / (y1 - y0)) * (H - T - B);
  const line = series.map((d, i) => `${i ? 'L' : 'M'}${px(d.target).toFixed(1)},${py(d.mean).toFixed(1)}`).join(' ');
  const upper = series.map((d) => `${px(d.target).toFixed(1)},${py(d.mean + d.sd).toFixed(1)}`);
  const lower = [...series].reverse().map((d) => `${px(d.target).toFixed(1)},${py(d.mean - d.sd).toFixed(1)}`);
  const ticksY = [-4, -2, 0, 2, 4, 6, 8];
  const ticksX = [1995, 2000, 2005, 2010, 2015, 2020, 2025];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" role="img" aria-label="Pooled mean forecast of next-year US real GDP growth with a one-standard-deviation band and realized outcomes">
      {ticksY.map((v) => (
        <g key={v}>
          <line x1={L} x2={W - R} y1={py(v)} y2={py(v)} stroke={v === 0 ? '#9ca3af' : '#e5e7eb'} strokeWidth={v === 0 ? 1.5 : 1} />
          <text x={L - 10} y={py(v) + 5} textAnchor="end" fontSize="16" fill="#6b7280">{v}%</text>
        </g>
      ))}
      {ticksX.map((t) => (
        <text key={t} x={px(t)} y={H - 16} textAnchor="middle" fontSize="16" fill="#6b7280">{t}</text>
      ))}
      {step >= 2 && <polygon points={[...upper, ...lower].join(' ')} fill="var(--pe-teal)" opacity="0.16" />}
      <path d={line} fill="none" stroke="var(--pe-teal)" strokeWidth="3.5" strokeLinejoin="round" />
      {series.map((d) => (
        <circle key={`m${d.target}`} cx={px(d.target)} cy={py(d.mean)} r="4" fill="var(--pe-teal)" />
      ))}
      {step >= 3 && series.filter((d) => d.realized !== null).map((d) => (
        <circle key={`r${d.target}`} cx={px(d.target)} cy={py(d.realized as number)} r="7" fill={d.inside ? 'var(--pe-dark)' : 'var(--pe-amber)'} stroke="white" strokeWidth="2" />
      ))}
      <text x={W - R} y={T + 4} textAnchor="end" fontSize="15" fill="#6b7280">Target year · first-quarter rounds, 1992–2026</text>
    </svg>
  );
}

const chartCaptions: Record<number, { title: string; lines: string[] }> = {
  1: { title: 'The point estimates', lines: ['Pooled mean forecast of next-year US real GDP growth, one dot per first-quarter round.', 'Between 2 and 3 percent most years; 1.9% for 2027.'] },
  2: { title: 'The bounds', lines: ['One standard deviation either side of the mean, read off the forecasters’ own histograms.', 'About 1.3 points wide on each side from 1992 to 2020; 2.2 in the 2021 round.'] },
  3: { title: 'The outcomes', lines: ['Dark dots landed inside the band, amber dots outside.', '22 of 33 target years inside; the misses run 1996–2001, 2008–09, 2011 and 2020–21.'] },
};

function ChartFrame({ step, title }: { step: number; title: string }) {
  const cap = chartCaptions[step];
  return (
    <Slide>
      <SlideHeader><SlideTitle>{title}</SlideTitle></SlideHeader>
      <div className="mt-3 grid h-[430px] grid-cols-[1.55fr_0.75fr] gap-6">
        <div className="content-card min-h-0 p-3"><SpfChart step={step} /></div>
        <div className="flex flex-col justify-center gap-5">
          <p className="text-2xl font-bold text-pe-dark">{cap.title}</p>
          {cap.lines.map((l) => <p key={l} className="text-lg leading-relaxed text-gray-700">{l}</p>)}
          {step === 3 && <p className="text-5xl font-bold tracking-tight text-pe-teal">22<span className="text-3xl font-light text-gray-400"> / 33</span></p>}
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">Survey of Professional Forecasters, Philadelphia Fed; pooled by maxghenis.com/expectations; outcomes from BEA annual real GDP growth as now published.</p>
    </Slide>
  );
}

/** Two builds: point estimates, then the one-sigma band. */
export function SpfChartSlide({ buildStep = 2 }: { buildStep?: number }) {
  return <ChartFrame step={Math.min(Math.max(buildStep, 1), 2)} title="What the pros said about next year" />;
}

/** The backtest on the same chart: realized outcomes against the band. */
export function SpfRealizedSlide() {
  return <ChartFrame step={3} title="How well did they do?" />;
}
