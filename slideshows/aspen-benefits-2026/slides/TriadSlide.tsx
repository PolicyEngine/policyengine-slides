import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import {
  IconPlugConnected,
  IconScale,
  IconChartDots3,
  type Icon,
} from "@tabler/icons-react";

const tools: {
  icon: Icon;
  name: string;
  tag: string;
  line: string;
}[] = [
  {
    icon: IconPlugConnected,
    name: "PolicyEngine plugin",
    tag: "Calculation",
    line: "Agents call our open, deterministic engine for the exact number — the tool that gets PolicyBench's hardest cases right.",
  },
  {
    icon: IconScale,
    name: "Axiom",
    tag: "Determinism",
    line: "Agents encode the law itself — statute to open, executable code, citation by citation.",
  },
  {
    icon: IconChartDots3,
    name: "Thesis",
    tag: "Prediction",
    line: "Agents forecast outcomes — take-up, cost, wait times — even under policies that don't exist yet.",
  },
];

export default function TriadSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Arming the agents with something true</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-2">
        {tools.map((t, i) => (
          <div key={i} className="content-card p-6 flex flex-col">
            <div
              className="icon-circle mb-4"
              style={{ width: "48px", height: "48px", borderRadius: "14px" }}
            >
              <t.icon size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-pe-dark">{t.name}</h3>
              <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
                {t.tag}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{t.line}</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Each turns a frontier model from a confident guesser into a grounded
          analyst &mdash; open, so anyone&apos;s agent can use it.
        </p>
      </div>
    </Slide>
  );
}
