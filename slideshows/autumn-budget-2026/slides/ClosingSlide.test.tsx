import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { funder, sources } from "../content";
import { ClosingSlide } from "./index";

let container: HTMLDivElement;
let root: Root;

beforeEach(async () => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  await act(async () => root.render(<ClosingSlide />));
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

describe("the closing slide's funder credit", () => {
  it('reads "Funded by" beside the Nuffield Foundation logo', () => {
    const logo = container.querySelector<HTMLImageElement>(`img[alt="${funder.name}"]`);
    expect(logo).not.toBeNull();
    expect(decodeURIComponent(logo!.getAttribute("src") ?? "")).toContain(funder.logo);
    expect(logo!.closest("a")?.textContent).toContain("Funded by");
  });

  it("links to the Nuffield Foundation's page for the project", () => {
    const logo = container.querySelector(`img[alt="${funder.name}"]`);
    expect(logo?.closest("a")?.getAttribute("href")).toBe(sources.nuffield.href);
  });
});
