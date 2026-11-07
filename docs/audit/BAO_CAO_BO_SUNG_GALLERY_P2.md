# Bổ sung gallery P2.1–P2.10

Đã trích 74 ảnh nhúng trong PDF cho 32 sản phẩm, bổ sung thêm 3 ảnh có sẵn trong kho cho 2 sản phẩm. Đối chiếu ảnh với sản phẩm trước khi gắn. Nguồn, trang PDF và SHA-256 xem `PDF_GALLERY_NGUON.csv` và `TEMPLATE_GALLERY_NGUON.csv`.

Trong 60 sản phẩm P2.1–P2.10, 42 sản phẩm có từ 2 ảnh trở lên; 18 sản phẩm vẫn chỉ có một ảnh chính. Các thumbnail mẫu sai sản phẩm trong PDF không được gắn. Chưa kết luận giao diện hoàn thiện.

Riêng Việt Quang, sáu ảnh chính của PDF 51–56 đã dùng lần lượt `sanpham1.jpg`, `sanpham2.png`, `sanpham3.jpg`, `sanpham4.png`, `sanpham5.png`, `sanpham6.png` từ `template/Ảnh làng nghề_/CS Mây tre việt quang`; đã đối chiếu SHA-256 giữa ảnh nguồn và ảnh runtime. Các sản phẩm này chỉ còn thiếu **ảnh phụ khác góc**, không phải thiếu ảnh chính.

| Trang PDF | ID sản phẩm | Tên |
|---|---|---|
| 97 | `SP_QCS_QLHPS` | Quạt Liên Hoa Phấn Sắc |
| 98 | `SP_QCS_QSTLB` | Quạt Sơn Thủy Lục Bảo |
| 99 | `SP_QCS_QHLTM` | Quạt Hắc Liên Thủy Mặc |
| 51 | `SP_MTD_TXMTDHD` | Túi Xách Mây Tre Đan Hồng Đan |
| 52 | `SP_MTD_GMTDM` | Ghế Mây Tựa Đan Mộc |
| 53 | `SP_MTD_LLMTDT` | Lót Ly Mây Tre Đan Tròn |
| 54 | `SP_MTD_DGSVMT` | Đĩa Gốm Sứ Viền Mây Tre |
| 55 | `SP_MTD_KMMD` | Khay Mây Đựng Đồ |
| 56 | `SP_MTD_HDGMTD` | Hộp Đựng Giấy Mây Tre Đan |
| 59 | `SP_MTD_TXMNG` | Túi Xách Mây Nắp Gập |
| 60 | `SP_MTD_TXMTDDT` | Túi Xách Mây Tre Đan Dáng Trống |
| 61 | `SP_MTD_VMTDHTHH` | Vali Mây Tre Đan Họa Tiết Hình Học |
| 62 | `SP_MTD_BGTTUT` | Bộ Giành Tích Ủ Trà |
| 71 | `SP_GBT_15` | Ngói mũi hài vàng hổ phách |
| 72 | `SP_GBT_16` | Bộ ấm trà quả hồng |
| 73 | `SP_GBT_17` | Bộ ấm chén tử sa |
| 74 | `SP_GBT_18` | Nồi đất Nodacook |
| 43 | `SP_GBT_25` | Bộ ấm trà Lam Điệp |

Đã build Vite thành công, inventory không có tham chiếu ảnh bị thiếu. Kiểm tra Edge headless 8 gallery đại diện: ảnh thumbnail tải được, nhấn thumbnail đổi ảnh chính, không có lỗi JavaScript; xem PDF_GALLERY_KIEM_TRA.json. Chưa nghiệm thu toàn bộ giao diện so với PDF hoặc trên mobile.
