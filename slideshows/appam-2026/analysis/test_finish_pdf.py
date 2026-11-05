"""finish_pdf must trim every page box to 16:9, put each link on its address inside
its page, and stop on an unexpected export."""

import finish_pdf as fp
import pytest
from hypothesis import given
from hypothesis import strategies as st
from PIL import Image, ImageDraw
from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject, RectangleObject

BOXES = ("/MediaBox", "/CropBox", "/TrimBox", "/BleedBox", "/ArtBox")


def exported(
    tmp_path,
    pages=fp.SLIDES,
    height=607.92,
    width=fp.PAGE_WIDTH,
    across=0,
    down=0,
    past=0,
):
    """Pages like Chrome's: one 1440x810 image hung from the top of a taller page,
    with ink under each link. Slide 8's ink moves `across` pixels right and `down`
    pixels down, and runs `past` pixels beyond each side, as a sentence with no space
    around the address would."""
    images = []
    for number in range(1, pages + 1):
        image = Image.new("RGB", (1440, 810), "white")
        draw = ImageDraw.Draw(image)
        for slide, (left, top, right, bottom), _ in fp.LINKS:
            if slide != number:
                continue
            if slide == 8:
                left, right = left + across - past, right + across + past
                top, bottom = top + down, bottom + down
            draw.rectangle((left, top, right, bottom), fill="black")
        images.append(image)
    drawn = tmp_path / "drawn.pdf"
    images[0].save(drawn, save_all=True, append_images=images[1:], resolution=96)
    writer = PdfWriter(clone_from=PdfReader(drawn))
    writer.pdf_header = "%PDF-1.4"
    for page in writer.pages:
        box = RectangleObject((0, fp.IMAGE_HEIGHT - height, width, fp.IMAGE_HEIGHT))
        for name in BOXES:
            page[NameObject(name)] = box
    path = tmp_path / "exported.pdf"
    writer.write(path)
    return path


def finished(tmp_path, **kwargs):
    source = exported(tmp_path, **kwargs)
    destination = tmp_path / "finished.pdf"
    fp.finish(source, destination)
    return PdfReader(destination)


def test_every_page_box_trims_to_16_by_9_from_the_bottom(tmp_path):
    reader = finished(tmp_path)
    assert len(reader.pages) == fp.SLIDES
    for page in reader.pages:
        for name in BOXES:
            left, bottom, right, top = (float(value) for value in page[name])
            assert (right - left) / (top - bottom) == pytest.approx(16 / 9)
            assert top == pytest.approx(fp.IMAGE_HEIGHT)


def test_each_link_lands_on_its_slide_inside_the_page(tmp_path):
    reader = finished(tmp_path)
    found = []
    for number, page in enumerate(reader.pages, start=1):
        for annotation in page.get("/Annots", []):
            annotation = annotation.get_object()
            left, bottom, right, top = (float(v) for v in annotation["/Rect"])
            assert page.mediabox.left <= left < right <= page.mediabox.right
            assert page.mediabox.bottom <= bottom < top <= page.mediabox.top
            found.append((number, annotation["/A"]["/URI"]))
    assert found == [(slide, target) for slide, _, target in fp.LINKS]


def test_the_file_names_the_deck_and_its_author_and_keeps_the_export_header(tmp_path):
    reader = finished(tmp_path)
    assert reader.metadata["/Title"] == "PolicyEngine for state policy research"
    assert reader.metadata["/Author"] == "Max Ghenis"
    assert reader.pdf_header == PdfReader(tmp_path / "exported.pdf").pdf_header


def test_links_use_public_addresses():
    for _, _, target in fp.LINKS:
        assert "vercel" not in target
        assert target.startswith(("https://", "mailto:"))


@pytest.mark.parametrize(
    "kwargs",
    [
        {"pages": fp.SLIDES - 1},
        {"pages": fp.SLIDES + 1},
        {"height": 612.0},
        {"height": 600.0},
        {"width": 1440},
    ],
)
def test_an_unexpected_export_stops_the_script(tmp_path, kwargs):
    with pytest.raises(ValueError):
        finished(tmp_path, **kwargs)


@pytest.mark.parametrize(
    "drawn", [{"across": -12}, {"across": 12}, {"down": 12}, {"past": 20}]
)
def test_a_link_off_its_address_stops_the_script(tmp_path, drawn):
    with pytest.raises(ValueError, match="measure LINKS again"):
        finished(tmp_path, **drawn)


def test_a_finished_file_cannot_be_finished_again(tmp_path):
    finished(tmp_path)
    with pytest.raises(ValueError, match="already has links"):
        fp.finish(tmp_path / "finished.pdf", tmp_path / "twice.pdf")


coordinates = st.floats(min_value=0, max_value=810, allow_nan=False)


@given(coordinates, coordinates, st.floats(min_value=1, max_value=100))
def test_a_rectangle_keeps_its_size_and_flips_about_the_page_top(top, left, tall):
    assert fp.POINTS_PER_PIXEL == 0.75
    page_top = 607.92
    bottom = top + tall
    x0, y0, x1, y1 = fp.link_rectangle((left, top, left + 10, bottom), page_top)
    assert x0 == pytest.approx(left * 0.75)
    assert y1 == pytest.approx(page_top - top * 0.75)
    assert y1 - y0 == pytest.approx(tall * 0.75)
    assert x1 - x0 == pytest.approx(10 * 0.75)
