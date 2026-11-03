# /// script
# requires-python = ">=3.11"
# dependencies = ["pillow", "pypdf>=6"]
# ///
"""Finish the exported deck for the room's laptop.

`bun run export appam-2026 <pdf> --url <preview> --size 1440x810 --scale 2` prints
each slide as one 607.5-point image on a 607.92-point page, so a 0.42-point white
strip sits under each image. This script trims every page to the image and puts
clickable links over the addresses the slides print. It stops if a link would land
off its address, and it names the deck and its author in the file.

Usage: uv run finish_pdf.py <exported.pdf> <finished.pdf>

Measure LINKS again if a slide's layout changes. The viewer counts from 0, so open
slide n at ?slide=<n - 1>&export=1 at 1440x810 and read each element's
getBoundingClientRect.
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
METADATA = {"/Title": "PolicyEngine for state policy research", "/Author": "Max Ghenis"}

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

# In pixels at 1440x810: how far inside its rectangle a link's ink may start or end
# across and down, and the blank space it needs on its left, as before a word.
SIDE = 3
END = 8
GAP = 4
# Gray levels that separate ink from the slide behind it.
INK = 64


def link_rectangle(pixels, page_top):
    """Convert a rectangle in screen pixels, measured from the top, to PDF points."""
    left, top, right, bottom = pixels
    return (
        left * POINTS_PER_PIXEL,
        page_top - bottom * POINTS_PER_PIXEL,
        right * POINTS_PER_PIXEL,
        page_top - top * POINTS_PER_PIXEL,
    )


def off_its_address(picture, pixels):
    """Whether a link's rectangle misses the ink of the address it should cover."""
    scale = picture.width / 1440
    left, top, right, bottom = pixels

    def crop(box):
        return picture.crop(tuple(round(value * scale) for value in box))

    # The slide behind the link: the commonest gray in a ring around its rectangle.
    surround = crop((left - 4 * GAP, top - 4 * GAP, right + 4 * GAP, bottom + 4 * GAP))
    ring = [
        around - within
        for around, within in zip(surround.histogram(), crop(pixels).histogram())
    ]
    background = ring.index(max(ring))

    def ink(box):
        mask = crop(box).point(
            lambda value: 255 if abs(value - background) > INK else 0
        )
        return mask.getbbox()

    inside = ink(pixels)
    if inside is None:
        return True
    first, highest, last, lowest = (value / scale for value in inside)
    return (
        first > SIDE
        or right - left - last > SIDE
        or highest > END
        or bottom - top - lowest > END
        or ink((left - GAP, top, left - 1, bottom)) is not None
    )


def finish(source, destination):
    reader = PdfReader(source)
    if len(reader.pages) != SLIDES:
        raise ValueError(f"expected {SLIDES} pages, found {len(reader.pages)}")
    writer = PdfWriter(clone_from=reader)
    writer.pdf_header = reader.pdf_header
    tops = []
    for number, page in enumerate(writer.pages, start=1):
        if "/Annots" in page:
            raise ValueError(f"page {number} already has links; finish the export")
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
    stranded = []
    for slide, pixels, target in LINKS:
        images = reader.pages[slide - 1].images
        if len(images) != 1:
            raise ValueError(f"expected one image on page {slide}, found {len(images)}")
        if off_its_address(images[0].image.convert("L"), pixels):
            stranded.append(f"slide {slide}: {target}")
    if stranded:
        raise ValueError("measure LINKS again for " + "; ".join(stranded))
    for slide, pixels, target in LINKS:
        annotation = Link(
            rect=link_rectangle(pixels, tops[slide - 1]), url=target, border=[0, 0, 0]
        )
        writer.add_annotation(page_number=slide - 1, annotation=annotation)
    writer.add_metadata(METADATA)
    writer.write(destination)


if __name__ == "__main__":
    finish(sys.argv[1], sys.argv[2])
