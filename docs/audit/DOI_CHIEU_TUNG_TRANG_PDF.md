# Đối chiếu đủ 130 trang WEBSITE.pdf

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
| 21 | Cơ sở GỐM TỚI LIÊN | MỘT PHẦN | `/co-so/GBT_GTL` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 22 | Cơ sở GỐM HẢI LONG | MỘT PHẦN | `/co-so/GBT_GHL` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 23 | Cơ sở HOÀNG ANH CERAMICS | MỘT PHẦN | `/co-so/GBT_HAC` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 24 | Cơ sở BÁCH NGÂN HỶ | MỘT PHẦN | `/co-so/GBT_BNH` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 25 | Cơ sở GỐM SỨ MẠNH HOA | MỘT PHẦN | `/co-so/GBT_GSMH` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 26 | Cơ sở MÂY TRE ĐAN VIỆT QUANG | MỘT PHẦN | `/co-so/MTD_MTDVQ` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 27 | Cơ sở MÂY TRE ĐAN TUẤN ANH | MỘT PHẦN | `/co-so/MTD_MTDTA` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 28 | Cơ sở LỤA NHA XÁ | MỘT PHẦN | `/co-so/LNX_LNX` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 29 | Cơ sở GỐM TỚI LIÊN | MỘT PHẦN | `/co-so/GBT_GTL` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. Bản lặp Gốm Tới Liên của trang 21. |
| 30 | Ống heo súp lơ | MỘT PHẦN | `/san-pham/SP_GBT_01` | Đã có bản ghi, 4 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 31 | Ống heo Shiba | MỘT PHẦN | `/san-pham/SP_GBT_02` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 32 | Túi xách sứ cắm hoa | MỘT PHẦN | `/san-pham/SP_GBT_03` | Đã có bản ghi, 4 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 33 | Ống heo cua | MỘT PHẦN | `/san-pham/SP_GBT_04` | Đã có bản ghi, 4 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 34 | Ống heo Labubu | MỘT PHẦN | `/san-pham/SP_GBT_05` | Đã có bản ghi, 4 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 35 | Ống heo chim cánh cụt | MỘT PHẦN | `/san-pham/SP_GBT_06` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 36 | Bộ sưu tập gốm Thanh Mạ | MỘT PHẦN | `/san-pham/SP_GBT_07` | Đã có bản ghi, 4 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 37 | Bộ sưu tập gốm Ngư Sắc | MỘT PHẦN | `/san-pham/SP_GBT_08` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 38 | Cherry Collection | MỘT PHẦN | `/san-pham/SP_GBT_09` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 39 | Cốc túi cafe | MỘT PHẦN | `/san-pham/SP_GBT_10` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 40 | Rổ gốm | MỘT PHẦN | `/san-pham/SP_GBT_11` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 41 | Hũ Hỷ Xuân Hoa | MỘT PHẦN | `/san-pham/SP_GBT_12` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 42 | Nón cưới trắng tinh khôi | MỘT PHẦN | `/san-pham/SP_NLC_NONCUOI_TRANG` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. Chưa xác minh cơ sở và ảnh sample. |
| 43 | Bộ ấm trà Lam Điệp | MỘT PHẦN | `/san-pham/SP_GBT_25` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 44 | Bộ ấm trà Thanh Diệp | MỘT PHẦN | `/san-pham/SP_GBT_26` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 45 | Khay mứt men hỏa biến | MỘT PHẦN | `/san-pham/SP_GBT_27` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 46 | Bộ đồ ăn men hỏa biến | MỘT PHẦN | `/san-pham/SP_GBT_28` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 47 | Hộp đựng trà Kim Hoa | MỘT PHẦN | `/san-pham/SP_GBT_29` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 48 | Khay lá sen | MỘT PHẦN | `/san-pham/SP_GBT_30` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 49 | Gửi yêu cầu – báo giá | CHƯA CÓ TRANG | `` | Modal kết nối và /dat-lich không thay thế layout/trường dữ liệu của trang này. |
| 50 | Gửi yêu cầu – tham quan | CHƯA CÓ TRANG | `` | Modal kết nối và /dat-lich không thay thế layout/trường dữ liệu của trang này. |
| 51 | Túi Xách Mây Tre Đan Hồng Đan | MỘT PHẦN | `/san-pham/SP_MTD_TXMTDHD` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 52 | Ghế Mây Tựa Đan Mộc | MỘT PHẦN | `/san-pham/SP_MTD_GMTDM` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 53 | Lót Ly Mây Tre Đan Tròn | MỘT PHẦN | `/san-pham/SP_MTD_LLMTDT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 54 | Đĩa Gốm Sứ Viền Mây Tre | MỘT PHẦN | `/san-pham/SP_MTD_DGSVMT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 55 | Khay Mây Đựng Đồ | MỘT PHẦN | `/san-pham/SP_MTD_KMMD` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 56 | Hộp Đựng Giấy Mây Tre Đan | MỘT PHẦN | `/san-pham/SP_MTD_HDGMTD` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 57 | Túi Xách Mây Dáng Tròn | MỘT PHẦN | `/san-pham/SP_MTD_TXMDT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 58 | Túi Xách Mây Tre Đan Thanh Lịch | MỘT PHẦN | `/san-pham/SP_MTD_TXMTDTL` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 59 | Túi Xách Mây Nắp Gập | MỘT PHẦN | `/san-pham/SP_MTD_TXMNG` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 60 | Túi Xách Mây Tre Đan Dáng Trống | MỘT PHẦN | `/san-pham/SP_MTD_TXMTDDT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 61 | Vali Mây Tre Đan Họa Tiết Hình Học | MỘT PHẦN | `/san-pham/SP_MTD_VMTDHTHH` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 62 | Bộ Giành Tích Ủ Trà | MỘT PHẦN | `/san-pham/SP_MTD_BGTTUT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 63 | Ấm Bạch Cúc | MỘT PHẦN | `/san-pham/SP_GBT_19` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 64 | Ấm Rồng Vân Mây | MỘT PHẦN | `/san-pham/SP_GBT_20` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 65 | Ấm Cá Chép Hóa Rồng | MỘT PHẦN | `/san-pham/SP_GBT_21` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 66 | Bộ ấm chén Sen | MỘT PHẦN | `/san-pham/SP_GBT_22` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 67 | Ấm hoa Sen | MỘT PHẦN | `/san-pham/SP_GBT_23` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 68 | Hũ đựng trà Sen | MỘT PHẦN | `/san-pham/SP_GBT_24` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 69 | Nồi đất vẽ tay họa tiết | MỘT PHẦN | `/san-pham/SP_GBT_13` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 70 | Bình hút tài lộc | MỘT PHẦN | `/san-pham/SP_GBT_14` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 71 | Ngói mũi hài vàng hổ phách | MỘT PHẦN | `/san-pham/SP_GBT_15` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 72 | Bộ ấm trà quả hồng | MỘT PHẦN | `/san-pham/SP_GBT_16` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 73 | Bộ ấm chén tử sa | MỘT PHẦN | `/san-pham/SP_GBT_17` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 74 | Nồi đất Nodacook | MỘT PHẦN | `/san-pham/SP_GBT_18` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 75 | Cơ sở QUẠT TỪ TÂM | MỘT PHẦN | `/co-so/QCS_QTT` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 76 | Cơ sở QUẠT PHƯƠNG | MỘT PHẦN | `/co-so/QCS_QP` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 77 | Cơ sở QUẠT CHÀNG SƠN | MỘT PHẦN | `/co-so/QCS_QCS` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 78 | Cơ sở HOA NÓN LÀNG CHUÔNG | MỘT PHẦN | `/co-so/NLC_HNLC` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 79 | Cơ sở NÓN LÁ HẢI YẾN | MỘT PHẦN | `/co-so/NLC_NLHY` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 80 | Cơ sở HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG | MỘT PHẦN | `/co-so/NLC_NLTTH` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 81 | Cơ sở SILK HẠ VY | MỘT PHẦN | `/co-so/LNX_SHV` | Có template và 6/6 sản phẩm có ảnh trong data; cần so layout, ảnh chi tiết, nội dung xưởng và nghiệm thu. |
| 82 | Quạt Khang Hi | MỘT PHẦN | `/san-pham/SP_QCS_QKH` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 83 | Quạt Nan Gỗ | MỘT PHẦN | `/san-pham/SP_QCS_QNG` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 84 | Quạt Tranh Tết | MỘT PHẦN | `/san-pham/SP_QCS_QTT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 85 | Quạt Hoa Văn Cao Cấp | MỘT PHẦN | `/san-pham/SP_QCS_QHVCC` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 86 | Quạt Truyền Thống | MỘT PHẦN | `/san-pham/SP_QCS_QTRUYENTHONG` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 87 | Quạt Tranh Phong Thủy | MỘT PHẦN | `/san-pham/SP_QCS_QTPT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 88 | Quạt Sắc Việt Cổ Phong | MỘT PHẦN | `/san-pham/SP_QCS_QSVCP` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 89 | Quạt Thanh Vũ Hoa Lam | MỘT PHẦN | `/san-pham/SP_QCS_QTVHL` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 90 | Quạt Kim Hoa Cát Tường | MỘT PHẦN | `/san-pham/SP_QCS_QKHCT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 91 | Quạt Lam Đồ Họa | MỘT PHẦN | `/san-pham/SP_QCS_QLDH` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 92 | Quạt Vân Xoắn Lam | MỘT PHẦN | `/san-pham/SP_QCS_QVXL` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 93 | Quạt Hội Xuân Dân Gian | MỘT PHẦN | `/san-pham/SP_QCS_QHXDG` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 94 | Quạt Linh Thú Dân Gian | MỘT PHẦN | `/san-pham/SP_QCS_QLTDG` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 95 | Quạt Phúc Lộc Đồng Tử | MỘT PHẦN | `/san-pham/SP_QCS_QPLDT` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 96 | Quạt Mai Điểu Nghênh Xuân | MỘT PHẦN | `/san-pham/SP_QCS_QMDNX` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 97 | Quạt Liên Hoa Phấn Sắc | MỘT PHẦN | `/san-pham/SP_QCS_QLHPS` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 98 | Quạt Sơn Thủy Lục Bảo | MỘT PHẦN | `/san-pham/SP_QCS_QSTLB` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 99 | Quạt Hắc Liên Thủy Mặc | MỘT PHẦN | `/san-pham/SP_QCS_QHLTM` | Đã có bản ghi, 1 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
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
| 125 | Lụa Hoa Tiết Trống Đồng | MỘT PHẦN | `/san-pham/SP_SHV_01` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 126 | Lụa Hoa Văn Hoa Bèo | MỘT PHẦN | `/san-pham/SP_SHV_02` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 127 | Lụa Hoa Văn Sen Hồ Điệp | MỘT PHẦN | `/san-pham/SP_SHV_03` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 128 | Lụa Hoa Văn Bồ Công Anh | MỘT PHẦN | `/san-pham/SP_SHV_04` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 129 | Lụa Hoa Văn Chấm Trắng | MỘT PHẦN | `/san-pham/SP_SHV_05` | Đã có bản ghi, 5 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
| 130 | Lụa Hoa Văn Thủy Tiên | MỘT PHẦN | `/san-pham/SP_SHV_06` | Đã có bản ghi, 6 ảnh được gắn và nội dung theo PDF; giao diện/template chưa nghiệm thu. |
