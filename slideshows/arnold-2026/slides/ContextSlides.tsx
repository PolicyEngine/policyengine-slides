import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import Image from "@/components/core/BasePathImage";

/**
 * Scene-setting slides: the AV partnership to date, who uses the models,
 * how the work is funded, and what is in process.
 */

const avGrants = [
  {
    years: "2023–24",
    title: "Labor supply responses",
    amount: "$85,200",
    body: "Built the behavioral-response machinery — elasticity-based labor supply adjustments that now ride along in every dynamic score PolicyEngine produces.",
  },
  {
    years: "2024–25",
    title: "SALT and AMT policy calculator",
    amount: "$94,800",
    body: "Specialized calculators for SALT and AMT policy. Arnold Ventures' own June 2025 issue brief on SALT–AMT interactions ran on it.",
  },
  {
    years: "2025–26",
    title: "State & congressional district policy breakdowns",
    amount: "$273,525",
    body: "The state-and-district layer: reforms scored for all 50 states and 436 congressional districts, in the app and API. Active through December 2026.",
  },
];

export function PartnershipSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Three grants, one deepening layer</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-3 gap-6">
        {avGrants.map((g) => (
          <div key={g.title} className="content-card p-6 flex flex-col">
            <div className="slide-tag mb-2">{g.years}</div>
            <div className="text-2xl font-bold text-pe-dark leading-snug">
              {g.title}
            </div>
            <div className="font-mono text-3xl font-bold text-pe-teal mt-4">
              {g.amount}
            </div>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              {g.body}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6 max-w-5xl">
        <p className="text-lg text-gray-800 leading-relaxed">
          $453,525 across three grants since 2023 &mdash; our largest cumulative
          grant funder. Final hand-off report due December 31, 2026.
        </p>
      </div>
    </Slide>
  );
}

const organizations: { name: string; logo: string; smaller?: boolean }[] = [
  { name: "NBER (TAXSIM)", logo: "/logos/organizations/nber.png" },
  { name: "Atlanta Fed", logo: "/logos/organizations/atlanta-fed.png" },
  { name: "BEA", logo: "/logos/organizations/bea.png" },
  { name: "Joint Economic Committee", logo: "/logos/organizations/jec.png" },
  { name: "USC", logo: "/logos/organizations/usc.png", smaller: true },
  {
    name: "Georgetown (Better Government Lab)",
    logo: "/logos/organizations/georgetown.png",
  },
  { name: "MyFriendBen", logo: "/logos/organizations/myfriendben.png" },
  { name: "Amplifi", logo: "/logos/organizations/amplifi.png" },
  { name: "Mirza", logo: "/logos/organizations/mirza.png" },
  { name: "Starlight", logo: "/logos/organizations/starlight.png" },
];

export function WhoUsesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          Researchers, governments, and builders use these models
        </SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-5 gap-x-10 gap-y-14 w-full px-10">
        {organizations.map((org) => (
          <div
            key={org.name}
            className="flex items-center justify-center h-[90px]"
          >
            <Image
              src={org.logo}
              alt={org.name}
              width={org.smaller ? 110 : 150}
              height={85}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </Slide>
  );
}

const awarded = [
  {
    funder: "Arnold Ventures",
    amount: "$453,525",
    note: "three grants, 2023–26",
  },
  { funder: "MyFriendBen", amount: "$325,000", note: "API contracts" },
  { funder: "NSF", amount: "$300,000", note: "POSE Phase I, 2025" },
  {
    funder: "Nuffield Foundation",
    amount: "£251,296",
    note: "PolicyEngine UK, 2024",
  },
  { funder: "NEO Philanthropy", amount: "$200,000", note: "general operating" },
  {
    funder: "Pritzker Children's Initiative",
    amount: "$150,000",
    note: "child poverty analysis",
  },
  {
    funder: "Gerald Huff Fund for Humanity",
    amount: "$100,000",
    note: "general operating, two grants",
  },
  { funder: "Imagine LA", amount: "$97,000", note: "Benefit Navigator API" },
  {
    funder: "CRFB",
    amount: "$35,000",
    note: "Social Security benefit taxation",
  },
];

export function FundingSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How the work is funded today</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {awarded.map((f) => (
          <div key={f.funder + f.amount} className="content-card p-4">
            <div className="text-lg font-bold text-pe-dark leading-snug">
              {f.funder}
            </div>
            <div className="flex items-baseline gap-3 mt-2">
              <span className="font-mono text-2xl font-bold text-pe-teal">
                {f.amount}
              </span>
              <span className="text-sm text-gray-500">{f.note}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-base text-gray-600 max-w-5xl">
        Grants plus earned revenue from API and analysis contracts. The full
        list, with every award and date, is public at{" "}
        <span className="font-mono text-pe-teal">
          policyengine.org/us/supporters
        </span>
        .
      </p>
    </Slide>
  );
}

const pipeline = [
  {
    ask: "Public Benefit Innovation Fund, round 2",
    amount: "$1.64M",
    stage: "Finalist; decision expected early September",
    odds: "70%",
  },
  {
    ask: "NSF POSE Phase II",
    amount: "$1.5M",
    stage: "Submitting September 1",
    odds: "30%",
  },
  {
    ask: "Invited application, AI-philanthropy foundation",
    amount: "$2M",
    stage: "Application due this week",
    odds: "55%",
  },
  {
    ask: "Multi-year institutional ask (Axiom Foundation)",
    amount: "—",
    stage: "In principal review; pitch expected October",
    odds: "50%",
  },
  {
    ask: "Nuffield Foundation (UK)",
    amount: "£300k",
    stage: "Drafting",
    odds: "40%",
  },
  {
    ask: "CAPE / BEAMM EU consortium (our share TBD)",
    amount: "—",
    stage: "Consortium bid pending",
    odds: "30%",
  },
];

export function PipelineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What&apos;s in process &mdash; with our odds</SlideTitle>
      </SlideHeader>

      <div className="mt-8 content-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Ask
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Amount
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Stage
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold text-right">
                Our estimate
              </th>
            </tr>
          </thead>
          <tbody>
            {pipeline.map((row) => (
              <tr key={row.ask} className="border-b border-gray-100">
                <td className="px-6 py-3 text-lg text-gray-800">{row.ask}</td>
                <td className="px-6 py-3 font-mono text-lg text-pe-teal font-bold whitespace-nowrap">
                  {row.amount}
                </td>
                <td className="px-6 py-3 text-base text-gray-600">
                  {row.stage}
                </td>
                <td className="px-6 py-3 font-mono text-lg text-gray-800 text-right">
                  {row.odds}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-base text-gray-500 italic max-w-5xl">
        Subjective probabilities, updated as we learn &mdash; the same
        discipline Thesis applies to official statistics.
      </p>
    </Slide>
  );
}
