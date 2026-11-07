"""Regenerate the local image inventory. Python 3, standard library only.

Run from any directory: python docs/audit/generate_inventory.py
Static references are evidence of configuration, NOT proof an image was rendered.
Does not modify frontend or source assets.
"""
from pathlib import Path
from collections import defaultdict, Counter
import csv
import hashlib
import json
import re
import unicodedata

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'docs/audit'
EXT = {'.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg'}
SOURCES = [ROOT / 'frontend/download/images', ROOT / 'frontend/public/images', ROOT / 'frontend/src/assets', ROOT / 'template']


def rel(p):
    return p.relative_to(ROOT).as_posix()


def slug(s):
    s = ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c))
    s = s.replace('đ', 'd').replace('Đ', 'D').lower().replace('\\', '/')
    return '/'.join(re.sub(r'\s*\.', '.', re.sub(r'[\s_-]+', '-', x.strip())) for x in s.split('/') if x.strip())


def noext(s):
    return re.sub(r'\.(png|jpe?g|webp|avif|svg)$', '', s, flags=re.I)


def write_csv(name, rows, fields):
    with (OUT / name).open('w', encoding='utf-8-sig', newline='') as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)


images = sorted(p for root in SOURCES if root.exists() for p in root.rglob('*') if p.is_file() and p.suffix.lower() in EXT)
bundled = [p for p in images if rel(p).startswith('frontend/download/images/')]
exact, slugs, stems = {}, {}, {}
for p in bundled:
    key = p.relative_to(ROOT / 'frontend/download/images').as_posix()
    exact[key.lower()] = p
    slugs.setdefault(slug(key), p)
    stems.setdefault(noext(slug(key)), p)


def resolve(raw):
    # Same sequence as resolveMockAsset.js. Glob-order collisions remain ambiguous.
    raw = re.sub(r'\r?\n', '/n', raw).replace('\\', '/').strip()
    raw = re.sub(r'^/+', '', raw)
    raw = re.sub(r'^download/+', '', raw, flags=re.I)
    raw = re.sub(r'^images/+', '', raw, flags=re.I)
    for table, key, method in [(exact, raw.lower(), 'exact'), (slugs, slug(raw), 'slug'), (stems, noext(slug(raw)), 'no-extension')]:
        if key in table:
            return table[key], method
    return None, 'missing'


refs = defaultdict(list)
missing = []
reference_rows = []
for src in sorted((ROOT / 'frontend/src').rglob('*')):
    if src.suffix not in {'.js', '.jsx', '.css'}:
        continue
    text = src.read_text(encoding='utf-8')
    # Image literals, including data fields, static imports and CSS url strings.
    for m in re.finditer(r'''["']([^"'\r\n]*?\.(?:png|jpg|jpeg|webp|avif|svg))["']''', text, re.I):
        raw = m.group(1)
        if '*' in raw or raw.startswith(('http:', 'https:', 'data:')):
            continue
        line = text.count('\n', 0, m.start()) + 1
        location = f'{rel(src)}:{line}'
        if raw.startswith('.'):
            p = (src.parent / raw).resolve()
            method = 'relative-import' if p.is_file() else 'missing'
            if not p.is_file():
                p = None
        else:
            p, method = resolve(raw)
        row = {'source': location, 'raw_path': raw, 'resolved_file': rel(p) if p else '', 'method': method}
        reference_rows.append(row)
        if p:
            refs[p].append(location)
        else:
            missing.append(row)

hashes = {p: hashlib.sha256(p.read_bytes()).hexdigest() for p in images}
hash_groups = defaultdict(list)
for p, h in hashes.items():
    hash_groups[h].append(p)
rows = []
for p in images:
    copies = hash_groups[hashes[p]]
    used_copies = [q for q in copies if q in refs]
    if p in refs:
        status = 'REFERENCED'
    elif used_copies:
        status = 'SAME_CONTENT_AS_REFERENCED'
    else:
        status = 'NO_STATIC_REFERENCE'
    root_name = next(rel(root) for root in SOURCES if p.is_relative_to(root))
    group = p.relative_to(ROOT / root_name).parts[0]
    rows.append({'file': rel(p), 'root': root_name, 'group': group, 'bytes': p.stat().st_size,
                 'sha256': hashes[p], 'status': status, 'references': ' ; '.join(refs[p]),
                 'referenced_copies': ' ; '.join(rel(q) for q in used_copies if q != p),
                 'identical_files': ' ; '.join(rel(q) for q in copies if q != p)})
write_csv('IMAGE_INVENTORY.csv', rows, list(rows[0]))
write_csv('IMAGE_REFERENCES.csv', reference_rows, ['source', 'raw_path', 'resolved_file', 'method'])
write_csv('MISSING_IMAGE_REFERENCES.csv', missing, ['source', 'raw_path', 'resolved_file', 'method'])

text = (ROOT / 'frontend/src/data/mockData.js').read_text(encoding='utf-8')
data = {name: json.loads(value) for name, value in re.findall(r'export const (\w+)\s*=\s*(\[.*?\]);', text, re.S)}
product_rows = []
for index, product in enumerate(data['products']):
    raw_images = [x if isinstance(x, str) else x.get('Url') or x.get('url') or '' for x in product.get('images', [])]
    resolved = [resolve(x)[0] for x in raw_images if x]
    product_rows.append({'record': index + 1, 'id': product['id'], 'name': product['name'],
                         'facility_id': product['coSoSanXuatId'], 'image_entries': len(raw_images),
                         'nonempty_paths': len([x for x in raw_images if x]),
                         'resolved_images': len([x for x in resolved if x]),
                         'raw_paths': ' ; '.join(raw_images)})
write_csv('PRODUCT_DATA_AUDIT.csv', product_rows, list(product_rows[0]))
counts = Counter(r['status'] for r in rows)
summary = {'image_files': len(images), 'unique_contents': len(hash_groups), 'statuses': dict(counts),
           'roots': {rel(root): dict(Counter(r['status'] for r in rows if r['root'] == rel(root))) for root in SOURCES},
           'literal_references': len(reference_rows), 'missing_references': len(missing),
           'data_counts': {k: len(v) for k, v in data.items()},
           'products_without_name': sum(not x['name'].strip() for x in data['products']),
           'products_without_resolved_image': sum(x['resolved_images'] == 0 for x in product_rows),
           'duplicate_product_ids': {k: v for k, v in Counter(x['id'] for x in data['products']).items() if v > 1}}
(OUT / 'inventory-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
md = ['# Danh mục ảnh đã tham chiếu và ảnh còn lại', '',
      'Ảnh được kiểm kê trong `frontend/download/images`, `frontend/public/images`, `frontend/src/assets` và toàn bộ `template`. Không đổi tên, xóa hoặc sửa ảnh nguồn.', '',
      '## Cách đọc an toàn', '',
      '- `REFERENCED`: có đường dẫn literal trong code/CSS/data và phân giải được. Có thể thuộc nhánh fallback hoặc một bản ghi chưa được render; không đồng nghĩa đã xuất hiện trên mọi trang.',
      '- `SAME_CONTENT_AS_REFERENCED`: không được tham chiếu trực tiếp nhưng SHA-256 giống hệt một ảnh được tham chiếu. Nhờ vậy ảnh gốc trong template không bị hiểu nhầm là nội dung chưa từng dùng chỉ vì đã copy/đổi tên.',
      '- `NO_STATIC_REFERENCE`: chưa tìm thấy tham chiếu tĩnh và chưa có bản sao cùng hash được tham chiếu. Đây là danh sách ứng viên để Gemini xem tiếp, **không phải danh sách được phép xóa**.',
      '- `resolveMockAsset.js` dùng glob eager toàn bộ kho download: ảnh không được render vẫn có thể được Vite đóng gói. Có trong `dist` không chứng minh ảnh đã được dùng trên UI.',
      '- Quét literal có thể bao gồm comment/nhánh không chạy. Script không xác minh ngữ nghĩa ảnh, ảnh xám/placeholder bên trong bitmap, crop hay khác biệt thị giác với PDF. Ghép theo hash chỉ nhận ảnh trùng byte, không nhận ảnh đã resize/nén/crop.',
      '- Đường dẫn `/images/...` trong mockData được resolver tìm trong **download/images**, không tự ưu tiên public/images. Khi thiếu đường dẫn phải sửa đúng nơi, không thêm file tùy ý để che lỗi.', '',
      '## Thống kê', '',
      f"Tổng {len(rows)} file ảnh, {len(hash_groups)} nội dung SHA-256 khác nhau; {len(reference_rows)} lượt tham chiếu literal, {len(missing)} lượt chưa phân giải được.", '',
      '| Kho | Tham chiếu trực tiếp | Trùng nội dung ảnh tham chiếu | Chưa thấy tham chiếu |', '|---|---:|---:|---:|']
for root, counter in summary['roots'].items():
    md.append(f"| `{root}` | {counter.get('REFERENCED', 0)} | {counter.get('SAME_CONTENT_AS_REFERENCED', 0)} | {counter.get('NO_STATIC_REFERENCE', 0)} |")
md += ['', '## File dùng để tra cứu', '',
       '- [IMAGE_INVENTORY.csv](IMAGE_INVENTORY.csv): đủ từng ảnh, đường dẫn, dung lượng, SHA-256, trạng thái, vị trí code và các bản sao.',
       '- [IMAGE_REFERENCES.csv](IMAGE_REFERENCES.csv): đường dẫn khai báo → file thực tế, cách phân giải exact/slug/no-extension.',
       '- [MISSING_IMAGE_REFERENCES.csv](MISSING_IMAGE_REFERENCES.csv): từng tham chiếu lỗi và dòng cần sửa.',
       '- [PRODUCT_DATA_AUDIT.csv](PRODUCT_DATA_AUDIT.csv): ảnh theo từng bản ghi sản phẩm; không cộng ảnh sample fallback vào ảnh dữ liệu thật.', '',
       '## Các đường dẫn lỗi', '', '| Vị trí | Đường dẫn khai báo |', '|---|---|']
for r in missing:
    md.append(f"| `{r['source']}` | `{r['raw_path']}` |")
md += ['', '## Ảnh được tham chiếu trực tiếp', '', '| File thực tế | Vị trí tham chiếu |', '|---|---|']
for r in rows:
    if r['status'] == 'REFERENCED':
        md.append(f"| `{r['file']}` | {r['references']} |")
md += ['', '## Ảnh chưa thấy tham chiếu hoặc bản sao được tham chiếu', '',
       'Mở các ảnh dưới đây trước khi gắn vào sản phẩm. Tên thư mục chỉ là gợi ý; so đúng sản phẩm trong trang PDF. Bản sao trùng byte của ảnh đã tham chiếu được tra trong CSV, không liệt kê lại ở đây.', '']
for root in SOURCES:
    group_rows = [r for r in rows if r['root'] == rel(root) and r['status'] == 'NO_STATIC_REFERENCE']
    md += [f'### {rel(root)} ({len(group_rows)} file)', '']
    md += [f"- `{r['file']}`" for r in group_rows]
    md.append('')
md += ['## Cập nhật sau mỗi phần Gemini thực hiện', '',
       'Chạy `python docs/audit/generate_inventory.py` tại thư mục gốc (chỉ cần Python chuẩn). Xem diff CSV và tài liệu này; không giữ số liệu cũ sau khi sửa code/ảnh. Bảng trạng thái PDF cần cập nhật thủ công sau khi đã chụp và nghiệm thu trang tương ứng.', '']
(OUT / 'DANH_MUC_ANH.md').write_text('\n'.join(md), encoding='utf-8')
print(json.dumps(summary, ensure_ascii=False, indent=2))
