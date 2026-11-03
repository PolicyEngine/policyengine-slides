# /// script
# requires-python = ">=3.11"
# dependencies = ["pypdf>=6"]
# ///
"""Finish the exported deck for the room's laptop.

`bun run export appam-2026 <pdf> --size 1440x810 --scale 2` prints each slide as one
image and leaves a white strip under it, 0.42 points tall, because Chrome rounds the
page height up to 607.92 points. This script trims every page to the image and puts
clickable links over the addresses the slides print.

Usage: uv run finish_pdf.py <exported.pdf> <finished.pdf>

Measure LINKS again if a slide's layout changes: open ?slide=N&export=1 at 1440x810
and read each element's getBoundingClientRect.
"""

import sys

from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link
from pypdf.generic import RectangleObject

PAGE_WIDTH = 1080
IMAGE_HEIGHT = 607.5
SLIDES = 12
POINTS_PER_PIXEL = PAGE_WIDTH / 1440

DECK = "https://policyengine.org/slides/appam-2026"

# Slide number, then left, top, right and bottom in pixels at 1440x810, then the target.
LINKS = [
    (
        6,
        (864.16, 556.32, 1251.13, 579.82),
        "https://github.com/PolicyEngine/policyengine-us/blob/main/policyengine_us/parameters/gov/states/ma/tax/income/credits/child_and_family/amount.yaml",
    ),
    (
        8,
        (87.32, 601.16, 545.53, 623.16),
        "https://www.policyengine.org/us/child-poverty-impact-dashboard",
    ),
    (12, (331.52, 434.0, 472.9, 456.0), "https://www.policyengine.org"),
    (
        12,
        (331.52, 506.0, 714.55, 528.0),
        "https://github.com/PolicyEngine/policyengine-slides/tree/main/slideshows/appam-2026",
    ),
    (12, (331.52, 542.0, 525.98, 564.0), "mailto:max@policyengine.org"),
    (12, (853.52, 319.0, 1049.52, 515.0), DECK),
    (12, (794.55, 527.0, 1108.48, 555.0), DECK),
]


def link_rectangle(pixels, page_top):
    """Convert a rectangle in screen pixels, measured from the top, to PDF points."""
    left, top, right, bottom = pixels
    return (
        left * POINTS_PER_PIXEL,
        page_top - bottom * POINTS_PER_PIXEL,
        right * POINTS_PER_PIXEL,
        page_top - top * POINTS_PER_PIXEL,
    )


def finish(source, destination):
    reader = PdfReader(source)
    if len(reader.pages) != SLIDES:
        raise ValueError(f"expected {SLIDES} pages, found {len(reader.pages)}")
    writer = PdfWriter(clone_from=reader)
    tops = []
    for page in writer.pages:
        box = page.mediabox
        if float(box.width) != PAGE_WIDTH:
            raise ValueError(
                f"expected a page {PAGE_WIDTH} points wide, found {box.width}"
            )
        strip = float(box.height) - IMAGE_HEIGHT
        if not 0 <= strip < 1:
            raise ValueError(f"expected a strip under one point, found {strip}")
        # The image sits at the top of the page, so the strip comes off the bottom.
        top = float(box.top)
        trimmed = RectangleObject((box.left, top - IMAGE_HEIGHT, box.right, top))
        page.mediabox = trimmed
        page.cropbox = trimmed
        page.trimbox = trimmed
        page.bleedbox = trimmed
        page.artbox = trimmed
        tops.append(top)
    for slide, pixels, target in LINKS:
        annotation = Link(
            rect=link_rectangle(pixels, tops[slide - 1]), url=target, border=[0, 0, 0]
        )
        writer.add_annotation(page_number=slide - 1, annotation=annotation)
    writer.write(destination)


if __name__ == "__main__":
    finish(sys.argv[1], sys.argv[2])
