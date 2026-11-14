import heroBgImage from "../../download/Ảnh làng nghề/Trang chủ/header.png";
import productOneImage from "../../download/Ảnh làng nghề/Quạt Chàng Sơn/sanpham1.png";
import productTwoImage from "../../download/Ảnh làng nghề/CS Mây tre việt quang/sanpham1.jpg";
import productThreeImage from "../../download/Ảnh làng nghề/Nón lá Hải Yến/sanpham2(1).png";
import productFourImage from "../../download/Ảnh làng nghề/CS Lụa nha xá/sanpham1.png";
import productFiveImage from "../../download/Ảnh làng nghề/CS hoàng anh ceramics/Bản sao của Sanpham1.jpg";
import journeyImage from "../../download/Ảnh làng nghề/Trang chủ/vechungtoi.jpg";
import villageBambooImage from "../../download/Ảnh làng nghề/Trang chủ/langnghe1.jpg";
import villageSilkImage from "../../download/Ảnh làng nghề/Trang chủ/langnghe2.jpg";
import villageFanImage from "../../download/Ảnh làng nghề/Trang chủ/langnghe3.png";
import villageHatImage from "../../download/Ảnh làng nghề/Trang chủ/langnghe4.jpeg";
import villagePotteryImage from "../../download/Ảnh làng nghề/Trang chủ/langnghe5.jpeg";
import joinBannerImage from "../../download/Ảnh làng nghề/Trang chủ/banner.jpg";
import craftFolioLogo from "../../download/Ảnh làng nghề/logo.png";

export const brandAssets = {
  logo: craftFolioLogo,
  heroBg: heroBgImage,
  journeyPhoto: journeyImage,
  joinBannerBg: joinBannerImage,
};

export const heroContent = {
  titleLines: [
    "KẾT NỐI XƯỞNG THỦ CÔNG VỚI",
    "KHÁCH HÀNG DOANH NGHIỆP",
  ],
  subtitle: "Số hóa thông tin - thể hiện năng lực - mở rộng kết nối",
};

export const featuredProducts = [
  {
    id: "SP_QCS_QLTDG",
    name: "Quạt Linh Thú Dân Gian",
    description: "Nét vẽ linh thú truyền thống trên nan tre thủ công Chàng Sơn.",
    image: productOneImage,
    alt: "Quạt Linh Thú Dân Gian thủ công làng Chàng Sơn",
    href: "/san-pham/SP_QCS_QLTDG",
  },
  {
    id: "SP_MTD_TXMTDHD",
    name: "Túi Xách Mây Tre Đan Hồng Đan",
    description: "Đan nét thủ công mộc mạc, tinh tế cho phong cách hiện đại.",
    image: productTwoImage,
    imageVariant: "bamboo-lamp",
    alt: "Túi Xách Mây Tre Đan Hồng Đan làng Phú Vinh",
    href: "/san-pham/SP_MTD_TXMTDHD",
  },
  {
    id: "SP_NLC_NQTKN",
    name: "Nón Quai Thao Kim Nguyệt",
    description: "Dáng nón truyền thống kết hợp chi tiết trang trí tinh xảo.",
    image: productThreeImage,
    alt: "Nón Quai Thao Kim Nguyệt làng Chuông",
    href: "/san-pham/SP_NLC_NQTKN",
  },
  {
    id: "SP_LNX_01",
    name: "Lụa Hoa Văn Phượng Vũ",
    description: "Tơ tằm Nha Xá mềm mại, dệt hoa văn phượng múa thanh tao.",
    image: productFourImage,
    alt: "Lụa Hoa Văn Phượng Vũ dệt truyền thống Nha Xá",
    href: "/san-pham/SP_LNX_01",
  },
  {
    id: "SP_GBT_01",
    name: "Ống Heo Súp Lơ",
    description: "Gốm Bát Tràng tạo hình sáng tạo, men màu sắc nét thủ công.",
    image: productFiveImage,
    alt: "Ống Heo Súp Lơ gốm thủ công Bát Tràng",
    href: "/san-pham/SP_GBT_01",
  },
];

export const journeyContent = {
  sectionTitle: "Hành trình kết nối",
  heading: "Đưa giá trị thủ công đến gần hơn với doanh nghiệp",
  imageAlt: "Nghệ nhân làng nghề tỉ mỉ đan từng nan tre truyền thống",
  paragraphs: [
    "Mỗi làng nghề Việt Nam đều sở hữu những sản phẩm đặc trưng, kỹ thuật chế tác riêng và giá trị văn hóa được gìn giữ qua nhiều thế hệ.",
    "Tuy nhiên, thông tin về các cơ sở sản xuất vẫn còn phân tán, khiến doanh nghiệp gặp khó khăn trong việc tìm kiếm đối tác phù hợp và đánh giá khả năng đáp ứng nhu cầu sản xuất.",
    "Nền tảng được xây dựng nhằm thu hẹp khoảng cách đó thông qua việc số hóa thông tin làng nghề, giới thiệu sản phẩm và hồ sơ năng lực của từng xưởng.",
    "Qua đó, doanh nghiệp có thể dễ dàng khám phá các sản phẩm thủ công, tìm hiểu quy trình sản xuất, lựa chọn cơ sở phù hợp và gửi yêu cầu hợp tác trực tiếp.",
  ],
  ctaLabel: "Tìm hiểu thêm",
  ctaHref: "/ve-chung-toi",
};

export const craftVillages = [
  {
    id: "MTD",
    shortName: "MÂY TRE ĐAN",
    fullName: "MÂY TRE ĐAN PHÚ VINH",
    location: "Phú Vinh, Chương Mỹ, Hà Nội",
    description:
      "Chất liệu tự nhiên: Mây, tre và các loại nguyên liệu thực vật được đan kết khéo léo thành những sản phẩm thủ công tinh xảo.",
    verified: true,
    image: villageBambooImage,
    alt: "Các sản phẩm mây tre đan thủ công làng Phú Vinh",
    href: "/lang-nghe/MTD",
  },
  {
    id: "LNX",
    shortName: "LỤA NHA XÁ",
    fullName: "LÀNG LỤA NHA XÁ",
    location: "Nha Xá, Duy Tiên, Hà Nam",
    description:
      "Chất liệu đặc trưng: Tơ tằm tự nhiên, được dệt thành những tấm lụa mềm mại với màu sắc và hoa văn đa dạng.",
    verified: true,
    image: villageSilkImage,
    alt: "Khung dệt lụa truyền thống làng Nha Xá",
    href: "/lang-nghe/LNX",
  },
  {
    id: "QCS",
    shortName: "QUẠT CHÀNG SƠN",
    fullName: "QUẠT TRUYỀN THỐNG CHÀNG SƠN",
    location: "Chàng Sơn, Thạch Thất, Hà Nội",
    description:
      "Chất liệu truyền thống: Nan tre, giấy điệp hoặc lụa, kết hợp nghệ thuật vẽ tay và tạo hình tỉ mỉ trên từng nan quạt.",
    verified: true,
    image: villageFanImage,
    alt: "Quạt giấy Chàng Sơn với nét vẽ phong cảnh truyền thống",
    href: "/lang-nghe/QCS",
  },
  {
    id: "GBT",
    shortName: "GỐM BÁT TRÀNG",
    fullName: "LÀNG GỐM SỨ BÁT TRÀNG",
    location: "Bát Tràng, Gia Lâm, Hà Nội",
    description:
      "Chất liệu đặc trưng: Đất sét tinh tuyển kết hợp các bài men cổ truyền, nung ở nhiệt độ cao để tạo nên cốt gốm đanh chắc và sắc men sâu lắng.",
    verified: true,
    image: villagePotteryImage,
    alt: "Bình gốm men lam Bát Tràng đắp nổi rồng phượng tinh xảo",
    href: "/lang-nghe/GBT",
  },
  {
    id: "NLC",
    shortName: "NÓN LÁ CHUÔNG",
    fullName: "LÀNG NÓN LÁ CHUÔNG",
    location: "Phương Trung, Thanh Oai, Hà Nội",
    description:
      "Chất liệu mộc mạc: Lá lụa trắng, tre vót mảnh và chỉ cước trong suốt, đòi hỏi kỹ thuật đan nan đều đặn và mũi khâu tăm tắp.",
    verified: true,
    image: villageHatImage,
    alt: "Chiếc nón lá Chuông trắng tinh khôi đặt trên thúng nan tre",
    href: "/lang-nghe/NLC",
  },
];


export const joinBannerContent = {
  headingLines: [
    "Kết nối tinh hoa,",
    "lan xa làng nghề.",
    "Gia nhập Craft Folio ngay!",
  ],
  description:
    "Giữ hồn nghề xưa, mở đường vươn xa; chuẩn hóa hôm nay, nâng tầm ngày mai – để tinh hoa làng nghề Việt tiếp tục được gìn giữ, phát triển và tỏa sáng trên thị trường rộng lớn.",
  ctaLabel: "Đăng ký tham gia",
  ctaHref: "#register",
  imageAlt: "Chất liệu vải sợi thủ công tự nhiên mềm mại",
};
