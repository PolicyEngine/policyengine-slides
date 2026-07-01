import katex from "katex";

interface MathTextProps {
  /** LaTeX source. Rendered with KaTeX (throwOnError off, so bad input degrades gracefully). */
  tex: string;
  /** Display math (block, centered) vs. inline math. */
  display?: boolean;
  className?: string;
}

export default function MathText({
  tex,
  display = false,
  className = "",
}: MathTextProps) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });

  if (display) {
    return (
      <div
        className={`katex-fit max-w-full overflow-x-auto text-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
