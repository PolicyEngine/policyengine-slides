export type BlsIcon =
  | 'chart-bar' | 'chart-dots' | 'file-spreadsheet' | 'file-text' | 'flask' | 'github'
  | 'history' | 'play' | 'scale' | 'settings' | 'users' | 'versions' | 'world';

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
  /** Side-by-side comparisons where one coding choice changes. */
  contrasts?: {
    intro: string;
    items: { title: string; measure: string; options: { label: string; value: number }[]; delta: string; note: string }[];
    footnote: string;
  };
  /** Bars by tax year, colored by engine, with a run-record list. */
  yearChart?: {
    title: string;
    legend: { taxsim: string; pe: string };
    bars: { year: number; value: number; engine: 'taxsim' | 'pe'; note?: string }[];
    footnote: string;
    recordTitle: string;
    record: { icon: BlsIcon; label: string }[];
    caption: string;
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
    /** Short facts shown in a column beside the image. */
    facts?: { value: string; label: string }[];
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
      "Introduction and context",
      "The emulator and its core assumptions",
      "Live demonstration",
      "Validation",
      "Benefit imputation",
      "A possible CE pilot",
      "Q&A and discussion"
    ],
    "descriptions": [
      "What PolicyEngine is, who uses it, and the NBER collaboration.",
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
      "Continuity for researchers using TAXSIM workflows"
    ],
    "minutes": 3,
    "notes": "Adapt the institutional context from the CRS presentation without repeating undated status claims. Discuss the motivation for preserving a familiar research interface. Context for this audience: since the 2013 data, the CE has used NBER’s TAXSIM to estimate income taxes for most households (BLS Monthly Labor Review, 2015, https://www.bls.gov/opub/mlr/2015/article/improving-data-quality-in-ce-with-taxsim.htm). We compare PolicyEngine and TAXSIM for federal and state income tax in tax years 2021 onward; the TAXSIM site says this work led to the formal partnership. The card is from the TAXSIM site, captured October 5, 2026; its Read more link leads to the MOU announcement. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25. https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim",
    "headerLink": TAXSIM_SITE,
    "screenshot": {
      "src": "/screenshots/bls-taxsim-2026/taxsim-nber-card.png",
      "alt": "TAXSIM site card: NBER partnership, built under a memorandum of understanding with the National Bureau of Economic Research and TAXSIM creator Daniel Feenberg",
      "width": 2080,
      "height": 990,
      "facts": [
        { "value": "Tax years 2021 onward", "label": "PolicyEngine and TAXSIM compared side by side" },
        { "value": "Federal and state", "label": "Income tax models compared" }
      ],
      "caption": "The comparison work led to a formal partnership with NBER."
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
    "body": [
      "One TAXSIM-format row: a married couple in California, two children, $130,000 in wages",
      "The adapter builds two adults and two dependents in one joint tax unit",
      "PolicyEngine returns $8,282 federal and $3,214 California income tax for 2024"
    ],
    "minutes": 3,
    "notes": "Walk through one real record from left to right. The row is household 1 of the web runner’s sample file, with the children’s ages added. The adapter maps pwages and swages to each person’s employment_income and page and sage to age, then returns fiitax (income_tax) and siitax (state_income_tax) in TAXSIM’s output format. fica is the TAXSIM convention: employee and employer payroll tax together (15.3% of $130,000). Point out that the federal tax already nets the $4,000 child tax credit. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2; the older local build gave the same numbers.",
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
  {
    "id": "input-prep",
    "title": "Coding choices change the result",
    "body": [
      "State code: a New Jersey household coded with the FIPS code is taxed as North Carolina",
      "Dependent ages: children aged 17 and 19 instead of 8 and 12 raise federal tax by $3,000",
      "Tax units: the same parents as two returns pay $3,229 less than one joint return"
    ],
    "minutes": 3,
    "notes": "Each panel changes one coding choice for the same people and income; the numbers are real emulator runs. State code: TAXSIM uses its own state codes, where New Jersey is 31; the Census FIPS code for New Jersey is 34, which TAXSIM reads as North Carolina. The run does not fail, it silently applies the wrong state’s law. Dependent ages: at 17 and 19 the children no longer qualify for the $2,000 child tax credit and get the $500 credit for other dependents instead. Tax units: one joint return versus a head-of-household return (with both children and $80,000) plus a single return ($50,000); this is the question of how to form tax units for unmarried parents. Present these as choices CE would make, not as errors CE has made. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2.",
    "contrasts": {
      "intro": "Same people, same income. One coding choice changes in each panel.",
      "items": [
        {
          "title": "State code",
          "measure": "New Jersey household, state income tax, 2024",
          "options": [
            { "label": "Coded 31, TAXSIM’s code for NJ", "value": 4131 },
            { "label": "Coded 34, the Census FIPS code", "value": 4658 }
          ],
          "delta": "+$527, and no error message",
          "note": "TAXSIM reads 34 as North Carolina."
        },
        {
          "title": "Dependent ages",
          "measure": "California household, federal income tax, 2024",
          "options": [
            { "label": "Children aged 8 and 12", "value": 8282 },
            { "label": "Children aged 17 and 19", "value": 11282 }
          ],
          "delta": "+$3,000",
          "note": "The child tax credit falls from $4,000 to $1,000."
        },
        {
          "title": "Tax units",
          "measure": "Same two parents, federal plus state income tax, 2024",
          "options": [
            { "label": "One joint return", "value": 11496 },
            { "label": "Two returns: head of household and single", "value": 8267 }
          ],
          "delta": "−$3,229",
          "note": "How to form tax units is a research decision."
        }
      ],
      "footnote": "Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2."
    }
  },
  {
    "id": "years-and-runs",
    "title": "Year coverage and reproducible runs",
    "body": [
      "One file across 2018–2025: TAXSIM35 handles years before 2021, PolicyEngine handles 2021 onward",
      "Law changes show up year by year, such as the 2020–21 stimulus payments and the 2021 expanded child tax credit",
      "Record the input file, versions, options and logs with every run"
    ],
    "minutes": 3,
    "notes": "This is the slide-8 household (California, two children aged 8 and 12, $130,000 in wages) run for eight tax years in one file. The emulator routed 2018–2020 to the bundled TAXSIM35 binary and 2021–2025 to PolicyEngine. Federal tax nets the credits: 2020 includes both rounds of stimulus payments ($3,400 and $2,400), 2021 includes the third round ($5,600) and the expanded $6,000 child tax credit, and 2025 reflects the $2,200-per-child credit. Do not imply that all historical years run natively in PolicyEngine. The exact years CE needs are a scoping question. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2.",
    "yearChart": {
      "title": "Federal income tax for the same household",
      "legend": { "taxsim": "TAXSIM35", "pe": "PolicyEngine" },
      "bars": [
        { "year": 2018, "value": 11199, "engine": "taxsim" },
        { "year": 2019, "value": 10949, "engine": "taxsim" },
        { "year": 2020, "value": 4924, "engine": "taxsim", "note": "Stimulus payments" },
        { "year": 2021, "value": 2975, "engine": "pe", "note": "Stimulus, $6,000 CTC" },
        { "year": 2022, "value": 10136, "engine": "pe" },
        { "year": 2023, "value": 9121, "engine": "pe" },
        { "year": 2024, "value": 8282, "engine": "pe" },
        { "year": 2025, "value": 7098, "engine": "pe", "note": "$2,200 per child" }
      ],
      "footnote": "The household from slide 8. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2.",
      "recordTitle": "Record with every run",
      "record": [
        { "icon": "file-spreadsheet", "label": "Input file" },
        { "icon": "versions", "label": "Emulator version" },
        { "icon": "history", "label": "PolicyEngine version" },
        { "icon": "settings", "label": "Run options" },
        { "icon": "file-text", "label": "Output and logs" }
      ],
      "caption": "One command covers every year. The run record shows which engine handled each year."
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
