# Đối chiếu và sửa năm trang mẫu sản phẩm

> Ngày 10/11/2026: đã đối chiếu hai ô ảnh đặc điểm của 60 trang P2, sửa ánh xạ cho thêm 41 trang. Xem [báo cáo ảnh đặc điểm](DOI_CHIEU_ANH_DAC_DIEM_P2.md) và [danh sách nguồn ảnh](PDF_FEATURE_IMAGES.csv); các dòng cũ bên dưới là mốc trước lượt này.

> PDF 82 — Quạt Khang Hi: đã thay ảnh ở hai ô đặc điểm bằng ảnh nhúng đúng vị trí trong PDF (nan quạt cho chất liệu, thư pháp cho kiểu dáng), tại `frontend/download/images/pdf_features/SP_QCS_QKH/`. `mockData.js` dùng `featureImages` riêng, tách khỏi gallery. Đã kiểm tra ảnh tải và mở phóng to; các sản phẩm khác vẫn cần đối chiếu hai ô đặc điểm vì mặc định còn dựa vào thứ tự gallery.

> Cập nhật theo góp ý: dịch ảnh sen lên vùng có nền sáng, nới độ rộng tiêu đề đặc điểm; email chỉ hiển thị khi cơ sở có dữ liệu, áp dụng ở phần liên hệ sản phẩm và tư vấn trang cơ sở. Đã kiểm tra trường hợp có/không email trên desktop và mobile.

Đã sửa bố cục cho các trang PDF 30, 52, 63, 82 và 42 theo nhóm mẫu tương ứng. Trang 42 dùng gallery dọc và tab; bốn trang còn lại dùng bố cục hồ sơ, trong đó 30/63 dùng nền sen, 52 dùng nền mây tre, 82 dùng nền quạt. Footer giữ bố cục chung theo yêu cầu sau của người dùng.

| PDF | Sản phẩm | URL | Ảnh desktop / mobile sau sửa |
|---:|---|---|---|
| 30 | Ống heo súp lơ | `/san-pham/SP_GBT_01` | `scratch/audit/p30_sample_1440.png`, `p30_sample_390.png` |
| 42 | Nón cưới trắng tinh khôi | `/san-pham/SP_NLC_NONCUOI_TRANG` | `scratch/audit/p42_sample_1440.png`, `p42_sample_390.png` |
| 52 | Ghế Mây Tựa Đan Mộc | `/san-pham/SP_MTD_GMTDM` | `scratch/audit/p52_sample_1440.png`, `p52_sample_390.png` |
| 63 | Ấm Bạch Cúc | `/san-pham/SP_GBT_19` | `scratch/audit/p63_sample_1440.png`, `p63_sample_390.png` |
| 82 | Quạt Khang Hi | `/san-pham/SP_QCS_QKH` | `scratch/audit/p82_sample_1440.png`, `p82_sample_390.png` |

Đã dùng ảnh nhúng PDF trang 30 (hoa sen và ảnh xưởng), trang 63 (ảnh xưởng), trang 82 (nền quạt), trang 42 (ảnh thêu nón), lưu trong `frontend/download/images/banners/` và `frontend/download/images/product_detail/pdf42_embroidery.jpg`. Trang 52 dùng ảnh bàn tay đan từ PDF. Hai hình đặc điểm ghế là crop của một ảnh chính, không phải ảnh chụp góc khác. Không sao chép ảnh placeholder sai sản phẩm trong PDF.

Bố cục profile đã được áp dụng bước đầu cho 60 sản phẩm P2.1–P2.10; bốn mẫu profile trong bảng được so kỹ hơn, các trang còn lại tiếp tục cần đối chiếu và nghiệm thu riêng. Nền trích dẫn chọn theo nhóm làng, thẻ liên hệ dùng ảnh tư vấn của cơ sở; ảnh này phù hợp ngữ cảnh nhưng chưa xác nhận đúng từng vị trí trong từng trang PDF. Đã kiểm tra một route sản phẩm đại diện của mỗi cơ sở; chưa kết luận toàn bộ 60 sản phẩm khớp PDF. Kiểm tra ảnh, nội dung, crop và từng biến thể trước khi coi là hoàn thiện.

Trang cơ sở Việt Quang PDF 26: đã bổ sung ba dự án theo nội dung và ảnh trong thiết kế; dữ liệu này chưa xác minh thực tế. Đã xóa liên kết đặt lịch bị lặp trong component tư vấn chung. Chỉ số thời gian giao hàng ở PDF 26 và mock chưa thống nhất và còn phải xác minh; Gốm Tới Liên có phần dự án trên web khác hình PDF 21/29, chưa xóa các dữ liệu đó.

Số hotline trang PDF 52 và PDF 26 khác nhau; chưa xác minh thông tin liên hệ thực tế. Các nút đặt lịch/yêu thích được giữ, dù không có cùng vị trí trong bản PDF. Dữ liệu liên hệ, dịch vụ và review là mock chưa xác minh.
