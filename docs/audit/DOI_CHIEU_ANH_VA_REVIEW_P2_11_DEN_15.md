# Đối chiếu ảnh và đánh giá P2.11–P2.15

Ngày 10/11/2026. Phạm vi 5 cơ sở nón/lụa: PDF 28, 78–81 và 30 trang sản phẩm PDF 101–130.

Đã áp dụng bố cục hồ sơ theo mẫu cho 30 trang sản phẩm. Nền trích ảnh nhúng PDF 101/119; ảnh minh họa trong thẻ liên hệ trích ảnh nhúng tại PDF 101/119 (đã kiểm tra ảnh đó lặp lại ở các mẫu 110/113 và 125). Đây là ảnh minh họa thiết kế, không khẳng định là hình ảnh thực tế của từng cơ sở. Cần tiếp tục so từng trang, không đánh dấu toàn bộ hoàn thiện.

Đã đối chiếu và gắn riêng ảnh cho hai ô chất liệu/kiểu dáng của **19 trang**: 101, 103, 105–106 và 110–124. 38 ảnh được render crop 2× từ đúng ô ảnh trong PDF; [PDF_FEATURE_IMAGES_P2_11_DEN_15.csv](PDF_FEATURE_IMAGES_P2_11_DEN_15.csv) ghi tọa độ, ID, vai trò và SHA-256. Đây là crop thiết kế, không tự coi là ảnh gốc do xưởng cung cấp.

**11 trang chưa gắn ảnh chi tiết riêng:** 102, 104, 107–109 và 125–130. Một số ảnh trong PDF có màu, họa tiết hoặc mẫu khác ảnh chính; các trường hợp chưa xác minh giữ ảnh chính của sản phẩm để tránh dùng ảnh nhầm. Cần tiếp tục đối chiếu nguồn và từng vị trí thay vì suy diễn đây là ảnh chính xác.

## Đánh giá tại năm cơ sở

Đã đối chiếu tên, ngày và vị trí ảnh của 15 đánh giá theo các thẻ trong PDF; cập nhật tên/ngày sai và gắn 15 ảnh gốc nhúng tại đúng vị trí tương ứng. Danh mục và SHA-256: [PDF_REVIEW_AVATARS_P2_11_15.csv](PDF_REVIEW_AVATARS_P2_11_15.csv). Đây là đối chiếu với thiết kế, **không xác minh danh tính người thật hoặc xác thực đánh giá**.

| PDF | Cơ sở | Tên theo thứ tự thẻ trong thiết kế |
|---:|---|---|
| 28 | Lụa Nha Xá | Nguyễn Thu Hương; Lê Hoàng Nam; Phạm Ngọc Mai |
| 78 | Hoa Nón Làng Chuông | Trần Kim Hoa; Nguyễn Trung Đức; Lý Ngọc Lan |
| 79 | Nón lá Hải Yến | Thu Thảo; Huyền My; Phạm Mai Linh |
| 80 | HTX Tạ Thu Hương | Nguyễn Mai Anh; Vũ Mạnh; Bảo Ngọc |
| 81 | Silk Hạ Vy | Phương Nhi; Nhật Long; Trịnh Lam Anh |

Ngày của Nhật Long theo PDF 81 là 02/11/2026; mock cũ ghi 2025 và đã sửa theo thiết kế. Không tự xác nhận tính xác thực của dữ liệu liên hệ, ngày, đánh giá hoặc thông tin thương mại.

Kiểm tra: build Vite thành công; kiểm kê 0 tham chiếu ảnh không phân giải. Toàn bộ 122 ảnh đặc điểm của 61 sản phẩm có `featureImages` được phân giải và tải. Đã thử desktop/mobile trên các trang 101, 103, 110, 113, 119, 124; đã kiểm tra tên/ảnh review và 6 card sản phẩm trên 5 route cơ sở. Ảnh mẫu `scratch/audit/p101_features_after.png`, `scratch/audit/p119_features_after.png` nằm trong thư mục tạm, không theo Git. Chưa nghiệm thu bố cục, nội dung, thao tác và responsive của tất cả 30 trang hoặc toàn bộ 5 trang cơ sở.
