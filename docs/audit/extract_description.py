"""Extract Description.docx and compare product scalar fields with mockData.

Run: python docs/audit/extract_description.py (Python standard library only).
No frontend data is modified. Paragraph numbers refer to document.xml order,
including empty paragraphs and table paragraphs, not Word page numbers.
"""
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
from collections import Counter
import csv
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'docs/audit'
source = ROOT / 'frontend/download/docs/Description.docx'
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
with ZipFile(source) as archive:
    xml = ET.fromstring(archive.read('word/document.xml'))
paras = [''.join(t.text or '' for t in p.findall('.//w:t', ns)) for p in xml.findall('.//w:p', ns)]
text = '\n'.join(paras)
major = [(i, p) for i, p in enumerate(paras) if re.match(r'^[1-7]\.\s', p)]
md = ['# Nội dung trích xuất từ Description.docx', '',
      'Nguồn: `frontend/download/docs/Description.docx`. Bản trích xuất để tra cứu; không phải JSON dùng để import.', '',
      f'SHA-256 nguồn: `{hashlib.sha256(source.read_bytes()).hexdigest()}`. Tổng {len(paras)} đoạn XML, kể cả đoạn rỗng.', '',
      '`Pxxxx` là số đoạn XML 1-based, không phải số trang Word. Giữ nguyên lỗi chính tả, trường rỗng, dấu ngoặc và ký tự `\\n` của nguồn. PDF quyết định template/nội dung hiển thị cần có; không chép đè dữ liệu tốt hơn trong mock bằng ô trống của DOCX.', '']
starts = [(0, 'Phần đầu — Người dùng và schema Booking')] + major
for j, (start, title) in enumerate(starts):
    end = starts[j+1][0] if j+1 < len(starts) else len(paras)
    md += [f'## P{start+1:04d} — {title}', '', '```text']
    md += [f'P{i+1:04d}: {paras[i]}' for i in range(start, end)]
    md += ['```', '']
(OUT / 'DESCRIPTION_TRICH_XUAT.md').write_text('\n'.join(md), encoding='utf8')

mock_text = (ROOT/'frontend/src/data/mockData.js').read_text(encoding='utf8')
mock = {name: json.loads(value) for name, value in re.findall(r'export const (\w+)\s*=\s*(\[.*?\]);', mock_text, re.S)}
start = next(i for i, p in enumerate(paras) if p == '7. Sản phẩm')
product_text = '\n'.join(paras[start:])
matches = list(re.finditer(r'"id"\s*:\s*"([^"]+)"', product_text))
fields = ['name','itemDescription','chatLieu','kyThuat','xuatXu','dacDiemTitle','dacDiemDescription','chatLieuVaMauSac','hoaTietVaKieuDang']
pdf_rows = list(csv.DictReader((OUT/'PDF_PAGE_STATUS.csv').open(encoding='utf-8-sig')))
pdf_by_record = {}
for r in pdf_rows:
    m = re.search(r'products\[(\d+)\]', r['source_under_frontend_src'])
    if m:
        pdf_by_record[int(m.group(1))] = r
rows = []
for i, m in enumerate(matches):
    block = product_text[m.start():matches[i+1].start() if i+1<len(matches) else len(product_text)]
    values = dict(re.findall(r'"(\w+)"\s*:\s*"([^"\r\n]*)"', block))
    current = mock['products'][i]
    # The two duplicate IDs in the source were repaired in the corresponding mock entries.
    renamed_ids = {'SP_QCS_QTT': {'SP_QCS_QTT', 'SP_QCS_QTRUYENTHONG'},
                   'SP_GBT_29': {'SP_GBT_29', 'SP_GBT_30'}}
    assert current['id'] in renamed_ids.get(m.group(1), {m.group(1)}), f'Order changed at record {i+1}; match manually before regenerating'
    paragraph = start + product_text[:m.start()].count('\n') + 1
    empty = [key for key in fields if not values.get(key, '').strip()]
    diff = [key for key in fields if values.get(key, '') != (current.get(key) or '')]
    better = [key for key in fields if not values.get(key, '').strip() and (current.get(key) or '').strip()]
    pdf = pdf_by_record.get(i, {})
    rows.append({'record':i+1, 'docx_paragraph':f'P{paragraph:04d}', 'id':current['id'],
                 'facility_id':current['coSoSanXuatId'], 'pdf_page':pdf.get('pdf_page',''),
                 'pdf_title':pdf.get('title',''), 'docx_name':values.get('name',''),
                 'mock_name':current['name'], 'empty_docx_fields':'; '.join(empty),
                 'different_scalar_fields':'; '.join(diff), 'mock_has_value_docx_empty':'; '.join(better),
                 'source_to_use':'PDF for exact display/empty or conflicting fields; DOCX for populated supplementary text; keep verified mock improvements'})
assert len(rows) == 90 and len(mock['products']) >= len(rows)
with (OUT/'DESCRIPTION_PRODUCT_COMPARISON.csv').open('w',encoding='utf-8-sig',newline='') as f:
    writer=csv.DictWriter(f,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)
summary={'docx_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'paragraphs':len(paras),
         'products':len(rows),'docx_blank_names':sum(not r['docx_name'].strip() for r in rows),
         'products_with_any_missing_core_text':sum(bool(r['empty_docx_fields']) for r in rows),
         'records_with_scalar_difference_from_mock':sum(bool(r['different_scalar_fields']) for r in rows),
         'records_with_mock_value_docx_empty':sum(bool(r['mock_has_value_docx_empty']) for r in rows),
         'duplicate_docx_product_ids':{k:v for k,v in Counter(m.group(1) for m in matches).items() if v>1},
         'blank_core_fields':dict(Counter(key for r in rows for key in r['empty_docx_fields'].split('; ') if key))}
(OUT/'description-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
record_rows = []
group_specs = [
    ('facilities', 3, ['name','description','sanPhamDescription','tuVanDescription','tenChuXuong','email','diaChi','soDienThoai','storyTitle','storyContent']),
    ('capacities', 4, ['name','description']),
    ('reviews', 6, ['reviewerName','reviewTime','content']),
]
for group, section, keys in group_specs:
    a = next(i for i,p in major if p.startswith(f'{section}. '))
    b = next((i for i,p in major if i>a),len(paras))
    section_text = '\n'.join(paras[a:b])
    ids = list(re.finditer(r'"id"\s*:\s*"([^"]+)"',section_text))
    assert len(ids)==len(mock[group]), f'Record count changed: {group}; inspect manually'
    for i,m in enumerate(ids):
        block=section_text[m.start():ids[i+1].start() if i+1<len(ids) else len(section_text)]
        current=next((x for x in mock[group] if x['id']==m.group(1)),None)
        assert current is not None, f'No mock match: {group}/{m.group(1)}'
        values=dict(re.findall(r'"(\w+)"\s*:\s*("[^"\r\n]*"|null)',block))
        values={k:None if v=='null' else v[1:-1] for k,v in values.items()}
        diff=[key for key in keys if key in values and values[key]!=current.get(key)]
        absent=[key for key in keys if key not in values]
        record_rows.append({'group':group,'id':current['id'],
                            'docx_paragraph':f'P{a+section_text[:m.start()].count(chr(10))+1:04d}',
                            'checked_fields':'; '.join(keys),'different_fields':'; '.join(diff),
                            'fields_not_extracted':'; '.join(absent)})
with (OUT/'DESCRIPTION_RECORD_COMPARISON.csv').open('w',encoding='utf-8-sig',newline='') as f:
    writer=csv.DictWriter(f,fieldnames=list(record_rows[0]));writer.writeheader();writer.writerows(record_rows)
summary['scalar_record_comparison']={group:{'records':sum(r['group']==group for r in record_rows),
    'records_with_differences':sum(r['group']==group and bool(r['different_fields']) for r in record_rows),
    'records_with_unextracted_fields':sum(r['group']==group and bool(r['fields_not_extracted']) for r in record_rows)} for group,_,_ in group_specs}
(OUT/'description-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps(summary,ensure_ascii=False,indent=2))
