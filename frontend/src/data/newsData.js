import { resolveMockAsset } from "../utils/resolveMockAsset.js";

function newsImg(filename) {
  return resolveMockAsset(`download/Ảnh làng nghề/Tin tức/${filename}`);
}

export const NEWS_CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "lang-nghe", label: "Làng nghề" },
  { id: "xu-huong", label: "Xu hướng thị trường" },
  { id: "cau-chuyen", label: "Câu chuyện" },
  { id: "goc-nhin", label: "Góc nhìn doanh nghiệp" },
];

export const newsArticles = [
  {
    id: "san-pham-thu-cong-trong-thiet-ke-noi-that-hien-dai",
    slug: "san-pham-thu-cong-viet-nam-trong-xu-huong-thiet-ke-noi-that-hien-dai",
    title: "Sản phẩm thủ công Việt Nam trong xu hướng thiết kế nội thất hiện đại",
    category: "xu-huong",
    categoryLabel: "Xu hướng thị trường",
    date: "31/10/2025",
    readTime: "7 phút đọc",
    featured: true,
    sapo:
      "Trong thiết kế nội thất hiện đại, các vật liệu tự nhiên và sản phẩm mang dấu ấn văn hóa ngày càng được quan tâm. Đèn mây tre, bình gốm, đồ gỗ hay vải dệt thủ công không còn bó hẹp trong không gian truyền thống mà đang trở thành lựa chọn trang trí cho nhà ở, khách sạn, nhà hàng và nhiều công trình hiện đại.",
    images: [
      newsImg("xuhuongthitruong1anh.jpg"),
      newsImg("xuhuongthitruong1anh2.jpg"),
      newsImg("xuhuongthitruong1anh3.jpg"),
      newsImg("xuhuongthitruong1anh4.webp"),
      newsImg("xuhuongthitruong1anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Vật liệu tự nhiên và bản sắc địa phương trong xu hướng nội thất mới",
        layout: "full",
        paragraphs: [
          "Thiết kế nội thất hiện nay không chỉ chú trọng công năng mà còn quan tâm đến trải nghiệm, tính cá nhân hóa và yếu tố môi trường. Những chất liệu như tre, mây, gỗ, gốm và vải tự nhiên được sử dụng để tạo điểm nhấn cho không gian.",
          "Tại Việt Nam, xu hướng này được đề cập trong ấn phẩm TREND 26+, công bố năm 2025 bởi Hội Nội thất Việt Nam cùng các đơn vị phối hợp. Nghiên cứu dự báo xu hướng kiến trúc và nội thất giai đoạn 2026–2030, với sự tham gia của 45 chuyên gia trong nước và quốc tế. Nội dung tập trung vào 31 xu hướng, xoay quanh ba định hướng: phát triển bền vững, cá nhân hóa và tích hợp công nghệ. Đây cũng là cơ hội để sản phẩm làng nghề tiếp cận các không gian thiết kế mới. Không chỉ để trang trí, sản phẩm thủ công còn có thể tham gia trực tiếp vào ý tưởng thiết kế.",
        ],
      },
      {
        heading: "2. Tiềm năng của sản phẩm thủ công Việt Nam qua những con số",
        layout: "full",
        paragraphs: [
          "Năng lực sản xuất và xuất khẩu cho thấy quy mô đáng chú ý của một số nhóm hàng liên quan đến vật liệu thủ công và nội thất. Theo số liệu Hải quan Việt Nam được VOV công bố tháng 9/2025, trong 8 tháng đầu năm 2025, nhóm mây tre, cói và thảm đạt kim ngạch xuất khẩu 574 triệu USD, tăng 5,4% so với cùng kỳ. Hoa Kỳ là thị trường nhập khẩu lớn nhất, đạt 266 triệu USD. Với nhóm gỗ và sản phẩm gỗ, kim ngạch xuất khẩu trong cùng kỳ đạt hơn 11,12 tỷ USD, tăng 6,5% so với năm trước.",
          "Các số liệu cho thấy quy mô thương mại đáng kể của những nhóm hàng gắn với vật liệu tự nhiên và thủ công, mở ra dư địa kết nối giữa các xưởng làng nghề trong nước với thị trường thiết kế nội thất và dự án công trình.",
        ],
      },
      {
        heading: "3. Những chất liệu thủ công Việt Nam trong không gian nội thất hiện đại",
        layout: "side-right",
        paragraphs: [
          "Từ nguyên liệu tự nhiên và kỹ thuật chế tác truyền thống, các làng nghề Việt Nam có nhiều dòng sản phẩm phù hợp với thiết kế nội thất:",
          "Mây tre đan: Được sử dụng làm đèn trang trí, vách ngăn, giỏ lưu trữ và khay. Sản phẩm từ làng nghề Phú Vinh là một ví dụ tiêu biểu.",
          "Gốm sứ: Bình hoa, lọ trang trí, đèn và bộ đồ bàn ăn có thể tạo điểm nhấn về hình dáng, màu sắc. Gốm Bát Tràng phù hợp với nhiều không gian như nhà ở, nhà hàng và khách sạn.",
          "Gỗ thủ công và lụa dệt: Đồ chạm khắc, khung tranh gỗ hay rèm cửa, gối trang trí, khăn trải bàn từ lụa Nha Xá góp phần tạo nên không gian mang đậm dấu ấn văn hóa Việt.",
        ],
      },
      {
        heading: "4. Cơ hội từ nhu cầu thiết kế và đặt hàng của doanh nghiệp",
        layout: "side-left",
        paragraphs: [
          "Nhà hàng, khách sạn, khu nghỉ dưỡng, showroom và đơn vị thiết kế nội thất là những khách hàng tiềm năng của sản phẩm thủ công. Doanh nghiệp không chỉ tìm mua sản phẩm có sẵn mà còn có thể đặt hàng theo kích thước, màu sắc, chất liệu hoặc chủ đề thiết kế riêng.",
          "Để đáp ứng nhu cầu này, cơ sở sản xuất cần chú ý: Chất lượng kích thước, màu sắc và độ hoàn thiện đồng đều; Năng lực cung ứng đáp ứng số lượng và tiến độ; Tùy chỉnh thiết kế linh hoạt; Thông tin sản phẩm rõ ràng về nguyên liệu, quy cách và báo giá cụ thể. Theo thông tin Báo Công Thương đăng tải tháng 9/2025, các đơn hàng OEM/ODM ngày càng yêu cầu cao về thiết kế, chất lượng, tiến độ và trách nhiệm xã hội.",
        ],
      },
      {
        heading: "5. Kết nối sản phẩm làng nghề với thị trường nội thất",
        layout: "full",
        paragraphs: [
          "Nhiều làng nghề Việt Nam sở hữu kỹ thuật chế tác và sản phẩm đa dạng, nhưng thông tin về mẫu mã, chất liệu và năng lực sản xuất vẫn chưa được giới thiệu đồng bộ khiến doanh nghiệp mất thời gian tìm kiếm nhà cung cấp phù hợp.",
          "Craft Folio được xây dựng nhằm kết nối các xưởng thủ công với nhà thiết kế và khách hàng doanh nghiệp thông qua nền tảng số. Khách hàng có thể tìm hiểu mẫu mã, đánh giá cơ sở sản xuất và gửi yêu cầu báo giá trực tiếp.",
        ],
      },
    ],
    cta: {
      text: "Craft Folio – Kết nối xưởng thủ công Việt Nam với nhà thiết kế và khách hàng doanh nghiệp.",
      buttonLabel: "Khám phá ngay",
      href: "/",
    },
  },
  {
    id: "phu-vinh-noi-luu-giu-tinh-hoa-may-tre-dan",
    slug: "phu-vinh-noi-luu-giu-tinh-hoa-nghe-may-tre-dan-viet-nam",
    title: "Phú Vinh - Nơi lưu giữ tinh hoa nghề mây tre đan Việt Nam",
    category: "lang-nghe",
    categoryLabel: "Làng nghề",
    date: "20/03/2026",
    readTime: "7 phút đọc",
    featured: true,
    sapo:
      "Hơn 400 năm hình thành và phát triển, làng nghề mây tre đan Phú Vinh vẫn bền bỉ gìn giữ những kỹ thuật thủ công truyền thống. Từ những sợi mây, nan tre mộc mạc, qua đôi bàn tay khéo léo của người thợ, những sản phẩm tinh xảo đã ra đời, mang theo giá trị văn hóa và sức sáng tạo của người Việt.",
    images: [
      newsImg("langnghe1anh1.webp"),
      newsImg("langnghe1anh2.png"),
      newsImg("langnghe1anh3.jpg"),
      newsImg("langnghe1anh4.jpg"),
      newsImg("langnghe1anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Phú Vinh - Hành trình hơn 400 năm gìn giữ nghề truyền thống",
        layout: "full",
        paragraphs: [
          "Nằm ở khu vực Chương Mỹ, Hà Nội, làng nghề mây tre đan Phú Vinh từ lâu đã được biết đến là một trong những cái nôi của nghề thủ công mây tre đan tại Việt Nam. Với lịch sử hơn 400 năm, nơi đây đã trải qua nhiều thế hệ gìn giữ và phát triển nghề truyền thống, góp phần tạo nên bản sắc riêng cho các làng nghề thủ công của Thủ đô.",
          "Trước đây, người thợ Phú Vinh chủ yếu làm những vật dụng quen thuộc trong đời sống như rổ, rá, thúng, mủng, nong, nia và các loại đồ đựng. Theo thời gian, sản phẩm của làng nghề dần phát triển thêm các mặt hàng trang trí, nội thất, mỹ nghệ và quà tặng. Năm 2021, nghề mây tre đan Phú Vinh được đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia.",
        ],
      },
      {
        heading: "2. Từ nguyên liệu tự nhiên đến những đường đan tinh tế",
        layout: "full",
        paragraphs: [
          "Sản phẩm mây tre đan Phú Vinh được làm từ các nguyên liệu tự nhiên như mây, tre, giang, nứa. Mỗi loại có đặc điểm riêng: tre thường cứng, mây có độ dẻo, còn giang và nứa có những đặc tính khác nhau khi gia công. Vì vậy, người thợ cần có kinh nghiệm trong khâu lựa chọn và xử lý nguyên liệu.",
          "Để hoàn thiện một sản phẩm, người thợ thực hiện nhiều công đoạn như chẻ nan, chuốt mây, tạo hình và đan cài. Đáng chú ý là kỹ thuật xâu xiên bằng sợi mây: những sợi mây nhỏ được luồn và đan cài vào nhau để tạo thành các hoa văn phức tạp, nhìn từ xa tinh tế như thêu tay.",
        ],
      },
      {
        heading: "3. Từ vật dụng sinh hoạt đến sản phẩm ứng dụng trong đời sống hiện đại",
        layout: "side-right",
        paragraphs: [
          "Trước đây, sản phẩm mây tre đan Phú Vinh chủ yếu phục vụ nhu cầu sinh hoạt hằng ngày. Ngày nay, các cơ sở sản xuất đã mở rộng mẫu mã và công năng để đáp ứng nhu cầu thị trường.",
          "Trong không gian sống, mây tre được sử dụng để làm bàn ghế, đèn trang trí, rèm cửa và giỏ đựng đồ. Tại các nhà hàng, khách sạn, những chiếc khay, hộp đựng hay đèn mây cũng được đưa vào trang trí nội thất, bên cạnh các dòng túi xách, tranh trang trí và đồ lưu niệm mỹ nghệ.",
        ],
      },
      {
        heading: "4. Gìn giữ nghề truyền thống gắn với phát triển bền vững",
        layout: "side-left",
        paragraphs: [
          "Trước sự phát triển của sản xuất công nghiệp, các làng nghề thủ công phải tìm cách duy trì nghề truyền thống và đáp ứng nhu cầu thị trường. Tại Phú Vinh, các cơ sở sản xuất cũng từng bước điều chỉnh quy trình để cải thiện chất lượng và độ bền sản phẩm.",
          "Một thay đổi đáng chú ý nằm ở khâu xử lý nguyên liệu: thay vì chỉ ngâm trong ao, hồ như trước, một số cơ sở đã chuyển sang phương pháp luộc nguyên liệu trong khoảng 8–10 tiếng để xử lý và tăng độ bền, đồng thời áp dụng kỹ thuật nhuộm màu từ nguyên liệu tự nhiên.",
        ],
      },
      {
        heading: "5. Mở rộng cơ hội cho sản phẩm mây tre đan Phú Vinh",
        layout: "full",
        paragraphs: [
          "Không chỉ phục vụ nhu cầu trong nước, sản phẩm mây tre đan Phú Vinh còn tiếp cận thị trường quốc tế như Nhật Bản, Hoa Kỳ và một số quốc gia châu Âu. Đối với khách hàng doanh nghiệp, nhà hàng, khách sạn hay đơn vị thiết kế nội thất, sản phẩm mây tre đan mang đến nhiều khả năng ứng dụng linh hoạt.",
          "Để thuận lợi hợp tác, bên cạnh tính thẩm mỹ, các cơ sở cần minh bạch về chất lượng, quy cách sản phẩm, số lượng cung ứng và năng lực đáp ứng đơn hàng.",
        ],
      },
    ],
    cta: {
      text: "Khám phá làng nghề Phú Vinh và tìm kiếm đối tác sản xuất mây tre đan tại Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/MTD",
    },
  },
  {
    id: "khi-chat-lieu-tu-nhien-nha-hang-khach-san",
    slug: "khi-chat-lieu-tu-nhien-tro-thanh-diem-nhan-trong-khong-gian-nha-hang-va-khach-san",
    title: "Khi chất liệu tự nhiên trở thành điểm nhấn trong không gian nhà hàng và khách sạn",
    category: "xu-huong",
    categoryLabel: "Xu hướng thị trường",
    date: "18/04/2026",
    readTime: "7 phút đọc",
    featured: true,
    sapo:
      "Từ đèn mây tre, vách ngăn gỗ đến đồ gốm thủ công, các chất liệu tự nhiên đang được ứng dụng trong nhiều không gian nhà hàng và khách sạn. Không chỉ phục vụ trang trí, những sản phẩm này còn góp phần tạo nên phong cách riêng cho từng công trình.",
    images: [
      newsImg("xuhuongthitruong2anh1.jpg"),
      newsImg("xuhuongthitruong2anh2.jpg"),
      newsImg("xuhuongthitruong2anh3.jpg"),
      newsImg("xuhuongthitruong2anh4.jpg"),
    ],
    sections: [
      {
        heading: "1. Không gian dịch vụ hướng đến trải nghiệm và bản sắc riêng",
        layout: "full",
        paragraphs: [
          "Trong lĩnh vực nhà hàng, khách sạn, nội thất không chỉ cần đáp ứng công năng và sự thoải mái mà còn phải thể hiện phong cách và câu chuyện thương hiệu. Theo dự báo xu hướng thiết kế khách sạn năm 2026 của Wimberly Interiors, các không gian lưu trú đang hướng đến tính bản địa, trải nghiệm đa giác quan và sự kết nối với văn hóa địa phương.",
          "Nghiên cứu của Terrapin Bright Green khảo sát 39 khách sạn trên thế giới cũng chỉ ra yếu tố kết nối trực quan với thiên nhiên và sử dụng chất liệu tự nhiên xuất hiện ở nhiều khu vực chức năng — mở ra cơ hội lớn cho sản phẩm làng nghề Việt Nam.",
        ],
      },
      {
        heading: "2. Mây tre, gỗ, gốm và vải thủ công trong thiết kế nhà hàng, khách sạn",
        layout: "full",
        paragraphs: [
          "Mỗi chất liệu thủ công có cách ứng dụng riêng để trở thành điểm nhấn của không gian:",
          "Mây tre đan Phú Vinh: Dùng làm đèn thả trần tạo hiệu ứng ánh sáng và bóng đổ, vách ngăn, ghế ngồi và giỏ trang trí cho nhà hàng, quán cà phê, khu nghỉ dưỡng.",
          "Gốm sứ Bát Tràng & Lụa Nha Xá: Gốm sứ hiện diện trong bình hoa, đèn bàn, bộ đồ ăn; gỗ tự nhiên mang đến vẻ ấm áp qua hệ lam và quầy lễ tân; còn lụa tơ tằm tạo điểm nhấn mềm mại qua rèm cửa, gối tựa và khăn trải bàn.",
        ],
      },
      {
        heading: "3. Từ thiết kế đến công trình thực tế tại Việt Nam",
        layout: "side-right",
        paragraphs: [
          "Tại Việt Nam, nhiều nhà hàng đã đưa vật liệu truyền thống vào thiết kế hiện đại. Ngon Garden tại phố Nguyễn Du (Hà Nội) do IDD Decor thiết kế kết hợp cây xanh, đèn mây tre đan, gạch trang trí và chi tiết gỗ tạo nên không gian gần gũi thiên nhiên.",
          "Một ví dụ khác là nhà hàng Nhật Bản AKAARI Premium (Hà Nội) do NH Village Architects thiết kế, đưa tre, mây và gốm vào hệ trần và vách ngăn, hòa quyện chất liệu thủ công Việt Nam với thẩm mỹ kiến trúc hiện đại.",
        ],
      },
      {
        heading: "4. Cơ hội hợp tác giữa doanh nghiệp và các xưởng thủ công",
        layout: "full",
        paragraphs: [
          "Nhà hàng, khách sạn và các đơn vị thiết kế có thể đặt hàng trực tiếp theo kích thước, màu sắc, kiểu dáng hoặc chủ đề thương hiệu — chẳng hạn hệ đèn mây tre cho sảnh khách sạn hay bộ đồ ăn gốm đồng bộ cho chuỗi nhà hàng.",
          "Để đáp ứng các đơn hàng dự án này, xưởng sản xuất cần đảm bảo bốn yếu tố cốt lõi: tính đồng bộ về kích thước và màu sắc, khả năng tùy chỉnh linh hoạt, năng lực cung ứng đúng tiến độ và hồ sơ thông tin sản phẩm minh bạch.",
        ],
      },
      {
        heading: "5. Đưa sản phẩm làng nghề đến gần hơn với các dự án dịch vụ",
        layout: "full",
        paragraphs: [
          "Craft Folio hướng đến xây dựng hồ sơ số cho các xưởng thủ công và sản phẩm làng nghề. Qua nền tảng, doanh nghiệp ngành F&B và lưu trú có thể dễ dàng tìm hiểu mẫu mã, chất liệu, năng lực sản xuất và gửi yêu cầu báo giá trực tiếp đến xưởng phù hợp.",
        ],
      },
    ],
    cta: {
      text: "Craft Folio – Kết nối giá trị thủ công Việt Nam với nhu cầu của khách hàng doanh nghiệp.",
      buttonLabel: "Khám phá ngay",
      href: "/",
    },
  },
  {
    id: "doanh-nghiep-chon-xuong-san-xuat-thu-cong",
    slug: "doanh-nghiep-can-quan-tam-dieu-gi-khi-lua-chon-xuong-san-xuat-thu-cong",
    title: "Doanh nghiệp cần quan tâm điều gì khi lựa chọn xưởng sản xuất thủ công?",
    category: "goc-nhin",
    categoryLabel: "Góc nhìn doanh nghiệp",
    date: "29/05/2026",
    readTime: "7 phút đọc",
    featured: true,
    sapo:
      "Khi tìm kiếm xưởng gia công sản phẩm thủ công cho đơn hàng doanh nghiệp, mẫu mã đẹp mới chỉ là bước khởi đầu. Để quá trình sản xuất và giao nhận diễn ra thuận lợi, doanh nghiệp cần đánh giá kỹ năng lực thực tế, độ đồng đều chất lượng, khả năng tùy chỉnh và tính minh bạch trong hợp tác dài hạn.",
    images: [
      newsImg("gocnhindoanhnghiep1anh1.jpg"),
      newsImg("gocnhindoanhnghiep1anh2.jpg"),
      newsImg("gocnhindoanhnghiep1anh3.webp"),
      newsImg("gocnhindoanhnghiep1anh4.jpg"),
      newsImg("gocnhindoanhnghiep1anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Năng lực sản xuất có đáp ứng được quy mô đơn hàng?",
        layout: "full",
        paragraphs: [
          "Một cơ sở có thể tạo ra sản phẩm mẫu đẹp và tinh xảo, nhưng chưa chắc đáp ứng được đơn hàng số lượng lớn trong thời gian ngắn. Doanh nghiệp cần quan tâm đến quy mô nhân lực, số lượng thợ lành nghề, điều kiện sản xuất và sản lượng cung ứng theo từng giai đoạn.",
          "Với các đơn hàng phục vụ chuỗi nhà hàng, khách sạn hoặc hệ thống bán lẻ, trao đổi rõ về năng lực sản xuất ngay từ đầu giúp doanh nghiệp tránh đặt hàng vượt khả năng đáp ứng của xưởng và bảo đảm kế hoạch kinh doanh.",
        ],
      },
      {
        heading: "2. Chất lượng sản phẩm có đồng đều giữa các đơn hàng?",
        layout: "full",
        paragraphs: [
          "Dù chế tác thủ công luôn có nét riêng tự nhiên, với đơn hàng doanh nghiệp, sai lệch về kích thước, màu sắc, kết cấu và độ hoàn thiện phải nằm trong giới hạn kiểm soát.",
          "Doanh nghiệp nên tìm hiểu nguồn gốc nguyên liệu, quy trình kiểm tra chất lượng và yêu cầu xưởng cung cấp mẫu thử trước khi sản xuất hàng loạt để hai bên thống nhất tiêu chuẩn nghiệm thu rõ ràng.",
        ],
      },
      {
        heading: "3. Khả năng tùy chỉnh theo yêu cầu riêng",
        layout: "side-right",
        paragraphs: [
          "Nhiều doanh nghiệp muốn phát triển sản phẩm mang dấu ấn thương hiệu qua việc điều chỉnh kiểu dáng, kích thước, màu sắc, bổ sung logo hoặc thiết kế bao bì riêng.",
          "Trong trường hợp này, doanh nghiệp cần đánh giá khả năng tiếp nhận bản vẽ, làm mẫu thử và điều chỉnh thiết kế của xưởng, đồng thời thống nhất trước chi phí và thời gian thử nghiệm mẫu.",
        ],
      },
      {
        heading: "4. Giá thành và tiến độ cần được làm rõ từ đầu",
        layout: "side-left",
        paragraphs: [
          "Khi nhận báo giá, doanh nghiệp nên làm rõ các cấu phần gồm nguyên liệu, công chế tác, chi phí làm mẫu, đóng gói và vận chuyển, cũng như cách điều chỉnh giá khi thay đổi số lượng hoặc thiết kế.",
          "Tiến độ sản xuất cần dựa trên năng lực thực tế của xưởng, đặc biệt vào mùa cao điểm du lịch, lễ hội và cuối năm để chủ động kế hoạch giao nhận.",
        ],
      },
      {
        heading: "5. Khả năng trao đổi và hợp tác lâu dài",
        layout: "full",
        paragraphs: [
          "Một xưởng phù hợp không chỉ tạo ra sản phẩm đạt yêu cầu mà còn phối hợp nhịp nhàng trong tiếp nhận phản hồi, cập nhật tiến độ và xử lý phát sinh.",
          "Thống nhất rõ tiêu chuẩn nghiệm thu, phương thức thanh toán và chính sách bảo hành giúp doanh nghiệp và xưởng thủ công xây dựng mối quan hệ cung ứng bền vững cho nhiều đợt đặt hàng định kỳ.",
        ],
      },
    ],
    cta: {
      text: "Khám phá hồ sơ năng lực các xưởng thủ công tiêu biểu trên Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/",
    },
  },
  {
    id: "nhung-nguoi-tre-tiep-noi-nghe-thu-cong",
    slug: "nhung-nguoi-tre-tiep-noi-nghe-thu-cong-truyen-thong-trong-doi-song-hien-dai",
    title: "Những người trẻ tiếp nối nghề thủ công truyền thống trong đời sống hiện đại",
    category: "cau-chuyen",
    categoryLabel: "Câu chuyện",
    date: "01/01/2026",
    readTime: "7 phút đọc",
    featured: true,
    sapo:
      "Có người trẻ chọn trở về quê hương để tiếp tục nghề của gia đình. Cũng có người tìm cách đưa sản phẩm thủ công đến gần công chúng bằng những hoạt động trải nghiệm và ý tưởng mới. Dù lựa chọn con đường nào, họ đều đang góp phần duy trì và phát triển nghề truyền thống.",
    images: [
      newsImg("cauchuyenlangnghe2anh1.jpg"),
      newsImg("cauchuyenlangnghe2anh2.jpg"),
      newsImg("cauchuyenlangnghe2anh3.jpg"),
      newsImg("cauchuyenlangnghe2anh4.jpg"),
      newsImg("cauchuyenlangnghe2anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Khi người trẻ tìm thấy tương lai từ nghề của cha ông",
        layout: "full",
        paragraphs: [
          "Tại làng mây tre đan Phú Vinh, nghề thủ công đã gắn bó với người dân qua nhiều thế hệ. Để tiếp tục phát triển, người thợ ngày nay không chỉ giữ kỹ thuật cũ mà còn tìm cách đáp ứng nhu cầu thị trường.",
          "Nghệ nhân Nguyễn Thị Hân là một trong những gương mặt trẻ gắn bó với nghề. Sau 8 năm làm việc, chị được công nhận là nghệ nhân mây tre đan và thử nghiệm kết hợp mây tre với gốm sứ — tiêu biểu là bình gốm bọc đan mây bên ngoài đạt Huy chương Vàng tại Hội chợ làng nghề và thi sản phẩm thủ công Việt Nam.",
        ],
      },
      {
        heading: "2. Không trực tiếp làm nghề, vẫn có thể góp phần giữ nghề",
        layout: "full",
        paragraphs: [
          "Bên cạnh những người trực tiếp chế tác, nhiều bạn trẻ tham gia giới thiệu và kết nối làng nghề với cộng đồng. Năm 2023, Vũ Minh Tú cùng nhóm bạn triển khai dự án “Trường làng trong phố” nhằm đưa không gian làng nghề đến gần hơn với thanh thiếu niên đô thị.",
          "Thông qua các buổi trải nghiệm trực tiếp gặp nghệ nhân, thử đan mây tre Phú Vinh hay khâu nón làng Chuông, dự án giúp người trẻ hiểu hơn giá trị lao động thủ công và đã lọt vào top 3 cuộc thi Tôi 20 – Twenties’ Projects for Social Innovation năm 2023.",
        ],
      },
      {
        heading: "3. Giữ nghề trong thời đại mới cần nhiều hơn đôi bàn tay khéo léo",
        layout: "side-right",
        paragraphs: [
          "Để một làng nghề phát triển lâu dài, tình yêu nghề chưa đủ. Các cơ sở cần giải quyết bài toán đầu ra, chuẩn hóa chất lượng và kết hợp kỹ thuật truyền thống với thiết kế hiện đại.",
          "Song song với đào tạo lớp kế cận, các xưởng sản xuất ngày nay cũng chú trọng xây dựng thương hiệu, tổ chức trải nghiệm và tiếp cận khách hàng doanh nghiệp qua nền tảng số.",
        ],
      },
      {
        heading: "4. Viết tiếp câu chuyện làng nghề bằng những cách làm mới",
        layout: "side-left",
        paragraphs: [
          "Nếu thế hệ trước truyền nghề bằng kinh nghiệm và đôi tay tài hoa, người trẻ hôm nay đóng góp bằng tư duy thiết kế, công nghệ và khả năng kết nối thị trường.",
          "Với Craft Folio, việc giới thiệu nghệ nhân, cơ sở sản xuất và câu chuyện phía sau sản phẩm là cầu nối để thế hệ trẻ và các xưởng thủ công tiếp tục viết tiếp hành trình di sản.",
        ],
      },
    ],
    cta: {
      text: "Khám phá làng nghề Phú Vinh và tìm kiếm đối tác sản xuất mây tre đan tại Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/MTD",
    },
  },
  {
    id: "xu-huong-qua-tang-doanh-nghiep",
    slug: "xu-huong-su-dung-san-pham-thu-cong-trong-nganh-qua-tang-doanh-nghiep",
    title: "Xu hướng sử dụng sản phẩm thủ công trong ngành quà tặng doanh nghiệp",
    category: "xu-huong",
    categoryLabel: "Xu hướng thị trường",
    date: "27/02/2026",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Thay vì những món quà sản xuất hàng loạt, nhiều doanh nghiệp quan tâm hơn đến sản phẩm có thiết kế riêng, tính ứng dụng và dấu ấn văn hóa. Đây là cơ hội để hàng thủ công Việt Nam tiếp cận thị trường quà tặng doanh nghiệp, từ quà tri ân khách hàng, đối tác đến quà tặng nhân viên và sự kiện.",
    images: [
      newsImg("xuhuongthitruong3anh1.png"),
      newsImg("xuhuongthitruong3anh2.png"),
      newsImg("xuhuongthitruong3anh3.png"),
      newsImg("xuhuongthitruong3anh4.png"),
    ],
    sections: [
      {
        heading: "1. Quà tặng doanh nghiệp đang hướng đến giá trị riêng biệt",
        layout: "full",
        paragraphs: [
          "Khi lựa chọn quà tặng tri ân đối tác, kỷ niệm thành lập hay hội nghị, doanh nghiệp ngày càng chú trọng chất lượng, công năng và khả năng cá nhân hóa mang bản sắc văn hóa địa phương.",
          "Theo ghi nhận của Vietnam News trong mùa Tết 2026, thị trường quà tặng ghi nhận sự gia tăng tỷ trọng đặc sản và sản phẩm thủ công Việt Nam nhờ tính thiết thực và yếu tố bền vững.",
        ],
      },
      {
        heading: "2. Sản phẩm thủ công trở thành lựa chọn đáng chú ý",
        layout: "full",
        paragraphs: [
          "Nhiều nhóm hàng thủ công đáp ứng đa dạng phân khúc quà tặng doanh nghiệp: Mây tre đan Phú Vinh với giỏ quà, khay đựng, hộp quà chất liệu tự nhiên; Gốm sứ Bát Tràng với bộ ấm chén, cốc, bình hoa đặt riêng màu men và logo.",
          "Bên cạnh đó, khăn lụa và phụ kiện tơ tằm Nha Xá hay hộp đựng, vật phẩm để bàn từ gỗ và sơn mài cũng dễ dàng tùy biến kích thước, màu sắc và bao bì theo bộ nhận diện thương hiệu.",
        ],
      },
      {
        heading: "3. Cá nhân hóa và yếu tố bền vững trong thiết kế quà tặng",
        layout: "side-right",
        paragraphs: [
          "Cá nhân hóa không chỉ dừng ở việc in khắc logo mà còn là sự phối hợp đồng bộ giữa sản phẩm, bao bì tre mây, giấy mỹ thuật và câu chuyện làng nghề đính kèm qua thiệp hoặc mã QR.",
          "Việc sử dụng nguyên liệu tự nhiên có nguồn gốc rõ ràng và độ bền sử dụng lâu dài giúp món quà vừa thiết thực vừa giảm thiểu bao bì nhựa dùng một lần.",
        ],
      },
      {
        heading: "4. Doanh nghiệp cần gì khi lựa chọn quà tặng thủ công?",
        layout: "full",
        paragraphs: [
          "Trước khi đặt đơn hàng B2B, doanh nghiệp thường cần làm rõ năm tiêu chí: thông tin quy cách và báo giá theo số lượng; khả năng tùy chỉnh màu sắc và bao bì; năng lực đáp ứng tiến độ; mẫu thử thực tế trước khi sản xuất hàng loạt; và điều kiện về số lượng tối thiểu cũng như quy cách đóng gói.",
        ],
      },
      {
        heading: "5. Mở rộng cơ hội cho sản phẩm làng nghề Việt Nam",
        layout: "full",
        paragraphs: [
          "Theo AsemconnectVietnam dẫn số liệu Hiệp hội Làng nghề Việt Nam (tháng 1/2026), kim ngạch xuất khẩu hàng thủ công mỹ nghệ năm 2024 đạt gần 4 tỷ USD, có mặt tại 163 quốc gia và vùng lãnh thổ.",
          "Thông qua Craft Folio, các xưởng thủ công có thể số hóa hồ sơ sản phẩm và năng lực sản xuất để tiếp cận trực tiếp khách hàng doanh nghiệp có nhu cầu đặt quà tặng thiết kế riêng.",
        ],
      },
    ],
    cta: {
      text: "Tìm hiểu bộ sưu tập quà tặng thủ công và kết nối trực tiếp với xưởng trên Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/",
    },
  },
  {
    id: "nha-xa-net-tinh-te-nghe-det-lua",
    slug: "nha-xa-net-tinh-te-cua-nghe-det-lua-truyen-thong",
    title: "Nha Xá – Nét tinh tế của nghề dệt lụa truyền thống",
    category: "lang-nghe",
    categoryLabel: "Làng nghề",
    date: "02/01/2026",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Trải qua hơn 700 năm, làng lụa Nha Xá vẫn duy trì nghề ươm tơ, dệt lụa truyền thống. Từ những sợi tơ mảnh, người thợ dùng kinh nghiệm và kỹ thuật được truyền qua nhiều thế hệ để tạo nên những tấm lụa mềm mại, óng ả, từng bước đổi mới mẫu mã đáp ứng nhu cầu khách hàng hiện đại.",
    images: [
      newsImg("langnghe4anh1.jpg"),
      newsImg("langnghe4anh2.png"),
      newsImg("langnghe4anh3.jpg"),
      newsImg("langnghe4anh4.jpg"),
      newsImg("langnghe4anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Nha Xá – Làng nghề hơn 700 năm bên dòng sông Hồng",
        layout: "full",
        paragraphs: [
          "Làng nghề dệt lụa Nha Xá nằm bên tả ngạn sông Hồng, thuộc vùng Duy Tiên, Hà Nam. Theo tư liệu địa phương, nghề dệt lụa nơi đây hình thành từ cuối thế kỷ XIII – đầu thế kỷ XIV và gắn với công lao truyền nghề của danh tướng Trần Khánh Dư.",
          "Danh tiếng chất lượng vải lụa nơi đây từng đi vào câu truyền miệng “Lụa Nha Xá, cá sông Lảnh”. Qua nhiều thế kỷ, những khung cửi trong các gia đình và xưởng sản xuất vẫn tiếp tục hoạt động bền bỉ.",
        ],
      },
      {
        heading: "2. Đặc trưng của lụa Nha Xá – Mềm mại, nhẹ và bền đẹp",
        layout: "full",
        paragraphs: [
          "Điểm nổi bật của lụa Nha Xá nằm ở chất liệu tơ tằm tự nhiên: mặt vải mềm, mỏng, nhẹ, thoáng mát và có độ rủ tự nhiên. Người thợ dệt nhiều dòng vải phong phú như lụa trơn, lụa hoa, lụa dệt hoa văn, đũi và các loại tơ tằm với độ dày mỏng khác nhau.",
          "Nhờ khả năng nhuộm màu và dệt họa tiết theo yêu cầu riêng, lụa Nha Xá hiện diện rộng rãi trong cả trang phục truyền thống lẫn thời trang và phụ kiện hiện đại.",
        ],
      },
      {
        heading: "3. Từ sợi tơ đến tấm lụa – Những công đoạn đòi hỏi sự tỉ mỉ",
        layout: "side-right",
        paragraphs: [
          "Để dệt thành tấm lụa hoàn chỉnh, người thợ phải kiểm soát chặt từ lựa chọn sợi tơ, mắc cửi, dệt vải cho tới nhuộm và hoàn thiện bề mặt.",
          "Ngày nay, nhiều cơ sở tại Nha Xá đã đầu tư cải tiến máy dệt để nâng năng suất và mở rộng khổ vải, nhưng kinh nghiệm của người thợ vẫn giữ vai trò quyết định trong khâu kiểm soát độ mịn, độ đều và sắc màu của lụa.",
        ],
      },
      {
        heading: "4. Từ vải lụa truyền thống đến những sản phẩm ứng dụng hiện đại",
        layout: "side-left",
        paragraphs: [
          "Bên cạnh vải may áo dài và trang phục, các cơ sở tại Nha Xá phát triển thêm nhiều dòng sản phẩm ứng dụng như khăn lụa, khăn thêu tay, đèn lồng lụa, túi phụ kiện và bộ quà tặng.",
          "Đáng chú ý, dòng khăn lụa thêu tay cao cấp của Hợp tác xã Du lịch sinh thái dệt lụa Hồng Tiến Nha Xá được công nhận đạt chuẩn OCOP 4 sao cấp tỉnh năm 2022.",
        ],
      },
      {
        heading: "5. Giữ nghề và phát triển sản xuất theo hướng bền vững",
        layout: "full",
        paragraphs: [
          "Duy trì làng nghề lâu đời gắn liền với sinh kế, chất lượng đầu ra và trách nhiệm môi trường trong khâu nhuộm dệt. Các hợp tác xã và xưởng dệt tại Nha Xá đang từng bước chuẩn hóa quy trình sản xuất, minh bạch nguồn gốc nguyên liệu và hồ sơ năng lực để hợp tác lâu dài cùng khách hàng doanh nghiệp.",
        ],
      },
    ],
    cta: {
      text: "Khám phá các cơ sở sản xuất tại làng lụa Nha Xá trên Craft Folio để tìm hiểu sản phẩm và hợp tác trực tiếp với các xưởng dệt.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/LNX",
    },
  },
  {
    id: "phim-sau-moi-san-pham-nguoi-giu-nghe",
    slug: "phia-sau-moi-san-pham-thu-cong-la-mot-cau-chuyen-ve-nguoi-giu-nghe",
    title: "Phía sau mỗi sản phẩm thủ công là một câu chuyện về người giữ nghề",
    category: "cau-chuyen",
    categoryLabel: "Câu chuyện",
    date: "23/12/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Một chiếc giỏ mây, chiếc đèn tre hay bức tranh đan bằng những sợi mây nhỏ đều cần nhiều thời gian và công sức để hoàn thiện. Đằng sau mỗi sản phẩm là đôi bàn tay khéo léo, kinh nghiệm và sự kiên trì của những người thợ đã gắn bó và truyền nghề qua nhiều thế hệ.",
    images: [
      newsImg("cauchuyenlangnghe1anh1.jpg"),
      newsImg("cauchuyenlangnghe1anh2.png"),
      newsImg("cauchuyenlangnghe1anh3.webp"),
      newsImg("cauchuyenlangnghe1anh4.jpg"),
    ],
    sections: [
      {
        heading: "1. Từ những sợi mây bình dị đến tác phẩm có hồn",
        layout: "full",
        paragraphs: [
          "Tại làng nghề Phú Vinh có lịch sử hơn 400 năm, từ những vật dụng quen thuộc như rổ, rá, nia, sàng, người thợ dần phát triển kỹ thuật đan lát thành các sản phẩm mỹ nghệ như giỏ xách, đèn trang trí, đồ nội thất và tranh chân dung.",
          "Nghệ nhân Nguyễn Văn Tĩnh — người tiếp nối truyền thống từ cố nghệ nhân Nguyễn Văn Khiếu — chia sẻ rằng kỹ thuật chỉ là một phần của nghề; để sản phẩm có hồn, người thợ còn cần kinh nghiệm xử lý nguyên liệu, sự kiên nhẫn và cảm nhận tinh tế về đường nét.",
        ],
      },
      {
        heading: "2. Người thợ và hành trình đưa nghề vượt khỏi giới hạn",
        layout: "full",
        paragraphs: [
          "Từ chọn nguyên liệu, chẻ vót nan có độ dày chuẩn xác đến tạo khung và đan cài, mỗi bước đều đòi hỏi sự tỉ mỉ cao. Cố nghệ nhân Nguyễn Văn Khiếu từng gây dấu ấn với tác phẩm chân dung Chủ tịch Hồ Chí Minh đan bằng mây tre, đòi hỏi kỹ thuật đan cài phức tạp.",
          "Tiếp nối cha mình, nghệ nhân Nguyễn Văn Tĩnh phát triển đa dạng sản phẩm mỹ nghệ và ứng dụng nội thất, đưa mây tre Phú Vinh vượt ra khỏi phạm vi đồ gia dụng truyền thống.",
        ],
      },
      {
        heading: "3. Giữ nghề không chỉ là giữ lại kỹ thuật",
        layout: "side-right",
        paragraphs: [
          "Nghề thủ công đòi hỏi thời gian học hỏi dài trong khi thế hệ trẻ có nhiều lựa chọn nghề nghiệp mới. Tại Phú Vinh, nghệ nhân Nguyễn Văn Tĩnh từng mở nhiều lớp dạy nghề truyền lại kỹ thuật cho lao động địa phương.",
          "Tuy nhiên, giữ nghề bền vững đòi hỏi phải tìm được đầu ra ổn định cho sản phẩm và thích nghi với nhu cầu thị trường để người thợ có thu nhập tương xứng với công sức.",
        ],
      },
      {
        heading: "4. Khi người trẻ tiếp nối câu chuyện làng nghề",
        layout: "full",
        paragraphs: [
          "Bên cạnh nghệ nhân lâu năm, thế hệ trẻ như nghệ nhân Ngô Thị Liên sau khi tốt nghiệp ngành Du lịch đã trở về quê hương xây dựng cơ sở sản xuất mây tre đan, đổi mới mẫu mã và cách giới thiệu sản phẩm để tiếp cận khách hàng hiện đại trên nền tảng kỹ thuật cha ông.",
        ],
      },
      {
        heading: "5. Di sản được gìn giữ từ những bàn tay bình dị",
        layout: "full",
        paragraphs: [
          "Từ thợ đan mây Phú Vinh đến nghệ nhân gốm Bát Tràng, thợ dệt lụa Nha Xá hay thợ khâu nón làng Chuông, phía sau mỗi món đồ thủ công là thời gian rèn giũa và tâm huyết truyền đời. Một nghề truyền thống sẽ tiếp tục sống mãi khi còn người muốn học, muốn làm và đồng hành cùng giá trị di sản.",
        ],
      },
    ],
    cta: {
      text: "Khám phá làng nghề Phú Vinh và gặp gỡ các nghệ nhân tiêu biểu trên Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/MTD",
    },
  },
  {
    id: "tu-lang-nghe-den-thi-truong-qua-tang-doanh-nghiep",
    slug: "tu-lang-nghe-truyen-thong-den-thi-truong-qua-tang-doanh-nghiep",
    title: "Từ làng nghề truyền thống đến thị trường quà tặng doanh nghiệp",
    category: "goc-nhin",
    categoryLabel: "Góc nhìn doanh nghiệp",
    date: "07/12/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Một chiếc bình gốm Bát Tràng hay chiếc giỏ mây tre đan đều có thể trở thành món quà tặng đối tác, khách hàng hoặc nhân viên. Mỗi món đồ vừa có công dụng riêng, vừa mang nét đặc trưng của làng nghề làm ra nó, tạo nên dấu ấn riêng cho doanh nghiệp khi kết hợp hài hòa giữa thẩm mỹ và công năng thực tế.",
    images: [
      newsImg("gocnhindoanhnghiep2anh1.jpg"),
      newsImg("gocnhindoanhnghiep2anh2.jpg"),
      newsImg("gocnhindoanhnghiep2anh3.jpg"),
      newsImg("gocnhindoanhnghiep2anh4.jpg"),
    ],
    sections: [
      {
        heading: "1. Khi món quà không chỉ dừng lại ở giá trị vật chất",
        layout: "full",
        paragraphs: [
          "Quà tặng doanh nghiệp trong dịp tri ân khách hàng, kỷ niệm thành lập hay hội nghị thường gửi gắm thông điệp và hình ảnh thương hiệu. Khác với quà tặng đại trà, sản phẩm làng nghề sở hữu nét riêng về chất liệu, kỹ thuật chế tác và câu chuyện văn hóa địa phương phía sau.",
        ],
      },
      {
        heading: "2. Làng nghề Việt Nam sở hữu nguồn sản phẩm đa dạng",
        layout: "full",
        paragraphs: [
          "Từ gốm Bát Tràng (ấm chén, bình hoa, cốc), lụa Nha Xá & Vạn Phúc (khăn lụa, hộp quà) đến mây tre đan Phú Vinh (giỏ, khay, hộp đựng), doanh nghiệp có thể linh hoạt phối hợp nhiều sản phẩm thành bộ quà tặng theo chủ đề riêng.",
          "Theo VietnamPlus (tháng 12/2025), Hà Nội hiện có khoảng 1.350 làng nghề và làng nghề truyền thống; việc đầu tư thêm vào thiết kế, bao bì và thương hiệu đang là chìa khóa giúp sản phẩm tiếp cận tốt hơn phân khúc quà tặng B2B.",
        ],
      },
      {
        heading: "3. Từ sản phẩm truyền thống đến món quà mang dấu ấn thương hiệu",
        layout: "side-right",
        paragraphs: [
          "Để phù hợp với quà tặng doanh nghiệp, sản phẩm thủ công không cần đánh mất bản sắc mà kết hợp kỹ thuật truyền thống với yêu cầu nhận diện thương hiệu: gốm điều chỉnh màu men hoặc họa tiết, giỏ mây làm theo kích thước riêng kèm hộp giấy, thiệp tặng và mã QR kể câu chuyện làng nghề.",
        ],
      },
      {
        heading: "4. Cơ hội đi cùng những yêu cầu mới về sản xuất",
        layout: "full",
        paragraphs: [
          "Khác với bán lẻ, đơn hàng doanh nghiệp thường đòi hỏi số lượng lớn, mẫu mã thống nhất, thời gian giao hàng rõ ràng và đóng gói chỉn chu. Xưởng sản xuất cần có năng lực làm mẫu, điều chỉnh theo phản hồi và đảm bảo kiểm soát chất lượng xuyên suốt trước khi bàn giao.",
        ],
      },
      {
        heading: "5. Kết nối làng nghề với những cơ hội hợp tác mới",
        layout: "full",
        paragraphs: [
          "Craft Folio hướng đến thu hẹp khoảng cách thông tin giữa doanh nghiệp và các xưởng thủ công thông qua nền tảng số — nơi xưởng giới thiệu năng lực sản xuất thực tế, còn doanh nghiệp dễ dàng đánh giá và gửi yêu cầu hợp tác trực tiếp.",
        ],
      },
    ],
    cta: {
      text: "Khám phá hệ sinh thái làng nghề và các giải pháp quà tặng thủ công tại Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/",
    },
  },
  {
    id: "dang-sau-moi-don-hang-la-nang-luc-xuong",
    slug: "dang-sau-moi-don-hang-thu-cong-la-nang-luc-cua-mot-xuong-san-xuat",
    title: "Đằng sau mỗi đơn hàng thủ công là năng lực của một xưởng sản xuất",
    category: "goc-nhin",
    categoryLabel: "Góc nhìn doanh nghiệp",
    date: "30/11/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Một doanh nghiệp đặt 300 chiếc giỏ mây làm quà tặng, một khách sạn cần vật dụng trang trí đồng bộ hay một thương hiệu đặt gốm theo thiết kế riêng đều đòi hỏi xưởng chuẩn bị kỹ từ nguyên liệu, nhân lực, kỹ thuật đến kiểm soát chất lượng xuyên suốt quá trình sản xuất.",
    images: [
      newsImg("gocnhindoanhnghiep3anh1.png"),
      newsImg("gocnhindoanhnghiep3anh2.jpg"),
      newsImg("gocnhindoanhnghiep3anh3.webp"),
      newsImg("gocnhindoanhnghiep3anh4.jpg"),
      newsImg("gocnhindoanhnghiep3anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Năng lực sản xuất không chỉ được tính bằng quy mô xưởng",
        layout: "full",
        paragraphs: [
          "Khác với nhà máy công nghiệp, nhiều cơ sở thủ công vận hành theo mạng lưới kết hợp giữa thợ chính tại xưởng và các hộ thợ lành nghề trong làng, mỗi nhóm đảm nhận một công đoạn từ sơ chế đến hoàn thiện.",
          "Vì vậy, diện tích hay máy móc chưa phản ánh hết năng lực thực tế; cần nhìn vào cách xưởng tổ chức sản xuất, điều phối nhân lực và theo dõi tiến độ khi tiếp nhận đơn hàng tăng cao.",
        ],
      },
      {
        heading: "2. Nguồn nguyên liệu và đội ngũ thợ quyết định khả năng duy trì đơn hàng",
        layout: "full",
        paragraphs: [
          "Chất lượng mây tre đã xử lý, đất và men gốm hay sợi tơ tằm ảnh hưởng trực tiếp tới sự đồng nhất của thành phẩm — đặc biệt với doanh nghiệp đặt hàng theo bộ sưu tập hoặc tái đặt hàng nhiều đợt.",
          "Song song đó, tay nghề người thợ ở các công đoạn kỹ thuật cao khó thay thế bằng máy móc đòi hỏi xưởng phải duy trì đội ngũ thợ lành nghề và truyền nghề liên tục.",
        ],
      },
      {
        heading: "3. Từ mẫu thử đến sản xuất thực tế",
        layout: "side-right",
        paragraphs: [
          "Trong hợp tác B2B, đơn hàng bắt đầu từ yêu cầu cụ thể về kiểu dáng, chất liệu và kích thước. Khả năng phát triển mẫu thử, điều chỉnh kết cấu và lưu lại thông số chuẩn sau khi khách hàng chốt mẫu là cơ sở quan trọng để hạn chế sai lệch khi triển khai số lượng lớn.",
        ],
      },
      {
        heading: "4. Kiểm soát chất lượng và tiến độ trong từng công đoạn",
        layout: "side-left",
        paragraphs: [
          "Sai lệch ở một khâu như xử lý ẩm mây tre hay nhiệt độ nung gốm có thể ảnh hưởng toàn bộ lô hàng. Vì thế, xưởng cần kiểm tra chất lượng từ khâu chọn nguyên liệu đến đóng gói theo bộ tiêu chí kích thước, màu sắc và độ bền đã thống nhất, đồng thời cập nhật tiến độ thường xuyên cho đối tác.",
        ],
      },
      {
        heading: "5. Bài toán mở rộng sản xuất của các cơ sở thủ công",
        layout: "full",
        paragraphs: [
          "Theo thông tin Vietnam Trade Office tại Thụy Điển (tháng 11/2025), nhiều cơ sở thủ công mỹ nghệ Hà Nội vẫn gặp thách thức khi mở rộng quy mô do thiếu chuẩn hóa và công cụ quản lý. Ứng dụng nền tảng số để quản lý hồ sơ sản phẩm, năng lực xưởng và tiến độ đơn hàng giúp cơ sở phối hợp với khách hàng thuận lợi mà vẫn giữ nguyên bản sắc thủ công.",
        ],
      },
    ],
    cta: {
      text: "Tìm hiểu hồ sơ các xưởng sản xuất tiêu biểu và đặt lịch làm việc trực tiếp qua Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/dat-lich",
    },
  },
  {
    id: "lang-chuong-nghe-thuat-lam-non-la",
    slug: "lang-chuong-nghe-thuat-lam-non-la-qua-ban-tay-nguoi-tho",
    title: "Làng Chuông – Nghệ thuật làm nón lá qua bàn tay người thợ",
    category: "lang-nghe",
    categoryLabel: "Làng nghề",
    date: "24/11/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Làng Chuông, Thanh Oai, Hà Nội nổi tiếng với nghề làm nón lá được gìn giữ qua nhiều thế hệ. Mỗi chiếc nón đều trải qua nhiều công đoạn tỉ mỉ, đòi hỏi sự khéo léo của người thợ. Ngày nay, bên cạnh nón truyền thống, làng nghề còn phát triển nhiều mẫu mã mới để phục vụ khách hàng trong và ngoài nước.",
    images: [
      newsImg("langnghe3anh1.jpg"),
      newsImg("langnghe3anh2.png"),
      newsImg("langnghe3anh3.png"),
      newsImg("langnghe3anh4.png"),
      newsImg("langnghe3anh5.png"),
    ],
    sections: [
      {
        heading: "1. Làng Chuông – Nơi lưu giữ nghề làm nón lá truyền thống",
        layout: "full",
        paragraphs: [
          "Theo lời kể các bậc cao niên, nghề làm nón tại làng Chuông (xã Phương Trung, Thanh Oai, Hà Nội) xuất hiện từ thế kỷ VIII khi làng còn mang tên Trang Thì Trung. Danh tiếng làng nghề đi vào câu ca dân gian quen thuộc:",
        ],
        quote: [
          "“Muốn ăn cơm trắng cá trê",
          "Muốn đội nón tốt thì về làng Chuông.”",
        ],
        afterQuoteParagraphs: [
          "Từ nón ba tầm, nón quai thao, nón nhô, nón chóp đến nón lá già ghép sống, kỹ thuật xử lý lá, uốn vành và khâu nón vẫn được truyền giữ trong các gia đình qua nhiều thế hệ.",
        ],
      },
      {
        heading: "2. Từ lá cọ và nan tre đến chiếc nón hoàn chỉnh",
        layout: "full",
        paragraphs: [
          "Lá làm nón thường được tuyển chọn từ Quảng Bình, Quảng Trị rồi phơi, xử lý và ép phẳng. Nan tre, nứa được vót mảnh và uốn thành các vòng tròn cân đối trên khung.",
          "Khi xếp lá và khâu nón, từng đường kim mũi chỉ phải đều, nhỏ và khít để mặt nón phẳng mịn, giữ được độ bền đẹp rồi mới hoàn thiện phần chóp, viền và quai nón.",
        ],
      },
      {
        heading: "3. Những chiếc nón mang dấu ấn riêng của làng nghề",
        layout: "side-right",
        paragraphs: [
          "Bên cạnh nón truyền thống, nghệ nhân làng Chuông còn phát triển nón quai thao, nón lụa, nón thêu, vẽ tranh phong cảnh Việt Nam và nón thiết kế riêng cho biểu diễn nghệ thuật, du lịch và trang trí. Năm 2021, sản phẩm nón làng Chuông được thành phố Hà Nội công nhận đạt OCOP 4 sao.",
        ],
      },
      {
        heading: "4. Gìn giữ nghề truyền thống trước những thay đổi của thị trường",
        layout: "side-left",
        paragraphs: [
          "Trước những biến động của thị trường và bài toán lao động kế cận, nhiều nghệ nhân và cơ sở sản xuất tại làng Chuông đã chủ động đổi mới mẫu mã, kết hợp du lịch trải nghiệm làm nón và mở các buổi truyền nghề cho thế hệ trẻ.",
        ],
      },
      {
        heading: "5. Mở rộng cơ hội cho nón lá làng Chuông trong đời sống hiện đại",
        layout: "full",
        paragraphs: [
          "Ngày nay, nón lá làng Chuông được các doanh nghiệp du lịch, nhà hàng, khách sạn và đơn vị tổ chức sự kiện đặt làm quà tặng, đạo cụ biểu diễn và vật phẩm trang trí không gian mang đậm bản sắc Việt.",
        ],
      },
    ],
    cta: {
      text: "Khám phá các cơ sở sản xuất tại làng Chuông trên Craft Folio để tìm hiểu sản phẩm nón lá truyền thống và cơ hội hợp tác.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/NLC",
    },
  },
  {
    id: "mot-ngay-tai-xuong-thu-cong",
    slug: "mot-ngay-tai-xuong-thu-cong-tu-nguyen-lieu-den-san-pham-hoan-thien",
    title: "Một ngày tại xưởng thủ công: Từ nguyên liệu đến sản phẩm hoàn thiện",
    category: "cau-chuyen",
    categoryLabel: "Câu chuyện",
    date: "14/09/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Tiếng dao chẻ tre, tiếng nan mây va vào nhau và những đôi bàn tay thoăn thoắt bên khung đan. Tại một xưởng thủ công ở Phú Vinh, ngày làm việc bắt đầu bằng những công đoạn đòi hỏi sự tỉ mỉ và kinh nghiệm để biến những bó mây tre thô thành sản phẩm hoàn chỉnh.",
    images: [
      newsImg("cauchuyenlangnghe3anh1.png"),
      newsImg("cauchuyenlangnghe3anh2.jpg"),
      newsImg("cauchuyenlangnghe3anh3.jpg"),
      newsImg("cauchuyenlangnghe3anh4.jpg"),
    ],
    sections: [
      {
        heading: "1. Bắt đầu từ những nguyên liệu bình dị",
        layout: "full",
        paragraphs: [
          "Mây, tre, nứa, vầu và trúc được lựa chọn theo độ cứng, độ dẻo phù hợp từng sản phẩm. Sau khi thu về, nguyên liệu được phơi sấy, làm sạch, xử lý chống mối mọt, cạo vỏ hoặc hun khói tạo màu, chẻ sợi đều tay để chống cong vênh, nứt gãy về sau.",
        ],
      },
      {
        heading: "2. Khi những sợi nan bắt đầu tạo nên hình hài",
        layout: "full",
        paragraphs: [
          "Người thợ chuẩn bị khung, bố trí nan sườn rồi đan cài từng sợi mây tre với lực tay ổn định. Từ những lối đan cơ bản đến hoa văn cầu kỳ cho đèn trang trí, cùng một chất liệu nhưng chỉ cần đổi kỹ thuật phối nan là diện mạo sản phẩm đã hoàn toàn khác biệt.",
        ],
      },
      {
        heading: "3. Những chi tiết nhỏ quyết định vẻ đẹp của sản phẩm",
        layout: "side-right",
        paragraphs: [
          "Sau khi thành hình, sản phẩm còn trải qua công đoạn cắt bỏ đầu nan thừa, nắn chỉnh đường đan, làm sạch, tạo màu hoặc phủ lớp hoàn thiện bảo vệ bề mặt và kiểm tra kết cấu trước khi đóng gói.",
        ],
      },
      {
        heading: "4. Từ xưởng thủ công đến những không gian hiện đại",
        layout: "full",
        paragraphs: [
          "Tại cơ sở mây tre đan Việt Quang của nghệ nhân Nguyễn Văn Tĩnh, gia đình lưu giữ khoảng 250 lối đan khác nhau cùng hơn 100 mẫu sản phẩm từ khay, giỏ, lọ hoa tới túi xách và đèn trang trí (theo Báo Công Thương, 10/2026). Những sản phẩm đặt thiết kế riêng đòi hỏi làm khuôn thử nghiệm kỹ lưỡng, có mẫu mất từ 3 đến 6 tháng để hoàn thiện.",
        ],
      },
      {
        heading: "5. Giá trị của một sản phẩm nằm cả ở hành trình tạo ra nó",
        layout: "full",
        paragraphs: [
          "Mỗi chiếc giỏ mây hay chụp đèn tre rời khỏi xưởng đều kết tinh thời gian, kinh nghiệm và sự kiên nhẫn trong từng công đoạn — tạo nên giá trị riêng biệt cho các không gian sống và công trình hiện đại.",
        ],
      },
    ],
    cta: {
      text: "Khám phá làng nghề Phú Vinh và tìm kiếm đối tác sản xuất mây tre đan tại Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/MTD",
    },
  },
  {
    id: "bat-trang-giu-hon-viet-qua-tung-san-pham",
    slug: "bat-trang-giu-hon-viet-qua-tung-san-pham",
    title: "Bát Tràng - Giữ hồn Việt qua từng sản phẩm",
    category: "lang-nghe",
    categoryLabel: "Làng nghề",
    date: "12/07/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Trải qua nhiều thế kỷ hình thành và phát triển, làng gốm Bát Tràng vẫn duy trì nghề làm gốm truyền thống. Từ những khối đất sét bình dị, qua bàn tay khéo léo của người thợ, những sản phẩm gốm sứ với nhiều kiểu dáng, màu men và công năng đã ra đời, phục vụ đời sống và xuất khẩu ra thị trường quốc tế.",
    images: [
      newsImg("langnghe2anh1.jpg"),
      newsImg("langnghe2anh2.jpg"),
      newsImg("langnghe2anh3.jpg"),
      newsImg("langnghe2anh4.jpg"),
      newsImg("langnghe2anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Bát Tràng – Dấu ấn của làng nghề gốm truyền thống lâu đời",
        layout: "full",
        paragraphs: [
          "Nằm bên bờ sông Hồng thuộc Gia Lâm, Hà Nội, Bát Tràng là một trong những cái nôi gốm sứ lâu đời nhất Việt Nam, thuận lợi giao thương đường thủy từ bao đời nay. Năm 2019, Nghề gốm làng Bát Tràng chính thức được ghi danh vào Danh mục Di sản văn hóa phi vật thể quốc gia.",
        ],
      },
      {
        heading: "2. Từ đất sét đến sản phẩm gốm qua bàn tay người thợ",
        layout: "full",
        paragraphs: [
          "Để làm nên một sản phẩm gốm hoàn chỉnh, người thợ Bát Tràng trải qua quy trình công phu: chọn và xử lý lọc đất tạo độ dẻo, tạo hình trên bàn xoay hoặc đổ khuôn, phơi sấy và tu sửa chi tiết, vẽ tay hoặc chạm khắc hoa văn, tráng men và cuối cùng là nung lò ở nhiệt độ chuẩn xác.",
        ],
      },
      {
        heading: "3. Những dòng sản phẩm làm nên thương hiệu gốm Bát Tràng",
        layout: "side-right",
        paragraphs: [
          "Sản phẩm gốm Bát Tràng phong phú từ đồ gốm gia dụng (bộ ấm chén, bát đĩa, bình nước, cốc sứ), gốm tâm linh truyền thống cho đến các dòng gốm trang trí mỹ nghệ, bình hút lộc và bộ quà tặng thiết kế riêng cho doanh nghiệp.",
        ],
      },
      {
        heading: "4. Giá trị thẩm mỹ tạo nên nét riêng của gốm Bát Tràng",
        layout: "side-left",
        paragraphs: [
          "Gốm Bát Tràng nổi tiếng với nhiều dòng men đặc trưng như men lam, men rạn cổ điển, men nâu trầm ấm, men trắng ngà thanh thoát và men ngọc sang trọng, kết hợp cùng các họa tiết hoa sen, rồng phượng hay phong cảnh vẽ tay tỉ mỉ.",
        ],
      },
      {
        heading: "5. Gốm Bát Tràng trong không gian sống và thị trường hiện đại",
        layout: "full",
        paragraphs: [
          "Ngày nay, gốm Bát Tràng xuất hiện rộng rãi trong gia đình, nhà hàng, khách sạn, kiến trúc nội thất và bộ quà tặng thương hiệu, với khả năng tùy chỉnh linh hoạt kiểu dáng, màu men và dấu ấn riêng theo đơn đặt hàng của doanh nghiệp.",
        ],
      },
    ],
    cta: {
      text: "Khám phá làng gốm Bát Tràng và tìm kiếm đối tác sản xuất gốm sứ tại Craft Folio.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/GBT",
    },
  },
  {
    id: "chang-son-nghe-lam-quat-giay-xu-doai",
    slug: "chang-son-nghe-lam-quat-giay-va-net-dep-thu-cong-xu-doai",
    title: "Chàng Sơn – Nghề làm quạt giấy và nét đẹp thủ công xứ Đoài",
    category: "lang-nghe",
    categoryLabel: "Làng nghề",
    date: "17/06/2025",
    readTime: "7 phút đọc",
    featured: false,
    sapo:
      "Từ những thanh tre và tờ giấy mỏng, người thợ Chàng Sơn tạo nên những chiếc quạt với nhiều kiểu dáng, hoa văn khác nhau. Trải qua hơn 200 năm, nghề làm quạt nơi đây vẫn được gìn giữ và phát triển thành dòng quà tặng, đồ mỹ nghệ và sản phẩm trang trí ứng dụng cao.",
    images: [
      newsImg("langnghe5anh1.jpg"),
      newsImg("langnghe5anh2.jpg"),
      newsImg("langnghe5anh3.jpg"),
      newsImg("langnghe5anh4.jpg"),
      newsImg("langnghe5anh5.jpg"),
    ],
    sections: [
      {
        heading: "1. Chàng Sơn – Làng nghề hơn 200 năm gắn với những chiếc quạt thủ công",
        layout: "full",
        paragraphs: [
          "Chàng Sơn (Thạch Thất, Hà Nội) nổi tiếng với nghề làm quạt giấy và quạt lụa hơn 200 năm lịch sử; từ thế kỷ XIX, quạt Chàng Sơn từng được mang sang triển lãm tại Paris. Người dân nơi đây vẫn truyền lại giai thoại “Hội đồng tiên quạt” cùng câu thơ dân gian:",
        ],
        quote: [
          "“Tiên đồng hội quạt, hội đồng tiên",
          "Lương duyên kết quạt, giải tâm phiền",
          "Phiền tâm quạt, tay đưa gió",
          "Gió đưa tay quạt, hội đồng tiên.”",
        ],
        afterQuoteParagraphs: [
          "Từ vật dụng làm mát và đạo cụ biểu diễn xưa, nhiều gia đình làng nghề hôm nay đã cải tiến mẫu mã, chất liệu để đưa quạt Chàng Sơn tiếp cận thị trường hiện đại.",
        ],
      },
      {
        heading: "2. Tre, giấy và lụa – Những chất liệu tạo nên chiếc quạt Chàng Sơn",
        layout: "full",
        paragraphs: [
          "Tre già thân thẳng và dẻo được chọn lọc kỹ để chẻ vót làm khung và nan quạt; phần cánh dùng giấy dó, giấy điệp mộc mạc hoặc lụa, vải the mềm mại bền đẹp, phối thêm viền mây và chốt cán tinh xảo tùy theo từng dòng quạt.",
        ],
      },
      {
        heading: "3. Đằng sau mỗi chiếc quạt là những công đoạn thủ công tỉ mỉ",
        layout: "side-right",
        paragraphs: [
          "Để hoàn thiện một chiếc quạt Chàng Sơn, người thợ thực hiện liên tiếp các bước: chuẩn bị và xử lý nan tre, sắp nan đóng chốt tạo khung, phất giấy hoặc lụa thật phẳng, cắt gọt viền, phơi khô ép nếp gấp đều rồi vẽ tranh, viết thư pháp hoặc trang trí họa tiết hài hòa khi xòe quạt.",
        ],
      },
      {
        heading: "4. Từ quạt giấy truyền thống đến những sản phẩm mỹ nghệ đa dạng",
        layout: "side-left",
        paragraphs: [
          "Ngoài quạt giấy truyền thống, Chàng Sơn phát triển đa dạng dòng quạt ghép, quạt the, quạt lụa, quạt thư pháp, quạt tranh nghệ thuật cỡ lớn trang trí nhà hàng, khách sạn và quạt thiết kế theo chủ đề riêng mang dấu ấn nhận diện của doanh nghiệp hoặc sự kiện.",
        ],
      },
      {
        heading: "5. Đổi mới sáng tạo để đưa nghề quạt Chàng Sơn đến gần hơn với thị trường",
        layout: "full",
        paragraphs: [
          "Nhiều cơ sở đã ứng dụng kỹ thuật mới, kết hợp chất liệu vải bền và thiết kế riêng phục vụ các lễ hội văn hóa, chương trình nghệ thuật, sự kiện âm nhạc và bộ quà tặng doanh nghiệp — đồng thời chú trọng tính đồng đều và tiến độ cho các đơn hàng số lượng lớn.",
        ],
      },
    ],
    cta: {
      text: "Khám phá các cơ sở sản xuất tại Chàng Sơn trên Craft Folio để tìm hiểu những mẫu quạt thủ công và cơ hội hợp tác trực tiếp.",
      buttonLabel: "Khám phá ngay",
      href: "/lang-nghe/QCS",
    },
  },
];

const SORTED_NEWS = [...newsArticles].sort((a, b) => {
  const toTime = (d) => {
    const [dd, mm, yyyy] = d.split("/").map(Number);
    return new Date(yyyy, mm - 1, dd).getTime();
  };
  return toTime(b.date) - toTime(a.date);
});

export function getNewsArticlesSorted() {
  return SORTED_NEWS;
}

export function getNewsArticleBySlug(slug) {
  return newsArticles.find((item) => item.slug === slug || item.id === slug) || null;
}

export function getRelatedNewsArticles(currentSlug, count = 4) {
  const current = getNewsArticleBySlug(currentSlug);
  const others = SORTED_NEWS.filter((item) => item.slug !== current?.slug);
  if (!current) return others.slice(0, count);

  const sameCat = others.filter((item) => item.category === current.category);
  const diffCat = others.filter((item) => item.category !== current.category);
  return [...sameCat, ...diffCat].slice(0, count);
}
