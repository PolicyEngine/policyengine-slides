interface MathTextProps {
  tex: string;
  display?: boolean;
  className?: string;
}

function readableTex(tex: string): string {
  return tex
    .replace(/\\begin\{aligned\}/g, "")
    .replace(/\\end\{aligned\}/g, "")
    .replace(/\\\\\[2pt\]/g, "\n")
    .replace(/\\\\/g, "\n")
    .replace(/\\;/g, " ")
    .replace(/\\,/g, " ")
    .replace(/\\!/g, "")
    .replace(/\\textstyle/g, "")
    .replace(/\\tfrac/g, "\\frac")
    .trim();
}

export default function MathText({
  tex,
  display = false,
  className = "",
}: MathTextProps) {
  const text = readableTex(tex);

  if (display) {
    return (
      <pre
        className={`whitespace-pre-wrap break-words text-center font-mono leading-snug ${className}`}
      >
        {text}
      </pre>
    );
  }

  return <span className={`font-mono ${className}`}>{text}</span>;
}
