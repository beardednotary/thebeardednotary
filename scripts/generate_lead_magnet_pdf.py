from __future__ import annotations

import io
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WIDTH = 1275
HEIGHT = 1650
MARGIN = 72
PDF_WIDTH = 612
PDF_HEIGHT = 792

NAVY = "#1c2344"
GOLD = "#d4af37"
CREAM = "#f6f1e7"
WHITE = "#ffffff"
TEXT = "#2f2f2f"
MUTED = "#5c6470"
PANEL = "#f2efe8"

TITLE_FONT = r"C:\Windows\Fonts\georgiab.ttf"
SERIF_FONT = r"C:\Windows\Fonts\Georgia.ttf"
SANS_FONT = r"C:\Windows\Fonts\arial.ttf"
SANS_BOLD = r"C:\Windows\Fonts\arialbd.ttf"


def load_font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""

    for word in words:
        candidate = word if not current else f"{current} {word}"
        if draw.textlength(candidate, font=font) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word

    if current:
        lines.append(current)

    return lines


def draw_wrapped(
    draw: ImageDraw.ImageDraw,
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: str,
    x: int,
    y: int,
    max_width: int,
    line_gap: int,
) -> int:
    lines = wrap_text(draw, text, font, max_width)
    line_height = font.size + line_gap

    for index, line in enumerate(lines):
        draw.text((x, y + (index * line_height)), line, font=font, fill=fill)

    return y + (len(lines) * line_height)


def fit_logo(logo_path: Path) -> Image.Image:
    logo = Image.open(logo_path).convert("RGBA")
    logo.thumbnail((210, 210))

    backdrop = Image.new("RGBA", (220, 220), (255, 255, 255, 0))
    offset = ((220 - logo.width) // 2, (220 - logo.height) // 2)
    backdrop.alpha_composite(logo, dest=offset)
    return backdrop


def escape_pdf_text(value: str) -> str:
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


class PdfBuilder:
    def __init__(self) -> None:
        self.objects: list[bytes] = []

    def add_object(self, content: str | bytes) -> int:
        payload = content.encode("latin-1") if isinstance(content, str) else content
        self.objects.append(payload)
        return len(self.objects)

    def build(self, root_id: int) -> bytes:
        chunks = [b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"]
        offsets: list[int] = []

        for index, payload in enumerate(self.objects, start=1):
            offsets.append(sum(len(chunk) for chunk in chunks))
            chunks.append(f"{index} 0 obj\n".encode("latin-1"))
            chunks.append(payload)
            if not payload.endswith(b"\n"):
                chunks.append(b"\n")
            chunks.append(b"endobj\n")

        xref_start = sum(len(chunk) for chunk in chunks)
        chunks.append(f"xref\n0 {len(self.objects) + 1}\n".encode("latin-1"))
        chunks.append(b"0000000000 65535 f \n")
        for offset in offsets:
            chunks.append(f"{offset:010} 00000 n \n".encode("latin-1"))

        chunks.append(
            f"trailer\n<< /Size {len(self.objects) + 1} /Root {root_id} 0 R >>\nstartxref\n{xref_start}\n%%EOF\n".encode(
                "latin-1"
            )
        )
        return b"".join(chunks)


def to_pdf_rect(region: tuple[int, int, int, int]) -> tuple[float, float, float, float]:
    x1, y1, x2, y2 = region
    sx = PDF_WIDTH / WIDTH
    sy = PDF_HEIGHT / HEIGHT
    left = x1 * sx
    right = x2 * sx
    top = PDF_HEIGHT - (y1 * sy)
    bottom = PDF_HEIGHT - (y2 * sy)
    return left, bottom, right, top


def render_lead_magnet() -> tuple[bytes, list[tuple[tuple[int, int, int, int], str]]]:
    image = Image.new("RGB", (WIDTH, HEIGHT), CREAM)
    draw = ImageDraw.Draw(image)

    title_font = load_font(TITLE_FONT, 60)
    subtitle_font = load_font(SERIF_FONT, 26)
    section_font = load_font(SANS_BOLD, 28)
    week_font = load_font(SANS_BOLD, 24)
    body_font = load_font(SANS_FONT, 21)
    small_font = load_font(SANS_FONT, 18)
    small_bold_font = load_font(SANS_BOLD, 18)

    draw.rectangle((0, 0, WIDTH, 245), fill=NAVY)
    draw.rectangle((0, 245, WIDTH, 261), fill=GOLD)

    logo = fit_logo(Path("public/images/bearded-notary-logo.png"))
    image.paste(logo, (WIDTH - MARGIN - 220, 18), logo)

    draw.text((MARGIN, 42), "THE BEARDED NOTARY", font=small_bold_font, fill=GOLD)
    draw.text((MARGIN, 80), "First 30 Days Mobile Notary Action Plan", font=title_font, fill=WHITE)
    draw_wrapped(
        draw,
        "A branded one-page roadmap for new mobile notaries who want early momentum and a clearer path to paid work.",
        subtitle_font,
        WHITE,
        MARGIN,
        156,
        760,
        8,
    )

    draw.rounded_rectangle((MARGIN, 300, WIDTH - MARGIN, 430), radius=22, fill=WHITE)
    draw.text((MARGIN + 28, 328), "How to use this page", font=section_font, fill=NAVY)
    draw_wrapped(
        draw,
        "Move week by week. Use this page as your quick-reference plan, then open the full article when you want the day-by-day walkthrough and supporting details.",
        body_font,
        TEXT,
        MARGIN + 28,
        372,
        WIDTH - (MARGIN * 2) - 56,
        10,
    )

    weeks = [
        (
            "Week 1: Foundation and setup",
            [
                "Order your stamp, journal, business cards, thumbprint pad, and appointment basics.",
                "Set up your business email, voicemail, and payment methods.",
                "Lock in your pricing for notarizations, travel, and after-hours work.",
                "Create your Google Business Profile and define your service area.",
            ],
        ),
        (
            "Week 2: Marketing and training",
            [
                "List your business on key free directories and map platforms.",
                "Add yourself to notary-specific directories for extra visibility.",
                "Start loan signing training if that matches your income goals.",
                "Build a ready-to-go mobile notary kit for faster response times.",
            ],
        ),
        (
            "Week 3: First clients and reviews",
            [
                "Take early jobs from warm contacts and sharpen your workflow.",
                "Ask every happy client for a Google review.",
                "Track where each lead came from so you know what is working.",
                "Review your pricing and make small corrections where needed.",
            ],
        ),
        (
            "Week 4: Scale and systems",
            [
                "Apply to signing companies if you are pursuing loan signings.",
                "Double down on the channels already producing responses.",
                "Measure signings completed, income earned, and hours worked.",
                "Set your month-two goals and map your next action steps.",
            ],
        ),
    ]

    card_width = 540
    card_height = 275
    gap_x = 51
    start_y = 480

    for index, (title, bullets) in enumerate(weeks):
        col = index % 2
        row = index // 2
        x = MARGIN + (col * (card_width + gap_x))
        y = start_y + (row * (card_height + 36))

        draw.rounded_rectangle((x, y, x + card_width, y + card_height), radius=20, fill=WHITE)
        draw.rounded_rectangle((x, y, x + card_width, y + 18), radius=20, fill=GOLD)
        draw.text((x + 22, y + 34), title, font=week_font, fill=NAVY)

        bullet_y = y + 80
        for bullet in bullets:
            draw.text((x + 24, bullet_y), "•", font=week_font, fill=GOLD)
            bullet_y = draw_wrapped(draw, bullet, body_font, TEXT, x + 48, bullet_y, card_width - 74, 8) + 8

    resource_top = 1138
    draw.rounded_rectangle((MARGIN, resource_top, WIDTH - MARGIN, HEIGHT - 120), radius=24, fill=WHITE)
    draw.text((MARGIN + 28, resource_top + 26), "Open the full resources online", font=section_font, fill=NAVY)

    resources = [
        (
            "Full 30-day guide",
            "Read the complete day-by-day article.",
            "https://thebeardednotary.com/first-30-days-new-notary?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan",
        ),
        (
            "Pricing guide",
            "Tighten fees, travel charges, and package pricing.",
            "https://thebeardednotary.com/how-much-to-charge-mobile-notary?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan",
        ),
        (
            "Supplies checklist",
            "Build a dependable mobile notary setup.",
            "https://thebeardednotary.com/mobile-notary-supplies?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan",
        ),
        (
            "Marketing guide",
            "Get listed and build local visibility faster.",
            "https://thebeardednotary.com/free-marketing-sites-notaries?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan",
        ),
    ]

    link_regions: list[tuple[tuple[int, int, int, int], str]] = []
    row_y = resource_top + 82

    for title, description, url in resources:
        x1 = MARGIN + 24
        x2 = WIDTH - MARGIN - 24
        y1 = row_y
        y2 = row_y + 88
        draw.rounded_rectangle((x1, y1, x2, y2), radius=16, fill=PANEL)
        draw.text((MARGIN + 44, row_y + 18), title, font=small_bold_font, fill=NAVY)
        draw.text((MARGIN + 44, row_y + 48), description, font=small_font, fill=MUTED)
        draw.text((WIDTH - MARGIN - 190, row_y + 30), "Open resource", font=small_bold_font, fill=GOLD)
        link_regions.append(((x1, y1, x2, y2), url))
        row_y += 104

    draw.text((MARGIN, HEIGHT - 76), "thebeardednotary.com", font=small_bold_font, fill=NAVY)
    draw.text((WIDTH - MARGIN - 270, HEIGHT - 76), "Built for mobile notary growth", font=small_font, fill=MUTED)

    buffer = io.BytesIO()
    image.save(buffer, format="JPEG", quality=90)
    return buffer.getvalue(), link_regions


def build_pdf(jpeg_bytes: bytes, link_regions: list[tuple[tuple[int, int, int, int], str]]) -> bytes:
    builder = PdfBuilder()

    image_stream = (
        b"<< /Type /XObject /Subtype /Image "
        + f"/Width {WIDTH} /Height {HEIGHT} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length {len(jpeg_bytes)} >>\nstream\n".encode(
            "latin-1"
        )
        + jpeg_bytes
        + b"\nendstream"
    )
    image_id = builder.add_object(image_stream)

    annotation_ids: list[int] = []
    for region, url in link_regions:
        left, bottom, right, top = to_pdf_rect(region)
        annotation_ids.append(
            builder.add_object(
                f"<< /Type /Annot /Subtype /Link /Rect [{left:.2f} {bottom:.2f} {right:.2f} {top:.2f}] "
                f"/Border [0 0 0] /A << /S /URI /URI ({escape_pdf_text(url)}) >> >>"
            )
        )

    content_stream = (
        "q\n"
        f"{PDF_WIDTH:.2f} 0 0 {PDF_HEIGHT:.2f} 0 0 cm\n"
        "/Im0 Do\n"
        "Q\n"
    ).encode("latin-1")
    contents_id = builder.add_object(
        b"<< /Length " + str(len(content_stream)).encode("latin-1") + b" >>\nstream\n" + content_stream + b"endstream"
    )

    page_id = builder.add_object(
        f"<< /Type /Page /Parent 0 0 R /MediaBox [0 0 {PDF_WIDTH} {PDF_HEIGHT}] "
        f"/Resources << /XObject << /Im0 {image_id} 0 R >> >> "
        f"/Contents {contents_id} 0 R /Annots [{' '.join(f'{annot} 0 R' for annot in annotation_ids)}] >>"
    )
    pages_id = builder.add_object(f"<< /Type /Pages /Kids [{page_id} 0 R] /Count 1 >>")
    catalog_id = builder.add_object(f"<< /Type /Catalog /Pages {pages_id} 0 R >>")

    builder.objects[page_id - 1] = builder.objects[page_id - 1].replace(
        b"/Parent 0 0 R", f"/Parent {pages_id} 0 R".encode("latin-1")
    )

    return builder.build(catalog_id)


def main() -> None:
    output_path = Path("public/downloads/first-30-days-mobile-notary-action-plan.pdf")
    output_path.parent.mkdir(parents=True, exist_ok=True)

    jpeg_bytes, link_regions = render_lead_magnet()
    pdf_bytes = build_pdf(jpeg_bytes, link_regions)
    output_path.write_bytes(pdf_bytes)


if __name__ == "__main__":
    main()
