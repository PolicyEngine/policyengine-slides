import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import CodeBlock from '@/components/content/CodeBlock';

// Verbatim from PolicyEngine/policyengine-us (gov/irs/credits/ctc), each
// trimmed for space: the parameter keeps four of its dated values and one
// reference; the test keeps four of its seven cases.
const parameter = `description: The IRS provides a maximum Child Tax
  Credit of this amount, depending on the child's age.
brackets:
  - threshold:
      values:
        2013-01-01: 0
    amount:
      values:
        2013-01-01: 1_000
        2018-01-01: 2_000
        2025-01-01: 2_200
        2027-01-01: 2_300
      metadata:
        uprating:
          parameter: gov.irs.uprating
        reference:
          - title: 26 U.S. Code § 24(h)(2)
            href: https://www.law.cornell.edu/uscode/text/26/24#h_2
  - threshold:
      values:
        2013-01-01: 17
    amount:
      values:
        2013-01-01: 0
metadata:
  type: single_amount
  threshold_unit: year
  amount_unit: currency-USD
  label: Child Tax Credit amount`;

const variable = `from policyengine_us.model_api import *


class ctc_child_individual_maximum(Variable):
    value_type = float
    entity = Person
    label = "CTC maximum amount (child)"
    unit = USD
    documentation = "The CTC entitlement in respect of this person as a child."
    definition_period = YEAR
    defined_for = "is_tax_unit_dependent"
    reference = (
        "https://www.law.cornell.edu/uscode/text/26/24#a",
        "https://www.law.cornell.edu/uscode/text/26/24#h",
        "https://www.law.cornell.edu/uscode/text/26/24#i",
    )

    def formula(person, period, parameters):
        age = person("age", period)
        qualifying_child = person("ctc_qualifying_child", period)
        filer_meets_child_ctc_id_requirements = person.tax_unit(
            "filer_meets_child_ctc_identification_requirements", period
        )
        p = parameters(period).gov.irs.credits.ctc.amount
        return (
            qualifying_child * filer_meets_child_ctc_id_requirements * p.base.calc(age)
        )`;

const test = `- name: People who don't qualify get $0.
  period: 2017
  input:
    age: 18
  output:
    ctc_child_individual_maximum: 0

- name: CTC was $1,000 pre-TCJA.
  period: 2017
  input:
    age: 10
  output:
    ctc_child_individual_maximum: 1_000

- name: CTC rose to $2,000 post-TCJA.
  period: 2018
  input:
    age: 16
  output:
    ctc_child_individual_maximum: 2_000

- name: Dependent child without the required SSN
    does not get the child amount.
  period: 2024
  input:
    age: 10
    is_tax_unit_dependent: true
    ssn_card_type: OTHER_NON_CITIZEN
  output:
    ctc_child_individual_maximum: 0`;

const files = [
  { title: 'parameters/…/ctc/amount/base.yaml', code: parameter },
  { title: 'variables/…/ctc_child_individual_maximum.py', code: variable },
  { title: 'tests/…/ctc_child_individual_maximum.yaml', code: test },
];

export default function PEModelFilesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>PolicyEngine: parameter, variable, test</SlideTitle>
          <span className="font-mono text-lg text-pe-teal">
            policyengine-us · gov/irs/credits/ctc
          </span>
        </div>
      </SlideHeader>

      <div className="mt-1 grid grid-cols-[0.92fr_1.28fr_0.9fr] gap-4 items-start">
        {files.map((f) => (
          <CodeBlock key={f.title} title={f.title}>
            <pre className="text-[9.5px] leading-[12px] whitespace-pre-wrap">
              {f.code}
            </pre>
          </CodeBlock>
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-600 leading-snug">
        Dated values with statutory references, a vectorised formula over
        them, and YAML cases that pin the numbers: 95,000+ parameter values,
        5,500+ variables, 4,693 test files in the US model.
      </p>
    </Slide>
  );
}
