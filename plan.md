# Kế hoạch chỉnh sửa & hoàn thiện Website Làng Nghề (Craft Folio)

> [!NOTE]
> **Trạng thái kiểm tra Figma:** Đã kết nối Figma và đối chiếu trực tiếp file `WEBSITE LÀNG NGHỀ` (`fileKey: LKKONxB1E4IkfjcJJehYsp`, các frame `Trang chủ 2`, `Về chúng tôi`, `Nón lá`, `Làng quạt`, `Gốm bát tràng`, `Cơ sở sản xuất - HTX Mây Tre Nón Lá Tạ Thu Hương`, `Chi Tiết sản phẩm`). Tất cả các điểm xác nhận của bạn bên dưới đã được chốt để chuẩn bị triển khai.

---

## Tổng quan phân nhóm công việc

### Nhóm A: Điều hướng, Header, Footer & Thành phần chung
| STT | Yêu cầu | File liên quan | Hướng xử lý dự kiến |
|---|---|---|---|
| **4** | Thay logo | `frontend/src/data/homeData.js`, `frontend/src/components/Header.jsx`, `frontend/src/components/Footer.jsx`, `frontend/src/styles.css` | Kiểm tra file logo mới trong `download/Ảnh làng nghề/` (hiện đang trỏ `logo.png`), điều chỉnh kích thước/bo khung logo trên Header và Footer cho khớp thiết kế. |
| **10** | Bỏ thanh chỉ đỏ đầu trang | `frontend/src/App.jsx`, `frontend/src/components/effects/HeritageProgressBar.jsx` | Gỡ bỏ `<HeritageProgressBar />` khỏi `App.jsx` (và xóa CSS không còn dùng nếu cần). |
| **16** | Chuyển sang Làng nghề khi ở trong các trang | `frontend/src/components/Header.jsx`, `frontend/src/components/VillageMegaMenu.jsx` | Kiểm tra lại cơ chế click menu **Làng nghề** khi đang ở các trang con (`/ve-chung-toi`, `/co-so/...`, `/san-pham/...`, `/dat-lich`) để đảm bảo chuyển trang hoặc mở menu chọn làng nghề mượt mà, không bị kẹt hash `#villages`. |
| **5** | Footer: nhấn chuyển sang Về chúng tôi; lệch lùi xuống | `frontend/src/components/Footer.jsx`, `frontend/src/styles.css` | Kiểm tra link/khu vực trong Footer cần điều hướng sang `/ve-chung-toi` (ví dụ "Tầm nhìn của chúng tôi" hoặc link giới thiệu) và căn chỉnh lại padding/margin cột bị lệch lùi xuống. |
| **37** | Dải lụa footer đang bị phần trên đè lên | `frontend/src/components/Footer.jsx` (`SilkRibbonWave`), `frontend/src/styles.css` | Điều chỉnh `z-index`, `margin-top` âm hoặc `overflow` giữa section cuối trang và `.footer` / `.silk-ribbon-wave` để dải lụa hiển thị trọn vẹn, không bị phần nội dung phía trên che khuất. |

---

### Nhóm B: Trang chủ (`HomePage`) & Đăng ký / Thống kê
| STT | Yêu cầu | File liên quan | Hướng xử lý dự kiến |
|---|---|---|---|
| **1a** | Chuyển sang Làng nghề khi lướt xuống Làng nghề | `frontend/src/pages/HomePage.jsx`, `frontend/src/components/CraftVillagesSection.jsx`, `frontend/src/components/Header.jsx` | Khi cuộn tới section `#villages`, tự động cập nhật trạng thái active trên Header (hoặc hiệu ứng chuyển mục) sang **Làng nghề**. |
| **1b** | Đổi sản phẩm nổi bật | `frontend/src/data/homeData.js` (`featuredProducts`), `frontend/src/components/FeaturedProductsSection.jsx` | Thay danh sách/ảnh/thông tin sản phẩm nổi bật theo bộ sản phẩm mới (cần xác nhận danh sách sản phẩm cụ thể). |
| **1c** | "Tìm hiểu thêm" → Về chúng tôi | `frontend/src/data/homeData.js` (`journeyContent.ctaHref`), `frontend/src/components/JourneySection.jsx` | Đổi `ctaHref` từ `"#villages"` sang `"/ve-chung-toi"` (dùng `<Link>` của `react-router-dom` để điều hướng SPA). |
| **3** | Thêm "Đăng ký tham gia" | `frontend/src/components/JoinBannerSection.jsx`, `frontend/src/components/Header.jsx`, `frontend/src/components/AuthModal.jsx` | Bổ sung/hiển thị rõ nút hoặc mục **Đăng ký tham gia** (mở modal đăng ký hoặc form tham gia dành cho xưởng/doanh nghiệp — cần làm rõ vị trí và luồng mong muốn). |
| **26** | Lượt xem; lượt đăng ký | `frontend/index.html`, `frontend/src/context/AuthContext.jsx` | Hiện tại web deploy tĩnh trên **GitHub Pages** (chưa có backend/database): <br>- **Lượt xem:** Gắn Google Analytics 4 / Cloudflare Web Analytics vào `index.html`.<br>- **Lượt đăng ký:** `localStorage` hiện tại không thống kê được người dùng thật từ các máy khác; cần tích hợp dịch vụ lưu trữ tập trung (Supabase / Firebase / Backend API) hoặc gắn event tracking nếu chỉ cần đếm lượt bấm. |

---

### Nhóm C: Trang Về chúng tôi (`AboutPage`)
| STT | Yêu cầu | File liên quan | Hướng xử lý dự kiến |
|---|---|---|---|
| **6** | Thay ảnh 2; căn chỉnh; thay ảnh | `frontend/src/pages/AboutPage.jsx`, `frontend/src/styles-about.css` | Thay thế ảnh ở các khối bị sai/thiếu (đặc biệt ảnh số 2 và các ảnh lấy từ `download/Ảnh làng nghề/Về Chúng Tôi/`), căn chỉnh lại bố cục lưới, khoảng cách và tỷ lệ khung hình theo Figma. |
| **38** | Trang Về chúng tôi đang bị có thanh kéo xuống ở bên trong → bỏ | `frontend/src/styles-about.css`, `frontend/src/pages/AboutPage.jsx` | Kiểm tra thuộc tính `overflow-y: auto/scroll` hoặc `height: 100vh` / `max-height` gây thanh cuộn lồng bên trong `.about-page` và bỏ đi để chỉ dùng 1 thanh cuộn chính của trình duyệt. |

---

### Nhóm D: Trang Làng nghề (`VillageDetailPage`) & Chính tả
| STT | Yêu cầu | File liên quan | Hướng xử lý dự kiến |
|---|---|---|---|
| **2** | Làng nghề - chính tả | `frontend/src/data/homeData.js`, `frontend/src/data/mockData.js`, các component trong `components/village/` | Rà soát và sửa lỗi chính tả tiếng Việt ở tiêu đề, mô tả, tên làng nghề và nội dung câu chuyện. |
| **7** | Responsive - banner | `frontend/src/components/HeroBanner.jsx`, `frontend/src/components/village/VillageHeroBanner.jsx`, `frontend/src/styles.css` | Kiểm tra và chỉnh lại `height`, `background-size`, `object-fit`, `font-size` của banner trên các breakpoint tablet/mobile để không bị cắt chữ hoặc vỡ khung. |
| **8** | Nón Làng Chuông: thay ảnh Chuyện làng nghề | `frontend/src/data/mockData.js`, `frontend/download/Ảnh làng nghề/Trang làng nghề/Làng nón/` | Thay các ảnh trong mục Chuyện làng nghề của Nón Làng Chuông (`NLC`) bằng bộ ảnh mới phù hợp. |
| **9** | Ấn vào khung là ra cơ sở sản xuất; bỏ khung/chữ thừa; thêm box đỏ cho "Xem chi tiết" | `frontend/src/components/village/VillageFacilitiesSection.jsx`, `frontend/src/styles.css` | Cho phép click toàn bộ thẻ `.facility-card` để đi tới `/co-so/:facilityId`; dọn/bỏ các khung/nhãn thừa; style nút `Xem chi tiết` (`.facility-card__detail-btn`) thành box màu đỏ nổi bật đúng thiết kế. |
| **17** | Chuyện làng nghề - Quạt Chàng Sơn: ảnh 1 kéo to ra | `frontend/src/components/village/story/*.jsx`, `frontend/src/styles.css` | Điều chỉnh kích thước/tỷ lệ cột cho ảnh đầu tiên trong Chuyện làng nghề của Quạt Chàng Sơn (`QCS`) lớn hơn và cân đối hơn. |
| **22** | Chuyện làng nghề - Làng gốm: dịch nội dung câu chuyện sang phải một ít | `frontend/src/components/village/VillageStorySection.jsx`, `frontend/src/styles.css` | Thêm `padding-left` / `margin-left` (hoặc điều chỉnh grid column) cho phần văn bản câu chuyện của Làng gốm (`GBT`). |

---

### Nhóm E: Trang Cơ sở sản xuất (`FacilityDetailPage`)
| STT | Yêu cầu | File liên quan | Hướng xử lý dự kiến |
|---|---|---|---|
| **14** | Thêm hiệu ứng lướt xuống giống Nón lá Hải Yến tại Năng lực sản xuất | `frontend/src/components/facility/FacilityCapacities.jsx`, `frontend/src/styles-facility.css` | Kiểm tra vì sao các cơ sở khác chưa có hiệu ứng cuộn/vẽ đường cong (`AnimatedDrawingCurve` hoặc scroll reveal) như Nón lá Hải Yến (`NLHY`), đồng bộ hóa cho toàn bộ các cơ sở có mục Năng lực sản xuất. |
| **15** | Câu chuyện "HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG": chuyển tên xuống dưới; "Khách hàng nói gì về ..." | `frontend/src/components/facility/FacilityStory.jsx`, `frontend/src/components/facility/FacilityReviews.jsx`, `frontend/src/data/mockData.js` | Đảo vị trí tiêu đề/tên cơ sở xuống dưới (hoặc tách phần kicker/tên theo yêu cầu), đồng thời sửa tiêu đề mục đánh giá thành `"Khách hàng nói gì về [Tên cơ sở]"`. |
| **18** | Thay ảnh sản phẩm Quạt Chàng Sơn; giảm cỡ chữ sản phẩm | `frontend/src/data/mockData.js`, `frontend/src/components/facility/FacilityProducts.jsx`, `frontend/src/styles-facility.css` | Cập nhật lại ảnh sản phẩm thuộc Quạt Chàng Sơn và giảm `font-size` của tên/mô tả sản phẩm trong card. |
| **19** | Giảm khoảng cách giữa các thành phần cơ sở sản xuất | `frontend/src/styles-facility.css` | Giảm `padding` / `gap` / `margin` giữa các section (`.workshop-section`) trên trang chi tiết cơ sở sản xuất. |
| **23** | Hoàng Anh Ceramics: bỏ Năng lực sản xuất | `frontend/src/pages/FacilityDetailPage.jsx`, `frontend/src/components/facility/FacilityNav.jsx`, `frontend/src/data/mockData.js` | Ẩn section `Năng lực sản xuất` và tab điều hướng tương ứng khi cơ sở là Hoàng Anh Ceramics (`GBT_HAC` hoặc khi `facilityCapacities.length === 0`). |
| **25** | Bỏ tiêu đề "Dự án đã thực hiện" ở banner/nav | `frontend/src/components/facility/FacilityNav.jsx`, `frontend/src/components/facility/FacilityProjects.jsx` | Kiểm tra và ẩn/bỏ mục tiêu đề "Dự án đã thực hiện" trên thanh điều hướng phụ / banner theo yêu cầu (cần xác nhận bỏ hẳn section hay chỉ bỏ ở thanh nav/banner). |

---

### Nhóm F: Trang Chi tiết sản phẩm (`ProductDetailPage`) & Xử lý khung ảnh toàn site
| STT | Yêu cầu | File liên quan | Hướng xử lý dự kiến |
|---|---|---|---|
| **11 & 20** | Một số ảnh không khớp khung, lộ viền trắng; sửa ảnh không khớp viền (đặc biệt Quạt Chàng Sơn, Quạt) | `frontend/src/styles.css`, `frontend/src/styles-facility.css`, `frontend/src/styles-product-detail.css` | Kiểm tra các ảnh dùng `object-fit: contain` hoặc có nền trắng trong file ảnh gốc, đổi sang `object-fit: cover` / `scale` nhẹ hoặc đồng bộ màu nền khung để không bị lộ viền trắng. |
| **24** | Ảnh có người không được cắt đầu; cắt để căn vừa thì cắt bên dưới trước rồi mới nghĩ đến cắt bên trên | Toàn bộ CSS ảnh thẻ (`styles.css`, `styles-facility.css`, `styles-about.css`, `styles-product-detail.css`) | Áp dụng `object-fit: cover; object-position: top center;` (hoặc `50% 15%`) cho tất cả ảnh chân dung, avatar khách hàng, ảnh nghệ nhân và ảnh câu chuyện có người. |
| **12** | Chi tiết sản phẩm bị cắt ảnh; bị lệch | `frontend/src/pages/ProductDetailPage.jsx`, `frontend/src/styles-product-detail.css` | Chỉnh lại tỷ lệ `aspect-ratio`, `object-fit` và căn giữa/lưới gallery ảnh trong trang chi tiết sản phẩm. |
| **13** | "Khám phá các sản phẩm khác": bị lệch; có một số trang có sản phẩm không liên quan | `frontend/src/pages/ProductDetailPage.jsx`, `frontend/src/styles-product-detail.css`, `frontend/src/data/mockData.js` | Căn chỉnh lại grid/card của mục "Khám phá các sản phẩm khác" và lọc chặt theo cùng cơ sở sản xuất (`coSoSanXuatId`) hoặc cùng làng nghề (`langNgheId`) để không hiện sản phẩm lạc đề. |
| **21** | Sản phẩm cùng dòng → nhảy ảnh không liên quan | `frontend/src/pages/ProductDetailPage.jsx`, `frontend/src/data/mockData.js` | Kiểm tra logic lấy danh sách sản phẩm cùng dòng và mảng `images` của từng sản phẩm trong `mockData.js` để tránh map nhầm ảnh. |

---

## Tổng kết phương án đã chốt (sau khi kiểm tra Figma & xác nhận)

- **Mục 1b (Sản phẩm nổi bật):** Đổi sang 5 sản phẩm đại diện (chọn 1–2 sản phẩm từ mỗi làng nghề) sử dụng ảnh nét từ `download/Ảnh làng nghề/`.
- **Mục 3 (Đăng ký tham gia) & Mục 26 (Lượt xem / lượt đăng ký):** **Tạm hoãn** (chưa làm ở đợt này).
- **Mục 4 (Logo):** Dùng logo mới `download/Ảnh làng nghề/logo.png`, chỉnh lại kích thước và khung hiển thị trên Header/Footer theo Figma.
- **Mục 6 & 38 (Về chúng tôi):** Thay ảnh đúng theo từng đề mục trong `download/Ảnh làng nghề/Về Chúng Tôi/`, căn chỉnh các khối bằng nhau và bỏ thanh cuộn lồng bên trong trang.
- **Mục 8 & 18 (Ảnh Nón Làng Chuông & Quạt Chàng Sơn):** Dùng bộ ảnh nét mới đã có trong `download/Ảnh làng nghề/`.
- **Mục 15 (`HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG`):** Ngắt dòng thành `HTX MÂY TRE NÓN LÁ` / `TẠ THU HƯƠNG` (không để rớt chữ `"HƯƠNG"` một mình), đồng thời giữ tiêu đề đánh giá dạng `"Khách hàng nói gì về [Tên cơ sở]"`.
- **Mục 25 (`FacilityNav`):** Bỏ mục `"Dự án đã thực hiện"` khỏi thanh điều hướng phụ dưới banner và bổ sung **scroll-spy** để tự động highlight đúng mục khi người dùng cuộn trang.
- **Mục 10, 12, 13, 21 & 85 ảnh còn thiếu (`pdf_gallery/`, `product_detail/`):** Đối chiếu với các frame `CHI TIẾT SẢN PHẨM-...` trên Figma và thư mục ảnh chi tiết trong `download/Ảnh làng nghề/` để ánh xạ lại đúng ảnh sản phẩm liên quan, sửa lỗi cắt/lệch ảnh và lọc đúng sản phẩm cùng dòng/cùng cơ sở.
