"""Export reference text for all PDF pages; requires PyMuPDF.

python docs/audit/extract_pdf_text.py
PDF layout and images must still be inspected visually in WEBSITE.pdf.
"""
from pathlib import Path
import csv
import hashlib
import pymupdf

ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'docs/audit'
source=ROOT/'template/WEBSITE.pdf'
titles={int(r['pdf_page']):r['title'] for r in csv.DictReader((OUT/'PDF_PAGE_STATUS.csv').open(encoding='utf-8-sig'))}
md=['# Nội dung PDF để tra cứu và bổ sung dữ liệu', '',
    'Nguồn: `template/WEBSITE.pdf`. Số trang là thứ tự 1-based trong PDF.', '',
    f'SHA-256 nguồn: `{hashlib.sha256(source.read_bytes()).hexdigest()}`.', '',
    'Đây là văn bản trích xuất, không phải template HTML hay dữ liệu đã làm sạch. Thứ tự text có thể khác thứ tự nhìn; PDF có thể chứa chữ lặp/chồng/ẩn. Luôn mở trang PDF để xác minh ảnh, bố cục và trường dữ liệu trước khi đưa vào mockData.js. Tiêu đề tra cứu lấy từ bảng đối chiếu và có thể là ánh xạ đề xuất ở các slot gốm trống tên.', '',
    'Ưu tiên tra trang 30–41, 43–48, 63–74, 119–124 để điền các nội dung sản phẩm còn trống trong DOCX; trang 42 cho nón cưới; trang 7/11–13/20/49–50 cho nội dung chưa được mô tả đầy đủ trong DOCX.', '']
with pymupdf.open(source) as pdf:
    for i,page in enumerate(pdf,1):
        md += [f'## Trang {i:03d} — {titles.get(i, "")}', '', '```text', page.get_text().strip() or '[Không có lớp văn bản trích xuất; xem trực tiếp hình ảnh trong PDF.]', '```', '']
(OUT/'PDF_NOI_DUNG_THAM_CHIEU.md').write_text('\n'.join(md),encoding='utf8')
print(f'Exported {len(titles)} page references')
