"""The finished PDF must fill a 16:9 screen and keep each link on its printed address."""

import finish_pdf as fp
import pytest
from hypothesis import given
from hypothesis import strategies as st
from pypdf import PdfReader, PdfWriter


def exported(tmp_path, pages=fp.SLIDES, height=607.92, width=fp.PAGE_WIDTH):
    path = tmp_path / "exported.pdf"
    writer = PdfWriter()
    for _ in range(pages):
        writer.add_blank_page(width=width, height=height)
    writer.write(path)
    return path


def finished(tmp_path, **kwargs):
    source = exported(tmp_path, **kwargs)
    destination = tmp_path / "finished.pdf"
    fp.finish(source, destination)
    return PdfReader(destination)


def test_every_page_trims_to_16_by_9_from_the_bottom(tmp_path):
    reader = finished(tmp_path)
    assert len(reader.pages) == fp.SLIDES
    for page in reader.pages:
        for box in (
            page.mediabox,
            page.cropbox,
            page.trimbox,
            page.bleedbox,
            page.artbox,
        ):
            assert float(box.width) / float(box.height) == pytest.approx(16 / 9)
            assert float(box.top) == pytest.approx(607.92)


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


def test_links_use_public_addresses():
    for _, _, target in fp.LINKS:
        assert "vercel" not in target
        assert target.startswith(("https://", "mailto:"))


@pytest.mark.parametrize(
    "kwargs",
    [{"pages": 11}, {"height": 612.0}, {"height": 600.0}, {"width": 1440}],
)
def test_an_unexpected_export_stops_the_script(tmp_path, kwargs):
    with pytest.raises(ValueError):
        finished(tmp_path, **kwargs)


coordinates = st.floats(min_value=0, max_value=810, allow_nan=False)


@given(coordinates, coordinates, st.floats(min_value=1, max_value=100))
def test_a_rectangle_keeps_its_height_and_flips_about_the_page_top(top, left, tall):
    page_top = 607.92
    bottom = top + tall
    x0, y0, x1, y1 = fp.link_rectangle((left, top, left + 10, bottom), page_top)
    assert y1 == pytest.approx(page_top - top * fp.POINTS_PER_PIXEL)
    assert y1 - y0 == pytest.approx(tall * fp.POINTS_PER_PIXEL)
    assert x1 - x0 == pytest.approx(10 * fp.POINTS_PER_PIXEL)
