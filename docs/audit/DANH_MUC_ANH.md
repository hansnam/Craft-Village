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

Tổng 1489 file ảnh, 729 nội dung SHA-256 khác nhau; 571 lượt tham chiếu literal, 0 lượt chưa phân giải được.

| Kho | Tham chiếu trực tiếp | Trùng nội dung ảnh tham chiếu | Chưa thấy tham chiếu |
|---|---:|---:|---:|
| `frontend/download/images` | 565 | 86 | 147 |
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
| `frontend/download/images/booking/booking_hero_bg.jpg` | frontend/src/pages/BookingPage.jsx:111 |
| `frontend/download/images/CS bách ngân hỷ/Cauchuyen.png` | frontend/src/data/mockData.js:866 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.20.png` | frontend/src/data/mockData.js:4127 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.27.png` | frontend/src/data/mockData.js:4128 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.34.png` | frontend/src/data/mockData.js:4129 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm ngư sắc/Ảnh màn hình 2026-10-30 lúc 22.55.41.png` | frontend/src/data/mockData.js:4130 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm thanh mạ/Ảnh màn hình 2026-10-30 lúc 22.33.12.png` | frontend/src/data/mockData.js:4094 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm thanh mạ/Ảnh màn hình 2026-10-30 lúc 22.33.34.png` | frontend/src/data/mockData.js:4095 |
| `frontend/download/images/CS bách ngân hỷ/Chi tiết - gốm thanh mạ/Ảnh màn hình 2026-10-30 lúc 22.33.42.png` | frontend/src/data/mockData.js:4096 |
| `frontend/download/images/CS bách ngân hỷ/Header.png` | frontend/src/data/mockData.js:864 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1490 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1501 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1512 |
| `frontend/download/images/CS bách ngân hỷ/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1523 |
| `frontend/download/images/CS bách ngân hỷ/NgoNgocAnh.jpg` | frontend/src/data/mockData.js:2162 |
| `frontend/download/images/CS bách ngân hỷ/NguyenNhatMInh.jpg` | frontend/src/data/mockData.js:2153 |
| `frontend/download/images/CS bách ngân hỷ/sanpham1.jpg` | frontend/src/data/mockData.js:4093 |
| `frontend/download/images/CS bách ngân hỷ/sanpham2.jpg` | frontend/src/data/mockData.js:4126 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham3.jpg` | frontend/src/data/mockData.js:4160 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham4.jpg` | frontend/src/data/mockData.js:4193 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham5.jpg` | frontend/src/data/mockData.js:4226 |
| `frontend/download/images/CS bách ngân hỷ/Sanpham6.jpg` | frontend/src/data/mockData.js:4258 |
| `frontend/download/images/CS bách ngân hỷ/TranPhuongMai.jpg` | frontend/src/data/mockData.js:2144 |
| `frontend/download/images/CS bách ngân hỷ/tuvan.jpg` | frontend/src/data/mockData.js:865 |
| `frontend/download/images/CS gốm hải long/cauchuyen.jpg` | frontend/src/data/mockData.js:906 |
| `frontend/download/images/CS gốm hải long/DoNgocMai.jpg` | frontend/src/data/mockData.js:2180 |
| `frontend/download/images/CS gốm hải long/header .jpg` | frontend/src/data/mockData.js:904 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1534 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1545 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1556 |
| `frontend/download/images/CS gốm hải long/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1567 |
| `frontend/download/images/CS gốm hải long/NguyenDucThanh.jpg` | frontend/src/data/mockData.js:2189 |
| `frontend/download/images/CS gốm hải long/sanpham1.jpg` | frontend/src/data/mockData.js:4291 |
| `frontend/download/images/CS gốm hải long/sanpham2.png` | frontend/src/data/mockData.js:4323 |
| `frontend/download/images/CS gốm hải long/sanpham3.jpg` | frontend/src/data/mockData.js:4415 |
| `frontend/download/images/CS gốm hải long/sanpham3.png` | frontend/src/data/mockData.js:4355 |
| `frontend/download/images/CS gốm hải long/sanpham4.jpg` | frontend/src/data/mockData.js:4385 |
| `frontend/download/images/CS gốm hải long/sanpham6.png` | frontend/src/data/mockData.js:4445 |
| `frontend/download/images/CS gốm hải long/TranKhanhLinh.jpg` | frontend/src/data/mockData.js:2171 |
| `frontend/download/images/CS gốm hải long/tuvan.jpg` | frontend/src/data/mockData.js:905 |
| `frontend/download/images/CS Gốm Mạnh Hoa/cauchuyen.jpg` | frontend/src/data/mockData.js:986 |
| `frontend/download/images/CS Gốm Mạnh Hoa/header.png` | frontend/src/data/mockData.js:984 |
| `frontend/download/images/CS Gốm Mạnh Hoa/HoangHaiAn.jpg` | frontend/src/data/mockData.js:2243 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1622 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1633 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1644 |
| `frontend/download/images/CS Gốm Mạnh Hoa/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1655 |
| `frontend/download/images/CS Gốm Mạnh Hoa/NguyenKhanhToan.jpg` | frontend/src/data/mockData.js:2234 |
| `frontend/download/images/CS Gốm Mạnh Hoa/NguyenMaiChi.jpg` | frontend/src/data/mockData.js:2225 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham1.jpg` | frontend/src/data/mockData.js:4667 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham2.jpg` | frontend/src/data/mockData.js:4697 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham3.jpg` | frontend/src/data/mockData.js:4729 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham4.jpg` | frontend/src/data/mockData.js:4761 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham5.jpg` | frontend/src/data/mockData.js:4793 |
| `frontend/download/images/CS Gốm Mạnh Hoa/sanpham6.png` | frontend/src/data/mockData.js:4825 |
| `frontend/download/images/CS Gốm Mạnh Hoa/tuvan.jpg` | frontend/src/data/mockData.js:985 |
| `frontend/download/images/CS Gốm tới liên/cauchuyen.png` | frontend/src/data/mockData.js:946 |
| `frontend/download/images/CS Gốm tới liên/duan1.jpg` | frontend/src/data/mockData.js:1844 |
| `frontend/download/images/CS Gốm tới liên/duan2.jpg` | frontend/src/data/mockData.js:1853 |
| `frontend/download/images/CS Gốm tới liên/duan3.jpg` | frontend/src/data/mockData.js:1862 |
| `frontend/download/images/CS Gốm tới liên/HaMaiPhuong.png` | frontend/src/data/mockData.js:2198 |
| `frontend/download/images/CS Gốm tới liên/Header.jpg` | frontend/src/data/mockData.js:944 |
| `frontend/download/images/CS Gốm tới liên/LuThanhHa.png` | frontend/src/data/mockData.js:2216 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1578 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1589 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1600 |
| `frontend/download/images/CS Gốm tới liên/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1611 |
| `frontend/download/images/CS Gốm tới liên/sanpham1.jpg` | frontend/src/data/mockData.js:4475 |
| `frontend/download/images/CS Gốm tới liên/Sanpham2.jpg` | frontend/src/data/mockData.js:4507 |
| `frontend/download/images/CS Gốm tới liên/Sanpham3.jpg` | frontend/src/data/mockData.js:4539 |
| `frontend/download/images/CS Gốm tới liên/sanpham4.jpg` | frontend/src/data/mockData.js:4571 |
| `frontend/download/images/CS Gốm tới liên/sanpham5.jpg` | frontend/src/data/mockData.js:4603 |
| `frontend/download/images/CS Gốm tới liên/Sanpham6.jpg` | frontend/src/data/mockData.js:4635 |
| `frontend/download/images/CS Gốm tới liên/TranVanMinh.png` | frontend/src/data/mockData.js:2207 |
| `frontend/download/images/CS Gốm tới liên/tuvan.jpg` | frontend/src/data/mockData.js:945 |
| `frontend/download/images/CS hoàng anh ceramics/Cauchuyen.jpg` | frontend/src/data/mockData.js:832 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - túi sách cắm hoa/Ảnh màn hình 2026-10-29 lúc 14.05.19.png` | frontend/src/data/mockData.js:3961 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - túi sách cắm hoa/Ảnh màn hình 2026-10-29 lúc 14.05.33.png` | frontend/src/data/mockData.js:3962 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - túi sách cắm hoa/Ảnh màn hình 2026-10-29 lúc 14.05.43.png` | frontend/src/data/mockData.js:3963 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.37.png` | frontend/src/data/mockData.js:4060 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.43.png` | frontend/src/data/mockData.js:4061 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.49.png` | frontend/src/data/mockData.js:4062 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo chim cánh cụt/Ảnh màn hình 2026-10-29 lúc 14.21.56.png` | frontend/src/data/mockData.js:4063 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo cua/Ảnh màn hình 2026-10-29 lúc 14.09.48.png` | frontend/src/data/mockData.js:3994 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo cua/Ảnh màn hình 2026-10-29 lúc 14.10.05.png` | frontend/src/data/mockData.js:3995 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo cua/Ảnh màn hình 2026-10-29 lúc 14.10.15.png` | frontend/src/data/mockData.js:3996 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo labubu/Ảnh màn hình 2026-10-29 lúc 14.13.25.png` | frontend/src/data/mockData.js:4027 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo labubu/Ảnh màn hình 2026-10-29 lúc 14.13.33.png` | frontend/src/data/mockData.js:4028 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo labubu/Ảnh màn hình 2026-10-29 lúc 14.13.50.png` | frontend/src/data/mockData.js:4029 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.01.41.png` | frontend/src/data/mockData.js:3927 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.01.53.png` | frontend/src/data/mockData.js:3928 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.02.02.png` | frontend/src/data/mockData.js:3929 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết - ống heo shiba/Ảnh màn hình 2026-10-29 lúc 14.02.14.png` | frontend/src/data/mockData.js:3930 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết sản phẩm-ỐNG HEO SÚP LƠ/Ảnh màn hình 2026-10-29 lúc 13.58.38.png` | frontend/src/data/mockData.js:3894 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết sản phẩm-ỐNG HEO SÚP LƠ/Ảnh màn hình 2026-10-29 lúc 13.58.45.png` | frontend/src/data/mockData.js:3895 |
| `frontend/download/images/CS hoàng anh ceramics/Chi tiết sản phẩm-ỐNG HEO SÚP LƠ/Ảnh màn hình 2026-10-29 lúc 13.58.57.png` | frontend/src/data/mockData.js:3896 |
| `frontend/download/images/CS hoàng anh ceramics/EmilyCarter.png` | frontend/src/data/mockData.js:2135 |
| `frontend/download/images/CS hoàng anh ceramics/header.png` | frontend/src/data/mockData.js:830 |
| `frontend/download/images/CS hoàng anh ceramics/NguyenMinhAnh.png` | frontend/src/data/mockData.js:2117 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham1.jpg` | frontend/src/data/mockData.js:3893 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham2.jpg` | frontend/src/data/mockData.js:3926 |
| `frontend/download/images/CS hoàng anh ceramics/sanpham3.png` | frontend/src/data/mockData.js:3993 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham4.jpg` | frontend/src/data/mockData.js:3960 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham5.jpg` | frontend/src/data/mockData.js:4026 |
| `frontend/download/images/CS hoàng anh ceramics/Sanpham6.jpg` | frontend/src/data/mockData.js:4059 |
| `frontend/download/images/CS hoàng anh ceramics/TranThuHa.png` | frontend/src/data/mockData.js:2126 |
| `frontend/download/images/CS hoàng anh ceramics/tuvan.png` | frontend/src/data/mockData.js:831 |
| `frontend/download/images/CS Lụa nha xá/cauchuyen.png` | frontend/src/data/mockData.js:1025 |
| `frontend/download/images/CS Lụa nha xá/header.png` | frontend/src/data/mockData.js:1023 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat1.webp` | frontend/src/data/mockData.js:1666 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat2.webp` | frontend/src/data/mockData.js:1677 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1688 |
| `frontend/download/images/CS Lụa nha xá/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1699 |
| `frontend/download/images/CS Lụa nha xá/sanpham1.png` | frontend/src/data/mockData.js:4857 |
| `frontend/download/images/CS Lụa nha xá/sanpham2.png` | frontend/src/data/mockData.js:4892 |
| `frontend/download/images/CS Lụa nha xá/sanpham3.webp` | frontend/src/data/mockData.js:4926 |
| `frontend/download/images/CS Lụa nha xá/sanpham4.jpg` | frontend/src/data/mockData.js:4961 |
| `frontend/download/images/CS Lụa nha xá/sanpham5.png` | frontend/src/data/mockData.js:4996 |
| `frontend/download/images/CS Lụa nha xá/sanpham6.webp` | frontend/src/data/mockData.js:5031 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mpk7ds082rke67.webp` | frontend/src/data/mockData.js:4962 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mpk7ds122ya6c7.webp` | frontend/src/data/mockData.js:4963 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mpukqn6j1s7487.webp` | frontend/src/data/mockData.js:4964 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mrtx85b407wn92.jpg` | frontend/src/data/mockData.js:4965 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn bách liên hoa/vn-11134207-81ztc-mrtxcm9fyb5t77.jpg` | frontend/src/data/mockData.js:4966 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/ab105e41-2057-4c43-be16-06ec477fecfc.jpg` | frontend/src/data/mockData.js:4858 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/sanpham1 2.png` | frontend/src/data/mockData.js:4859 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/vn-11134207-81ztc-mnmcfqpq1rlw5a.webp` | frontend/src/data/mockData.js:4860 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/vn-11134207-81ztc-msozqv97oflw3e.webp` | frontend/src/data/mockData.js:4861 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn phượng vũ/vn-11134207-81ztc-msoztuu8c5qic8.webp` | frontend/src/data/mockData.js:4862 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/484824489_1044549594361729_4377349374783878228_n.jpg` | frontend/src/data/mockData.js:4997 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/485035892_1044549634361725_9085957628290583763_n.jpg` | frontend/src/data/mockData.js:4998 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/485687671_1047628964053792_5591196335653054878_n.jpg` | frontend/src/data/mockData.js:4999 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/vn-11134207-81ztc-mtdirh89lmv62e.webp` | frontend/src/data/mockData.js:5000 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn sen hồ điệp/vn-11134207-81ztc-mtdirh987klgc0.webp` | frontend/src/data/mockData.js:5001 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mmgufvsdijgh85.webp` | frontend/src/data/mockData.js:5032 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mmzfsscv7478a9@resize_w900_nl.webp` | frontend/src/data/mockData.js:5033 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mrzeh2ubvl6tc2.webp` | frontend/src/data/mockData.js:5034 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-81ztc-mrzeh2uf6zgg29.webp` | frontend/src/data/mockData.js:5035 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - tím hồng/vn-11134207-820l4-mii6xg6nwxdyee.webp` | frontend/src/data/mockData.js:5036 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mnm8nit2oa9y0a.webp` | frontend/src/data/mockData.js:4927 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mr74dtasusjk05@resize_w900_nl.webp` | frontend/src/data/mockData.js:4928 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mrze9nqkpe6f75.webp` | frontend/src/data/mockData.js:4929 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mrze9nrzs3k282.webp` | frontend/src/data/mockData.js:4930 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn thọ dơi - xám bạc/vn-11134207-81ztc-mrziy0y6b5s2b8.webp` | frontend/src/data/mockData.js:4931 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/77861cd1-baf4-4f5a-ae75-7cb71e322f1d.jpg` | frontend/src/data/mockData.js:4893 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/vn-11134207-7ras8-m4jsj99s647jce.webp` | frontend/src/data/mockData.js:4894 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/vn-11134207-81ztc-mphnb1xli1an09@resize_w900_nl.webp` | frontend/src/data/mockData.js:4895 |
| `frontend/download/images/CS Lụa nha xá/Trang chi tiết sản phẩm Lụa Nha Xá/lụa hoa văn vân bèo/vn-11134207-81ztc-mphnfhr8kwzk8a.webp` | frontend/src/data/mockData.js:4896 |
| `frontend/download/images/CS Lụa nha xá/tuvan.jpg` | frontend/src/data/mockData.js:1024 |
| `frontend/download/images/CS Mây tre việt quang/cauchuyen.jpeg` | frontend/src/data/mockData.js:752 |
| `frontend/download/images/CS Mây tre việt quang/header.png` | frontend/src/data/mockData.js:750 |
| `frontend/download/images/CS Mây tre việt quang/lethuha.jpg` | frontend/src/data/mockData.js:2081 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat1.webp` | frontend/src/data/mockData.js:1358 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat2.webp` | frontend/src/data/mockData.js:1369 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1380 |
| `frontend/download/images/CS Mây tre việt quang/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1391 |
| `frontend/download/images/CS Mây tre việt quang/nguyenminhanh.jpg` | frontend/src/data/mockData.js:2072 |
| `frontend/download/images/CS Mây tre việt quang/sanpham1.jpg` | frontend/src/data/mockData.js:3530 |
| `frontend/download/images/CS Mây tre việt quang/sanpham2.png` | frontend/src/data/mockData.js:3560 |
| `frontend/download/images/CS Mây tre việt quang/sanpham3.jpg` | frontend/src/data/mockData.js:3590 |
| `frontend/download/images/CS Mây tre việt quang/sanpham4.png` | frontend/src/data/mockData.js:3620 |
| `frontend/download/images/CS Mây tre việt quang/sanpham5.png` | frontend/src/data/mockData.js:3650 |
| `frontend/download/images/CS Mây tre việt quang/sanpham6.png` | frontend/src/data/mockData.js:3680 |
| `frontend/download/images/CS Mây tre việt quang/tranquochuy.jpg` | frontend/src/data/mockData.js:2063 |
| `frontend/download/images/CS Mây tre việt quang/tuvan.jpg` | frontend/src/data/mockData.js:751 |
| `frontend/download/images/CS mây tre đan tuấn anh/BuiNgocLinh.jpg` | frontend/src/data/mockData.js:2090 |
| `frontend/download/images/CS mây tre đan tuấn anh/CaoXuanVu.jpg` | frontend/src/data/mockData.js:2099 |
| `frontend/download/images/CS mây tre đan tuấn anh/cauChuyen.png` | frontend/src/data/mockData.js:792 |
| `frontend/download/images/CS mây tre đan tuấn anh/header.jpg` | frontend/src/data/mockData.js:790 |
| `frontend/download/images/CS mây tre đan tuấn anh/may tre tuan anh 9 (1).jpg` | frontend/src/data/mockData.js:3773 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuan anh 10 (1).jpg` | frontend/src/data/mockData.js:3803 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh (1).jpg` | frontend/src/data/mockData.js:3741 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh 5 (1).jpg` | frontend/src/data/mockData.js:3833 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh 6 (1).jpg` | frontend/src/data/mockData.js:3863 |
| `frontend/download/images/CS mây tre đan tuấn anh/mây tre tuấn anh 7 (1).jpg` | frontend/src/data/mockData.js:3710 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx1.jpg` | frontend/src/data/mockData.js:1402 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx2.jpg` | frontend/src/data/mockData.js:1413 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx3.jpg` | frontend/src/data/mockData.js:1424 |
| `frontend/download/images/CS mây tre đan tuấn anh/nlsx4.jpg` | frontend/src/data/mockData.js:1435 |
| `frontend/download/images/CS mây tre đan tuấn anh/PhamKhanhLy.jpg` | frontend/src/data/mockData.js:2108 |
| `frontend/download/images/CS mây tre đan tuấn anh/tuvan.jpg` | frontend/src/data/mockData.js:791 |
| `frontend/download/images/facility_common/badge_icon_delivery.png` | frontend/src/components/facility/FacilityConsultation.jsx:18 |
| `frontend/download/images/facility_common/badge_icon_design.png` | frontend/src/components/facility/FacilityConsultation.jsx:8 |
| `frontend/download/images/facility_common/badge_icon_handcrafted.png` | frontend/src/components/facility/FacilityConsultation.jsx:13 |
| `frontend/download/images/facility_common/badge_icon_invoice.png` | frontend/src/components/facility/FacilityConsultation.jsx:23 |
| `frontend/download/images/facility_common/consult_main_img.png` | frontend/src/components/facility/FacilityConsultation.jsx:37 ; frontend/src/components/facility/FacilityConsultation.jsx:42 |
| `frontend/download/images/Hoa Nón Làng Chuông/68.png` | frontend/src/data/mockData.js:590 |
| `frontend/download/images/Hoa Nón Làng Chuông/69.png` | frontend/src/data/mockData.js:2743 |
| `frontend/download/images/Hoa Nón Làng Chuông/70.png` | frontend/src/data/mockData.js:2779 |
| `frontend/download/images/Hoa Nón Làng Chuông/71.png` | frontend/src/data/mockData.js:2815 |
| `frontend/download/images/Hoa Nón Làng Chuông/72.png` | frontend/src/data/mockData.js:2849 |
| `frontend/download/images/Hoa Nón Làng Chuông/73.png` | frontend/src/data/mockData.js:2919 |
| `frontend/download/images/Hoa Nón Làng Chuông/74.png` | frontend/src/data/mockData.js:2884 |
| `frontend/download/images/Hoa Nón Làng Chuông/75.png` | frontend/src/data/mockData.js:591 |
| `frontend/download/images/Hoa Nón Làng Chuông/76.png` | frontend/src/data/mockData.js:592 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx1.png` | frontend/src/data/mockData.js:1182 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx2.png` | frontend/src/data/mockData.js:1193 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx3.png` | frontend/src/data/mockData.js:1204 |
| `frontend/download/images/Hoa Nón Làng Chuông/nlsx4.png` | frontend/src/data/mockData.js:1215 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/2186605b-3cb8-4386-b63c-619afce5e655.jpg` | frontend/src/data/mockData.js:2885 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/5290d451-b884-4408-a2ba-a9b4647348a7.jpg` | frontend/src/data/mockData.js:2886 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/777559dd-25d3-4193-8819-f52517540fda.jpg` | frontend/src/data/mockData.js:2887 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/7b620438-d2a9-4daf-b550-c7d0469c8328 1.png` | frontend/src/data/mockData.js:2888 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hoa Điệp/7b620438-d2a9-4daf-b550-c7d0469c8328 2.png` | frontend/src/data/mockData.js:2889 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet1.png` | frontend/src/data/mockData.js:2780 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet2.png` | frontend/src/data/mockData.js:2781 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet3.png` | frontend/src/data/mockData.js:2782 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/anhchitiet4.png` | frontend/src/data/mockData.js:2783 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/chatlieu.png` | frontend/src/data/mockData.js:2784 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hồn Quê/hoatiet.png` | frontend/src/data/mockData.js:2785 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchatlieu.jpg` | frontend/src/data/mockData.js:2744 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet1.png` | frontend/src/data/mockData.js:2745 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet2.png` | frontend/src/data/mockData.js:2746 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet3.jpg` | frontend/src/data/mockData.js:2747 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/anhchitiet4.jpg` | frontend/src/data/mockData.js:2748 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Hỷ Sắc/hoatiet.png` | frontend/src/data/mockData.js:2749 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/4e978dca-1cc5-4fa5-a9d5-0fe65bbe6da1 1.png` | frontend/src/data/mockData.js:2816 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/4e978dca-1cc5-4fa5-a9d5-0fe65bbe6da1 3.png` | frontend/src/data/mockData.js:2817 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/977b0bfd-19a0-46fb-b9dd-227d5c83ab5a 1.png` | frontend/src/data/mockData.js:2818 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Sen Ngọc/977b0bfd-19a0-46fb-b9dd-227d5c83ab5a 2.png` | frontend/src/data/mockData.js:2819 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/90e9fd28-de33-46fa-8cb2-279b7202e53d.jpg` | frontend/src/data/mockData.js:2920 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/sg-11134201-825zp-mjvjxn77g3cy1b.webp` | frontend/src/data/mockData.js:2921 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/sg-11134201-8260a-mjvjxo5f3o5j60.webp` | frontend/src/data/mockData.js:2922 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Xứ Huế/sg-11134201-8261t-mjvjxp220ydc7f.webp` | frontend/src/data/mockData.js:2923 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/10ba38b7-4b67-4365-a277-c08b3ff6102f.jpg` | frontend/src/data/mockData.js:2850 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/2b67ab78-dd05-443f-b2e4-85e6a4586ab0 1.png` | frontend/src/data/mockData.js:2851 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/37bffdba-39a7-4b9b-a23c-c317f07da152.jpg` | frontend/src/data/mockData.js:2852 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/976f6655-3a84-4ab7-815e-d0ac29cdeb75.jpg` | frontend/src/data/mockData.js:2853 |
| `frontend/download/images/Hoa Nón Làng Chuông/Trang chi tiết sản phẩm hoa nón làng chuông/Nón Điệp Liên/Gemini_Generated_Image_mo6x50mo6x50mo6x.png` | frontend/src/data/mockData.js:2854 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/cauchuyen.png` | frontend/src/data/mockData.js:550 ; frontend/src/data/mockData.js:552 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1138 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1149 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat3.webp` | frontend/src/data/mockData.js:1160 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/nanglucsanxuat4.jpg` | frontend/src/data/mockData.js:1171 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham1.png` | frontend/src/data/mockData.js:2533 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham2.png` | frontend/src/data/mockData.js:2568 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham3.png` | frontend/src/data/mockData.js:2603 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham4.png` | frontend/src/data/mockData.js:2638 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham5.png` | frontend/src/data/mockData.js:2673 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/sanpham6.png` | frontend/src/data/mockData.js:2708 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/125.png` | frontend/src/data/mockData.js:2709 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/820196092_122263346810273480_5895736972436216052_n.jpg` | frontend/src/data/mockData.js:2710 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/821123779_122263346750273480_1402837331595121011_n.jpg` | frontend/src/data/mockData.js:2711 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/image 50.png` | frontend/src/data/mockData.js:2712 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Son Thăng Long/image 51.png` | frontend/src/data/mockData.js:2713 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/869832750_122268499616273480_7276361879873561227_n 1.png` | frontend/src/data/mockData.js:2569 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 1.png` | frontend/src/data/mockData.js:2570 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 2.png` | frontend/src/data/mockData.js:2571 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 3.png` | frontend/src/data/mockData.js:2572 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Dấu Ấn Thời Gian/c10b666a-c9a3-4467-b04e-166c31e160a4 4.png` | frontend/src/data/mockData.js:2573 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/111.png` | frontend/src/data/mockData.js:2639 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/112.png` | frontend/src/data/mockData.js:2640 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/868358897_122268499604273480_6985130325265403347_n 1.png` | frontend/src/data/mockData.js:2641 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/871150678_122268499682273480_5076789892579742228_n 1.png` | frontend/src/data/mockData.js:2642 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Liên Hoa Thanh Cảnh/871316160_122268499664273480_170722527425795122_n 1.png` | frontend/src/data/mockData.js:2643 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/11.png` | frontend/src/data/mockData.js:2604 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/12.png` | frontend/src/data/mockData.js:2605 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/833863924_122264873588273480_2503797066406257761_n.jpg` | frontend/src/data/mockData.js:2606 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/844007611_122265877766273480_413282655460255551_n.jpg` | frontend/src/data/mockData.js:2607 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Kim Vũ/847033055_122265877538273480_3183531042725667871_n.jpg` | frontend/src/data/mockData.js:2608 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/863683350_122267895350273480_7973370084803348637_n.jpg` | frontend/src/data/mockData.js:2674 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/869664342_122268499346273480_8180360518738157444_n.jpg` | frontend/src/data/mockData.js:2675 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/869729753_122268499322273480_5694301797513064183_n.jpg` | frontend/src/data/mockData.js:2676 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/image 48.png` | frontend/src/data/mockData.js:2677 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Nón Xuân Điệp/image 49.png` | frontend/src/data/mockData.js:2678 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/3f07650a-6a2d-4e3a-ba1e-41cd84c733db.jpg` | frontend/src/data/mockData.js:2534 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/45904e48-80a9-419e-9653-5b6cbefb9e00.jpg` | frontend/src/data/mockData.js:2535 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/4f3c9afd-f427-43c4-86c9-1c211217db39.jpg` | frontend/src/data/mockData.js:2536 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/8961075e-9ee7-4ac1-bf6a-928ffaf71d62 1.png` | frontend/src/data/mockData.js:2537 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/Trang chi tiết sản phẩm HTX Mây tre nón lá Tạ Thu Hương/Vũ Điệu Bản Làng/8961075e-9ee7-4ac1-bf6a-928ffaf71d62 2.png` | frontend/src/data/mockData.js:2538 |
| `frontend/download/images/HTX Mây Tre Nón Lá Tạ Thu Hương/tuvan.png` | frontend/src/data/mockData.js:551 |
| `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/mây tre tuấn anh 2.jpg` | frontend/src/data/mockData.js:3742 |
| `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/mây tre tuấn anh 3.jpg` | frontend/src/data/mockData.js:3743 |
| `frontend/download/images/Mây tre đan Phú Vinh/Mây tre đan Tuấn Anh/mây tre tuấn anh 8.jpg` | frontend/src/data/mockData.js:3711 |
| `frontend/download/images/Những thứ khác =_/logo.png` | frontend/src/data/homeData.js:14 |
| `frontend/download/images/Nón lá Hải Yến/cauchuyen.jpg` | frontend/src/data/mockData.js:512 |
| `frontend/download/images/Nón lá Hải Yến/header.png` | frontend/src/data/mockData.js:510 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1094 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1105 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1116 |
| `frontend/download/images/Nón lá Hải Yến/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1127 |
| `frontend/download/images/Nón lá Hải Yến/sanpham1(1).png` | frontend/src/data/mockData.js:2317 |
| `frontend/download/images/Nón lá Hải Yến/sanpham1.png` | frontend/src/data/mockData.js:2425 |
| `frontend/download/images/Nón lá Hải Yến/sanpham2(1).png` | frontend/src/data/mockData.js:2353 |
| `frontend/download/images/Nón lá Hải Yến/sanpham2.png` | frontend/src/data/mockData.js:2461 |
| `frontend/download/images/Nón lá Hải Yến/sanpham3(1).png` | frontend/src/data/mockData.js:2389 |
| `frontend/download/images/Nón lá Hải Yến/sanpham3.png` | frontend/src/data/mockData.js:2497 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/13a9135b86f4747caa379074b8e75c1a.jpg` | frontend/src/data/mockData.js:2390 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/5697234ebf017278e1822c8ba642f6eb.jpg` | frontend/src/data/mockData.js:2391 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/73b3233bf03162db6b2def182f57c13d.jpg` | frontend/src/data/mockData.js:2392 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/880aba263c1e8b7ab841699a68d84604.jpg` | frontend/src/data/mockData.js:2393 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/a1bd7121d54a7843659df2c363602619.jpg` | frontend/src/data/mockData.js:2394 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón quai thao mộc nguyên/Gemini_Generated_Image_u2vvbau2vvbau2vv.png` | frontend/src/data/mockData.js:2395 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/055a66d1-88fe-43ad-a56f-61aa052a1bee 1.png` | frontend/src/data/mockData.js:2462 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/055a66d1-88fe-43ad-a56f-61aa052a1bee 2.png` | frontend/src/data/mockData.js:2463 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/055a66d1-88fe-43ad-a56f-61aa052a1bee 3.png` | frontend/src/data/mockData.js:2464 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/5db0289b-153a-48c2-83ad-5d53fd9aa512 1.png` | frontend/src/data/mockData.js:2465 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/5db0289b-153a-48c2-83ad-5d53fd9aa512 2.png` | frontend/src/data/mockData.js:2466 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Nón Đầu Hồng Vân/Gemini_Generated_Image_ctqfjnctqfjnctqf.png` | frontend/src/data/mockData.js:2467 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/4aa60ed0336eb74c4642f647e218d9bc.jpg` | frontend/src/data/mockData.js:2354 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/7f56b2f839a9a71b9648eed46b91f4f3.jpg` | frontend/src/data/mockData.js:2355 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/8573761901ede3f56981fcfdf7bdd28e.jpg` | frontend/src/data/mockData.js:2356 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/b927d290f55145ef304759726f2e60e0.jpg` | frontend/src/data/mockData.js:2357 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/Gemini_Generated_Image_yn9tiyn9tiyn9tiy.png` | frontend/src/data/mockData.js:2358 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Quai thao kim nguyệt/vn-11134207-7ra0g-m8fwiy9daglj33.webp` | frontend/src/data/mockData.js:2359 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/0f73c43332baf52bbb6813186ba40ab9.jpg` | frontend/src/data/mockData.js:2318 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/1c4a289e8fe890e0fa53afa9a1a56230.jpg` | frontend/src/data/mockData.js:2319 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/791d034b2576e955f39da8580933dc04.jpg` | frontend/src/data/mockData.js:2320 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/a7b557f78c319cf88290faba32ce0e83.jpg` | frontend/src/data/mockData.js:2321 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/b4fcebfa-485e-41d8-8b89-7e78b7afdfab.jpg` | frontend/src/data/mockData.js:2322 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/quai thao nguyệt sắc/e3102d2da76fd523e3e5266569586d22.jpg` | frontend/src/data/mockData.js:2323 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/007b9ebe0b6b7ece97d45b323b1ec4fc.jpg` | frontend/src/data/mockData.js:2426 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/9a372d85-1382-4829-b0de-9f06f59aef70 1.png` | frontend/src/data/mockData.js:2427 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/9a372d85-1382-4829-b0de-9f06f59aef70 2.png` | frontend/src/data/mockData.js:2428 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/b4aabff0dc0da96280d4ea0d2a76e7b7.jpg` | frontend/src/data/mockData.js:2429 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/e13220a99b088594b0eb3b8dff0800c4.jpg` | frontend/src/data/mockData.js:2430 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Kim Quan/Gemini_Generated_Image_207uij207uij207u.png` | frontend/src/data/mockData.js:2431 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 1.png` | frontend/src/data/mockData.js:2498 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 2.png` | frontend/src/data/mockData.js:2499 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 3.png` | frontend/src/data/mockData.js:2500 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 4.png` | frontend/src/data/mockData.js:2501 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/223faf46-81b2-4384-82d8-55696f48775e 7.png` | frontend/src/data/mockData.js:2502 |
| `frontend/download/images/Nón lá Hải Yến/Trang chi tiết sản phẩm Nón lá Hải Yến/Đầu Vân Nguyệt/Gemini_Generated_Image_c3nyz0c3nyz0c3ny.png` | frontend/src/data/mockData.js:2503 |
| `frontend/download/images/Nón lá Hải Yến/tuavan.png` | frontend/src/data/mockData.js:511 |
| `frontend/download/images/pdf_gallery/SP_GBT_09/pdf-038-xref-67549.jpg` | frontend/src/data/mockData.js:4163 |
| `frontend/download/images/pdf_gallery/SP_GBT_09/pdf-038-xref-67585.jpg` | frontend/src/data/mockData.js:4161 |
| `frontend/download/images/pdf_gallery/SP_GBT_09/pdf-038-xref-67599.jpg` | frontend/src/data/mockData.js:4162 |
| `frontend/download/images/pdf_gallery/SP_GBT_10/pdf-039-xref-69474.jpg` | frontend/src/data/mockData.js:4194 |
| `frontend/download/images/pdf_gallery/SP_GBT_10/pdf-039-xref-69510.jpg` | frontend/src/data/mockData.js:4196 |
| `frontend/download/images/pdf_gallery/SP_GBT_10/pdf-039-xref-69520.jpg` | frontend/src/data/mockData.js:4195 |
| `frontend/download/images/pdf_gallery/SP_GBT_11/pdf-040-xref-71353.jpg` | frontend/src/data/mockData.js:4227 |
| `frontend/download/images/pdf_gallery/SP_GBT_11/pdf-040-xref-71391.jpg` | frontend/src/data/mockData.js:4228 |
| `frontend/download/images/pdf_gallery/SP_GBT_12/pdf-041-xref-65766.jpg` | frontend/src/data/mockData.js:4259 |
| `frontend/download/images/pdf_gallery/SP_GBT_12/pdf-041-xref-73280.jpg` | frontend/src/data/mockData.js:4260 |
| `frontend/download/images/pdf_gallery/SP_GBT_12/pdf-041-xref-73290.jpg` | frontend/src/data/mockData.js:4261 |
| `frontend/download/images/pdf_gallery/SP_GBT_13/pdf-069-xref-128122.jpg` | frontend/src/data/mockData.js:4292 |
| `frontend/download/images/pdf_gallery/SP_GBT_13/pdf-069-xref-128168.jpg` | frontend/src/data/mockData.js:4293 |
| `frontend/download/images/pdf_gallery/SP_GBT_14/pdf-070-xref-130027.jpg` | frontend/src/data/mockData.js:4324 |
| `frontend/download/images/pdf_gallery/SP_GBT_14/pdf-070-xref-130069.jpg` | frontend/src/data/mockData.js:4325 |
| `frontend/download/images/pdf_gallery/SP_GBT_19/pdf-063-xref-117380.jpg` | frontend/src/data/mockData.js:4476 |
| `frontend/download/images/pdf_gallery/SP_GBT_19/pdf-063-xref-117394.jpg` | frontend/src/data/mockData.js:4477 |
| `frontend/download/images/pdf_gallery/SP_GBT_20/pdf-064-xref-117386.jpg` | frontend/src/data/mockData.js:4509 |
| `frontend/download/images/pdf_gallery/SP_GBT_20/pdf-064-xref-119141.jpg` | frontend/src/data/mockData.js:4508 |
| `frontend/download/images/pdf_gallery/SP_GBT_21/pdf-065-xref-120932.jpg` | frontend/src/data/mockData.js:4541 |
| `frontend/download/images/pdf_gallery/SP_GBT_21/pdf-065-xref-120970.jpg` | frontend/src/data/mockData.js:4540 |
| `frontend/download/images/pdf_gallery/SP_GBT_22/pdf-066-xref-122829.jpg` | frontend/src/data/mockData.js:4573 |
| `frontend/download/images/pdf_gallery/SP_GBT_22/pdf-066-xref-122833.jpg` | frontend/src/data/mockData.js:4572 |
| `frontend/download/images/pdf_gallery/SP_GBT_23/pdf-067-xref-124550.jpg` | frontend/src/data/mockData.js:4605 |
| `frontend/download/images/pdf_gallery/SP_GBT_23/pdf-067-xref-124588.jpg` | frontend/src/data/mockData.js:4604 |
| `frontend/download/images/pdf_gallery/SP_GBT_24/pdf-068-xref-126297.jpg` | frontend/src/data/mockData.js:4637 |
| `frontend/download/images/pdf_gallery/SP_GBT_24/pdf-068-xref-126341.jpg` | frontend/src/data/mockData.js:4636 |
| `frontend/download/images/pdf_gallery/SP_GBT_26/pdf-044-xref-78113.jpg` | frontend/src/data/mockData.js:4699 |
| `frontend/download/images/pdf_gallery/SP_GBT_26/pdf-044-xref-78151.jpg` | frontend/src/data/mockData.js:4698 |
| `frontend/download/images/pdf_gallery/SP_GBT_27/pdf-045-xref-79946.jpg` | frontend/src/data/mockData.js:4730 |
| `frontend/download/images/pdf_gallery/SP_GBT_27/pdf-045-xref-79956.jpg` | frontend/src/data/mockData.js:4731 |
| `frontend/download/images/pdf_gallery/SP_GBT_28/pdf-046-xref-81795.jpg` | frontend/src/data/mockData.js:4762 |
| `frontend/download/images/pdf_gallery/SP_GBT_28/pdf-046-xref-81805.jpg` | frontend/src/data/mockData.js:4763 |
| `frontend/download/images/pdf_gallery/SP_GBT_29/pdf-047-xref-83616.jpg` | frontend/src/data/mockData.js:4795 |
| `frontend/download/images/pdf_gallery/SP_GBT_29/pdf-047-xref-83654.jpg` | frontend/src/data/mockData.js:4794 |
| `frontend/download/images/pdf_gallery/SP_GBT_30/pdf-048-xref-85453.jpg` | frontend/src/data/mockData.js:4827 |
| `frontend/download/images/pdf_gallery/SP_GBT_30/pdf-048-xref-85491.jpg` | frontend/src/data/mockData.js:4826 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHVCC/pdf-085-xref-171436.jpg` | frontend/src/data/mockData.js:3239 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHVCC/pdf-085-xref-171440.jpg` | frontend/src/data/mockData.js:3238 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHVCC/pdf-085-xref-171444.jpg` | frontend/src/data/mockData.js:3240 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHXDG/pdf-093-xref-188530.jpg` | frontend/src/data/mockData.js:3499 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHXDG/pdf-093-xref-188534.jpg` | frontend/src/data/mockData.js:3498 |
| `frontend/download/images/pdf_gallery/SP_QCS_QHXDG/pdf-093-xref-188542.jpg` | frontend/src/data/mockData.js:3500 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKH/pdf-082-xref-165485.jpg` | frontend/src/data/mockData.js:3141 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKH/pdf-082-xref-165497.jpg` | frontend/src/data/mockData.js:3142 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKHCT/pdf-090-xref-181977.jpg` | frontend/src/data/mockData.js:3401 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKHCT/pdf-090-xref-181983.jpg` | frontend/src/data/mockData.js:3403 |
| `frontend/download/images/pdf_gallery/SP_QCS_QKHCT/pdf-090-xref-181987.jpg` | frontend/src/data/mockData.js:3402 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLDH/pdf-091-xref-184168.jpg` | frontend/src/data/mockData.js:3434 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLTDG/pdf-094-xref-190377.jpg` | frontend/src/data/mockData.js:2954 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLTDG/pdf-094-xref-190387.jpg` | frontend/src/data/mockData.js:2956 |
| `frontend/download/images/pdf_gallery/SP_QCS_QLTDG/pdf-094-xref-190391.jpg` | frontend/src/data/mockData.js:2955 |
| `frontend/download/images/pdf_gallery/SP_QCS_QMDNX/pdf-096-xref-194827.jpg` | frontend/src/data/mockData.js:3020 |
| `frontend/download/images/pdf_gallery/SP_QCS_QNG/pdf-083-xref-167396.jpg` | frontend/src/data/mockData.js:3174 |
| `frontend/download/images/pdf_gallery/SP_QCS_QNG/pdf-083-xref-167400.jpg` | frontend/src/data/mockData.js:3173 |
| `frontend/download/images/pdf_gallery/SP_QCS_QPLDT/pdf-095-xref-192676.jpg` | frontend/src/data/mockData.js:2987 |
| `frontend/download/images/pdf_gallery/SP_QCS_QPLDT/pdf-095-xref-192682.jpg` | frontend/src/data/mockData.js:2989 |
| `frontend/download/images/pdf_gallery/SP_QCS_QPLDT/pdf-095-xref-192686.jpg` | frontend/src/data/mockData.js:2988 |
| `frontend/download/images/pdf_gallery/SP_QCS_QSVCP/pdf-088-xref-177551.jpg` | frontend/src/data/mockData.js:3338 |
| `frontend/download/images/pdf_gallery/SP_QCS_QSVCP/pdf-088-xref-177561.jpg` | frontend/src/data/mockData.js:3339 |
| `frontend/download/images/pdf_gallery/SP_QCS_QSVCP/pdf-088-xref-177565.jpg` | frontend/src/data/mockData.js:3337 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTPT/pdf-087-xref-175390.jpg` | frontend/src/data/mockData.js:3305 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTPT/pdf-087-xref-175396.jpg` | frontend/src/data/mockData.js:3306 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTPT/pdf-087-xref-175400.jpg` | frontend/src/data/mockData.js:3304 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTRUYENTHONG/pdf-086-xref-173457.jpg` | frontend/src/data/mockData.js:3272 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTRUYENTHONG/pdf-086-xref-173463.jpg` | frontend/src/data/mockData.js:3273 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTRUYENTHONG/pdf-086-xref-173467.jpg` | frontend/src/data/mockData.js:3271 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTT/pdf-084-xref-169385.jpg` | frontend/src/data/mockData.js:3205 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTT/pdf-084-xref-169391.jpg` | frontend/src/data/mockData.js:3207 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTT/pdf-084-xref-169395.jpg` | frontend/src/data/mockData.js:3206 |
| `frontend/download/images/pdf_gallery/SP_QCS_QTVHL/pdf-089-xref-179814.jpg` | frontend/src/data/mockData.js:3370 |
| `frontend/download/images/pdf_gallery/SP_QCS_QVXL/pdf-092-xref-186359.jpg` | frontend/src/data/mockData.js:3465 |
| `frontend/download/images/pdf_gallery/SP_QCS_QVXL/pdf-092-xref-186365.jpg` | frontend/src/data/mockData.js:3467 |
| `frontend/download/images/pdf_gallery/SP_QCS_QVXL/pdf-092-xref-186369.jpg` | frontend/src/data/mockData.js:3466 |
| `frontend/download/images/product_detail/prod_process_banner.jpg` | frontend/src/pages/ProductDetailPage.jsx:617 |
| `frontend/download/images/product_detail/prod_sample_main.jpg` | frontend/src/data/mockData.js:5275 |
| `frontend/download/images/product_detail/prod_sample_thumb1.jpg` | frontend/src/data/mockData.js:5276 |
| `frontend/download/images/product_detail/prod_sample_thumb2.jpg` | frontend/src/data/mockData.js:5277 |
| `frontend/download/images/product_detail/prod_sample_thumb3.jpg` | frontend/src/data/mockData.js:5278 |
| `frontend/download/images/product_detail/prod_sample_thumb4.jpg` | frontend/src/data/mockData.js:5279 |
| `frontend/download/images/Quạt Chàng Sơn/cauchuyen.png` | frontend/src/data/mockData.js:632 |
| `frontend/download/images/Quạt Chàng Sơn/header.png` | frontend/src/data/mockData.js:630 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1226 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1237 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1248 |
| `frontend/download/images/Quạt Chàng Sơn/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1259 |
| `frontend/download/images/Quạt Chàng Sơn/NguyenMinh.jpg` | frontend/src/data/mockData.js:1991 |
| `frontend/download/images/Quạt Chàng Sơn/PhamMyAnh.jpg` | frontend/src/data/mockData.js:1982 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham1.png` | frontend/src/data/mockData.js:2953 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham2.png` | frontend/src/data/mockData.js:2986 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham3.png` | frontend/src/data/mockData.js:3019 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham4.png` | frontend/src/data/mockData.js:3050 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham5.png` | frontend/src/data/mockData.js:3080 |
| `frontend/download/images/Quạt Chàng Sơn/sanpham6.png` | frontend/src/data/mockData.js:3110 |
| `frontend/download/images/Quạt Chàng Sơn/ThaiLinh.jpg` | frontend/src/data/mockData.js:2000 |
| `frontend/download/images/Quạt Chàng Sơn/tuvan.png` | frontend/src/data/mockData.js:631 |
| `frontend/download/images/Quạt Phương/cauchuyen.png` | frontend/src/data/mockData.js:712 |
| `frontend/download/images/Quạt Phương/header.png` | frontend/src/data/mockData.js:710 |
| `frontend/download/images/Quạt Phương/LuongAnhTuan.avif` | frontend/src/data/mockData.js:2045 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1314 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1325 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1336 |
| `frontend/download/images/Quạt Phương/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1347 |
| `frontend/download/images/Quạt Phương/sanpham1.png` | frontend/src/data/mockData.js:3336 |
| `frontend/download/images/Quạt Phương/sanpham2.png` | frontend/src/data/mockData.js:3369 |
| `frontend/download/images/Quạt Phương/sanpham3.png` | frontend/src/data/mockData.js:3400 |
| `frontend/download/images/Quạt Phương/sanpham4.png` | frontend/src/data/mockData.js:3433 |
| `frontend/download/images/Quạt Phương/sanpham5.png` | frontend/src/data/mockData.js:3464 |
| `frontend/download/images/Quạt Phương/sanpham6.png` | frontend/src/data/mockData.js:3497 |
| `frontend/download/images/Quạt Phương/TranMinhAnh.jpg` | frontend/src/data/mockData.js:2036 |
| `frontend/download/images/Quạt Phương/tuvan.png` | frontend/src/data/mockData.js:711 |
| `frontend/download/images/Quạt Phương/VuThuPhuong.webp` | frontend/src/data/mockData.js:2054 |
| `frontend/download/images/Quạt Từ Tâm/cauchuyen.png` | frontend/src/data/mockData.js:672 |
| `frontend/download/images/Quạt Từ Tâm/header.png` | frontend/src/data/mockData.js:670 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat1.png` | frontend/src/data/mockData.js:1270 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat2.png` | frontend/src/data/mockData.js:1281 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat3.png` | frontend/src/data/mockData.js:1292 |
| `frontend/download/images/Quạt Từ Tâm/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1303 |
| `frontend/download/images/Quạt Từ Tâm/NguyenHaiLinh.jpg` | frontend/src/data/mockData.js:2027 |
| `frontend/download/images/Quạt Từ Tâm/sanpham1.png` | frontend/src/data/mockData.js:3140 |
| `frontend/download/images/Quạt Từ Tâm/sanpham2.png` | frontend/src/data/mockData.js:3172 |
| `frontend/download/images/Quạt Từ Tâm/sanpham3.png` | frontend/src/data/mockData.js:3204 |
| `frontend/download/images/Quạt Từ Tâm/sanpham4.png` | frontend/src/data/mockData.js:3237 |
| `frontend/download/images/Quạt Từ Tâm/sanpham5.png` | frontend/src/data/mockData.js:3270 |
| `frontend/download/images/Quạt Từ Tâm/sanpham6.png` | frontend/src/data/mockData.js:3303 |
| `frontend/download/images/Quạt Từ Tâm/ThanhNguyen.jpg` | frontend/src/data/mockData.js:2018 |
| `frontend/download/images/Quạt Từ Tâm/TranPhuongNhi.jpg` | frontend/src/data/mockData.js:2009 |
| `frontend/download/images/Quạt Từ Tâm/tuvan.png` | frontend/src/data/mockData.js:671 |
| `frontend/download/images/Silk Hạ Vy/cauchuyen.png` | frontend/src/data/mockData.js:1062 |
| `frontend/download/images/Silk Hạ Vy/header.jpg` | frontend/src/data/mockData.js:1060 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat1.jpg` | frontend/src/data/mockData.js:1710 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat2.jpg` | frontend/src/data/mockData.js:1721 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat3.jpg` | frontend/src/data/mockData.js:1732 |
| `frontend/download/images/Silk Hạ Vy/nanglucsanxuat4.png` | frontend/src/data/mockData.js:1743 |
| `frontend/download/images/Silk Hạ Vy/sanpham1.png` | frontend/src/data/mockData.js:5066 |
| `frontend/download/images/Silk Hạ Vy/sanpham2.png` | frontend/src/data/mockData.js:5101 |
| `frontend/download/images/Silk Hạ Vy/sanpham3.png` | frontend/src/data/mockData.js:5136 |
| `frontend/download/images/Silk Hạ Vy/sanpham4.png` | frontend/src/data/mockData.js:5171 |
| `frontend/download/images/Silk Hạ Vy/sanpham5.png` | frontend/src/data/mockData.js:5206 |
| `frontend/download/images/Silk Hạ Vy/sanpham6.png` | frontend/src/data/mockData.js:5240 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/795697006_122177387540702573_3171883097456989638_n.jpg` | frontend/src/data/mockData.js:5137 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/809039048_122177387150702573_1189098113739789235_n.jpg` | frontend/src/data/mockData.js:5138 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/813804480_122177387390702573_2589954493518617100_n.jpg` | frontend/src/data/mockData.js:5139 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/813825139_122177387336702573_7436785209372892926_n.jpg` | frontend/src/data/mockData.js:5140 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa  họa tiết sen hồ điệp/814660566_122177387426702573_2830616196582631165_n.jpg` | frontend/src/data/mockData.js:5141 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/717215950_122168579858702573_8474644397043665798_n.jpg` | frontend/src/data/mockData.js:5172 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/720467700_122168578310702573_2103647288352647541_n.jpg` | frontend/src/data/mockData.js:5173 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/bang-mau-lua-to-tam-nha-xa-bo-cong-anh-7.png` | frontend/src/data/mockData.js:5174 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/bang-mau-lua-to-tam-nha-xa-bo-cong-anh-8-768x768.png` | frontend/src/data/mockData.js:5175 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết bồ công anh/bang-mau-lua-to-tam-nha-xa-bo-cong-anh-9-1-768x768.png` | frontend/src/data/mockData.js:5176 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/844190415_122179810964702573_494931536953348333_n.jpg` | frontend/src/data/mockData.js:5207 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/844544968_122179810382702573_3519689400050281184_n.jpg` | frontend/src/data/mockData.js:5208 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/847908691_122179810634702573_4389983655385714811_n.jpg` | frontend/src/data/mockData.js:5209 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/Lụa họa tiết chấm trắng/image 52.png` | frontend/src/data/mockData.js:5210 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/839960533_122179315058702573_8463421776564176194_n.jpg` | frontend/src/data/mockData.js:5241 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/840094840_122179313270702573_1798523357816591698_n.jpg` | frontend/src/data/mockData.js:5242 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/841013291_122179313234702573_8051992405890746565_n.jpg` | frontend/src/data/mockData.js:5243 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/842308676_122179317332702573_199721434829700862_n.jpg` | frontend/src/data/mockData.js:5244 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết thủy tiên/842329010_122179317548702573_3893334904783706225_n.jpg` | frontend/src/data/mockData.js:5245 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/115.png` | frontend/src/data/mockData.js:5067 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/116.png` | frontend/src/data/mockData.js:5068 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/118.png` | frontend/src/data/mockData.js:5069 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/119.png` | frontend/src/data/mockData.js:5070 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết trống đồng/image 59.png` | frontend/src/data/mockData.js:5071 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/750055114_122171963312702573_5773349679271158708_n.jpg` | frontend/src/data/mockData.js:5102 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/750975528_122171962916702573_1670322622917590725_n.jpg` | frontend/src/data/mockData.js:5103 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/751403216_122171963600702573_2332413209466842260_n.jpg` | frontend/src/data/mockData.js:5104 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/798797572_122176819682702573_472252852712524341_n.jpg` | frontend/src/data/mockData.js:5105 |
| `frontend/download/images/Silk Hạ Vy/Trang chi tiết sản phẩm Silk Hạ Vy/lụa họa tiết văn bèo/vn-11134207-7ras8-m15e69mtlxmj33.webp` | frontend/src/data/mockData.js:5106 |
| `frontend/download/images/Silk Hạ Vy/tuvan.jpg` | frontend/src/data/mockData.js:1061 |
| `frontend/download/images/Trang chủ/banner.jpg` | frontend/src/data/homeData.js:13 |
| `frontend/download/images/Trang chủ/header.png` | frontend/src/data/homeData.js:1 |
| `frontend/download/images/Trang chủ/langnghe1.jpg` | frontend/src/data/homeData.js:8 |
| `frontend/download/images/Trang chủ/langnghe2.jpg` | frontend/src/data/homeData.js:9 |
| `frontend/download/images/Trang chủ/langnghe3.png` | frontend/src/data/homeData.js:10 |
| `frontend/download/images/Trang chủ/langnghe4.jpeg` | frontend/src/data/homeData.js:11 |
| `frontend/download/images/Trang chủ/langnghe5.jpeg` | frontend/src/data/homeData.js:12 |
| `frontend/download/images/Trang chủ/sanphamnoibat1.png` | frontend/src/data/homeData.js:2 |
| `frontend/download/images/Trang chủ/sanphamnoibat2.jpg` | frontend/src/data/homeData.js:3 ; frontend/src/data/mockData.js:107 |
| `frontend/download/images/Trang chủ/sanphamnoibat3.png` | frontend/src/data/homeData.js:4 |
| `frontend/download/images/Trang chủ/sanphamnoibat4.jpeg` | frontend/src/data/homeData.js:5 |
| `frontend/download/images/Trang chủ/sanphamnoibat5.jpeg` | frontend/src/data/homeData.js:6 |
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
| `frontend/src/assets/floral-sketch-pattern.svg` | frontend/src/styles.css:121 ; frontend/src/styles.css:294 ; frontend/src/styles.css:2461 |

## Ảnh chưa thấy tham chiếu hoặc bản sao được tham chiếu

Mở các ảnh dưới đây trước khi gắn vào sản phẩm. Tên thư mục chỉ là gợi ý; so đúng sản phẩm trong trang PDF. Bản sao trùng byte của ảnh đã tham chiếu được tra trong CSV, không liệt kê lại ở đây.

### frontend/download/images (147 file)

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
- `frontend/download/images/CS Mây tre việt quang/duan1.jpg`
- `frontend/download/images/CS Mây tre việt quang/duan2.jpg`
- `frontend/download/images/CS Mây tre việt quang/duan3.jpg`
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
