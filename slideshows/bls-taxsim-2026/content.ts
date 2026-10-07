export type BlsIcon =
  | 'book' | 'building' | 'calendar' | 'chart-bar' | 'chart-dots' | 'file-text' | 'flask'
  | 'github' | 'history' | 'play' | 'scale' | 'users' | 'world'
  | 'briefcase' | 'receipt' | 'gavel' | 'heart-handshake';

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
    getStartedSubtitle: string;
    beforeLabel: string;
    afterLabel: string;
    tabs: { label: string; lang: string; before: string; after: string }[];
    takeaway: string;
  };
  /** Shown under a card grid as a one-line takeaway. */
  cardsTakeaway?: string;
  /** Rows by general area: what TAXSIM gives, how the emulator maps it, and what PolicyEngine can model. */
  mapping?: {
    columns: [string, string, string];
    rows: { area: string; taxsim: string; emulator: string; pe: string }[];
    takeaway?: string;
  };
  /** A section opener: the section number; the title is the section name. */
  divider?: { number: string };
  /** How the collaboration started: the testing process before the emulator and the milestones after it. */
  origins?: {
    processTitle: string;
    processDetail: string;
    steps: { title: string; text: string }[];
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
      "Validation",
      "Beyond TAXSIM",
      "A possible CE pilot",
      "Q&A and discussion"
    ],
    "descriptions": [
      "What PolicyEngine is, who uses it, and how the NBER collaboration started.",
      "A drop-in TAXSIM interface, where each calculation happens, and a live demo in the browser.",
      "How TAXSIM, PolicyEngine and TaxAct are checked against the law, the public dashboard, notable cases, and how a reported difference becomes a fix.",
      "What PolicyEngine models beyond TAXSIM’s inputs, and methods for missing survey inputs, SNAP participation and Medicaid valuation.",
      "A focused comparison, the inputs it needs, and questions for CE staff.",
      "Questions on the methods, implementation, and opportunities for collaboration."
    ],
    "minutes": 1,
    "notes": "The first five sections total 66 minutes. Show the drop-in swap and where each calculation happens, then run the live demo, then give an overview of the validation process. Then show what PolicyEngine models beyond TAXSIM, and introduce benefit imputation as an extension that needs more data and methodological choices. Reserve 30 minutes for Q&A."
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
    "id": "origins",
    "title": "How the collaboration started",
    "body": [],
    "minutes": 2,
    "notes": "Ease into the partnership before the agreement slide. Validation against TAXSIM35 started in April 2022 (policyengine-us issue #704, “Validate against TAXSIM 35”). Before the emulator existed, the team used differential testing: random samples of 100,000 tax units, about 1.6 million units across two sample sequences, went through TAXSIM35 and PolicyEngine US for tax year 2021, federal and each state. The units with the largest differences came out one at a time, and the team filled out the relevant part of the tax form by hand to decide which model was wrong. If TAXSIM35 was wrong, its code was patched; if PolicyEngine was wrong, an issue with a failing test was filed. Daniel Feenberg made this possible by sharing the TAXSIM35 source code. The method is written up in policyengine-us discussion #2389. The policyengine-taxsim emulator started in May 2024, and Feenberg filed his first issue on its public tracker on September 22, 2024; he has filed about 830 since. In 2025, NSF awarded PolicyEngine a POSE Phase I grant (award 2518372, September 2025 to August 2026), and Feenberg served as the external mentor through the I-Corps for POSE training. The September 2025 memorandum of understanding (next slide) formalized more than three years of this work. Sources: github.com/PolicyEngine/policyengine-us/issues/704, github.com/PolicyEngine/policyengine-us/discussions/2389, nsf.gov/awardsearch/show-award/?AWD_ID=2518372, policyengine.org/us/research/nsf-pose-phase-1-grant.",
    "origins": {
      "processTitle": "Before the emulator: differential testing",
      "processDetail": "2022–2024 · tax year 2021, federal and every state",
      "steps": [
        { "title": "Run both models", "text": "Samples of 100,000 tax units through TAXSIM35 and PolicyEngine." },
        { "title": "Rank the differences", "text": "The largest tax differences came out one at a time." },
        { "title": "Trace by hand", "text": "Fill out the tax form to see which model is wrong." },
        { "title": "Fix either side", "text": "A PolicyEngine fix with a test, or a TAXSIM35 correction." }
      ],
      "milestonesTitle": "From testing to partnership",
      "milestones": [
        { "when": "2022", "title": "Validation begins", "text": "Daniel Feenberg shares TAXSIM35 code for testing." },
        { "when": "2024", "title": "The emulator", "text": "TAXSIM inputs and outputs on PolicyEngine rules." },
        { "when": "2025", "title": "NSF POSE Phase I", "text": "Feenberg is external mentor through I-Corps for POSE." },
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
    "minutes": 3,
    "notes": "Start on the left with TAXSIM, end on the right with PolicyEngine, and use the middle for the agreement and how one interface routes tax years. Close with: both teams validate the emulator, and the work has improved how both TAXSIM and PolicyEngine encode tax law. TAXSIM has run at NBER since the 1970s; Daniel Feenberg created it and still maintains it, and more than 1,200 papers cite the Feenberg and Coutts (1993) paper. Think tanks such as Brookings and federal agencies rely on it. NBER started filing differences on the emulator’s public GitHub tracker in 2024 (first Feenberg issue: September 22, 2024). The memorandum of understanding with NBER (Daniel Feenberg and James Poterba) was announced on September 5, 2025. policyengine-taxsim 3.0.0 was released on September 29, 2026, one of 80 PyPI releases since February 2026. One interface covers every tax year: TAXSIM35 handles 1960–2020 (state law from 1977) and PolicyEngine handles 2021 onward. PolicyEngine facts (right): public code since June 2021, 133 contributors to the US model, 95,000+ parameters and 4,693 test files, from the gettsim-2026 deck (September 3, 2026); check them before the talk. The benefit list follows the Benefits and taxes section of policyengine.org/us/taxsim, which also names housing vouchers, the EITC and the CTC. Optional context for this audience, not on the slide: the CE has used TAXSIM since the 2013 data (BLS Monthly Labor Review, 2015). Sources: https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim and https://pypi.org/project/policyengine-taxsim/",
    "headerLink": TAXSIM_SITE,
    "bridge": {
      "left": {
        "title": "TAXSIM at NBER",
        "party": "nber",
        "items": [
          { "icon": "history", "title": "Developed since the 1970s", "detail": "By Daniel Feenberg, who maintains it" },
          { "icon": "book", "title": "1,200+ citing papers", "detail": "Feenberg and Coutts (1993)" },
          { "icon": "calendar", "title": "Federal law from 1960", "detail": "State law from 1977" },
          { "icon": "building", "title": "Used in research and policy", "detail": "Think tanks and federal agencies" }
        ]
      },
      "center": {
        "title": "Memorandum of understanding",
        "date": "September 2025",
        "detail": "Daniel Feenberg and James Poterba (NBER) with PolicyEngine",
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
          { "icon": "building", "title": "Used in research and policy", "detail": "Congress, think tanks, benefit tools" }
        ]
      }
    }
  },

  // The emulator and its core assumptions: 12 minutes
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
      "getStartedSubtitle": "Same input format, same output variables. Just swap the command.",
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

  // Live demonstration: 10 minutes
  {
    "id": "demo-live",
    "title": "Live demo: run the sample file",
    "body": [],
    "minutes": 13,
    "notes": "Go straight into the live demo after the routing diagram and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. Start by loading the 3-household sample and reading household 1 aloud: a married couple in California (state code 5, mstat 2) with two dependents and $80,000 and $50,000 in wages. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab. Demo steps: (1) Load the 3-household sample; (2) Keep Standard output: federal and state tax, FICA and marginal rates; (3) Run and download in the browser; (4) Read the results for each household; (5) Switch to Full for AGI, credits, deductions and AMT.",
    "headerLink": TAXSIM_RUN,
    "embed": {
      "url": "https://www.policyengine.org/us/taxsim/run",
      "footnote": "No installation needed. The same file runs with the policyengine-taxsim command."
    }
  },

  // Validation: 16 minutes
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
    "notes": "Keep this to about 5 minutes so the notable cases fit. Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab. Dashboard steps: (1) Pick a tax year, 2021 to 2025; (2) Choose a tolerance; (3) See agreement by state; (4) Inspect a state to list its households.",
    "headerLink": TAXSIM_DASHBOARD,
    "embed": {
      "url": "https://www.policyengine.org/us/taxsim/dashboard"
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
    "id": "section-benefits",
    "title": "Beyond TAXSIM",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "04" }
  },
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
    "id": "input-mapping",
    "title": "How TAXSIM inputs map to PolicyEngine",
    "body": [],
    "minutes": 2,
    "notes": "Show the abstractions that let PolicyEngine accept a TAXSIM file and return TAXSIM variables. Business income: TAXSIM gives one amount per type. The emulator maps pbusinc and sbusinc (with psemp and ssemp) to self-employment income, pprofinc and sprofinc to income from a specified service trade or business, and scorp to partnership and S-corporation income. TAXSIM’s own QBI deduction is a flat 20% with the service-business phase-in, capped by taxable income; it has no W-2 wage or property test. PolicyEngine applies those limits, so without W-2 wages the deduction phases out above the threshold. The emulator’s --assume-w2-wages option reproduces TAXSIM’s simpler rule (it is available on the policyengine and compare commands, not on the default drop-in command). Itemized deductions: TAXSIM’s mortgage and otheritem are aggregates; the emulator sums them into deductible mortgage interest, which has no floor or cap, to match TAXSIM, because charity and medical would bring AGI caps and floors TAXSIM does not apply. Property tax maps to real estate taxes. SALT: PolicyEngine computes the state income tax itself and takes the larger of income or sales tax, with the IRS sales tax tables; it also models city and county income taxes (New York City, Philadelphia, Kansas City, St. Louis, Wilmington and Indiana counties). Do not present the 2025 SALT cap as a difference: TAXSIM also applies it. Household: filing status is derived from mstat and the dependents; interest, dividends, capital gains and S-corporation income are split evenly between spouses; missing ages default to 40 for the head and 10 for dependents. Outputs: fiitax maps to income_tax and siitax to state_income_tax; PolicyEngine US has 40 variables built for TAXSIM outputs, including taxsim_fica. A few detail outputs are not implemented. Sources: policyengine-taxsim 3.0.1 config/variable_mappings.yaml and runners/policyengine_runner.py; TAXSIM source law87.for.",
    "mapping": {
      "columns": ["TAXSIM gives", "The emulator maps it to", "PolicyEngine can model"],
      "rows": [
        { "area": "Business income", "taxsim": "pbusinc, pprofinc, scorp", "emulator": "Self-employment, service-business and S corporation income", "pe": "The QBI deduction with W-2 wage and property limits" },
        { "area": "Itemized deductions", "taxsim": "mortgage, otheritem, proptax", "emulator": "One deduction with no floor or cap, plus property tax", "pe": "Charity, medical and mortgage interest, each with its own rules" },
        { "area": "State and local taxes", "taxsim": "state", "emulator": "State income tax computed for the SALT deduction", "pe": "Income or sales tax, and city and county income taxes" },
        { "area": "Household", "taxsim": "mstat, ages, dependents", "emulator": "Derived filing status, income split between spouses", "pe": "Each person’s income, age and relationships" },
        { "area": "Outputs", "taxsim": "fiitax, siitax, fica, v10–v45", "emulator": "Mapped from PolicyEngine variables, 40 built for TAXSIM", "pe": "Any PolicyEngine variable, up to household net income" }
      ],
      "takeaway": "The emulator keeps PolicyEngine at TAXSIM’s level of detail, so the two stay comparable."
    }
  },
  {
    "id": "beyond-taxsim",
    "title": "What PolicyEngine adds beyond TAXSIM",
    "body": [],
    "minutes": 2,
    "notes": "This is what PolicyEngine’s own interfaces offer beyond the emulator. Business income: the QBI deduction with W-2 wage and property limits, specified service businesses, and REIT and PTP income. Deductions: SALT from income or sales tax, property tax and city or county income taxes; charity and medical with their own AGI rules, including the 2026 deduction for non-itemizers’ charitable gifts. New provisions: deductions for tips, overtime and car-loan interest from the 2025 tax law need inputs that TAXSIM does not have; the senior deduction is reachable through ages. Benefits: SNAP, SSI, TANF, WIC, Medicaid and ACA premium tax credits combine into household net income, and marginal rates can include benefits. Any parameter can be changed for reform analysis. In TAXSIM mode the emulator sets these benefits to zero and keeps inputs at TAXSIM’s level of detail, so its results stay comparable with TAXSIM. This leads into the next slide: the richer the rules, the more inputs a survey must supply, which is where imputation comes in.",
    "cards": [
      { "icon": "briefcase", "title": "Business income in detail", "text": "The QBI deduction with W-2 wage and property limits, service businesses, and REIT and PTP income." },
      { "icon": "receipt", "title": "Deductions by component", "text": "SALT from income or sales tax, property tax and local income taxes; charity and medical with their own limits." },
      { "icon": "gavel", "title": "Provisions beyond TAXSIM’s inputs", "text": "Deductions for tips, overtime and car-loan interest under the 2025 tax law." },
      { "icon": "heart-handshake", "title": "Taxes and benefits together", "text": "SNAP, SSI, Medicaid and ACA premium credits, household net income, and marginal rates that include benefits." }
    ],
    "cardsTakeaway": "Every extra rule needs an input, and a survey may not collect it. That is where imputation comes in."
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
    "id": "section-pilot",
    "title": "A possible CE pilot",
    "body": [],
    "minutes": 0,
    "notes": "Section opener. Move on after a few seconds.",
    "divider": { "number": "05" }
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
