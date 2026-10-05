export interface BlsSlideContent {
  id: string;
  title: string;
  body: string[];
  descriptions?: string[];
  minutes: number;
  notes: string;
  cover?: boolean;
  image?: string;
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

/** Draft content. 60 minutes of presentation, including the demo, plus 30 minutes of Q&A. */
export const blsSlides: BlsSlideContent[] = [
  {
    "id": "slide-01",
    "title": "Tax and benefit imputation for the CE",
    "body": [
      "PolicyEngine’s TAXSIM emulator and beyond",
      "Max Ghenis and Pavel Makarchuk",
      "BLS seminar · October 8, 2026"
    ],
    "minutes": 1,
    "notes": "Introduce the speakers and thank the BLS hosts and the CE team.",
    "cover": true
  },
  {
    "id": "slide-02",
    "title": "Today’s discussion",
    "body": [
      "Introduction and context   10 min",
      "Emulator package and workflow   15 min",
      "Validation and demonstration   20 min",
      "Benefit imputation   10 min",
      "A possible CE pilot   5 min",
      "Q&A and discussion   30 min"
    ],
    "descriptions": [
      "Why this matters for CE, how PolicyEngine works, and the NBER collaboration.",
      "How TAXSIM inputs become outputs, with package features and reproducible workflows.",
      "How we investigate differences between models, followed by an end-to-end demo.",
      "Methods for missing survey inputs, SNAP participation, and Medicaid valuation.",
      "A focused comparison, the inputs it needs, and questions for CE staff.",
      "Questions on the methods, implementation, and opportunities for collaboration."
    ],
    "minutes": 1,
    "notes": "The first five sections total 60 minutes. Lead with the TAXSIM emulator and its validation, the central focus of the CE tax-imputation discussion. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A."
  },
  {
    "id": "slide-03",
    "title": "The CE research opportunity",
    "body": [
      "Calculate taxes using a familiar input format",
      "Examine how assumptions affect household resources",
      "Explore methods for adding in-kind benefits",
      "Start with a bounded research comparison"
    ],
    "minutes": 2,
    "notes": "Present these as opportunities for discussion, not commitments or claims about CE’s current production system."
  },
  {
    "id": "slide-04",
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
    "id": "slide-05",
    "title": "The NBER collaboration",
    "body": [
      "An open-source emulator built around the TAXSIM interface",
      "Development with guidance from Dan Feenberg",
      "Comparisons that help investigate both models",
      "Continuity for researchers using TAXSIM workflows"
    ],
    "minutes": 3,
    "notes": "Adapt the institutional context from the CRS presentation without repeating undated status claims. Discuss the motivation for preserving a familiar research interface. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25. https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim"
  },
  {
    "id": "slide-06",
    "title": "How TAXSIM fields map into PolicyEngine",
    "body": [
      "TAXSIM-format records enter the package",
      "Mappings construct the PolicyEngine inputs",
      "The tax model calculates federal and state results",
      "Mappings return the TAXSIM output fields"
    ],
    "minutes": 3,
    "notes": "Concrete mappings checked against local commit 29da68f4: core/input_mapper.py maps pwages and swages separately to person employment_income, and page and sage to age. config/variable_mappings.yaml maps fiitax to income_tax and siitax to state_income_tax. Show that a field name is only one part of the contract: person assignment, period and output conventions also matter. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/input_mapper.py and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/config/variable_mappings.yaml",
    "detail": {
      "intro": "The adapter translates person and tax-unit inputs, then returns familiar TAXSIM output names.",
      "columns": [
        "TAXSIM field",
        "Meaning",
        "PolicyEngine mapping"
      ],
      "rows": [
        [
          "pwages / swages",
          "Primary / spouse wages",
          "employment_income for each person"
        ],
        [
          "page / sage",
          "Primary / spouse ages",
          "age for each person"
        ],
        [
          "fiitax",
          "Federal income tax output",
          "income_tax"
        ],
        [
          "siitax",
          "State income tax output",
          "state_income_tax"
        ]
      ],
      "takeaway": "A compatible file format makes integration easier. Correct entity construction and output definitions still matter.",
      "source": {
        "label": "Input mapper and output mappings",
        "url": "https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/config/variable_mappings.yaml"
      }
    }
  },
  {
    "id": "slide-07",
    "title": "An R workflow using existing input files",
    "body": [
      "Command-line processing of input files",
      "An R wrapper for existing research scripts",
      "Vectorized calculation for larger samples",
      "Version reporting and pinning for repeatable runs"
    ],
    "minutes": 3,
    "notes": "This is a documented workflow example, not a completed run on CE data. Explain setup_policyengine() as the one-time environment setup after installation. Show the flat-file read, calculation and export. Avoid reading the code line by line. The key research point is that the input and output can stay within an existing R workflow. Version pinning and configuration belong with the run record. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/r-package/policyenginetaxsim/README.md",
    "detail": {
      "intro": "After package installation and one-time setup, the R wrapper accepts a data frame and returns tax results.",
      "code": "library(policyenginetaxsim)\n\ninputs <- read.csv(\"tax_units.csv\")\nresults <- policyengine_calculate_taxes(inputs)\n\nwrite.csv(results, \"tax_results.csv\",\n          row.names = FALSE)",
      "caption": "The package documentation also provides compare_with_taxsim(inputs) for comparison runs.",
      "takeaway": "Keep the input file, software versions and run options with the output.",
      "source": {
        "label": "R package documentation",
        "url": "https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/r-package/policyenginetaxsim/README.md"
      }
    }
  },
  {
    "id": "slide-08",
    "title": "Year coverage and model routing",
    "body": [
      "The documented workflow routes 2021 onward to PolicyEngine",
      "Earlier years use TAXSIM35 through the same interface",
      "Model coverage and software dependencies still differ by year",
      "A research run should record which engine handled each year"
    ],
    "minutes": 2,
    "notes": "Explain year stitching. Do not imply that all historical years run natively in PolicyEngine. The exact years required by CE are a scoping question. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md"
  },
  {
    "id": "slide-09",
    "title": "Reproducible research runs",
    "body": [
      "Keep the original input file and variable definitions",
      "Record emulator and model versions",
      "Save options, output files and diagnostic logs",
      "Re-run a fixed comparison sample after updates"
    ],
    "minutes": 3,
    "notes": "Suggested practice for a CE pilot. Distinguish package capabilities from the proposed research protocol. Explain why a pinned environment is useful when policy code changes. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md"
  },
  {
    "id": "slide-10",
    "title": "Input conventions can change the result",
    "body": [
      "Tax units and dependent relationships",
      "Income concepts and reference periods",
      "Expenses, deductions and missing values",
      "State identifiers and filing-status coverage"
    ],
    "minutes": 4,
    "notes": "Use New Jersey as a concrete example of a schema mismatch. The TAXSIM SOI state code is 31, while the Census FIPS code is 34. In TAXSIM, 34 means North Carolina. These mappings appear in core/utils.py and the YAML generator uses FIPS for PolicyEngine test data. This is a code-system explanation, not a claim that CE has made this error. Then connect income ownership to the later pension-allocation case. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/utils.py",
    "detail": {
      "columns": [
        "Input decision",
        "Why it matters",
        "Check before comparison"
      ],
      "rows": [
        [
          "State codes",
          "TAXSIM and FIPS use different code systems",
          "TAXSIM 31 = NJ; FIPS 34 = NJ"
        ],
        [
          "Income ownership",
          "Some rules depend on the recipient’s characteristics",
          "Assign income to the relevant person"
        ],
        [
          "Dependent details",
          "Ages and relationships affect modeled treatment",
          "Inspect the constructed tax unit"
        ],
        [
          "Missing values",
          "Defaults can silently become assumptions",
          "Distinguish missing from a true zero"
        ]
      ],
      "takeaway": "In the TAXSIM code system, 34 means North Carolina. A valid numeric code can still identify the wrong state.",
      "source": {
        "label": "State code mappings",
        "url": "https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/utils.py"
      }
    }
  },
  {
    "id": "slide-11",
    "title": "Validation at several levels",
    "body": [
      "Tests of individual rules and edge cases",
      "Identical inputs run through both calculators",
      "Differences examined by year, state and household type",
      "Policy-source checks to explain disagreements"
    ],
    "minutes": 3,
    "notes": "Adapt the validation structure from PWBM and CRS. Cross-model agreement measures consistency, while source-based checks help assess correctness. A shared error can survive a comparison. Source: policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25."
  },
  {
    "id": "slide-12",
    "title": "Case study: assigning pension income",
    "body": [
      "Reproduce the result with a minimal household",
      "Locate the first intermediate value that differs",
      "Check input mappings and the applicable policy rule",
      "Document the explanation and retain a regression case"
    ],
    "minutes": 3,
    "notes": "This is a historical example, not a claim about current behavior. Feenberg’s issue describes pension and Social Security allocation and requests discussion of the convention. The issue is now closed, but the available issue text does not establish a particular implemented resolution. Do not claim a specific fix or performance result. Explain the diagnosis: examine the person-level inputs before the tax formula. For survey applications, observed ownership is preferable where available; otherwise the convention must be documented. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues/669, checked September 22, 2026.",
    "detail": {
      "intro": "Issue #669 documented a comparison in which pension allocation between partners differed.",
      "columns": [
        "Comparison choice",
        "Why it changed the interpretation"
      ],
      "rows": [
        [
          "PolicyEngine behavior reported in the issue",
          "Split the pension income between partners."
        ],
        [
          "Comparison setup",
          "The TaxAct input assigned the pension to the older partner."
        ],
        [
          "TAXSIM convention described by Feenberg",
          "Allocation depended on whether partners were on different sides of age 65."
        ],
        [
          "Lesson for validation",
          "Match person-level assumptions before attributing a difference to policy rules."
        ]
      ],
      "takeaway": "The same household total can produce a different comparison when income belongs to different people.",
      "source": {
        "label": "Historical example: TAXSIM issue #669, December 2025",
        "url": "https://github.com/PolicyEngine/policyengine-taxsim/issues/669"
      }
    }
  },
  {
    "id": "slide-13",
    "title": "What a match rate does and does not show",
    "body": [
      "Dataset, tax year and software versions",
      "Output variable and dollar tolerance",
      "Number of records and treatment of survey weights",
      "Magnitude, concentration and causes of residual differences"
    ],
    "minutes": 3,
    "notes": "Checked against local commit 29da68f4. ComparatorConfig defaults federal_tolerance and state_tolerance to 15, relative_tolerance to zero. The matching logic uses np.isclose with rtol=0. Optional settings include income-scaled tolerances and state rebate treatment. The implementation uses equal_nan=True, so any published analysis must audit missing outputs separately rather than interpreting matched missing values as validated calculations. This slide does not assert an observed agreement rate. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/comparison/comparator.py",
    "detail": {
      "intro": "The comparator defaults to a $15 absolute tolerance for federal and state tax, with zero relative tolerance.",
      "columns": [
        "Measure",
        "What to report"
      ],
      "rows": [
        [
          "Agreement",
          "Share of valid records within the stated tolerance"
        ],
        [
          "Error size",
          "Absolute differences, tails and weighted aggregate differences"
        ],
        [
          "Coverage",
          "Tax years, states, outputs and household characteristics"
        ],
        [
          "Exceptions",
          "Missing outputs, explained conventions and unresolved cases"
        ]
      ],
      "takeaway": "A match within $15 is not exact equality. The tolerance, sample and options belong beside the headline rate.",
      "source": {
        "label": "Comparator configuration and matching logic",
        "url": "https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/comparison/comparator.py"
      }
    }
  },
  {
    "id": "slide-14",
    "title": "Demonstration: one file, traceable results",
    "body": [],
    "minutes": 8,
    "notes": "Use a synthetic file prepared for the seminar. Show the inputs, run the emulator, identify federal and state outputs, then examine one household in the comparison workflow. Explain versions and the tolerance used. The screenshot is an existing PWBM deck asset, not a fresh benchmark run. If live execution fails, walk through saved input and output files. Source: policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md",
    "image": "/screenshots/pwbm-2026/taxsim-page.png"
  },
  {
    "id": "slide-15",
    "title": "Where this could fit in CE research",
    "body": [
      "Begin with an agreed set of tax-imputation inputs",
      "Run both calculators on the same records",
      "Compare household results and weighted summaries",
      "Review differences before expanding the scope"
    ],
    "minutes": 3,
    "notes": "This is a proposed integration path, not a representation of a tested CE implementation. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison."
  },
  {
    "id": "slide-16",
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
    "id": "slide-17",
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
    "id": "slide-18",
    "title": "SNAP and Medicaid in a resource measure",
    "body": [
      "SNAP: program units, eligibility and potential allotments",
      "Participation assumptions convert eligibility into receipt estimates",
      "Medicaid: eligibility and enrollment need separate treatment",
      "A monetary Medicaid value requires a defined valuation method"
    ],
    "minutes": 2,
    "notes": "Use this comparison to explain why benefit imputation contains more than a call to an eligibility calculator. Establish whether CE research seeks potential entitlements, actual receipt, or a broader resource measure. For Medicaid, costs, insurance value and household valuation are different concepts; this draft does not select one. No numerical benefit estimates are asserted.",
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
    "id": "slide-19",
    "title": "Validation of benefit imputations",
    "body": [
      "Compare receipt and amounts with suitable external benchmarks",
      "Examine errors across household groups",
      "Use holdout data and alternative assumptions where feasible",
      "Treat calibration and independent validation separately"
    ],
    "minutes": 2,
    "notes": "The prior IARIW deck describes calibration of household weights to administrative totals. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: policyengine-slides/slideshows/iariw-2026/slides/ImputationSlide.tsx and CalibrationSlide.tsx."
  },
  {
    "id": "slide-20",
    "title": "A manageable CE pilot",
    "body": [
      "Agree one year, one sample and the key tax outputs",
      "Document input mappings and missing-data assumptions",
      "Produce a reproducible comparison and discrepancy log",
      "Scope one benefit extension after reviewing the tax results"
    ],
    "minutes": 5,
    "notes": "Proposed next steps for discussion. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known."
  },
  {
    "id": "slide-21",
    "title": "Q&A and discussion",
    "body": [
      "Which outcomes and years would be most useful?",
      "Which input assumptions create the most uncertainty?",
      "What evidence would support a broader evaluation?",
      "Which benefit extension would answer a concrete research question?"
    ],
    "minutes": 30,
    "notes": "Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. Resources: https://policyengine.org/us/taxsim and https://github.com/PolicyEngine/policyengine-taxsim."
  }
];
