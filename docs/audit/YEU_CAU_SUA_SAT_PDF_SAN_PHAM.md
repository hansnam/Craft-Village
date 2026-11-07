# Yêu cầu sửa lại trang sản phẩm sát PDF

> Cập nhật: đã tiếp tục sửa mẫu 30, 42, 52, 63, 82; ảnh trước/sau, phạm vi và phần còn lại xem [báo cáo mẫu sản phẩm P3](BAO_CAO_MAU_SAN_PHAM_P3.md). Vẫn cần người dùng duyệt, chưa nghiệm thu hàng loạt.

> Cập nhật sau lượt sửa PDF 52: đã chỉnh lại tỷ lệ hero theo PDF, bố cục chi tiết/liên hệ/sản phẩm liên quan và thay ảnh quạt bị gắn nhầm bằng ảnh bàn tay đan trích từ ảnh nhúng PDF 52 (`frontend/download/images/banners/contact_p52_weaving.jpg`). Hai ảnh chi tiết ghế là hai cách crop của cùng ảnh chính, không phải ảnh chụp bổ sung; trang vẫn MỘT PHẦN và số điện thoại PDF 52 / PDF 26 còn mâu thuẫn. Ảnh web sau sửa: `scratch/audit/p52_codex_1440.png`, `p52_codex_390.png`.

**Trạng thái: CHƯA NGHIỆM THU giao diện.** Đã xem ảnh Gemini chụp desktop của PDF 30, 42, 52, 63, 82 và so với ảnh PDF. Có tiến bộ về thứ tự các khối ở mẫu profile, nhưng còn khác đáng kể. Kết quả ảnh tải được, không lỗi JavaScript, các khối tồn tại và nút hoạt động chỉ là kiểm tra kỹ thuật, không chứng minh khớp thiết kế.

Ảnh web Gemini đã chụp nằm ở `scratch/audit/pdf_052_desktop.png`, `pdf_030_desktop.png`, `pdf_063_desktop.png`, `pdf_082_desktop.png`, `pdf_042_desktop.png` và các file `_mobile.png`. File PDF tham chiếu của 30/52/63/82 ở `docs/audit/DOI_CHIEU_HINH_P2_1_DEN_P2_10/pdf-XXX/pdf.jpg`; trang 42 lấy từ `template/WEBSITE.pdf` trang 42. Ảnh `web.jpg` trong thư mục đối chiếu là **trước lượt Gemini**, không dùng làm ảnh sau sửa.

## Những điểm sai đã xác nhận

| Nhóm | PDF mẫu | Web sau lượt Gemini | Việc cần làm |
|---|---|---|---|
| Đầu trang | 30, 52, 63, 82 | Có breadcrumb, nút đặt lịch và tim cạnh CTA; phần thông số xếp nhãn trên giá trị | Khôi phục phân cấp và bố cục gần mẫu: ảnh/trượt trái, loại và tên sản phẩm, mô tả, 3 dòng thông số có biểu tượng và nhãn/giá trị theo hàng ở phải, CTA chính theo PDF. Bảo toàn đặt lịch và yêu thích ở vị trí phụ ít ảnh hưởng bố cục; không xóa chức năng. |
| Tỉ lệ ảnh | 30, 52, 63, 82 | Ảnh chính gần vuông/crop cao hơn, thiếu nút điều hướng ảnh | Căn lại khung ngang, object-fit/crop theo PDF; thêm nút trước/sau khi có nhiều ảnh, kiểm tra thumbnail và lightbox. PDF 52 chỉ có một ảnh xác thực nên vô hiệu/ẩn điều hướng khi không có ảnh khác. |
| Đặc điểm | 30, 52, 63, 82 | Một ảnh lớn ở phải; hai nội dung dạng hộp xếp ở trái | Bố cục PDF là nội dung chính bên trái và hai thẻ ảnh nhỏ đặt cạnh nhau ở bên phải, dưới mỗi ảnh là tiêu đề và mô tả tương ứng. Giữ hai vị trí theo thiết kế; nếu chưa có ảnh phù hợp, không gán ảnh sai hoặc cố tạo ảnh, đánh dấu nguồn thiếu và dùng cách trình bày trung tính tạm thời. |
| Banner trích dẫn | 30, 52, 63, 82 | Nền màu phẳng | PDF có ảnh nền trải ngang, câu trích dẫn phủ lên ảnh; trang 52 dùng ảnh mây tre, trang 30/63 có nền lá sen, trang 82 nền quạt. Tìm đúng nguồn trong kho/PDF, ghi nguồn và dùng theo từng nhóm, không lấy một ảnh chung cho mọi làng. |
| Liên hệ | 30, 52, 63, 82 | Thông tin dạng chữ in đậm, thẻ CTA nền trơn | Dùng nhãn nhỏ và tiêu đề, các dòng biểu tượng điện thoại/email/dịch vụ; cột phải có ảnh nền theo mẫu và nút. Dữ liệu phải theo đúng xưởng, không tự bịa; thiếu thông tin thì ghi rõ. |
| Sản phẩm cùng dòng | 30, 52, 63, 82 | Thẻ có khung, mô tả phụ và nút carousel phía trên | Sắp lại gần PDF: ảnh, tên, nút mũi tên; giữ điều hướng hoạt động. Nếu chữ/ảnh của PDF là placeholder sai sản phẩm, dùng dữ liệu đúng thay vì sao chép sai. |
| Trang tab riêng | 42 | Hàng ảnh ngang, hộp giá và hai cột bảng thông số; có banner quy trình | PDF có dải thumbnail dọc cạnh trái ảnh chính, mô tả và CTA bên phải, tabs ngang, đoạn chi tiết và ảnh rộng bên dưới; tiếp theo là sản phẩm đã xem. Bảo toàn hành vi tab và thao tác, nhưng dựng lại bố cục. Footer tiếp tục theo yêu cầu thống nhất toàn site của người dùng, dù PDF 42 dùng biến thể cũ. |

Riêng PDF 52: dòng hotline trong PDF sản phẩm và số trong mock cơ sở đang khác nhau (ảnh PDF thể hiện `0912 916 992`, ảnh web Gemini `0972297659`). Không tự thay thông tin liên hệ như thể đã xác minh; kiểm tra PDF trang 26 và DOCX, ghi lại nguồn/mâu thuẫn. PDF 52 còn chứa thumbnail và hình chi tiết cây súp lơ của sản phẩm khác: không đưa các ảnh đó vào ghế chỉ để giống mẫu.

## Quy trình và điều kiện nghiệm thu

1. Chỉ làm **PDF 52 trước**, không áp dụng đại trà. Mở PDF và hình thực tế từng khối; đo tương đối bề rộng cột, tỷ lệ khung ảnh, vị trí, cỡ chữ và khoảng cách. Chụp lại website ở **1440×900, zoom 100%, device scale 1**, đợi ảnh/font và animation xong; PDF trang 52 gốc rộng 1440, render 100% cùng bề rộng. Lưu screenshot mới và PDF reference ở `scratch/audit/` hoặc thư mục ảnh đối chiếu bị Git bỏ qua. Đối chiếu toàn trang và các crop tương ứng; khi chiều cao trang khác, đối chiếu từng section, không kéo giãn toàn trang để che lỗi.
2. Trước khi báo xong, lập bảng **PDF / web sau sửa / kết quả / sai khác còn lại / nguồn ảnh hoặc dữ liệu** cho: header/hero, gallery, thông số/CTA, đặc điểm hai ảnh, banner, liên hệ, sản phẩm cùng dòng và footer. `PASS` chỉ khi đã quan sát hình; `CHƯA ĐẠT` hoặc `THIẾU NGUỒN` khi không khớp. Với ảnh khác nội dung hoặc placeholder sai, giải thích quyết định. Bố cục, thứ tự, số cột, hình nền và các điểm khác biệt lớn phải khớp; khoảng cách/cỡ chữ/crop cần được so trực quan ở cùng tỷ lệ, ghi chênh lệch còn nhìn thấy. Không lấy một ngưỡng pixel giả làm bằng chứng đủ.
3. Sau PDF 52, đối chiếu PDF 30, 63, 82 và chỉnh biến thể theo từng nhóm; chụp riêng từng route và làm bảng tương tự. Kiểm tra PDF 42 riêng bằng screenshot và bảng, không suy luận `tabs` là đúng mẫu chỉ vì các tab bấm được.
4. Desktop phải sát PDF. Mobile không có mẫu trong PDF thì sắp xếp hợp lý theo cấu trúc desktop, không tự khẳng định đã khớp thiết kế mobile. Kiểm tra 390×844, tràn ngang, hiển thị nội dung và thao tác.
5. Kiểm tra build, tất cả ảnh tải, CTA/modal/lightbox, trước/sau gallery, yêu thích, tab trang 42, điều hướng và regressions trên các route mẫu. Kiểm tra chỉ là bổ sung cho so sánh hình.
6. Với mỗi trang, cập nhật `PDF_PAGE_STATUS.csv`, `DOI_CHIEU_TUNG_TRANG_PDF.md` và `docs/ke_hoach/TIEN_DO_THUC_HIEN.md`; chỉ ghi đã nghiệm thu khi có bảng đối chiếu và bằng chứng phù hợp, nếu thiếu nguồn phải giữ **MỘT PHẦN**. Ghi ảnh, kích thước, nguồn, viewport, kết quả test và phần tồn đọng. Không sửa ảnh gốc trong `template/`, không ghi đè ảnh sản phẩm đúng và không tự nhận các dữ liệu mock là xác thực.

Chưa chuyển sang trang cơ sở hay mở rộng toàn bộ sản phẩm trước khi hoàn thành phần đối chiếu và báo cáo PDF 52.
