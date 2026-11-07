> **Cập nhật sau báo cáo:** Số liệu gallery bên dưới là mốc cũ. Đã bổ sung ảnh từ PDF và kho; xem `BAO_CAO_BO_SUNG_GALLERY_P2.md` và `PDF_PAGE_STATUS.csv` để lấy hiện trạng.

# Báo cáo kiểm tra và đối chiếu ảnh P2.6–P2.10

Mốc thực hiện: **07/11/2026**.
Đối chiếu `template/WEBSITE.pdf` (trang 21–22, 29, 63–77, 82–99) với `frontend/src/data/mockData.js`, thư mục `template/Ảnh làng nghề_` và `frontend/download/images`.

**Kiểm tra lại:** Đã sửa ngày review Lương Anh Tuấn thành 27/08/2026 theo PDF 76. Danh sách 46 ảnh trong `P2_NGUON_ANH.csv` khớp SHA-256 giữa nguồn và đích. Đã mở 5 route cơ sở và 5 route sản phẩm đại diện bằng Edge headless ở 1440px; kết quả xem [P2_6_DEN_P2_10_TRINH_DUYET.json](P2_6_DEN_P2_10_TRINH_DUYET.json). Không khẳng định đã kiểm tra tất cả 30 route hoặc toàn bộ template trên trình duyệt.

---

## 1. Kết quả xử lý tồn đọng P2.1–P2.5 (22 sản phẩm chỉ có 1 ảnh)

- **Hiện trạng:** Trong 30 sản phẩm của 5 cơ sở P2.1–P2.5, có 8 sản phẩm có gallery chi tiết (6 của Hoàng Anh Ceramics: PDF 30–35; 2 của Bách Ngân Hỷ: PDF 36–37). 22 sản phẩm còn lại chỉ có 1 ảnh chính trong dữ liệu.
- **Rà soát kho nguồn:** Đã rà soát toàn bộ thư mục con trong `template/Ảnh làng nghề_` (bao gồm `CS bách ngân hỷ`, `CS Gốm Mạnh Hoa`, `CS Mây tre việt quang`, `CS mây tre đan tuấn anh`, `Gốm Bát Tràng/...`, `Mây tre đan Phú Vinh/...`):
  - `template/Ảnh làng nghề_` không có các thư mục crop chi tiết riêng cho 4 sản phẩm sau của Bách Ngân Hỷ (PDF 38–41: Cherry Collection, Cốc túi cafe, Rổ gốm, Hũ Hỷ Xuân Hoa).
  - Không có thư mục crop chi tiết cho 6 sản phẩm Gốm Mạnh Hoa (PDF 43–48).
  - Không có thư mục crop chi tiết cho 6 sản phẩm Mây Tre Đan Việt Quang (PDF 51–56) và 6 sản phẩm Mây Tre Đan Tuấn Anh (PDF 57–62).
  - Đối chiếu thiết kế PDF: Trên các trang PDF 51–62, hàng thumbnail chi tiết thực tế sử dụng các icon/placeholder mẫu hoặc lặp lại ảnh mẫu không liên quan.
- **Xử lý theo nguyên tắc cam kết:** Tuyệt đối không gắn nhầm/ghép ảnh tùy tiện từ sản phẩm khác để bù số lượng. Giữ nguyên 1 ảnh chính đã được đối chiếu chuẩn xác cho từng sản phẩm. Ghi nhận rõ nguồn gallery chi tiết còn thiếu và giữ trạng thái các trang này là **MỘT PHẦN**.

---

## 2. Kết quả kiểm tra P2.6–P2.10

### 2.1. Tổng quan 5 cơ sở mới

| Cơ sở | Trang PDF | Ảnh cơ sở (Hero, Tư vấn, Câu chuyện) | Năng lực sản xuất | Review (Tên & Avatar khớp thiết kế) | Ảnh sản phẩm (6 SP/cơ sở) | Trạng thái |
|---|---|---|---|---|---|---|
| **Gốm Tới Liên** (`GBT_GTL`) | PDF 21, 29, 63–68 | Header.jpg, tuvan.jpg, cauchuyen.png | 4/4 ảnh năng lực | 3/3 avatar (`HaMaiPhuong.png`, `TranVanMinh.png`, `LuThanhHa.png`) | 6/6 sản phẩm có ảnh chính; 1 ảnh/SP | MỘT PHẦN |
| **Gốm Hải Long** (`GBT_GHL`) | PDF 22, 69–74 | header .jpg, tuvan.jpg, cauchuyen.jpg | 4/4 ảnh năng lực | 3/3 avatar (`TranKhanhLinh.jpg`, `DoNgocMai.jpg`, `NguyenDucThanh.jpg`) | 6/6 sản phẩm có ảnh chính; 1 ảnh/SP | MỘT PHẦN |
| **Quạt Từ Tâm** (`QCS_QTT`) | PDF 75, 82–87 | header.png, tuvan.png, cauchuyen.png | 4/4 ảnh năng lực | 3/3 avatar (`TranPhuongNhi.jpg`, `ThanhNguyen.jpg`, `NguyenHaiLinh.jpg`) | 6/6 sản phẩm có ảnh chính; 1 ảnh/SP | MỘT PHẦN |
| **Quạt Phương** (`QCS_QP`) | PDF 76, 88–93 | header.png, tuvan.png, cauchuyen.png | 4/4 ảnh năng lực | 3/3 avatar (`TranMinhAnh.jpg`, `LuongAnhTuan.avif`, `VuThuPhuong.webp`) | 6/6 sản phẩm có ảnh chính; 1 ảnh/SP | MỘT PHẦN |
| **Quạt Chàng Sơn** (`QCS_QCS`) | PDF 77, 94–99 | header.png, tuvan.png, cauchuyen.png | 4/4 ảnh năng lực | 3/3 avatar (`PhamMyAnh.jpg`, `NguyenMinh.jpg`, `ThaiLinh.jpg`) | 6/6 sản phẩm có ảnh chính; 1 ảnh/SP | MỘT PHẦN |

### 2.2. Chi tiết từng cơ sở

#### P2.6: Gốm Tới Liên (`GBT_GTL` — PDF 21, 29 và 63–68)
- **Cơ sở (PDF 21, 29):**
  - Hero header: `/images/CS Gốm tới liên/Header.jpg` (khớp file template 114.281 bytes).
  - Tư vấn: `/images/CS Gốm tới liên/tuvan.jpg` (khớp file template 109.427 bytes).
  - Câu chuyện: `/images/CS Gốm tới liên/cauchuyen.png` (khớp file template 949.333 bytes).
  - Năng lực sản xuất: 4 mục (`nanglucsanxuat1.jpg`, `nanglucsanxuat2.jpg`, `nanglucsanxuat3.png`, `nanglucsanxuat4.jpg`).
- **Đánh giá & Avatar:**
  - Sao chép 3 avatar với tên tệp chuẩn từ `template/Ảnh làng nghề_/CS Gốm tới liên/`: `HaMaiPhuong.png` (Hà Mai Phương), `TranVanMinh.png` (Trần Văn Minh), `LuThanhHa.png` (Lữ Thanh Hà).
  - SHA-256 khớp tuyệt đối với các bản trước đây lưu dưới tên `avatar 1.png`, `avatar 2.png`, `avatar3.png`.
  - Cập nhật đường dẫn avatar trong `mockData.js` trỏ trực tiếp `/download/images/CS Gốm tới liên/HaMaiPhuong.png`, v.v.
- **Sản phẩm (PDF 63–68):**
  - 6 sản phẩm: `SP_GBT_19` (Ấm Bạch Cúc, p.63), `SP_GBT_20` (Ấm Rồng Vân Mây, p.64), `SP_GBT_21` (Ấm Cá Chép Hóa Rồng, p.65), `SP_GBT_22` (Bộ ấm chén Sen, p.66), `SP_GBT_23` (Ấm hoa Sen, p.67), `SP_GBT_24` (Hũ đựng trà Sen, p.68).
  - Cả 6 sản phẩm trỏ đúng ảnh chính (`sanpham1.jpg` đến `Sanpham6.jpg`). Template không có bộ ảnh gallery chi tiết riêng; giữ 1 ảnh/sản phẩm.

#### P2.7: Gốm Hải Long (`GBT_GHL` — PDF 22 và 69–74)
- **Cơ sở (PDF 22):**
  - Hero header: `/images/CS gốm hải long/header .jpg` (421.362 bytes).
  - Tư vấn: `/images/CS gốm hải long/tuvan.jpg` (180.894 bytes).
  - Câu chuyện: `/images/CS gốm hải long/cauchuyen.jpg` (297.580 bytes).
  - Năng lực sản xuất: 4 mục (`nanglucsanxuat1.jpg`, `nanglucsanxuat2.png`, `nanglucsanxuat3.jpg`, `nanglucsanxuat4.jpg`).
- **Đánh giá & Avatar:**
  - Sao chép 3 avatar từ `template/Ảnh làng nghề_/CS gốm hải long/`:
    - `TranKhanhLinh.jpg` (156.783 bytes, SHA-256 `c14370ae16f4...`) gắn cho Trần Khánh Linh.
    - `DoNgocMai.jpg` (496.436 bytes, SHA-256 `d2e7dbde86ae...`) gắn cho Đỗ Ngọc Mai.
    - `NguyenDucThanh.jpg` (160.488 bytes, SHA-256 `f492d992e2ed...`) gắn cho Nguyễn Đức Thành.
  - Cập nhật `mockData.js` thay thế các giá trị `avatar: null`.
- **Sản phẩm (PDF 69–74):**
  - 6 sản phẩm: `SP_GBT_13` (Nồi đất vẽ tay họa tiết, p.69), `SP_GBT_14` (Bình hút tài lộc, p.70), `SP_GBT_15` (Ngói mũi hài vàng hổ phách, p.71), `SP_GBT_16` (Bộ ấm trà quả hồng, p.72), `SP_GBT_17` (Bộ ấm chén tử sa, p.73), `SP_GBT_18` (Nồi đất Nodacook, p.74).
  - Trỏ đúng 6 ảnh sản phẩm chính trong dữ liệu (`sanpham1.jpg`, `sanpham2.png`, `sanpham3.png`, `sanpham4.jpg`, `sanpham3.jpg`, `sanpham6.png`). Template không có gallery riêng; giữ 1 ảnh/sản phẩm.

#### P2.8: Quạt Từ Tâm (`QCS_QTT` — PDF 75 và 82–87)
- **Cơ sở (PDF 75):**
  - Hero header: `/images/Quạt Từ Tâm/header.png` (1.274.776 bytes).
  - Tư vấn: `/images/Quạt Từ Tâm/tuvan.png` (1.037.400 bytes).
  - Câu chuyện: `/images/Quạt Từ Tâm/cauchuyen.png` (979.128 bytes).
  - Năng lực sản xuất: 4 mục (`nanglucsanxuat1.png` đến `nanglucsanxuat4.png`).
- **Đánh giá & Avatar:**
  - Đối chiếu tên người đánh giá theo PDF 75: tên trong mock cũ là tên tự đặt (`Trần Phương Ý`, `Trần Văn Quân`, `Nguyễn Yến Chi`). Sửa lại đúng thiết kế PDF:
    - Review 1: **Trần Phương Nhi** (25/02/2026).
    - Review 2: **Thành Nguyễn** (07/02/2025).
    - Review 3: **Nguyễn Hải Linh** (14/04/2026).
  - Sao chép 3 avatar từ `template/Ảnh làng nghề_/avatar feedback/`:
    - `TranPhuongNhi.jpg` (306.035 bytes, SHA-256 `8433bebdc6d4...`).
    - `ThanhNguyen.jpg` (48.380 bytes, SHA-256 `48f93289db63...`).
    - `NguyenHaiLinh.jpg` (55.217 bytes, SHA-256 `f2e7fdcea683...`).
  - Gắn avatar và cập nhật `mockData.js`.
- **Sản phẩm (PDF 82–87):**
  - 6 sản phẩm: `SP_QCS_QKH` (Quạt Khang Hi, p.82), `SP_QCS_QNG` (Quạt Nan Gỗ, p.83), `SP_QCS_QTT` (Quạt Tranh Tết, p.84), `SP_QCS_QHVCC` (Quạt Hoa Văn Cao Cấp, p.85), `SP_QCS_QTRUYENTHONG` (Quạt Truyền Thống, p.86), `SP_QCS_QTPT` (Quạt Tranh Phong Thủy, p.87).
  - Trỏ đúng `sanpham1.png` đến `sanpham6.png`. Template không có gallery riêng; giữ 1 ảnh/sản phẩm.

#### P2.9: Quạt Phương (`QCS_QP` — PDF 76 và 88–93)
- **Cơ sở (PDF 76):**
  - Hero header: `/download/images/Quạt Phương/header.png` (1.379.528 bytes).
  - **Sửa lỗi hoán đổi ảnh:** Trước đây `consultation` bị trỏ nhầm sang `cauchuyen.png`, còn `imageStory` trỏ nhầm sang `tuvan.png`. Đã sửa lại: `consultation = tuvan.png`, `imageStory = cauchuyen.png`.
  - Năng lực sản xuất: 4 mục (`nanglucsanxuat1.png` đến `nanglucsanxuat4.png`).
- **Đánh giá & Avatar:**
  - Đối chiếu tên người đánh giá theo PDF 76: tên cũ trong mock là tên tự đặt (`Trần Thu Anh`, `Nguyễn Thị Kim Chi`, `Trần Tuấn Nam`). Sửa lại đúng thiết kế PDF:
    - Review 1: **Trần Minh Anh** (19/10/2026).
    - Review 2: **Lương Anh Tuấn** (27/08/2026).
    - Review 3: **Vũ Thu Phương** (03/04/2026).
  - Sao chép 3 avatar từ `template/Ảnh làng nghề_/avatar feedback/`:
    - `TranMinhAnh.jpg` (150.718 bytes, SHA-256 `23cb60802206...`).
    - `LuongAnhTuan.avif` (25.903 bytes, SHA-256 `2cf39a0f9e57...`).
    - `VuThuPhuong.webp` (37.746 bytes, SHA-256 `b1eae54a020d...`).
  - Gắn avatar và cập nhật `mockData.js`.
- **Sản phẩm (PDF 88–93):**
  - 6 sản phẩm: `SP_QCS_QSVCP` (Quạt Sắc Việt Cổ Phong, p.88), `SP_QCS_QTVHL` (Quạt Thanh Vũ Hoa Lam, p.89), `SP_QCS_QKHCT` (Quạt Kim Hoa Cát Tường, p.90), `SP_QCS_QLDH` (Quạt Lam Đồ Họa, p.91), `SP_QCS_QVXL` (Quạt Vân Xoắn Lam, p.92), `SP_QCS_QHXDG` (Quạt Hội Xuân Dân Gian, p.93).
  - Trỏ đúng `sanpham1.png` đến `sanpham6.png`. Template không có gallery riêng; giữ 1 ảnh/sản phẩm.

#### P2.10: Quạt Chàng Sơn (`QCS_QCS` — PDF 77 và 94–99)
- **Cơ sở (PDF 77):**
  - **Chuẩn hóa tệp và sửa lỗi lệch chỉ mục năng lực/story:**
    - Trước đây, thư mục runtime dùng tên tệp số hóa (`52.png` đến `59.png`, `nlsx1.png` đến `nlsx5.png`). Tệp `nlsx1.png` thực chất là `cauchuyen.png`, dẫn đến `imageStory` bị trỏ nhầm sang `52.png` (ảnh header), còn 4 năng lực sản xuất bị lệch chỉ mục (năng lực 1 nhận ảnh story, năng lực 4 bị mất ảnh 4).
    - Đã sao chép các tệp với tên chuẩn từ `template/Ảnh làng nghề_/Quạt Chàng Sơn/` sang runtime: `header.png`, `tuvan.png`, `cauchuyen.png`, `nanglucsanxuat1.png` đến `nanglucsanxuat4.png`, `sanpham1.png` đến `sanpham6.png`.
    - Cập nhật `mockData.js`:
      - `header`: `/download/images/Quạt Chàng Sơn/header.png`
      - `consultation`: `/download/images/Quạt Chàng Sơn/tuvan.png`
      - `imageStory`: `/download/images/Quạt Chàng Sơn/cauchuyen.png`
      - 4 năng lực trỏ chuẩn xác `nanglucsanxuat1.png` đến `nanglucsanxuat4.png`.
- **Đánh giá & Avatar:**
  - Đối chiếu tên người đánh giá theo PDF 77: tên cũ trong mock là tên tự đặt (`Phạm Như Quỳnh`, `Nguyễn Thái Tuấn`, `Hiền Chi`). Sửa lại đúng thiết kế PDF:
    - Review 1: **Phạm Mỹ Anh** (11/01/2026).
    - Review 2: **Nguyễn Minh** (15/06/2025).
    - Review 3: **Thái Linh** (01/02/2026).
  - Sao chép 3 avatar từ `template/Ảnh làng nghề_/avatar feedback/`:
    - `PhamMyAnh.jpg` (16.115 bytes, SHA-256 `682606ba3b8f...`).
    - `NguyenMinh.jpg` (74.360 bytes, SHA-256 `b3942f77160e...`).
    - `ThaiLinh.jpg` (123.212 bytes, SHA-256 `0eb501627405...`).
  - Gắn avatar và cập nhật `mockData.js`.
- **Sản phẩm (PDF 94–99):**
  - 6 sản phẩm: `SP_QCS_QLTDG` (Quạt Linh Thú Dân Gian, p.94), `SP_QCS_QPLDT` (Quạt Phúc Lộc Đồng Tử, p.95), `SP_QCS_QMDNX` (Quạt Mai Điểu Nghênh Xuân, p.96), `SP_QCS_QLHPS` (Quạt Liên Hoa Phấn Sắc, p.97), `SP_QCS_QSTLB` (Quạt Sơn Thủy Lục Bảo, p.98), `SP_QCS_QHLTM` (Quạt Hắc Liên Thủy Mặc, p.99).
  - Chuyển đường dẫn ảnh chính từ tên số cũ (`53.png` - `58.png`) sang tên chuẩn `sanpham1.png` đến `sanpham6.png`. Template không có gallery riêng; giữ 1 ảnh/sản phẩm.

---

## 3. Danh mục tài sản mới sao chép và băm SHA-256

Tổng cộng **28 tệp** được sao chép và cập nhật bổ sung vào [P2_NGUON_ANH.csv](P2_NGUON_ANH.csv) (nâng tổng số mục ghi nhận trong CSV lên 46 dòng):

| Trang PDF | Vai trò | Tệp nguồn trong `template/` | Tệp đích trong `frontend/download/images/` | Dung lượng | SHA-256 |
|---:|---|---|---|---:|---|
| 21 | Review avatar: Hà Mai Phương | `template/Ảnh làng nghề_/CS Gốm tới liên/HaMaiPhuong.png` | `CS Gốm tới liên/HaMaiPhuong.png` | 254.896 | `b90fd6909877fb1dba85c76d49c32b0b1a5548cba1cff30a7462d11cd243b788` |
| 21 | Review avatar: Trần Văn Minh | `template/Ảnh làng nghề_/CS Gốm tới liên/TranVanMinh.png` | `CS Gốm tới liên/TranVanMinh.png` | 156.446 | `dd6245589200b900f4e2012ffc573b569e75027f947e733a7249e9693ff82bb1` |
| 21 | Review avatar: Lữ Thanh Hà | `template/Ảnh làng nghề_/CS Gốm tới liên/LuThanhHa.png` | `CS Gốm tới liên/LuThanhHa.png` | 322.528 | `7ff6fc0e15f96b721cdaae118828530285e98633117320f4e3013bc4a86c92fa` |
| 22 | Review avatar: Trần Khánh Linh | `template/Ảnh làng nghề_/CS gốm hải long/TranKhanhLinh.jpg` | `CS gốm hải long/TranKhanhLinh.jpg` | 156.783 | `c14370ae16f45e2270904d9b43aa130424564c7ad3d8d69784f1b4e2a2254e0b` |
| 22 | Review avatar: Đỗ Ngọc Mai | `template/Ảnh làng nghề_/CS gốm hải long/DoNgocMai.jpg` | `CS gốm hải long/DoNgocMai.jpg` | 496.436 | `d2e7dbde86aef0b40e791e8430b8e62d55986fc015e5a2db34ff3db89d564fa7` |
| 22 | Review avatar: Nguyễn Đức Thành | `template/Ảnh làng nghề_/CS gốm hải long/NguyenDucThanh.jpg` | `CS gốm hải long/NguyenDucThanh.jpg` | 160.488 | `f492d992e2edb498fbe83533fb357a75fe1bfebce099c235bfd31b26ba8c7159` |
| 75 | Review avatar: Trần Phương Nhi | `template/Ảnh làng nghề_/avatar feedback/TranPhuongNhi.jpg` | `Quạt Từ Tâm/TranPhuongNhi.jpg` | 306.035 | `8433bebdc6d48243884b25ec3a241e54911ea13e9a4f6cf752c00d43a509930f` |
| 75 | Review avatar: Thành Nguyễn | `template/Ảnh làng nghề_/avatar feedback/ThanhNguyen.jpg` | `Quạt Từ Tâm/ThanhNguyen.jpg` | 48.380 | `48f93289db637a544aa3fc644788390979be2d02b8d0a8b9829ec38ee59049a4` |
| 75 | Review avatar: Nguyễn Hải Linh | `template/Ảnh làng nghề_/avatar feedback/NguyenHaiLinh.jpg` | `Quạt Từ Tâm/NguyenHaiLinh.jpg` | 55.217 | `f2e7fdcea683ba28ca948b8fe0a969e2ae2fe143f2a893cb99daea82110cf9ca` |
| 76 | Review avatar: Trần Minh Anh | `template/Ảnh làng nghề_/avatar feedback/TranMinhAnh.jpg` | `Quạt Phương/TranMinhAnh.jpg` | 150.718 | `23cb6080220677840133a8ce9a490cf15c5457a41da105d15ca3f98c8e1dcf6d` |
| 76 | Review avatar: Lương Anh Tuấn | `template/Ảnh làng nghề_/avatar feedback/LuongAnhTuan.avif` | `Quạt Phương/LuongAnhTuan.avif` | 25.903 | `2cf39a0f9e578fa6cbdf6fa301ec946e6a11e86095368a5c6436e2f418d1ec46` |
| 76 | Review avatar: Vũ Thu Phương | `template/Ảnh làng nghề_/avatar feedback/VuThuPhuong.webp` | `Quạt Phương/VuThuPhuong.webp` | 37.746 | `b1eae54a020d2cbb6d28373b9e494a8211b606f156d108d3feec4188fa6322ad` |
| 77 | Review avatar: Phạm Mỹ Anh | `template/Ảnh làng nghề_/avatar feedback/PhamMyAnh.jpg` | `Quạt Chàng Sơn/PhamMyAnh.jpg` | 16.115 | `682606ba3b8f2bf5be2d75f32ebf1181f7051911855a008a280d091e9fbf8434` |
| 77 | Review avatar: Nguyễn Minh | `template/Ảnh làng nghề_/avatar feedback/NguyenMinh.jpg` | `Quạt Chàng Sơn/NguyenMinh.jpg` | 74.360 | `b3942f77160e15264b96181f21136bfe61376e10f1309f45f952f4eb273ee6ff` |
| 77 | Review avatar: Thái Linh | `template/Ảnh làng nghề_/avatar feedback/ThaiLinh.jpg` | `Quạt Chàng Sơn/ThaiLinh.jpg` | 123.212 | `0eb501627405e3b092ba1ca65a46222b9c73ff2675662bb16fcf63471dfef5a2` |
| 77 | Facility hero header | `template/Ảnh làng nghề_/Quạt Chàng Sơn/header.png` | `Quạt Chàng Sơn/header.png` | 1.262.854 | `ecfd0a807a7ae862eb9bf486fb79a1cc6c2f9024f2852eb6a132174cbfda41ec` |
| 77 | Facility story image | `template/Ảnh làng nghề_/Quạt Chàng Sơn/cauchuyen.png` | `Quạt Chàng Sơn/cauchuyen.png` | 1.698.570 | `a8b1932f3da7e4ce22c66c075ec9c79fa697476566cb4be58ea9c8119eb45152` |
| 77 | Facility consultation image | `template/Ảnh làng nghề_/Quạt Chàng Sơn/tuvan.png` | `Quạt Chàng Sơn/tuvan.png` | 1.345.553 | `c37a1afe893e2ceae0fb872013919b4b0e51515efbb0ee37851d7ff1435fc607` |
| 77 | Facility capacity 1 | `template/Ảnh làng nghề_/Quạt Chàng Sơn/nanglucsanxuat1.png` | `Quạt Chàng Sơn/nanglucsanxuat1.png` | 866.330 | `a2cdbfaf75b77f5b3fc8cf36f0aafe097f4fa1154c151fb789fe1737be594d2f` |
| 77 | Facility capacity 2 | `template/Ảnh làng nghề_/Quạt Chàng Sơn/nanglucsanxuat2.png` | `Quạt Chàng Sơn/nanglucsanxuat2.png` | 1.030.358 | `39e12e9e1cbe419842a27ffb2a0d180862d294627bb57764d852a6a1aa56e5df` |
| 77 | Facility capacity 3 | `template/Ảnh làng nghề_/Quạt Chàng Sơn/nanglucsanxuat3.png` | `Quạt Chàng Sơn/nanglucsanxuat3.png` | 944.851 | `1e048e16d225103c80a5e840d246603a116cfc9d2c67ba05342a3560b411d3fa` |
| 77 | Facility capacity 4 | `template/Ảnh làng nghề_/Quạt Chàng Sơn/nanglucsanxuat4.png` | `Quạt Chàng Sơn/nanglucsanxuat4.png` | 864.909 | `d96d3ff5e675037d40dd55a5b1c5545f9589d38fa22fc07f7c11f71dfca54c76` |
| 94 | Product 1 (SP_QCS_QLTDG) | `template/Ảnh làng nghề_/Quạt Chàng Sơn/sanpham1.png` | `Quạt Chàng Sơn/sanpham1.png` | 284.596 | `274f4d0e7c569128f731174c1cb417d4769ff012586ce307a048a1d7c3584852` |
| 95 | Product 2 (SP_QCS_QPLDT) | `template/Ảnh làng nghề_/Quạt Chàng Sơn/sanpham2.png` | `Quạt Chàng Sơn/sanpham2.png` | 378.130 | `d4327dff9fb37ee807f6c382f7e7195d4ea8fe8251e06fa536b53982e705b736` |
| 96 | Product 3 (SP_QCS_QMDNX) | `template/Ảnh làng nghề_/Quạt Chàng Sơn/sanpham3.png` | `Quạt Chàng Sơn/sanpham3.png` | 332.974 | `143ad108290b240ff1b5f63d911b3bc5b8c3ff6f3f0196238b6d396a55ec176d` |
| 97 | Product 4 (SP_QCS_QLHPS) | `template/Ảnh làng nghề_/Quạt Chàng Sơn/sanpham4.png` | `Quạt Chàng Sơn/sanpham4.png` | 356.677 | `2f78aa2ae8ded13463a5f84d3b664e5262c2f78c85eb0579e2d36fa33c2ef335` |
| 98 | Product 5 (SP_QCS_QSTLB) | `template/Ảnh làng nghề_/Quạt Chàng Sơn/sanpham5.png` | `Quạt Chàng Sơn/sanpham5.png` | 400.510 | `b54023128d34346eec11cb93450c188bcaeb1a052ff39f50e7960fa3ce82db37` |
| 99 | Product 6 (SP_QCS_QHLTM) | `template/Ảnh làng nghề_/Quạt Chàng Sơn/sanpham6.png` | `Quạt Chàng Sơn/sanpham6.png` | 375.628 | `982f8c4c347ec87b9cc414ea54fe97ec89da260790100d8d21ff3d9385ceb52f` |

---

## 4. Kết quả kiểm tra kỹ thuật và build

1. **Kiểm tra kho ảnh (`python docs/audit/generate_inventory.py`):**
   - Tổng cộng: **1.415 file ảnh**, 655 nội dung SHA-256 độc nhất.
   - Tham chiếu literal trong code/data: **494 lượt**, **0 missing references**.
   - 91/91 sản phẩm có tên và ảnh phân giải được; 0 trùng lặp ID.
   - Đủ 45 đánh giá cho 15 cơ sở. Đã có 30/45 đánh giá (10 cơ sở P2.1–P2.10) có avatar ảnh thật khớp thiết kế PDF.
2. **Kiểm tra file dữ liệu ([P2_6_DEN_P2_10_KIEM_TRA.json](P2_6_DEN_P2_10_KIEM_TRA.json)):**
   - 5/5 cơ sở có đầy đủ ảnh hero, tư vấn, câu chuyện và 4 năng lực sản xuất (tất cả file đều tồn tại trên đĩa).
   - 15/15 đường dẫn avatar review tồn tại; tên đã so với PDF, ngày Lương Anh Tuấn được sửa khi kiểm tra lại.
   - 30/30 sản phẩm có đường dẫn ảnh chính tồn tại trên đĩa. Kiểm tra này dùng `fs.existsSync`, không mở 30 route trên trình duyệt.
   - **Số file thiếu: 0**.
3. **Kiểm tra Vite build (`vite build`):**
   - 810 modules transformed.
   - Bundle production thành công trong 4.10s (Vite v6.4.5), không có bất kỳ lỗi cú pháp, import hay tài nguyên tĩnh nào.

---

## 5. Giới hạn và các bước tiếp theo

- **Giới hạn nghiệm thu:** Đã đối chiếu ảnh chính và các trường được kiểm tra cho 5 cơ sở và 30 sản phẩm; chưa thể kết luận toàn bộ data và template đã khớp PDF. Cụ thể:
  - 30 sản phẩm này chưa có nguồn gallery ảnh chi tiết trong `template/Ảnh làng nghề_` (giữ 1 ảnh/sản phẩm).
  - Giao diện chưa thực hiện kiểm tra thị giác pixel-by-pixel toàn trang so với PDF layout (các trang vẫn giữ trạng thái **MỘT PHẦN** theo đúng nguyên tắc kế hoạch).
- **Bước tiếp theo:**
  - Tiếp tục thực hiện P2.11 đến P2.15 (5 cơ sở còn lại: Hoa Nón Làng Chuông, HTX Tạ Thu Hương, Nón Lá Hải Yến, Lụa Nha Xá, Silk Hạ Vy).

