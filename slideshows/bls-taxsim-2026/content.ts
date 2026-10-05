export type BlsIcon =
  | 'adjustments' | 'basket' | 'chart-bar' | 'chart-dots' | 'file-spreadsheet' | 'file-text'
  | 'flask' | 'github' | 'history' | 'play' | 'scale' | 'settings' | 'target' | 'users'
  | 'versions' | 'world';

export interface BlsSlideContent {
  id: string;
  title: string;
  body: string[];
  descriptions?: string[];
  minutes: number;
  notes: string;
  cover?: boolean;
  /** Clickable URL shown at the right of the slide title. */
  headerLink?: { label: string; url: string };
  /** Resource cards beside the bullet list (the Q&A slide). */
  links?: { label: string; url: string; description?: string; icon?: BlsIcon }[];
  /** Two-by-two icon cards in place of the bullet list. */
  cards?: { icon: BlsIcon; title: string; text: string }[];
  /** A year-coverage bar and a row of items to record with each run. */
  years?: {
    segments: { label: string; engine: string; note: string; highlight?: boolean }[];
    caption: string;
    recordTitle: string;
    record: { icon: BlsIcon; label: string }[];
  };
  /** One input feeding two calculations, then a comparison and a next step. */
  compare?: {
    input: { title: string; text: string };
    engines: { title: string; text: string }[];
    output: { title: string; text: string };
    next: { title: string; text: string };
    takeaway?: string;
  };
  /** A website capture in place of the bullet list. */
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
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
    steps: { title: string; text: string; output?: string }[];
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
      "Introduction and context   10 min",
      "The emulator and its core assumptions   12 min",
      "Live demonstration   10 min",
      "Validation   13 min",
      "Benefit imputation   10 min",
      "A possible CE pilot   5 min",
      "Q&A and discussion   30 min"
    ],
    "descriptions": [
      "Why this matters for CE, how PolicyEngine works, and the NBER collaboration.",
      "A drop-in TAXSIM interface, how a record becomes a result, preparing survey inputs, and year coverage.",
      "A TAXSIM-format file run in the browser, from input rows to federal and state tax.",
      "How we compare the two engines, the public dashboard, and how a reported difference becomes a fix.",
      "Methods for missing survey inputs, SNAP participation, and Medicaid valuation.",
      "A focused comparison, the inputs it needs, and questions for CE staff.",
      "Questions on the methods, implementation, and opportunities for collaboration."
    ],
    "minutes": 1,
    "notes": "The first six sections total 60 minutes. Cover the emulator’s core assumptions first, then run the live demo, then give an overview of the validation process. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A."
  },
  {
    "id": "ce-opportunity",
    "title": "The CE research opportunity",
    "body": [
      "Calculate taxes using a familiar input format",
      "Examine how assumptions affect household resources",
      "Explore methods for adding in-kind benefits",
      "Start with a bounded research comparison"
    ],
    "minutes": 2,
    "notes": "Present these as opportunities for discussion, not commitments or claims about CE’s current production system.",
    "cards": [
      { "icon": "file-spreadsheet", "title": "A familiar input format", "text": "Calculate federal and state taxes from TAXSIM-format records." },
      { "icon": "adjustments", "title": "Visible assumptions", "text": "See how tax units, income ownership and missing data change after-tax income." },
      { "icon": "basket", "title": "In-kind benefits", "text": "Explore methods to add SNAP and Medicaid to household resources." },
      { "icon": "target", "title": "A bounded first step", "text": "Start with one year, one sample and a reproducible comparison." }
    ]
  },
  {
    "id": "rules-and-data",
    "title": "PolicyEngine separates rules from survey data",
    "body": [
      "Policy rules and parameters define the calculations",
      "Household characteristics supply the inputs",
      "The model returns taxes and benefit estimates",
      "Researchers can inspect the code and assumptions"
    ],
    "minutes": 3,
    "notes": "Explain the four layers using a household with two adults and a child. The household record supplies ages and income. The rules supply the year-specific calculation. Missing data and program participation require additional choices. PolicyEngine’s TAXSIM adapter translates one input schema into the model’s entities; it does not remove these methodological choices. Source: https://github.com/PolicyEngine/policyengine-us and the previous IARIW overview.",
    "detail": {
      "columns": [
        "Layer",
        "What it contributes",
        "Example"
      ],
      "rows": [
        [
          "Household data",
          "People, relationships and financial inputs",
          "Ages, earnings, dependents"
        ],
        [
          "Policy rules",
          "Dated parameters and calculation formulas",
          "Tax brackets and credit formulas"
        ],
        [
          "Calculation",
          "Apply the rules to a specified household",
          "Tax liability or potential benefits"
        ],
        [
          "Research assumptions",
          "Choices needed when information is missing",
          "Participation and income allocation"
        ]
      ],
      "takeaway": "The same policy model can serve different datasets. The data mapping and assumptions need their own validation.",
      "source": {
        "label": "PolicyEngine US model",
        "url": "https://github.com/PolicyEngine/policyengine-us"
      }
    }
  },
  {
    "id": "nber",
    "title": "The NBER collaboration",
    "body": [
      "An open-source emulator built around the TAXSIM interface",
      "Development with guidance from Dan Feenberg",
      "Comparisons that help investigate both models",
      "Continuity for researchers using TAXSIM workflows"
    ],
    "minutes": 3,
    "notes": "Adapt the institutional context from the CRS presentation without repeating undated status claims. Discuss the motivation for preserving a familiar research interface. The screenshot shows the partner section of the TAXSIM site, captured October 5, 2026; its Read more links lead to the MOU announcement and the Atlanta Fed comparison. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25. https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim",
    "headerLink": TAXSIM_SITE,
    "screenshot": {
      "src": "/screenshots/bls-taxsim-2026/taxsim-validated-by.png",
      "alt": "TAXSIM site partner cards: NBER partnership under a memorandum of understanding, and three-way validation with the Federal Reserve Bank of Atlanta Policy Rules Database",
      "width": 4256,
      "height": 1072,
      "caption": "Built under a memorandum of understanding with NBER and TAXSIM creator Daniel Feenberg. The Atlanta Fed’s Policy Rules Database adds a third model for cross-checks."
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
    "notes": "The site shows the before-and-after swap for six environments; the capture shows the R tab. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs) for comparison runs. Ask CE staff which environment their current tax-imputation code uses. This is a documented workflow, not a completed run on CE data. Source: https://www.policyengine.org/us/taxsim (captured October 5, 2026) and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/r-package/policyenginetaxsim/README.md",
    "headerLink": TAXSIM_SITE,
    "screenshot": {
      "src": "/screenshots/bls-taxsim-2026/taxsim-drop-in-r.png",
      "alt": "TAXSIM site Get started tabs with R selected: library(usincometaxes) and taxsim_calculate_taxes(input) before, library(policyenginetaxsim) and policyengine_calculate_taxes(input) after",
      "width": 4256,
      "height": 1032,
      "caption": "Existing scripts keep their input files. In R, taxsim_calculate_taxes() becomes policyengine_calculate_taxes(). The site shows the same swap for the CLI, Python, Stata, SAS and Julia."
    }
  },
  {
    "id": "record-to-result",
    "title": "From a TAXSIM record to a result",
    "body": [],
    "minutes": 3,
    "notes": "Walk through one record. Concrete mappings checked against local commit 29da68f4: core/input_mapper.py maps pwages and swages separately to each person’s employment_income, and page and sage to age. config/variable_mappings.yaml maps fiitax to income_tax and siitax to state_income_tax. A field name is only one part of the contract: which person gets the income, the period and the output definitions also matter. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/input_mapper.py and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/config/variable_mappings.yaml",
    "process": {
      "steps": [
        { "title": "Read the record", "text": "One TAXSIM-format row per tax unit: year, state, filing status, ages and income." },
        { "title": "Build the household", "text": "The adapter creates the people, tax unit and household that the row describes." },
        { "title": "Apply the rules", "text": "PolicyEngine calculates federal and state tax for that year and state." },
        { "title": "Return TAXSIM outputs", "text": "Results come back under familiar names, such as fiitax and siitax." }
      ],
      "takeaway": "The same file format is the starting point. The household that the adapter builds is what the rules see."
    }
  },
  {
    "id": "input-prep",
    "title": "Preparing survey inputs",
    "body": [],
    "minutes": 3,
    "notes": "Present these as the choices a CE team would make before a first run, not as errors CE has made. State codes are the clearest example: the TAXSIM SOI code for New Jersey is 31, while the Census FIPS code is 34, and in TAXSIM 34 means North Carolina. The mappings appear in core/utils.py. Income ownership matters because some rules depend on the age or status of the person who receives the income. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/utils.py",
    "process": {
      "steps": [
        { "title": "Define tax units", "text": "Group people into filers, spouses and dependents." },
        { "title": "Assign income", "text": "Give each amount to the person who receives it." },
        { "title": "Code the state", "text": "Use TAXSIM state codes, not FIPS codes." },
        { "title": "Mark missing values", "text": "Keep a missing value separate from a true zero." },
        { "title": "Check a sample", "text": "Inspect a few built households before the full run." }
      ],
      "takeaway": "Each choice can change a household’s tax, so we record it with the run."
    }
  },
  {
    "id": "years-and-runs",
    "title": "Year coverage and reproducible runs",
    "body": [
      "2021 onward runs in PolicyEngine; earlier years use TAXSIM35",
      "Record which engine handled each year",
      "Pin the emulator and model versions for each run",
      "Keep the input file, options and logs with the output"
    ],
    "minutes": 3,
    "notes": "Explain year stitching. Do not imply that all historical years run natively in PolicyEngine. The exact years required by CE are a scoping question. Distinguish package capabilities from the proposed research protocol, and explain why a pinned environment is useful when policy code changes. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md",
    "years": {
      "segments": [
        { "label": "Before 2021", "engine": "TAXSIM35", "note": "Historical years, back to the 1960s" },
        { "label": "2021 onward", "engine": "PolicyEngine", "note": "Current law and scheduled future law", "highlight": true }
      ],
      "caption": "One command covers every year. The run record shows which engine handled each year.",
      "recordTitle": "Record with every run",
      "record": [
        { "icon": "file-spreadsheet", "label": "Input file" },
        { "icon": "versions", "label": "Emulator version" },
        { "icon": "history", "label": "PolicyEngine version" },
        { "icon": "settings", "label": "Run options" },
        { "icon": "file-text", "label": "Output and logs" }
      ]
    }
  },

  // Live demonstration: 10 minutes
  {
    "id": "demo-file",
    "title": "The demo file: three households",
    "body": [],
    "minutes": 1,
    "notes": "Bridge into the live demo. Read one row aloud: household 1 is a married couple filing jointly (mstat 2) in California with two dependents and $80,000 and $50,000 in wages. Point to the state codes and connect them to the slide on preparing survey inputs. This capture is also the fallback if the live frame does not load. Captured October 5, 2026.",
    "headerLink": TAXSIM_RUN,
    "screenshot": {
      "src": "/screenshots/bls-taxsim-2026/taxsim-run-sample.png",
      "alt": "TAXSIM web runner with sample.csv loaded: output detail set to Standard, and an input preview listing taxsimid, year, state, mstat, depx, pwages, swages, page and sage for three households",
      "width": 3744,
      "height": 1440,
      "caption": "The built-in sample uses TAXSIM state codes: 5 is California, 33 is New York and 44 is Texas. The same file runs with the policyengine-taxsim command."
    }
  },
  {
    "id": "demo-live",
    "title": "Live demo: run the sample file",
    "body": [],
    "minutes": 9,
    "notes": "Start the live demo here: after the core assumptions and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab, or go back one slide to the capture.",
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

  // Validation: 13 minutes
  {
    "id": "validation-process",
    "title": "How we validate the emulator",
    "body": [],
    "minutes": 4,
    "notes": "Present validation as a process, not a single benchmark. Cross-model agreement measures consistency; checks against the law and tax forms decide which engine is right, because a shared error can survive a comparison. If asked for numbers: for 2023, 89.8% of 111,347 Enhanced CPS households agree on federal tax and 94.9% on state tax within ±1% of gross income (dashboard data of September 23, 2026, PolicyEngine US 2.6.17). The headline depends on the tolerance: the dashboard also offers ±$15 and ±1% net of rebates, and the comparator default is ±$15. Source: https://www.policyengine.org/us/taxsim/dashboard and policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx.",
    "process": {
      "intro": "Validation is a repeating process, not a single benchmark.",
      "steps": [
        { "title": "Run both engines", "text": "The same Enhanced CPS records go through TAXSIM35 and PolicyEngine." },
        { "title": "Compare outputs", "text": "Federal and state tax are compared within a stated tolerance." },
        { "title": "Flag differences", "text": "Results by year and state show where the engines disagree." },
        { "title": "Explain the cause", "text": "Check the inputs and both engines against the law and tax forms." },
        { "title": "Fix and publish", "text": "Fixes ship with a test, and the dashboard refreshes." }
      ],
      "loop": "Each PolicyEngine release and each TAXSIM update starts the loop again."
    }
  },
  {
    "id": "dashboard-live",
    "title": "The public validation dashboard",
    "body": [],
    "minutes": 6,
    "notes": "Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab.",
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
    "id": "issue-process",
    "title": "From a reported difference to a fix",
    "body": [],
    "minutes": 3,
    "notes": "Describe the triage process in general terms. The classification decides the next step: an input question gets an explanation of the convention; a PolicyEngine problem gets a code change with a regression test; a possible TAXSIM issue goes back to NBER for confirmation. We check every claimed PolicyEngine error against the statute or tax form before we reply. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues",
    "process": {
      "intro": "Differences reach us from the dashboard and from public GitHub issues, including issues filed by Dan Feenberg at NBER.",
      "steps": [
        { "title": "Report", "text": "A difference is logged as a public GitHub issue." },
        { "title": "Reproduce", "text": "Rebuild it with a minimal household in both engines." },
        { "title": "Classify", "text": "An input question, a PolicyEngine fix, or a possible TAXSIM issue." },
        { "title": "Resolve", "text": "Fix the rule or mapping with a test, or document the convention." },
        { "title": "Confirm", "text": "Reply on the issue; the next dashboard run shows the change." }
      ]
    }
  },

  // Benefit imputation: 10 minutes
  {
    "id": "benefit-concepts",
    "title": "Eligibility, receipt and benefit value",
    "body": [
      "Eligibility asks whether a unit qualifies",
      "Potential benefits apply the program rules",
      "Participation asks whether eligible people receive benefits",
      "Valuation defines how benefits enter a resource measure"
    ],
    "minutes": 3,
    "notes": "The numerical example is invented only to distinguish potential benefits from expected receipt. It is not a SNAP calculation or a measured take-up rate. In a binary participation simulation, the household receives either zero or the modeled amount; the product is an expected value across uncertainty or comparable households. Medicaid requires a separately defined monetary valuation. Do not add a Medicaid eligibility indicator directly to dollar resources. Source: methodological distinctions developed for this seminar.",
    "detail": {
      "columns": [
        "Question",
        "Output",
        "Research choice"
      ],
      "rows": [
        [
          "Does the unit qualify?",
          "Eligibility indicator",
          "Program unit and observed inputs"
        ],
        [
          "How much could it receive?",
          "Potential benefit amount",
          "Apply the rules for the relevant period"
        ],
        [
          "Does it participate?",
          "Observed or imputed receipt",
          "Participation evidence or assumptions"
        ],
        [
          "How does it enter resources?",
          "A defined monetary measure",
          "Program-specific valuation"
        ]
      ],
      "takeaway": "Illustration: $240 potential monthly benefit × 60% assumed participation = $144 expected receipt. These are hypothetical values, not a household entitlement."
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
    "detail": {
      "intro": "Quantile regression forests estimate conditional distributions of missing variables using characteristics shared across surveys.",
      "columns": [
        "Step",
        "What the researcher does"
      ],
      "rows": [
        [
          "Harmonize",
          "Align concepts, units and reference periods across surveys."
        ],
        [
          "Learn",
          "Use shared characteristics to estimate the distribution of a missing variable."
        ],
        [
          "Draw",
          "Sample plausible values rather than assigning every household the predicted mean."
        ],
        [
          "Evaluate",
          "Check held-out distributions and sensitivity across repeated imputations."
        ]
      ],
      "takeaway": "For CE, donor choice and shared predictors would need an explicit assessment before transferring the method.",
      "source": {
        "label": "IARIW 2026 imputation slide",
        "url": "https://github.com/PolicyEngine/policyengine-slides/blob/main/slideshows/iariw-2026/slides/ImputationSlide.tsx"
      }
    }
  },
  {
    "id": "snap-medicaid",
    "title": "SNAP and Medicaid in a resource measure",
    "body": [
      "SNAP: program units, eligibility and potential allotments",
      "Participation assumptions convert eligibility into receipt estimates",
      "Medicaid: eligibility and enrollment need separate treatment",
      "A monetary Medicaid value requires a defined valuation method"
    ],
    "minutes": 2,
    "notes": "Use this comparison to explain why benefit imputation contains more than a call to an eligibility calculator. Establish whether CE research seeks potential entitlements, actual receipt, or a broader resource measure. For Medicaid, costs, insurance value and household valuation are different concepts; this talk does not select one. No numerical benefit estimates are asserted.",
    "detail": {
      "columns": [
        "Choice",
        "SNAP",
        "Medicaid"
      ],
      "rows": [
        [
          "Modeled result",
          "Eligibility and potential allotment",
          "Eligibility for coverage"
        ],
        [
          "Receipt",
          "Reported receipt or modeled participation",
          "Reported enrollment or modeled participation"
        ],
        [
          "Monetary measure",
          "Benefit amount over the chosen period",
          "A separately specified value of coverage"
        ],
        [
          "Validation",
          "Recipient counts and benefit amounts",
          "Enrollment and the selected valuation benchmark"
        ]
      ],
      "takeaway": "The research question determines the resource concept. Eligibility alone does not identify actual receipt or a monetary value."
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
    "notes": "The prior IARIW deck describes calibration of household weights to administrative totals. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: policyengine-slides/slideshows/iariw-2026/slides/ImputationSlide.tsx and CalibrationSlide.tsx.",
    "cards": [
      { "icon": "chart-bar", "title": "External benchmarks", "text": "Compare imputed receipt and amounts with administrative totals." },
      { "icon": "users", "title": "Errors by group", "text": "Check how errors differ by income, household type and state." },
      { "icon": "flask", "title": "Holdout tests", "text": "Test on data held back from estimation, and try alternative assumptions." },
      { "icon": "scale", "title": "Calibration is not validation", "text": "A target used to fit the weights cannot also validate them." }
    ]
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
    "notes": "This is a proposed integration path, not a representation of a tested CE implementation. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.",
    "compare": {
      "input": { "title": "CE tax-unit records", "text": "An agreed set of inputs for one year." },
      "engines": [
        { "title": "Current CE tax calculation", "text": "The existing method, unchanged." },
        { "title": "PolicyEngine TAXSIM emulator", "text": "The same records, same input format." }
      ],
      "output": { "title": "Compare", "text": "Household results and weighted summaries." },
      "next": { "title": "Review", "text": "Explain differences before expanding the scope." },
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
    "notes": "Proposed next steps for discussion. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.",
    "process": {
      "intro": "Four steps, each with a clear output.",
      "steps": [
        { "title": "Scope", "text": "Agree one year, one sample and the key tax outputs.", "output": "Scope note" },
        { "title": "Map", "text": "Document input mappings and missing-data assumptions.", "output": "Mapping document" },
        { "title": "Compare", "text": "Run both calculations and log every difference.", "output": "Comparison and discrepancy log" },
        { "title": "Extend", "text": "Choose one benefit extension after the tax results.", "output": "Extension plan" }
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
