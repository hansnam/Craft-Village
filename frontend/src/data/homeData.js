import heroBgImage from "../../download/images/Trang chủ/header.png";
import productOneImage from "../../download/images/Trang chủ/sanphamnoibat1.png";
import productTwoImage from "../../download/images/Trang chủ/sanphamnoibat2.jpg";
import productThreeImage from "../../download/images/Trang chủ/sanphamnoibat3.png";
import productFourImage from "../../download/images/Trang chủ/sanphamnoibat4.jpeg";
import productFiveImage from "../../download/images/Trang chủ/sanphamnoibat5.jpeg";
import journeyImage from "../../download/images/Trang chủ/vechungtoi.jpg";
import villageBambooImage from "../../download/images/Trang chủ/langnghe1.jpg";
import villageSilkImage from "../../download/images/Trang chủ/langnghe2.jpg";
import villageFanImage from "../../download/images/Trang chủ/langnghe3.png";
import villageHatImage from "../../download/images/Trang chủ/langnghe4.jpeg";
import villagePotteryImage from "../../download/images/Trang chủ/langnghe5.jpeg";
import joinBannerImage from "../../download/images/Trang chủ/banner.jpg";
import craftFolioLogo from "../../download/images/Những thứ khác =_/logo.png";

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
    id: "prod-1",
    name: "Dấu Ấn Hà Thành",
    description: "Gửi nét đẹp Thủ đô qua từng cánh quạt.",
    image: productOneImage,
    alt: "Quạt thủ công Dấu Ấn Hà Thành trên nền Hồ Gươm",
    href: "#villages",
  },
  {
    id: "prod-2",
    name: "Vân Đăng Nan Tre",
    description: "Đan nét thủ công, thắp sáng không gian.",
    image: productTwoImage,
    imageVariant: "bamboo-lamp",
    alt: "Đèn thả trần Vân Đăng Nan Tre đan thủ công",
    href: "#villages",
  },
  {
    id: "prod-3",
    name: "Nón Hỷ Sắc",
    description: "Gửi trao nét đẹp, vun đắp duyên lành.",
    image: productThreeImage,
    alt: "Nón Hỷ Sắc thêu họa tiết chim hạc và chữ Hỷ",
    href: "#villages",
  },
  {
    id: "prod-4",
    name: "Áo Dài Lụa Hoa Văn",
    description: "Dáng lụa thanh tao, lưu giữ nét duyên truyền thống.",
    image: productFourImage,
    alt: "Áo dài lụa dệt hoa văn truyền thống",
    href: "#villages",
  },
  {
    id: "prod-5",
    name: "Bình Gốm Liên Hoa",
    description: "Đắp nổi tinh xảo, điểm sáng không gian sang trọng.",
    image: productFiveImage,
    alt: "Bình gốm nghệ thuật đắp nổi hoa thanh nhã",
    href: "#villages",
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
  ctaHref: "#villages",
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
    alt: "Tấm lụa tơ tằm mềm mại của làng nghề Nha Xá",
    href: "/lang-nghe/LNX",
  },
  {
    id: "QCS",
    shortName: "QUẠT CHÀNG SƠN",
    fullName: "LÀNG QUẠT CHÀNG SƠN",
    location: "Chàng Sơn, Thạch Thất, Hà Nội",
    description:
      "Sản phẩm thủ công: Quạt giấy, quạt vải với khung nan tre tinh xảo, kết hợp kỹ thuật truyền thống và nghệ thuật trang trí.",
    verified: true,
    image: villageFanImage,
    alt: "Quạt thủ công truyền thống làng Chàng Sơn",
    href: "/lang-nghe/QCS",
  },
  {
    id: "GBT",
    shortName: "GỐM BÁT TRÀNG",
    fullName: "LÀNG GỐM BÁT TRÀNG",
    location: "Bát Tràng, Gia Lâm, Hà Nội",
    description:
      "Chất liệu truyền thống: Đất sét qua bàn tay tạo hình, kỹ thuật tráng men và nung gốm trở thành những sản phẩm mang giá trị thẩm mỹ riêng.",
    verified: true,
    image: villagePotteryImage,
    alt: "Bình gốm hoa lam truyền thống làng Bát Tràng",
    href: "/lang-nghe/GBT",
  },
  {
    id: "NLC",
    shortName: "NÓN LÁ LÀNG CHUÔNG",
    fullName: "NÓN LÁ LÀNG CHUÔNG",
    location: "Làng Chuông, Thanh Oai, Hà Nội",
    description:
      "Nghề thủ công truyền thống: Lá cọ, khung vành cùng những đường khâu tỉ mỉ tạo nên chiếc nón lá mang nét duyên dáng Việt Nam.",
    verified: true,
    image: villageHatImage,
    alt: "Nón lá truyền thống làng Chuông Thanh Oai",
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
