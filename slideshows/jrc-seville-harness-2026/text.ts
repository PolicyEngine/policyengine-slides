// The words of this deck: what the slides print, their alt text, and the sources behind them.
// An entry's `footnotes` name its sources. No slide renders footnotes; they record where the numbers come from.
// Slides quote these strings; do not paraphrase them in components.

export const cover = {
  title: 'Harness engineering for policy modeling',
  subtitle: 'Testing the AI agents that help build our rules, data, response models, forecasts and answers',
  name: 'Max Ghenis',
  affiliation: 'PolicyEngine and the Axiom Foundation',
  event: ['Building blocks for future economic analysis and modelling: the role of AI', '23-24 November, Seville'],
};

export const needs = {
  title: 'What does a policymaker need from an analyst?',
  cards: [
    { tag: 'Rules', text: 'The mechanics of the policy, as governments set them in law' },
    { tag: 'Data', text: 'A representative picture of the people it reaches' },
    { tag: 'Responses', text: 'A model of how people and the economy react' },
    { tag: 'Predictions', text: 'A forecast of an observable outcome we can compare with what happens' },
    { tag: 'Communication', text: 'Clear, correct answers to the questions people ask' },
  ],
};

// AiChangeSlide: three points, worded as the speaker's expectations, not as findings.
export const aiChange = {
  title: 'How does AI change this?',
  points: [
    'AI will change society rapidly, and policymakers will face unprecedented demands to respond.',
    'Policymakers will turn to AI for help, but AI agents need better tools to give it.',
    'AI can help us build those tools.',
  ],
};

// HarnessSlide repeats the five cards of NeedsSlide, as headings and icons only.
export const harness = {
  title: 'AI needs to hill-climb on each piece of the stack',
  pieces: ['Rules', 'Data', 'Responses', 'Predictions', 'Communication'],
};

// PolicyBench on its nonzero dollar amounts, alone and then with a tool that runs PolicyEngine, as two builds of one
// slide. Every rate comes from PolicyBench's pilot note of 20 October 2026 (see `footnotes`).
// The slide renders the title and the chart only. Build 1 already reserves the space for the tool's dots, so nothing
// moves when build 2 adds them. `lead`, `overall` and `footnotes` are not rendered; they hold the detail and the
// sources behind the chart. The axis names PolicyBench and the legend marks the tool run as a pilot, so the chart
// keeps its source and scope on screen.
export const pbNonzero = {
  title: 'How often do AI models get nonzero dollar amounts right?',
  lead: [
    'PolicyBench asks AI models for tax and benefit answers for 100 US households, without a calculator or web access.',
    'In a pilot, PolicyBench gave three of the models a tool that runs PolicyEngine, which also computes the reference answers.',
  ],
  rows: [
    { model: 'GPT-6 Sol', alone: '67.4%', withTool: '96.8%' },
    { model: 'Claude Opus 5.5', alone: '70.1%', withTool: '98.9%' },
    { model: 'Gemini 4 Argon', alone: '46.5%', withTool: '99.5%' },
  ],
  legend: { alone: 'alone', withTool: 'with a tool that runs PolicyEngine (pilot)' },
  axis: 'Share of PolicyBench’s 187 nonzero dollar amounts within $1 of the reference answer',
  overall: [
    'Weighting every answer by household impact, PolicyBench scores the three models 89% to 95% overall.',
    'With the tool, they scored above 99%.',
  ],
  source: {
    label: 'policybench.org/notes/2026-10-20-given-a-policyengine-tool-three-models-score-above-99',
    href: 'https://policybench.org/notes/2026-10-20-given-a-policyengine-tool-three-models-score-above-99',
  },
  footnotes: [
    'In a pilot on 100 US households on 14 and 15 October 2026, PolicyBench gave three models a tool that runs PolicyEngine; the scores without the tool come from PolicyBench’s 14 October release. A dollar answer counts as right within $1 of the reference answer, and an eligibility answer when it matches. PolicyEngine computes the reference answers. Scores compare model answers with those references. In the nonzero rates, PolicyBench gives each of the 187 nonzero amounts the same weight. Overall scores, alone and with the tool: GPT-6 Sol 95.2% and 99.2%; Claude Opus 5.5 94.1% and 99.8%; Gemini 4 Argon 88.7% and 99.9%.',
    'Source: policybench.org/notes/2026-10-20-given-a-policyengine-tool-three-models-score-above-99',
  ],
};

/** One build of the walkthrough slide: a step of axiom.org's walkthrough (`n`) with our caption for it. */
type WalkthroughCaption = {
  n: number;
  /** The title axiom.org sends for step `n`, on a build that shows the frame. */
  site?: string;
  title: string;
  about: string;
  /** Set where the slide shows a figure drawn in this deck in place of axiom.org's frame. */
  figure?: 'gates' | 'graph' | 'uses';
};

// One caption per build, each naming the step of axiom.org's walkthrough it shows (`n`). The slide keeps the caption
// in the page as visually hidden text and never shows the caption the site sends. `site` is the title axiom.org sends
// for that step, kept for the builds that show the frame: when the site reports another step or another title, the
// slide sets data-walkthrough-site="differs" on the card, so a check that loads the page can tell that axiom.org
// changed under our caption. `about` says what the step shows in plain words. Steps 4, 6 and 8 show a figure drawn in
// this deck (`figure`), adapted from axiom.org's drawing of the same step, and carry no `site`.
const walkthroughSteps: WalkthroughCaption[] = [
  {
    n: 1,
    site: 'It starts with the law as written.',
    title: 'Axiom starts with the law as written.',
    about: 'Primary sources: the statutes, regulations and agency manuals that legislatures and agencies publish.',
  },
  {
    n: 2,
    site: 'The legal text is the specification, encoded line by line.',
    title: 'Axiom treats the source text as the specification.',
    about: 'Axiom captures the official text word for word and stores it in the corpus, its database of the law.',
  },
  {
    n: 3,
    site: 'Every provision has an address.',
    title: 'Each provision in the corpus has a citation address.',
    about: 'Axiom splits each document into its provisions and gives each one an address that follows its legal citation.',
  },
  {
    n: 4,
    title: 'The encoder drafts a rule, then checks it.',
    about:
      'A failed check can send the encoder back for another draft. Before the encoder applies a draft, the draft must compile, ground its sources in the law and pass its tests. By default, AI review advises. Program comparisons run separately, where another calculator covers the program. This workflow is an illustration: the published manifest for 7 U.S.C. § 2017(a) records a manual repair, and the published module is on a validation waiver list, so repository CI skips its checks (listed on 2 October and 24 November 2026).',
    figure: 'gates',
  },
  {
    n: 5,
    site: 'Every part of a rule can be traced back to its primary source.',
    title: 'The code cites its sources.',
    about: 'The rule cites 7 U.S.C. § 2017(a), and its formula imports the USDA maximum allotment.',
  },
  {
    n: 6,
    title: 'The rules run as one graph.',
    about:
      'This graph shows selected dependencies for an eligible one-person test case in January 2026. Section 2017(a) takes the household’s net income as 7 U.S.C. § 2014(d) and (e) define it. The monthly allotment is the greater of $182 and the $24 minimum.',
    figure: 'graph',
  },
  {
    n: 7,
    site: 'The same process and the same checks, law by law.',
    // The title describes axiom.org's drawing, a map of bodies of law. The drawing shows no manifest; `about` adds it.
    title: 'Map of legal sources with 7 U.S.C. § 2017(a) highlighted.',
    about:
      'This map shows where the provision sits in the corpus. When the encoder applies an AI-drafted rule, it publishes a signed manifest that names the source citation and model.',
  },
  {
    n: 8,
    title: 'Different tools could use the same rules.',
    about: 'Axiom publishes the rules as open, versioned code. AI, government, navigation and research tools are potential uses of the same rules.',
    figure: 'uses',
  },
];

export const walkthrough = {
  title: 'How Axiom’s encoder drafts and checks one provision',
  label: 'Illustration using 7 U.S.C. § 2017(a)',
  steps: walkthroughSteps,
  // The words on the three figures this deck draws. In an array of strings (`label`, `lines`, `caveat`, `rule`), each
  // entry is one line of type.
  figures: {
    credit: 'Adapted from axiom.org',
    byId: {
      gates: {
        rail: [
          { kicker: 'Encode', text: 'AI drafts the rule' },
          { kicker: 'Checks', text: 'Compile · ground sources · run tests' },
          { kicker: 'Apply', text: 'Apply the draft' },
        ],
        loop: 'Failed check → redraft',
        aside: [
          { kicker: 'AI review', lines: ['Advisory by default'] },
          { kicker: 'Program comparison', lines: ['Runs separately, where another calculator covers the program'] },
        ],
        caveat: [
          'Illustration. The published manifest for 7 U.S.C. § 2017(a) records a manual repair.',
          'The published module is on a validation waiver list, so repository CI skips its checks (listed on 2 October and 24 November 2026).',
        ],
      },
      graph: {
        testCase: 'Test case · January 2026 · eligible one-person household',
        result: 'Result',
        inputs: [
          { kind: 'Import', label: ['Net income under', '7 U.S.C. § 2014(d) and (e)'], value: '$386.50' },
          { kind: 'Parameter', label: ['Household contribution rate'], value: '0.30' },
          { kind: 'Import', label: ['Maximum allotment, USDA FY 2026,', '48 states and DC'], value: '$298 · 1 person' },
          { kind: 'Parameter', label: ['Household size limit', 'for the minimum'], value: '2' },
          { kind: 'Parameter', label: ['Minimum allotment rate'], value: '0.08' },
        ],
        net: { label: ['Net income for the allotment'], value: '$386.50' },
        contribution: { label: ['Household food contribution'], value: '$115.95' },
        before: { label: ['Allotment before the minimum'], value: '$182' },
        minimum: { label: ['Minimum monthly allotment'], value: '$24' },
        output: { kicker: 'Output', label: ['Regular monthly allotment'], value: '$182', rule: ['The greater of $182 and $24'] },
      },
      uses: {
        source: { kicker: 'One source', title: 'Encoded, cited rules', lines: ['The rules carry source citations', 'and effective dates.'] },
        usesKicker: 'Potential uses of the same rules',
        uses: [
          { name: 'AI tools', lines: ['The chatbots and assistants residents and staff already ask'] },
          { name: 'Government tools', lines: ['Eligibility systems, caseworker guidance and training,', 'and policy changes tested before they land'] },
          { name: 'Navigation tools', lines: ['Community screeners and navigators that say what to apply for'] },
          { name: 'Research tools', lines: ['Microsimulation and policy analysis that show how a change', 'reaches households and budgets'] },
        ],
      },
    },
  },
  footnotes: [
    'Before the encoder applies a draft, the draft must compile, ground its sources and pass its tests. By default, the AI review advises. Program comparisons run separately where another calculator covers the program. The published module is on the rulespec-us validation waiver list, so repository CI skips its checks (listed on 2 October and 24 November 2026). The published manifest for 7 U.S.C. § 2017(a) records a manual repair.',
    'Sources: axiom.org/slides/encoder-walkthrough, axiom.org/about, axiom.org/receipts and axiom.org/docs (the waiver); 7 U.S.C. §§ 2014 and 2017; github.com/TheAxiomFoundation, axiom-encode and rulespec-us (us/statutes/7/2017/a.yaml and a.test.yaml; .axiom/encoding-manifests/statutes/7/2017/a.json; known-validation-gaps.yaml); USDA SNAP maximum and minimum allotments, FY 2026.',
  ],
};

// Adapted from Axiom's Silver/Gold slide (axiom.org/slides/gravity-project-2026-11, slide 8). The slide prints the
// title and each tier's `name`. A tier's `tag` picks its metal and marks the two upper tiers as goals; it is not
// printed, and `text`, `programs` and `footnotes` are not rendered.
export const ladder = {
  title: 'Axiom starts from public documents and aims for government systems',
  tiers: [
    {
      tag: 'Starting point',
      name: 'Rules from public documents',
      text: 'Axiom encodes these programs first for screening parity, then as full document bundles.',
      programs: ['SNAP', 'Medicaid', 'CHIP', 'TANF', 'WIC', 'LIHEAP', 'CCDF', 'SSI', 'Medicare', 'UI', 'EITC', 'CTC'],
    },
    {
      tag: 'Goal: Silver ∀',
      name: 'Government validation',
      text: 'Axiom and a government partner check the encoded rules against the partner’s internal documents and system code.',
    },
    {
      tag: 'Goal: Gold ∀',
      name: 'Government systems run on Axiom',
      text: 'A government runs its own production system on the rules.',
    },
  ],
  footnotes: [
    'Adapted from axiom.org/slides/gravity-project-2026-11, slide 8, read 22 November 2026, where Axiom sets out these tiers, two of them with a government partner. For screening parity, Axiom encodes core program provisions to assess baseline household eligibility and benefit amounts.',
  ],
};

// The chart plots four points as shares of their benchmarks, with a line at 100%. Each share is 100% minus the
// shortfall the sources give (SNAP $42.0bn of $93.5bn = 44.9%; pensions 100 − 44; Universal Credit benefit units
// 100 − 33; EU-SILC captured 53%). `stats` and `footnotes` are not rendered; they hold the shortfalls and their
// sources.
export const surveys = {
  title: 'Household surveys can undercount income and benefit receipt',
  rows: [
    { label: 'US SNAP benefit dollars', sub: '2025', share: 45 },
    { label: 'US pension and retirement income', sub: '2017', share: 56 },
    { label: 'GB Universal Credit benefit units', sub: '2023–24', share: 67 },
    // Eurostat's 53% is a mean of country ratios, not an EU total, so the row says "Country average".
    // The label names the survey (EU-SILC), since the average covers EU and EFTA countries except Norway.
    { label: 'EU-SILC self-employment income', sub: 'Country average, 2015', share: 53 },
  ],
  axis: 'Survey estimate as a share of its comparison benchmark',
  line: 'Benchmark',
  stats: [
    { value: '55%', label: 'shortfall of food assistance (SNAP) dollars in the main US income survey, against USDA’s benefit totals, 2025' },
    { value: '44%', label: 'net understatement of US pension and retirement income in the same survey, against linked tax records, 2017' },
    { value: '33%', label: 'fewer benefit units receiving Universal Credit in the Family Resources Survey than in DWP’s records, Great Britain, 2023–24' },
    { value: '47%', label: 'of self-employment income in national accounts that EU-SILC does not capture, on average across countries, 2015' },
  ],
  footnotes: [
    'US SNAP: our calculation from the 2026 CPS ASEC public-use file (each household’s SNAP value for calendar 2025, weighted, including values the Census Bureau imputes) and USDA FNS monthly state data for the 50 states and DC (data as of 13 November 2026; months from October 2025 are preliminary): $42.0 billion against $93.5 billion, with no adjustment for people the survey does not cover. US pensions: CPS ASEC against coverage-adjusted IRS Form 1099-R totals; Meyer, Mittag, Wu, Tatarka and Langetieg (2026), “The Anatomy and Evolution of Survey Error”, BFI Working Paper 2026-118, Table 4. UK: DWP (2026), “Family Resources Survey Transformation: integrating administrative data for benefits”, Table 5.1, Great Britain. From 2024–25, DWP uses administrative benefit records in the published survey for the respondents it can link, and keeps survey responses for those it cannot.',
    'EU: Eurostat, “Concepts for household income: comparison between micro and macro approach” (data extracted March 2018), 2015 data; EU-SILC captured 53% on average across the EU and EFTA countries covered, excluding Norway; different income concepts explain part of the gap.',
  ],
};

export const targets = {
  title: 'Concept matching helps us choose which official totals to fit',
  steps: ['Official total', 'Concept match', 'Rules-engine variable', 'Reweight households'],
  example: [
    'For example, IRS adjusted gross income matches the statute’s AGI exactly, while IRS total wages only broadly match the wages our rules infer from section 62 of the tax code.',
  ],
  counts: [
    { value: '4,765', label: 'targets in an experimental US local-area file' },
    { value: '28,721', label: 'in a UK local-area candidate file' },
    { value: '254', label: 'in a Belgian prototype' },
  ],
  footnotes: [
    'Concepts: github.com/PolicyEngine/chronicle; github.com/PolicyEngine/microcosm, docs/us-fact-to-target.md. Targets: microcosm.institute/calibration/dashboard, read 22 November 2026: experimental US local-area file built 17 October 2026; UK local-area candidate dated 16 November 2026; Belgian prototype of 23 August 2026, which reweights US survey households. We use neither local-area file by default: the US default release of 15 September 2026 fits 5,659 targets, and the UK default 1,534. We have not yet declared a concept match for most targets in either US file.',
  ],
};

export const dashboard = {
  // The map sizes boxes by weighted target error and colours them by weighted mean error, so it shows where the data
  // misses its targets.
  title: 'Our calibration dashboard shows where the data misses its targets',
  // The dashboard's summary figures, under this deck's labels. Not rendered.
  kpis: [
    { value: '15 Sep 2026', label: 'US release' },
    { value: '5,659', label: 'Targets' },
    { value: '95.7%', label: 'Within 10% of target' },
    { value: '1.77%', label: 'Weighted target error' },
    { value: '48.1K', label: 'Households with nonzero weight' },
  ],
  agents: '569 of the dashboard’s 898 non-merge commits name Claude as co-author. We publish procedures for AI agents to investigate discrepancies.',
  mapCaption: 'The calibration map groups official totals into boxes, sizes each box by its share of the weighted target error and colors it by its weighted mean error.',
  mapAlt: 'Screenshot of the program view of the calibration map on microcosm.institute/calibration/dashboard for the US default release of 15 September 2026. The map sizes each box by its share of the weighted target error and colors it by weighted mean error, from green at 0% to red at 40% or more. It colors most IRS Statistics of Income boxes green, such as the EITC (781 targets) and taxable interest income (1,008); JCT revenue loss (11) and tip income (2) red; BEA wages (1) and state income tax collections (44) orange; and SSA recipients amber.',
  footnotes: [
    'Figures: PolicyEngine’s public calibration dashboard, microcosm.institute/calibration/dashboard, US release of 15 September 2026, read 22 November 2026. They show how the release fits its calibration targets. The map shows the Program breakdown, sizes each box by weighted target error (its share of the calibration loss) and colors it by weighted mean error; the page notes that the release inherits its calibration from a parent build of 28 July 2026. The screenshot hides that one line of the page, which names the build by an internal id. Weighted target error is the dashboard’s calibration loss, an importance-weighted mean of capped, scaled target errors. Households with nonzero weight: 48,096 of the file’s 57,240 records (the dashboard’s “weighted synthetic households”). The US build pipeline also runs checks against figures we left out of calibration (the dashboard’s Pipeline page), and their results do not block publication.',
    'Commits: github.com/PolicyEngine/calibration-diagnostics, non-merge commits that name Claude as co-author, read 22 November 2026. Procedures: docs/ai/README.md in the same repository.',
  ],
};

export const beliefs = {
  title: 'We asked AI models what they believe about economic responses',
  chartCaption:
    'We asked 31 AI models for 26 economic parameters, 15 times each. For example, 28 of 31 put their central estimate for the elasticity of taxable income among high-income US taxpayers in our literature band, from 0.25 to 0.50 inclusive.',
  bandLabel: 'Our literature band',
  label: {
    tag: 'In the chart',
    name: 'Elasticity of taxable income, high-income US taxpayers',
    text: 'The percent change in taxable income when the share of each extra dollar a taxpayer keeps after tax rises by 1%.',
  },
  footnotes: [
    'Models answered from memory, April to August 2026: policyengine.org/ai-beliefs/quantities/tax-elasticity-of-taxable-income-top-earners, read 22 November 2026. Band: ours; we drew on Gruber and Saez (2002), who estimate 0.57 for incomes above $100,000, and the upper half of the 0.12 to 0.40 range in the review by Saez, Slemrod and Giertz (2012).',
  ],
};

// Responses, slide 1: where our US labor-supply responses come from. Sources: CBO report 43674, Table 1, central
// estimates; CBO Working Paper 2026-01, footnote 16.
// The slide shows CBO's Table 1 as an image (report 43674, PDF page 4, taken from the Internet Archive's capture of
// cbo.gov's PDF, because cbo.gov answers scripts with a bot check). Only `title` and `alt` are rendered; no slide
// reads the other fields, which hold the figures and sources behind the image.
export const cbo = {
  title: 'Our US labor-supply responses build on CBO’s 2012 review',
  alt: 'Table 1 from CBO’s 2012 report, “Labor Supply Elasticities in CBO’s Models”: lower, central and higher estimates of the substitution elasticity for primary earners (central 0.31 in the lowest earnings decile, falling to 0.22 from the seventh decile up), secondary earners (central 0.32) and all earners, the income elasticity for all earners (central −0.05) and the Frisch elasticity in CBO’s life-cycle model (central 0.40).',
  lead: 'When we switch on labor-supply responses in our US model, we start from CBO’s central elasticities.',
  chartLabel: 'Substitution elasticity of labor supply for primary earners, by earnings decile',
  deciles: [0.31, 0.28, 0.27, 0.27, 0.25, 0.25, 0.22, 0.22, 0.22, 0.22],
  decileAxis: 'Earnings decile',
  income: { value: '−0.05', label: 'income elasticity, all earners' },
  still: 'In February 2026, CBO cited its 2012 report and research review, and says it “continues to assess recent research”.',
  question: 'Newer evidence should update us. But how?',
  footnotes: [
    'CBO (2012), “How the Supply of Labor Responds to Changes in Fiscal Policy”, Table 1, “Labor Supply Elasticities in CBO’s Models”, p. 4 (cbo.gov/publication/43674), drawing on McClelland and Mok (2012), “A Review of Recent Research on Labor Supply Elasticities”, CBO Working Paper 2012-12; CBO Working Paper 2026-01 (February 2026), footnote 16. PolicyEngine US sets every labor-supply elasticity to zero by default; analysts apply CBO’s values as a reform.',
  ],
};

// Responses, slide 3: how to tell which estimate is right, by predicting what new randomized trials will find.
export const sspp = {
  title: 'How do we know which estimate is right? Predict what new studies will find',
  points: [
    'The Social Science Prediction Platform collects forecasts of study results before the results go public, and scores the forecasts against what the studies report.',
    'AI models, and the models we build, could predict the responses that new randomized trials will measure, and face the same scoring when the trials report.',
  ],
  caption: 'Open surveys on the platform’s Public Prediction Bulletin.',
  alt: 'Screenshot of the Public Prediction Bulletin on socialscienceprediction.org, listing open forecast surveys with their authors, fields and close dates.',
  footnotes: ['socialscienceprediction.org/predict and /predict/leaderboard, read 22 November 2026.'],
};

// Responses, slide 4: comparing responses across model architectures. Statuses follow the registry in
// github.com/PolicyEngine/macro (integration/src/policyengine_macro/capabilities.py), which its README calls
// authoritative. Only two of the six models are partial replications of published papers, so the title claims a
// comparison across architectures, not a replication of the models.
// The slide shows the six model cards from our own site instead of logos: the Fed seal and the Bank of England and
// OBR logos are restricted marks, and HANK and DEFINE-UK have none. Only `title` and `alt` are rendered; no slide
// reads the other fields, which hold the model list and sources behind the image.
export const macro = {
  title: 'We can also test how responses compare across model architectures',
  alt: 'Six model cards from the models page of policyengine-macro.vercel.app: OBR emulator (UK, “Anchored, not validated”), BoE SVAR (UK, “Partial replication”), FRB/US (US, “Replicates the Fed’s solver”), US HANK (US, “Partial replication”), OG-UK (UK, “Calibrated, no outcome benchmark”) and DEFINE-UK (UK, “Partial replication”), each with a one-line purpose and its main caveat.',
  // OG-UK belongs to the Policy Simulation Library and DEFINE-UK is wrapped, so the lead calls neither one ours.
  lead: 'Six macro models connect to PolicyEngine’s household microsimulation. They include our FRB/US reimplementation, our OBR emulator, the Policy Simulation Library’s OG-UK, and an open wrapper for DEFINE-UK. We put the same questions to five of them, with every answer beside a published benchmark where one exists.',
  models: [
    { name: 'FRB/US', source: 'Federal Reserve', status: 'Reimplementation that matches the Fed’s own solver' },
    { name: 'Structural VAR', source: 'Bank of England', status: 'Partial replication of Brignone and Piffer (2025)' },
    { name: 'HANK', source: 'Auclert, Bardóczy, Rognlie and Straub (2021)', status: 'Partial replication' },
    { name: 'OBR model', source: 'Office for Budget Responsibility', status: 'Emulator anchored to the October 2026 forecast; we have not validated it as a forecaster' },
    { name: 'OG-UK', source: 'Policy Simulation Library', status: 'Calibrated research prototype' },
    { name: 'DEFINE-UK', source: 'Ecological stock-flow model', status: 'Partial replication of its manual' },
  ],
  link: 'Each model connects to our household microsimulation. Only one connection is not experimental: PolicyEngine UK costs a tax reform, and the OBR emulator adds rough GDP feedback.',
  footnotes: [
    'Sources: github.com/PolicyEngine/macro (integration/src/policyengine_macro/capabilities.py) and its model repositories; policyengine-macro.vercel.app and its /models/compare page (“Same question, every model”); github.com/PSLmodels/OG-UK; read 22 November 2026. No macro model feeds another, and US reforms get no macro feedback.',
  ],
};


// The slide shows three steps only: register, grade, compare.
export const predict = {
  title: 'We have started to register forecasts and grade them, to learn which models predict well',
  steps: ['Register', 'Grade', 'Compare'],
  // Not rendered; records the scoring method and its source.
  footnotes: ['We score resolved forecasts with the continuous ranked probability score (CRPS), a proper scoring rule. Most give a point and an 80% interval, which we turn into a distribution; that step is not proper for the interval itself. Source: github.com/ThesisInstitute/thesis, docs/brier-lab.md, read 22 November 2026.'],
};

// The graded forecast: the chart reads its three rows out of `alt`, so the picture and its description cannot differ.
export const forecast = {
  title: 'We registered a 2025 US poverty forecast, then graded it against Census Bureau data',
  alt: 'Chart of the change in the US Supplemental Poverty Measure rate from 2024 to 2025, in percentage points: the change PolicyEngine registered and the change the Census Bureau reported. All people: plus 0.22 registered, plus 0.07 reported. Children: plus 0.86 and minus 0.06. People 65 and over: minus 0.52 and plus 0.24.',
  registered: 'we registered',
  reported: 'the Census Bureau reported',
  axis: 'Change in the US Supplemental Poverty Measure rate, 2024 to 2025 (percentage points)',
};

// The lesson from PolicyEngine's published postmortem of its 2025 poverty forecast, in the postmortem's terms: wages
// grew at about the same rate at every wage level, and three other income sources explain part of the miss.
// Not rendered: ForecastSlide shows the chart alone.
export const forecastLesson = {
  lesson:
    'We grew each income source at one national rate for everyone, using CBO and Social Security Administration figures. In the Census Bureau’s survey, wages grew at about the same rate at every wage level. When we grew Social Security, pensions and self-employment income closer to what the survey shows, our reruns cut the child miss by about a third and most of the miss for people 65 and over.',
  footnote: 'The reruns came after the release, as checks, not a revised forecast: policyengine.org/us/research/2025-spm-poverty-prediction.',
};

// Three forecast slides, checked against the live app on 22 November 2026. No child SPM forecast on the app is
// unconditional (both are badged Conditional), so the unconditional example is SNAP participation. No public record
// shows a person reviewing the forecasts: the S. 3596 arms went live through the publisher bot after an AI
// pre-submit review, so `bill.points` says that. Each slide renders its title, its images and their alt text;
// `points` and `footnotes` are not rendered.
export const thesisSlides = {
  unconditional: {
    title: 'An unconditional forecast: how many people received SNAP in September 2026?',
    points: [
      'On 7 September, an AI agent forecast 34.6 million, with an 80% interval of 34.0 to 35.2 million.',
      'The page shows the agent’s reasoning: the official USDA figures it read and the persistence model it chose.',
      'Its point and interval are public, so anyone can score the whole forecast once USDA publishes the figure.',
    ],
    image: { src: '/images/jrc-seville-harness-2026/thesis-snap-forecast.png', width: 1600, height: 790 },
    alt: 'Screenshot of the forecast page for US SNAP participation, September 2026: forecast 34.6 million, 80% prediction interval 34 to 35.2 million, by GPT-5.5 on 7 September 2026.',
    footnotes: ['app.thesisinstitute.org/snap-participation-september-2026, read 22 November 2026; forecast by GPT-5.5 on a prototype app.'],
  },
  conditional: {
    title: '2027 child poverty forecast if the refundable child tax credit threshold is $1 or less',
    points: [
      'An AI agent forecast 13.2% of children in poverty on the Supplemental Poverty Measure (80% interval 6.8% to 19.6%), against 13.4% if current law holds.',
      'The agent called PolicyEngine on the reform. The 2027 run was still computing, so the agent used PolicyEngine’s 2026 effect, a fall of 0.2 points, and said so.',
    ],
    images: [
      { src: '/images/jrc-seville-harness-2026/thesis-spm-conditional-top.png', width: 1880, height: 1000 },
      { src: '/images/jrc-seville-harness-2026/thesis-spm-conditional-pe-call.png', width: 1490, height: 260 },
      { src: '/images/jrc-seville-harness-2026/thesis-spm-conditional-arithmetic.png', width: 1490, height: 192 },
    ],
    alts: [
      'Screenshot of the forecast page “2027 child SPM poverty rate if ACTC threshold falls to $1”: conditional on legislation that sets the earned-income threshold at no more than $1 for tax year 2027; forecast 13.2%, 80% prediction interval 6.8% to 19.6%.',
      'Excerpt from the same page’s analysis: a reported tool call, policyengine.economy, that posts the threshold-zero reform to PolicyEngine and compares it with current law.',
      'Excerpt from the same page’s analysis: persistence prior 13.4%; PolicyEngine’s model input gives a 0.1966-point fall, rounded to 0.2, and because the live 2027 run was unfinished it is not treated as a 2027 estimate; point = 13.4 − 0.2 = 13.2%.',
    ],
    footnotes: ['app.thesisinstitute.org/spm-child-poverty-rate-cy2027-threshold-one-dollar and spm-child-poverty-rate-cy2027-current-law, read 22 November 2026; both forecasts by GPT-5.6 Sol on 6 August 2026, resolution date 31 December 2028. The page’s Tool evidence section says it captured no tool responses; the run record’s event log shows the PolicyEngine calls.'],
  },
  bill: {
    title: 'For a bill before Congress, AI agents forecast outcomes with and without it',
    points: [
      'An AI agent read S. 3596, the Stronger Start for Working Families Act, from Congress.gov and drafted its analysis.',
      'Agents forecast two outcomes, each under current law and with the bill enacted. The site publishes the gap, the bill’s forecasted effect, before Congress decides.',
      'Another AI model reviewed these forecasts before they went live, and each resolves against official data if its condition holds.',
    ],
    image: { src: '/images/jrc-seville-harness-2026/thesis-stronger-start-spm.png', width: 2120, height: 1230 },
    // The page's child SPM tab, captured 22 November 2026.
    alt: 'Screenshot of the bill page for the Stronger Start for Working Families Act, on its child poverty tab: the child poverty rate on the Supplemental Poverty Measure in calendar year 2027, 13.4% under current law and 13.2% with the bill enacted, with both 80% intervals on one scale. The page labels the 0.2-point gap the bill’s forecasted effect.',
    footnotes: ['app.thesisinstitute.org/bills/s3596-119, read 22 November 2026. The page marks its PolicyEngine impact “uncertified pairing”. The bill-analysis workflow runs when someone starts it and produces proposals for review.'],
  },
};

// Three skills AI should get right after the basics, as headings and icons only.
export const nextSkills = {
  title: 'Once AI nails the basics, what should it get right next?',
  cards: ['Understand questions in plain language', 'Ask the most informative next question', 'Know which models to use and how'],
};

export const millions = {
  title: 'What changes when millions of people can run open, tested policy models?',
  lead: 'AI agents could let more people ask policy questions in plain language and explore answers with open models.',
};

export const abundance = {
  title: 'What policy analysis abundance could look like',
  cards: [
    { tag: 'Rules', text: 'A catalog of policies as code that cites the law' },
    { tag: 'Data', text: 'Open data on society, designed to protect privacy' },
    { tag: 'Responses', text: 'Diverse, tested models of how responses fit together' },
    { tag: 'Predictions', text: 'Millions of conditional forecasts, ahead of policy choices' },
    { tag: 'Communication', text: 'Any person or AI agent can answer their policy questions' },
  ],
};

export const deliberation = {
  title: 'With abundant analysis, people still settle the hard question in democratic debate: what are we optimizing for?',
  lead: 'Then AI agents can search around the clock for the policies that make our values a reality.',
};

// The close: "Thank you" and four addresses.
export const end = {
  title: 'Thank you',
  links: ['policyengine.org', 'axiom.org', 'policybench.org', 'max@axiom.org'],
};
