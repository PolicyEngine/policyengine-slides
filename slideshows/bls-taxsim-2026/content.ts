export type BlsIcon =
  | 'book' | 'building' | 'calendar' | 'chart-bar' | 'chart-dots' | 'file-text' | 'flask'
  | 'github' | 'history' | 'play' | 'scale' | 'users' | 'world'
  | 'briefcase' | 'receipt' | 'gavel' | 'heart-handshake'
  | 'coin' | 'map-pin' | 'percentage' | 'list' | 'health';

export interface BlsSlideContent {
  id: string;
  title: string;
  body: string[];
  descriptions?: string[];
  minutes: number;
  notes: string;
  cover?: boolean;
  /** A full-slide component from slides/PEIntroSlides.tsx. */
  custom?: 'what-is-pe' | 'pe-today' | 'who-uses-pe' | 'thank-you';
  /** Clickable URL shown at the right of the slide title. */
  headerLink?: { label: string; url: string };
  /** Resource cards beside the bullet list (the Q&A slide). */
  links?: { label: string; url: string; description?: string; icon?: BlsIcon }[];
  /** Two-by-two icon cards in place of the bullet list. */
  cards?: { icon: BlsIcon; title: string; text: string }[];
  /** A headline figure shown beside the cards. */
  hero?: { value: string; label: string; source: string };
  /** One row per program, from eligibility to an expected value. */
  chains?: {
    intro: string;
    columns: string[];
    rows: { program: string; steps: { value: string; label: string }[] }[];
    takeaway: string;
    footnote: string;
  };
  /** Source surveys beside method notes. */
  sourcesPanel?: {
    sourcesTitle: string;
    sources: { code: string; name: string; role: string }[];
    blocks: { tag: string; text: string }[];
  };
  /** One bar per resource concept for the same household. */
  resourceBars?: {
    intro: string;
    rows: { label: string; detail: string; value: number }[];
    takeaway: string;
    footnote: string;
  };
  /** Same input and output files on each side; rows split by tax year to two engines. */
  routing?: {
    input: { title: string; detail: string; table: { columns: string[]; rows: { party: 'nber' | 'pe'; cells: string[] }[] } };
    engines: { party: 'nber' | 'pe'; years: string; name: string; detail: string }[];
    output: { title: string; detail: string; table: { columns: string[]; rows: { party: 'nber' | 'pe'; cells: string[] }[] } };
    takeaway: string;
    footnote?: string;
  };
  /** One input feeding two calculations, then a comparison and a next step. */
  compare?: {
    input: { title: string; text: string };
    engines: { title: string; text: string }[];
    output: { title: string; text: string };
    next: { title: string; text: string };
    outputsTitle?: string;
    outputs?: { field: string; meaning: string }[];
    takeaway?: string;
  };
  /** The install command and the before-and-after code for each environment. */
  dropIn?: {
    installTitle: string;
    installTabs: { label: string; lang: string; code: string }[];
    getStartedTitle: string;
    beforeLabel: string;
    afterLabel: string;
    tabs: { label: string; lang: string; before: string; after: string }[];
    takeaway: string;
  };
  /** Cards by general area: TAXSIM variables, PolicyEngine concepts or added variables, a short note, and a closing value card. */
  mapping?: {
    direction: 'input' | 'output';
    /** With `add`, an input card tells the story: TAXSIM variables, the limit, then the PolicyEngine variables that remove it. */
    rows: { area: string; icon: BlsIcon; taxsim: string[]; pe: string[]; note: string; add?: string[] }[];
    addLabel?: string;
    taxsimLabel?: string;
    value: { title: string; text: string };
  };
  /** The annual state tax update: last cycle's figures, last cycle and the next on one half-month axis, major changes, and the commitment. */
  updateTimeline?: {
    stats: { value: string; label: string }[];
    months: string[];
    lanes: {
      title: string;
      detail: string;
      /** `start` counts half-month slots from the first month: 0 is the first half of the first month. */
      segments: { start: number; span: number; title: string; text: string; tone: 'done' | 'sprint' | 'muted' | 'plan' | 'commit' }[];
    }[];
    changeGroups: { title: string; items: { state: string; text: string }[] }[];
    takeaway: string;
    source: string;
  };
  /** CE inputs that PolicyEngine can use and TAXSIM cannot: CE variables, PolicyEngine inputs, use, and TAXSIM's limit. */
  ceInputs?: {
    columns: [string, string, string, string];
    rows: { area: string; ce: string[]; pe: string[]; use: string; taxsim: string }[];
    source?: string;
  };
  /** A section opener: the section number; the title is the section name. */
  divider?: { number: string };
  /** How the collaboration started: the testing process before the emulator and the milestones after it. */
  origins?: {
    processTitle: string;
    processDetail?: string;
    steps: { title: string; text: string }[];
    /** A real test from the tracker, shown as YAML beside the steps. */
    example?: { title: string; source: string; url: string; code: string };
    milestonesTitle: string;
    milestones: { when: string; title: string; text: string }[];
  };
  /** TAXSIM on the left, PolicyEngine on the right, the agreement and year routing in the middle. */
  bridge?: {
    left: { title: string; party: 'nber' | 'pe'; items: { icon: BlsIcon; title: string; detail: string }[] };
    center: {
      title: string;
      date: string;
      detail: string;
      routingTitle: string;
      routing: { years: string; engine: string; party: 'nber' | 'pe' }[];
    };
    right: { title: string; party: 'nber' | 'pe'; items: { icon: BlsIcon; title: string; detail: string }[] };
  };
  /** Three calculations at the corners of a triangle, with the law at the center. */
  triangle?: {
    corners: {
      top: { icon: BlsIcon; title: string; text: string };
      left: { icon: BlsIcon; title: string; text: string };
      right: { icon: BlsIcon; title: string; text: string };
    };
    /** Labels for the sides: top–left, top–right, and left–right. */
    sides: { left: string; right: string; bottom: string };
    center: { title: string; text: string };
    /** Numbered steps shown to the left of a smaller triangle. */
    steps?: { title: string; text: string }[];
    takeaway: string;
  };
  /** A live iframe with a side column of demo steps. */
  embed?: {
    url: string;
    footnote?: string;
  };
  /** A left-to-right process of step cards. */
  process?: {
    intro?: string;
    stats?: { value: string; label: string }[];
    steps: { title: string; text: string; output?: string }[];
    examples?: { tag: string; title: string; text: string; outcome: string; url: string }[];
    sides?: { title: string; items: string[] }[];
    takeaway?: string;
    loop?: string;
  };
  /** Versions and releases: headline figures, the pin command, and what ships with every release. */
  releases?: {
    stats: { value: string; label: string }[];
    pin: { title: string; code: string; note: string };
    items: { icon: BlsIcon; title: string; text: string }[];
    takeaway?: string;
  };
  /** The transition to Axiom in stages: today, next, and what stays the same throughout. */
  axiomPlan?: {
    intro?: string;
    stages: { label: string; title: string; items: string[]; tone: 'now' | 'next' | 'always' }[];
    takeaway?: string;
    footnote?: string;
  };
  detail?: {
    intro?: string;
    columns?: string[];
    rows?: string[][];
    code?: string;
    caption?: string;
    takeaway?: string;
    source?: { label: string; url: string };
  };
}

const TAXSIM_SITE: { label: string; url: string } = { label: "policyengine.org/us/taxsim", url: "https://www.policyengine.org/us/taxsim" };
const TAXSIM_RUN = { label: "policyengine.org/us/taxsim/run", url: "https://www.policyengine.org/us/taxsim/run" };
const TAXSIM_DASHBOARD = { label: "policyengine.org/us/taxsim/dashboard", url: "https://www.policyengine.org/us/taxsim/dashboard" };

/** Slide content. 60 minutes of presentation, including the live demo, plus 30 minutes of Q&A. */
export const blsSlides: BlsSlideContent[] = [
  // Introduction and context: 12 minutes
  {
    "id": "cover",
    "title": "Tax and benefit imputation for the CE",
    "body": [
      "PolicyEngine’s TAXSIM emulator and beyond",
      "Max Ghenis, Pavel Makarchuk and David Trimmer",
      "BLS seminar · October 8, 2026"
    ],
    "minutes": 1,
    "notes": "Introduce the speakers and thank the BLS hosts and the CE team.",
    "cover": true
  },
  {
    "id": "agenda",
    "title": "Today’s discussion",
    "body": [
      "Introduction and context",
      "The TAXSIM emulator",
      "Validation",
      "Beyond TAXSIM",
      "What’s next",
      "Q&A and discussion"
    ],
    "descriptions": [
      "What PolicyEngine is, who funds and uses it, why we built an emulator, and how the NBER collaboration started.",
      "A drop-in TAXSIM interface, where each calculation happens, versions and releases, and a live demo in the browser.",
      "How a disagreement is resolved with the engines, independent validators and the law, how that shapes the emulator, the public dashboard, and our progress.",
      "What PolicyEngine models beyond TAXSIM’s inputs, and methods for missing survey inputs, SNAP participation and Medicaid valuation.",
      "The 2026 tax rules, Axiom as our next-generation rules engine, and a possible CE pilot.",
      "Questions on the methods, implementation, and opportunities for collaboration."
    ],
    "minutes": 1,
    "notes": "The first five sections total 60 minutes, leaving no slack before the 30-minute Q&A. Show the drop-in swap, where each calculation happens and how versions work, then run the live demo, then give an overview of the validation process. Then show what PolicyEngine models beyond TAXSIM, and introduce benefit imputation as an extension that needs more data and methodological choices. Close with what’s next: the 2026 rules, Axiom and a possible CE pilot. Reserve 30 minutes for Q&A. Thesia Garner’s question list (email of October 7) is answered inside the deck rather than on its own slide: funding and staffing on PolicyEngine today (slide 5); users on slides 6 and 9; versions, release notes, input and output changes and support on Versions and releases (slide 13); testing in the validation section; in-kind benefits on slides 23 and 25; the annual update and the road map in What’s next (slides 28–32). Each of those slides’ notes carries the spoken answer."
  },
  {
    "id": "section-intro",
    "title": "Introduction and context",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "01" }
  },
  {
    "id": "what-is-pe",
    "title": "PolicyEngine: free, open-source microsimulation",
    "body": [
      "Rules: federal and state taxes and major benefit programs",
      "Households: survey data enhanced and calibrated, or any household you enter",
      "Reforms: change any parameter and see the cost, poverty and distributional effects"
    ],
    "minutes": 2,
    "notes": "Give the one-minute version of PolicyEngine: an open-source rules engine, a household dataset built from public surveys, and a way to score reforms. Keep the focus on the rules and the household data, because the TAXSIM emulator uses the same rules engine. The rules and the survey data are separate, so the same rules can serve any dataset. The TAXSIM adapter maps one input format into the model’s households, but it does not remove the research choices about missing data and participation; the emulator section covers those. Answers Thesia’s question on reviewing the internal logic: all of it is public. PolicyEngine US and policyengine-core are AGPL-3.0 and the emulator is MIT. The US model has 6,266 parameter files, each citing the statute, regulation or agency document that sets it (for example, the child tax credit amount cites 26 U.S.C. 24(h)(2) and IRS Rev. Proc. 2025-32), 6,177 variable formula files and 4,932 YAML test files (policyengine-us main, October 8, 2026). The emulator’s input and output mappings are open too (config/variable_mappings.yaml). Adapted from the cpid-webinar-2026 deck (September 2026).",
    "custom": "what-is-pe"
  },
  {
    "id": "pe-today",
    "title": "PolicyEngine today",
    "body": [
      "95,000+ parameters, 5,500+ variables and 4,932 test files in the US model",
      "Public code since June 2021, with 133 contributors to the US model",
      "NBER, the Atlanta Fed and No 10 Downing Street work with the models",
      "A nonprofit, fiscally sponsored by the PSL Foundation, funded by foundation grants and the organizations that build on the models"
    ],
    "minutes": 1,
    "notes": "Use the numbers to show scale and testing, not to sell. The NBER memorandum of understanding is the reason the TAXSIM emulator exists; the next section covers it. Test files (4,932 YAML files under policyengine_us/tests) and contributors (133 people; the GitHub list shows 136 accounts, 3 of them bots) recounted on October 8, 2026; the other figures are from the gettsim-2026 deck (September 3, 2026). Answers Thesia’s funding question: PolicyEngine is a nonprofit, fiscally sponsored by the PSL Foundation. The funders on the slide are the public supporters page (policyengine.org/us/supporters): Arnold Ventures, the National Science Foundation (a POSE Phase I grant, $299,974, September 2025 to August 2026), the Nuffield Foundation, NEO Philanthropy, the Pritzker Children’s Initiative, and MyFriendBen among the organizations that build on the models. Max speaks to future funding. Answers the staffing question: the emulator is maintained by Pavel Makarchuk, David Trimmer and Max Ghenis; the US model it calls had 20 people committing in the past 12 months. Do not put headcount or turnover figures on the record beyond what Max chooses to say.",
    "custom": "pe-today"
  },
  {
    "id": "who-uses-pe",
    "title": "Researchers and developers build with these rules",
    "body": [
      "Federal users: BEA and the Joint Economic Committee",
      "Research institutions: Brookings, AEI, Niskanen, CRFB, Georgetown, USC, the University of Michigan and UHERO",
      "Benefit navigators: MyFriendBen, Amplifi, Mirza and Starlight"
    ],
    "minutes": 1,
    "notes": "Point out the federal statistical user, BEA, because it is closest to the CE team’s work, and the university research centers, such as the University of Michigan and UHERO (the University of Hawaii Economic Research Organization). Adapted from the cpid-webinar-2026 deck (September 2026).",
    "custom": "who-uses-pe"
  },
  {
    "id": "why-emulator",
    "title": "Why we built a TAXSIM emulator",
    "body": [],
    "minutes": 1,
    "notes": "Spoken setup: PolicyEngine grew out of the UBI Center; our first model code dates to August 2020 (the openfisca-uk repository, now policyengine-uk), we launched PolicyEngine UK in October 2021, and the US model’s code started in June 2021. Say “started in 2020” or “launched in 2021” rather than “founded six years ago”: no page gives a founding year. We built a microsimulation model first, for scoring reforms and computing benefits. Our first state income tax, Massachusetts, merged on April 30, 2022 (policyengine-us PR #715), and we opened the issue to validate against TAXSIM35 on April 19, 2022 (#704), so state taxes and TAXSIM validation began together. On April 15, 2024 we launched beta state income tax modeling for all 50 states and DC, checked against TAXSIM for tax year 2021 in each state (43 states and DC have a broad income tax; the other seven have none). The dashboard now compares tax years 2021 to 2025. Dan Feenberg’s TAXSIM home page (taxsim.nber.org; first person, footer contact Daniel Feenberg) says: “A successor to Taxsim is being built by PolicyEngine with my cooperation.” Do not quote the next sentence on that page, which says the emulator is fully compatible with TAXSIM files. BEA’s Distribution of Personal Income technical document (Marina Gindelsky, June 2026) says it runs PolicyEngine for years 2021 forward, and that the emulator “has enabled BEA to continue to produce Disposable Personal Income.” The sentence uses “is being built”: do not say NBER has named or certified PolicyEngine as TAXSIM’s replacement. Quote only those BEA fragments: the same footnote and section 7 call TAXSIM-35 discontinued, which we do not say, because NBER maintains TAXSIM and runs an open beta coded through 2024 law. No public source says anything about Dan Feenberg’s plans; do not raise them. Sources: github.com/PolicyEngine/policyengine-us/pull/715, github.com/PolicyEngine/policyengine-us/issues/704, policyengine.org/us/research/state-tax-model-beta, taxsim.nber.org, apps.bea.gov/data/special-topics/distribution-of-personal-income/national/technical-document.pdf.",
    "hero": {
      "value": "2021+",
      "label": "BEA runs PolicyEngine for tax years 2021 forward in its distribution of personal income.",
      "source": "BEA, Distribution of Personal Income technical document, June 2026"
    },
    "cards": [
      { "icon": "history", "title": "Microsimulation first", "text": "PolicyEngine launched in 2021 to model taxes and benefits for any household or survey." },
      { "icon": "map-pin", "title": "State taxes, checked against TAXSIM", "text": "Our first state income tax and TAXSIM35 validation began in April 2022; beta coverage of every state followed in 2024." },
      { "icon": "book", "title": "NBER names a successor", "text": "“A successor to Taxsim is being built by PolicyEngine with my cooperation.” Daniel Feenberg, NBER TAXSIM page" },
      { "icon": "world", "title": "One model for both uses", "text": "The emulator runs TAXSIM files on the same open rules that score reforms and benefits." }
    ]
  },
  {
    "id": "origins",
    "title": "How the collaboration started",
    "body": [],
    "minutes": 2,
    "notes": "Ease into the partnership before the agreement slide. Validation against TAXSIM35 started in April 2022 (policyengine-us issue #704, “Validate against TAXSIM 35”). Before the emulator existed, the team compared records one at a time and turned each one into a YAML integration test in policyengine-us. The example on the slide is issue #1504 (November 15, 2022), trimmed: a 70-year-old with $36,000 of tax-exempt pension income in 2021, with SSI and WIC set to zero because they are not in TAXSIM35, and the expected values from the online TAXSIM35 (income_tax of −$1,400, the 2021 recovery rebate). The test failed because PolicyEngine counted tax-exempt pension income in AGI; PR #1505 fixed it the same day and the test stayed in the suite. Issues #1031 (Massachusetts senior circuit breaker, July 2022) and #1279 (2021 AMT, August 2022) follow the same pattern. The method then scaled up to differential testing: random samples of 100,000 tax units, about 1.6 million units across two sample sequences, went through TAXSIM35 and PolicyEngine US for tax year 2021, federal and each state. The units with the largest differences came out one at a time, and the team filled out the relevant part of the tax form by hand to decide which model was wrong. If TAXSIM35 was wrong, its code was patched; if PolicyEngine was wrong, an issue with a failing test was filed. NBER made this possible by sharing the TAXSIM35 source code. The method is written up in policyengine-us discussion #2389. The policyengine-taxsim emulator started in May 2024, and NBER filed its first issue on its public tracker on September 22, 2024, and has filed about 830 since. In 2025, NSF awarded PolicyEngine a POSE Phase I grant (award 2518372, September 2025 to August 2026), and NBER’s TAXSIM developer served as the external mentor through the I-Corps for POSE training. The September 2025 memorandum of understanding (next slide) formalized more than three years of this work. Sources: github.com/PolicyEngine/policyengine-us/issues/704, github.com/PolicyEngine/policyengine-us/discussions/2389, nsf.gov/awardsearch/show-award/?AWD_ID=2518372, policyengine.org/us/research/nsf-pose-phase-1-grant.",
    "origins": {
      "processTitle": "Before the emulator: record by record",
      "steps": [
        { "title": "Compare one record", "text": "One household runs through both models." },
        { "title": "Trace the difference", "text": "Fill out the tax form to find the error." },
        { "title": "Write a YAML test", "text": "The record becomes an integration test." },
        { "title": "Fix the model at fault", "text": "PolicyEngine keeps the test; NBER corrects TAXSIM35." },
        { "title": "Scale up", "text": "Samples of 100,000 tax units find the next records." }
      ],
      "example": {
        "title": "One record as a YAML test",
        "source": "policyengine-us #1504 · November 2022",
        "url": "https://github.com/PolicyEngine/policyengine-us/issues/1504",
        "code": "- name: Tax unit with tax-exempt pension income as sole income source.\n  period: 2021\n  input:\n    people:\n      person1:\n        age: 70\n        tax_exempt_pension_income: 36000\n        ssi: 0  # not in TAXSIM35\n        wic: 0  # not in TAXSIM35\n  output:  # expected results from online TAXSIM35 10/24/22 version\n    taxsim_tfica: 0.00\n    income_tax: -1400.00"
      },
      "milestonesTitle": "From testing to partnership",
      "milestones": [
        { "when": "2022", "title": "Validation begins", "text": "NBER shares TAXSIM35 code for testing." },
        { "when": "2024", "title": "The emulator", "text": "TAXSIM inputs and outputs on PolicyEngine rules." },
        { "when": "2025", "title": "NSF POSE Phase I", "text": "NBER’s TAXSIM developer is external mentor through I-Corps." },
        { "when": "Sep 2025", "title": "Formal agreement", "text": "NBER and PolicyEngine sign a memorandum of understanding." }
      ]
    }
  },
  {
    "id": "nber",
    "title": "The NBER collaboration",
    "body": [
      "TAXSIM at NBER: since the 1970s, 1,200+ citing papers, federal law from 1960 and state law from 1977",
      "A memorandum of understanding in September 2025; one interface routes 1960–2020 to TAXSIM35 and 2021 onward to PolicyEngine",
      "PolicyEngine: open source since 2021, 95,000+ federal and state parameters, and benefit programs such as SNAP and Medicaid",
    ],
    "minutes": 2,
    "notes": "Start on the left with TAXSIM, end on the right with PolicyEngine, and use the middle for the agreement and how one interface routes tax years. Close with: both teams validate the emulator, and the work has improved how both TAXSIM and PolicyEngine encode tax law. TAXSIM has run at NBER since the 1970s; NBER still maintains it, and more than 1,200 papers cite the 1993 paper that introduced it. Think tanks such as Brookings and federal agencies rely on it. NBER started filing differences on the emulator’s public GitHub tracker in 2024 (first issue: September 22, 2024). The memorandum of understanding with NBER was announced on September 5, 2025. policyengine-taxsim 3.0.0 was released on September 29, 2026, one of 80 PyPI releases since February 2026. One interface covers every tax year: TAXSIM35 handles 1960–2020 (state law from 1977) and PolicyEngine handles 2021 onward. PolicyEngine facts (right): public code since June 2021, 133 contributors to the US model, 95,000+ parameters and 4,693 test files, from the gettsim-2026 deck (September 3, 2026); check them before the talk. The benefit list follows the Benefits and taxes section of policyengine.org/us/taxsim, which also names housing vouchers, the EITC and the CTC. Optional context for this audience, not on the slide: the CE published TAXSIM-based tax estimates from the 2013 data through the 2023 data, and the 2024 data has none (BLS Monthly Labor Review, 2015; CE PUMD Getting Started Guide). Sources: https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim and https://pypi.org/project/policyengine-taxsim/",
    "headerLink": TAXSIM_SITE,
    "bridge": {
      "left": {
        "title": "TAXSIM at NBER",
        "party": "nber",
        "items": [
          { "icon": "history", "title": "Developed since the 1970s", "detail": "At NBER, which still maintains it" },
          { "icon": "book", "title": "1,200+ citing papers", "detail": "Of the 1993 TAXSIM paper" },
          { "icon": "calendar", "title": "Federal law from 1960", "detail": "State law from 1977" },
          { "icon": "building", "title": "Used in research and policy", "detail": "Think tanks and federal agencies" }
        ]
      },
      "center": {
        "title": "Memorandum of understanding",
        "date": "September 2025",
        "detail": "NBER and PolicyEngine",
        "routingTitle": "One interface, every tax year",
        "routing": [
          { "years": "1960–2020", "engine": "TAXSIM35", "party": "nber" },
          { "years": "2021 onward", "engine": "PolicyEngine", "party": "pe" }
        ]
      },
      "right": {
        "title": "PolicyEngine",
        "party": "pe",
        "items": [
          { "icon": "github", "title": "Open source since 2021", "detail": "133 contributors to the US model" },
          { "icon": "scale", "title": "95,000+ parameters", "detail": "Federal, every state and DC" },
          { "icon": "users", "title": "Tax and benefit programs", "detail": "Income tax, SNAP, Medicaid, CHIP, SSI, TANF, WIC and ACA subsidies" },
          { "icon": "building", "title": "Used in research and policy", "detail": "Joint Economic Committee, BEA, universities and benefit navigators" }
        ]
      }
    }
  },

  // The TAXSIM emulator: 6 minutes
  {
    "id": "section-emulator",
    "title": "The TAXSIM emulator",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "02" }
  },
  {
    "id": "drop-in",
    "title": "A drop-in replacement for TAXSIM35",
    "body": [
      "Same input file and output variables",
      "Swap one command or library call",
      "Examples for the CLI, Python, R, Stata, SAS and Julia",
      "Earlier years still route to TAXSIM35"
    ],
    "minutes": 3,
    "notes": "The table shows the swap that the TAXSIM site gives for six environments; the teal part is what changes. Shell, SAS and Julia only swap the command name. R swaps the package and function (library(policyenginetaxsim), then policyengine_calculate_taxes). Stata writes the file, runs the command and reads the result back. Python can call the runner on a data frame. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs). Ask CE staff which environment their current tax-imputation code uses. Source: https://www.policyengine.org/us/taxsim, read October 5, 2026. For Stata, SAS and Julia: if the command is not found, run uv tool dir --bin and use the full path it prints.",
    "headerLink": TAXSIM_SITE,
    "dropIn": {
      "installTitle": "Installation",
      "installTabs": [
        {"label": "macOS/Linux", "lang": "Terminal", "code": "# Install uv package manager (if you don't have it)\ncurl -LsSf https://astral.sh/uv/install.sh | sh\n\n# Install policyengine-taxsim\nuv tool install policyengine-taxsim"},
        {"label": "Windows", "lang": "Terminal", "code": "# Install uv package manager (if you don't have it)\npowershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"\n\n# Install policyengine-taxsim\nuv tool install policyengine-taxsim"}
      ],
      "getStartedTitle": "Get started",
      "beforeLabel": "TAXSIM35 (before)",
      "afterLabel": "PolicyEngine TAXSIM (after)",
      "tabs": [
        {"label": "CLI", "lang": "Shell", "before": "taxsim35 < input.csv > output.csv", "after": "[[policyengine-taxsim]] < input.csv > output.csv"},
        {"label": "Python", "lang": "Python", "before": "import subprocess\nresult = subprocess.run(\n  \"taxsim35 < input.csv > output.csv\",\n  shell=True\n)", "after": "[[from policyengine_taxsim.runners import PolicyEngineRunner]]\nimport pandas as pd\n\ndf = pd.read_csv(\"input.csv\")\nresult = [[PolicyEngineRunner(df).run()]]"},
        {"label": "R", "lang": "R", "before": "library(usincometaxes)\nresult <- taxsim_calculate_taxes(input)", "after": "library([[policyenginetaxsim]])\nresult <- [[policyengine_calculate_taxes]](input)"},
        {"label": "Stata", "lang": "Stata", "before": "taxsimlocal35, replace", "after": "export delimited using \"txpydata.raw\", delimiter(\",\") replace\n! [[policyengine-taxsim]] < txpydata.raw > output.raw\nimport delimited using \"output.raw\", delimiter(\",\") clear"},
        {"label": "SAS", "lang": "SAS", "before": "%let rc = %sysfunc(system(\n  taxsim35 < input.csv > output.csv\n));", "after": "%let rc = %sysfunc(system(\n  [[policyengine-taxsim]] < input.csv > output.csv\n));"},
        {"label": "Julia", "lang": "Julia", "before": "run(pipeline(`taxsim35`,\n  stdin=\"input.csv\",\n  stdout=\"output.csv\"\n))", "after": "run(pipeline(`[[policyengine-taxsim]]`,\n  stdin=\"input.csv\",\n  stdout=\"output.csv\"\n))"}
      ],
      "takeaway": "Existing TAXSIM workflows carry over in every supported environment, with no added complexity."
    }
  },
  {
    "id": "record-to-result",
    "title": "Where each calculation happens",
    "body": [
      "The same TAXSIM input file goes in, with any mix of tax years",
      "Rows for 1960–2020 go to the bundled TAXSIM35; rows for 2021 onward go to PolicyEngine US",
      "The same TAXSIM output file comes out, with the same variables for every year"
    ],
    "minutes": 3,
    "notes": "Show where the calculation happens. The emulator reads each row’s tax year: rows for 1960–2020 run on the TAXSIM35 binary bundled with the package, and rows for 2021 onward run on PolicyEngine US. Both paths write the same TAXSIM output variables, so one file can mix years. The example is one California household (married, two children aged 8 and 12, $80,000 and $50,000 in wages) run for 2019 and 2024 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2 on October 5, 2026: 2019 gives fiitax $10,949, siitax $4,583 and fica $19,890 through TAXSIM35; 2024 gives fiitax $8,282, siitax $3,214 and fica $19,890 through PolicyEngine. The input columns: state 5 is California in TAXSIM’s codes, mstat 2 is married filing jointly, depx is the number of dependents, and pwages and swages are the two spouses’ wages. fica is payroll tax, employee and employer shares together. Mapping details if asked: pwages and swages become each person’s employment_income, page and sage become ages, and fiitax and siitax map to income_tax and state_income_tax. State codes follow TAXSIM’s own numbering, so New Jersey is 31, while 34 (the Census FIPS code for New Jersey) means North Carolina and silently applies the wrong state’s law. A run record should note the emulator and model versions.",
    "routing": {
      "input": {
        "title": "TAXSIM input file",
        "detail": "One row per tax unit, any tax year",
        "table": {
          "columns": ["year", "state", "mstat", "depx", "pwages", "swages"],
          "rows": [
            { "party": "nber", "cells": ["2019", "5", "2", "2", "80000", "50000"] },
            { "party": "pe", "cells": ["2024", "5", "2", "2", "80000", "50000"] }
          ]
        }
      },
      "engines": [
        { "party": "nber", "years": "Tax years 1960–2020", "name": "TAXSIM35", "detail": "NBER’s model, bundled with the emulator" },
        { "party": "pe", "years": "Tax years 2021 onward", "name": "PolicyEngine US", "detail": "Federal and state rules" }
      ],
      "output": {
        "title": "TAXSIM output file",
        "detail": "Same variables for every year",
        "table": {
          "columns": ["year", "fiitax", "siitax", "fica"],
          "rows": [
            { "party": "nber", "cells": ["2019", "10949", "4583", "19890"] },
            { "party": "pe", "cells": ["2024", "8282", "3214", "19890"] }
          ]
        }
      },
      "takeaway": "One file in and one file out. The tax year decides which engine calculates each row."
    }
  },
  {
    "id": "releases",
    "title": "Versions and releases",
    "body": [],
    "minutes": 2,
    "notes": "Answers Thesia’s production-reliability and version-notes questions. Release schedule: there is no separate version per tax year. Parameters carry dated values (the EITC phase-out start file runs from 1995 and cites IRS releases through 2026), so every release computes every tax year it covers. Merged changes ship automatically, often several in one release: both repositories bump the version from the changelog fragments and publish to PyPI after the tests pass (PolicyEngine US waits for its full suite; the emulator for lint and pytest on Linux, macOS and Windows; policyengine-us push.yaml, policyengine-taxsim ci.yml). From July 10 to October 7 that was 286 PolicyEngine US releases, about three a day, and 15 emulator releases; each release is small, about two changelog entries. Tests run on every pull request, but GitHub does not block a merge that fails them; merging is a reviewer’s decision. A newer release can change an earlier year’s result when a fix lands, which is why a study pins both packages: the command on the slide resolves on Python 3.11 (policyengine-taxsim 3.0.1 with PolicyEngine US 2.25.2, the versions behind the examples in this deck); on Python 3.10 it cannot resolve, and an unpinned install there falls back to an older 1.x model with the older S-corporation default. Without a pin, the emulator accepts any PolicyEngine US release from 1.711.0 on and takes the newest. The output file does not record versions yet, so log both with each run; a version stamp in the output is a reasonable request. PyPI does not keep every PolicyEngine US release: only five from before July 2026 remain, and 1.711.0, the emulator’s own minimum, is gone. For long-lived reproducibility, archive the installed environment or wheels with the results. The documentation page’s pin example (policyengine-us 1.555.0) names a version PyPI no longer has; use a current pair. Version notes: CI checks each pull request for a changelog entry typed added, changed, fixed, removed or breaking, and the CHANGELOG files in both repositories list them by version (for example, policyengine-us 2.33.1 on October 8 fixed CalEITC earned income to FTB 3514 line 19). The entries are grouped by change type, not policy area, so a tax-law-only list per tax year would be produced from the changelog and the parameter files that changed; whether to offer BLS such a digest is Max’s call. Input and output changes: the format stays TAXSIM’s; under the current release script a breaking entry bumps the major version, and the only breaking change so far, 3.0.0 on September 29, made S-corporation income passive by default for the net investment income tax, as TAXSIM treats it, and added --scorp-treatment to choose. Open pull requests would report v19, v29 and Massachusetts v36 as TAXSIM-35 defines them, without changing liabilities (#1407), and return Python runner rows in input order (#1406). Use Python 3.11 or later: PolicyEngine US 2.x requires it. Support: the public GitHub tracker, where every report and its resolution stays visible; for the 121 issues NBER filed in the last 90 days, the median first PolicyEngine reply came in 23.5 hours. There is no support email; any support commitment to BLS is Max’s call. Documentation: policyengine.org/us/taxsim (install, usage, variable mappings), the GitHub README, the R package (policyenginetaxsim 0.1.0, installed from GitHub, not yet on CRAN) and the PolicyEngine US documentation at policyengine.github.io/policyengine-us. Sources: pypi.org/pypi/policyengine-us/json, pypi.org/pypi/policyengine-taxsim/json, github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md and the GitHub issue tracker, October 8, 2026.",
    "headerLink": { "label": "Changelog", "url": "https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md" },
    "releases": {
      "stats": [
        { "value": "286", "label": "PolicyEngine US releases, July 10 to October 7" },
        { "value": "15", "label": "Emulator releases in the same 90 days" },
        { "value": "Every year", "label": "Each release computes every tax year it covers" },
        { "value": "23.5 hours", "label": "Median first reply to NBER’s reports, last 90 days" }
      ],
      "pin": {
        "title": "Pin both packages to reproduce a run",
        "code": "uv tool install --python 3.11 \\\n  policyengine-taxsim==3.0.1 \\\n  --with policyengine-us==2.25.2",
        "note": "Needs Python 3.11 or later. Without a pin, the emulator takes the newest PolicyEngine US release. Record both versions with each run."
      },
      "items": [
        { "icon": "calendar", "title": "One release, every tax year", "text": "Parameters carry dated values, so there is no separate version per tax year." },
        { "icon": "github", "title": "Merged changes ship automatically", "text": "Tests run on every pull request, and a release reaches PyPI only after its tests pass." },
        { "icon": "list", "title": "Typed changelog entries", "text": "CI checks each pull request for an entry: added, changed, fixed, removed or breaking." },
        { "icon": "users", "title": "Support on the public tracker", "text": "Every report and its resolution stay visible on GitHub." }
      ],
      "takeaway": "The file format stays TAXSIM’s. The last breaking change, 3.0.0 on September 29, made S-corporation income passive by default for the net investment income tax, as TAXSIM treats it."
    }
  },

  // Live demonstration: 13 minutes
  {
    "id": "demo-live",
    "title": "Live demo: run the sample file",
    "body": [],
    "minutes": 10,
    "notes": "Go straight into the live demo after the routing diagram and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. Start by loading the 3-household sample and reading household 1 aloud: a married couple in California (state code 5, mstat 2) with two dependents and $80,000 and $50,000 in wages. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab. Demo steps: (1) Load the 3-household sample; (2) Keep Standard output: federal and state tax, FICA and marginal rates; (3) Run and download in the browser; (4) Read the results for each household; (5) Switch to Full for AGI, credits, deductions and AMT.",
    "headerLink": TAXSIM_RUN,
    "embed": {
      "url": "https://www.policyengine.org/us/taxsim/run"
    }
  },

  // Validation: 10 minutes
  {
    "id": "section-validation",
    "title": "Validation",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "03" }
  },
  {
    "id": "three-checks",
    "title": "Three calculations, one arbiter",
    "body": [],
    "minutes": 3,
    "notes": "Walk the four steps on the left, then point to the triangle. (1) A mismatch between PolicyEngine and TAXSIM on a CPS record becomes a GitHub issue; NBER files most of them. (2) An agentic workflow explores the disagreement: it reruns the record in both engines, checks third-party validators such as a completed TaxAct return or Axiom’s encoding of the statute, and reads the statute and the official instructions. (3) The findings become a recommendation to adjust one engine, or to agree a convention with NBER when TAXSIM’s inputs cannot carry what the law needs; a person reviews every recommendation before it is posted or merged. (4) After the fix ships, the record is rerun to confirm the disagreement is gone. The validators do not vote: the statute and the official instructions decide which calculation is right, because two engines can share an error that no agreement rate would reveal. PolicyEngine fixes carry tests whose expected values come from the form or statute. Answers Thesia’s testing question, with the next two slides: every pull request runs the automated tests, and a release reaches PyPI only after its tests pass; merging is a reviewer’s decision, so GitHub does not block a failing pull request automatically. PolicyEngine US has 4,932 YAML test files, and the emulator has 276 Python test functions that run on Linux, macOS and Windows (October 8, 2026).",
    "triangle": {
      "corners": {
        "top": { "icon": "building", "title": "TAXSIM35", "text": "NBER’s calculator, the reference engine" },
        "left": { "icon": "github", "title": "PolicyEngine", "text": "Open-source rules, run through the emulator" },
        "right": { "icon": "file-text", "title": "Third-party validators", "text": "TaxAct, Axiom and others" }
      },
      "sides": {
        "left": "Compared on every record",
        "right": "An independent check when they disagree",
        "bottom": "Reconciled against the forms"
      },
      "center": { "title": "Statutes and official instructions", "text": "The law decides which calculation is right" },
      "steps": [
        { "title": "Issue filed", "text": "A mismatch between PolicyEngine and TAXSIM on a CPS record becomes an issue." },
        { "title": "Agentic review", "text": "An agentic workflow explores the disagreement using both engines, the validators and the statutes." },
        { "title": "Recommendation", "text": "The findings recommend adjusting one of the engines, or agreeing a convention with NBER." },
        { "title": "Rerun", "text": "After the fix ships, we rerun the record to confirm the disagreement is resolved." }
      ],
      "takeaway": "Agreement measures consistency. The law decides correctness, because two engines can share an error."
    }
  },
  {
    "id": "validation-process",
    "title": "How this process shapes the emulator",
    "body": [],
    "minutes": 2,
    "notes": "Each resolved case does not end with the fix. It is compiled on the emulator’s GitHub issue tracker with the input row, both engines’ results and the resolution, PolicyEngine fixes ship with a test so the disagreement cannot quietly return, and the dashboard reruns every state and year so we can compare how complete each area’s agreement is. The lowest-agreement areas set what we look at next. The figures describe the comparison on the public dashboard: 111,347 Enhanced CPS households, tax years 2021–2025, all 50 states and DC, run through both engines. If asked for agreement rates: for 2023, 89.8% agree on federal tax and 94.9% on state tax within ±1% of gross income (data update of September 23, 2026). The comparator default is ±$15. Check the dashboard the day before: its September 23 data treats S-corporation income as active, and PR #1199 (September 29) made passive the default, so a refresh would change the federal figures. If asked about #1248: Dan Feenberg opened it on September 25 about his own TAXSIM changes, closed it on September 29, and has filed issues since. The dashboard data also fixed the Alabama coding (state 1, 1,155 households, separate from Texas) in the September 24 release. Source: https://www.policyengine.org/us/taxsim/dashboard",
    "process": {
      "stats": [
        { "value": "111,347", "label": "Enhanced CPS households" },
        { "value": "2021–2025", "label": "Tax years" },
        { "value": "50 + DC", "label": "States in the comparison" },
        { "value": "2 engines", "label": "TAXSIM35 and PolicyEngine" }
      ],
      "steps": [
        { "title": "Compile", "text": "Every resolved case is stored as an issue on the emulator’s GitHub tracker, with the input row, both results and the resolution." },
        { "title": "Lock in", "text": "PolicyEngine fixes ship with a test case, so a resolved disagreement cannot quietly return." },
        { "title": "Compare by area", "text": "The dashboard reruns every state and year, showing how complete each area’s agreement is." },
        { "title": "Prioritize", "text": "The areas with the lowest agreement set what we look at next." }
      ],
      "loop": "Each PolicyEngine release and each TAXSIM update reruns the comparison."
    }
  },
  {
    "id": "dashboard-live",
    "title": "The public validation dashboard",
    "body": [],
    "minutes": 3,
    "notes": "About 3 minutes: a quick overview, then one or two examples. Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list; a second state with near-complete agreement shows what a resolved area looks like. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab. Dashboard steps: (1) Pick a tax year, 2021 to 2025; (2) Choose a tolerance; (3) See agreement by state; (4) Inspect a state to list its households.",
    "headerLink": TAXSIM_DASHBOARD,
    "embed": {
      "url": "https://www.policyengine.org/us/taxsim/dashboard"
    }
  },
  {
    "id": "issue-process",
    "title": "From a reported difference to a fix",
    "body": [],
    "minutes": 2,
    "notes": "Present the change this work has driven in both engines. Do not say how quickly NBER corrects TAXSIM: TAXSIM is closed source with no public release cadence, so we cannot track when its corrections ship, only that NBER confirmed them. NBER files most of the difference reports; we file questions when TAXSIM appears to differ from the law. Each case is reproduced with a minimal household, classified, and resolved. Exact counts on October 7, 2026: 1,186 issues on the policyengine-taxsim tracker since July 15, 2024, of which 1,010 are closed; 159 questions titled Does TAXSIM or Does taxsimtest since February 2026. TAXSIM corrections: about 106 issues have an NBER comment that confirms a TAXSIM correction (for example “Agreed, corrected”, “Fixed in Taxsim” or “I changed taxsim”), and about 60 more have only “Agreed” or “Now matches”, which do not say which engine changed. This is a lower bound: TAXSIM’s working builds are not public, so changes made without a comment are not counted. PolicyEngine changes, if asked: 163 PolicyEngine US pull requests since July 2024 cite TAXSIM comparisons (mostly state rule corrections), and the emulator has 180 merged pull requests, about a third of them tooling such as CI, versioning and the dashboard. These are not on the slide, because merged pull requests and confirmed corrections are not counted the same way and should not be compared. The tracker grows by about 40 issues a day this week, so the slide uses rounded figures. The three examples show the three outcomes: #1241 (opened September 25, fixed by PR #1244 on September 29), #1235 (opened September 24; NBER replied Agreed and corrected TAXSIM), and #1251 (Minnesota renter’s credit: the comparison return had no Schedule M1RENT). Sources: https://github.com/PolicyEngine/policyengine-taxsim/issues and https://github.com/PolicyEngine/policyengine-us/pulls",
    "process": {
      "stats": [
        { "value": "1,100+", "label": "Issues on the public tracker since July 2024" },
        { "value": "1,000+", "label": "Issues resolved" },
        { "value": "150+", "label": "Questions we raised on TAXSIM’s own rules" },
        { "value": "100+", "label": "TAXSIM corrections NBER confirmed on the tracker" }
      ],
      "steps": [
        { "title": "Report", "text": "" },
        { "title": "Reproduce", "text": "" },
        { "title": "Classify", "text": "" },
        { "title": "Resolve", "text": "" },
        { "title": "Confirm", "text": "" }
      ],
      "examples": [
        {
          "tag": "#1241 · Oregon",
          "title": "PolicyEngine fix",
          "text": "The emulator put Oregon’s kicker refund inside state tax, but not in the rebate field.",
          "outcome": "Fixed in the emulator",
          "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1241"
        },
        {
          "tag": "#1235 · Massachusetts",
          "title": "TAXSIM correction",
          "text": "TAXSIM still applied a bank-interest deduction that Massachusetts repealed in 2024.",
          "outcome": "Confirmed and corrected by NBER",
          "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1235"
        },
        {
          "tag": "#1251 · Minnesota",
          "title": "Input difference",
          "text": "The comparison return left out Minnesota’s renter’s credit, which PolicyEngine calculates.",
          "outcome": "Explained, no change to either engine",
          "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1251"
        }
      ]
    }
  },

  // Beyond TAXSIM
  {
    "id": "section-benefits",
    "title": "Beyond TAXSIM",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "04" }
  },
  {
    "id": "input-mapping",
    "title": "Additional inputs beyond TAXSIM",
    "body": [],
    "minutes": 2,
    "notes": "Explain how a TAXSIM input row becomes a PolicyEngine household, and what the format cannot carry. Business income: the emulator maps pbusinc and sbusinc (with psemp and ssemp) to self-employment income, pprofinc and sprofinc to income from a specified service trade or business, and scorp to partnership and S-corporation income. TAXSIM’s own QBI deduction is a flat 20% with the service-business phase-in, capped by taxable income, with no W-2 wage or property test. PolicyEngine applies those limits, so without W-2 wages the deduction phases out above the threshold; the emulator’s --assume-w2-wages option reproduces TAXSIM’s simpler rule (available on the policyengine and compare commands, not on the default drop-in command). Itemized deductions: TAXSIM’s mortgage and otheritem are aggregates; the emulator sums them into deductible mortgage interest, which has no floor or cap, to match TAXSIM, because charity and medical would bring AGI caps and floors that TAXSIM does not apply. Property tax maps to real estate taxes. State and local taxes: PolicyEngine computes the state income tax for the SALT deduction; TAXSIM input has no county or city, so Maryland county tax is set to zero and city taxes such as New York City’s do not apply. Do not present the 2025 SALT cap as a difference: TAXSIM also applies it. Household: TAXSIM gives the two adults’ ages (page, sage), the number of dependents (depx) and each dependent’s age (age1 to ageN); filing status comes from mstat. Dependents have no disability or student status. PolicyEngine’s is_disabled input feeds SNAP, SSI and many state credits, and is_full_time_college_student sets the student rules for the EITC and dependent credits (the EITC’s own disability test uses is_permanently_and_totally_disabled). Unearned income: TAXSIM reports interest (intrec), dividends, capital gains, pensions and Social Security (gssi) for the tax unit, and the emulator divides them between spouses for joint filers (evenly, or to the older spouse across a state’s age rule for pensions and Social Security). The fields also carry no type: pensions include IRA withdrawals, and gssi does not separate retirement, disability and survivor benefits. taxable_ira_distributions and social_security_disability add those types; taxable_interest_income and qualified_dividend_income are not on the slide, because the emulator already fills them from intrec and dividends. Sources: policyengine-taxsim 3.0.1 config/variable_mappings.yaml and runners/policyengine_runner.py; TAXSIM source law87.for. Each card ends with the PolicyEngine US input variables that remove the limit, which a survey or an imputation can supply: w2_wages_from_qualified_business and unadjusted_basis_qualified_property apply the wage and property limits of the qualified business income deduction; charitable_cash_donations and other_medical_expenses give each deduction its own adjusted gross income limit or floor; county_fips places the household, which turns on city and county income taxes such as New York City’s and the Indiana county taxes; is_disabled and is_full_time_college_student give dependents the status that credits and benefits use; taxable_ira_distributions and social_security_disability add the income types TAXSIM does not carry. Related input variables not on the slide: business_is_sstb, qualified_reit_and_ptp_income, charitable_non_cash_donations, home_mortgage_interest, is_permanently_and_totally_disabled, is_incapable_of_self_care, taxable_401k_distributions, social_security_survivors and tax_exempt_interest_income. Variable names checked in PolicyEngine US source on October 7, 2026.",
    "mapping": {
      "taxsimLabel": "TAXSIM",
      "direction": "input",
      "rows": [
        {
          "area": "Business income",
          "icon": "briefcase",
          "taxsim": [
            "pbusinc",
            "pprofinc",
            "scorp"
          ],
          "pe": [
            "Self-employment income",
            "Specified service business income",
            "S corporation income"
          ],
          "note": "The qualified business income deduction limits need W-2 wages and property basis.",
          "add": [
            "w2_wages_from_qualified_business",
            "unadjusted_basis_qualified_property"
          ]
        },
        {
          "area": "Itemized deductions",
          "icon": "receipt",
          "taxsim": [
            "mortgage",
            "otheritem",
            "proptax"
          ],
          "pe": [
            "Mortgage interest deduction",
            "Real estate taxes"
          ],
          "note": "Other itemized deductions arrive as one total, without the charitable or medical expense limits.",
          "add": [
            "charitable_cash_donations",
            "other_medical_expenses"
          ]
        },
        {
          "area": "State and local taxes",
          "icon": "map-pin",
          "taxsim": [
            "state"
          ],
          "pe": [
            "State income tax",
            "State and local tax deduction"
          ],
          "note": "Without the household’s location, county and city income taxes are excluded.",
          "add": [
            "county_fips"
          ]
        },
        {
          "area": "Household",
          "icon": "users",
          "taxsim": [
            "page",
            "sage",
            "depx",
            "ageN"
          ],
          "pe": [
            "Each person’s age",
            "Dependents"
          ],
          "note": "Dependents carry only an age, with no disability or student status.",
          "add": [
            "is_disabled",
            "is_full_time_college_student"
          ]
        },
        {
          "area": "Unearned income",
          "icon": "coin",
          "taxsim": [
            "intrec",
            "dividends",
            "pensions",
            "gssi"
          ],
          "pe": [
            "Taxable interest income",
            "Qualified dividend income",
            "Taxable private pensions",
            "Social Security retirement benefits"
          ],
          "note": "Reported for the couple, with no income types such as IRA withdrawals or disability benefits.",
          "add": [
            "taxable_ira_distributions",
            "social_security_disability"
          ]
        }
      ],
      "value": {
        "title": "Why it matters",
        "text": "Existing TAXSIM files run unchanged. Added variables, from a survey or an imputation, let PolicyEngine apply more detailed rules."
      },
      "addLabel": "PolicyEngine adds"
    }
  },
  {
    "id": "ce-inputs",
    "title": "CE survey variables mapped to PolicyEngine inputs",
    "body": [],
    "minutes": 2,
    "notes": "Show which CE fields could feed PolicyEngine inputs that TAXSIM’s format cannot carry. All CE variables are in the 2024 Interview PUMD dictionary (FMLI unless noted; IN_COLL and SSIX are on MEMI). Medical: HEALTHCQ is the sum of HLTHINCQ, MEDSRVCQ, PREDRGCQ and MEDSUPCQ; TAXSIM takes only deductible medical expenses, already above the AGI floor, in its mortgage total, so the CE applied the floor itself. PolicyEngine applies the floor and also uses medical costs for the SNAP excess medical deduction for elderly and disabled members. Charity: CASHCOCQ also includes alimony, child support, gifts and political giving, so use the charity codes in the CNT detail file. Tuition: EDUCACQ includes K-12 tuition; college tuition is UCC 670110. College enrollment: IN_COLL is 1 full time, 2 part time, 3 not at all. TAXSIM’s documentation instead asks users to code students aged 20 to 23 as 19. Car loans: VEHFINCQ is vehicle finance charges; the 2025 deduction also requires final assembly in the United States, which the CE does not record. Utilities: UTILCQ is the sum of natural gas, electricity, fuels, telephone and water; TAXSIM has no utility field, and PolicyEngine uses utility costs for the SNAP standard utility allowance and shelter deduction. Rent is not listed, because TAXSIM already takes rentpaid. Benefits: JFS_AMT is the annual value of SNAP (with FS_MTHI months), SSIX is SSI per member, and WELFAREX is public assistance; TAXSIM takes one transfers total, used for state rebates. Quarterly spending variables (CQ and PQ) cover a three-month reference period; income variables cover 12 months. Context for this audience: from the second quarter of 2013 through the 2023 data, CE published federal and state tax estimates from TAXSIM; the 2024 data has no tax or after-tax income estimates, because the model was not updated for the 2024 tax year (CE PUMD Getting Started Guide). The emulator covers tax years 2021 onward. Sources: https://www.bls.gov/cex/pumd/ce-pumd-interview-diary-dictionary.xlsx, https://www.bls.gov/cex/pumd-getting-started-guide.htm, https://taxsim.nber.org/taxsim35/ and PolicyEngine US source, October 7, 2026.",
    "ceInputs": {
      "columns": [
        "CE collects",
        "PolicyEngine input",
        "Calculations it supports",
        "TAXSIM"
      ],
      "rows": [
        {
          "area": "Medical costs and premiums",
          "ce": [
            "HEALTHCQ",
            "HLTHINCQ"
          ],
          "pe": [
            "other_medical_expenses",
            "health_insurance_premiums"
          ],
          "use": "Applies the medical deduction’s income floor and the SNAP medical deduction",
          "taxsim": "Only the deductible amount, in one total"
        },
        {
          "area": "Charitable gifts",
          "ce": [
            "CASHCOCQ"
          ],
          "pe": [
            "charitable_cash_donations"
          ],
          "use": "Charity deduction, including the 2026 deduction for non-itemizers",
          "taxsim": "In one total with mortgage interest"
        },
        {
          "area": "Tuition",
          "ce": [
            "EDUCACQ"
          ],
          "pe": [
            "qualified_tuition_expenses"
          ],
          "use": "American Opportunity and Lifetime Learning credits",
          "taxsim": "No field"
        },
        {
          "area": "College enrollment",
          "ce": [
            "IN_COLL"
          ],
          "pe": [
            "is_full_time_college_student"
          ],
          "use": "Student rules for EITC and dependent credits, and SNAP",
          "taxsim": "No field"
        },
        {
          "area": "Car loan interest",
          "ce": [
            "VEHFINCQ"
          ],
          "pe": [
            "auto_loan_interest"
          ],
          "use": "Car loan interest deduction for 2025 to 2028",
          "taxsim": "No field"
        },
        {
          "area": "Utilities",
          "ce": [
            "UTILCQ"
          ],
          "pe": [
            "gas_expense",
            "water_expense",
            "pre_subsidy_electricity_expense"
          ],
          "use": "SNAP utility allowance and shelter deduction",
          "taxsim": "No field"
        },
        {
          "area": "Benefits received",
          "ce": [
            "JFS_AMT",
            "SSIX",
            "WELFAREX"
          ],
          "pe": [
            "ssi_reported",
            "takes_up_snap_if_eligible"
          ],
          "use": "Compares simulated SNAP, SSI and TANF with reported receipt",
          "taxsim": "One transfers total"
        }
      ],
      "source": "CE variables from the 2024 Interview public-use microdata dictionary; PolicyEngine US variable names."
    }
  },
  {
    "id": "output-mapping",
    "title": "What PolicyEngine calculates beyond TAXSIM",
    "body": [],
    "minutes": 1,
    "notes": "Show what PolicyEngine calculates that TAXSIM’s output does not carry, and how the emulator handles each item so that its results stay comparable with TAXSIM. Benefit programs: PolicyEngine calculates SNAP, SSI, TANF, WIC and the state SSI supplements; the emulator sets them to zero, because TAXSIM has no inputs for them and some state taxes count cash assistance as income (for example, the base of the Massachusetts senior circuit breaker credit; policyengine-taxsim issue #1031). Health coverage: Medicaid, CHIP and the ACA premium tax credit are separate PolicyEngine variables; the premium tax credit is not part of PolicyEngine’s income tax, and the emulator does not report any of them. Additional state tax credits: the four on the slide need inputs TAXSIM lacks, and TAXSIM does not model the first two at all. The Idaho aged or disabled credit is for a filer who supports a family member aged 65 or older or a person with a disability; TAXSIM’s Idaho routine has the child tax, grocery, investment and political contribution credits, but not this one. The Arkansas credit gives $500 for each dependent with a disability (Form AR1000F); TAXSIM’s Arkansas personal credit counts filers, dependents and people aged 65 or older, with no disability input. The New York college tuition credit needs tuition paid, and the Colorado care worker credit needs care worker status. Other state credits that need inputs TAXSIM does not have: the Minnesota K-12 education credit (tuition), the 529 plan credits in Indiana, Oregon, Utah and Vermont, the Louisiana and Nebraska school readiness credits, the Connecticut and Nebraska stillborn credits and the Vermont veteran tax credit. If asked about Maryland: TAXSIM models the Maryland child tax credit from 2023 for children under 6, but not its extension to children with a disability up to age 16, and not the 2021 and 2022 credit, which was only for children with a disability. Renters’ credits: TAXSIM models most renters’ and property tax credits from rentpaid (for example California, Minnesota and Vermont, and the homestead or property tax credits in Arizona, Michigan, Wisconsin, Missouri, New Jersey, Maine, New York and DC), so they appear in both engines and in the comparison. PolicyEngine adds detail that needs other inputs, such as disability status in Minnesota’s renter’s credit, county income limits and shared rent in Vermont’s renter credit, and heat included in rent for Michigan’s home heating credit. Sources for the TAXSIM side: the state routines in the TAXSIM source (for example 05ca.for, 24mn.for and 46vt.for). Sources: TAXSIM source 13id.for, 04ar.for and 21md.for; PolicyEngine US source, October 8, 2026. Federal provisions: the deductions for tips, overtime and car-loan interest, the American Opportunity and Lifetime Learning credits (tuition) and the saver’s credit (retirement contributions) need inputs that TAXSIM does not have, so they are zero in emulator runs; PolicyEngine calculates them when a data source supplies the inputs. Conventions kept from TAXSIM, if asked: fiitax includes the net investment income tax but not the Additional Medicare Tax, which is reported with payroll taxes; fica includes both the employee and employer shares; one-time state rebates are in siitax and also reported as srebate; frate and srate come from a second run with $100 more wages. Sources: policyengine-taxsim 3.0.1 runners/policyengine_runner.py, core/state_output_resolver.py and config/variable_mappings.yaml; PolicyEngine US source, October 7, 2026.",
    "mapping": {
      "direction": "output",
      "addLabel": "PolicyEngine calculates",
      "rows": [
        {
          "area": "Benefit programs",
          "icon": "heart-handshake",
          "taxsim": [],
          "pe": [],
          "note": "Set to zero in the emulator, because some state taxes count cash assistance as income.",
          "add": [
            "snap",
            "ssi",
            "tanf",
            "wic"
          ]
        },
        {
          "area": "Health coverage",
          "icon": "health",
          "taxsim": [],
          "pe": [],
          "note": "Separate from income tax, and not reported by the emulator.",
          "add": [
            "medicaid",
            "chip",
            "aca_ptc"
          ]
        },
        {
          "area": "Additional state tax credits",
          "icon": "receipt",
          "taxsim": [],
          "pe": [],
          "note": "Zero without inputs TAXSIM lacks, such as disability status, tuition or care work. Renters’ credits use rentpaid.",
          "add": [
            "id_aged_or_disabled_credit",
            "ar_personal_credit_disabled_dependent",
            "ny_college_tuition_credit",
            "co_care_worker_credit"
          ]
        },
        {
          "area": "Federal provisions",
          "icon": "gavel",
          "taxsim": [],
          "pe": [],
          "note": "Zero without inputs TAXSIM lacks, such as tips, overtime or tuition.",
          "add": [
            "tip_income_deduction",
            "overtime_income_deduction",
            "american_opportunity_credit"
          ]
        }
      ],
      "value": {
        "title": "Why it matters",
        "text": "The emulator leaves these out to match TAXSIM. Additional outputs are available in the PolicyEngine web app, Python package and API."
      }
    }
  },
  {
    "id": "imputation",
    "title": "Imputing a distribution of missing inputs",
    "body": [
      "Harmonize variables across donor and recipient surveys",
      "Learn conditional distributions using shared characteristics",
      "Draw plausible values for missing inputs",
      "Assess distributions and sensitivity across imputations"
    ],
    "minutes": 2,
    "notes": "A donor survey observes the variable of interest and predictors shared with the recipient survey. A conditional distribution permits households with similar observed characteristics to have different imputed values. That can matter around tax-benefit thresholds. Multiple draws can reveal sensitivity, but they do not automatically solve model misspecification or preserve every joint relationship. The prior deck names CPS, ACS, SCF, SIPP and tax microdata. This slide does not claim a CE implementation exists. Source: local IARIW 2026 ImputationSlide.tsx.",
    "sourcesPanel": {
      "sourcesTitle": "Sources fused into PolicyEngine’s US microdata",
      "sources": [
        { "code": "CPS", "name": "Current Population Survey", "role": "The spine: demographics, income, labor force." },
        { "code": "ACS", "name": "American Community Survey", "role": "Geography, housing, sub-state detail." },
        { "code": "SCF", "name": "Survey of Consumer Finances", "role": "Wealth, capital income, debt." },
        { "code": "SIPP", "name": "Survey of Income and Program Participation", "role": "Program take-up, dynamics, transitions." },
        { "code": "PUF", "name": "IRS Public Use File", "role": "Tax-unit income detail, itemized deductions." }
      ],
      "blocks": [
        { "tag": "Technique", "text": "Quantile regression forests learn the full distribution of each missing variable from many predictors, then sample from it." },
        { "tag": "Why a distribution", "text": "Households with the same observed traits get different draws, which matters near tax and benefit thresholds." },
        { "tag": "For the CE", "text": "Donor surveys and shared predictors would need an explicit assessment before we transfer the method." }
      ]
    }
  },
  {
    "id": "snap-medicaid",
    "title": "What counts as household resources?",
    "body": [
      "SNAP: program units, eligibility and potential allotments",
      "Participation assumptions convert eligibility into receipt estimates",
      "Medicaid: eligibility and enrollment need separate treatment",
      "A monetary Medicaid value requires a defined valuation method"
    ],
    "minutes": 2,
    "notes": "Each bar adds one component for one California household: a single parent with children aged 4 and 7 and $25,000 in wages (PolicyEngine US 2.25.2, 2025). A household calculation assumes take-up; in the microdata, take-up is assigned at published rates (SNAP 82% from USDA; Medicaid 78% in California, from KFF and MACPAC). Taxes and credits: the federal EITC and refundable child tax credit and California’s CalEITC and Young Child Tax Credit, less the employee payroll tax. CalWORKs is California’s TANF program. The jump from $43,931 to $71,640 shows why Medicaid needs an explicit valuation choice: cost per enrollee, insurance value and household valuation give different answers, and this talk does not pick one. Establish whether CE research wants potential entitlements, actual receipt, or a broader resource measure. Answers Thesia’s question on in-kind transfers (NSLP, WIC, Medicaid): PolicyEngine US calculates them; the emulator sets benefits to zero to stay comparable with TAXSIM, and the values come from PolicyEngine US through Python, the API or the web app. Valuation, if asked: school meals (school_meal_net_subsidy) are the federal NSLP lunch plus SBP breakfast reimbursement for the child’s tier, less the paid-meal rate, for 180 school days per K-12 child, so they are an upper bound on what a child receives; WIC is USDA’s 2018 food-package cost uprated by CPI-U, with the current cash-value benefit; Medicaid and CHIP are state spending (KFF and MACPAC) spread across enrollees by an age-rated premium index, a cost-per-enrollee value, the same kind of value as the CMS per-enrollee cost in BLS’s consumption measure (Monthly Labor Review, April 2023). Heating assistance is modeled in 10 states, with no national LIHEAP formula yet (policyengine-us main, October 8, 2026).",
    "resourceBars": {
      "intro": "One California household in 2025 (a single parent, children aged 4 and 7, $25,000 in wages), four resource concepts.",
      "rows": [
        { "label": "Earnings", "detail": "Wages before taxes", "value": 25000 },
        { "label": "After taxes and credits", "detail": "+$9,461: EITC, child tax credit and California credits, less payroll tax", "value": 34461 },
        { "label": "Plus cash and food benefits", "detail": "+$9,470: CalWORKs $5,200, SNAP $2,442, school meals $1,116, WIC $712", "value": 43931 },
        { "label": "Plus Medi-Cal at cost", "detail": "+$27,709 for three enrollees", "value": 71640 }
      ],
      "takeaway": "The resource concept, not the calculator, decides whether $25,000 of earnings becomes $34,000 or $72,000.",
      "footnote": "PolicyEngine US 2.25.2, run October 5, 2026. Benefits assume take-up; Medi-Cal is valued at average cost per enrollee."
    }
  },
  {
    "id": "benefit-validation",
    "title": "Validation of benefit imputations",
    "body": [
      "Compare receipt and amounts with suitable external benchmarks",
      "Examine errors across household groups",
      "Use holdout data and alternative assumptions where feasible",
      "Treat calibration and independent validation separately"
    ],
    "minutes": 2,
    "notes": "Meyer and Mittag link the CPS to administrative records and find that the survey misses about 40 percent of SNAP recipients (NBER Working Paper 21676). This is why PolicyEngine computes benefits from program rules and calibrates weights to administrative totals instead of relying on reported receipt. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: the cpid-webinar-2026 deck’s baseline slide and policyengine-slides/slideshows/iariw-2026/slides/CalibrationSlide.tsx.",
    "cards": [
      { "icon": "chart-bar", "title": "External benchmarks", "text": "Compare imputed receipt and amounts with administrative totals." },
      { "icon": "users", "title": "Errors by group", "text": "Check how errors differ by income, household type and state." },
      { "icon": "flask", "title": "Holdout tests", "text": "Test on data held back from estimation, and try alternative assumptions." },
      { "icon": "scale", "title": "Calibration is not validation", "text": "A target used to fit the weights cannot also validate them." }
    ],
    "hero": {
      "value": "≈40%",
      "label": "of SNAP recipients are missing from CPS reports, measured against linked administrative records.",
      "source": "Meyer and Mittag, NBER Working Paper 21676"
    }
  },

  // What’s next: 2026 rules, Axiom and a possible CE pilot, 11 minutes
  {
    "id": "section-next",
    "title": "What’s next",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "05" }
  },
  {
    "id": "state-updates",
    "title": "When the 2026 tax rules will be ready",
    "body": [],
    "minutes": 2,
    "notes": "BLS will want to know when each year’s rules are ready. Last year, the 2025 state income tax update ran from the first pull request on December 3, 2025 (Missouri, PR #6898) to the last merge on February 18, 2026 (California, PR #7418): 77 days, or 11 weeks. It covered 44 jurisdictions (the 41 states with a wage income tax, DC, New Hampshire’s interest and dividends tax repeal and Washington’s capital gains tax) in 47 pull requests from 5 contributors, about 22,400 added lines across 1,669 files. Pace: 2 states were done by December 31, 7 by January 31 and 14 by February 10, each worked one at a time with a full model review (median 24 days per pull request; Minnesota, New Jersey, Arizona and Michigan each added 1,300 to 3,100 lines, including programs that were missing). From February 11 to 18 the remaining 30 states were done in parallel (median 4 days per pull request), so most of the 11 weeks was the one-at-a-time phase. After release, federal non-conformity fixes followed from March to May (DC PR #7930, Idaho issue #7837, Maine issue #8122, South Carolina PR #7870), because those states did not adopt parts of the 2025 federal tax law (OBBBA), such as its larger standard deduction. The federal 2026 parameters are already in (IRS Rev. Proc. 2025-32, PR #7915). Plan for 2026: in November, set up agents that draft each state’s update from its forms (about a week of setup); from December, run states in parallel as forms are published; in February, finish the late states and rerun the TAXSIM comparison for 2026. We expect the update itself to take 1 to 6 weeks once forms are out. The commitment is that every state is complete by March 31, 2027, which leaves March as a buffer after last year’s February 18 finish. The update ships in PolicyEngine US and the emulator, independent of the Axiom migration. Sources: PolicyEngine US pull requests and issues on GitHub, pulled October 7, 2026. Answers Thesia’s question on annual updates: yes, every year; the federal 2026 parameters are already in, and this slide is the state schedule.",
    "updateTimeline": {
      "stats": [
        {
          "value": "44",
          "label": "Jurisdictions updated for 2025: 41 income-tax states, DC, NH and WA"
        },
        {
          "value": "47",
          "label": "Pull requests from 5 contributors"
        },
        {
          "value": "11 weeks",
          "label": "First pull request to last merge, Dec 3 – Feb 18"
        },
        {
          "value": "30",
          "label": "States finished in the last week, worked in parallel"
        }
      ],
      "months": [
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar"
      ],
      "lanes": [
        {
          "title": "2025 tax year",
          "detail": "What happened",
          "segments": [
            {
              "start": 2,
              "span": 5,
              "title": "Dec 3 – Feb 10: one state at a time",
              "text": "Full model reviews, adding missing programs and fixing errors: 14 states done",
              "tone": "done"
            },
            {
              "start": 7,
              "span": 1,
              "title": "Feb 11–18",
              "text": "30 states in parallel: all 44 done",
              "tone": "sprint"
            },
            {
              "start": 8,
              "span": 2,
              "title": "Mar – May: follow-up fixes",
              "text": "Federal non-conformity in DC, Idaho, Maine and South Carolina",
              "tone": "muted"
            }
          ]
        },
        {
          "title": "2026 tax year",
          "detail": "Plan",
          "segments": [
            {
              "start": 0,
              "span": 2,
              "title": "Prepare",
              "text": "Set up agents to draft each state’s update from its forms",
              "tone": "plan"
            },
            {
              "start": 2,
              "span": 4,
              "title": "Update as forms are published",
              "text": "Run states in parallel as each releases its 2026 forms and instructions",
              "tone": "plan"
            },
            {
              "start": 6,
              "span": 2,
              "title": "Finish and check",
              "text": "Late states, then rerun the TAXSIM comparison for 2026",
              "tone": "plan"
            },
            {
              "start": 8,
              "span": 2,
              "title": "Done by March 31, 2027",
              "text": "Every state complete, with March as a buffer",
              "tone": "commit"
            }
          ]
        }
      ],
      "changeGroups": [
        {
          "title": "Major law changes in 2025",
          "items": [
            {
              "state": "Iowa",
              "text": "flat 3.8% rate"
            },
            {
              "state": "New Hampshire",
              "text": "interest and dividends tax repealed"
            },
            {
              "state": "Maryland",
              "text": "new top brackets, capital gains surtax"
            },
            {
              "state": "Wisconsin",
              "text": "wider 4.4% bracket, $1,200 exemption"
            }
          ]
        },
        {
          "title": "Added or corrected in the model",
          "items": [
            {
              "state": "New Jersey",
              "text": "ANCHOR and Stay NJ property tax relief"
            },
            {
              "state": "Minnesota",
              "text": "K-12 education credit and subtraction"
            },
            {
              "state": "Indiana",
              "text": "county tax rates"
            },
            {
              "state": "California",
              "text": "alternative minimum tax thresholds"
            }
          ]
        }
      ],
      "takeaway": "Commitment: every state’s 2026 income tax rules complete by March 31, 2027.",
      "source": "Source: PolicyEngine US pull requests #6898 to #7421 on GitHub."
    }
  },
  {
    "id": "axiom-plan",
    "title": "Axiom: our next-generation rules engine",
    "body": [],
    "minutes": 2,
    "notes": "Answers Thesia’s road-map question. Frame Axiom as our next-generation rules engine. Today: tax years 2021 onward run on PolicyEngine US, and the 2026 update ships there by March 31, 2027, whatever Axiom’s timeline. Axiom encodes rules from the law with companion tests: at rulespec-us a9dc38f (October 6, 2026) there are 1,147 federal rule modules, each paired with a test, and 3,733 state modules across 50 states and DC, with uneven coverage (Colorado has 1,284; 25 jurisdictions have fewer than 10). The engine (axiom-rules-engine) is Rust under MIT; the encodings are CC BY 4.0. Axiom publishes its comparisons with PolicyEngine and TAXSIM as open reports (269 at axiom-oracles.vercel.app). The plan, in Max’s words: we keep powering TAXSIM for as long as it is needed, possibly with Axiom on the backend instead of PolicyEngine US, and PolicyEngine wrappers over Axiom keep existing code working for as long as needed, so the frontier moves forward in a backwards-compatible way. Shipped evidence for the wrapper approach: policyengine.py already runs one country on Axiom, a Belgium pilot for worker social contributions and personal income tax (policyengine.py PR #448, tests/test_be_axiom_pilot.py); a US model on Axiom has no code yet. Axiom’s validation suite already turns its cases into TAXSIM rows and runs both TAXSIM-35 and the emulator on them (axiom-oracles adapters/taxsim). On the emulator, a CI test already pins the command-line entry point (tests/test_cli_entry_point.py). The emulator’s side of that plan is written up in policyengine-taxsim PR #1153 (open, not merged): the command-line tool, the Python import path and TAXSIM-format files stay fixed, with contract tests for those entry points; output values still change when the law or a fix changes them. No migration date is set. If asked about readiness: Axiom does not yet compute a complete federal return (rulespec-us #1318, a cyclic dependency in the composed federal compile, is open; the payroll tax encoding lacks the wage-base cap, axiom-encode #1214), and its API has no certified release, so BLS would run on PolicyEngine US and the emulator. If asked about independence: Max leads both, and the PSL Foundation sponsors both; Axiom is a second reading of the statute, and the statute and official instructions decide disagreements. Do not cite the Axiom-versus-TAXSIM federal run (87,519 tax units): it compares Axiom with a 2026 TAXSIM test build, not with the emulator. Max speaks to funding here.",
    "headerLink": {
      "label": "axiom.org",
      "url": "https://axiom.org"
    },
    "axiomPlan": {
      "intro": "Axiom encodes tax and benefit rules from the law, with a test for every federal rule module. We are moving PolicyEngine onto it in steps.",
      "stages": [
        {
          "label": "Today",
          "title": "PolicyEngine US runs the emulator",
          "tone": "now",
          "items": [
            "Tax years 2021 onward compute on PolicyEngine US",
            "The 2026 rules ship there by March 31, 2027",
            "Axiom publishes open comparisons with PolicyEngine and TAXSIM"
          ]
        },
        {
          "label": "Planned",
          "title": "Axiom on the backend",
          "tone": "next",
          "items": [
            "PolicyEngine’s Python interface wraps Axiom, as it already does for a Belgium pilot",
            "The TAXSIM emulator can run on Axiom",
            "New programs arrive as encodings of the law, with tests"
          ]
        },
        {
          "label": "Throughout",
          "title": "Backwards compatible",
          "tone": "always",
          "items": [
            "TAXSIM-format files in and out",
            "The same command-line and Python calls",
            "We keep powering TAXSIM for as long as it is needed"
          ]
        }
      ],
      "takeaway": "We keep pushing the rules further without breaking the files and code that depend on them.",
      "footnote": "Axiom today: 1,147 federal and 3,733 state rule modules (rulespec-us, CC BY 4.0) on an MIT-licensed Rust engine. It does not yet compute a complete federal return."
    }
  },
  {
    "id": "ce-fit",
    "title": "Where this could fit in CE research",
    "body": [
      "Begin with an agreed set of tax-imputation inputs",
      "Run both calculators on the same records",
      "Compare household results and weighted summaries",
      "Review differences before expanding the scope"
    ],
    "minutes": 2,
    "notes": "This is a proposed integration path, not a tested CE implementation. CE published federal and state income tax estimates from NBER’s TAXSIM from the second quarter of 2013 through the 2023 data (BLS Monthly Labor Review, 2015; CE PUMD Getting Started Guide). The 2024 data has no tax or after-tax income estimates: BLS says the external tax model was not updated for the 2024 tax year, and it keeps a tax unit identifier on the microdata so users can produce their own tax estimates. A comparison therefore needs a year with CE TAXSIM estimates, 2023 or earlier; for the 2024 data onward, the emulator would produce estimates where CE now has none. The same TAXSIM input file can go to both engines. The slide gives only the years; mention the 2024 gap only if asked. Sources: https://www.bls.gov/cex/pumd-getting-started-guide.htm, https://www.bls.gov/cex/csxfaqs.htm (question 42) and https://www.bls.gov/cex/notices/2025/ce-after-tax.htm. Start with the core outputs: fiitax, siitax, fica, v22 (child tax credit), v25 (EITC) and frate. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.",
    "compare": {
      "input": { "title": "CE tax-unit records", "text": "An agreed set of inputs for one year." },
      "engines": [
        { "title": "CE’s TAXSIM estimates", "text": "Published for 2013–2023 data." },
        { "title": "PolicyEngine TAXSIM emulator", "text": "The same file, no format changes." }
      ],
      "output": { "title": "Compare", "text": "Household results and weighted summaries." },
      "next": { "title": "Review", "text": "Explain differences before expanding the scope." },
      "outputsTitle": "Outputs to compare first",
      "outputs": [
        { "field": "fiitax", "meaning": "Federal income tax" },
        { "field": "siitax", "meaning": "State income tax" },
        { "field": "fica", "meaning": "Payroll tax" },
        { "field": "v22", "meaning": "Child tax credit" },
        { "field": "v25", "meaning": "Earned income credit" },
        { "field": "frate", "meaning": "Federal marginal rate" }
      ],
      "takeaway": "Keep CE definitions and weights fixed in the first comparison."
    }
  },
  {
    "id": "ce-pilot",
    "title": "A manageable CE pilot",
    "body": [
      "Agree one year, one sample and the key tax outputs",
      "Document input mappings and missing-data assumptions",
      "Produce a reproducible comparison and discrepancy log",
      "Scope one benefit extension after reviewing the tax results"
    ],
    "minutes": 2,
    "notes": "Proposed next steps for discussion. The emulator is an open-source package with Python, R, Stata and SAS interfaces that installs inside BLS, so confidential records do not need to leave BLS. The who-provides-what split is a proposal, not an agreement. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. The comparison year needs CE TAXSIM estimates, so it must be 2023 or earlier; the 2024 data has none. Avoid proposing a firm timeline before those constraints are known.",
    "process": {
      "intro": "Four steps, each with a clear output.",
      "steps": [
        { "title": "Scope", "text": "Agree one year, one sample and the key tax outputs.", "output": "Scope note" },
        { "title": "Map", "text": "Document input mappings and missing-data assumptions.", "output": "Mapping document" },
        { "title": "Compare", "text": "Run both calculations and log every difference.", "output": "Comparison and discrepancy log" },
        { "title": "Extend", "text": "Choose one benefit extension after the tax results.", "output": "Extension plan" }
      ],
      "sides": [
        {
          "title": "CE would provide",
          "items": [
            "One year of tax-unit records in the TAXSIM input format",
            "Its published TAXSIM estimates and the survey weights",
            "Staff time to review the discrepancy log"
          ]
        },
        {
          "title": "PolicyEngine would provide",
          "items": [
            "The open-source emulator, which installs and runs inside BLS",
            "Runs pinned to emulator and model versions",
            "A diagnosis of each difference, then a benefit extension proposal"
          ]
        }
      ]
    }
  },
  {
    "id": "qa",
    "title": "Q&A and discussion",
    "body": [
      "Which outcomes and years would be most useful?",
      "Which input assumptions create the most uncertainty?",
      "What evidence would support a broader evaluation?",
      "Which benefit extension would answer a concrete research question?"
    ],
    "minutes": 30,
    "notes": "Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. The links on the slide open the TAXSIM site, the web runner, the validation dashboard and the source code.",
    "links": [
      { ...TAXSIM_SITE, "icon": "world", "description": "Install, documentation and examples" },
      { ...TAXSIM_RUN, "icon": "play", "description": "Run a TAXSIM-format file in the browser" },
      { ...TAXSIM_DASHBOARD, "icon": "chart-dots", "description": "Agreement by year and state" },
      { "label": "github.com/PolicyEngine/policyengine-taxsim", "url": "https://github.com/PolicyEngine/policyengine-taxsim", "icon": "github", "description": "Source code and issue tracker" }
    ]
  },
  {
    "id": "thank-you",
    "title": "Thank you",
    "body": [],
    "minutes": 0,
    "notes": "Closing slide. Leave it up at the end so people can note the emails: max@policyengine.org, pavel@policyengine.org and david@policyengine.org.",
    "custom": "thank-you"
  }
];
