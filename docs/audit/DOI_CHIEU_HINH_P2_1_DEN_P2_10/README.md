# Đối chiếu hình P2.1–P2.10 — bàn giao Gemini

> Ảnh `web.jpg` trong thư mục này là **trước khi sửa P3**, không phản ánh giao diện hiện tại. Tình trạng mới nhất, ảnh năm trang mẫu và các điểm còn thiếu xem [báo cáo P3](../BAO_CAO_MAU_SAN_PHAM_P3.md).

Phạm vi: 10 cơ sở, 60 sản phẩm, 71 trang PDF (trang 21 và 29 cùng trỏ tới Gốm Tới Liên). Mỗi thư mục `pdf-NNN` có `web.jpg` là web hiện tại và `pdf.jpg` là trang gốc PDF, đánh số trang PDF **từ 1**. Bảng dưới có URL và liên kết trực tiếp đến hai ảnh.

Ảnh web chụp desktop viewport 1440×900, cuộn toàn trang với dữ liệu trình duyệt mới cho mỗi trang; ảnh PDF render ở 75% kích thước gốc. Khi so sánh hãy mở riêng hai file và phóng theo cùng bề rộng; chiều cao khác nhau do nội dung/layout, không dùng pixel tuyệt đối. Hình chỉ ghi nhận trạng thái tại thời điểm chụp, không chứng minh mọi nút hoạt động. Ảnh lazy được đợi tải; thông báo lỗi chụp/ảnh lỗi ghi trong JSON kèm theo.

**Phân biệt:** `Cần đối chiếu` không có nghĩa từng trang đã được kiểm tra thủ công từng chi tiết. Các kết luận cụ thể bên dưới đã so trực tiếp ảnh hoặc code. Sản phẩm dùng chung một component nên là nhóm có nguy cơ lệch thiết kế; phải kiểm từng trang và biến thể PDF, không đánh dấu hoàn thành hàng loạt chỉ vì đã sửa trang mẫu.

## Sai lệch đã xác nhận và chỉ dẫn sửa

1. **Trang sản phẩm PDF 30 (Ống heo súp lơ), 52 (Ghế Mây Tựa Đan Mộc), 63 (Ấm Bạch Cúc) và 82 (Quạt Khang Hi):** ảnh web hiện tại khác mẫu: khối đầu có breadcrumb, hộp giá, nhiều nút và bố cục chi tiết theo tab; PDF thể hiện tiêu đề/thông tin sản phẩm, phần đặc điểm cùng ảnh, banner, liên hệ xưởng và sản phẩm cùng dòng theo bố cục khác. Kiểm tra các phần còn lại khi mở ảnh toàn trang. `ProductDetailPage.jsx` dùng chung cho 60 sản phẩm, vì vậy rà các trang còn lại theo template PDF tương ứng; không tự suy ra mọi trang có cùng mẫu.
2. **Trang cơ sở dùng chung:** `FacilityConsultation.jsx` hiện có **hai link “Đặt lịch đến xưởng” giống nhau** liên tiếp sau thẻ cam kết. Ảnh mẫu PDF không thể hiện hai link đó. Sửa trùng, bảo đảm vẫn truy cập được chức năng đặt lịch và đối chiếu từng mẫu trước khi quyết định vị trí. CSS `.workshop-consult__booking` cũng đang khai báo hai lần.
3. **Gốm Tới Liên PDF 21/29:** web hiển thị khối “Dự án đã thực hiện”, trong ảnh mẫu PDF 21 không thấy khối này giữa năng lực và đánh giá. Cần xem cả PDF 29 và xác nhận dữ liệu/điều kiện hiển thị trước khi sửa; không xóa dữ liệu dự án tùy tiện.
4. **Gốm Hải Long PDF 22:** chỉ số “Số lượng tối thiểu” của PDF là 1, trong `mockData.js` là 10. Phải đối chiếu nguồn DOCX và PDF, ghi chú nếu xung đột; không tự xác nhận là thông tin kinh doanh thực tế. Bố cục, khoảng cách, crop ảnh và nội dung còn cần đối chiếu.
5. **Việt Quang PDF 26:** thiết kế có phần “Dự án đã thực hiện” với ba thẻ, ảnh web không có phần này. Kiểm tra dữ liệu `projects` và điều kiện hiển thị trước khi bổ sung. Thiết kế hiển thị thời gian 30 ngày trong khi web thể hiện 15–30 ngày; đối chiếu nguồn trước khi sửa dữ liệu.

## Yêu cầu khi sửa

- Ưu tiên xác nhận mẫu trang sản phẩm và sửa theo từng nhóm, bắt đầu từ PDF 52, rồi kiểm thử các biến thể gốm, mây tre và quạt; giữ đúng hành vi điều hướng và nút hiện có khi thiết kế lại.
- Đối chiếu từng trang cơ sở: hero và chỉ số, thẻ sản phẩm, tư vấn, câu chuyện, năng lực, dự án, review, footer. Có 10 trang cơ sở, một cơ sở có hai trang tham chiếu PDF 21/29; không mặc định cấu trúc dự án giống nhau.
- 18 sản phẩm chỉ có một ảnh chính. Không dùng ảnh thumbnail placeholder thuộc sản phẩm khác trong PDF để lấp gallery; không nhầm ảnh chính đã có với ảnh phụ còn thiếu. Xem `../BAO_CAO_BO_SUNG_GALLERY_P2.md`.
- Kiểm tra thao tác, ảnh, responsive và các route bị ảnh hưởng; cập nhật `../PDF_PAGE_STATUS.csv`, `../DOI_CHIEU_TUNG_TRANG_PDF.md`, kiểm kê ảnh và tài liệu kế hoạch cá nhân sau mỗi đợt. Chỉ đánh dấu hoàn tất khi đã đối chiếu từng phần và có bằng chứng.
- PDF là bản tham chiếu thiết kế, không coi thông tin liên hệ, đánh giá hoặc lời cam kết trong mock là đã được xác minh ngoài đời.

## Danh sách trang và ảnh đối chiếu

### HOÀNG ANH CERAMICS (`GBT_HAC`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 23 | HOÀNG ANH CERAMICS | [Mở trang](http://localhost:5173/Craft-Village/co-so/GBT_HAC) | [Web](pdf-023/web.jpg) | [PDF](pdf-023/pdf.jpg) | OK |
| Sản phẩm | 30 | Ống heo súp lơ | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_01) | [Web](pdf-030/web.jpg) | [PDF](pdf-030/pdf.jpg) | OK |
| Sản phẩm | 31 | Ống heo Shiba | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_02) | [Web](pdf-031/web.jpg) | [PDF](pdf-031/pdf.jpg) | OK |
| Sản phẩm | 32 | Túi xách sứ cắm hoa | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_03) | [Web](pdf-032/web.jpg) | [PDF](pdf-032/pdf.jpg) | OK |
| Sản phẩm | 33 | Ống heo cua | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_04) | [Web](pdf-033/web.jpg) | [PDF](pdf-033/pdf.jpg) | OK |
| Sản phẩm | 34 | Ống heo Labubu | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_05) | [Web](pdf-034/web.jpg) | [PDF](pdf-034/pdf.jpg) | OK |
| Sản phẩm | 35 | Ống heo chim cánh cụt | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_06) | [Web](pdf-035/web.jpg) | [PDF](pdf-035/pdf.jpg) | OK |

### BÁCH NGÂN HỶ (`GBT_BNH`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 24 | BÁCH NGÂN HỶ | [Mở trang](http://localhost:5173/Craft-Village/co-so/GBT_BNH) | [Web](pdf-024/web.jpg) | [PDF](pdf-024/pdf.jpg) | OK |
| Sản phẩm | 36 | Bộ sưu tập gốm Thanh Mạ | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_07) | [Web](pdf-036/web.jpg) | [PDF](pdf-036/pdf.jpg) | OK |
| Sản phẩm | 37 | Bộ sưu tập gốm Ngư Sắc | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_08) | [Web](pdf-037/web.jpg) | [PDF](pdf-037/pdf.jpg) | OK |
| Sản phẩm | 38 | Cherry Collection | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_09) | [Web](pdf-038/web.jpg) | [PDF](pdf-038/pdf.jpg) | OK |
| Sản phẩm | 39 | Cốc túi cafe | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_10) | [Web](pdf-039/web.jpg) | [PDF](pdf-039/pdf.jpg) | OK |
| Sản phẩm | 40 | Rổ gốm | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_11) | [Web](pdf-040/web.jpg) | [PDF](pdf-040/pdf.jpg) | OK |
| Sản phẩm | 41 | Hũ Hỷ Xuân Hoa | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_12) | [Web](pdf-041/web.jpg) | [PDF](pdf-041/pdf.jpg) | OK |

### GỐM SỨ MẠNH HOA (`GBT_GSMH`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 25 | GỐM SỨ MẠNH HOA | [Mở trang](http://localhost:5173/Craft-Village/co-so/GBT_GSMH) | [Web](pdf-025/web.jpg) | [PDF](pdf-025/pdf.jpg) | OK |
| Sản phẩm | 43 | Bộ ấm trà Lam Điệp | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_25) | [Web](pdf-043/web.jpg) | [PDF](pdf-043/pdf.jpg) | OK |
| Sản phẩm | 44 | Bộ ấm trà Thanh Diệp | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_26) | [Web](pdf-044/web.jpg) | [PDF](pdf-044/pdf.jpg) | OK |
| Sản phẩm | 45 | Khay mứt men hỏa biến | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_27) | [Web](pdf-045/web.jpg) | [PDF](pdf-045/pdf.jpg) | OK |
| Sản phẩm | 46 | Bộ đồ ăn men hỏa biến | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_28) | [Web](pdf-046/web.jpg) | [PDF](pdf-046/pdf.jpg) | OK |
| Sản phẩm | 47 | Hộp đựng trà Kim Hoa | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_29) | [Web](pdf-047/web.jpg) | [PDF](pdf-047/pdf.jpg) | OK |
| Sản phẩm | 48 | Khay lá sen | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_30) | [Web](pdf-048/web.jpg) | [PDF](pdf-048/pdf.jpg) | OK |

### MÂY TRE ĐAN VIỆT QUANG (`MTD_MTDVQ`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 26 | MÂY TRE ĐAN VIỆT QUANG | [Mở trang](http://localhost:5173/Craft-Village/co-so/MTD_MTDVQ) | [Web](pdf-026/web.jpg) | [PDF](pdf-026/pdf.jpg) | OK |
| Sản phẩm | 51 | Túi Xách Mây Tre Đan Hồng Đan | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_TXMTDHD) | [Web](pdf-051/web.jpg) | [PDF](pdf-051/pdf.jpg) | OK |
| Sản phẩm | 52 | Ghế Mây Tựa Đan Mộc | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_GMTDM) | [Web](pdf-052/web.jpg) | [PDF](pdf-052/pdf.jpg) | OK |
| Sản phẩm | 53 | Lót Ly Mây Tre Đan Tròn | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_LLMTDT) | [Web](pdf-053/web.jpg) | [PDF](pdf-053/pdf.jpg) | OK |
| Sản phẩm | 54 | Đĩa Gốm Sứ Viền Mây Tre | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_DGSVMT) | [Web](pdf-054/web.jpg) | [PDF](pdf-054/pdf.jpg) | OK |
| Sản phẩm | 55 | Khay Mây Đựng Đồ | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_KMMD) | [Web](pdf-055/web.jpg) | [PDF](pdf-055/pdf.jpg) | OK |
| Sản phẩm | 56 | Hộp Đựng Giấy Mây Tre Đan | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_HDGMTD) | [Web](pdf-056/web.jpg) | [PDF](pdf-056/pdf.jpg) | OK |

### MÂY TRE ĐAN TUẤN ANH (`MTD_MTDTA`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 27 | MÂY TRE ĐAN TUẤN ANH | [Mở trang](http://localhost:5173/Craft-Village/co-so/MTD_MTDTA) | [Web](pdf-027/web.jpg) | [PDF](pdf-027/pdf.jpg) | OK |
| Sản phẩm | 57 | Túi Xách Mây Dáng Tròn | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_TXMDT) | [Web](pdf-057/web.jpg) | [PDF](pdf-057/pdf.jpg) | OK |
| Sản phẩm | 58 | Túi Xách Mây Tre Đan Thanh Lịch | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_TXMTDTL) | [Web](pdf-058/web.jpg) | [PDF](pdf-058/pdf.jpg) | OK |
| Sản phẩm | 59 | Túi Xách Mây Nắp Gập | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_TXMNG) | [Web](pdf-059/web.jpg) | [PDF](pdf-059/pdf.jpg) | OK |
| Sản phẩm | 60 | Túi Xách Mây Tre Đan Dáng Trống | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_TXMTDDT) | [Web](pdf-060/web.jpg) | [PDF](pdf-060/pdf.jpg) | OK |
| Sản phẩm | 61 | Vali Mây Tre Đan Họa Tiết Hình Học | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_VMTDHTHH) | [Web](pdf-061/web.jpg) | [PDF](pdf-061/pdf.jpg) | OK |
| Sản phẩm | 62 | Bộ Giành Tích Ủ Trà | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_MTD_BGTTUT) | [Web](pdf-062/web.jpg) | [PDF](pdf-062/pdf.jpg) | OK |

### GỐM TỚI LIÊN (`GBT_GTL`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 21 | GỐM TỚI LIÊN | [Mở trang](http://localhost:5173/Craft-Village/co-so/GBT_GTL) | [Web](pdf-021/web.jpg) | [PDF](pdf-021/pdf.jpg) | OK |
| Cơ sở | 29 | GỐM TỚI LIÊN | [Mở trang](http://localhost:5173/Craft-Village/co-so/GBT_GTL) | [Web](pdf-029/web.jpg) | [PDF](pdf-029/pdf.jpg) | OK |
| Sản phẩm | 63 | Ấm Bạch Cúc | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_19) | [Web](pdf-063/web.jpg) | [PDF](pdf-063/pdf.jpg) | OK |
| Sản phẩm | 64 | Ấm Rồng Vân Mây | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_20) | [Web](pdf-064/web.jpg) | [PDF](pdf-064/pdf.jpg) | OK |
| Sản phẩm | 65 | Ấm Cá Chép Hóa Rồng | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_21) | [Web](pdf-065/web.jpg) | [PDF](pdf-065/pdf.jpg) | OK |
| Sản phẩm | 66 | Bộ ấm chén Sen | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_22) | [Web](pdf-066/web.jpg) | [PDF](pdf-066/pdf.jpg) | OK |
| Sản phẩm | 67 | Ấm hoa Sen | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_23) | [Web](pdf-067/web.jpg) | [PDF](pdf-067/pdf.jpg) | OK |
| Sản phẩm | 68 | Hũ đựng trà Sen | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_24) | [Web](pdf-068/web.jpg) | [PDF](pdf-068/pdf.jpg) | OK |

### GỐM HẢI LONG (`GBT_GHL`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 22 | GỐM HẢI LONG | [Mở trang](http://localhost:5173/Craft-Village/co-so/GBT_GHL) | [Web](pdf-022/web.jpg) | [PDF](pdf-022/pdf.jpg) | OK |
| Sản phẩm | 69 | Nồi đất vẽ tay | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_13) | [Web](pdf-069/web.jpg) | [PDF](pdf-069/pdf.jpg) | OK |
| Sản phẩm | 70 | Bình hút tài lộc | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_14) | [Web](pdf-070/web.jpg) | [PDF](pdf-070/pdf.jpg) | OK |
| Sản phẩm | 71 | Ngói mũi hài vàng hổ phách | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_15) | [Web](pdf-071/web.jpg) | [PDF](pdf-071/pdf.jpg) | OK |
| Sản phẩm | 72 | Bộ ấm trà quả hồng | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_16) | [Web](pdf-072/web.jpg) | [PDF](pdf-072/pdf.jpg) | OK |
| Sản phẩm | 73 | Bộ ấm chén tử sa | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_17) | [Web](pdf-073/web.jpg) | [PDF](pdf-073/pdf.jpg) | OK |
| Sản phẩm | 74 | Nồi đất Nodacook | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_GBT_18) | [Web](pdf-074/web.jpg) | [PDF](pdf-074/pdf.jpg) | OK |

### QUẠT TỪ TÂM (`QCS_QTT`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 75 | QUẠT TỪ TÂM | [Mở trang](http://localhost:5173/Craft-Village/co-so/QCS_QTT) | [Web](pdf-075/web.jpg) | [PDF](pdf-075/pdf.jpg) | OK |
| Sản phẩm | 82 | Quạt Khang Hi | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QKH) | [Web](pdf-082/web.jpg) | [PDF](pdf-082/pdf.jpg) | OK |
| Sản phẩm | 83 | Quạt Nan Gỗ | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QNG) | [Web](pdf-083/web.jpg) | [PDF](pdf-083/pdf.jpg) | OK |
| Sản phẩm | 84 | Quạt Tranh Tết | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QTT) | [Web](pdf-084/web.jpg) | [PDF](pdf-084/pdf.jpg) | OK |
| Sản phẩm | 85 | Quạt Hoa Văn Cao Cấp | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QHVCC) | [Web](pdf-085/web.jpg) | [PDF](pdf-085/pdf.jpg) | OK |
| Sản phẩm | 86 | Quạt Truyền Thống | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QTRUYENTHONG) | [Web](pdf-086/web.jpg) | [PDF](pdf-086/pdf.jpg) | OK |
| Sản phẩm | 87 | Quạt Tranh Phong Thủy | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QTPT) | [Web](pdf-087/web.jpg) | [PDF](pdf-087/pdf.jpg) | OK |

### QUẠT PHƯƠNG (`QCS_QP`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 76 | QUẠT PHƯƠNG | [Mở trang](http://localhost:5173/Craft-Village/co-so/QCS_QP) | [Web](pdf-076/web.jpg) | [PDF](pdf-076/pdf.jpg) | OK |
| Sản phẩm | 88 | Quạt Sắc Việt Cổ Phong | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QSVCP) | [Web](pdf-088/web.jpg) | [PDF](pdf-088/pdf.jpg) | OK |
| Sản phẩm | 89 | Quạt Thanh Vũ Hoa Lam | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QTVHL) | [Web](pdf-089/web.jpg) | [PDF](pdf-089/pdf.jpg) | OK |
| Sản phẩm | 90 | Quạt Kim Hoa Cát Tường | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QKHCT) | [Web](pdf-090/web.jpg) | [PDF](pdf-090/pdf.jpg) | OK |
| Sản phẩm | 91 | Quạt Lam Đồ Họa | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QLDH) | [Web](pdf-091/web.jpg) | [PDF](pdf-091/pdf.jpg) | OK |
| Sản phẩm | 92 | Quạt Vân Xoắn Lam | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QVXL) | [Web](pdf-092/web.jpg) | [PDF](pdf-092/pdf.jpg) | OK |
| Sản phẩm | 93 | Quạt Hội Xuân Dân Gian | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QHXDG) | [Web](pdf-093/web.jpg) | [PDF](pdf-093/pdf.jpg) | OK |

### QUẠT CHÀNG SƠN (`QCS_QCS`)

| Loại | PDF | Trang | URL | Web hiện tại | Thiết kế PDF | Tình trạng chụp |
|---|---:|---|---|---|---|---|
| Cơ sở | 77 | QUẠT CHÀNG SƠN | [Mở trang](http://localhost:5173/Craft-Village/co-so/QCS_QCS) | [Web](pdf-077/web.jpg) | [PDF](pdf-077/pdf.jpg) | OK |
| Sản phẩm | 94 | Quạt Linh Thú Dân Gian | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QLTDG) | [Web](pdf-094/web.jpg) | [PDF](pdf-094/pdf.jpg) | OK |
| Sản phẩm | 95 | Quạt Phúc Lộc Đồng Tử | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QPLDT) | [Web](pdf-095/web.jpg) | [PDF](pdf-095/pdf.jpg) | OK |
| Sản phẩm | 96 | Quạt Mai Điểu Nghênh Xuân | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QMDNX) | [Web](pdf-096/web.jpg) | [PDF](pdf-096/pdf.jpg) | OK |
| Sản phẩm | 97 | Quạt Liên Hoa Phấn Sắc | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QLHPS) | [Web](pdf-097/web.jpg) | [PDF](pdf-097/pdf.jpg) | OK |
| Sản phẩm | 98 | Quạt Sơn Thủy Lục Bảo | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QSTLB) | [Web](pdf-098/web.jpg) | [PDF](pdf-098/pdf.jpg) | OK |
| Sản phẩm | 99 | Quạt Hắc Liên Thủy Mặc | [Mở trang](http://localhost:5173/Craft-Village/san-pham/SP_QCS_QHLTM) | [Web](pdf-099/web.jpg) | [PDF](pdf-099/pdf.jpg) | OK |

