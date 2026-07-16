from pathlib import Path


PAGE_WIDTH = 612
PAGE_HEIGHT = 792
LEFT = 54
RIGHT = 558

NAVY = (28 / 255, 35 / 255, 68 / 255)
GOLD = (212 / 255, 175 / 255, 55 / 255)
TEXT = (0.16, 0.16, 0.16)
MUTED = (0.4, 0.4, 0.4)
WHITE = (1, 1, 1)
LIGHT = (0.96, 0.95, 0.92)


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


def rect(x: float, y: float, width: float, height: float, color: tuple[float, float, float]) -> str:
    return f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} rg\n{x:.2f} {y:.2f} {width:.2f} {height:.2f} re f\n"


def text_block(
    x: float,
    y: float,
    lines: list[tuple[str, str, int, tuple[float, float, float]]],
    leading: int = 16,
) -> str:
    parts = ["BT\n", f"{x:.2f} {y:.2f} Td\n"]
    current_font = None
    current_size = None
    current_color = None

    for index, (font, line, size, color) in enumerate(lines):
        if index > 0:
            parts.append(f"0 -{leading} Td\n")
        if (font, size) != current_font:
            parts.append(f"/{font} {size} Tf\n")
            current_font = (font, size)
        if color != current_color:
            parts.append(f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f} rg\n")
            current_color = color
        parts.append(f"({escape_pdf_text(line)}) Tj\n")

    parts.append("ET\n")
    return "".join(parts)


def wrapped_lines(text: str, max_chars: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""

    for word in words:
        candidate = word if not current else f"{current} {word}"
        if len(candidate) <= max_chars:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word

    if current:
        lines.append(current)

    return lines


def add_link_annotation(builder: PdfBuilder, x: float, y: float, width: float, height: float, url: str) -> int:
    return builder.add_object(
        f"<< /Type /Annot /Subtype /Link /Rect [{x:.2f} {y:.2f} {x + width:.2f} {y + height:.2f}] "
        f"/Border [0 0 0] /A << /S /URI /URI ({escape_pdf_text(url)}) >> >>"
    )


def main() -> None:
    output_path = Path("public/downloads/first-30-days-mobile-notary-action-plan.pdf")
    output_path.parent.mkdir(parents=True, exist_ok=True)

    full_guide_url = (
        "https://thebeardednotary.com/first-30-days-new-notary"
        "?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan"
    )
    pricing_url = (
        "https://thebeardednotary.com/how-much-to-charge-mobile-notary"
        "?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan"
    )
    supplies_url = (
        "https://thebeardednotary.com/mobile-notary-supplies"
        "?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan"
    )
    marketing_url = (
        "https://thebeardednotary.com/free-marketing-sites-notaries"
        "?utm_source=lead_magnet&utm_medium=pdf&utm_campaign=first_30_days_action_plan"
    )

    content = []
    content.append(rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, WHITE))
    content.append(rect(0, PAGE_HEIGHT - 126, PAGE_WIDTH, 126, NAVY))
    content.append(rect(0, PAGE_HEIGHT - 138, PAGE_WIDTH, 12, GOLD))
    content.append(rect(LEFT, 95, RIGHT - LEFT, 118, LIGHT))

    header_lines = [
        ("F2", "THE BEARDED NOTARY", 18, GOLD),
        ("F2", "First 30 Days Mobile Notary Action Plan", 24, WHITE),
        ("F1", "A focused one-page roadmap for new mobile notaries who want early momentum.", 11, WHITE),
    ]
    content.append(text_block(LEFT, PAGE_HEIGHT - 48, header_lines, leading=24))

    content.append(
        text_block(
            LEFT,
            PAGE_HEIGHT - 165,
            [
                ("F2", "How to use this page", 14, NAVY),
                (
                    "F1",
                    "Follow one week at a time. Use the full article and supporting guides below when you want the deeper, step-by-step version.",
                    10,
                    TEXT,
                ),
            ],
            leading=17,
        )
    )

    week_sections = [
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

    column_width = 234
    start_y = 582
    row_gap = 138

    for idx, (title, bullets) in enumerate(week_sections):
        col = idx % 2
        row = idx // 2
        block_x = LEFT + (col * 258)
        block_y = start_y - (row * row_gap)
        content.append(rect(block_x, block_y - 104, column_width, 104, WHITE))
        content.append(text_block(block_x + 12, block_y - 18, [("F2", title, 13, NAVY)], leading=16))

        lines: list[tuple[str, str, int, tuple[float, float, float]]] = []
        for bullet in bullets:
            wrapped = wrapped_lines(f"- {bullet}", 41)
            for wrapped_line in wrapped:
                lines.append(("F1", wrapped_line, 10, TEXT))
        content.append(text_block(block_x + 12, block_y - 38, lines, leading=13))

    content.append(rect(LEFT, 44, RIGHT - LEFT, 34, GOLD))
    content.append(text_block(LEFT + 14, 66, [("F2", "Open the full resources online", 13, NAVY)], leading=16))

    resource_lines = [
        ("F2", "Full 30-day guide", 11, NAVY),
        ("F1", "Read the complete day-by-day article", 10, MUTED),
        ("F2", "Pricing guide", 11, NAVY),
        ("F1", "Tighten fees, travel charges, and package pricing", 10, MUTED),
        ("F2", "Supplies checklist", 11, NAVY),
        ("F1", "Build a dependable mobile notary setup", 10, MUTED),
        ("F2", "Marketing guide", 11, NAVY),
        ("F1", "Get listed and start local visibility fast", 10, MUTED),
    ]
    content.append(text_block(LEFT, 34, resource_lines, leading=12))

    builder = PdfBuilder()
    font_helvetica = builder.add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_helvetica_bold = builder.add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    annotations = [
        add_link_annotation(builder, LEFT, 18, 180, 20, full_guide_url),
        add_link_annotation(builder, LEFT + 188, 18, 115, 20, pricing_url),
        add_link_annotation(builder, LEFT + 310, 18, 118, 20, supplies_url),
        add_link_annotation(builder, LEFT + 435, 18, 110, 20, marketing_url),
    ]

    stream_text = "".join(content).encode("latin-1")
    stream = b"<< /Length " + str(len(stream_text)).encode("latin-1") + b" >>\nstream\n" + stream_text + b"endstream"
    contents_id = builder.add_object(stream)

    page_id = builder.add_object(
        f"<< /Type /Page /Parent 0 0 R /MediaBox [0 0 {PAGE_WIDTH} {PAGE_HEIGHT}] "
        f"/Resources << /Font << /F1 {font_helvetica} 0 R /F2 {font_helvetica_bold} 0 R >> >> "
        f"/Contents {contents_id} 0 R /Annots [{' '.join(f'{annot} 0 R' for annot in annotations)}] >>"
    )
    pages_id = builder.add_object(f"<< /Type /Pages /Kids [{page_id} 0 R] /Count 1 >>")
    catalog_id = builder.add_object(f"<< /Type /Catalog /Pages {pages_id} 0 R >>")

    builder.objects[page_id - 1] = builder.objects[page_id - 1].replace(b"/Parent 0 0 R", f"/Parent {pages_id} 0 R".encode("latin-1"))

    output_path.write_bytes(builder.build(catalog_id))


if __name__ == "__main__":
    main()
