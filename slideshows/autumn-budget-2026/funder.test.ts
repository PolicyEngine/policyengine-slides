import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { funder } from "./content";

// The white logo as downloaded from nuffieldfoundation.org on 22 October. Keep
// it byte for byte: don't recolour or redraw it.
const DOWNLOADED_SHA256 =
  "b3727385be9295f8daa3938c745f87b2e00e5675130354f6394ae6b3fec5654c";

describe("the Nuffield Foundation credit on the closing slide", () => {
  const file = path.join(__dirname, "../../public", funder.logo);
  const bytes = readFileSync(file);

  it("uses the logo exactly as downloaded", () => {
    expect(bytes.length).toBe(3432);
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(DOWNLOADED_SHA256);
  });

  it("matches the logo's own dimensions", () => {
    const svg = bytes.toString("utf8");
    const size = (name: string) => Number(svg.match(new RegExp(`${name}="([\\d.]+)"`))?.[1]);
    expect(Math.round(size("width"))).toBe(funder.width);
    expect(Math.round(size("height"))).toBe(funder.height);
  });

  it('reads "Funded by"', () => {
    expect(funder.label).toBe("Funded by");
  });
});
