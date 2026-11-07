> **Cập nhật sau báo cáo:** Số liệu gallery bên dưới là mốc cũ. Đã bổ sung ảnh từ PDF và kho; xem `BAO_CAO_BO_SUNG_GALLERY_P2.md` và `PDF_PAGE_STATUS.csv` để lấy hiện trạng.

# Kiểm tra ảnh P2.1–P2.5

Mốc: 07/11/2026. Đối chiếu PDF 23–27 và 30–41, 43–48, 51–62 với `mockData.js` và ảnh trong `frontend/download/images`.

| Cơ sở | Ảnh chính sản phẩm | Gallery trong dữ liệu | Review |
|---|---|---|---|
| Hoàng Anh — PDF 23, 30–35 | 6/6 | 6 sản phẩm có 4–5 ảnh | 3 avatar |
| Bách Ngân Hỷ — PDF 24, 36–41 | 6/6 | 2 sản phẩm có 4–5 ảnh; 4 sản phẩm có một ảnh | 3 avatar |
| Gốm Mạnh Hoa — PDF 25, 43–48 | 6/6 | 6 sản phẩm có một ảnh | 3 avatar |
| Việt Quang — PDF 26, 51–56 | 6/6 | 6 sản phẩm có một ảnh | 3 avatar |
| Tuấn Anh — PDF 27, 57–62 | 6/6 | 6 sản phẩm có một ảnh | 3 avatar |

**22/30 sản phẩm hiện có một ảnh chính đã xác minh.** Đã rà soát toàn bộ cây thư mục `template/Ảnh làng nghề_`: không tồn tại thư mục crop gallery chi tiết riêng cho 4 sản phẩm Bách Ngân Hỷ (PDF 38–41), 6 sản phẩm Gốm Mạnh Hoa (PDF 43–48), 6 sản phẩm Việt Quang (PDF 51–56) và 6 sản phẩm Tuấn Anh (PDF 57–62). Hàng thumbnail trong thiết kế PDF 51–62 là các icon mẫu/placeholder không liên quan; theo quy tắc cam kết, không tự gắn ảnh sai lệch để bù số lượng. Giữ 1 ảnh chính xác thực, ghi nhận nguồn còn thiếu và duy trì trạng thái MỘT PHẦN.

Ảnh hero của 5 cơ sở và tên/ảnh avatar đã được xem đối chiếu với PDF. Đây là đối chiếu với thiết kế, không phải xác minh danh tính thực tế. Đã sửa nội dung review của Nguyễn Nhật Minh tại Bách Ngân Hỷ theo PDF 24: trước đó mock lặp nội dung review của Trần Phương Mai.

18 file Gemini sao chép từ template đã được tính lại SHA-256 ở cả nguồn và đích, kết quả khớp. Tra [P2_NGUON_ANH.csv](P2_NGUON_ANH.csv) để biết trang PDF, vai trò, đường dẫn nguồn/đích và hash; [IMAGE_INVENTORY.csv](IMAGE_INVENTORY.csv) chứa toàn bộ kho ảnh và tham chiếu hiện tại. `template/` bị Git bỏ qua, còn các file ảnh runtime mới cần được đưa vào commit khi chia sẻ.

Kiểm tra Edge headless ở 1440px: 5 route cơ sở có ảnh hero, 6 card sản phẩm, 3 avatar tải được; 6 route sản phẩm đại diện có ảnh chính tải được, không ghi nhận lỗi JavaScript. [P2_KIEM_TRA.json](P2_KIEM_TRA.json) ghi kết quả chi tiết. Đã chạy lại inventory, đối chiếu DOCX và build Vite thành công. Chưa kiểm tra toàn bộ gallery, thao tác trên mobile hoặc so từng pixel/template toàn trang; trạng thái các trang PDF vẫn là **MỘT PHẦN**.
