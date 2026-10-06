export type BlsIcon =
  | 'book' | 'building' | 'calendar' | 'chart-bar' | 'chart-dots' | 'file-spreadsheet' | 'file-text' | 'flask'
  | 'github' | 'history' | 'play' | 'scale' | 'users' | 'world';

export interface BlsSlideContent {
  id: string;
  title: string;
  body: string[];
  descriptions?: string[];
  minutes: number;
  notes: string;
  cover?: boolean;
  /** A full-slide component from slides/PEIntroSlides.tsx. */
  custom?: 'what-is-pe' | 'pe-today' | 'who-uses-pe';
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
  /** One real record: input row, household built from it, and TAXSIM outputs. */
  worked?: {
    inputTitle: string;
    input: { field: string; value: string; meaning: string }[];
    householdTitle: string;
    household: { role: string; detail: string }[];
    outputTitle: string;
    outputs: { field: string; value: string; meaning: string }[];
    footnote: string;
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
    installLabel: string;
    install: string;
    columns: [string, string, string];
    rows: { env: string; before: string; after: string }[];
    takeaway: string;
  };
  /** Two partners joined by an agreement in the center. */
  partnership?: {
    left: { title: string; items: { icon: BlsIcon; title: string; detail: string }[] };
    center: { title: string; date: string; detail: string };
    right: { title: string; items: { icon: BlsIcon; title: string; detail: string }[] };
    takeaway: string;
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
    takeaway: string;
  };
  /** A live iframe with a side column of demo steps. */
  embed?: {
    url: string;
    steps: string[];
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
  // Introduction and context: 10 minutes
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
      "Live demonstration",
      "Validation",
      "Benefit imputation",
      "A possible CE pilot",
      "Q&A and discussion"
    ],
    "descriptions": [
      "What PolicyEngine is, who uses it, and the NBER collaboration.",
      "A drop-in TAXSIM interface, and how one record becomes a tax result.",
      "A TAXSIM-format file run in the browser, from input rows to federal and state tax.",
      "How TAXSIM, PolicyEngine and TaxAct are checked against the law, the public dashboard, notable cases, and how a reported difference becomes a fix.",
      "Methods for missing survey inputs, SNAP participation, and Medicaid valuation.",
      "A focused comparison, the inputs it needs, and questions for CE staff.",
      "Questions on the methods, implementation, and opportunities for collaboration."
    ],
    "minutes": 1,
    "notes": "The first six sections total 60 minutes. Show the drop-in swap and one worked example, then run the live demo, then give an overview of the validation process. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A."
  },
  {
    "id": "what-is-pe",
    "title": "PolicyEngine: free, open-source microsimulation",
    "body": [
      "Rules: federal and state taxes and major benefit programs",
      "Households: survey data enhanced and calibrated, or any household you enter",
      "Reforms: change any parameter and see the cost, poverty and distributional effects"
    ],
    "minutes": 3,
    "notes": "Give the one-minute version of PolicyEngine: an open-source rules engine, a household dataset built from public surveys, and a way to score reforms. Keep the focus on the rules and the household data, because the TAXSIM emulator uses the same rules engine. The rules and the survey data are separate, so the same rules can serve any dataset. The TAXSIM adapter maps one input format into the model’s households, but it does not remove the research choices about missing data and participation; the emulator section covers those. Adapted from the cpid-webinar-2026 deck (September 2026).",
    "custom": "what-is-pe"
  },
  {
    "id": "pe-today",
    "title": "PolicyEngine today",
    "body": [
      "95,000+ parameters, 5,500+ variables and 4,693 test files in the US model",
      "Public code since June 2021, with 133 contributors to the US model",
      "NBER, the Atlanta Fed and No 10 Downing Street work with the models"
    ],
    "minutes": 1,
    "notes": "Use the numbers to show scale and testing, not to sell. The NBER memorandum of understanding is the reason the TAXSIM emulator exists; the next section covers it. Figures from the gettsim-2026 deck (September 3, 2026); check them before the talk if you quote them.",
    "custom": "pe-today"
  },
  {
    "id": "who-uses-pe",
    "title": "Researchers and developers build with these rules",
    "body": [
      "Federal partners and users: NBER, the Atlanta Fed, BEA and the Joint Economic Committee",
      "Research institutions: Brookings, AEI, Niskanen, CRFB, Georgetown and USC",
      "Benefit navigators: MyFriendBen, Amplifi, Mirza and Starlight"
    ],
    "minutes": 1,
    "notes": "Point out the federal statistical and research users, such as BEA and the Atlanta Fed, because they are closest to the CE team’s work. Adapted from the cpid-webinar-2026 deck (September 2026).",
    "custom": "who-uses-pe"
  },
  {
    "id": "nber",
    "title": "The NBER collaboration",
    "body": [
      "An open-source emulator built around the TAXSIM interface",
      "Development with guidance from Dan Feenberg",
      "Side-by-side comparisons of federal and state tax for tax years 2021 onward",
      "A memorandum of understanding signed in September 2025",
      "Continuity for researchers using TAXSIM workflows"
    ],
    "minutes": 3,
    "notes": "Introduce TAXSIM first, then the partnership. TAXSIM has run at NBER since the 1970s; Daniel Feenberg created it and still maintains it, and more than 1,200 papers cite the Feenberg and Coutts (1993) paper. For this audience: since the 2013 data, the CE has used TAXSIM to estimate income taxes for most households (BLS Monthly Labor Review, 2015, https://www.bls.gov/opub/mlr/2015/article/improving-data-quality-in-ce-with-taxsim.htm). The memorandum of understanding with NBER (Daniel Feenberg and James Poterba) was announced on September 5, 2025. The emulator keeps TAXSIM35’s formats, computes tax years 2021 onward with PolicyEngine’s federal and state models, and routes earlier years to TAXSIM35. The comparison work has found improvements in both models. Source: https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim",
    "headerLink": TAXSIM_SITE,
    "partnership": {
      "left": {
        "title": "TAXSIM at NBER",
        "items": [
          { "icon": "history", "title": "Developed since the 1970s", "detail": "Created and maintained by Daniel Feenberg" },
          { "icon": "book", "title": "1,200+ citing papers", "detail": "Feenberg and Coutts (1993)" },
          { "icon": "calendar", "title": "Federal law from 1960", "detail": "State law from 1977" },
          { "icon": "building", "title": "Used by BLS for the CE", "detail": "Census evaluated it for the SPM" }
        ]
      },
      "center": {
        "title": "Memorandum of understanding",
        "date": "September 2025",
        "detail": "NBER (Daniel Feenberg, James Poterba) and PolicyEngine"
      },
      "right": {
        "title": "PolicyEngine TAXSIM emulator",
        "items": [
          { "icon": "file-spreadsheet", "title": "Same TAXSIM35 format", "detail": "Existing scripts keep working" },
          { "icon": "scale", "title": "PolicyEngine models from 2021", "detail": "Federal and state income tax" },
          { "icon": "history", "title": "1960 to now in one interface", "detail": "Earlier years route to TAXSIM35" },
          { "icon": "github", "title": "Open source", "detail": "Code and issue tracker on GitHub" }
        ]
      },
      "takeaway": "Both teams validate the emulator, and the work has improved how both TAXSIM and PolicyEngine encode tax law."
    }
  },

  // The emulator and its core assumptions: 12 minutes
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
    "notes": "The table shows the swap that the TAXSIM site gives for six environments; the teal part is what changes. Shell, SAS and Julia only swap the command name. R swaps the package and function (library(policyenginetaxsim), then policyengine_calculate_taxes). Stata writes the file, runs the command and reads the result back. Python can call the runner on a data frame. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs). Ask CE staff which environment their current tax-imputation code uses. Source: https://www.policyengine.org/us/taxsim, read October 5, 2026.",
    "headerLink": TAXSIM_SITE,
    "dropIn": {
      "installLabel": "Install once",
      "install": "uv tool install policyengine-taxsim",
      "columns": ["", "TAXSIM35 (before)", "PolicyEngine TAXSIM (after)"],
      "rows": [
        { "env": "Shell", "before": "taxsim35 < input.csv > output.csv", "after": "[[policyengine-taxsim]] < input.csv > output.csv" },
        { "env": "R", "before": "taxsim_calculate_taxes(input)", "after": "[[policyengine_calculate_taxes]](input)" },
        { "env": "SAS", "before": "system(taxsim35 < input.csv …)", "after": "system([[policyengine-taxsim]] < input.csv …)" },
        { "env": "Stata", "before": "taxsimlocal35, replace", "after": "! [[policyengine-taxsim]] < txpydata.raw …" },
        { "env": "Julia", "before": "pipeline(`taxsim35`, …)", "after": "pipeline(`[[policyengine-taxsim]]`, …)" },
        { "env": "Python", "before": "subprocess.run(\"taxsim35 …\")", "after": "[[PolicyEngineRunner(df)]].run()" }
      ],
      "takeaway": "Same input file, same output variables. Existing scripts change one command or one function name."
    }
  },
  {
    "id": "record-to-result",
    "title": "From a TAXSIM record to a result",
    "body": [
      "One TAXSIM-format row: a married couple in California, two children, $130,000 in wages",
      "The adapter builds two adults and two dependents in one joint tax unit",
      "PolicyEngine returns $8,282 federal and $3,214 California income tax for 2024"
    ],
    "minutes": 3,
    "notes": "Walk through one real record from left to right. The row is household 1 of the web runner’s sample file, with the children’s ages added. The adapter maps pwages and swages to each person’s employment_income and page and sage to age, then returns fiitax (income_tax) and siitax (state_income_tax) in TAXSIM’s output format. fica is the TAXSIM convention: employee and employer payroll tax together (15.3% of $130,000). Point out that the federal tax already nets the $4,000 child tax credit. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2; the older local build gave the same numbers. Two input points for CE staff: state codes follow TAXSIM’s own numbering, so New Jersey is 31, while 34 (the Census FIPS code for New Jersey) means North Carolina and silently applies the wrong state’s law. And one file can cover any year: the emulator routes years before 2021 to the bundled TAXSIM35 and 2021 onward to PolicyEngine, so a run record should note the emulator and model versions.",
    "worked": {
      "inputTitle": "TAXSIM input row",
      "input": [
        { "field": "year", "value": "2024", "meaning": "Tax year" },
        { "field": "state", "value": "5", "meaning": "California" },
        { "field": "mstat", "value": "2", "meaning": "Married, joint" },
        { "field": "page, sage", "value": "40, 38", "meaning": "Adult ages" },
        { "field": "depx", "value": "2", "meaning": "Dependents" },
        { "field": "age1, age2", "value": "8, 12", "meaning": "Child ages" },
        { "field": "pwages", "value": "80,000", "meaning": "Primary wages" },
        { "field": "swages", "value": "50,000", "meaning": "Spouse wages" }
      ],
      "householdTitle": "Household PolicyEngine builds",
      "household": [
        { "role": "Tax unit", "detail": "Married filing jointly, California, 2024" },
        { "role": "Head, age 40", "detail": "Employment income $80,000" },
        { "role": "Spouse, age 38", "detail": "Employment income $50,000" },
        { "role": "Dependents, ages 8 and 12", "detail": "Qualify for the child tax credit" }
      ],
      "outputTitle": "TAXSIM outputs",
      "outputs": [
        { "field": "fiitax", "value": "$8,282", "meaning": "Federal income tax" },
        { "field": "siitax", "value": "$3,214", "meaning": "California income tax" },
        { "field": "v10", "value": "$130,000", "meaning": "Federal AGI" },
        { "field": "v22", "value": "$4,000", "meaning": "Child tax credit" },
        { "field": "frate", "value": "22%", "meaning": "Federal marginal rate" },
        { "field": "fica", "value": "$19,890", "meaning": "Payroll tax, both halves" }
      ],
      "footnote": "Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2."
    }
  },

  // Live demonstration: 10 minutes
  {
    "id": "demo-live",
    "title": "Live demo: run the sample file",
    "body": [],
    "minutes": 13,
    "notes": "Go straight into the live demo after the worked example and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. Start by loading the 3-household sample and reading household 1 aloud: a married couple in California (state code 5, mstat 2) with two dependents and $80,000 and $50,000 in wages. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab.",
    "headerLink": TAXSIM_RUN,
    "embed": {
      "url": "https://www.policyengine.org/us/taxsim/run",
      "steps": [
        "Load the 3-household sample",
        "Keep Standard output: federal and state tax, FICA and marginal rates",
        "Run and download in the browser",
        "Read the results for each household",
        "Switch to Full for AGI, credits, deductions and AMT"
      ],
      "footnote": "No installation needed. The same file runs with the policyengine-taxsim command."
    }
  },

  // Validation: 16 minutes
  {
    "id": "three-checks",
    "title": "Three calculations, one arbiter",
    "body": [],
    "minutes": 2,
    "notes": "Introduce the three calculations before the process. TAXSIM35 and PolicyEngine are compared automatically on every Enhanced CPS household. When they disagree on a household, Dan Feenberg at NBER prepares the same household in TaxAct, commercial tax preparation software, and posts the completed federal and state returns, so each case can be reconciled line by line on the actual form. The three do not vote: the statute and the official instructions decide which calculation is right, because two engines can share an error that no agreement rate would reveal. Fixes therefore carry tests whose expected values come from the form or statute.",
    "triangle": {
      "corners": {
        "top": { "icon": "building", "title": "TAXSIM35", "text": "NBER’s calculator, the reference engine" },
        "left": { "icon": "github", "title": "PolicyEngine", "text": "Open-source rules, run through the emulator" },
        "right": { "icon": "file-text", "title": "TaxAct", "text": "Commercial software: completed federal and state returns" }
      },
      "sides": {
        "left": "Every household, compared automatically",
        "right": "NBER prepares a return when the engines disagree",
        "bottom": "Reconciled line by line on the state form"
      },
      "center": { "title": "Statutes and official instructions", "text": "The law decides which calculation is right" },
      "takeaway": "Agreement measures consistency. The law decides correctness, because two engines can share an error."
    }
  },
  {
    "id": "validation-process",
    "title": "How we validate the emulator",
    "body": [],
    "minutes": 2,
    "notes": "Present validation as a process, not a single benchmark. The figures describe the comparison on the public dashboard: 111,347 Enhanced CPS households, tax years 2021–2025, all 50 states and DC, run through both engines. Cross-model agreement measures consistency; checks against TaxAct returns, the law and tax forms decide which engine is right, because a shared error can survive a comparison. If asked for agreement rates: for 2023, 89.8% agree on federal tax and 94.9% on state tax within ±1% of gross income (data update of September 23, 2026). The comparator default is ±$15. Check the dashboard the day before: its September 23 data treats S-corporation income as active, and PR #1199 (September 29) made passive the default, so a refresh would change the federal figures. Do not refresh with TAXSIM builds from September 24 onward until NBER confirms them (policyengine-taxsim #1248). Source: https://www.policyengine.org/us/taxsim/dashboard",
    "process": {
      "stats": [
        { "value": "111,347", "label": "Enhanced CPS households" },
        { "value": "2021–2025", "label": "Tax years" },
        { "value": "50 + DC", "label": "States in the comparison" },
        { "value": "2 engines", "label": "TAXSIM35 and PolicyEngine" }
      ],
      "steps": [
        { "title": "Run both engines", "text": "Every household goes through TAXSIM35 and PolicyEngine with the same inputs." },
        { "title": "Compare outputs", "text": "Federal and state income tax, within $15 or 1% of income." },
        { "title": "Flag differences", "text": "The dashboard ranks states and flags the ones that diverge." },
        { "title": "Explain the cause", "text": "Input coding, a PolicyEngine rule, or TAXSIM itself, checked against a TaxAct return and the law." },
        { "title": "Fix and publish", "text": "Fixes ship with a test, and the dashboard reruns." }
      ],
      "loop": "Each PolicyEngine release and each TAXSIM update starts the loop again."
    }
  },
  {
    "id": "dashboard-live",
    "title": "The public validation dashboard",
    "body": [],
    "minutes": 5,
    "notes": "Keep this to about 5 minutes so the notable cases fit. Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab.",
    "headerLink": TAXSIM_DASHBOARD,
    "embed": {
      "url": "https://www.policyengine.org/us/taxsim/dashboard",
      "steps": [
        "Pick a tax year, 2021 to 2025",
        "Choose a tolerance",
        "See agreement by state",
        "Inspect a state to list its households"
      ],
      "footnote": "Enhanced CPS households, both engines. PolicyEngine US 2.6.17, data of September 23, 2026."
    }
  },
  {
    "id": "notable-cases",
    "title": "Two notable cases",
    "body": [],
    "minutes": 4,
    "notes": "Two cases where explaining the cause changed the comparison. Rebates (policyengine-taxsim #1068, July 2026): about a fifth of 2022 households disagreed on state tax, in flat clusters, because TAXSIM by default subtracts a one-time rebate in the payout year while PolicyEngine books it to the year whose liability determines it (Virginia’s 2022 rebate was capped at 2021 liability). TAXSIM’s option 27 books rebates in the eligibility year, and option 30 turns that on with related settings. The emulator reports rebates in srebate (PR #1070) and compare can run TAXSIM with option 30 (PR #1074); scoring tax plus rebates raised 2021 state agreement from 75.5% to 87.1% on the 8,000-household test. PE-US #9566 (September 24) moved the Virginia rebate and the Oregon kicker to their eligibility years. S-corporations (#1053): TAXSIM’s documentation describes scorp as passive business income, subject to the 3.8% net investment income tax and the passive-loss limitation; PolicyEngine treated it as active. A single filer with $300,000 of S-corporation income in 2025 owes $3,800 of NIIT in TAXSIM and none in PolicyEngine. PR #1199 (September 29) added an explicit switch, passive by default on policyengine-us 2.10.1 or later; policyengine-us #9572 keeps passive losses out of the EITC investment-income test, and the audit found QBI loss-netting issues on both sides. The conventions line matters for BLS, which builds TAXSIM inputs from the CE.",
    "detail": {
      "columns": ["Case", "What differed", "Why", "How we resolved it"],
      "rows": [
        [
          "One-time state rebates",
          "About a fifth of 2022 households disagreed on state tax, in flat clusters of $250, $500 and $1,000.",
          "Timing: TAXSIM subtracts a rebate in the year it is paid; PolicyEngine books it to the year whose liability sets it.",
          "TAXSIM’s eligibility-year option, and the emulator reports rebates separately. 2021 state agreement rose from 75.5% to 87.1% on an 8,000-household test."
        ],
        [
          "S-corporation income",
          "A single filer with $300,000 in 2025: $3,800 of net investment income tax in TAXSIM, none in PolicyEngine.",
          "TAXSIM documents scorp as passive income; PolicyEngine treated it as active.",
          "An explicit switch in the emulator, passive by default since September 2026. The audit also fixed the EITC investment-income test."
        ]
      ],
      "takeaway": "Some answers are conventions we agree with NBER and write down: rebate timing, S-corporation treatment, rent including utilities, and how a pension is split between spouses.",
      "source": { "label": "policyengine-taxsim issues #1068 and #1053", "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1053" }
    }
  },
  {
    "id": "issue-process",
    "title": "From a reported difference to a fix",
    "body": [],
    "minutes": 3,
    "notes": "Differences travel both ways. Dan Feenberg files households where the engines disagree; we file questions when TAXSIM appears to differ from the law (at least 52 issues titled Does TAXSIM or Does taxsimtest). Each case is reproduced with a minimal household, classified, and resolved. The three examples show the three outcomes: #1241 (opened September 25, fixed by PR #1244 on September 29), #1235 (opened September 24; Feenberg replied Agreed, corrected on September 25), and #1251 (Minnesota renter’s credit: the comparison return had no Schedule M1RENT). Counts from the GitHub issue tracker on October 5, 2026. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues",
    "process": {
      "stats": [
        { "value": "1,063", "label": "Issues on GitHub since July 2024" },
        { "value": "829", "label": "Filed by Dan Feenberg at NBER" },
        { "value": "984", "label": "Closed" },
        { "value": "52+", "label": "Questions we sent NBER about TAXSIM’s own rules" }
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
          "outcome": "Fixed in the emulator in 4 days",
          "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1241"
        },
        {
          "tag": "#1235 · Massachusetts",
          "title": "TAXSIM fix",
          "text": "TAXSIM still applied a bank-interest deduction that Massachusetts repealed in 2024.",
          "outcome": "NBER corrected TAXSIM the next day",
          "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1235"
        },
        {
          "tag": "#1251 · Minnesota",
          "title": "Input difference",
          "text": "PolicyEngine found more credits: the renter’s credit, which the comparison return left out.",
          "outcome": "Explained, no code change",
          "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/1251"
        }
      ]
    }
  },

  // Benefit imputation: 10 minutes
  {
    "id": "benefit-concepts",
    "title": "From eligibility to a benefit value",
    "body": [
      "Eligibility asks whether a unit qualifies",
      "Potential benefits apply the program rules",
      "Participation asks whether eligible people receive benefits",
      "Valuation defines how benefits enter a resource measure"
    ],
    "minutes": 3,
    "notes": "The numbers are a real PolicyEngine run (PolicyEngine US 2.25.2, October 5, 2026) for a single parent in California with children aged 4 and 7 and $25,000 in wages in 2025. A household calculation assumes take-up. In the microdata, take-up is assigned at published rates (SNAP 82% from USDA; Medicaid by state, 78% in California, from KFF and MACPAC enrollment targets), so the expected value is an average across similar households, not a payment to this one. Medi-Cal is valued at PolicyEngine’s average cost per enrollee: $11,801 for the parent and $7,954 per child. Do not add a Medicaid eligibility indicator directly to dollar resources.",
    "chains": {
      "intro": "One California household in 2025: a single parent, children aged 4 and 7, $25,000 in wages.",
      "columns": ["Eligibility", "Benefit if enrolled", "Take-up in the microdata", "Average across similar households"],
      "rows": [
        {
          "program": "SNAP",
          "steps": [
            { "value": "Eligible", "label": "SNAP unit of three" },
            { "value": "$2,442", "label": "a year, about $200 a month" },
            { "value": "82%", "label": "USDA participation rate" },
            { "value": "$2,002", "label": "expected value" }
          ]
        },
        {
          "program": "Medi-Cal",
          "steps": [
            { "value": "3 of 3", "label": "people eligible" },
            { "value": "$27,709", "label": "a year at average cost per enrollee" },
            { "value": "78%", "label": "California rate (KFF, MACPAC)" },
            { "value": "$21,613", "label": "expected value" }
          ]
        }
      ],
      "takeaway": "A household calculator gives the potential benefit. Receipt and valuation are separate research choices.",
      "footnote": "PolicyEngine US 2.25.2, run October 5, 2026. Take-up rates from policyengine-us-data."
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
    "minutes": 3,
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
    "notes": "Each bar adds one component for the same household (PolicyEngine US 2.25.2, 2025). Taxes and credits: the federal EITC and refundable child tax credit and California’s CalEITC and Young Child Tax Credit, less the employee payroll tax. CalWORKs is California’s TANF program. The jump from $43,931 to $71,640 shows why Medicaid needs an explicit valuation choice: cost per enrollee, insurance value and household valuation give different answers, and this talk does not pick one. Establish whether CE research wants potential entitlements, actual receipt, or a broader resource measure.",
    "resourceBars": {
      "intro": "The same household, four resource concepts.",
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

  // A possible CE pilot: 5 minutes
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
    "notes": "This is a proposed integration path, not a tested CE implementation. CE has used NBER’s TAXSIM to estimate income taxes since the 2013 data (BLS Monthly Labor Review, 2015), so the same input file can go to both engines. Start with the core outputs: fiitax, siitax, fica, v22 (child tax credit), v25 (EITC) and frate. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.",
    "compare": {
      "input": { "title": "CE tax-unit records", "text": "An agreed set of inputs for one year." },
      "engines": [
        { "title": "CE’s current TAXSIM run", "text": "In production since the 2013 data." },
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
    "minutes": 3,
    "notes": "Proposed next steps for discussion. The emulator is an open-source package with Python, R, Stata and SAS interfaces that installs inside BLS, so confidential records do not need to leave BLS. The who-provides-what split is a proposal, not an agreement. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.",
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
            "One year of tax-unit records in the current TAXSIM format",
            "The current TAXSIM outputs and the survey weights",
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
  }
];
