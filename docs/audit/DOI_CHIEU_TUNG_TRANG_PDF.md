> Cập nhật ảnh P2.1–P2.10: đã bổ sung 74 ảnh trích từ PDF và 3 ảnh có sẵn trong kho cho 34 sản phẩm. Còn 18 sản phẩm chỉ có ảnh chính: 97, 98, 99, 51, 52, 53, 54, 55, 56, 59, 60, 61, 62, 71, 72, 73, 74, 43. Chi tiết từng trang xem `PDF_PAGE_STATUS.csv`; nguồn ảnh xem `PDF_GALLERY_NGUON.csv` và `TEMPLATE_GALLERY_NGUON.csv`. Các trang vẫn cần nghiệm thu giao diện theo PDF.

> Cập nhật trang 22 (Gốm Hải Long): đã chỉnh phần tư vấn và footer theo mẫu, kiểm tra trên desktop 1440px và mobile 390px. Bố cục tư vấn dùng chung cho các cơ sở; footer đổi cột và thêm khẩu hiệu trên toàn website. Cần tiếp tục đối chiếu các phần còn lại trước khi đánh dấu hoàn thiện.

# Đối chiếu đủ 130 trang WEBSITE.pdf

> PDF 52 đã được chỉnh tiếp về tỷ lệ ảnh, thông số, hai vùng ảnh chi tiết, banner, liên hệ và sản phẩm cùng dòng. Hai chi tiết là crop từ cùng ảnh ghế; còn thiếu ảnh góc khác và thông tin hotline giữa PDF 52/26 chưa thống nhất nên vẫn MỘT PHẦN. Xem `YEU_CAU_SUA_SAT_PDF_SAN_PHAM.md`.

> Đã chụp bộ ảnh so sánh P2.1–P2.10: xem [71 trang, URL và ảnh web/PDF](DOI_CHIEU_HINH_P2_1_DEN_P2_10/README.md). Có sai lệch đã xác nhận ở PDF 21, 22, 26, 30, 52, 63 và 82; các trang còn lại cần đối chiếu chi tiết, không coi ảnh chụp là nghiệm thu.

Cập nhật 07/11/2026 sau khi bổ sung mock data. Số trang tính 1-based trong PDF.

**Chưa trang nào được nghiệm thu hoàn thiện 100%.** MỘT PHẦN là đã có dữ liệu/route hoặc khối giao diện, vẫn cần so template và thao tác. TÀI SẢN RỜI không tính là màn hình.

Bản ghi sản phẩm trang 42 chưa xác minh cơ sở; dữ liệu liên hệ trích từ PDF cần kiểm tra vì một số trang bị copy nhầm xưởng. Mục sản phẩm và ảnh đã được bổ sung, không tự nâng trạng thái giao diện.

**Nguồn data:** [báo cáo DOCX và mock](DOI_CHIEU_DESCRIPTION_VA_NGUON_DATA.md), [DOCX trích xuất](DESCRIPTION_TRICH_XUAT.md), [văn bản 130 trang PDF](PDF_NOI_DUNG_THAM_CHIEU.md), [CSV nguồn theo trang](PDF_PAGE_STATUS.csv).

| PDF | Nội dung | Trạng thái | Route | Cần làm tiếp |
|---:|---|---|---|---|
| 1 | Đặt lịch – form đơn | MỘT PHẦN | `/dat-lich` | Đã có form, chọn mục đích/ngày/giờ, liên hệ; success chỉ là state, chưa lưu/gửi; thiếu quick action Gửi mail của trang 2. |
| 2 | Đặt lịch – form và liên hệ chủ xưởng | MỘT PHẦN | `/dat-lich` | Đã có form, chọn mục đích/ngày/giờ, liên hệ; success chỉ là state, chưa lưu/gửi; thiếu quick action Gửi mail của trang 2. |
| 3 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 4 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 5 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 6 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 7 | Trang chủ | MỘT PHẦN | `/` | Có đủ khối chính; CTA Hành trình trỏ #villages; 4/5 sản phẩm nổi bật trỏ làng nghề, Nón Hỷ Sắc trỏ nhầm sản phẩm Hải Yến. |
| 8 | Làng nghề Nón lá chuông | MỘT PHẦN | `/lang-nghe/NLC` | Có hero/story/cơ sở/quy trình; cần so ảnh, văn bản và khoảng cách; chưa nghiệm thu khớp từng trang. |
| 9 | Làng nghề Quạt Chàng Sơn | MỘT PHẦN | `/lang-nghe/QCS` | Có hero/story/cơ sở/quy trình; cần so ảnh, văn bản và khoảng cách; chưa nghiệm thu khớp từng trang. |
| 10 | Làng nghề Mây tre đan | MỘT PHẦN | `/lang-nghe/MTD` | Có hero/story/cơ sở/quy trình; cần so ảnh, văn bản và khoảng cách; chưa nghiệm thu khớp từng trang. |
| 11 | Về chúng tôi – biến thể 1 | MỘT PHẦN | `/ve-chung-toi` | Một route có thông tin dự án/sứ mệnh/tầm nhìn; PDF có nhiều bản cùng nội dung, không cần tạo 3 route. |
| 12 | Về chúng tôi – biến thể 2 | MỘT PHẦN | `/ve-chung-toi` | Một route có thông tin dự án/sứ mệnh/tầm nhìn; PDF có nhiều bản cùng nội dung, không cần tạo 3 route. |
| 13 | Về chúng tôi – biến thể 3 | MỘT PHẦN | `/ve-chung-toi` | Một route có thông tin dự án/sứ mệnh/tầm nhìn; PDF có nhiều bản cùng nội dung, không cần tạo 3 route. |
| 14 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 15 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 16 | Làng nghề Gốm Bát Tràng | MỘT PHẦN | `/lang-nghe/GBT` | Có hero/story/cơ sở/quy trình; cần so ảnh, văn bản và khoảng cách; chưa nghiệm thu khớp từng trang. |
| 17 | Làng nghề Lụa Nha Xá | MỘT PHẦN | `/lang-nghe/LNX` | Có hero/story/cơ sở/quy trình; cần so ảnh, văn bản và khoảng cách; chưa nghiệm thu khớp từng trang. |
| 18 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 19 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 20 | Gửi yêu cầu – chọn nhu cầu | CHƯA CÓ TRANG | `` | Modal kết nối và /dat-lich không thay thế layout/trường dữ liệu của trang này. |
| 21 | Cơ sở GỐM TỚI LIÊN | MỘT PHẦN | `/co-so/GBT_GTL` | Đã kiểm tra hero, 6 card, 4 năng lực và 3 avatar khớp thiết kế PDF (Hà Mai Phương, Trần Văn Minh, Lữ Thanh Hà); còn so template toàn trang và đối chiếu gallery sản phẩm. |
| 22 | Cơ sở GỐM HẢI LONG | MỘT PHẦN | `/co-so/GBT_GHL` | Đã kiểm tra hero, 6 card, 4 năng lực và 3 avatar khớp thiết kế PDF (Trần Khánh Linh, Đỗ Ngọc Mai, Nguyễn Đức Thành); còn so template toàn trang và đối chiếu gallery sản phẩm. |
| 23 | Cơ sở HOÀNG ANH CERAMICS | MỘT PHẦN | `/co-so/GBT_HAC` | Đã kiểm tra hero, 6 card và 3 avatar tải được; còn so template toàn trang và đối chiếu gallery sản phẩm. |
| 24 | Cơ sở BÁCH NGÂN HỶ | MỘT PHẦN | `/co-so/GBT_BNH` | Đã kiểm tra hero, 6 card và 3 avatar tải được; còn so template toàn trang và đối chiếu gallery sản phẩm. Đã sửa nội dung review Nguyễn Nhật Minh theo PDF. |
| 25 | Cơ sở GỐM SỨ MẠNH HOA | MỘT PHẦN | `/co-so/GBT_GSMH` | Đã kiểm tra hero, 6 card và 3 avatar tải được; còn so template toàn trang và đối chiếu gallery sản phẩm. |
| 26 | Cơ sở MÂY TRE ĐAN VIỆT QUANG | MỘT PHẦN | `/co-so/MTD_MTDVQ` | Đã bổ sung 3 dự án từ PDF, chưa xác minh thực tế; còn đối chiếu thời gian giao hàng và nghiệm thu toàn trang. |
| 27 | Cơ sở MÂY TRE ĐAN TUẤN ANH | MỘT PHẦN | `/co-so/MTD_MTDTA` | Đã kiểm tra hero, 6 card và 3 avatar tải được; còn so template toàn trang và đối chiếu gallery sản phẩm. |
| 28 | Cơ sở LỤA NHA XÁ | MỘT PHẦN | `/co-so/LNX_LNX` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 29 | Cơ sở GỐM TỚI LIÊN | MỘT PHẦN | `/co-so/GBT_GTL` | Đã kiểm tra hero, 6 card, 4 năng lực và 3 avatar khớp thiết kế PDF (Hà Mai Phương, Trần Văn Minh, Lữ Thanh Hà); còn so template toàn trang và đối chiếu gallery sản phẩm. Bản lặp Gốm Tới Liên của trang 21. |
| 30 | Ống heo súp lơ | MỘT PHẦN | `/san-pham/SP_GBT_01` | Đã chỉnh mẫu profile và nền sen/ảnh xưởng theo PDF; đã kiểm tra desktop/mobile. Cần người dùng duyệt, so chi tiết nội dung và ảnh từng khối. |
| 31 | Ống heo Shiba | MỘT PHẦN | `/san-pham/SP_GBT_02` | Ảnh chính đã đối chiếu; có 5 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 32 | Túi xách sứ cắm hoa | MỘT PHẦN | `/san-pham/SP_GBT_03` | Ảnh chính đã đối chiếu; có 4 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 33 | Ống heo cua | MỘT PHẦN | `/san-pham/SP_GBT_04` | Ảnh chính đã đối chiếu; có 4 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 34 | Ống heo Labubu | MỘT PHẦN | `/san-pham/SP_GBT_05` | Ảnh chính đã đối chiếu; có 4 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 35 | Ống heo chim cánh cụt | MỘT PHẦN | `/san-pham/SP_GBT_06` | Ảnh chính đã đối chiếu; có 5 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 36 | Bộ sưu tập gốm Thanh Mạ | MỘT PHẦN | `/san-pham/SP_GBT_07` | Ảnh chính đã đối chiếu; có 4 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 37 | Bộ sưu tập gốm Ngư Sắc | MỘT PHẦN | `/san-pham/SP_GBT_08` | Ảnh chính đã đối chiếu; có 5 ảnh trong data. Cần nghiệm thu gallery; giao diện/template chưa nghiệm thu. |
| 38 | Cherry Collection | MỘT PHẦN | `/san-pham/SP_GBT_09` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 39 | Cốc túi cafe | MỘT PHẦN | `/san-pham/SP_GBT_10` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 40 | Rổ gốm | MỘT PHẦN | `/san-pham/SP_GBT_11` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 41 | Hũ Hỷ Xuân Hoa | MỘT PHẦN | `/san-pham/SP_GBT_12` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 42 | Nón cưới trắng tinh khôi | MỘT PHẦN | `/san-pham/SP_NLC_NONCUOI_TRANG` | Đã chỉnh gallery dọc, hero, nội dung tab và ảnh thêu theo PDF; đã kiểm tra desktop/mobile. Cần người dùng duyệt; cơ sở chưa xác minh. |
| 43 | Bộ ấm trà Lam Điệp | MỘT PHẦN | `/san-pham/SP_GBT_25` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 44 | Bộ ấm trà Thanh Diệp | MỘT PHẦN | `/san-pham/SP_GBT_26` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 45 | Khay mứt men hỏa biến | MỘT PHẦN | `/san-pham/SP_GBT_27` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 46 | Bộ đồ ăn men hỏa biến | MỘT PHẦN | `/san-pham/SP_GBT_28` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 47 | Hộp đựng trà Kim Hoa | MỘT PHẦN | `/san-pham/SP_GBT_29` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 48 | Khay lá sen | MỘT PHẦN | `/san-pham/SP_GBT_30` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 49 | Gửi yêu cầu – báo giá | CHƯA CÓ TRANG | `` | Modal kết nối và /dat-lich không thay thế layout/trường dữ liệu của trang này. |
| 50 | Gửi yêu cầu – tham quan | CHƯA CÓ TRANG | `` | Modal kết nối và /dat-lich không thay thế layout/trường dữ liệu của trang này. |
| 51 | Túi Xách Mây Tre Đan Hồng Đan | MỘT PHẦN | `/san-pham/SP_MTD_TXMTDHD` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 52 | Ghế Mây Tựa Đan Mộc | MỘT PHẦN | `/san-pham/SP_MTD_GMTDM` | Đã chỉnh hero, đặc điểm, banner và liên hệ theo PDF; hai ảnh chi tiết crop từ ảnh chính, chưa có góc khác. Hotline PDF 52/26 chưa thống nhất. Cần người dùng duyệt. |
| 53 | Lót Ly Mây Tre Đan Tròn | MỘT PHẦN | `/san-pham/SP_MTD_LLMTDT` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 54 | Đĩa Gốm Sứ Viền Mây Tre | MỘT PHẦN | `/san-pham/SP_MTD_DGSVMT` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 55 | Khay Mây Đựng Đồ | MỘT PHẦN | `/san-pham/SP_MTD_KMMD` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 56 | Hộp Đựng Giấy Mây Tre Đan | MỘT PHẦN | `/san-pham/SP_MTD_HDGMTD` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 57 | Túi Xách Mây Dáng Tròn | MỘT PHẦN | `/san-pham/SP_MTD_TXMDT` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 58 | Túi Xách Mây Tre Đan Thanh Lịch | MỘT PHẦN | `/san-pham/SP_MTD_TXMTDTL` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 59 | Túi Xách Mây Nắp Gập | MỘT PHẦN | `/san-pham/SP_MTD_TXMNG` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 60 | Túi Xách Mây Tre Đan Dáng Trống | MỘT PHẦN | `/san-pham/SP_MTD_TXMTDDT` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 61 | Vali Mây Tre Đan Họa Tiết Hình Học | MỘT PHẦN | `/san-pham/SP_MTD_VMTDHTHH` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 62 | Bộ Giành Tích Ủ Trà | MỘT PHẦN | `/san-pham/SP_MTD_BGTTUT` | Ảnh chính đã đối chiếu; có 1 ảnh trong data (đã rà soát toàn bộ template: không có crop gallery riêng, thumbnail trong PDF là placeholder); giữ 1 ảnh, chưa nghiệm thu toàn trang. |
| 63 | Ấm Bạch Cúc | MỘT PHẦN | `/san-pham/SP_GBT_19` | Đã chỉnh mẫu profile và nền sen/ảnh xưởng theo PDF; đã kiểm tra desktop/mobile. Cần người dùng duyệt, so chi tiết nội dung và ảnh từng khối. |
| 64 | Ấm Rồng Vân Mây | MỘT PHẦN | `/san-pham/SP_GBT_20` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 65 | Ấm Cá Chép Hóa Rồng | MỘT PHẦN | `/san-pham/SP_GBT_21` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 66 | Bộ ấm chén Sen | MỘT PHẦN | `/san-pham/SP_GBT_22` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 67 | Ấm hoa Sen | MỘT PHẦN | `/san-pham/SP_GBT_23` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 68 | Hũ đựng trà Sen | MỘT PHẦN | `/san-pham/SP_GBT_24` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 69 | Nồi đất vẽ tay họa tiết | MỘT PHẦN | `/san-pham/SP_GBT_13` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 70 | Bình hút tài lộc | MỘT PHẦN | `/san-pham/SP_GBT_14` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 71 | Ngói mũi hài vàng hổ phách | MỘT PHẦN | `/san-pham/SP_GBT_15` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 72 | Bộ ấm trà quả hồng | MỘT PHẦN | `/san-pham/SP_GBT_16` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 73 | Bộ ấm chén tử sa | MỘT PHẦN | `/san-pham/SP_GBT_17` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 74 | Nồi đất Nodacook | MỘT PHẦN | `/san-pham/SP_GBT_18` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 75 | Cơ sở QUẠT TỪ TÂM | MỘT PHẦN | `/co-so/QCS_QTT` | Đã kiểm tra hero, 6 card, 4 năng lực và 3 avatar khớp thiết kế PDF (Trần Phương Nhi, Thành Nguyễn, Nguyễn Hải Linh); còn so template toàn trang và đối chiếu gallery sản phẩm. |
| 76 | Cơ sở QUẠT PHƯƠNG | MỘT PHẦN | `/co-so/QCS_QP` | Đã kiểm tra hero, 6 card, 4 năng lực và 3 avatar khớp thiết kế PDF (Trần Minh Anh, Lương Anh Tuấn, Vũ Thu Phương); sửa hoán đổi tư vấn/câu chuyện; còn so template toàn trang. |
| 77 | Cơ sở QUẠT CHÀNG SƠN | MỘT PHẦN | `/co-so/QCS_QCS` | Đã kiểm tra hero, 6 card, 4 năng lực và 3 avatar khớp thiết kế PDF (Phạm Mỹ Anh, Nguyễn Minh, Thái Linh); chuẩn hóa tên ảnh năng lực/sản phẩm; còn so template toàn trang. |
| 78 | Cơ sở HOA NÓN LÀNG CHUÔNG | MỘT PHẦN | `/co-so/NLC_HNLC` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 79 | Cơ sở NÓN LÁ HẢI YẾN | MỘT PHẦN | `/co-so/NLC_NLHY` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 80 | Cơ sở HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG | MỘT PHẦN | `/co-so/NLC_NLTTH` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 81 | Cơ sở SILK HẠ VY | MỘT PHẦN | `/co-so/LNX_SHV` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 82 | Quạt Khang Hi | MỘT PHẦN | `/san-pham/SP_QCS_QKH` | Đã chỉnh mẫu profile và nền quạt/ảnh xưởng theo PDF; đã kiểm tra desktop/mobile. Cần người dùng duyệt, so chi tiết nội dung và ảnh từng khối. |
| 83 | Quạt Nan Gỗ | MỘT PHẦN | `/san-pham/SP_QCS_QNG` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 84 | Quạt Tranh Tết | MỘT PHẦN | `/san-pham/SP_QCS_QTT` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 85 | Quạt Hoa Văn Cao Cấp | MỘT PHẦN | `/san-pham/SP_QCS_QHVCC` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 86 | Quạt Truyền Thống | MỘT PHẦN | `/san-pham/SP_QCS_QTRUYENTHONG` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 87 | Quạt Tranh Phong Thủy | MỘT PHẦN | `/san-pham/SP_QCS_QTPT` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 88 | Quạt Sắc Việt Cổ Phong | MỘT PHẦN | `/san-pham/SP_QCS_QSVCP` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 89 | Quạt Thanh Vũ Hoa Lam | MỘT PHẦN | `/san-pham/SP_QCS_QTVHL` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 90 | Quạt Kim Hoa Cát Tường | MỘT PHẦN | `/san-pham/SP_QCS_QKHCT` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 91 | Quạt Lam Đồ Họa | MỘT PHẦN | `/san-pham/SP_QCS_QLDH` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 92 | Quạt Vân Xoắn Lam | MỘT PHẦN | `/san-pham/SP_QCS_QVXL` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 93 | Quạt Hội Xuân Dân Gian | MỘT PHẦN | `/san-pham/SP_QCS_QHXDG` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 94 | Quạt Linh Thú Dân Gian | MỘT PHẦN | `/san-pham/SP_QCS_QLTDG` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 95 | Quạt Phúc Lộc Đồng Tử | MỘT PHẦN | `/san-pham/SP_QCS_QPLDT` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 96 | Quạt Mai Điểu Nghênh Xuân | MỘT PHẦN | `/san-pham/SP_QCS_QMDNX` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 97 | Quạt Liên Hoa Phấn Sắc | MỘT PHẦN | `/san-pham/SP_QCS_QLHPS` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 98 | Quạt Sơn Thủy Lục Bảo | MỘT PHẦN | `/san-pham/SP_QCS_QSTLB` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 99 | Quạt Hắc Liên Thủy Mặc | MỘT PHẦN | `/san-pham/SP_QCS_QHLTM` | Ảnh chính đã đối chiếu khớp thiết kế PDF; có 1 ảnh trong data (template không có crop gallery chi tiết riêng); giao diện/template chưa nghiệm thu. |
| 100 | Icon/đối tượng xuất riêng | TÀI SẢN RỜI | `` | Không phải màn hình; đối chiếu biểu tượng khi nghiệm thu trang cha. |
| 101 | Nón Hỷ Sắc | MỘT PHẦN | `/san-pham/SP_NLC_NHS` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 102 | Nón Hồn Quê | MỘT PHẦN | `/san-pham/SP_NLC_NHQ` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 103 | Nón Sen Ngọc | MỘT PHẦN | `/san-pham/SP_NLC_SN` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 104 | Nón Điệp Liên | MỘT PHẦN | `/san-pham/SP_NLC_NDL` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 105 | Nón Hoa Điệp | MỘT PHẦN | `/san-pham/SP_NLC_NHD` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 106 | Nón Xứ Huế | MỘT PHẦN | `/san-pham/SP_NLC_NXH` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 107 | Nón Quai Thao Nguyệt Sắc | MỘT PHẦN | `/san-pham/SP_NLC_NQTNS` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 108 | Nón Quai Thao Kim Nguyệt | MỘT PHẦN | `/san-pham/SP_NLC_NQTKN` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 109 | Nón Quai Thao Mộc Nguyên | MỘT PHẦN | `/san-pham/SP_NLC_NQTMN` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 110 | Nón Đầu Kim Quan | MỘT PHẦN | `/san-pham/SP_NLC_NDKQ` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 111 | Nón Đầu Hồng Vân | MỘT PHẦN | `/san-pham/SP_NLC_NDHV` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 112 | Nón Đầu Vân Nguyệt | MỘT PHẦN | `/san-pham/SP_NLC_NDVN` | Đã có bản ghi, 7 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 113 | Nón Vũ Điệu Bản Làng | MỘT PHẦN | `/san-pham/SP_NLC_NVDBL` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 114 | Nón Dấu Ấn Thời Gian | MỘT PHẦN | `/san-pham/SP_NLC_NDATG` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 115 | Nón Kim Vũ | MỘT PHẦN | `/san-pham/SP_NLC_NKV` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 116 | Nón Liên Hoa Thanh Cảnh | MỘT PHẦN | `/san-pham/SP_NLC_NLHTC` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 117 | Nón Xuân Điệp | MỘT PHẦN | `/san-pham/SP_NLC_NXD` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 118 | Nón Dấu Son Thăng Long | MỘT PHẦN | `/san-pham/SP_NLC_NDSTL` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 119 | Lụa hoa văn Phượng Vũ | MỘT PHẦN | `/san-pham/SP_LNX_01` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 120 | Lụa hoa văn Vân Bèo | MỘT PHẦN | `/san-pham/SP_LNX_02` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 121 | Lụa hoa văn Thọ dơi – Xám Bạc | MỘT PHẦN | `/san-pham/SP_LNX_03` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 122 | Lụa hoa văn Bách Liên Hoa | MỘT PHẦN | `/san-pham/SP_LNX_04` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 123 | Lụa hoa văn Sen Hồ Điệp | MỘT PHẦN | `/san-pham/SP_LNX_05` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 124 | Lụa hoa văn Thọ dơi – Tím Hồng | MỘT PHẦN | `/san-pham/SP_LNX_06` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 125 | Lụa Hoa Văn Trống Đồng | MỘT PHẦN | `/san-pham/SP_SHV_01` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 126 | Lụa Hoa Văn Hoa Bèo | MỘT PHẦN | `/san-pham/SP_SHV_02` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 127 | Lụa Hoa Văn Sen Hồ Điệp | MỘT PHẦN | `/san-pham/SP_SHV_03` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 128 | Lụa Hoa Văn Bồ Công Anh | MỘT PHẦN | `/san-pham/SP_SHV_04` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 129 | Lụa Hoa Văn Chấm Trắng | MỘT PHẦN | `/san-pham/SP_SHV_05` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 130 | Lụa Hoa Văn Thủy Tiên | MỘT PHẦN | `/san-pham/SP_SHV_06` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
