# Danh mục ảnh đã tham chiếu và ảnh còn lại

Ảnh được kiểm kê trong `frontend/download/images`, `frontend/public/images`, `frontend/src/assets` và toàn bộ `template`. Không đổi tên, xóa hoặc sửa ảnh nguồn.

## Cách đọc an toàn

- `REFERENCED`: có đường dẫn literal trong code/CSS/data và phân giải được. Có thể thuộc nhánh fallback hoặc một bản ghi chưa được render; không đồng nghĩa đã xuất hiện trên mọi trang.
- `SAME_CONTENT_AS_REFERENCED`: không được tham chiếu trực tiếp nhưng SHA-256 giống hệt một ảnh được tham chiếu. Nhờ vậy ảnh gốc trong template không bị hiểu nhầm là nội dung chưa từng dùng chỉ vì đã copy/đổi tên.
- `NO_STATIC_REFERENCE`: chưa tìm thấy tham chiếu tĩnh và chưa có bản sao cùng hash được tham chiếu. Đây là danh sách ứng viên để Gemini xem tiếp, **không phải danh sách được phép xóa**.
- `resolveMockAsset.js` dùng glob eager toàn bộ kho download: ảnh không được render vẫn có thể được Vite đóng gói. Có trong `dist` không chứng minh ảnh đã được dùng trên UI.
- Quét literal có thể bao gồm comment/nhánh không chạy. Script không xác minh ngữ nghĩa ảnh, ảnh xám/placeholder bên trong bitmap, crop hay khác biệt thị giác với PDF. Ghép theo hash chỉ nhận ảnh trùng byte, không nhận ảnh đã resize/nén/crop.
- Đường dẫn `/images/...` trong mockData được resolver tìm trong **download/images**, không tự ưu tiên public/images. Khi thiếu đường dẫn phải sửa đúng nơi, không thêm file tùy ý để che lỗi.

## Thống kê

Tổng 1638 file ảnh, 878 nội dung SHA-256 khác nhau; 732 lượt tham chiếu literal, 0 lượt chưa phân giải được.

| Kho | Tham chiếu trực tiếp | Trùng nội dung ảnh tham chiếu | Chưa thấy tham chiếu |
|---|---:|---:|---:|
| `frontend/download/images` | 717 | 86 | 144 |
| `frontend/public/images` | 0 | 11 | 0 |
| `frontend/src/assets` | 1 | 0 | 0 |
| `template` | 0 | 658 | 21 |

## File dùng để tra cứu

- [IMAGE_INVENTORY.csv](IMAGE_INVENTORY.csv): đủ từng ảnh, đường dẫn, dung lượng, SHA-256, trạng thái, vị trí code và các bản sao.
- [IMAGE_REFERENCES.csv](IMAGE_REFERENCES.csv): đường dẫn khai báo → file thực tế, cách phân giải exact/slug/no-extension.
- [MISSING_IMAGE_REFERENCES.csv](MISSING_IMAGE_REFERENCES.csv): từng tham chiếu lỗi và dòng cần sửa.
- [PRODUCT_DATA_AUDIT.csv](PRODUCT_DATA_AUDIT.csv): ảnh theo từng bản ghi sản phẩm; không cộng ảnh sample fallback vào ảnh dữ liệu thật.

## Các đường dẫn lỗi

| Vị trí | Đường dẫn khai báo |
|---|---|

## Ảnh được tham chiếu trực tiếp

| File thực tế | Vị trí tham chiếu |
|---|---|
| `frontend/download/images/about_us/about_gallery_center.jpg` | frontend/src/pages/AboutPage.jsx:25 |
| `frontend/download/images/about_us/about_gallery_left.jpg` | frontend/src/pages/AboutPage.jsx:24 |
| `frontend/download/images/about_us/about_gallery_right.jpg` | frontend/src/pages/AboutPage.jsx:26 |
| `frontend/download/images/about_us/about_hero_banner.jpg` | frontend/src/pages/AboutPage.jsx:22 |
| `frontend/download/images/about_us/about_mission_main.jpg` | frontend/src/pages/AboutPage.jsx:27 |
| `frontend/download/images/about_us/about_mission_thumb1.jpg` | frontend/src/pages/AboutPage.jsx:28 |
| `frontend/download/images/about_us/about_mission_thumb2.jpg` | frontend/src/pages/AboutPage.jsx:29 |
| `frontend/download/images/about_us/about_project_mid.jpg` | frontend/src/pages/AboutPage.jsx:23 |
| `frontend/download/images/about_us/about_vision_main.jpg` | frontend/src/pages/AboutPage.jsx:30 |
| `frontend/download/images/about_us/botanical_pattern.png` | frontend/src/styles-about.css:22 |
| `frontend/download/images/banners/contact_card_mtd.png` | frontend/src/pages/ProductDetailPage.jsx:209 |
| `frontend/download/images/banners/contact_lua_pdf119.jpg` | frontend/src/pages/ProductDetailPage.jsx:222 |
| `frontend/download/images/banners/contact_non_pdf101.jpg` | frontend/src/pages/ProductDetailPage.jsx:221 |
| `frontend/download/images/banners/contact_p52_weaving.jpg` | frontend/src/pages/ProductDetailPage.jsx:207 |
| `frontend/download/images/banners/contact_pdf30.jpg` | frontend/src/pages/ProductDetailPage.jsx:206 |
| `frontend/download/images/banners/contact_pdf63.jpg` | frontend/src/pages/ProductDetailPage.jsx:208 |
| `frontend/download/images/banners/quote_banner_mtd.png` | frontend/src/pages/ProductDetailPage.jsx:207 ; frontend/src/pages/ProductDetailPage.jsx:215 |
| `frontend/download/images/banners/quote_lotus_pdf.jpg` | frontend/src/pages/ProductDetailPage.jsx:206 ; frontend/src/pages/ProductDetailPage.jsx:208 ; frontend/src/pages/ProductDetailPage.jsx:214 |
| `frontend/download/images/banners/quote_lua_pdf119.jpg` | frontend/src/pages/ProductDetailPage.jsx:218 |
| `frontend/download/images/banners/quote_non_pdf101.jpg` | frontend/src/pages/ProductDetailPage.jsx:217 |
| `frontend/download/images/banners/quote_pdf82.jpg` | frontend/src/pages/ProductDetailPage.jsx:209 ; frontend/src/pages/ProductDetailPage.jsx:216 |
| `frontend/download/images/booking/booking_hero_bg.jpg` | frontend/src/pages/BookingPage.jsx:111 |
| `frontend/download/images/CS bách ngân hỷ/Cauchuyen.png` | frontend/src/data/mockData.js:866 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.20.png` | frontend/src/data/mockData.js:4426 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.27.png` | frontend/src/data/mockData.js:4427 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.34.png` | frontend/src/data/mockData.js:4428 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.41.png` | frontend/src/data/mockData.js:4429 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm thanh mạ/Ảnh màn hình 2026-10-30 lúc 22.33.12.png` | frontend/src/data/mockData.js:4389 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm thanh mạ/Ảnh màn hình 2026-10-30 lúc 22.33.34.png` | frontend/src/data/mockData.js:4390 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm thanh mạ/Ảnh màn hình 2026-10-30 lúc 22.33.42.png` | frontend/src/data/mockData.js:4391 |
| `frontend/download/images/CS bách ngân hỷ/Header.png` | frontend/src/data/mockData.js:864 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1490 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1501 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1512 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1523 |
| `frontend/download/images/CS bách ngân hỷ/NgoNgocAnh.jpg` | frontend/src/data/mockData.js:2184 |
| `frontend/download/images/CS bách ngân hỷ/NguyenNhatMInh.jpg` | frontend/src/data/mockData.js:2175 |
| `frontend/download/images/CS bách ngân hỷ/sanpham1.jpg` | frontend/src/data/mockData.js:4388 |
| `frontend/download/images/CS bách ngân hỷ/sanpham2.jpg` | frontend/src/data/mockData.js:4425 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham3.jpg` | frontend/src/data/mockData.js:4463 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham4.jpg` | frontend/src/data/mockData.js:4500 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham5.jpg` | frontend/src/data/mockData.js:4537 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham6.jpg` | frontend/src/data/mockData.js:4573 |
| `frontend/download/images/CS bách ngân hỷ/TranPhuongMai.jpg` | frontend/src/data/mockData.js:2166 |
| `frontend/download/images/CS bách ngân hỷ/tuvan.jpg` | frontend/src/data/mockData.js:865 |
| `frontend/download/images/CS gốm hải long/cauchuyen.jpg` | frontend/src/data/mockData.js:906 |
| `frontend/download/images/CS gốm hải long/DoNgocMai.jpg` | frontend/src/data/mockData.js:2202 |
| `frontend/download/images/CS gốm hải long/header .jpg` | frontend/src/data/mockData.js:904 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1534 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1545 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1556 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1567 |
| `frontend/download/images/CS gốm hải long/NguyenDucThanh.jpg` | frontend/src/data/mockData.js:2211 |
| `frontend/download/images/CS gốm hải long/sanpham1.jpg` | frontend/src/data/mockData.js:4610 |
| `frontend/download/images/CS gốm hải long/sanpham2.png` | frontend/src/data/mockData.js:4646 |
| `frontend/download/images/CS gốm hải long/sanpham3.jpg` | frontend/src/data/mockData.js:4742 |
| `frontend/download/images/CS gốm hải long/sanpham3.png` | frontend/src/data/mockData.js:4678 |
| `frontend/download/images/CS gốm hải long/sanpham4.jpg` | frontend/src/data/mockData.js:4712 |
| `frontend/download/images/CS gốm hải long/sanpham6.png` | frontend/src/data/mockData.js:4772 |
| `frontend/download/images/CS gốm hải long/TranKhanhLinh.jpg` | frontend/src/data/mockData.js:2193 |
| `frontend/download/images/CS gốm hải long/tuvan.jpg` | frontend/src/data/mockData.js:905 |
| `frontend/download/images/CS Gốm Mạnh Hoa/cauchuyen.jpg` | frontend/src/data/mockData.js:986 |
| `frontend/download/images/CS Gốm Mạnh Hoa/header.png` | frontend/src/data/mockData.js:984 |
| `frontend/download/images/CS Gốm Mạnh Hoa/HoangHaiAn.jpg` | frontend/src/data/mockData.js:2265 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1622 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1633 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1644 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1655 |
| `frontend/download/images/CS Gốm Mạnh Hoa/NguyenKhanhToan.jpg` | frontend/src/data/mockData.js:2256 |
| `frontend/download/images/CS Gốm Mạnh Hoa/NguyenMaiChi.jpg` | frontend/src/data/mockData.js:2247 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham1.jpg` | frontend/src/data/mockData.js:5022 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham2.jpg` | frontend/src/data/mockData.js:5056 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham3.jpg` | frontend/src/data/mockData.js:5092 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham4.jpg` | frontend/src/data/mockData.js:5128 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham5.jpg` | frontend/src/data/mockData.js:5164 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham6.png` | frontend/src/data/mockData.js:5200 |
| `frontend/download/images/CS Gốm Mạnh Hoa/tuvan.jpg` | frontend/src/data/mockData.js:985 |
| `frontend/download/images/CS Gốm tới liên/cauchuyen.png` | frontend/src/data/mockData.js:946 |
| `frontend/download/images/CS Gốm tới liên/duan1.jpg` | frontend/src/data/mockData.js:1866 |
| `frontend/download/images/CS Gốm tới liên/duan2.jpg` | frontend/src/data/mockData.js:1875 |
| `frontend/download/images/CS Gốm tới liên/duan3.jpg` | frontend/src/data/mockData.js:1884 |
| `frontend/download/images/CS Gốm tới liên/HaMaiPhuong.png` | frontend/src/data/mockData.js:2220 |
| `frontend/download/images/CS Gốm tới liên/Header.jpg` | frontend/src/data/mockData.js:944 |
| `frontend/download/images/CS Gốm tới liên/LuThanhHa.png` | frontend/src/data/mockData.js:2238 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1578 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1589 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1600 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1611 |
| `frontend/download/images/CS Gốm tới liên/sanpham1.jpg` | frontend/src/data/mockData.js:4806 |
| `frontend/download/images/CS Gốm tới liên/Sanpham2.jpg` | frontend/src/data/mockData.js:4842 |
| `frontend/download/images/CS Gốm tới liên/Sanpham3.jpg` | frontend/src/data/mockData.js:4878 |
| `frontend/download/images/CS Gốm tới liên/sanpham4.jpg` | frontend/src/data/mockData.js:4914 |
| `frontend/download/images/CS Gốm tới liên/sanpham5.jpg` | frontend/src/data/mockData.js:4950 |
| `frontend/download/images/CS Gốm tới liên/Sanpham6.jpg` | frontend/src/data/mockData.js:4986 |
| `frontend/download/images/CS Gốm tới liên/TranVanMinh.png` | frontend/src/data/mockData.js:2229 |
| `frontend/download/images/CS Gốm tới liên/tuvan.jpg` | frontend/src/data/mockData.js:945 |
| `frontend/download/images/CS hoàng anh ceramics/Cauchuyen.jpg` | frontend/src/data/mockData.js:832 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - túi sách cắm hoa/Ảnh màn hình 2026-10-29 lúc 14.05.19.png` | frontend/src/data/mockData.js:4240 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - túi sách cắm hoa/Ảnh màn hình 2026-10-29 lúc 14.05.33.png` | frontend/src/data/mockData.js:4241 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - túi sách cắm hoa/Ảnh màn hình 2026-10-29 lúc 14.05.43.png` | frontend/src/data/mockData.js:4242 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.37.png` | frontend/src/data/mockData.js:4351 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.43.png` | frontend/src/data/mockData.js:4352 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.49.png` | frontend/src/data/mockData.js:4353 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.56.png` | frontend/src/data/mockData.js:4354 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo cua/Ảnh màn hình 2026-10-29 lúc 14.09.48.png` | frontend/src/data/mockData.js:4277 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo cua/Ảnh màn hình 2026-10-29 lúc 14.10.05.png` | frontend/src/data/mockData.js:4278 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo cua/Ảnh màn hình 2026-10-29 lúc 14.10.15.png` | frontend/src/data/mockData.js:4279 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo labubu/Ảnh màn hình 2026-10-29 lúc 14.13.25.png` | frontend/src/data/mockData.js:4314 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo labubu/Ảnh màn hình 2026-10-29 lúc 14.13.33.png` | frontend/src/data/mockData.js:4315 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo labubu/Ảnh màn hình 2026-10-29 lúc 14.13.50.png` | frontend/src/data/mockData.js:4316 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.01.41.png` | frontend/src/data/mockData.js:4202 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.01.53.png` | frontend/src/data/mockData.js:4203 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.02.02.png` | frontend/src/data/mockData.js:4204 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.02.14.png` | frontend/src/data/mockData.js:4205 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết sản phẩm-ỐNG HEO SÚP LƠ/Ảnh màn hình 2026-10-29 lúc 13.58.38.png` | frontend/src/data/mockData.js:4165 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết sản phẩm-ỐNG HEO SÚP LƠ/Ảnh màn hình 2026-10-29 lúc 13.58.45.png` | frontend/src/data/mockData.js:4166 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết sản phẩm-ỐNG HEO SÚP LƠ/Ảnh màn hình 2026-10-29 lúc 13.58.57.png` | frontend/src/data/mockData.js:4167 |
| `frontend/download/images/CS hoàng anh ceramics/EmilyCarter.png` | frontend/src/data/mockData.js:2157 |
| `frontend/download/images/CS hoàng anh ceramics/header.png` | frontend/src/data/mockData.js:830 |
| `frontend/download/images/CS hoàng anh ceramics/NguyenMinhAnh.png` | frontend/src/data/mockData.js:2139 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham1.jpg` | frontend/src/data/mockData.js:4164 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham2.jpg` | frontend/src/data/mockData.js:4201 |
| `frontend/download/images/CS hoàng anh ceramics/sanpham3.png` | frontend/src/data/mockData.js:4276 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham4.jpg` | frontend/src/data/mockData.js:4239 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham5.jpg` | frontend/src/data/mockData.js:4313 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham6.jpg` | frontend/src/data/mockData.js:4350 |
| `frontend/download/images/CS hoàng anh ceramics/TranThuHa.png` | frontend/src/data/mockData.js:2148 |
| `frontend/download/images/CS hoàng anh ceramics/tuvan.png` | frontend/src/data/mockData.js:831 |
| `frontend/download/images/CS Lụa nha xá/cauchuyen.png` | frontend/src/data/mockData.js:1025 |
| `frontend/download/images/CS Lụa nha xá/header.png` | frontend/src/data/mockData.js:1023 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat1.webp` | frontend/src/data/mockData.js:1666 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat2.webp` | frontend/src/data/mockData.js:1677 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1688 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1699 |
| `frontend/download/images/CS Lụa nha xá/sanpham1.png` | frontend/src/data/mockData.js:5236 |
| `frontend/download/images/CS Lụa nha xá/sanpham2.png` | frontend/src/data/mockData.js:5275 |
| `frontend/download/images/CS Lụa nha xá/sanpham3.webp` | frontend/src/data/mockData.js:5313 |
| `frontend/download/images/CS Lụa nha xá/sanpham4.jpg` | frontend/src/data/mockData.js:5352 |
| `frontend/download/images/CS Lụa nha xá/sanpham5.png` | frontend/src/data/mockData.js:5391 |
| `frontend/download/images/CS Lụa nha xá/sanpham6.webp` | frontend/src/data/mockData.js:5430 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mpk7ds082rke67.webp` | frontend/src/data/mockData.js:5353 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mpk7ds122ya6c7.webp` | frontend/src/data/mockData.js:5354 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mpukqn6j1s7487.webp` | frontend/src/data/mockData.js:5355 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mrtx85b407wn92.jpg` | frontend/src/data/mockData.js:5356 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mrtxcm9fyb5t77.jpg` | frontend/src/data/mockData.js:5357 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/ab105e41-2057-4c43-be16-06ec477fecfc.jpg` | frontend/src/data/mockData.js:5237 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/sanpham1 2.png` | frontend/src/data/mockData.js:5238 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/vn-11134207-81ztc-mnmcfqpq1rlw5a.webp` | frontend/src/data/mockData.js:5239 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/vn-11134207-81ztc-msozqv97oflw3e.webp` | frontend/src/data/mockData.js:5240 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/vn-11134207-81ztc-msoztuu8c5qic8.webp` | frontend/src/data/mockData.js:5241 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/484824489_1044549594361729_4377349374783878228_n.jpg` | frontend/src/data/mockData.js:5392 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/485035892_1044549634361725_9085957628290583763_n.jpg` | frontend/src/data/mockData.js:5393 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/485687671_1047628964053792_5591196335653054878_n.jpg` | frontend/src/data/mockData.js:5394 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/vn-11134207-81ztc-mtdirh89lmv62e.webp` | frontend/src/data/mockData.js:5395 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/vn-11134207-81ztc-mtdirh987klgc0.webp` | frontend/src/data/mockData.js:5396 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mmgufvsdijgh85.webp` | frontend/src/data/mockData.js:5431 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mmzfsscv7478a9@resize_w900_nl.webp` | frontend/src/data/mockData.js:5432 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mrzeh2ubvl6tc2.webp` | frontend/src/data/mockData.js:5433 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mrzeh2uf6zgg29.webp` | frontend/src/data/mockData.js:5434 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-820l4-mii6xg6nwxdyee.webp` | frontend/src/data/mockData.js:5435 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mnm8nit2oa9y0a.webp` | frontend/src/data/mockData.js:5314 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mr74dtasusjk05@resize_w900_nl.webp` | frontend/src/data/mockData.js:5315 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mrze9nqkpe6f75.webp` | frontend/src/data/mockData.js:5316 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mrze9nrzs3k282.webp` | frontend/src/data/mockData.js:5317 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mrziy0y6b5s2b8.webp` | frontend/src/data/mockData.js:5318 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/77861cd1-baf4-4f5a-ae75-7cb71e322f1d.jpg` | frontend/src/data/mockData.js:5276 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/vn-11134207-7ras8-m4jsj99s647jce.webp` | frontend/src/data/mockData.js:5277 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/vn-11134207-81ztc-mphnb1xli1an09@resize_w900_nl.webp` | frontend/src/data/mockData.js:5278 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/vn-11134207-81ztc-mphnfhr8kwzk8a.webp` | frontend/src/data/mockData.js:5279 |
| `frontend/download/images/CS Lụa nha xá/tuvan.jpg` | frontend/src/data/mockData.js:1024 |
| `frontend/download/images/CS Mây tre việt quang/cauchuyen.jpeg` | frontend/src/data/mockData.js:752 |
| `frontend/download/images/CS Mây tre việt quang/duan1.jpg` | frontend/src/data/mockData.js:1804 |
| `frontend/download/images/CS Mây tre việt quang/duan2.jpg` | frontend/src/data/mockData.js:1814 |
| `frontend/download/images/CS Mây tre việt quang/duan3.jpg` | frontend/src/data/mockData.js:1824 |
| `frontend/download/images/CS Mây tre việt quang/header.png` | frontend/src/data/mockData.js:750 |
| `frontend/download/images/CS Mây tre việt quang/lethuha.jpg` | frontend/src/data/mockData.js:2103 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat1.webp` | frontend/src/data/mockData.js:1358 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat2.webp` | frontend/src/data/mockData.js:1369 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1380 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1391 |
| `frontend/download/images/CS Mây tre việt quang/nguyenminhanh.jpg` | frontend/src/data/mockData.js:2094 |
| `frontend/download/images/CS Mây tre việt quang/sanpham1.jpg` | frontend/src/data/mockData.js:3797 |
| `frontend/download/images/CS Mây tre việt quang/sanpham2.png` | frontend/src/data/mockData.js:3827 |
| `frontend/download/images/CS Mây tre việt quang/sanpham3.jpg` | frontend/src/data/mockData.js:3857 |
| `frontend/download/images/CS Mây tre việt quang/sanpham4.png` | frontend/src/data/mockData.js:3887 |
| `frontend/download/images/CS Mây tre việt quang/sanpham5.png` | frontend/src/data/mockData.js:3917 |
| `frontend/download/images/CS Mây tre việt quang/sanpham6.png` | frontend/src/data/mockData.js:3947 |
| `frontend/download/images/CS Mây tre việt quang/tranquochuy.jpg` | frontend/src/data/mockData.js:2085 |
| `frontend/download/images/CS Mây tre việt quang/tuvan.jpg` | frontend/src/data/mockData.js:751 |
| `frontend/download/images/CS mây tre đan tuấn anh/BuiNgocLinh.jpg` | frontend/src/data/mockData.js:2112 |
| `frontend/download/images/CS mây tre đan tuấn anh/CaoXuanVu.jpg` | frontend/src/data/mockData.js:2121 |
| `frontend/download/images/CS mây tre đan tuấn anh/cauChuyen.png` | frontend/src/data/mockData.js:792 |
| `frontend/download/images/CS mây tre đan tuấn anh/header.jpg` | frontend/src/data/mockData.js:790 |
| `frontend/download/images/CS mây tre đan tuấn anh/may tre tuan anh 9 (1).jpg` | frontend/src/data/mockData.js:4040 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuan anh 10 (1).jpg` | frontend/src/data/mockData.js:4070 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh (1).jpg` | frontend/src/data/mockData.js:4008 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh 5 (1).jpg` | frontend/src/data/mockData.js:4100 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh 6 (1).jpg` | frontend/src/data/mockData.js:4130 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh 7 (1).jpg` | frontend/src/data/mockData.js:3977 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx1.jpg` | frontend/src/data/mockData.js:1402 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx2.jpg` | frontend/src/data/mockData.js:1413 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx3.jpg` | frontend/src/data/mockData.js:1424 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx4.jpg` | frontend/src/data/mockData.js:1435 |
| `frontend/download/images/CS mây tre đan tuấn anh/PhamKhanhLy.jpg` | frontend/src/data/mockData.js:2130 |
| `frontend/download/images/CS mây tre đan tuấn anh/tuvan.jpg` | frontend/src/data/mockData.js:791 |
| `frontend/download/images/facility_common/badge_icon_delivery.png` | frontend/src/components/facility/FacilityConsultation.jsx:18 |
| `frontend/download/images/facility_common/badge_icon_design.png` | frontend/src/components/facility/FacilityConsultation.jsx:8 |
| `frontend/download/images/facility_common/badge_icon_handcrafted.png` | frontend/src/components/facility/FacilityConsultation.jsx:13 |
| `frontend/download/images/facility_common/badge_icon_invoice.png` | frontend/src/components/facility/FacilityConsultation.jsx:23 |
| `frontend/download/images/facility_common/consult_main_img.png` | frontend/src/components/facility/FacilityConsultation.jsx:37 ; frontend/src/components/facility/FacilityConsultation.jsx:42 |
| `frontend/download/images/Hoa Nón Làng Chuông/68.png` | frontend/src/data/mockData.js:590 |
| `frontend/download/images/Hoa Nón Làng Chuông/69.png` | frontend/src/data/mockData.js:2938 |
| `frontend/download/images/Hoa Nón Làng Chuông/70.png` | frontend/src/data/mockData.js:2974 |
| `frontend/download/images/Hoa Nón Làng Chuông/71.png` | frontend/src/data/mockData.js:3014 |
| `frontend/download/images/Hoa Nón Làng Chuông/72.png` | frontend/src/data/mockData.js:3048 |
| `frontend/download/images/Hoa Nón Làng Chuông/73.png` | frontend/src/data/mockData.js:3126 |
| `frontend/download/images/Hoa Nón Làng Chuông/74.png` | frontend/src/data/mockData.js:3087 |
| `frontend/download/images/Hoa Nón Làng Chuông/75.png` | frontend/src/data/mockData.js:591 |
| `frontend/download/images/Hoa Nón Làng Chuông/76.png` | frontend/src/data/mockData.js:592 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx1.png` | frontend/src/data/mockData.js:1182 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx2.png` | frontend/src/data/mockData.js:1193 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx3.png` | frontend/src/data/mockData.js:1204 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx4.png` | frontend/src/data/mockData.js:1215 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/2186605b-3cb8-4386-b63c-619afce5e655.jpg` | frontend/src/data/mockData.js:3088 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/5290d451-b884-4408-a2ba-a9b4647348a7.jpg` | frontend/src/data/mockData.js:3089 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/777559dd-25d3-4193-8819-f52517540fda.jpg` | frontend/src/data/mockData.js:3090 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/7b620438-d2a9-4daf-b550-c7d0469c8328 1.png` | frontend/src/data/mockData.js:3091 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/7b620438-d2a9-4daf-b550-c7d0469c8328 2.png` | frontend/src/data/mockData.js:3092 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet1.png` | frontend/src/data/mockData.js:2975 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet2.png` | frontend/src/data/mockData.js:2976 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet3.png` | frontend/src/data/mockData.js:2977 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet4.png` | frontend/src/data/mockData.js:2978 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/chatlieu.png` | frontend/src/data/mockData.js:2979 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/hoatiet.png` | frontend/src/data/mockData.js:2980 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchatlieu.jpg` | frontend/src/data/mockData.js:2939 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet1.png` | frontend/src/data/mockData.js:2940 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet2.png` | frontend/src/data/mockData.js:2941 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet3.jpg` | frontend/src/data/mockData.js:2942 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet4.jpg` | frontend/src/data/mockData.js:2943 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/hoatiet.png` | frontend/src/data/mockData.js:2944 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/4e978dca-1cc5-4fa5-a9d5-0fe65bbe6da1 1.png` | frontend/src/data/mockData.js:3015 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/4e978dca-1cc5-4fa5-a9d5-0fe65bbe6da1 3.png` | frontend/src/data/mockData.js:3016 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/977b0bfd-19a0-46fb-b9dd-227d5c83ab5a 1.png` | frontend/src/data/mockData.js:3017 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/977b0bfd-19a0-46fb-b9dd-227d5c83ab5a 2.png` | frontend/src/data/mockData.js:3018 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/90e9fd28-de33-46fa-8cb2-279b7202e53d.jpg` | frontend/src/data/mockData.js:3127 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/sg-11134201-825zp-mjvjxn77g3cy1b.webp` | frontend/src/data/mockData.js:3128 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/sg-11134201-8260a-mjvjxo5f3o5j60.webp` | frontend/src/data/mockData.js:3129 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/sg-11134201-8261t-mjvjxp220ydc7f.webp` | frontend/src/data/mockData.js:3130 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/10ba38b7-4b67-4365-a277-c08b3ff6102f.jpg` | frontend/src/data/mockData.js:3049 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/2b67ab78-dd05-443f-b2e4-85e6a4586ab0 1.png` | frontend/src/data/mockData.js:3050 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/37bffdba-39a7-4b9b-a23c-c317f07da152.jpg` | frontend/src/data/mockData.js:3051 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/976f6655-3a84-4ab7-815e-d0ac29cdeb75.jpg` | frontend/src/data/mockData.js:3052 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/Gemini_Generated_Image_mo6x50mo6x50mo6x.png` | frontend/src/data/mockData.js:3053 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/cauchuyen.png` | frontend/src/data/mockData.js:550 ; frontend/src/data/mockData.js:552 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1138 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1149 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat3.webp` | frontend/src/data/mockData.js:1160 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1171 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham1.png` | frontend/src/data/mockData.js:2703 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham2.png` | frontend/src/data/mockData.js:2742 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham3.png` | frontend/src/data/mockData.js:2781 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham4.png` | frontend/src/data/mockData.js:2820 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham5.png` | frontend/src/data/mockData.js:2859 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham6.png` | frontend/src/data/mockData.js:2898 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/125.png` | frontend/src/data/mockData.js:2899 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/820196092_122263346810273480_5895736972436216052_n.jpg` | frontend/src/data/mockData.js:2900 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/821123779_122263346750273480_1402837331595121011_n.jpg` | frontend/src/data/mockData.js:2901 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/image 50.png` | frontend/src/data/mockData.js:2902 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/image 51.png` | frontend/src/data/mockData.js:2903 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/869832750_122268499616273480_7276361879873561227_n 1.png` | frontend/src/data/mockData.js:2743 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 1.png` | frontend/src/data/mockData.js:2744 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 2.png` | frontend/src/data/mockData.js:2745 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 3.png` | frontend/src/data/mockData.js:2746 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 4.png` | frontend/src/data/mockData.js:2747 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/111.png` | frontend/src/data/mockData.js:2821 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/112.png` | frontend/src/data/mockData.js:2822 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/868358897_122268499604273480_6985130325265403347_n 1.png` | frontend/src/data/mockData.js:2823 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/871150678_122268499682273480_5076789892579742228_n 1.png` | frontend/src/data/mockData.js:2824 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/871316160_122268499664273480_170722527425795122_n 1.png` | frontend/src/data/mockData.js:2825 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/11.png` | frontend/src/data/mockData.js:2782 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/12.png` | frontend/src/data/mockData.js:2783 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/833863924_122264873588273480_2503797066406257761_n.jpg` | frontend/src/data/mockData.js:2784 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/844007611_122265877766273480_413282655460255551_n.jpg` | frontend/src/data/mockData.js:2785 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/847033055_122265877538273480_3183531042725667871_n.jpg` | frontend/src/data/mockData.js:2786 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/863683350_122267895350273480_7973370084803348637_n.jpg` | frontend/src/data/mockData.js:2860 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/869664342_122268499346273480_8180360518738157444_n.jpg` | frontend/src/data/mockData.js:2861 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/869729753_122268499322273480_5694301797513064183_n.jpg` | frontend/src/data/mockData.js:2862 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/image 48.png` | frontend/src/data/mockData.js:2863 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/image 49.png` | frontend/src/data/mockData.js:2864 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/3f07650a-6a2d-4e3a-ba1e-41cd84c733db.jpg` | frontend/src/data/mockData.js:2704 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/45904e48-80a9-419e-9653-5b6cbefb9e00.jpg` | frontend/src/data/mockData.js:2705 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/4f3c9afd-f427-43c4-86c9-1c211217db39.jpg` | frontend/src/data/mockData.js:2706 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/8961075e-9ee7-4ac1-bf6a-928ffaf71d62 1.png` | frontend/src/data/mockData.js:2707 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/8961075e-9ee7-4ac1-bf6a-928ffaf71d62 2.png` | frontend/src/data/mockData.js:2708 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/tuvan.png` | frontend/src/data/mockData.js:551 |
| `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/mây tre tuấn anh 2.jpg` | frontend/src/data/mockData.js:4009 |
| `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/mây tre tuấn anh 3.jpg` | frontend/src/data/mockData.js:4010 |
| `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/mây tre tuấn anh 8.jpg` | frontend/src/data/mockData.js:3978 |
| `frontend/download/images/Những thứ khác =_/logo.png` | frontend/src/data/homeData.js:14 |
| `frontend/download/images/Nón lá Hải Yến/cauchuyen.jpg` | frontend/src/data/mockData.js:512 |
| `frontend/download/images/Nón lá Hải Yến/header.png` | frontend/src/data/mockData.js:510 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1094 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1105 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1116 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1127 |
| `frontend/download/images/Nón lá Hải Yến/sanpham1(1).png` | frontend/src/data/mockData.js:2471 |
| `frontend/download/images/Nón lá Hải Yến/sanpham1.png` | frontend/src/data/mockData.js:2583 |
| `frontend/download/images/Nón lá Hải Yến/sanpham2(1).png` | frontend/src/data/mockData.js:2507 |
| `frontend/download/images/Nón lá Hải Yến/sanpham2.png` | frontend/src/data/mockData.js:2623 |
| `frontend/download/images/Nón lá Hải Yến/sanpham3(1).png` | frontend/src/data/mockData.js:2543 |
| `frontend/download/images/Nón lá Hải Yến/sanpham3.png` | frontend/src/data/mockData.js:2663 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/13a9135b86f4747caa379074b8e75c1a.jpg` | frontend/src/data/mockData.js:2544 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/5697234ebf017278e1822c8ba642f6eb.jpg` | frontend/src/data/mockData.js:2545 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/73b3233bf03162db6b2def182f57c13d.jpg` | frontend/src/data/mockData.js:2546 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/880aba263c1e8b7ab841699a68d84604.jpg` | frontend/src/data/mockData.js:2547 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/a1bd7121d54a7843659df2c363602619.jpg` | frontend/src/data/mockData.js:2548 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/Gemini_Generated_Image_u2vvbau2vvbau2vv.png` | frontend/src/data/mockData.js:2549 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/055a66d1-88fe-43ad-a56f-61aa052a1bee 1.png` | frontend/src/data/mockData.js:2624 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/055a66d1-88fe-43ad-a56f-61aa052a1bee 2.png` | frontend/src/data/mockData.js:2625 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/055a66d1-88fe-43ad-a56f-61aa052a1bee 3.png` | frontend/src/data/mockData.js:2626 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/5db0289b-153a-48c2-83ad-5d53fd9aa512 1.png` | frontend/src/data/mockData.js:2627 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/5db0289b-153a-48c2-83ad-5d53fd9aa512 2.png` | frontend/src/data/mockData.js:2628 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/Gemini_Generated_Image_ctqfjnctqfjnctqf.png` | frontend/src/data/mockData.js:2629 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/4aa60ed0336eb74c4642f647e218d9bc.jpg` | frontend/src/data/mockData.js:2508 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/7f56b2f839a9a71b9648eed46b91f4f3.jpg` | frontend/src/data/mockData.js:2509 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/8573761901ede3f56981fcfdf7bdd28e.jpg` | frontend/src/data/mockData.js:2510 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/b927d290f55145ef304759726f2e60e0.jpg` | frontend/src/data/mockData.js:2511 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/Gemini_Generated_Image_yn9tiyn9tiyn9tiy.png` | frontend/src/data/mockData.js:2512 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/vn-11134207-7ra0g-m8fwiy9daglj33.webp` | frontend/src/data/mockData.js:2513 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/0f73c43332baf52bbb6813186ba40ab9.jpg` | frontend/src/data/mockData.js:2472 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/1c4a289e8fe890e0fa53afa9a1a56230.jpg` | frontend/src/data/mockData.js:2473 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/791d034b2576e955f39da8580933dc04.jpg` | frontend/src/data/mockData.js:2474 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/a7b557f78c319cf88290faba32ce0e83.jpg` | frontend/src/data/mockData.js:2475 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/b4fcebfa-485e-41d8-8b89-7e78b7afdfab.jpg` | frontend/src/data/mockData.js:2476 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/e3102d2da76fd523e3e5266569586d22.jpg` | frontend/src/data/mockData.js:2477 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/007b9ebe0b6b7ece97d45b323b1ec4fc.jpg` | frontend/src/data/mockData.js:2584 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/9a372d85-1382-4829-b0de-9f06f59aef70 1.png` | frontend/src/data/mockData.js:2585 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/9a372d85-1382-4829-b0de-9f06f59aef70 2.png` | frontend/src/data/mockData.js:2586 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/b4aabff0dc0da96280d4ea0d2a76e7b7.jpg` | frontend/src/data/mockData.js:2587 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/e13220a99b088594b0eb3b8dff0800c4.jpg` | frontend/src/data/mockData.js:2588 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/Gemini_Generated_Image_207uij207uij207u.png` | frontend/src/data/mockData.js:2589 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 1.png` | frontend/src/data/mockData.js:2664 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 2.png` | frontend/src/data/mockData.js:2665 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 3.png` | frontend/src/data/mockData.js:2666 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 4.png` | frontend/src/data/mockData.js:2667 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 7.png` | frontend/src/data/mockData.js:2668 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/Gemini_Generated_Image_c3nyz0c3nyz0c3ny.png` | frontend/src/data/mockData.js:2669 |
| `frontend/download/images/Nón lá Hải Yến/tuavan.png` | frontend/src/data/mockData.js:511 |
| `frontend/download/images/pdf_avatars/LNX_LNX/rv_LNX01.jpg` | frontend/src/data/mockData.js:2274 |
| `frontend/download/images/pdf_avatars/LNX_LNX/rv_LNX02.jpg` | frontend/src/data/mockData.js:2283 |
| `frontend/download/images/pdf_avatars/LNX_LNX/rv_LNX03.jpg` | frontend/src/data/mockData.js:2292 |
| `frontend/download/images/pdf_avatars/LNX_SHV/rv_SHV01.jpg` | frontend/src/data/mockData.js:2301 |
| `frontend/download/images/pdf_avatars/LNX_SHV/rv_SHV02.jpg` | frontend/src/data/mockData.js:2310 |
| `frontend/download/images/pdf_avatars/LNX_SHV/rv_SHV03.jpg` | frontend/src/data/mockData.js:2319 |
| `frontend/download/images/pdf_avatars/NLC_HNLC/rv_HNLC01.jpg` | frontend/src/data/mockData.js:1977 |
| `frontend/download/images/pdf_avatars/NLC_HNLC/rv_HNLC02.jpg` | frontend/src/data/mockData.js:1986 |
| `frontend/download/images/pdf_avatars/NLC_HNLC/rv_HNLC03.jpg` | frontend/src/data/mockData.js:1995 |
| `frontend/download/images/pdf_avatars/NLC_NLHY/rv_NLHY01.jpg` | frontend/src/data/mockData.js:1923 |
| `frontend/download/images/pdf_avatars/NLC_NLHY/rv_NLHY02.jpg` | frontend/src/data/mockData.js:1932 |
| `frontend/download/images/pdf_avatars/NLC_NLHY/rv_NLHY03.jpg` | frontend/src/data/mockData.js:1941 |
| `frontend/download/images/pdf_avatars/NLC_NLTTH/rv_NLTTH01.jpg` | frontend/src/data/mockData.js:1950 |
| `frontend/download/images/pdf_avatars/NLC_NLTTH/rv_NLTTH02.jpg` | frontend/src/data/mockData.js:1959 |
| `frontend/download/images/pdf_avatars/NLC_NLTTH/rv_NLTTH03.jpg` | frontend/src/data/mockData.js:1968 |
| `frontend/download/images/pdf_features/SP_GBT_01/pdf-030-design.jpg` | frontend/src/data/mockData.js:4150 |
| `frontend/download/images/pdf_features/SP_GBT_01/pdf-030-material.jpg` | frontend/src/data/mockData.js:4149 |
| `frontend/download/images/pdf_features/SP_GBT_02/pdf-031-design.jpg` | frontend/src/data/mockData.js:4187 |
| `frontend/download/images/pdf_features/SP_GBT_02/pdf-031-material.jpg` | frontend/src/data/mockData.js:4186 |
| `frontend/download/images/pdf_features/SP_GBT_03/pdf-032-design.jpg` | frontend/src/data/mockData.js:4225 |
| `frontend/download/images/pdf_features/SP_GBT_03/pdf-032-material.jpg` | frontend/src/data/mockData.js:4224 |
| `frontend/download/images/pdf_features/SP_GBT_04/pdf-033-design.jpg` | frontend/src/data/mockData.js:4262 |
| `frontend/download/images/pdf_features/SP_GBT_04/pdf-033-material.jpg` | frontend/src/data/mockData.js:4261 |
| `frontend/download/images/pdf_features/SP_GBT_05/pdf-034-design.jpg` | frontend/src/data/mockData.js:4299 |
| `frontend/download/images/pdf_features/SP_GBT_05/pdf-034-material.jpg` | frontend/src/data/mockData.js:4298 |
| `frontend/download/images/pdf_features/SP_GBT_06/pdf-035-design.jpg` | frontend/src/data/mockData.js:4336 |
| `frontend/download/images/pdf_features/SP_GBT_06/pdf-035-material.jpg` | frontend/src/data/mockData.js:4335 |
| `frontend/download/images/pdf_features/SP_GBT_07/pdf-036-design.jpg` | frontend/src/data/mockData.js:4374 |
| `frontend/download/images/pdf_features/SP_GBT_07/pdf-036-material.jpg` | frontend/src/data/mockData.js:4373 |
| `frontend/download/images/pdf_features/SP_GBT_08/pdf-037-design.jpg` | frontend/src/data/mockData.js:4411 |
| `frontend/download/images/pdf_features/SP_GBT_08/pdf-037-material.jpg` | frontend/src/data/mockData.js:4410 |
| `frontend/download/images/pdf_features/SP_GBT_09/pdf-038-design.jpg` | frontend/src/data/mockData.js:4449 |
| `frontend/download/images/pdf_features/SP_GBT_09/pdf-038-material.jpg` | frontend/src/data/mockData.js:4448 |
| `frontend/download/images/pdf_features/SP_GBT_10/pdf-039-design.jpg` | frontend/src/data/mockData.js:4486 |
| `frontend/download/images/pdf_features/SP_GBT_10/pdf-039-material.jpg` | frontend/src/data/mockData.js:4485 |
| `frontend/download/images/pdf_features/SP_GBT_11/pdf-040-design.jpg` | frontend/src/data/mockData.js:4523 |
| `frontend/download/images/pdf_features/SP_GBT_11/pdf-040-material.jpg` | frontend/src/data/mockData.js:4522 |
| `frontend/download/images/pdf_features/SP_GBT_12/pdf-041-design.jpg` | frontend/src/data/mockData.js:4559 |
| `frontend/download/images/pdf_features/SP_GBT_12/pdf-041-material.jpg` | frontend/src/data/mockData.js:4558 |
| `frontend/download/images/pdf_features/SP_GBT_13/pdf-069-design.jpg` | frontend/src/data/mockData.js:4596 |
| `frontend/download/images/pdf_features/SP_GBT_13/pdf-069-material.jpg` | frontend/src/data/mockData.js:4595 |
| `frontend/download/images/pdf_features/SP_GBT_14/pdf-070-design.jpg` | frontend/src/data/mockData.js:4632 |
| `frontend/download/images/pdf_features/SP_GBT_14/pdf-070-material.jpg` | frontend/src/data/mockData.js:4631 |
| `frontend/download/images/pdf_features/SP_GBT_16/pdf-072-design.jpg` | frontend/src/data/mockData.js:4698 |
| `frontend/download/images/pdf_features/SP_GBT_16/pdf-072-material.jpg` | frontend/src/data/mockData.js:4697 |
| `frontend/download/images/pdf_features/SP_GBT_19/pdf-063-design.jpg` | frontend/src/data/mockData.js:4792 |
| `frontend/download/images/pdf_features/SP_GBT_19/pdf-063-material.jpg` | frontend/src/data/mockData.js:4791 |
| `frontend/download/images/pdf_features/SP_GBT_20/pdf-064-design.jpg` | frontend/src/data/mockData.js:4828 |
| `frontend/download/images/pdf_features/SP_GBT_20/pdf-064-material.jpg` | frontend/src/data/mockData.js:4827 |
| `frontend/download/images/pdf_features/SP_GBT_21/pdf-065-design.jpg` | frontend/src/data/mockData.js:4864 |
| `frontend/download/images/pdf_features/SP_GBT_21/pdf-065-material.jpg` | frontend/src/data/mockData.js:4863 |
| `frontend/download/images/pdf_features/SP_GBT_22/pdf-066-design.jpg` | frontend/src/data/mockData.js:4900 |
| `frontend/download/images/pdf_features/SP_GBT_22/pdf-066-material.jpg` | frontend/src/data/mockData.js:4899 |
| `frontend/download/images/pdf_features/SP_GBT_23/pdf-067-design.jpg` | frontend/src/data/mockData.js:4936 |
| `frontend/download/images/pdf_features/SP_GBT_23/pdf-067-material.jpg` | frontend/src/data/mockData.js:4935 |
| `frontend/download/images/pdf_features/SP_GBT_24/pdf-068-design.jpg` | frontend/src/data/mockData.js:4972 |
| `frontend/download/images/pdf_features/SP_GBT_24/pdf-068-material.jpg` | frontend/src/data/mockData.js:4971 |
| `frontend/download/images/pdf_features/SP_GBT_25/pdf-043-design.jpg` | frontend/src/data/mockData.js:5008 |
| `frontend/download/images/pdf_features/SP_GBT_25/pdf-043-material.jpg` | frontend/src/data/mockData.js:5007 |
| `frontend/download/images/pdf_features/SP_GBT_26/pdf-044-design.jpg` | frontend/src/data/mockData.js:5042 |
| `frontend/download/images/pdf_features/SP_GBT_26/pdf-044-material.jpg` | frontend/src/data/mockData.js:5041 |
| `frontend/download/images/pdf_features/SP_GBT_27/pdf-045-design.jpg` | frontend/src/data/mockData.js:5078 |
| `frontend/download/images/pdf_features/SP_GBT_27/pdf-045-material.jpg` | frontend/src/data/mockData.js:5077 |
| `frontend/download/images/pdf_features/SP_GBT_28/pdf-046-design.jpg` | frontend/src/data/mockData.js:5114 |
| `frontend/download/images/pdf_features/SP_GBT_28/pdf-046-material.jpg` | frontend/src/data/mockData.js:5113 |
| `frontend/download/images/pdf_features/SP_GBT_29/pdf-047-design.jpg` | frontend/src/data/mockData.js:5150 |
| `frontend/download/images/pdf_features/SP_GBT_29/pdf-047-material.jpg` | frontend/src/data/mockData.js:5149 |
| `frontend/download/images/pdf_features/SP_GBT_30/pdf-048-design.jpg` | frontend/src/data/mockData.js:5186 |
| `frontend/download/images/pdf_features/SP_GBT_30/pdf-048-material.jpg` | frontend/src/data/mockData.js:5185 |
| `frontend/download/images/pdf_features/SP_LNX_01/pdf-119-design.jpg` | frontend/src/data/mockData.js:5222 |
| `frontend/download/images/pdf_features/SP_LNX_01/pdf-119-material.jpg` | frontend/src/data/mockData.js:5221 |
| `frontend/download/images/pdf_features/SP_LNX_02/pdf-120-design.jpg` | frontend/src/data/mockData.js:5261 |
| `frontend/download/images/pdf_features/SP_LNX_02/pdf-120-material.jpg` | frontend/src/data/mockData.js:5260 |
| `frontend/download/images/pdf_features/SP_LNX_03/pdf-121-design.jpg` | frontend/src/data/mockData.js:5299 |
| `frontend/download/images/pdf_features/SP_LNX_03/pdf-121-material.jpg` | frontend/src/data/mockData.js:5298 |
| `frontend/download/images/pdf_features/SP_LNX_04/pdf-122-design.jpg` | frontend/src/data/mockData.js:5338 |
| `frontend/download/images/pdf_features/SP_LNX_04/pdf-122-material.jpg` | frontend/src/data/mockData.js:5337 |
| `frontend/download/images/pdf_features/SP_LNX_05/pdf-123-design.jpg` | frontend/src/data/mockData.js:5377 |
| `frontend/download/images/pdf_features/SP_LNX_05/pdf-123-material.jpg` | frontend/src/data/mockData.js:5376 |
| `frontend/download/images/pdf_features/SP_LNX_06/pdf-124-design.jpg` | frontend/src/data/mockData.js:5416 |
| `frontend/download/images/pdf_features/SP_LNX_06/pdf-124-material.jpg` | frontend/src/data/mockData.js:5415 |
| `frontend/download/images/pdf_features/SP_NLC_NDATG/pdf-114-design.jpg` | frontend/src/data/mockData.js:2728 |
| `frontend/download/images/pdf_features/SP_NLC_NDATG/pdf-114-material.jpg` | frontend/src/data/mockData.js:2727 |
| `frontend/download/images/pdf_features/SP_NLC_NDHV/pdf-111-design.jpg` | frontend/src/data/mockData.js:2609 |
| `frontend/download/images/pdf_features/SP_NLC_NDHV/pdf-111-material.jpg` | frontend/src/data/mockData.js:2608 |
| `frontend/download/images/pdf_features/SP_NLC_NDKQ/pdf-110-design.jpg` | frontend/src/data/mockData.js:2569 |
| `frontend/download/images/pdf_features/SP_NLC_NDKQ/pdf-110-material.jpg` | frontend/src/data/mockData.js:2568 |
| `frontend/download/images/pdf_features/SP_NLC_NDSTL/pdf-118-design.jpg` | frontend/src/data/mockData.js:2884 |
| `frontend/download/images/pdf_features/SP_NLC_NDSTL/pdf-118-material.jpg` | frontend/src/data/mockData.js:2883 |
| `frontend/download/images/pdf_features/SP_NLC_NDVN/pdf-112-design.jpg` | frontend/src/data/mockData.js:2649 |
| `frontend/download/images/pdf_features/SP_NLC_NDVN/pdf-112-material.jpg` | frontend/src/data/mockData.js:2648 |
| `frontend/download/images/pdf_features/SP_NLC_NHD/pdf-105-design.jpg` | frontend/src/data/mockData.js:3073 |
| `frontend/download/images/pdf_features/SP_NLC_NHD/pdf-105-material.jpg` | frontend/src/data/mockData.js:3072 |
| `frontend/download/images/pdf_features/SP_NLC_NHS/pdf-101-design.jpg` | frontend/src/data/mockData.js:2923 |
| `frontend/download/images/pdf_features/SP_NLC_NHS/pdf-101-material.jpg` | frontend/src/data/mockData.js:2922 |
| `frontend/download/images/pdf_features/SP_NLC_NKV/pdf-115-design.jpg` | frontend/src/data/mockData.js:2767 |
| `frontend/download/images/pdf_features/SP_NLC_NKV/pdf-115-material.jpg` | frontend/src/data/mockData.js:2766 |
| `frontend/download/images/pdf_features/SP_NLC_NLHTC/pdf-116-design.jpg` | frontend/src/data/mockData.js:2806 |
| `frontend/download/images/pdf_features/SP_NLC_NLHTC/pdf-116-material.jpg` | frontend/src/data/mockData.js:2805 |
| `frontend/download/images/pdf_features/SP_NLC_NVDBL/pdf-113-design.jpg` | frontend/src/data/mockData.js:2689 |
| `frontend/download/images/pdf_features/SP_NLC_NVDBL/pdf-113-material.jpg` | frontend/src/data/mockData.js:2688 |
| `frontend/download/images/pdf_features/SP_NLC_NXD/pdf-117-design.jpg` | frontend/src/data/mockData.js:2845 |
| `frontend/download/images/pdf_features/SP_NLC_NXD/pdf-117-material.jpg` | frontend/src/data/mockData.js:2844 |
| `frontend/download/images/pdf_features/SP_NLC_NXH/pdf-106-design.jpg` | frontend/src/data/mockData.js:3112 |
| `frontend/download/images/pdf_features/SP_NLC_NXH/pdf-106-material.jpg` | frontend/src/data/mockData.js:3111 |
| `frontend/download/images/pdf_features/SP_NLC_SN/pdf-103-design.jpg` | frontend/src/data/mockData.js:3000 |
| `frontend/download/images/pdf_features/SP_NLC_SN/pdf-103-material.jpg` | frontend/src/data/mockData.js:2999 |
| `frontend/download/images/pdf_features/SP_QCS_QHVCC/pdf-085-design.jpg` | frontend/src/data/mockData.js:3458 |
| `frontend/download/images/pdf_features/SP_QCS_QHVCC/pdf-085-material.jpg` | frontend/src/data/mockData.js:3457 |
| `frontend/download/images/pdf_features/SP_QCS_QHXDG/pdf-093-design.jpg` | frontend/src/data/mockData.js:3750 |
| `frontend/download/images/pdf_features/SP_QCS_QHXDG/pdf-093-material.jpg` | frontend/src/data/mockData.js:3749 |
| `frontend/download/images/pdf_features/SP_QCS_QKH/chat-lieu.jpg` | frontend/src/data/mockData.js:3358 |
| `frontend/download/images/pdf_features/SP_QCS_QKH/kieu-dang.jpg` | frontend/src/data/mockData.js:3359 |
| `frontend/download/images/pdf_features/SP_QCS_QKHCT/pdf-090-design.jpg` | frontend/src/data/mockData.js:3641 |
| `frontend/download/images/pdf_features/SP_QCS_QKHCT/pdf-090-material.jpg` | frontend/src/data/mockData.js:3640 |
| `frontend/download/images/pdf_features/SP_QCS_QLDH/pdf-091-design.jpg` | frontend/src/data/mockData.js:3678 |
| `frontend/download/images/pdf_features/SP_QCS_QLDH/pdf-091-material.jpg` | frontend/src/data/mockData.js:3677 |
| `frontend/download/images/pdf_features/SP_QCS_QLTDG/pdf-094-design.jpg` | frontend/src/data/mockData.js:3150 |
| `frontend/download/images/pdf_features/SP_QCS_QLTDG/pdf-094-material.jpg` | frontend/src/data/mockData.js:3149 |
| `frontend/download/images/pdf_features/SP_QCS_QMDNX/pdf-096-design.jpg` | frontend/src/data/mockData.js:3224 |
| `frontend/download/images/pdf_features/SP_QCS_QMDNX/pdf-096-material.jpg` | frontend/src/data/mockData.js:3223 |
| `frontend/download/images/pdf_features/SP_QCS_QNG/pdf-083-design.jpg` | frontend/src/data/mockData.js:3385 |
| `frontend/download/images/pdf_features/SP_QCS_QNG/pdf-083-material.jpg` | frontend/src/data/mockData.js:3384 |
| `frontend/download/images/pdf_features/SP_QCS_QPLDT/pdf-095-design.jpg` | frontend/src/data/mockData.js:3187 |
| `frontend/download/images/pdf_features/SP_QCS_QPLDT/pdf-095-material.jpg` | frontend/src/data/mockData.js:3186 |
| `frontend/download/images/pdf_features/SP_QCS_QSVCP/pdf-088-design.jpg` | frontend/src/data/mockData.js:3569 |
| `frontend/download/images/pdf_features/SP_QCS_QSVCP/pdf-088-material.jpg` | frontend/src/data/mockData.js:3568 |
| `frontend/download/images/pdf_features/SP_QCS_QTPT/pdf-087-design.jpg` | frontend/src/data/mockData.js:3532 |
| `frontend/download/images/pdf_features/SP_QCS_QTPT/pdf-087-material.jpg` | frontend/src/data/mockData.js:3531 |
| `frontend/download/images/pdf_features/SP_QCS_QTRUYENTHONG/pdf-086-design.jpg` | frontend/src/data/mockData.js:3495 |
| `frontend/download/images/pdf_features/SP_QCS_QTRUYENTHONG/pdf-086-material.jpg` | frontend/src/data/mockData.js:3494 |
| `frontend/download/images/pdf_features/SP_QCS_QTT/pdf-084-design.jpg` | frontend/src/data/mockData.js:3421 |
| `frontend/download/images/pdf_features/SP_QCS_QTT/pdf-084-material.jpg` | frontend/src/data/mockData.js:3420 |
| `frontend/download/images/pdf_features/SP_QCS_QTVHL/pdf-089-design.jpg` | frontend/src/data/mockData.js:3606 |
| `frontend/download/images/pdf_features/SP_QCS_QTVHL/pdf-089-material.jpg` | frontend/src/data/mockData.js:3605 |
| `frontend/download/images/pdf_features/SP_QCS_QVXL/pdf-092-design.jpg` | frontend/src/data/mockData.js:3713 |
| `frontend/download/images/pdf_features/SP_QCS_QVXL/pdf-092-material.jpg` | frontend/src/data/mockData.js:3712 |
| `frontend/download/images/pdf_gallery/SP_GBT_09/pdf-038-xref-67549.jpg` | frontend/src/data/mockData.js:4466 |
| `frontend/download/images/pdf_gallery/SP_GBT_09/pdf-038-xref-67585.jpg` | frontend/src/data/mockData.js:4464 |
| `frontend/download/images/pdf_gallery/SP_GBT_09/pdf-038-xref-67599.jpg` | frontend/src/data/mockData.js:4465 |
| `frontend/download/images/pdf_gallery/SP_GBT_10/pdf-039-xref-69474.jpg` | frontend/src/data/mockData.js:4501 |
| `frontend/download/images/pdf_gallery/SP_GBT_10/pdf-039-xref-69510.jpg` | frontend/src/data/mockData.js:4503 |
| `frontend/download/images/pdf_gallery/SP_GBT_10/pdf-039-xref-69520.jpg` | frontend/src/data/mockData.js:4502 |
| `frontend/download/images/pdf_gallery/SP_GBT_11/pdf-040-xref-71353.jpg` | frontend/src/data/mockData.js:4538 |
| `frontend/download/images/pdf_gallery/SP_GBT_11/pdf-040-xref-71391.jpg` | frontend/src/data/mockData.js:4539 |
| `frontend/download/images/pdf_gallery/SP_GBT_12/pdf-041-xref-65766.jpg` | frontend/src/data/mockData.js:4574 |
| `frontend/download/images/pdf_gallery/SP_GBT_12/pdf-041-xref-73280.jpg` | frontend/src/data/mockData.js:4575 |
| `frontend/download/images/pdf_gallery/SP_GBT_12/pdf-041-xref-73290.jpg` | frontend/src/data/mockData.js:4576 |
| `frontend/download/images/pdf_gallery/SP_GBT_13/pdf-069-xref-128122.jpg` | frontend/src/data/mockData.js:4611 |
| `frontend/download/images/pdf_gallery/SP_GBT_13/pdf-069-xref-128168.jpg` | frontend/src/data/mockData.js:4612 |
| `frontend/download/images/pdf_gallery/SP_GBT_14/pdf-070-xref-130027.jpg` | frontend/src/data/mockData.js:4647 |
| `frontend/download/images/pdf_gallery/SP_GBT_14/pdf-070-xref-130069.jpg` | frontend/src/data/mockData.js:4648 |
| `frontend/download/images/pdf_gallery/SP_GBT_19/pdf-063-xref-117380.jpg` | frontend/src/data/mockData.js:4807 |
| `frontend/download/images/pdf_gallery/SP_GBT_19/pdf-063-xref-117394.jpg` | frontend/src/data/mockData.js:4808 |
| `frontend/download/images/pdf_gallery/SP_GBT_20/pdf-064-xref-117386.jpg` | frontend/src/data/mockData.js:4844 |
| `frontend/download/images/pdf_gallery/SP_GBT_20/pdf-064-xref-119141.jpg` | frontend/src/data/mockData.js:4843 |
| `frontend/download/images/pdf_gallery/SP_GBT_21/pdf-065-xref-120932.jpg` | frontend/src/data/mockData.js:4880 |
| `frontend/download/images/pdf_gallery/SP_GBT_21/pdf-065-xref-120970.jpg` | frontend/src/data/mockData.js:4879 |
| `frontend/download/images/pdf_gallery/SP_GBT_22/pdf-066-xref-122829.jpg` | frontend/src/data/mockData.js:4916 |
| `frontend/download/images/pdf_gallery/SP_GBT_22/pdf-066-xref-122833.jpg` | frontend/src/data/mockData.js:4915 |
| `frontend/download/images/pdf_gallery/SP_GBT_23/pdf-067-xref-124550.jpg` | frontend/src/data/mockData.js:4952 |
| `frontend/download/images/pdf_gallery/SP_GBT_23/pdf-067-xref-124588.jpg` | frontend/src/data/mockData.js:4951 |
| `frontend/download/images/pdf_gallery/SP_GBT_24/pdf-068-xref-126297.jpg` | frontend/src/data/mockData.js:4988 |
| `frontend/download/images/pdf_gallery/SP_GBT_24/pdf-068-xref-126341.jpg` | frontend/src/data/mockData.js:4987 |
| `frontend/download/images/pdf_gallery/SP_GBT_26/pdf-044-xref-78113.jpg` | frontend/src/data/mockData.js:5058 |
| `frontend/download/images/pdf_gallery/SP_GBT_26/pdf-044-xref-78151.jpg` | frontend/src/data/mockData.js:5057 |
| `frontend/download/images/pdf_gallery/SP_GBT_27/pdf-045-xref-79946.jpg` | frontend/src/data/mockData.js:5093 |
| `frontend/download/images/pdf_gallery/SP_GBT_27/pdf-045-xref-79956.jpg` | frontend/src/data/mockData.js:5094 |
| `frontend/download/images/pdf_gallery/SP_GBT_28/pdf-046-xref-81795.jpg` | frontend/src/data/mockData.js:5129 |
| `frontend/download/images/pdf_gallery/SP_GBT_28/pdf-046-xref-81805.jpg` | frontend/src/data/mockData.js:5130 |
| `frontend/download/images/pdf_gallery/SP_GBT_29/pdf-047-xref-83616.jpg` | frontend/src/data/mockData.js:5166 |
| `frontend/download/images/pdf_gallery/SP_GBT_29/pdf-047-xref-83654.jpg` | frontend/src/data/mockData.js:5165 |
| `frontend/download/images/pdf_gallery/SP_GBT_30/pdf-048-xref-85453.jpg` | frontend/src/data/mockData.js:5202 |
| `frontend/download/images/pdf_gallery/SP_GBT_30/pdf-048-xref-85491.jpg` | frontend/src/data/mockData.js:5201 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHVCC/pdf-085-xref-171436.jpg` | frontend/src/data/mockData.js:3474 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHVCC/pdf-085-xref-171440.jpg` | frontend/src/data/mockData.js:3473 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHVCC/pdf-085-xref-171444.jpg` | frontend/src/data/mockData.js:3475 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHXDG/pdf-093-xref-188530.jpg` | frontend/src/data/mockData.js:3766 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHXDG/pdf-093-xref-188534.jpg` | frontend/src/data/mockData.js:3765 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHXDG/pdf-093-xref-188542.jpg` | frontend/src/data/mockData.js:3767 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKH/pdf-082-xref-165485.jpg` | frontend/src/data/mockData.js:3364 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKH/pdf-082-xref-165497.jpg` | frontend/src/data/mockData.js:3365 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKHCT/pdf-090-xref-181977.jpg` | frontend/src/data/mockData.js:3656 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKHCT/pdf-090-xref-181983.jpg` | frontend/src/data/mockData.js:3658 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKHCT/pdf-090-xref-181987.jpg` | frontend/src/data/mockData.js:3657 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLDH/pdf-091-xref-184168.jpg` | frontend/src/data/mockData.js:3693 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLTDG/pdf-094-xref-190377.jpg` | frontend/src/data/mockData.js:3165 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLTDG/pdf-094-xref-190387.jpg` | frontend/src/data/mockData.js:3167 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLTDG/pdf-094-xref-190391.jpg` | frontend/src/data/mockData.js:3166 |
| `frontend/download/images/pdf_gallery/SP_QCS_QMDNX/pdf-096-xref-194827.jpg` | frontend/src/data/mockData.js:3239 |
| `frontend/download/images/pdf_gallery/SP_QCS_QNG/pdf-083-xref-167396.jpg` | frontend/src/data/mockData.js:3401 |
| `frontend/download/images/pdf_gallery/SP_QCS_QNG/pdf-083-xref-167400.jpg` | frontend/src/data/mockData.js:3400 |
| `frontend/download/images/pdf_gallery/SP_QCS_QPLDT/pdf-095-xref-192676.jpg` | frontend/src/data/mockData.js:3202 |
| `frontend/download/images/pdf_gallery/SP_QCS_QPLDT/pdf-095-xref-192682.jpg` | frontend/src/data/mockData.js:3204 |
| `frontend/download/images/pdf_gallery/SP_QCS_QPLDT/pdf-095-xref-192686.jpg` | frontend/src/data/mockData.js:3203 |
| `frontend/download/images/pdf_gallery/SP_QCS_QSVCP/pdf-088-xref-177551.jpg` | frontend/src/data/mockData.js:3585 |
| `frontend/download/images/pdf_gallery/SP_QCS_QSVCP/pdf-088-xref-177561.jpg` | frontend/src/data/mockData.js:3586 |
| `frontend/download/images/pdf_gallery/SP_QCS_QSVCP/pdf-088-xref-177565.jpg` | frontend/src/data/mockData.js:3584 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTPT/pdf-087-xref-175390.jpg` | frontend/src/data/mockData.js:3548 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTPT/pdf-087-xref-175396.jpg` | frontend/src/data/mockData.js:3549 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTPT/pdf-087-xref-175400.jpg` | frontend/src/data/mockData.js:3547 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTRUYENTHONG/pdf-086-xref-173457.jpg` | frontend/src/data/mockData.js:3511 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTRUYENTHONG/pdf-086-xref-173463.jpg` | frontend/src/data/mockData.js:3512 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTRUYENTHONG/pdf-086-xref-173467.jpg` | frontend/src/data/mockData.js:3510 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTT/pdf-084-xref-169385.jpg` | frontend/src/data/mockData.js:3436 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTT/pdf-084-xref-169391.jpg` | frontend/src/data/mockData.js:3438 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTT/pdf-084-xref-169395.jpg` | frontend/src/data/mockData.js:3437 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTVHL/pdf-089-xref-179814.jpg` | frontend/src/data/mockData.js:3621 |
| `frontend/download/images/pdf_gallery/SP_QCS_QVXL/pdf-092-xref-186359.jpg` | frontend/src/data/mockData.js:3728 |
| `frontend/download/images/pdf_gallery/SP_QCS_QVXL/pdf-092-xref-186365.jpg` | frontend/src/data/mockData.js:3730 |
| `frontend/download/images/pdf_gallery/SP_QCS_QVXL/pdf-092-xref-186369.jpg` | frontend/src/data/mockData.js:3729 |
| `frontend/download/images/product_detail/pdf42_embroidery.jpg` | frontend/src/pages/ProductDetailPage.jsx:982 |
| `frontend/download/images/product_detail/prod_process_banner.jpg` | frontend/src/pages/ProductDetailPage.jsx:1122 |
| `frontend/download/images/product_detail/prod_sample_main.jpg` | frontend/src/data/mockData.js:5674 |
| `frontend/download/images/product_detail/prod_sample_thumb1.jpg` | frontend/src/data/mockData.js:5675 |
| `frontend/download/images/product_detail/prod_sample_thumb2.jpg` | frontend/src/data/mockData.js:5676 |
| `frontend/download/images/product_detail/prod_sample_thumb3.jpg` | frontend/src/data/mockData.js:5677 |
| `frontend/download/images/product_detail/prod_sample_thumb4.jpg` | frontend/src/data/mockData.js:5678 |
| `frontend/download/images/Quạt Chàng Sơn/cauchuyen.png` | frontend/src/data/mockData.js:632 |
| `frontend/download/images/Quạt Chàng Sơn/header.png` | frontend/src/data/mockData.js:630 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1226 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1237 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1248 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1259 |
| `frontend/download/images/Quạt Chàng Sơn/NguyenMinh.jpg` | frontend/src/data/mockData.js:2013 |
| `frontend/download/images/Quạt Chàng Sơn/PhamMyAnh.jpg` | frontend/src/data/mockData.js:2004 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham1.png` | frontend/src/data/mockData.js:3164 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham2.png` | frontend/src/data/mockData.js:3201 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham3.png` | frontend/src/data/mockData.js:3238 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham4.png` | frontend/src/data/mockData.js:3269 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham5.png` | frontend/src/data/mockData.js:3299 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham6.png` | frontend/src/data/mockData.js:3329 |
| `frontend/download/images/Quạt Chàng Sơn/ThaiLinh.jpg` | frontend/src/data/mockData.js:2022 |
| `frontend/download/images/Quạt Chàng Sơn/tuvan.png` | frontend/src/data/mockData.js:631 |
| `frontend/download/images/Quạt Phương/cauchuyen.png` | frontend/src/data/mockData.js:712 |
| `frontend/download/images/Quạt Phương/header.png` | frontend/src/data/mockData.js:710 |
| `frontend/download/images/Quạt Phương/LuongAnhTuan.avif` | frontend/src/data/mockData.js:2067 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1314 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1325 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1336 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1347 |
| `frontend/download/images/Quạt Phương/sanpham1.png` | frontend/src/data/mockData.js:3583 |
| `frontend/download/images/Quạt Phương/sanpham2.png` | frontend/src/data/mockData.js:3620 |
| `frontend/download/images/Quạt Phương/sanpham3.png` | frontend/src/data/mockData.js:3655 |
| `frontend/download/images/Quạt Phương/sanpham4.png` | frontend/src/data/mockData.js:3692 |
| `frontend/download/images/Quạt Phương/sanpham5.png` | frontend/src/data/mockData.js:3727 |
| `frontend/download/images/Quạt Phương/sanpham6.png` | frontend/src/data/mockData.js:3764 |
| `frontend/download/images/Quạt Phương/TranMinhAnh.jpg` | frontend/src/data/mockData.js:2058 |
| `frontend/download/images/Quạt Phương/tuvan.png` | frontend/src/data/mockData.js:711 |
| `frontend/download/images/Quạt Phương/VuThuPhuong.webp` | frontend/src/data/mockData.js:2076 |
| `frontend/download/images/Quạt Từ Tâm/cauchuyen.png` | frontend/src/data/mockData.js:672 |
| `frontend/download/images/Quạt Từ Tâm/header.png` | frontend/src/data/mockData.js:670 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1270 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1281 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1292 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1303 |
| `frontend/download/images/Quạt Từ Tâm/NguyenHaiLinh.jpg` | frontend/src/data/mockData.js:2049 |
| `frontend/download/images/Quạt Từ Tâm/sanpham1.png` | frontend/src/data/mockData.js:3363 |
| `frontend/download/images/Quạt Từ Tâm/sanpham2.png` | frontend/src/data/mockData.js:3399 |
| `frontend/download/images/Quạt Từ Tâm/sanpham3.png` | frontend/src/data/mockData.js:3435 |
| `frontend/download/images/Quạt Từ Tâm/sanpham4.png` | frontend/src/data/mockData.js:3472 |
| `frontend/download/images/Quạt Từ Tâm/sanpham5.png` | frontend/src/data/mockData.js:3509 |
| `frontend/download/images/Quạt Từ Tâm/sanpham6.png` | frontend/src/data/mockData.js:3546 |
| `frontend/download/images/Quạt Từ Tâm/ThanhNguyen.jpg` | frontend/src/data/mockData.js:2040 |
| `frontend/download/images/Quạt Từ Tâm/TranPhuongNhi.jpg` | frontend/src/data/mockData.js:2031 |
| `frontend/download/images/Quạt Từ Tâm/tuvan.png` | frontend/src/data/mockData.js:671 |
| `frontend/download/images/Silk Hạ Vy/cauchuyen.png` | frontend/src/data/mockData.js:1062 |
| `frontend/download/images/Silk Hạ Vy/header.jpg` | frontend/src/data/mockData.js:1060 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1710 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1721 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1732 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1743 |
| `frontend/download/images/Silk Hạ Vy/sanpham1.png` | frontend/src/data/mockData.js:5465 |
| `frontend/download/images/Silk Hạ Vy/sanpham2.png` | frontend/src/data/mockData.js:5500 |
| `frontend/download/images/Silk Hạ Vy/sanpham3.png` | frontend/src/data/mockData.js:5535 |
| `frontend/download/images/Silk Hạ Vy/sanpham4.png` | frontend/src/data/mockData.js:5570 |
| `frontend/download/images/Silk Hạ Vy/sanpham5.png` | frontend/src/data/mockData.js:5605 |
| `frontend/download/images/Silk Hạ Vy/sanpham6.png` | frontend/src/data/mockData.js:5639 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/795697006_122177387540702573_3171883097456989638_n.jpg` | frontend/src/data/mockData.js:5536 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/809039048_122177387150702573_1189098113739789235_n.jpg` | frontend/src/data/mockData.js:5537 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/813804480_122177387390702573_2589954493518617100_n.jpg` | frontend/src/data/mockData.js:5538 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/813825139_122177387336702573_7436785209372892926_n.jpg` | frontend/src/data/mockData.js:5539 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/814660566_122177387426702573_2830616196582631165_n.jpg` | frontend/src/data/mockData.js:5540 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/717215950_122168579858702573_8474644397043665798_n.jpg` | frontend/src/data/mockData.js:5571 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/720467700_122168578310702573_2103647288352647541_n.jpg` | frontend/src/data/mockData.js:5572 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/bang-mau-lua-to-tam-nha-xa-bo-cong-anh-7.png` | frontend/src/data/mockData.js:5573 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/bang-mau-lua-to-tam-nha-xa-bo-cong-anh-8-768x768.png` | frontend/src/data/mockData.js:5574 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/bang-mau-lua-to-tam-nha-xa-bo-cong-anh-9-1-768x768.png` | frontend/src/data/mockData.js:5575 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/844190415_122179810964702573_494931536953348333_n.jpg` | frontend/src/data/mockData.js:5606 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/844544968_122179810382702573_3519689400050281184_n.jpg` | frontend/src/data/mockData.js:5607 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/847908691_122179810634702573_4389983655385714811_n.jpg` | frontend/src/data/mockData.js:5608 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/image 52.png` | frontend/src/data/mockData.js:5609 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/839960533_122179315058702573_8463421776564176194_n.jpg` | frontend/src/data/mockData.js:5640 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/840094840_122179313270702573_1798523357816591698_n.jpg` | frontend/src/data/mockData.js:5641 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/841013291_122179313234702573_8051992405890746565_n.jpg` | frontend/src/data/mockData.js:5642 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/842308676_122179317332702573_199721434829700862_n.jpg` | frontend/src/data/mockData.js:5643 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/842329010_122179317548702573_3893334904783706225_n.jpg` | frontend/src/data/mockData.js:5644 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/115.png` | frontend/src/data/mockData.js:5466 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/116.png` | frontend/src/data/mockData.js:5467 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/118.png` | frontend/src/data/mockData.js:5468 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/119.png` | frontend/src/data/mockData.js:5469 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/image 59.png` | frontend/src/data/mockData.js:5470 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/750055114_122171963312702573_5773349679271158708_n.jpg` | frontend/src/data/mockData.js:5501 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/750975528_122171962916702573_1670322622917590725_n.jpg` | frontend/src/data/mockData.js:5502 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/751403216_122171963600702573_2332413209466842260_n.jpg` | frontend/src/data/mockData.js:5503 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/798797572_122176819682702573_472252852712524341_n.jpg` | frontend/src/data/mockData.js:5504 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/vn-11134207-7ras8-m15e69mtlxmj33.webp` | frontend/src/data/mockData.js:5505 |
| `frontend/download/images/Silk Hạ Vy/tuvan.jpg` | frontend/src/data/mockData.js:1061 |
| `frontend/download/images/Trang chủ/banner.jpg` | frontend/src/data/homeData.js:13 |
| `frontend/download/images/Trang chủ/header.png` | frontend/src/data/homeData.js:1 |
| `frontend/download/images/Trang chủ/langnghe1.jpg` | frontend/src/data/homeData.js:8 |
| `frontend/download/images/Trang chủ/langnghe2.jpg` | frontend/src/data/homeData.js:9 |
| `frontend/download/images/Trang chủ/langnghe3.png` | frontend/src/data/homeData.js:10 |
| `frontend/download/images/Trang chủ/langnghe4.jpeg` | frontend/src/data/homeData.js:11 |
| `frontend/download/images/Trang chủ/langnghe5.jpeg` | frontend/src/data/homeData.js:12 |
| `frontend/download/images/Trang chủ/sanphamnoibat1.png` | frontend/src/data/homeData.js:2 ; frontend/src/data/mockData.js:2340 |
| `frontend/download/images/Trang chủ/sanphamnoibat2.jpg` | frontend/src/data/homeData.js:3 ; frontend/src/data/mockData.js:107 ; frontend/src/data/mockData.js:2373 |
| `frontend/download/images/Trang chủ/sanphamnoibat3.png` | frontend/src/data/homeData.js:4 |
| `frontend/download/images/Trang chủ/sanphamnoibat4.jpeg` | frontend/src/data/homeData.js:5 ; frontend/src/data/mockData.js:2406 |
| `frontend/download/images/Trang chủ/sanphamnoibat5.jpeg` | frontend/src/data/homeData.js:6 ; frontend/src/data/mockData.js:2439 |
| `frontend/download/images/Trang chủ/vechungtoi.jpg` | frontend/src/data/homeData.js:7 |
| `frontend/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 1.jpg` | frontend/src/data/mockData.js:132 |
| `frontend/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 2.jpeg` | frontend/src/data/mockData.js:136 |
| `frontend/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 3.jpg` | frontend/src/data/mockData.js:140 |
| `frontend/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 4.jpeg` | frontend/src/data/mockData.js:144 |
| `frontend/download/images/Trang làng nghề/Làng gốm/header.png` | frontend/src/data/mockData.js:125 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 1.jpg` | frontend/src/data/mockData.js:356 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 2.jpg` | frontend/src/data/mockData.js:367 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 3.jpg` | frontend/src/data/mockData.js:378 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 4.jpg` | frontend/src/data/mockData.js:389 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 5.jpg` | frontend/src/data/mockData.js:400 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 6.jpg` | frontend/src/data/mockData.js:411 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 7.jpg` | frontend/src/data/mockData.js:422 |
| `frontend/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 8.jpg` | frontend/src/data/mockData.js:433 |
| `frontend/download/images/Trang làng nghề/Làng lụa/chuyện làng nghề 1.jpg` | frontend/src/data/mockData.js:165 |
| `frontend/download/images/Trang làng nghề/Làng lụa/chuyện làng nghề 2.jpg` | frontend/src/data/mockData.js:169 |
| `frontend/download/images/Trang làng nghề/Làng lụa/header.png` | frontend/src/data/mockData.js:158 |
| `frontend/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 1.jpg` | frontend/src/data/mockData.js:444 |
| `frontend/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 2.jpeg` | frontend/src/data/mockData.js:455 |
| `frontend/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 3.jpg` | frontend/src/data/mockData.js:466 |
| `frontend/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 4.jpeg` | frontend/src/data/mockData.js:477 |
| `frontend/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 5.jpg` | frontend/src/data/mockData.js:488 |
| `frontend/download/images/Trang làng nghề/Làng nón/chuyenlangnghe1.jpg` | frontend/src/data/mockData.js:41 |
| `frontend/download/images/Trang làng nghề/Làng nón/chuyenlangnghe2.jpeg` | frontend/src/data/mockData.js:45 |
| `frontend/download/images/Trang làng nghề/Làng nón/chuyenlangnghe3.jpg` | frontend/src/data/mockData.js:49 |
| `frontend/download/images/Trang làng nghề/Làng nón/header.png` | frontend/src/data/mockData.js:34 |
| `frontend/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 1.jpg` | frontend/src/data/mockData.js:191 |
| `frontend/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 2.jpg` | frontend/src/data/mockData.js:202 |
| `frontend/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 3.jpg` | frontend/src/data/mockData.js:213 |
| `frontend/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 4.jpg` | frontend/src/data/mockData.js:224 |
| `frontend/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 5.jpg` | frontend/src/data/mockData.js:235 |
| `frontend/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 1.jpg` | frontend/src/data/mockData.js:70 |
| `frontend/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 2.jpg` | frontend/src/data/mockData.js:74 |
| `frontend/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 3.jpeg` | frontend/src/data/mockData.js:78 |
| `frontend/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 4.jpeg` | frontend/src/data/mockData.js:82 |
| `frontend/download/images/Trang làng nghề/Làng quạt/header.png` | frontend/src/data/mockData.js:63 |
| `frontend/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 1.jpg` | frontend/src/data/mockData.js:246 |
| `frontend/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 2.jpg` | frontend/src/data/mockData.js:257 |
| `frontend/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 3.jpg` | frontend/src/data/mockData.js:279 |
| `frontend/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 4.jpg` | frontend/src/data/mockData.js:268 |
| `frontend/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 5.jpeg` | frontend/src/data/mockData.js:290 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/chuyện làng nghề 1.jpg` | frontend/src/data/mockData.js:103 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/chuyện làng nghề 3.jpg` | frontend/src/data/mockData.js:111 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/header.png` | frontend/src/data/mockData.js:96 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/quy trình sản xuất 1.jpg` | frontend/src/data/mockData.js:301 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/quy trình sản xuất 2.jpg` | frontend/src/data/mockData.js:312 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/quy trình sản xuất 3.jpg` | frontend/src/data/mockData.js:323 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/quy trình sản xuất 4.jpg` | frontend/src/data/mockData.js:334 |
| `frontend/download/images/Trang làng nghề/Mây tre đan/quy trình sản xuất 5.jpg` | frontend/src/data/mockData.js:345 |
| `frontend/src/assets/floral-sketch-pattern.svg` | frontend/src/styles-facility.css:1433 ; frontend/src/styles.css:121 ; frontend/src/styles.css:294 ; frontend/src/styles.css:2500 |

## Ảnh chưa thấy tham chiếu hoặc bản sao được tham chiếu

Mở các ảnh dưới đây trước khi gắn vào sản phẩm. Tên thư mục chỉ là gợi ý; so đúng sản phẩm trong trang PDF. Bản sao trùng byte của ảnh đã tham chiếu được tra trong CSV, không liệt kê lại ở đây.

### frontend/download/images (144 file)

- `frontend/download/images/avatar feedback/23d8a6e0fe98bf8e9dc9c5ddeef1f82b.jpg`
- `frontend/download/images/avatar feedback/3ee5214ec554ae3f46715d918f9241f2.jpg`
- `frontend/download/images/avatar feedback/457cbd271f7b476da7f74e4e36d8a520-17382377985921857824300-1738315834000-17383158342481508849017.webp`
- `frontend/download/images/avatar feedback/47c1215790e50c3c2ec78ab1a920eec5.jpg`
- `frontend/download/images/avatar feedback/4dc0e31fc589e2d5676430b69f77d0b4.jpg`
- `frontend/download/images/avatar feedback/615615d6e0050bb8f788bfeb905bb9f4.jpg`
- `frontend/download/images/avatar feedback/7aad5442572a1c9273d84aca1eb4c92c.jpg`
- `frontend/download/images/avatar feedback/7bf34a78950d1001a8a0d004bae0aa8e.jpg`
- `frontend/download/images/avatar feedback/7cb9cc18174c0007710ceb8f42709b90.jpg`
- `frontend/download/images/avatar feedback/8674d6914034650976001f3e825814a4.jpg`
- `frontend/download/images/avatar feedback/926eff5136d49a7fa37bee86ec529015.jpg`
- `frontend/download/images/avatar feedback/a4073b028e19ce37be2f0aa3d0275f2d.jpg`
- `frontend/download/images/avatar feedback/cc4c602b4bd371bbe2c6e1a0b55f1378.jpg`
- `frontend/download/images/avatar feedback/Ellipse 14.png`
- `frontend/download/images/avatar feedback/Ellipse 15.png`
- `frontend/download/images/avatar feedback/Ellipse 16.png`
- `frontend/download/images/booking/booking_header_banner.jpg`
- `frontend/download/images/CS hoàng anh ceramics/nanglucsanxuat.png`
- `frontend/download/images/CS Mây tre việt quang/Khay mây đựng đồ.jpg`
- `frontend/download/images/CS Mây tre việt quang/mây tre phú vinh 6 (1).jpg`
- `frontend/download/images/CS mây tre đan tuấn anh/becc5db3-6cb4-42b3-b1ed-f4ab93480539.jpg`
- `frontend/download/images/CS mây tre đan tuấn anh/nghe-lam-may-tre-dan-4.jpg`
- `frontend/download/images/CS mây tre đan tuấn anh/nghe-lam-may-tre-dan-9(1).jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/796276096_1550482137094194_890469782950580838_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/799362884_1550482633760811_6543926865754870388_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/813583099_1549998203809254_2264650068140348175_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/813715602_1550482253760849_8848853439442916768_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/813872185_1549029713906103_1556491787176660784_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/814507603_1550482290427512_5448733924153660389_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/814507604_1550481860427555_7469618345703197587_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/814608750_1550482583760816_2764335875385319888_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/819329300_1555348489940892_3698534140508360303_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/819994750_1555348459940895_8614219367391165459_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/830435425_1561339566008451_4483053248400709707_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Bách Ngân Hỷ/unnamed.webp`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/1.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/2.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/3.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/4.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/5.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/6.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/image1_11.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm Hải Long/tru_so_nodacook_tai_ha_noi_0.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/481448062_3888044524771099_6318427116720206636_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/481814940_3889564834619068_7517335867900401055_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/481980997_3889564837952401_198953318270983921_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/482084516_3889564821285736_2416713987192057274_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/482218592_3889565017952383_5576511307033296139_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/484536337_3901372230104995_6339572013396039437_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/484544010_3898267653748786_5504523612914572945_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm sứ Mạnh Hoa/llll.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/1.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/2.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/3.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/4.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/5.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/6.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/642917487_122123236005072864_4163470141014196818_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/722039047_986130100698078_3802542957051119034_n.jpg`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/dbc838f4-542b-4636-84e5-c8f50e1987ec.png`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/unnamed (1).webp`
- `frontend/download/images/Gốm Bát Tràng/Gốm Tới Liên/unnamed (2).webp`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/cho-gom-1765362505-1811-1765522858.webp`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/gốm 3.jpg`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/gốm 4.jpg`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/gốm 5.jpg`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/gốm.jpg`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/kinh-nghiem-kham-pha-lang-co-bat-trang-3.webp`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/lang-gom-bat-trang-top-banner.jpg`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/nhaco-1765361807-8738-1765522859.webp`
- `frontend/download/images/Gốm Bát Tràng/Ảnh làng nghề/ảnh làng nghề.jpg`
- `frontend/download/images/Hoa Nón Làng Chuông/duan1.png`
- `frontend/download/images/Hoa Nón Làng Chuông/duan2.png`
- `frontend/download/images/Hoa Nón Làng Chuông/duan3.jpg`
- `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/duan1.jpg`
- `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/duan2.png`
- `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/duan3.jpg`
- `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/header.png`
- `frontend/download/images/Lụa Nha Xá/1.png`
- `frontend/download/images/Lụa Nha Xá/2.png`
- `frontend/download/images/Lụa Nha Xá/3.png`
- `frontend/download/images/Lụa Nha Xá/4.png`
- `frontend/download/images/Lụa Nha Xá/5.png`
- `frontend/download/images/Lụa Nha Xá/6.png`
- `frontend/download/images/Lụa Nha Xá/baodanang.vn-dataimages-202106-original-_images1611385_04__5_.jpg`
- `frontend/download/images/Lụa Nha Xá/baodanang.vn-dataimages-202106-original-_images1611386_06__3_.jpg`
- `frontend/download/images/Lụa Nha Xá/baodanang.vn-dataimages-202106-original-_images1611387_05__6_.jpg`
- `frontend/download/images/Lụa Nha Xá/baodanang.vn-dataimages-202106-original-_images1611388_07__2_.jpg`
- `frontend/download/images/Lụa Nha Xá/lang-nghe-det-lua-to-tam-nha-xa-1.8e7cb3ec.jpg`
- `frontend/download/images/Lụa Nha Xá/lua-nha-xa 2-anhlebich.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/1791970142992_285684267023666212_g2088917700211513391_686532917a99ec1d713ec507c1945275.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/1791970142994_285684267023666212_g2088917700211513391_c7cb8f5b96e28cff3fa65c56c2a4e782.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/1791970142996_285684267023666212_g2088917700211513391_4f022bfdb1415ed050db6a77ccfb4d5f.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/images (1).jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/khay vuông mây tre đan.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh 11.png`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh 13.png`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh 18.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh 2.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh 3.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh 8.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan ông Tĩnh/mây tre phú vinh.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Ảnh làng nghề/lang-nghe-may-tre-dan-phu-vinh-banner.jpg`
- `frontend/download/images/Mây tre đan Phú Vinh/Ảnh làng nghề/làng mây tre 2.png`
- `frontend/download/images/Mây tre đan Phú Vinh/Ảnh làng nghề/làng mây tre 3.png`
- `frontend/download/images/Mây tre đan Phú Vinh/Ảnh làng nghề/làng mây tre 4.png`
- `frontend/download/images/Mây tre đan Phú Vinh/Ảnh làng nghề/làng mây tre.png`
- `frontend/download/images/Những thứ khác =_/font chữ (1).png`
- `frontend/download/images/Những thứ khác =_/font chữ (2).png`
- `frontend/download/images/Những thứ khác =_/font chữ (3).png`
- `frontend/download/images/Những thứ khác =_/font chữ (6).png`
- `frontend/download/images/Những thứ khác =_/font chữ (8).png`
- `frontend/download/images/Nón lá Hải Yến/duAn1.png`
- `frontend/download/images/Nón lá Hải Yến/duAn2.jpg`
- `frontend/download/images/Nón lá Hải Yến/duAn3.png`
- `frontend/download/images/product_detail/prod_rel_1.jpg`
- `frontend/download/images/product_detail/prod_rel_2.jpg`
- `frontend/download/images/product_detail/prod_rel_3.jpg`
- `frontend/download/images/Quạt Chàng Sơn/64.png`
- `frontend/download/images/Quạt Chàng Sơn/66.png`
- `frontend/download/images/Quạt Chàng Sơn/67.png`
- `frontend/download/images/Quạt Phương/duan1.png`
- `frontend/download/images/Quạt Phương/duan2.png`
- `frontend/download/images/Quạt Phương/duan3.png`
- `frontend/download/images/Quạt Từ Tâm/duan1.png`
- `frontend/download/images/Quạt Từ Tâm/duan2.png`
- `frontend/download/images/Quạt Từ Tâm/duan3.png`
- `frontend/download/images/Trang làng nghề/Header các trang/header full (1).png`
- `frontend/download/images/Trang làng nghề/Header các trang/header full (3).png`
- `frontend/download/images/Trang làng nghề/Header các trang/header full (4).png`
- `frontend/download/images/Trang làng nghề/Header các trang/header full (5).png`
- `frontend/download/images/Trang làng nghề/Header các trang/header gradient.png`
- `frontend/download/images/Trang làng nghề/Header các trang/lụa nha xá ảnh header.png`
- `frontend/download/images/Trang làng nghề/Header các trang/lụa nha xá.png`
- `frontend/download/images/Trang làng nghề/Header các trang/Mây tre đan.png`
- `frontend/download/images/Trang làng nghề/Header các trang/Nón làng chuông ảnh header.png`
- `frontend/download/images/Trang làng nghề/Header các trang/nón làng chuông.png`
- `frontend/download/images/Trang làng nghề/Header các trang/quạt chàng sơn ảnh header.png`
- `frontend/download/images/Trang làng nghề/Header các trang/quạt chàng sơn.png`
- `frontend/download/images/Trang làng nghề/Làng nón/cơ sở sản xuất 1.jpg`
- `frontend/download/images/Trang làng nghề/Làng nón/cơ sở sản xuất 2.png`
- `frontend/download/images/Trang làng nghề/Làng quạt/cơ sở sản xuất 1.jpg`
- `frontend/download/images/Trang làng nghề/Làng quạt/cơ sở sản xuất 3.webp`
- `frontend/download/images/Trang làng nghề/Mây tre đan/cơ sở sản xuất 2.jpeg`

### frontend/public/images (0 file)


### frontend/src/assets (0 file)


### template (21 file)

- `template/Ảnh làng nghề_/avatar feedback/HuyenMy.jpg`
- `template/Ảnh làng nghề_/avatar feedback/LyNgocLan.jpg`
- `template/Ảnh làng nghề_/CS Lụa nha xá/Ảnh khác/7b9fe605de9c609f5290ae1ba864f61d.jpg`
- `template/Ảnh làng nghề_/CS Lụa nha xá/Ảnh khác/c7acb84dc144671fed5fe4ebe653a6aa.jpg`
- `template/Ảnh làng nghề_/CS Mây tre việt quang/duan3.png`
- `template/Ảnh làng nghề_/CS Mây tre việt quang/header.png`
- `template/Ảnh làng nghề_/CS Mây tre việt quang/nanglucsanxuat1.png`
- `template/Ảnh làng nghề_/CS Mây tre việt quang/nanglucsanxuat2.png`
- `template/Ảnh làng nghề_/CS Mây tre việt quang/nanglucsanxuat4.png`
- `template/Ảnh làng nghề_/CS mây tre đan tuấn anh/cauchuyen.png`
- `template/Ảnh làng nghề_/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/ảnh khác/ngăn trang.jpg`
- `template/Ảnh làng nghề_/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/ảnh khác/tuvan.jpg`
- `template/Ảnh làng nghề_/HTX Mây Tre Nón Lá Tạ Thu Hương/duan2.png`
- `template/Ảnh làng nghề_/Nền/Gốm.jpeg`
- `template/Ảnh làng nghề_/Nền/gốn.jpeg`
- `template/Ảnh làng nghề_/Nền/Lua.jpeg`
- `template/Ảnh làng nghề_/Nền/Mây tre đan.jpeg`
- `template/Ảnh làng nghề_/Nền/nonla.png`
- `template/Ảnh làng nghề_/Nền/nền trang cơ sở xưởng.png`
- `template/Ảnh làng nghề_/Quạt Chàng Sơn/duan1.jpg`
- `template/Ảnh làng nghề_/Quạt Chàng Sơn/duan2.jpg`

## Cập nhật sau mỗi phần Gemini thực hiện

Chạy `python docs/audit/generate_inventory.py` tại thư mục gốc (chỉ cần Python chuẩn). Xem diff CSV và tài liệu này; không giữ số liệu cũ sau khi sửa code/ảnh. Bảng trạng thái PDF cần cập nhật thủ công sau khi đã chụp và nghiệm thu trang tương ứng.
