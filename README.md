# Craft Folk

Craft Folk là giao diện web giới thiệu và kết nối các xưởng thủ công Việt Nam với khách hàng doanh nghiệp. Hiện repository chứa ứng dụng frontend React; chưa có mã backend hoặc API.

## Công nghệ

- React 18
- Vite 6
- CSS
- Font tiêu đề: 1FTV Blushing Rose
- Font nội dung: Be Vietnam Pro

## Yêu cầu

- Node.js 18 trở lên
- npm

## Chạy ứng dụng

Mở terminal tại thư mục `frontend`, cài các gói phụ thuộc và khởi động máy chủ phát triển:

```powershell
cd frontend
npm ci
npm run dev
```

Mở địa chỉ local do Vite hiển thị trong terminal.

## Build và xem bản production

```powershell
cd frontend
npm run build
npm run preview
```

Lệnh build tạo ứng dụng production trong `frontend/dist`.

## Tính năng giao diện

- Trang chủ với thanh điều hướng và banner làng nghề.
- Hiệu ứng parallax theo chuyển động chuột và cuộn trang, cùng hoạt ảnh xuất hiện cho nội dung banner.
- Bố cục thích ứng với màn hình nhỏ và hỗ trợ tùy chọn giảm chuyển động của hệ điều hành.
- Phần giới thiệu Craft Folk và footer thông tin liên hệ.

Các liên kết đăng nhập, đăng ký, tìm kiếm và đăng ký nhận tin hiện chỉ là thành phần giao diện; chưa kết nối dịch vụ backend.

## Tài nguyên

- Ảnh banner: `frontend/download/images/Trang chủ/header.png`
- Font tiêu đề: `frontend/download/fonts/1FTV-Blushing-Rose.ttf`
- Cấu hình font và kiểu giao diện: `frontend/src/styles.css`

Font Be Vietnam Pro được tải từ Google Fonts, vì vậy trình duyệt cần kết nối Internet để lấy font này.

## Cấu trúc chính

```text
frontend/
├── download/             # Hình ảnh và font
├── src/
│   ├── components/       # Các thành phần giao diện dùng lại
│   ├── App.jsx           # Bố cục trang chủ
│   ├── main.jsx          # Điểm khởi chạy React
│   └── styles.css        # Kiểu chữ, bố cục và hiệu ứng
├── index.html
└── package.json
```
