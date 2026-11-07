# Description.docx đã đủ dữ liệu theo PDF chưa?

Mốc kiểm tra: **07/11/2026**. Cập nhật sau khi đã sửa mock: 91 sản phẩm, 91 ID duy nhất, 91 sản phẩm có ảnh phân giải được. Bảng dưới mô tả nội dung DOCX; mock hiện đã được bổ sung và vẫn cần nghiệm thu các dữ liệu chưa xác thực. Đã đọc toàn bộ 2.280 đoạn XML trong `frontend/download/docs/Description.docx`, đối chiếu các nhóm dữ liệu với `frontend/src/data/mockData.js` và các trang liên quan trong `template/WEBSITE.pdf`.

**Chưa đủ. Không thể hoàn thiện frontend chỉ bằng cách copy Description.docx vào mockData.js.** DOCX là nguồn bổ trợ có nhiều nội dung đã được đưa vào mock, đồng thời vẫn có ô trống, lỗi copy, đường dẫn sai và định dạng không phải JSON hợp lệ. PDF quyết định template; nội dung thiếu cần lấy từ đúng trang PDF và xác minh trực tiếp trên thiết kế.

## 1. Lấy dữ liệu ở đâu

| Nguồn | Vị trí | Dùng khi nào |
|---|---|---|
| Thiết kế gốc | `template/WEBSITE.pdf` | Chốt template, thứ tự section, ảnh, chữ và CTA đúng trang. Không lấy bố cục DOCX thay PDF. |
| Văn bản PDF đã bổ sung vào Markdown | [PDF_NOI_DUNG_THAM_CHIEU.md](PDF_NOI_DUNG_THAM_CHIEU.md) | Đủ văn bản trích xuất của **130 trang**, tra `Trang 030`, `Trang 063`... để điền các trường DOCX còn trống. Văn bản có thể lặp/chồng hoặc sai thứ tự do cấu trúc PDF; phải kiểm tra lại trang nhìn thấy trước khi dùng. |
| DOCX gốc | `frontend/download/docs/Description.docx` | Tra mô tả làng nghề/quy trình/cơ sở/năng lực/review và phần sản phẩm đã có nội dung. |
| DOCX đã trích ra Markdown | [DESCRIPTION_TRICH_XUAT.md](DESCRIPTION_TRICH_XUAT.md) | Đọc/search được toàn bộ nội dung DOCX; `Pxxxx` là số đoạn XML, **không phải trang Word**. Giữ nguyên các lỗi nguồn để nhận diện, không import trực tiếp. |
| Dữ liệu frontend đang dùng | [mockData.js](../../frontend/src/data/mockData.js) | Nguồn runtime cần sửa sau khi đối chiếu; có phần đã tốt hơn DOCX, phải giữ lại. |
| Dữ liệu riêng trang chủ | [homeData.js](../../frontend/src/data/homeData.js) | Brand/logo, hero, featuredProducts, journeyContent và danh sách làng ở home; sửa mockData không tự sửa các tên/link khai báo riêng tại đây. |
| Đường dẫn ảnh thực tế | [DANH_MUC_ANH.md](DANH_MUC_ANH.md), [IMAGE_INVENTORY.csv](IMAGE_INVENTORY.csv) | Tìm ảnh trong download/template, biết ảnh đã tham chiếu và bản sao trùng hash. DOCX không cung cấp ảnh sản phẩm đầy đủ. |

### Vị trí chính xác trong mockData.js

Các dòng dưới đây thuộc mốc kiểm tra hiện tại; khi code đổi hãy tìm bằng `export const ...`, không phụ thuộc số dòng cũ.

| Export / nhóm | Bắt đầu dòng | Quan hệ và nơi sử dụng |
|---|---:|---|
| `users` | 1 | 3 user demo; `context/AuthContext.jsx` khởi tạo vào localStorage. Không phải tài khoản backend thật. |
| `villages` | 29 | 5 làng; `VillageDetailPage` tìm bằng `id`, story nằm trong `village.story`. |
| `productionProcesses` | 182 | 28 bước; liên kết bằng `langNgheId`, sắp theo `step`. |
| `facilities` | 494 | 15 cơ sở; `langNgheId` nối làng; chứa tên, liên hệ, story, thông số và ảnh cơ sở. |
| `capacities` | 1085 | 60 năng lực; nối cơ sở bằng `coSoSanXuatId`, thứ tự `order`. |
| `projects` | 1749 | 17 dự án hiện có trong code; nối `coSoSanXuatId`. DOCX phần 5 chưa đủ để xác nhận các bản ghi này. |
| `reviews` | 1892 | 45 review; `coSoSanXuatId`, `reviewerName`, `reviewTime`, `content`, `avatar`. |
| `products` | 2301 | 91 bản ghi, 91 ID; `coSoSanXuatId` nối cơ sở. 90 hồ sơ đã có trường và ảnh; bản trang 42 chưa xác minh cơ sở. |
| `initialBookings` | 3673 | Mảng rỗng. Schema Booking trong DOCX chưa đồng nghĩa BookingPage đang lưu vào mảng này. |

`resolveMockAsset.js` nằm ở `frontend/src/utils/resolveMockAsset.js`, tìm ảnh từ `frontend/download/images`. `ProductDetailPage.jsx`, `FacilityProducts.jsx` và `ProductDetailModal.jsx` đều đọc `products` nhưng đang hỗ trợ schema ảnh khác nhau; cần thống nhất trước khi gắn ảnh hàng loạt. Ngay cả sau khi sửa user mẫu, trình duyệt đã có localStorage cũ có thể chưa phản ánh dữ liệu khởi tạo mới.

## 2. DOCX có gì và thiếu gì so với nhu cầu PDF

| Nhóm trong DOCX | Đoạn nguồn | So với mock hiện tại / PDF | Cách làm tiếp |
|---|---|---|---|
| Người dùng và schema booking | P0001–P0043 | 3 user mẫu và danh sách tên trường; chưa có workflow, booking thật hoặc toàn bộ schema form PDF 1–2/49–50 | Giữ demo đúng phạm vi; thiết kế trường form theo PDF. Không tự coi schema DOCX là backend đã có. |
| 1. Làng nghề | P0045–P0191 | Có 5 làng với story/ảnh; chưa bảo đảm mọi đường dẫn đúng. Ví dụ MTD lặp ảnh chuyện làng nghề; các nguồn dùng địa danh khác cách ghi | Tra PDF 8–10/16–17 và kho ảnh; giữ những đường dẫn mock đã sửa đúng. Không suy ra địa chỉ đúng chỉ vì một nguồn dùng tên khác. |
| 2. Quy trình | P0192–P0505 | Có 28 bước, tương ứng 5/5/5/8/5 theo làng. DOCX có lỗi gắn ảnh MTD sang thư mục Làng quạt; mô tả Dán nón lặp nội dung khung nón | Dùng nội dung có căn cứ; đối chiếu PDF từng bước, không chép lại lỗi nguồn/đè các sửa đúng trong mock. |
| 3. Cơ sở | P0506–P0873 | Có 15 cơ sở. Trong 10 trường scalar đã kiểm tra, 2 cơ sở hiện khác DOCX vì mô tả đã sửa theo PDF; một số email null; ảnh dùng dấu ngoặc kép cong/backslash và thiếu dấu phẩy | Tra PDF 21–29/75–81; kiểm tra liên hệ/mô tả/ảnh. Không biến null thành contact đoán. So sánh scalar không xác nhận ảnh hoặc thông số lồng nhau đã đúng PDF. |
| 4. Năng lực | P0874–P1594 | 60 mục; tên và mô tả của cả 60 khớp mock. Mỗi cơ sở 4 mục trong DOCX, chưa đủ căn cứ cho các trang PDF có bố cục/số mục khác | Rà từng cơ sở theo PDF; ảnh Hải Yến có path lỗi giống mock. Không mặc định 4 mục là đầy đủ cho mọi trang. |
| 5. Dự án | P1595–P1700 | Chủ yếu là tên trường `id/name/Description/link/createdAt`, chưa có đầy đủ bản ghi. Có link tham khảo tại 5.3 Hoa Nón nhưng không phải hồ sơ dự án hoàn chỉnh | Lấy thông tin hiển thị từ PDF và nguồn được xác minh; không sinh dự án chỉ từ schema. Link trong DOCX chưa được mở/xác minh ở lượt này. PDF cũng có chữ dự án bị copy sang cơ sở khác, cần ghi xung đột trước khi dùng. |
| 6. Review | P1701–P2124 | Có 45 review; mock hiện có 30 avatar và còn 15 null. Có 11 bản ghi khác DOCX ở tên/ngày/nội dung, bao gồm các tên đã sửa theo PDF 75–77 và review Nguyễn Nhật Minh | Đối chiếu tên/ngày/ảnh/nội dung trên từng trang PDF; ghi quyết định nguồn khi xung đột. Không gán avatar đoán. |
| 7. Sản phẩm | P2125–P2280 | 90 bản ghi; 29 tên rỗng, 36 bản ghi thiếu nội dung chính, toàn bộ chưa có path ảnh sản phẩm thực tế; ID trùng và tên lụa lặp | Dùng bảng bổ sung dưới đây + văn bản PDF; giữ 6 bản Gốm Tới Liên trong mock đã có dữ liệu tốt hơn. |
| Home/about và trang Gửi yêu cầu | Không có mục nội dung đầy đủ tương ứng | Không tìm thấy nội dung riêng “Thông tin dự án”, “Kết nối đúng nhu cầu”; chưa bao quát các section và 2 nhánh form | Lấy PDF 7/11–13/20/49–50; data home ở `homeData.js`, about/booking hiện có nhiều text ngay trong page JSX. |
| Nón cưới trắng tinh khôi | Không có bản ghi đúng tên | Mock đã có `SP_NLC_NONCUOI_TRANG`, cơ sở chưa xác minh | Tra PDF 42 và ảnh sample để xác minh danh tính/cơ sở; không lấy nhầm bản Quai Thao Nguyệt Sắc. |

Các so sánh scalar là phép so trường đã nêu, không phải xác nhận toàn bộ cấu trúc DOCX khớp mock hoặc nội dung đúng thực tế. Xem [DESCRIPTION_RECORD_COMPARISON.csv](DESCRIPTION_RECORD_COMPARISON.csv) để biết trường nào đã kiểm tra trên 15 cơ sở, 60 năng lực và 45 review.

## 3. Các chỗ trống trong DOCX và nguồn PDF để đối chiếu

Hiện 37 bản ghi có trường văn bản trong mock khác DOCX, trong đó 36 bản đã được bổ sung trường DOCX để trống; 90 sản phẩm gốc đã có tên và nội dung chính, thêm một bản mẫu trang 42. Bảng dưới mô tả những chỗ trống của DOCX để tránh chép đè dữ liệu mock.

36 bản ghi dưới đây đều để trống `itemDescription`, `chatLieu`, `kyThuat`, `dacDiemTitle`, `dacDiemDescription`, `chatLieuVaMauSac`, `hoaTietVaKieuDang` trong DOCX; `xuatXu` có giá trị nhưng vẫn cần so với PDF. Có 29 tên trống; bản Gốm Mạnh Hoa thứ sáu lại mang tên mây tre sai nhóm. Cả 6 bản lụa cùng tên Phượng Vũ.

Bảng sau ghi **mốc thiếu trong DOCX**; các tên và trường chính đã được bổ sung vào mock, còn cần nghiệm thu ảnh và dữ liệu mâu thuẫn.

| Nhóm / mục DOCX | Bản ghi mock | PDF cần đối chiếu | Lưu ý nguồn DOCX |
|---|---|---|---|
| Hoàng Anh — 7.9, P2217–P2223 | `SP_GBT_01`–`SP_GBT_06` | **30–35** | DOCX và mock đều thiếu tên/nội dung; lấy lần lượt Ống heo súp lơ, Shiba, Túi xách sứ cắm hoa, Ống heo cua, Labubu, Chim cánh cụt; xác nhận thứ tự bằng ảnh/cơ sở. |
| Bách Ngân Hỷ — 7.10, P2224–P2230 | `SP_GBT_07`–`SP_GBT_12` | **36–41** | Cần Thanh Mạ, Ngư Sắc, Cherry Collection, Cốc túi cafe, Rổ gốm, Hũ Hỷ Xuân Hoa và mô tả riêng. |
| Hải Long — 7.11, P2231–P2237 | `SP_GBT_13`–`SP_GBT_18` | **69–74** | Cần Nồi đất vẽ tay họa tiết, Bình hút tài lộc, Ngói mũi hài, Bộ ấm trà quả hồng, Bộ ấm chén tử sa, Nồi đất Nodacook và các trường riêng. |
| Tới Liên — 7.12, P2238–P2244 | `SP_GBT_19`–`SP_GBT_24` | **63–68** | **Giữ tên/nội dung/6 ảnh hiện có trong mock**, so chính xác với PDF rồi bổ sung. Không chép lại các ô rỗng của DOCX. |
| Mạnh Hoa — 7.13, P2245–P2266 | `SP_GBT_25`–`SP_GBT_28`, `SP_GBT_29` và `SP_GBT_30` (DOCX vẫn trùng mã) | **43–48** | Mock đã bổ sung Lam Điệp, Thanh Diệp, Khay mứt men hỏa biến, Bộ đồ ăn men hỏa biến, Hộp trà Kim Hoa, Khay lá sen; đã tách ID và sửa tên sai nhóm. |
| Lụa Nha Xá — 7.14, P2267–P2273 | `SP_LNX_01`–`SP_LNX_06` | **119–124** | Đổi tên theo từng trang: Phượng Vũ, Vân Bèo, Thọ dơi Xám Bạc, Bách Liên Hoa, Sen Hồ Điệp, Thọ dơi Tím Hồng; điền toàn bộ trường mô tả còn trống. |

Nội dung để điền đã được trích đầy đủ theo từng trang vào [PDF_NOI_DUNG_THAM_CHIEU.md](PDF_NOI_DUNG_THAM_CHIEU.md): tìm tiêu đề `Trang 030`… và lấy phần tên/mô tả/chất liệu/kỹ thuật/xuất xứ/đặc điểm/màu sắc/kiểu dáng/liên hệ xưởng. Dịch vụ liên hệ và hotline nằm trong khối “HƯỚNG DẪN LIÊN HỆ XƯỞNG”, không được bỏ vì schema sản phẩm hiện chưa có trường tương ứng. Mở PDF để xác nhận các nhãn/tên đầy đủ trước khi ghi vào code.

[DESCRIPTION_PRODUCT_COMPARISON.csv](DESCRIPTION_PRODUCT_COMPARISON.csv) có **đủ 90 dòng**: đoạn DOCX, product ID, cơ sở, trang PDF, tên trong DOCX/mock, trường trống, trường khác nhau và trường mock đã tốt hơn. Các ảnh chính đã đối chiếu theo nhóm PDF; cần nghiệm thu gallery. DOCX vẫn có ID trùng nhưng mock đã tách ID; CSV so theo vị trí bản ghi.

## 4. Cách lấy dữ liệu và cập nhật an toàn cho Gemini

1. Chọn phần P1/P2/P3/P6/P7 trong kế hoạch; mở dòng trang PDF và dòng sản phẩm trong CSV đối chiếu.
2. Tra đúng mục và đoạn `Pxxxx` của DOCX đã trích. Trường nào có dữ liệu thì so với PDF và mock; trường nào rỗng/sai/lặp thì lấy từ trang PDF tương ứng. Giữ phần mock đã được bổ sung đúng. Không copy toàn bộ DOCX đè lên file runtime.
3. Với điểm xung đột như reviewer name, dự án copy nhầm hoặc địa chỉ khác cách ghi, ghi rõ cả hai nguồn và quyết định trong sổ tiến độ. Giữ template PDF; không coi mọi chữ lặp/ẩn từ text extraction là nội dung đã được duyệt.
4. Tìm ảnh qua inventory, mở ảnh so với PDF, rồi sửa `products`/nhóm dữ liệu liên quan trong `frontend/src/data/mockData.js`. Sửa dữ liệu riêng home trong `homeData.js`; sửa text JSX nếu đang hardcode ở page/component. Không đưa toàn bộ Markdown tham chiếu vào bundle ứng dụng.
5. Kiểm tra frontend, chạy lại inventory khi đổi data/ảnh và đồng bộ bảng PDF + kế hoạch + sổ tiến độ. Không nâng trạng thái trang chỉ vì đã có nguồn text trong Markdown.
6. Nếu DOCX được thay phiên bản, chạy `python docs/audit/extract_description.py` để trích lại/so scalar; script kiểm tra thứ tự và số lượng 90 sản phẩm hiện tại, sẽ yêu cầu xem lại khi cấu trúc đổi. Nếu PDF đổi, trích lại bằng `extract_pdf_text.py` (cần PyMuPDF), rồi kiểm tra lại toàn bộ ánh xạ trang; không giả định số trang cũ còn đúng.

Mock và ảnh đã được cập nhật sau lượt đối chiếu ban đầu; [MOCK_DATA_CHECK.json](MOCK_DATA_CHECK.json) ghi kiểm tra sau cập nhật. DOCX/PDF gốc không đổi. Template giao diện vẫn cần Gemini thực hiện.
