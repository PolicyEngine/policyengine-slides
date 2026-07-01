import MathText from "./MathText";

interface EquationCardProps {
  title: string;
  /** LaTeX source rendered as display math via KaTeX, auto-fit to the card width. */
  equation: string;
  note: string;
}

export default function EquationCard({ title, equation, note }: EquationCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <div className="text-2xl font-bold text-pe-dark">{title}</div>
      <div className="mt-8 rounded-md bg-slate-50 px-6 py-6 text-slate-800">
        <MathText tex={equation} display className="text-[1.05rem]" />
      </div>
      <p className="mt-6 text-xl leading-snug text-slate-600">{note}</p>
    </div>
  );
}
