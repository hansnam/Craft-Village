# Đối chiếu ảnh đặc điểm sản phẩm P2.1–P2.10

Ngày 10/11/2026. Đã đối chiếu trực quan hai ô “Chất liệu và màu sắc” và “Họa tiết và kiểu dáng” của 60 trang sản phẩm P2 với PDF. Trước đó component chủ yếu lấy ảnh theo thứ tự gallery nên nhiều ô không trùng với vị trí trong thiết kế.

Đã gắn ảnh theo đúng hai ô của **41 trang**: PDF 30–41, 43–48, 63–70, 72 và 83–96. Cùng PDF 82 đã sửa ở lượt trước, hiện có **42/60 trang** có ảnh đặc điểm được ánh xạ riêng theo thiết kế. Bảng [PDF_FEATURE_IMAGES.csv](PDF_FEATURE_IMAGES.csv) ghi trang, ID, vai trò, đường dẫn ảnh, tọa độ PDF, kích thước và SHA-256 của 82 ảnh mới. Hai ảnh trang 82 trước đó được trích riêng từ ảnh nhúng.

**Nguồn ảnh:** 82 ảnh mới là phần crop của hai ô ảnh trong trang PDF, render 2× từ vùng tương ứng; chúng không phải ảnh gốc đầy đủ hoặc ảnh bổ sung do xưởng cung cấp. Lý do là một số ảnh trong PDF được cắt/biến đổi và không trùng toàn bộ ảnh gốc nhúng. Ảnh chỉ chứa phần hình thiết kế, không thêm nội dung. Các ảnh gốc trong `template/` không bị sửa.

**18 trang chưa gắn ảnh riêng:** PDF 51–62, 71, 73–74, 97–99. PDF dùng ảnh súp lơ hoặc bộ ấm của sản phẩm khác trong các ô này, nên không sao chép ảnh sai. Web tiếp tục dùng ảnh sản phẩm sẵn có hoặc crop của ảnh chính; cần thêm ảnh phù hợp hoặc tiếp tục đối chiếu nguồn. Đây là vấn đề hai ô đặc điểm, khác với số lượng ảnh trong gallery.

Đã phát hiện bốn sản phẩm nổi bật `SP_QCS_DAHT`, `SP_MTD_VDNT`, `SP_LNX_ADHV`, `SP_GBT_BGLH` được gán số trang 88, 57, 135 và 18 không tương ứng trang chi tiết: 88/57 đã thuộc sản phẩm khác, PDF chỉ có 130 trang và trang 18 là tài sản rời. Đã để `sourcePdfPage: null`, ghi chú dữ liệu mock, giữ URL/alias và ảnh chính. Bỏ chín đường dẫn ảnh không tồn tại và ba ảnh quạt thuộc sản phẩm khác khỏi gallery của các sản phẩm này. Các sản phẩm nổi bật vẫn truy cập được từ trang chủ nhưng không làm tăng số card thiết kế sáu sản phẩm trong trang cơ sở.

Kiểm tra: build Vite thành công; kiểm kê báo 0 đường dẫn ảnh không phân giải; cả 84 đường dẫn ảnh `featureImages` của 42 sản phẩm tải và giải mã được. Kiểm tra giao diện 9 route sản phẩm đại diện, 11 route cơ sở và 4 route sản phẩm nổi bật; các cơ sở được kiểm tra có đúng 6 card. Có ảnh minh họa sau sửa `scratch/audit/p83_features_after.png`. Việc này **chỉ xác nhận phần ảnh đặc điểm**; chưa nghiệm thu toàn bộ bố cục, nội dung, thao tác hoặc mobile của 60 trang.
