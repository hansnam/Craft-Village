# Nội dung trích xuất từ Description.docx

Nguồn: `frontend/download/docs/Description.docx`. Bản trích xuất để tra cứu; không phải JSON dùng để import.

SHA-256 nguồn: `0d2fc52ded31d51cab60fdefd66e38e1ef60eefc22ea1051ab01161459f427ce`. Tổng 2280 đoạn XML, kể cả đoạn rỗng.

`Pxxxx` là số đoạn XML 1-based, không phải số trang Word. Giữ nguyên lỗi chính tả, trường rỗng, dấu ngoặc và ký tự `\n` của nguồn. PDF quyết định template/nội dung hiển thị cần có; không chép đè dữ liệu tốt hơn trong mock bằng ô trống của DOCX.

## P0001 — Phần đầu — Người dùng và schema Booking

```text
P0001: Người dùng:
P0002: Id
P0003: userName
P0004: password
P0005: fullName
P0006: phone
P0007: Email
P0008: 
P0009: Booking
P0010: id
P0011: coSoSanXuatId
P0012: customerId
P0013: mucDichDatLich
P0014: preferredDate
P0015: preferredTimeSlot
P0016: content
P0017: 
P0018: NGƯỜI DÙNG
P0019: [
P0020:   {
P0021:     "id": "USR001",
P0022:     "userName": "hatrang_pt",
P0023:     "password": "123456",
P0024:     "fullName": "Nguyễn Hà Trang",
P0025:     "phone": "0982345671",
P0026:     "email": "hatrang.nguyen@gmail.com"
P0027:   },
P0028:   {
P0029:     "id": "USR002",
P0030:     "userName": "minhkhoi_craft",
P0031:     "password": "123456",
P0032:     "fullName": "Trần Minh Khôi",
P0033:     "phone": "0912345892",
P0034:     "email": "khoi.tranminh@gmail.com"
P0035:   },
P0036:   {
P0037:     "id": "USR003",
P0038:     "userName": "baongoc_art",
P0039:     "password": "123456",
P0040:     "fullName": "Lê Bảo Ngọc",
P0041:     "phone": "0978123456",
P0042:     "email": "ngoc.lebao@gmail.com"
P0043:   }
P0044: 
```

## P0045 — 1. Làng nghề

```text
P0045: 1. Làng nghề
P0046: 1.1 Làng nghề: Nón lá chuông
P0047: "id": "NLC",
P0048: "name": "Nón lá chuông",
P0049: "headerImage": "/download/images/Trang làng nghề/Làng nón/header.png",
P0050: "story": {
P0051:      "template": "story-three-images",
P0052:      "title": "Chuyện làng nghề",
P0053:      "subtitle": "Nơi lưu giữ vẻ đẹp duyên dáng của chiếc nón lá Việt Nam",
P0054:      "images": [
P0055:       {
P0056:         "url": "/download/images/Trang làng nghề/Làng nón/chuyenlangnghe1.jpg",
P0057:         "alt": "Nón lá chuông"
P0058:       },
P0059:       {
P0060:         "url": "/download/images/Trang làng nghề/Làng nón/chuyenlangnghe2.jpeg",
P0061:         "alt": "Nón lá chuông 2"
P0062:       },
P0063:       {
P0064:         "url": "/download/images/Trang làng nghề/Làng nón/chuyenlangnghe3.jpg",
P0065:         "alt": "Nón lá chuông 3"
P0066:       }
P0067:     ],
P0068:      "paragraphs": [
P0069:       "Làng Chuông, thuộc xã Phương Trung, huyện Thanh Oai, Hà Nội, là làng nghề nổi tiếng với truyền thống làm nón lá lâu đời. Từ những nguyên liệu giản dị như lá cọ, tre và chỉ khâu, qua đôi bàn tay khéo léo của người thợ, từng chiếc nón được tạo nên với hình dáng cân đối, đường khâu tỉ mỉ và vẻ đẹp mộc mạc, thanh nhã.",
P0070:       "Trong đời sống hiện đại, nón lá Chuông không chỉ là vật dụng che nắng, che mưa mà còn mang giá trị văn hóa và thẩm mỹ. Bên cạnh những mẫu nón truyền thống, sản phẩm còn được phát triển đa dạng để phục vụ nhu cầu quà tặng, biểu diễn nghệ thuật, trang trí và các đơn hàng thiết kế riêng.",
P0071:       "Nghề làm nón lá Chuông không chỉ tạo ra sản phẩm phục vụ đời sống mà còn góp phần gìn giữ hình ảnh chiếc nón lá – biểu tượng gần gũi của văn hóa Việt Nam. Qua nhiều thế hệ, kinh nghiệm và kỹ thuật thủ công được truyền nối, thể hiện sự kiên trì, khéo léo của người thợ."
P0072:     ]
P0073:   }
P0074: }
P0075: 1.2. Làng nghề: Quạt chàng sơn
P0076: "id": "QCS",
P0077: "name": "Quạt Chàng Sơn",
P0078: "headerImage": "/download/images/Trang làng nghề/Làng quạt/header.png",
P0079: "story": {
P0080:      "template": "story-four-images",
P0081:      "title": "Chuyện làng nghề",
P0082:      "subtitle": "Chàng Sơn – nơi lưu giữ tinh hoa nghề làm quạt truyền thống Việt Nam.",
P0083:      "images": [
P0084:       {
P0085:         "url": "/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 1.jpg",
P0086:         "alt": "Quạt Chàng Sơn 1"
P0087:       },
P0088:       {
P0089:         "url": "/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 2.jpg",
P0090:         "alt": "Quạt Chàng Sơn 2"
P0091:       },
P0092:       {
P0093:         "url": "/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 3.jpeg",
P0094:         "alt": "Quạt Chàng Sơn 3"
P0095:       },
P0096:       {
P0097:         "url": "/download/images/Trang làng nghề/Làng quạt/chuyện làng nghề 4.jpeg",
P0098:         "alt": "Quạt Chàng Sơn 4"
P0099:       }
P0100:     ],
P0101:      "paragraphs": [
P0102:       "Chàng Sơn, thuộc huyện Thạch Thất, Hà Nội, là địa phương gắn liền với nghề làm quạt truyền thống. Qua bàn tay khéo léo của người thợ, những nan tre và lớp giấy hoặc vải được kết hợp thành những chiếc quạt vừa có công năng sử dụng, vừa mang giá trị thẩm mỹ và văn hóa.",
P0103:       "Trong đời sống hiện đại, quạt thủ công tiếp tục được phát triển với nhiều mẫu mã, chất liệu và cách trang trí khác nhau, phù hợp cho nhu cầu sử dụng, quà tặng, trang trí và các đơn hàng thiết kế riêng.",
P0104:       "Nghề làm quạt không chỉ tạo ra sản phẩm phục vụ đời sống mà còn lưu giữ kinh nghiệm thủ công được truyền qua nhiều thế hệ. Việc phát triển thị trường và mở rộng hợp tác là cơ hội để sản phẩm làng nghề tiếp tục hiện diện trong đời sống đương đại."
P0105:     ]
P0106:   }
P0107: }
P0108: 1.3. Làng nghề: Mây tre đan
P0109: "id": "MTD",
P0110: "name": "Mây tre đan",
P0111: "headerImage": "/images/Trang_lang_nghe/May_tre_dan/header.png",
P0112: "story": {
P0113:      "template": "story-two-images",
P0114:      "title": "Chuyện làng nghề",
P0115:      "subtitle": "Phú Vinh – Nơi những sợi mây, nan tre kết thành tinh hoa thủ công Việt.",
P0116:      "images": [
P0117:       {
P0118:         "url": "/download/images/Trang làng nghề/Mây Tre Đan/chuyện làng nghề 1.jpg",
P0119:         "alt": "Nghệ nhân đan mây tre Phú Vinh"
P0120:       },
P0121:       {
P0122:         "url": "/download/images/Trang làng nghề/Mây Tre Đan/chuyện làng nghề 1.jpg",
P0123:         "alt": "Sản phẩm mây tre đan tinh xảo"
P0124:       }
P0125:     ],
P0126:      "paragraphs": [
P0127:       "Phú Vinh, thuộc xã Phú Nghĩa, huyện Chương Mỹ, Hà Nội, là làng nghề nổi tiếng với nghề mây tre đan truyền thống. Qua đôi bàn tay khéo léo của người thợ, những sợi mây, nan tre mộc mạc được đan kết thành nhiều sản phẩm tinh xảo, từ đồ gia dụng quen thuộc đến những món đồ trang trí mang tính nghệ thuật.",
P0128:       "Không chỉ đòi hỏi sự khéo léo, nghề mây tre đan còn cần sự kiên nhẫn và khả năng sáng tạo trong từng công đoạn. Từ lựa chọn nguyên liệu, xử lý nan đến tạo hình và hoàn thiện sản phẩm, mỗi bước đều góp phần tạo nên vẻ đẹp riêng của đồ thủ công Phú Vinh.",
P0129:       "Trong đời sống hiện đại, sản phẩm mây tre đan ngày càng được ứng dụng trong trang trí nội thất, không gian nghỉ dưỡng và các công trình dịch vụ. Sự kết hợp giữa kỹ thuật truyền thống và tư duy thiết kế mới mở ra cơ hội để sản phẩm làng nghề tiếp cận nhiều thị trường hơn."
P0130:     ]
P0131:   }
P0132: }
P0133: 
P0134: 1.4. Làng nghề Gốm bát tràng
P0135: "id": "GBT",
P0136: "name": "Gốm Bát Tràng",
P0137: "headerImage": "/download/images/Trang làng nghề/Làng gốm/header.png",
P0138: "story": {
P0139:      "template": "story-four-images",
P0140:      "title": "Chuyện làng nghề",
P0141:      "subtitle": "Bát Tràng – Nơi đất và lửa tạo nên tinh hoa gốm Việt.",
P0142:      "images": [
P0143:       {
P0144:         "url": "/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 1.jpg",
P0145:         "alt": "Gốm Bát Tràng 1"
P0146:       },
P0147:       {
P0148:         "url": "/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 2.jpeg",
P0149:         "alt": "Gốm Bát Tràng 2"
P0150:       },
P0151:       {
P0152:         "url": "/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 3.jpg",
P0153:         "alt": "Gốm Bát Tràng 3"
P0154:       },
P0155:       {
P0156:         "url": "/download/images/Trang làng nghề/Làng gốm/chuyện làng nghề 4.jpeg",
P0157:         "alt": "Gốm Bát Tràng 4"
P0158:       }
P0159:     ],
P0160:      "paragraphs": [
P0161:       "Bát Tràng, thuộc khu vực Gia Lâm, Hà Nội, là làng nghề gốm sứ nổi tiếng với lịch sử phát triển lâu đời. Từ nguồn nguyên liệu đất sét, qua bàn tay khéo léo và kinh nghiệm của người thợ, những sản phẩm gốm được tạo hình, trang trí và nung ở nhiệt độ cao để trở thành các vật dụng và tác phẩm mang giá trị thẩm mỹ.",
P0162:       "Ngày nay, gốm Bát Tràng không chỉ hiện diện trong những vật dụng sinh hoạt quen thuộc mà còn được ứng dụng trong trang trí nội thất, kiến trúc, quà tặng và không gian dịch vụ. Bên cạnh việc duy trì các dòng gốm truyền thống, nhiều cơ sở còn phát triển mẫu mã mới để đáp ứng nhu cầu đa dạng của thị trường.",
P0163:       "Việc kết hợp kỹ thuật thủ công với tư duy thiết kế hiện đại giúp sản phẩm gốm tiếp tục phát triển, đồng thời góp phần gìn giữ và lan tỏa giá trị của nghề truyền thống Việt Nam."
P0164:     ]
P0165:   }
P0166: }
P0167: 1.5. Làng nghề: Lụa nha xá
P0168: "id": "LNX",
P0169: "name": "Lụa Nha Xá",
P0170: "headerImage": "/download/images/Trang làng nghề/Làng lụa/header.png",
P0171: "story": {
P0172:      "template": "story-two-images",
P0173:      "title": "Chuyện làng nghề",
P0174:      "subtitle": "Nha Xá – Nơi lưu giữ vẻ đẹp mềm mại của nghề dệt lụa truyền thống.",
P0175:      "images": [
P0176:       {
P0177:         "url": "/download/images/Trang làng nghề/Làng lụa/chuyện làng nghề 1.jpg",
P0178:         "alt": "Lụa Nha Xá 1"
P0179:       },
P0180:       {
P0181:         "url": "/download/images/Trang làng nghề/Làng lụa/chuyện làng nghề 2.jpg",
P0182:         "alt": "Lụa Nha Xá 2"
P0183:       }
P0184:     ],
P0185:      "paragraphs": [
P0186:       "Nha Xá, thuộc xã Mộc Nam, tỉnh Ninh Bình, là làng nghề dệt lụa có lịch sử lâu đời. Gắn bó với nghề dệt qua nhiều thế hệ, người dân nơi đây đã tạo nên những tấm lụa mang vẻ đẹp mềm mại, tinh tế, thể hiện sự khéo léo trong kỹ thuật dệt và kinh nghiệm xử lý tơ sợi.",
P0187:       "Trong đời sống hiện đại, lụa Nha Xá không chỉ được sử dụng để may mặc mà còn có thể phát triển thành nhiều dòng sản phẩm phục vụ nhu cầu thời trang và quà tặng. Việc đa dạng hóa màu sắc, hoa văn và kiểu dáng giúp sản phẩm truyền thống có thêm cơ hội tiếp cận khách hàng mới.",
P0188:       "Nghề dệt lụa không đơn thuần là hoạt động sản xuất mà còn gắn liền với ký ức và bản sắc của cộng đồng địa phương. Giữa sự phát triển của ngành dệt may hiện đại, việc gìn giữ kỹ thuật truyền thống và nâng cao giá trị sản phẩm là điều cần thiết để lụa Nha Xá tiếp tục được biết đến rộng rãi."
P0189:     ]
P0190:   }
P0191: }
```

## P0192 — 2. Quy trình sản xuất

```text
P0192: 2. Quy trình sản xuất
P0193: 2.1. Quy trình sản xuất Nón lá chuông
P0194: {
P0195:   "id": "NLC_QTSX01",
P0196:   "langNgheId": "NLC",
P0197:   "name": "Công đoạn rẽ lá và là lá",
P0198:   "step": 1,
P0199:   "description": "Lá khi đã phơi khô sẽ được vò trong cát và tước nhỏ hay còn gọi là rẽ lá. Tiếp đến là công đoạn đem lá đi là phẳng. Nếu chỉ nhìn thôi, ta tưởng rằng rất đơn giản nhưng thực ra khâu này quyết định rất nhiều đến chất lượng nón. Dụng cụ là lá một chiếc lưỡi cày được nung nóng để miết lá. Miết làm sao cho tấm lá thật phẳng, nhẵn mà không bị giòn, bị rách và quan trọng là phải canh được độ nóng sao cho lá không bị cháy và không bị non.",
P0200:   "image": {
P0201:     "url": "/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 1.jpg",
P0202:     "alt": "Công đoạn rẽ lá và là lá"
P0203:   }
P0204: }
P0205: {
P0206:   "id": "NLC_QTSX02",
P0207:   "langNgheId": "NLC",
P0208:   "name": "Làm khung nón",
P0209:   "step": 2,
P0210:   "description": "Vức vòng hay còn gọi là làm khung nón cũng là một công đoạn quan trọng. Vòng nón được làm bằng cật nứa vót nhỏ đều, khi nối bắt buộc phải tròn và không có vết. Khác với các loại nón ở nơi khác, nón Làng Chuông chỉ có 16 vòng giúp cho nón có độ bền chắc nhưng vẫn giữ được sự mềm mại.",
P0211:   "image": {
P0212:     "url": "/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 2.jpg",
P0213:     "alt": "Làm khung nón"
P0214:   }
P0215: }
P0216: {
P0217:   "id": "NLC_QTSX03",
P0218:   "langNgheId": "NLC",
P0219:   "name": "Dán nón",
P0220:   "step": 3,
P0221:   "description": "Vức vòng hay còn gọi là làm khung nón cũng là một công đoạn quan trọng. Vòng nón được làm bằng cật nứa vót nhỏ đều, khi nối bắt buộc phải tròn và không có vết. Khác với các loại nón ở nơi khác, nón Làng Chuông chỉ có 16 vòng giúp cho nón có độ bền chắc nhưng vẫn giữ được sự mềm mại.",
P0222:   "image": {
P0223:     "url": "/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 3.jpg",
P0224:     "alt": "Dán nón"
P0225:   }
P0226: }
P0227: {
P0228:   "id": "NLC_QTSX04",
P0229:   "langNgheId": "NLC",
P0230:   "name": "Khâu nón (thắt nón)",
P0231:   "step": 4,
P0232:   "description": "Khâu nón được coi là công đoạn rất khó đòi hỏi sự khéo léo của mỗi người bởi nếu không khéo lá sẽ bị rách. Điều quan trọng nữa là mũi khâu yêu cầu phải ngắn, lỗ nhỏ thì chiếc nón mới tròn, khít, mịn từ mép lá đến đường khâu. Khâu nón được coi là công đoạn rất khó đòi hỏi sự khéo léo của mỗi người bởi nếu không khéo lá sẽ bị rách. Điều quan trọng nữa là mũi khâu yêu cầu phải ngắn, lỗ nhỏ thì chiếc nón mới tròn, khít, mịn từ mép lá đến đường khâu.",
P0233:   "image": {
P0234:     "url": "/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 4.jpg",
P0235:     "alt": "Khâu nón (thắt nón)"
P0236:   }
P0237: }
P0238: {
P0239:   "id": "NLC_QTSX05",
P0240:   "langNgheId": "NLC",
P0241:   "name": "Nức nón",
P0242:   "step": 5,
P0243:   "description": "Công đoạn cạp nón hay còn gọi là nức nón là công đoạn hoàn tất việc khâu.",
P0244:   "image": {
P0245:     "url": "/download/images/Trang làng nghề/Làng nón/quy trình sản xuất 5.jpg",
P0246:     "alt": "Nức nón"
P0247:   }
P0248: }
P0249: 2.2. Quy trình sản xuất Làng Quạt chàng sơn
P0250: {
P0251:   "id": "QCS_QTSX01",
P0252:   "langNgheId": "QCS",
P0253:   "name": "Chọn vật liệu: nan, giấy / vải, keo",
P0254:   "step": 1,
P0255:   "description": "Nan cần đạt độ dẻo và chắc; giấy / vải chọn theo mục đích (dùng hàng ngày, quà tặng, trang trí). Đây là bước quyết định “xương sống của quạt”",
P0256:   "image": {
P0257:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 1.jpg",
P0258:     "alt": "Chọn vật liệu: nan, giấy / vải, keo"
P0259:   }
P0260: }
P0261: {
P0262:   "id": "QCS_QTSX02",
P0263:   "langNgheId": "QCS",
P0264:   "name": "Làm nan: chuốt – mài – tạo độ đều",
P0265:   "step": 2,
P0266:   "description": "Nan được xử lý để đều tay, tránh cong vênh, đảm bảo khi xếp lại quạt không bị cấn. Các mép nan được mài mịn để cầm êm.",
P0267:   "image": {
P0268:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 2.jpg",
P0269:     "alt": "Làm nan: chuốt – mài – tạo độ đều"
P0270:   }
P0271: }
P0272: {
P0273:   "id": "QCS_QTSX03",
P0274:   "langNgheId": "QCS",
P0275:   "name": "Lắp khung: xếp nan – cố định trục",
P0276:   "step": 3,
P0277:   "description": "Đây là bước “cân” quạt: nan đều, trục chắc, đóng mở trơn. Nếu lệch, mặt quạt sẽ không phẳng.",
P0278:   "image": {
P0279:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 4.jpg",
P0280:     "alt": "Lắp khung: xếp nan – cố định trục"
P0281:   }
P0282: }
P0283: {
P0284:   "id": "QCS_QTSX04",
P0285:   "langNgheId": "QCS",
P0286:   "name": "Căng/dán mặt: canh phẳng – canh độ căng",
P0287:   "step": 4,
P0288:   "description": "Mặt quạt phải phẳng và bám tốt lên nan. Người thợ canh keo vừa đủ, canh độ khô chuẩn để mặt không nhăn, không phồng.",
P0289:   "image": {
P0290:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 3.jpg",
P0291:     "alt": "Căng/dán mặt: canh phẳng – canh độ căng"
P0292:   }
P0293: }
P0294: {
P0295:   "id": "QCS_QTSX05",
P0296:   "langNgheId": "QCS",
P0297:   "name": "Hoàn thiện: cắt biên – ép – trang trí",
P0298:   "step": 5,
P0299:   "description": "Cắt biên gọn, ép phẳng, rồi đến bước trang trí (vẽ tranh, in hoạ tiết, viết chữ…). Công đoạn này tạo nên “thần thái” riêng của từng chiếc quạt.",
P0300:   "image": {
P0301:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 5.jpeg",
P0302:     "alt": "Hoàn thiện: cắt biên – ép – trang trí"
P0303:   }
P0304: }
P0305: 2.3. Quy trình sản xuất Làng Mây tre đan
P0306: {
P0307:   "id": "MTD_QTSX01",
P0308:   "langNgheId": "MTD",
P0309:   "name": "Chọn nguyên liệu mây tre",
P0310:   "step": 1,
P0311:   "description": "Bước chọn nguyên liệu có lẽ là bước quan trọng nhất trong quy trình sản xuất sản phẩm mây tre bởi nó quyết định chất lượng của một sản phẩm. Loại tre được cho là tốt nhất phải là loại tre không non, không già, mọc thẳng, có độ cứng cao.",
P0312:   "image": {
P0313:     "url": "/images/Trang làng nghề/Mây tre đan/quy trình sản xuất 1.jpg",
P0314:     "alt": "Chọn nguyên liệu mây tre đan chất lượng"
P0315:   }
P0316: }
P0317: {
P0318:   "id": "MTD-QTSX02",
P0319:   "langNgheId": "MTD",
P0320:   "name": "Sơ chế nguyên liệu",
P0321:   "step": 2,
P0322:   "description": "Bước tiếp theo trong quy trình sản xuất sản phẩm từ mây tre đó là sơ chế nguyên liệu. Nếu quy trình này xử lý không cẩn thận sẽ dẫn đến đồ nội thất sau khi sử dụng một thời gian sẽ bị mối mọt, ẩm mốc và làm giảm tuổi thọ của sản phẩm.",
P0323:   "image": {
P0324:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 2.jpg",
P0325:     "alt": "Sơ chế nguyên liệu"
P0326:   }
P0327: }
P0328: {
P0329:   "id": "MTD-QTSX03",
P0330:   "langNgheId": "MTD",
P0331:   "name": "Xử lý nguyên liệu",
P0332:   "step": 3,
P0333:   "description": "Đối với nguyên liệu tre: Tre được cạo vỏ, đánh bóng bằng giấy ráp rồi hun khói bằng rơm hoặc lá tre để tạo màu nâu tây hoặc nâu đen, làm khô và chống cong vênh. Khi nguội, tre được uốn thẳng. Đối với nguyên liệu mây: Mây được phơi sấy để làm khô và tạo màu. Công đoạn này đòi hỏi kinh nghiệm vì quá nhiều hoặc ít khói, gặp mưa, nắng hay phơi sấy chưa đạt đều ảnh hưởng đến màu sắc, độ óng mềm và vẻ đẹp tự nhiên của sợi mây.",
P0334:   "image": {
P0335:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 3.jpg",
P0336:     "alt": "Xử lý nguyên liệu"
P0337:   }
P0338: }
P0339: {
P0340:   "id": "MTD-QTSX04",
P0341:   "langNgheId": "MTD",
P0342:   "name": "Chẻ sợi",
P0343:   "step": 4,
P0344:   "description": "Đều quan trọng và tốn nhiều thời gian nhất trong quy trình sản xuất sản phẩm mây tre đó là chẻ sợ. Dù là mây hay tre thì đều cần chẻ sợi thì mới có thể sử dụng để đan được. Việc làm này sẽ tạo cho nguyên liệu một độ dẻo dai mới có thể thỏa sức làm nên những sản phẩm khác nhau.",
P0345:   "image": {
P0346:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 4.jpg",
P0347:     "alt": "Chẻ sợi"
P0348:   }
P0349: }
P0350: {
P0351:   "id": "MTD-QTSX05",
P0352:   "langNgheId": "MTD",
P0353:   "name": "Thi công chế tác sản phẩm",
P0354:   "step": 5,
P0355:   "description": "Đây cũng chính là nước cuối cùng trong quy trình sản xuất sản phẩm mây tre truyền thống. Sau khi đan xong, sản phẩm có thể được nhúng keo, sơn màu, phủ bóng bề mặt, cắt tỉa lại sao cho hoàn chỉnh nhất trước khi đóng gói và vận chuyển đến tay khách hàng. Các nguyên liệu sau khi được xử lý hoàn tất, sẽ được đan và tạo hình bởi bàn tay tài hoa, khéo léo của những người thợ thủ công lành nghề để trở thành những sản phẩm đẹp mắt và cuốn hút.",
P0356:   "image": {
P0357:     "url": "/download/images/Trang làng nghề/Làng quạt/quy trình sản xuất 5.jpg",
P0358:     "alt": "Thi công chế tác sản phẩm"
P0359:   }
P0360: }
P0361: 2.4. Quy trình sản xuất Làng gốm bát tràng
P0362: {
P0363:   "id": "GBT_QTSX01",
P0364:   "langNgheId": "GBT",
P0365:   "name": "Chọn đất và lọc đất",
P0366:   "step": 1,
P0367:   "description": "Nguyên liệu chính để làm gốm sứ Bát Tràng là đất sét (đất thó). Loại đất sét được chọn phải đạt các tiêu chí cao về chất lượng: đất sét có màu trắng, độ dẻo tốt, hạt mịn và khó tan trong nước. Sau khi chọn đất, công đoạn lọc đất được thực hiện để loại bỏ các tạp chất có trong đất. Quá trình xử lý giúp đất đạt được độ tinh khiết để đảm bảo sản phẩm gốm có độ bền cao, màu sắc đẹp và không bị nứt vỡ khi nung.",
P0368:   "image": {
P0369:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 1.jpg",
P0370:     "alt": "Chọn đất và lọc đất"
P0371:   }
P0372: }
P0373: {
P0374:   "id": "GBT_QTSX02",
P0375:   "langNgheId": "GBT",
P0376:   "name": "Tạo hình sản phẩm",
P0377:   "step": 2,
P0378:   "description": "Tạo hình gốm Bát Tràng gồm 3 phương pháp chính: Vuốt tay (Người thợ tạo hình đất trên bàn xoay thủ công, đòi hỏi kỹ năng và sự tỉ mỉ), Đổ rót vào khuôn (Rót đất sét loãng vào khuôn thạch cao, giúp tạo hình nhanh và đồng đều), In khuôn (Ép đất sét vào khuôn để tạo hình, hoa văn, tiết kiệm nguyên liệu và thời gian).",
P0379:   "image": {
P0380:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 2.jpg",
P0381:     "alt": "Tạo hình sản phẩm"
P0382:   }
P0383: }
P0384: {
P0385:   "id": "GBT_QTSX03",
P0386:   "langNgheId": "GBT",
P0387:   "name": "Sơ nung",
P0388:   "step": 3,
P0389:   "description": "Sau khi tạo hình, sản phẩm trải qua công đoạn sơ nung nhằm làm khô gốm. Nhiệt độ lò nung sẽ được điều chỉnh tăng dần để hơi nước trong đất bốc hơi, giúp sản phẩm khô từ từ mà không bị nứt vỡ.",
P0390:   "image": {
P0391:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 3.jpg",
P0392:     "alt": "Sơ nung"
P0393:   }
P0394: }
P0395: {
P0396:   "id": "GBT_QTSX04",
P0397:   "langNgheId": "GBT",
P0398:   "name": "Sửa hàng phơ",
P0399:   "step": 4,
P0400:   "description": "Tiếp đến, sản phẩm sẽ được đưa lên bàn xoay để chuốt lại. Thợ gốm sẽ cắt gọt những chi tiết thừa và sửa chữa những khuyết điểm nhỏ. Đối với các sản phẩm như ấm chén, ly cốc,… lúc này sẽ tiến hành chắp nối các bộ phận lại với nhau, ví dụ như gắn vòi ấm, quai cầm hay nắp đậy.",
P0401:   "image": {
P0402:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 4.jpg",
P0403:     "alt": "Sửa hàng phơ"
P0404:   }
P0405: }
P0406: {
P0407:   "id": "GBT_QTSX05",
P0408:   "langNgheId": "GBT",
P0409:   "name": "Tráng men",
P0410:   "step": 5,
P0411:   "description": "Sau khi sửa hoàn thiện, sản phẩm mộc được làm sạch bằng chổi lông rồi tráng men bằng các kỹ thuật: Phun men (Tạo lớp men mỏng, đều bằng súng phun), Nhúng men (Nhúng sản phẩm vào dung dịch men), Láng men (Dùng cọ quét men thủ công), Kìm men (Nhúng và xoay nhẹ để men phủ đều bề mặt), Dội men (Dội men lên sản phẩm kích thước lớn), Đúc men (Đổ dung dịch men vào khuôn chứa sản phẩm).",
P0412:   "image": {
P0413:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 5.jpg",
P0414:     "alt": "Tráng men"
P0415:   }
P0416: }
P0417: {
P0418:   "id": "GBT_QTSX06",
P0419:   "langNgheId": "GBT",
P0420:   "name": "Trang trí sản phẩm",
P0421:   "step": 6,
P0422:   "description": "Trang trí gốm Bát Tràng giúp tạo vẻ đẹp và nét riêng cho từng sản phẩm, với 5 kỹ thuật chính: Vẽ tay (Vẽ họa tiết trực tiếp lên sản phẩm bằng bút lông), Đắp nổi (Đắp họa tiết nổi, tạo hiệu ứng 3D), Vẽ vàng (Dùng vàng 24K vẽ nét trang trí, tạo điểm nhấn sang trọng), Dát vàng (Phủ vàng 24K lên các họa tiết đắp nổi), Chạm khắc (Khắc họa tiết lên bề mặt, tạo nét tinh xảo).",
P0423:   "image": {
P0424:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 6.jpg",
P0425:     "alt": "Trang trí sản phẩm"
P0426:   }
P0427: }
P0428: {
P0429:   "id": "GBT_QTSX07",
P0430:   "langNgheId": "GBT",
P0431:   "name": "Nung",
P0432:   "step": 7,
P0433:   "description": "Sau khi hoàn thiện các bước trang trí, sản phẩm sẽ được đưa vào lò nung ở nhiệt độ cao từ 1000 đến 1200 độ C, tùy thuộc vào từng dòng sản phẩm. Gốm sứ Bát Tràng được đưa vào lò gas nung ở nhiệt độ cao. Hiện nay, các lò nung tại Bát Tràng thường sử dụng lò gas để điều chỉnh nhiệt độ chính xác, đảm bảo sản phẩm có độ bền và màu sắc đồng đều.",
P0434:   "image": {
P0435:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 7.jpg",
P0436:     "alt": "Nung"
P0437:   }
P0438: }
P0439: {
P0440:   "id": "GBT_QTSX08",
P0441:   "langNgheId": "GBT",
P0442:   "name": "Lọc hàng (kiểm tra chất lượng)",
P0443:   "step": 8,
P0444:   "description": "Cuối cùng, sau khi nung xong, sản phẩm sẽ được làm nguội từ từ. Các thợ gốm có kinh nghiệm sẽ tiến hành kiểm tra chất lượng từng sản phẩm. Những sản phẩm không đạt tiêu chuẩn, có lỗi nhỏ sẽ được gửi về xưởng để sửa chữa, còn những sản phẩm bị lỗi nặng sẽ bị loại bỏ. Chỉ những sản phẩm hoàn hảo mới được xuất xưởng và đến tay khách hàng.",
P0445:   "image": {
P0446:     "url": "/download/images/Trang làng nghề/Làng gốm/quy trình sản xuất 8.jpg",
P0447:     "alt": "Lọc hàng (kiểm tra chất lượng)"
P0448:   }
P0449: }
P0450: 2.5. Quy trình sản xuất Làng Lụa nha xá
P0451: {
P0452:   "id": "LNX_QTSX01",
P0453:   "langNgheId": "LNX",
P0454:   "name": "Nuôi tằm – Khởi đầu từ thiên nhiên",
P0455:   "step": 1,
P0456:   "description": "Tằm được nuôi bằng lá dâu tươi, chăm sóc kỹ lưỡng trong khoảng 25–30 ngày cho đến khi nhả tơ tạo kén. Chất lượng chăm sóc ảnh hưởng trực tiếp đến độ mịn, dài và đồng đều của sợi tơ.",
P0457:   "image": {
P0458:     "url": "/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 1.jpg",
P0459:     "alt": "Nuôi tằm – Khởi đầu từ thiên nhiên"
P0460:   }
P0461: }
P0462: {
P0463:   "id": "LNX_QTSX02",
P0464:   "langNgheId": "LNX",
P0465:   "name": "Thu hoạch kén – Tuyển chọn nguyên liệu",
P0466:   "step": 2,
P0467:   "description": "Kén tằm được thu hoạch và tuyển chọn cẩn thận dựa trên kích thước, độ bóng và độ đồng đều. Những chiếc kén đạt chuẩn là nền tảng tạo nên sợi lụa mềm mại, óng ánh và bền đẹp.",
P0468:   "image": {
P0469:     "url": "/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 2.jpeg",
P0470:     "alt": "Thu hoạch kén – Tuyển chọn nguyên liệu"
P0471:   }
P0472: }
P0473: {
P0474:   "id": "LNX_QTSX03",
P0475:   "langNgheId": "LNX",
P0476:   "name": "Nấu kén và kéo sợi – Tinh tế trong từng đường tơ",
P0477:   "step": 3,
P0478:   "description": "Kén được nấu trong nước nóng để làm mềm lớp keo, giúp người thợ dễ dàng rút tơ và kéo thành sợi. Công đoạn này đòi hỏi sự khéo léo, kinh nghiệm để sợi tơ mịn, đều và hạn chế đứt gãy.",
P0479:   "image": {
P0480:     "url": "/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 3.jpg",
P0481:     "alt": "Nấu kén và kéo sợi – Tinh tế trong từng đường tơ"
P0482:   }
P0483: }
P0484: {
P0485:   "id": "LNX_QTSX04",
P0486:   "langNgheId": "LNX",
P0487:   "name": "Dệt lụa – Nghệ thuật thủ công",
P0488:   "step": 4,
P0489:   "description": "Sợi tơ được đưa lên khung dệt truyền thống hoặc máy dệt, đan xen tỉ mỉ để tạo thành tấm lụa. Tay nghề người thợ quyết định độ mịn, độ rủ và vẻ óng ả đặc trưng của từng loại lụa.",
P0490:   "image": {
P0491:     "url": "/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 4.jpeg",
P0492:     "alt": "Dệt lụa – Nghệ thuật thủ công"
P0493:   }
P0494: }
P0495: {
P0496:   "id": "LNX_QTSX05",
P0497:   "langNgheId": "LNX",
P0498:   "name": "Nhuộm màu và hoàn thiện",
P0499:   "step": 5,
P0500:   "description": "Lụa được nhuộm màu theo yêu cầu, sau đó giặt sạch, làm khô và kiểm tra chất lượng. Công đoạn hoàn thiện giúp vải giữ được màu sắc bền đẹp, độ mềm mại và thoáng mát trước khi đến tay khách hàng.",
P0501:   "image": {
P0502:     "url": "/download/images/Trang làng nghề/Làng lụa/quy trình sản xuất 5.jpg",
P0503:     "alt": "Nhuộm màu và hoàn thiện"
P0504:   }
P0505: }
```

## P0506 — 3. Cơ sở sản xuất: 

```text
P0506: 3. Cơ sở sản xuất: 
P0507: 3.1. Cơ sở sản xuất của làng nghề: Nón lá chuông
P0508: 3.1.1. NÓN LÁ HẢI YẾN
P0509: {
P0510:   "id": "NLC_NLHY",
P0511:   "langNgheId": "NLC",
P0512:   "name": "NÓN LÁ HẢI YẾN",
P0513:   "description": "Cơ sở làm nón thủ công với khoảng 20 năm kinh nghiệm, gìn giữ kỹ thuật làm nón truyền thống và không ngừng mở rộng mẫu mã theo nhu cầu thị trường.",
P0514:   "sanPhamDescription": "Nón lá là dòng sản phẩm phù hợp với khách hàng có nhu cầu tìm kiếm sản phẩm thủ công truyền thống phục vụ trang trí, làm quà tặng, quảng bá hình ảnh hoặc sử dụng trong các hoạt động văn hóa, sự kiện và biểu diễn nghệ thuật.",
P0515:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0516:   "tenChuXuong": "Nguyễn Thị Yến",
P0517:   "email": null,
P0518:   "diaChi": "Thôn Chung Chính, xã Phương Trung, huyện Thanh Oai, Hà Nội",
P0519:   "soDienThoai": "0379385594",
P0520:   "storyTitle": "Giữ nghề nón, mở lối sáng tạo",
P0521:   "storyContent": "Với khoảng 20 năm kinh nghiệm, Nón lá Hải Yến tiếp tục duy trì nghề làm nón truyền thống, đồng thời mở rộng sản phẩm theo nhu cầu khách hàng. Bên cạnh những mẫu nón cổ, cơ sở còn nhận làm nón quai thao và đèn trang trí, linh hoạt điều chỉnh kích thước, kiểu dáng và độ cầu kỳ. Sự kết hợp giữa tay nghề thủ công và khả năng cá nhân hóa giúp sản phẩm phù hợp với nhiều mục đích sử dụng khác nhau.",
P0522:   "images": {
P0523:     "header": "\download\images\Nón lá Hải Yến\header.png",
P0524:     "consultation": "download\images\Nón lá Hải Yến\tuvan.png"
P0525:     "imageStory": “\download\images\Nón lá Hải Yến\cauchuyen.jpg”,
P0526:   "dienTichXuong": {
P0527:     "value": 100,
P0528:     "unit": "m²"
P0529:   },
P0530:   "kinhNghiem": {
P0531:     "value": 20,
P0532:     "unit": "năm"
P0533:   },
P0534:   "soLuongToiThieu": {
P0535:     "value": 1,
P0536:     "unit": "sản phẩm"
P0537:   },
P0538:   "thoiGianGiaoHang": {
P0539:     "from": 5,
P0540:     "to": 7,
P0541:     "unit": "ngày"
P0542:   },
P0543:   "hoTroThietKeLamMau": {
P0544:     "value": 100,
P0545:     "unit": "%"
P0546:   }
P0547: }
P0548: 3.1.2. HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG
P0549: {\n  "id": "NLC_NLTTH",
P0550:   "langNgheId": "NLC",
P0551:   "name": "HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG",
P0552:   "description": "HTX cung cấp đa dạng các dòng nón thủ công của làng Chuông, phục vụ nhu cầu sử dụng truyền thống, quà tặng, du lịch, trang trí và xuất khẩu.",
P0553:   "sanPhamDescription": "Nón lá là dòng sản phẩm phù hợp với khách hàng có nhu cầu tìm kiếm sản phẩm thủ công truyền thống phục vụ trang trí, làm quà tặng, quảng bá hình ảnh hoặc sử dụng trong các hoạt động văn hóa, sự kiện và biểu diễn nghệ thuật.",
P0554:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0555:   "tenChuXuong": "Tạ Thu Hương",
P0556:   "email": null,
P0557:   "diaChi": "Số 26 Cầu Chuông, xã Thanh Oai, Hà Nội.",
P0558:   "soDienThoai": "0912258774",
P0559:   "storyTitle": "Gìn giữ di sản song hành với đổi mới",
P0560:   "storyContent": "Nghệ nhân Tạ Thu Hương đã có nhiều năm gắn bó với nghề làm nón tại làng Chuông. Trước nguy cơ nghề truyền thống mai một, bà thành lập HTX Mây Tre Nón Lá Tạ Thu Hương, kết nối các hộ sản xuất và chủ động tìm kiếm thị trường tiêu thụ. Không chỉ duy trì các mẫu nón truyền thống, HTX còn cải tiến kiểu dáng, phát triển sản phẩm phục vụ du lịch và thị trường quốc tế. Hành trình của HTX cho thấy việc gìn giữ di sản cần song hành với đổi mới sản phẩm và mở rộng đầu ra cho người làm nghề.",
P0561: "images": {
P0562:      "header":  “\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\header.png”,
P0563:      "consultation": “\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\tuvan.png”
P0564:      "imageStory": “\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\cauchuyen.png”
P0565: },
P0566:   "dienTichXuong": {\n    "value": 200,\n    "unit": "m²"\n  },
P0567:   "kinhNghiem": {\n    "value": 50,\n    "unit": "năm"\n  },
P0568:   "soLuongToiThieu": {\n    "value": 1,\n    "unit": "sản phẩm"\n  },
P0569:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 20,\n    "unit": "ngày"\n  },
P0570:   "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0571: 3.1.3. HOA NÓN LÀNG CHUÔNG
P0572: {\n  "id": "NLC_HNLC",
P0573:   "langNgheId": "NLC",
P0574:   "name": "HOA NÓN LÀNG CHUÔNG",
P0575:   "description": "Nơi gìn giữ và phát triển nghề làm nón truyền thống của làng Chuông, Thanh Oai, Hà Nội.",
P0576:   "sanPhamDescription": "Nón lá là dòng sản phẩm phù hợp với khách hàng có nhu cầu tìm kiếm sản phẩm thủ công truyền thống phục vụ trang trí, làm quà tặng, quảng bá hình ảnh hoặc sử dụng trong các hoạt động văn hóa, sự kiện và biểu diễn nghệ thuật.",
P0577:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0578:   "tenChuXuong": "Lê Thị Phương",
P0579:   "email": "hoanonlangchuong@gmail.com",
P0580:   "diaChi": "Thôn Chung Chính, Phương Trung, Thanh Oai, Hà Nội.",
P0581:   "soDienThoai": "0978661743",
P0582:   "storyTitle": "Nỗ lực giữ gìn di sản",
P0583:   "storyContent": "Làng Chuông, Thanh Oai, Hà Nội từ lâu nổi tiếng với nghề làm nón lá truyền thống. Gắn bó với nghề, nghệ nhân Lê Thị Phương cùng con gái Lê Thị Hoa nỗ lực gìn giữ di sản bằng cách kết hợp kỹ thuật thủ công với tư duy sáng tạo. Bên cạnh các dòng nón truyền thống, cơ sở phát triển nón thêu hoa nghệ thuật và nón quai thao, góp phần đưa sản phẩm làng nghề đến gần hơn với lĩnh vực thời trang, du lịch và biểu diễn văn hóa.",
P0584:   "images": {
P0585:      "header":  “\download\images\Hoa Nón Làng Chuông\68.png”,
P0586:      "consultation": “\download\images\Hoa Nón Làng Chuông\75.png”
P0587:      "imageStory": “\download\images\Hoa Nón Làng Chuông\76.png”
P0588: },
P0589:   "dienTichXuong": {\n    "value": 100,\n    "unit": "m²"\n  },
P0590:   "kinhNghiem": {\n    "value": 15,\n    "unit": "năm"\n  },
P0591:   "soLuongToiThieu": {\n    "value": 1,\n    "unit": "sản phẩm"\n  },
P0592:   "thoiGianGiaoHang": {\n    "from": 7,\n    "to": 15,\n    "unit": "ngày"\n  },
P0593:     "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0594: 3.2. Cơ sở sản xuất của làng Quạt chàng sơn
P0595: 3.2.1. QUẠT CHÀNG SƠN
P0596: {\n  "id": "QCS_QCS",
P0597:   "langNgheId": "QCS",
P0598:   "name": "QUẠT CHÀNG SƠN",
P0599:   "description": "Cơ sở giới thiệu và cung cấp các sản phẩm quạt thủ công gắn với làng nghề truyền thống Chàng Sơn, Thạch Thất, Hà Nội.",
P0600:   "sanPhamDescription": "Quạt là dòng sản phẩm phù hợp với khách hàng có nhu cầu tìm kiếm quạt thủ công phục vụ trang trí, làm quà tặng, trưng bày hoặc sử dụng trong các sự kiện và hoạt động nghệ thuật.",
P0601:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0602:   "tenChuXuong": "Cô Tuấn",
P0603:   "email": null,
P0604:   "diaChi": "Xóm Đình, thôn 3, xã Chàng Sơn, Thạch Thất, Hà Nội.",
P0605:   "soDienThoai": "0912916992",
P0606:   "storyTitle": "Gắn với làng nghề truyền thống",
P0607:   "storyContent": "Quạt Chàng Sơn là sản phẩm thủ công mang dấu ấn văn hóa của vùng Xứ Đoài. Từ những nguyên liệu quen thuộc như tre và giấy, người thợ tạo nên những chiếc quạt vừa có công năng sử dụng, vừa có giá trị thẩm mỹ qua hình ảnh, họa tiết và kỹ thuật chế tác.",
P0608:   "images": {
P0609:     "header": "\download\images\Quạt Chàng Sơn\52.png",
P0610:     "consultation": "\download\images\Quạt Chàng Sơn\59.png"
P0611:     "imageStory": “\download\images\Quạt Chàng Sơn\61.png”
P0612:   },
P0613:   "dienTichXuong": {\n    "value": 200,\n    "unit": "m²"\n  },
P0614:   "kinhNghiem": {\n    "value": 30,\n    "unit": "năm"\n  },
P0615:   "soLuongToiThieu": {\n    "value": 50,\n    "unit": "sản phẩm"\n  },
P0616:   "thoiGianGiaoHang": {\n    "from": 10,\n    "to": 15,\n    "unit": "ngày"\n  },
P0617:    "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0618: 3.2.2. QUẠT TỪ TÂM
P0619: {\n  "id": "QCS_QTT",
P0620:   "langNgheId": "QCS",
P0621:   "name": "QUẠT TỪ TÂM",
P0622:   "description": "Quạt Từ Tâm được thành lập với sứ mệnh gìn giữ và phát huy tinh hoa của làng nghề Chàng Sơn – cái nôi của nghệ thuật quạt thủ công truyền thống.",
P0623:   "sanPhamDescription": "Quạt là dòng sản phẩm phù hợp với khách hàng có nhu cầu tìm kiếm quạt thủ công phục vụ trang trí, làm quà tặng, trưng bày hoặc sử dụng trong các sự kiện và hoạt động nghệ thuật.",
P0624:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0625:   "tenChuXuong": "Ms Nhung/ Mr Long",
P0626:   "email": "quatgiaytutam@gmail.com",
P0627:   "diaChi": "Số 102 Chợ Chàng Sơn, Thạch Thất, Hà Nội",
P0628:   "soDienThoai": "0979038158 / 0962733501",
P0629:   "storyTitle": "Người trẻ tiếp nối nghề quạt Chàng Sơn",
P0630:   "storyContent": "Sinh ra trong gia đình có ba đời làm quạt, Thành Long quyết định trở về quê sau khi tốt nghiệp đại học để tiếp nối nghề truyền thống. Anh kết hợp kỹ thuật thủ công với công nghệ in kỹ thuật số, cắt laser và tận dụng mạng xã hội để đưa quạt Chàng Sơn đến gần hơn với khách hàng hiện đại. Với anh, giữ nghề là gìn giữ giá trị truyền thống đồng thời không ngừng đổi mới để phát triển.",
P0631:   "images": {
P0632:     "header": "\download\images\Quạt Từ Tâm\header.png",
P0633:     "consultation": "\download\images\Quạt Từ Tâm\tuvan.png"
P0634:     "imageStory": “\download\images\Quạt Từ Tâm\cauchuyen.png”
P0635:   },
P0636:   "dienTichXuong": {\n    "value": 200,\n    "unit": "m²"\n  },
P0637:   "kinhNghiem": {\n    "value": 5,\n    "unit": "năm"\n  },
P0638:   "soLuongToiThieu": {\n    "value": 50,\n    "unit": "sản phẩm"\n  },
P0639:   "thoiGianGiaoHang": {\n    "from": 5,\n    "to": 7,\n    "unit": "ngày"\n  },
P0640:    "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0641: 3.2.3. QUẠT PHƯƠNG
P0642: {\n  "id": "QCS_QP",
P0643:   "langNgheId": "QCS",
P0644:   "name": "QUẠT PHƯƠNG",
P0645:   "description": "Thương hiệu quạt thủ công tại Chàng Sơn, Hà Nội, với hơn 20 năm kinh nghiệm sản xuất quạt giấy, quạt lụa và quạt thiết kế theo yêu cầu.",
P0646:   "sanPhamDescription": "Quạt là dòng sản phẩm phù hợp với khách hàng có nhu cầu tìm kiếm quạt thủ công phục vụ trang trí, làm quà tặng, trưng bày hoặc sử dụng trong các sự kiện và hoạt động nghệ thuật.",
P0647:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0648:   "tenChuXuong": "Chị Phương/ Anh Đức",
P0649:   "email": "quatphuong@gmail.com",
P0650:   "diaChi": "Chàng Sơn, Thạch Thất, Hà Nội.",
P0651:   "soDienThoai": "0984209485 / 0986295663",
P0652:   "storyTitle": "Hình thành từ tình yêu với nghề làm quạt truyền thống",
P0653:   "storyContent": "Bắt đầu từ mô hình hộ kinh doanh gia đình vào đầu những năm 2000, thương hiệu đã phát triển với mong muốn gìn giữ nghề truyền thống và đưa quạt Việt đến gần hơn với thị trường hiện đại. Xưởng chú trọng kết hợp chất liệu, thiết kế mới với bản sắc văn hóa Việt Nam.",
P0654:   "images": {
P0655:     "header": "\download\images\Quạt Phương\header.png",
P0656:     "consultation": "\download\images\Quạt Phương\cauchuyen.png"
P0657:     "imageStory": “\download\images\Quạt Phương\tuvan.png”
P0658:   },
P0659:   "dienTichXuong": {\n    "value": 300,\n    "unit": "m²"\n  },
P0660:   "kinhNghiem": {\n    "value": 26,\n    "unit": "năm"\n  },
P0661:   "soLuongToiThieu": {\n    "value": 50,\n    "unit": "sản phẩm"\n  },
P0662:   "thoiGianGiaoHang": {\n    "from": 5,\n    "to": 10,\n    "unit": "ngày"\n  },
P0663:    "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0664: 3.3. Cơ sở sản xuất của làng Mây tre đan
P0665: 3.3.1. MÂY TRE ĐAN VIỆT QUANG
P0666: {\n  "id": "MTD_MTDVQ",
P0667:   "langNgheId": "MTD",
P0668:   "name": "MÂY TRE ĐAN VIỆT QUANG",
P0669:   "description": "Cơ sở với sản phẩm thủ công đa dạng, và có tính ứng dụng cao trong không gian sống.",
P0670:   "sanPhamDescription": "Sản phẩm mây tre đan thủ công từ vật liệu tự nhiên, phù hợp với nhu cầu trang trí, lưu trữ và tạo điểm nhấn mộc mạc cho không gian sống.",
P0671:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu và yêu cầu đặt các sản phẩm mây tre đan.",
P0672:   "tenChuXuong": "Nguyễn Việt Quang",
P0673:   "email": "nguyenphuongquang1984@gmail.com",
P0674:   "diaChi": "Thôn Phú Vinh, xã Phú Nghĩa, Hà Nội.",
P0675:   "soDienThoai": "0972297659",
P0676:   "storyTitle": "Từ sợi mây, nan tre – Gìn giữ hồn nghề thủ công",
P0677:   "storyContent": "Gắn bó với làng nghề mây tre đan Phú Vinh, nghệ nhân Nguyễn Văn Tĩnh tiếp nối truyền thống gia đình và gìn giữ những kỹ thuật thủ công được truyền lại qua nhiều thế hệ. Với ông, để tạo nên một sản phẩm đẹp không chỉ cần đôi bàn tay khéo léo mà còn đòi hỏi sự sáng tạo, kiên trì và cẩn trọng trong từng chi tiết. Từ những sợi mây, nan tre quen thuộc, người thợ tạo nên các sản phẩm vừa đáp ứng nhu cầu sử dụng, vừa thể hiện giá trị thẩm mỹ của nghề thủ công truyền thống. Hành trình của nghệ nhân Nguyễn Văn Tĩnh cũng góp phần đưa nghề mây tre đan Phú Vinh tiếp tục phát triển trong đời sống hiện đại.",
P0678:   "images": {
P0679:     "header": "download\images\CS Mây tre việt quang\header.png",
P0680:     "consultation": "\download\images\CS Mây tre việt quang\tuvan.png"
P0681:     "imageStory": “\download\images\CS Mây tre việt quang\cauchuyen.jpeg”
P0682:   },
P0683:   "dienTichXuong": {\n    "value": 120,\n    "unit": "m²"\n  },
P0684:   "kinhNghiem": {\n    "value": 25,\n    "unit": "năm"\n  },
P0685:   "soLuongToiThieu": {\n    "value": 1,\n    "unit": "sản phẩm"\n  },
P0686:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 30,\n    "unit": "ngày"\n  },
P0687:    "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0688: 3.3.2. Mây tre đan Tuấn Anh
P0689: {\n  "id": "MTD_MTDTA",
P0690:   "langNgheId": "MTD",
P0691:   "name": "MÂY TRE ĐAN TUẤN ANH",
P0692:   "description": "Cơ sở với những sản phẩm được chế tác từ vật liệu tự nhiên, gìn giữ nét đẹp của nghề đan lát.",
P0693:   "sanPhamDescription": "Các sản phẩm mây tre đan với kiểu dáng đa dạng, kết hợp kỹ thuật thủ công truyền thống và tính ứng dụng, phù hợp với nhu cầu trang trí và sử dụng trong đời sống.",
P0694:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.",
P0695:   "tenChuXuong": "Anh Tuấn Anh",
P0696:   "email": null,
P0697:   "diaChi": "Xóm Hà, Thôn Phú Vinh, Phú Nghĩa, Hà Nội.",
P0698:   "soDienThoai": "0974830598",
P0699:   "storyTitle": "Đan nét truyền thống – Điểm tô không gian sống",
P0700:   "storyContent": "Mây tre đan Tuấn Anh hướng đến việc phát triển các sản phẩm thủ công theo nhu cầu thực tế của khách hàng. Thay vì chỉ giới hạn ở những mẫu mã có sẵn, cơ sở tiếp nhận yêu cầu thiết kế riêng, tạo điều kiện để khách hàng lựa chọn kiểu dáng và công năng phù hợp với mục đích sử dụng. Định hướng này mở ra cơ hội ứng dụng sản phẩm thủ công trong nhiều lĩnh vực, từ đồ gia dụng, phụ kiện đến quà tặng và trang trí không gian.",
P0701:   "images": {
P0702:     "header": "download\images\CS mây tre đan tuấn anh\header.jpg",
P0703:     "consultation": "\download\images\CS mây tre đan tuấn anh\tuvan.jpg"
P0704:     "imageStory": “frontend\download\images\CS mây tre đan tuấn anh\cauChuyen.png”
P0705:   },
P0706:   "dienTichXuong": {\n    "value": 70,\n    "unit": "m²"\n  },
P0707:   "kinhNghiem": {\n    "value": 20,\n    "unit": "năm"\n  },
P0708:   "soLuongToiThieu": {\n    "value": 1,\n    "unit": "sản phẩm"\n  },
P0709:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 60,\n    "unit": "ngày"\n  },
P0710:     "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0711: 3.4. Cơ sở sản xuất của làng Gốm bát tràng
P0712: 3.4.1. Hoàng Anh Ceramics
P0713: {\n  "id": "GBT_HAC",
P0714:   "langNgheId": "GBT",
P0715:   "name": "HOÀNG ANH CERAMICS",
P0716:   "description": "Không gian thủ công với những sản phẩm mang dấu ấn riêng trong tạo hình, và họa tiết trang trí.",
P0717:   "sanPhamDescription": "Các sản phẩm gốm thủ công mang dấu ấn riêng trong tạo hình và họa tiết, phù hợp với nhu cầu trang trí, sử dụng hằng ngày và lựa chọn quà tặng.",
P0718:   "tuVanDescription": "Liên hệ trực tiếp để được tư vấn mẫu mã, báo giá sỉ – lẻ và đặt hàng gốm sứ làm quà tặng doanh nghiệp.",
P0719:   "tenChuXuong": "Hoàng Anh",
P0720:   "email": "hoanganh.kotceramics@gmail.com",
P0721:   "diaChi": "Số 15, ngõ 30, thôn 2, Bát Tràng, Gia Lâm, Hà Nội.",
P0722:   "soDienThoai": "0395895165",
P0723:   "storyTitle": "Nơi những dáng gốm hình thành",
P0724:   "storyContent": "Hoàng Anh Ceramics mang đến các sản phẩm gốm sứ thủ công phục vụ nhu cầu sử dụng, trang trí và quà tặng. Từ những mẫu heo đất tiết kiệm nhiều màu sắc đến các sản phẩm decor, mỗi dòng sản phẩm hướng đến sự đa dạng về kiểu dáng, đáp ứng nhu cầu của nhiều nhóm khách hàng. Không chỉ phục vụ khách mua lẻ, cơ sở còn hướng đến khách hàng đặt sỉ và doanh nghiệp có nhu cầu sử dụng gốm sứ làm quà tặng mang dấu ấn riêng.",
P0725:   "images": {
P0726:     "header": "",
P0727:     "consultation": "\download\images\CS hoàng anh ceramics\tuvan.png"
P0728:     "imageStory": “frontend\download\images\CS hoàng anh ceramics\Cauchuyen.jpg”
P0729:   },
P0730:   "dienTichXuong": null,
P0731:   "kinhNghiem": null,
P0732:   "soLuongToiThieu": null,
P0733:   "thoiGianGiaoHang": null,
P0734:    "hoTroThietKeLamMau": null\n}
P0735: 3.4.2. BÁCH NGÂN HỶ
P0736: {\n  "id": "GBT_BNH",
P0737:   "langNgheId": "GBT",
P0738:   "name": "BÁCH NGÂN HỶ",
P0739:   "description": "Thương hiệu kết hợp kỹ thuật vẽ tay truyền thống với phong cách vintage và cảm hứng châu Âu, tạo nên những sản phẩm mang dấu ấn riêng.",
P0740:   "sanPhamDescription": "Đồ gốm sứ kết hợp giá trị sử dụng và tính thẩm mỹ, đáp ứng nhu cầu tìm kiếm sản phẩm gia dụng, trang trí và hoàn thiện không gian sống.",
P0741:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu và yêu cầu đặt hàng gốm sứ gia dụng, trang trí hoặc quà tặng.",
P0742:   "tenChuXuong": "Chị Kim",
P0743:   "email": "bachnganhy89@gmail.com",
P0744:   "diaChi": "Số 87 đường Bát Tràng, Gia Lâm, Hà Nội.",
P0745:   "soDienThoai": "0947675599",
P0746:   "storyTitle": "Trăm hoa hỷ lạc - Kim ngân tài xuyến",
P0747:   "storyContent": "Bách Ngân Hỷ hướng đến việc đưa gốm sứ thủ công đến gần hơn với đời sống hiện đại. Những họa tiết caro, sắc xanh dịu nhẹ hay hình ảnh cherry và đàn cá tạo nên phong cách trẻ trung, đồng thời giữ lại nét gần gũi của sản phẩm gốm truyền thống. Sự kết hợp giữa kỹ thuật thủ công và cảm hứng thiết kế hiện đại giúp các sản phẩm không chỉ phục vụ nhu cầu sử dụng mà còn góp phần tạo điểm nhấn cho bàn ăn và không gian sống.",
P0748:   "images": {
P0749:     "header": "\download\images\CS bách ngân hỷ\Header.png",
P0750:     "consultation": "\download\images\CS bách ngân hỷ\tuvan.jpg"
P0751:     "imageStory": “\download\images\CS bách ngân hỷ\Cauchuyen.png”
P0752:   },
P0753:   "dienTichXuong": {\n    "value": 100,\n    "unit": "m²"\n  },
P0754:   "kinhNghiem": {\n    "value": 5,\n    "unit": "năm"\n  },
P0755:   "soLuongToiThieu": {\n    "value": 1,\n    "unit": "sản phẩm"\n  },
P0756:   "thoiGianGiaoHang": {\n    "from": 10,\n    "to": 30,\n    "unit": "ngày"\n  },
P0757:     "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0758: 3.4.3. GỐM HẢI LONG
P0759: {\n  "id": "GBT_GHL",
P0760:   "langNgheId": "GBT",
P0761:   "name": "GỐM HẢI LONG",
P0762:   "description": "Thương hiệu kết hợp kỹ thuật vẽ tay truyền thống với phong cách vintage và cảm hứng châu Âu, tạo nên những sản phẩm mang dấu ấn riêng.",
P0763:   "sanPhamDescription": "Đồ gốm sứ thủ công với các dòng ấm chén, đồ gia dụng và vật phẩm trang trí, phù hợp với nhu cầu sử dụng, bài trí không gian và đặt hàng theo yêu cầu.",
P0764:   "tuVanDescription": "Liên hệ trực tiếp để tìm hiểu mẫu mã, nhận báo giá và trao đổi nhu cầu đặt hàng gốm sứ gia dụng, đồ mỹ nghệ, vật liệu kiến trúc hoặc nồi gốm sứ NodaCook.",
P0765:   "tenChuXuong": "HẢI LONG",
P0766:   "email": "info@gomhailong.com",
P0767:   "diaChi": "Số 238, thôn 2, Bát Tràng, Gia Lâm, Hà Nội.",
P0768:   "soDienThoai": "0962016016",
P0769:   "storyTitle": "Gìn giữ tinh hoa đất Việt",
P0770:   "storyContent": "Gốm Hải Long phát triển danh mục sản phẩm trải rộng từ gốm sứ gia dụng đến vật liệu kiến trúc truyền thống và sản phẩm phục vụ nấu ăn. Sự đa dạng này mở ra nhiều hướng ứng dụng của gốm trong đời sống, từ không gian gia đình đến các công trình và hoạt động kinh doanh. Bên cạnh giá trị thủ công, việc tiếp cận công nghệ và những nhu cầu sử dụng mới cũng là hướng phát triển mới giúp sản phẩm truyền thống tiếp tục hiện diện trong đời sống hiện đại.",
P0771:   "images": {
P0772:     "header": "\download\images\CS gốm hải long\header .jpg",
P0773:     "consultation": "\download\images\CS gốm hải long\tuvan.jpg"
P0774:     "imageStory": “\download\images\CS gốm hải long\cauchuyen.jpg”
P0775:   },
P0776:   "dienTichXuong": {\n    "value": 12000,\n    "unit": "m²"\n  },
P0777:   "kinhNghiem": {\n    "value": 35,\n    "unit": "năm"\n  },
P0778:   "soLuongToiThieu": {\n    "value": 10,\n    "unit": "sản phẩm"\n  },
P0779:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 45,\n    "unit": "ngày"\n  },
P0780:    "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0781: 3.4.4. GỐM TỚI LIÊN
P0782: {\n  "id": "GBT_GTL",
P0783:   "langNgheId": "GBT",
P0784:   "name": "GỐM TỚI LIÊN",
P0785:   "description": "Cơ sở gốm sứ thủ công với dòng sản phẩm nổi bật là đạo cụ ấm chén.",
P0786:   "sanPhamDescription": "Đạo cụ ấm chén là dòng sản phẩm phù hợp đối với khách hàng có nhu cầu tìm kiếm đồ gốm sứ phục vụ trang trí, dàn dựng bối cảnh hoặc các mục đích sử dụng chuyên biệt.",
P0787:   "tuVanDescription": "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng đạo cụ ấm chén.",
P0788:   "tenChuXuong": "Khuất Thị Hồng Liên",
P0789:   "email": null,
P0790:   "diaChi": "42 Đ. Chợ Gốm, Bát Tràng, Gia Lâm, Hà Nội",
P0791:   "soDienThoai": "0962776595",
P0792:   "storyTitle": "Trên nền đất mộc điểm nét màu thương",
P0793:   "storyContent": "Từ vật dụng thường ngày đến chi tiết tạo nên không khí cho một không gian. Với dòng đạo cụ ấm chén và khả năng làm theo mẫu thiết kế riêng, Gốm Tới Liên hướng đến việc đáp ứng những nhu cầu cụ thể của khách hàng, nơi hình thức sản phẩm cần phù hợp với ý tưởng và mục đích sử dụng.",
P0794:   "images": {
P0795:     "header": "\download\images\CS Gốm tới liên\Header.jpg",
P0796:     "consultation": "\download\images\CS Gốm tới liên\tuvan.jpg"
P0797:     "imageStory": “\download\images\CS Gốm tới liên\cauchuyen.png”
P0798:   },
P0799:   "dienTichXuong": {\n    "value": 100,\n    "unit": "m²"\n  },
P0800:   "kinhNghiem": {\n    "value": 7,\n    "unit": "năm"\n  },
P0801:   "soLuongToiThieu": {\n    "value": 1,\n    "unit": "sản phẩm"\n  },
P0802:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 60,\n    "unit": "ngày"\n  },
P0803:     "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0804: 3.4.5. Gốm SỨ Mạnh Hoa
P0805: {\n  "id": "GBT_GSMH",
P0806:   "langNgheId": "GBT",
P0807:   "name": "GỐM SỨ MẠNH HOA",
P0808:   "description": "Cơ sở với các sản phẩm mang nét đẹp truyền thống, ứng dụng cao trong đời sống.",
P0809:   "sanPhamDescription": "Đồ gốm sứ kết hợp giá trị sử dụng và tính thẩm mỹ, đáp ứng nhu cầu tìm kiếm sản phẩm gia dụng, trang trí và hoàn thiện không gian sống.",
P0810:   "tuVanDescription": "Liên hệ trực tiếp để tìm hiểu mẫu mã, nhận báo giá và trao đổi nhu cầu đặt hàng gốm sứ gia dụng, trang trí hoặc quà tặng.",
P0811:   "tenChuXuong": "Chị Phượng",
P0812:   "email": null,
P0813:   "diaChi": "Số 99, thôn 2, Bát Tràng, Gia Lâm, Hà Nội",
P0814:   "soDienThoai": "0915062662",
P0815:   "storyTitle": "Gửi gắm ý nghĩa trong từng sản phẩm",
P0816:   "storyContent": "Nằm tại Bát Tràng, một trong những làng nghề gốm sứ truyền thống nổi tiếng của Hà Nội, Gốm Sứ Mạnh Hoa có cơ hội tiếp nối giá trị nghề gốm thông qua những sản phẩm phục vụ đời sống hiện đại. Từ đồ dùng gia đình đến các sản phẩm trang trí và quà tặng, gốm sứ không chỉ đáp ứng nhu cầu sử dụng mà còn góp phần đưa nét đẹp thủ công vào không gian sống.",
P0817:   "images": {
P0818:     "header": "\download\images\CS Gốm Mạnh Hoa\header.png",
P0819:     "consultation": "\download\images\CS Gốm Mạnh Hoa\tuvan.jpg"
P0820:     "imageStory": “\download\images\CS Gốm Mạnh Hoa\cauchuyen.jpg”
P0821:   },
P0822:   "dienTichXuong": {\n    "value": 70,\n    "unit": "m²"\n  },
P0823:   "kinhNghiem": {\n    "value": 5,\n    "unit": "năm"\n  },
P0824:   "soLuongToiThieu": {\n    "value": 10,\n    "unit": "sản phẩm"\n  },
P0825:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 15,\n    "unit": "ngày"\n  },
P0826:     "hoTroThietKeLamMau": {\n    "value": 100,\n    "unit": "%"\n  }\n}
P0827: 3.5. Cơ sở sản xuất của làng Lụa nha xá
P0828: 3.5.1. LỤA NHA XÁ
P0829: {\n  "id": "LNX_LNX",
P0830:   "langNgheId": "LNX",
P0831:   "name": "LỤA NHA XÁ",
P0832:   "description": "Cơ sở cung cấp các dòng sản phẩm từ lụa tơ tằm truyền thống.",
P0833:   "sanPhamDescription": "Lụa Nha Xá cung cấp đa dạng sản phẩm từ lụa tơ tằm truyền thống, từ vải lụa, khăn lụa đến phụ kiện.",
P0834:   "tuVanDescription": "Liên hệ để tìm hiểu mẫu vải, nhận báo giá và trao đổi đặt hàng lụa phục vụ may đo hoặc quà tặng doanh nghiệp.",
P0835:   "tenChuXuong": null,
P0836:   "email": "luanhaxa.vn@gmail.com",
P0837:   "diaChi": "Ngã tư, làng nghề Nha Xá, Mộc Nam, Duy Tiên, Hà Nam.",
P0838:   "soDienThoai": "0943549019",
P0839:   "storyTitle": "Tín – Tâm – Trí – Nhân",
P0840:   "storyContent": "Nằm bên dòng sông Châu Giang, làng nghề Nha Xá là nơi nhiều thế hệ người dân gắn bó với nghề ươm tơ, dệt lụa. Nghề truyền thống không chỉ tạo ra những tấm vải phục vụ đời sống mà còn lưu giữ kinh nghiệm, kỹ thuật và nét văn hóa của người thợ. Trong quá trình phát triển, lụa Nha Xá tiếp tục tìm kiếm cơ hội ứng dụng vào thời trang hiện đại, từ vải may áo dài đến khăn lụa và các sản phẩm quà tặng. Đây cũng là hướng đi giúp chất liệu truyền thống tiếp cận nhiều nhóm khách hàng và đối tác hơn.",
P0841:   "images": {
P0842:     "header": "\download\images\CS Lụa nha xá\header.png",
P0843:     "consultation": "\download\images\CS Lụa nha xá\tuvan.jpg"
P0844:     "imageStory": “\download\images\CS Lụa nha xá\cauchuyen.png”
P0845:   },
P0846:   "dienTichXuong": {\n    "value": 150,\n    "unit": "m²"\n  },
P0847:   "kinhNghiem": {\n    "value": 10,\n    "unit": "năm"\n  },
P0848:   "soLuongToiThieu": {\n    "value": 10,\n    "unit": "sản phẩm"\n  },
P0849:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 30,\n    "unit": "ngày"\n  },
P0850:    "hoTroThietKeLamMau": null\n}
P0851: 3.5.2. SILK HẠ VY
P0852: {\n  "id": "LNX_SHV",
P0853:   "langNgheId": "LNX",
P0854:   "name": "SILK HẠ VY",
P0855:   "description": "Cơ sở cung cấp tơ sợi, lụa thô đến sản xuất lụa thành phẩm.",
P0856:   "sanPhamDescription": "Lụa Nha Xá cung cấp đa dạng sản phẩm từ lụa tơ tằm truyền thống, từ vải lụa, khăn lụa đến phụ kiện.",
P0857:   "tuVanDescription": "Liên hệ cơ sở để được tư vấn và báo giá theo chất liệu, màu sắc, quy cách và số lượng đặt hàng.",
P0858:   "tenChuXuong": null,
P0859:   "email": null,
P0860:   "diaChi": "làng nghề Nha Xá, Mộc Nam, Duy Tiên, Hà Nam.",
P0861:   "soDienThoai": "0943549019",
P0862:   "storyTitle": "Tiếp nối truyền thống làng nghề Nha Xá",
P0863:   "storyContent": "Xuất phát từ gia đình có hơn 30 năm gắn bó với nghề sản xuất và kinh doanh lụa tơ tằm, Hạ Vy Silk tiếp nối truyền thống làng nghề Nha Xá và từng bước phát triển hoạt động sản xuất. Trong quá trình kinh doanh, những khó khăn khi phụ thuộc vào xưởng nhuộm bên ngoài đã thôi thúc cơ sở xây dựng xưởng nhuộm riêng. Với định hướng chủ động hơn về nguồn hàng, màu sắc và tiến độ, Hạ Vy Silk mong muốn nâng cao chất lượng sản phẩm, đồng thời gìn giữ và phát triển nghề lụa truyền thống.",
P0864:   "images": {
P0865:     "header": "\download\images\Silk Hạ Vy\header.jpg",
P0866:     "consultation": "\download\images\Silk Hạ Vy\tuvan.jpg"
P0867:     "imageStory": “\download\images\Silk Hạ Vy\cauchuyen.png”
P0868:   },
P0869:   "dienTichXuong": {\n    "value": 200,\n    "unit": "m²"\n  },
P0870:   "kinhNghiem": {\n    "value": 30,\n    "unit": "năm"\n  },
P0871:   "soLuongToiThieu": {\n    "value": 50,\n    "unit": "sản phẩm"\n  },
P0872:   "thoiGianGiaoHang": {\n    "from": 15,\n    "to": 30,\n    "unit": "ngày"\n  },
P0873:     "hoTroThietKeLamMau": null\n}
```

## P0874 — 4. Năng lực sản xuất

```text
P0874: 4. Năng lực sản xuất
P0875: 4.1. Năng lực sản xuất của NÓN LÁ HẢI YẾN
P0876: {
P0877:   "id": "NLHY_NLSX01",
P0878:   "coSoSanXuatId": "NLC_NLHY",
P0879:   "name": "Kinh nghiệm làm nghề",
P0880:   "order": 1,
P0881:   "description": "Với khoảng 20 năm kinh nghiệm, cơ sở duy trì kỹ thuật làm nón thủ công truyền thống và tích lũy tay nghề qua từng sản phẩm.",
P0882:   "image": {
P0883:     "url": "/images/workshops/non-la-hai-yen/nang-luc-san-xuat-1.jpg",
P0884:     "alt": "Kinh nghiệm làm nghề nón lá Hải Yến"
P0885:   }
P0886: }
P0887: 
P0888: 
P0889:   "id": "NLHY_NLSX02",
P0890:   "coSoSanXuatId": "NLC_NLHY",
P0891:   "name": "Sản xuất theo yêu cầu",
P0892:   "order": 2,
P0893:   "description": "Nhận thiết kế riêng, linh hoạt điều chỉnh kích thước và độ cầu kỳ theo mục đích sử dụng của khách hàng.",
P0894:   "image": {
P0895:     "url": "\download\images\Nón lá Hải Yến\nanglucsanxuat2.jpg",
P0896:     "alt": "Sản xuất theo yêu cầu nón lá Hải Yến"
P0897:   }
P0898: }
P0899: 
P0900: {
P0901:   "id": "NLHY_NLSX03",
P0902:   "coSoSanXuatId": "NLC_NLHY",
P0903:   "name": "Chế tác nón cổ truyền",
P0904:   "order": 3,
P0905:   "description": "Gìn giữ kỹ thuật làm các dòng nón cổ như nón ba tầm, nón dâu, kết hợp kinh nghiệm thủ công được tích lũy qua khoảng 20 năm làm nghề.",
P0906:   "image": {
P0907:     "url": "\download\images\Nón lá Hải Yến\nanglucsanxuat3.jpg",
P0908:     "alt": "Chế tác nón cổ truyền nón lá Hải Yến"
P0909:   }
P0910: }
P0911: 
P0912: {
P0913:   "id": "NLHY_NLSX04",
P0914:   "coSoSanXuatId": "NLC_NLHY",
P0915:   "name": "Năng lực gia công và cung ứng",
P0916:   "order": 4,
P0917:   "description": "Với đội ngũ 10 người tham gia sản xuất, cơ sở nhận đơn từ 1 sản phẩm đến số lượng lớn, đáp ứng nhiều quy mô đặt hàng khác nhau.",
P0918:   "image": {
P0919:     "url": "\download\images\Nón lá Hải Yến\nanglucsanxuat4.png",
P0920:     "alt": "Năng lực gia công và cung ứng nón lá Hải Yến"
P0921:   }
P0922: }
P0923: 4.2. Năng lực sản xuất của MTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG
P0924: {
P0925:   "id": "NLTTH_NLSX01",
P0926:   "coSoSanXuatId": "NLC_NLTTH",
P0927:   "name": "Đa dạng mẫu mã",
P0928:   "order": 1,
P0929:   "description": "Sản xuất nhiều dòng nón truyền thống như nón lá trắng, nón lá trên lụa, nón giấy bóng, nón quai thao và nón Thái.",
P0930:   "image": {
P0931:     "url": "\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\nanglucsanxuat1.jpg",
P0932:     "alt": "Đa dạng mẫu mã HTX Mây Tre Nón Lá Tạ Thu Hương"
P0933:   }
P0934: }
P0935: 
P0936: {
P0937:   "id": "NLTTH_NLSX02",
P0938:   "coSoSanXuatId": "NLC_NLTTH",
P0939:   "name": "Cải tiến mẫu mã và chất liệu",
P0940:   "order": 2,
P0941:   "description": "Kết hợp kỹ thuật làm nón truyền thống với các chất liệu, kiểu dáng và cách trang trí đa dạng, đáp ứng nhu cầu quà tặng, du lịch và trang trí.",
P0942:   "image": {
P0943:     "url": "\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\nanglucsanxuat2.jpg",
P0944:     "alt": "Cải tiến mẫu mã và chất liệu HTX Mây Tre Nón Lá Tạ Thu Hương"
P0945:   }
P0946: }
P0947: 
P0948: {
P0949:   "id": "NLTTH_NLSX03",
P0950:   "coSoSanXuatId": "NLC_NLTTH",
P0951:   "name": "Năng lực cung ứng đơn hàng",
P0952:   "order": 3,
P0953:   "description": "Liên kết với các hộ sản xuất tại làng Chuông, phối hợp nguồn lực lao động để đáp ứng nhu cầu đặt hàng với số lượng lớn.",
P0954:   "image": {
P0955:     "url": "\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\nanglucsanxuat3.webp",
P0956:     "alt": "Năng lực cung ứng đơn hàng HTX Mây Tre Nón Lá Tạ Thu Hương"
P0957:   }
P0958: }
P0959: 
P0960: {
P0961:   "id": "NLTTH_NLSX04",
P0962:   "coSoSanXuatId": "NLC_NLTTH",
P0963:   "name": "Chất lượng và thị trường quốc tế",
P0964:   "order": 4,
P0965:   "description": "Có 6 sản phẩm đạt chứng nhận OCOP 4 sao, từng thực hiện đơn hàng xuất khẩu quy mô lớn và đưa sản phẩm đến nhiều thị trường nước ngoài.",
P0966:   "image": {
P0967:     "url": "\download\images\HTX Mây Tre Nón Lá Tạ Thu Hương\nanglucsanxuat4.jpg",
P0968:     "alt": "Chất lượng và thị trường quốc tế HTX Mây Tre Nón Lá Tạ Thu Hương"
P0969:   }
P0970: }
P0971: 4.3. Năng lực sản xuất của HOA NÓN LÀNG CHUÔNG
P0972: {
P0973:   "id": "HNLC_NLSX01",
P0974:   "coSoSanXuatId": "NLC_HNLC",
P0975:   "name": "Sản xuất thủ công truyền thống",
P0976:   "order": 1,
P0977:   "description": "Lưu giữ kỹ thuật làm nón truyền thống, từ chọn lá, là phẳng đến khâu nón tỉ mỉ bằng tay.",
P0978:   "image": {
P0979:     "url": "\download\images\Hoa Nón Làng Chuông\nlsx1.png",
P0980:     "alt": "Sản xuất thủ công truyền thống Hoa Nón Làng Chuông"
P0981:   }
P0982: }
P0983: 
P0984: {
P0985:   "id": "HNLC_NLSX02",
P0986:   "coSoSanXuatId": "NLC_HNLC",
P0987:   "name": "Thiết kế theo yêu cầu",
P0988:   "order": 2,
P0989:   "description": "Linh hoạt trong kiểu dáng, màu sắc và họa tiết, đáp ứng nhu cầu sử dụng và đặt hàng riêng.",
P0990:   "image": {
P0991:     "url": "\download\images\Hoa Nón Làng Chuông\nlsx2.png",
P0992:     "alt": "Thiết kế theo yêu cầu Hoa Nón Làng Chuông"
P0993:   }
P0994: }
P0995: 
P0996: {
P0997:   "id": "HNLC_NLSX03",
P0998:   "coSoSanXuatId": "NLC_HNLC",
P0999:   "name": "Đa dạng dòng sản phẩm",
P1000:   "order": 3,
P1001:   "description": "Cung cấp các dòng nón lá truyền thống, nón cưới hỏi, nón trang trí và nón phục vụ quà tặng, biểu diễn văn hóa.",
P1002:   "image": {
P1003:     "url": "\download\images\Hoa Nón Làng Chuông\nlsx3.png",
P1004:     "alt": "Đa dạng dòng sản phẩm Hoa Nón Làng Chuông"
P1005:   }
P1006: }
P1007: 
P1008: {
P1009:   "id": "HNLC_NLSX04",
P1010:   "coSoSanXuatId": "NLC_HNLC",
P1011:   "name": "Gia công và hoàn thiện sản phẩm",
P1012:   "order": 4,
P1013:   "description": "Chú trọng từng đường kim, mối khâu và phần quai nón, đảm bảo tính thẩm mỹ và độ bền của sản phẩm.",
P1014:   "image": {
P1015:     "url": "\download\images\Hoa Nón Làng Chuông\nlsx4.png",
P1016:     "alt": "Gia công và hoàn thiện sản phẩm Hoa Nón Làng Chuông"
P1017:   }
P1018: }
P1019: 4.4. Năng lực sản xuất của QUẠT CHÀNG SƠN
P1020: {
P1021:   "id": "QCS_NLSX01",
P1022:   "coSoSanXuatId": "QCS_QCS",
P1023:   "name": "Sản xuất thủ công truyền thống",
P1024:   "order": 1,
P1025:   "description": "Lưu giữ kỹ thuật làm quạt truyền thống, từ gia công nan quạt đến phất quạt và hoàn thiện sản phẩm.",
P1026:   "image": {
P1027:     "url": "frontend\download\images\Quạt Chàng Sơn\nlsx1.png",
P1028:     "alt": "Sản xuất thủ công truyền thống Quạt Chàng Sơn"
P1029:   }
P1030: }
P1031: 
P1032: {
P1033:   "id": "QCS_NLSX02",
P1034:   "coSoSanXuatId": "QCS_QCS",
P1035:   "name": "Thiết kế theo yêu cầu",
P1036:   "order": 2,
P1037:   "description": "Đa dạng mẫu mã, kiểu dáng, hoa văn và kích thước, đáp ứng nhu cầu riêng của từng khách hàng.",
P1038:   "image": {
P1039:     "url": "frontend\download\images\Quạt Chàng Sơn\nlsx2.png",
P1040:     "alt": "Thiết kế theo yêu cầu Quạt Chàng Sơn"
P1041:   }
P1042: }
P1043: 
P1044: {
P1045:   "id": "QCS_NLSX03",
P1046:   "coSoSanXuatId": "QCS_QCS",
P1047:   "name": "Sản xuất đa dạng dòng quạt",
P1048:   "order": 3,
P1049:   "description": "Cung cấp quạt truyền thống, quạt quà tặng, quạt cưới và quạt trang trí phục vụ nhiều mục đích sử dụng.",
P1050:   "image": {
P1051:     "url": "frontend\download\images\Quạt Chàng Sơn\nlsx3.png",
P1052:     "alt": "Sản xuất đa dạng dòng quạt Quạt Chàng Sơn"
P1053:   }
P1054: }
P1055: 
P1056: {
P1057:   "id": "QCS_NLSX04",
P1058:   "coSoSanXuatId": "QCS_QCS",
P1059:   "name": "Gia công và hoàn thiện sản phẩm",
P1060:   "order": 4,
P1061:   "description": "Thực hiện các công đoạn gia công, in ấn, lắp ráp và kiểm tra nhằm đảm bảo tính thẩm mỹ của từng chiếc quạt.",
P1062:   "image": {
P1063:     "url": "frontend\download\images\Quạt Chàng Sơn\nlsx4.png",
P1064:     "alt": "Gia công và hoàn thiện sản phẩm Quạt Chàng Sơn"
P1065:   }
P1066: }
P1067: 4.5. Năng lực sản xuất của QUẠT TỪ TÂM
P1068: {
P1069:   "id": "QTT_NLSX01",
P1070:   "coSoSanXuatId": "QCS_QTT",
P1071:   "name": "Đa dạng dòng quạt thủ công",
P1072:   "order": 1,
P1073:   "description": "Phát triển các sản phẩm quạt phục vụ nhu cầu sử dụng, trang trí và quà tặng, mang nét đặc trưng của nghề quạt Chàng Sơn.",
P1074:   "image": {
P1075:     "url": "\download\images\Quạt Từ Tâm\nanglucsanxuat1.png",
P1076:     "alt": "Đa dạng dòng quạt thủ công Quạt Từ Tâm"
P1077:   }
P1078: }
P1079: 
P1080: {
P1081:   "id": "QTT_NLSX02",
P1082:   "coSoSanXuatId": "QCS_QTT",
P1083:   "name": "Chú trọng sự tỉ mỉ trong từng sản phẩm",
P1084:   "order": 2,
P1085:   "description": "Đề cao sự chỉn chu trong quá trình hoàn thiện, từ hình thức đến những chi tiết tạo nên nét riêng của sản phẩm.",
P1086:   "image": {
P1087:     "url": "\download\images\Quạt Từ Tâm\nanglucsanxuat2.png",
P1088:     "alt": "Chú trọng sự tỉ mỉ trong từng sản phẩm Quạt Từ Tâm"
P1089:   }
P1090: }
P1091: 
P1092: {
P1093:   "id": "QTT_NLSX03",
P1094:   "coSoSanXuatId": "QCS_QTT",
P1095:   "name": "Linh hoạt theo nhu cầu khách hàng",
P1096:   "order": 3,
P1097:   "description": "Định hướng sản phẩm theo mục đích sử dụng, phù hợp với nhu cầu quà tặng, trang trí và các hoạt động sự kiện.",
P1098:   "image": {
P1099:     "url": "\download\images\Quạt Từ Tâm\nanglucsanxuat3.png",
P1100:     "alt": "Linh hoạt theo nhu cầu khách hàng Quạt Từ Tâm"
P1101:   }
P1102: }
P1103: 
P1104: {
P1105:   "id": "QTT_NLSX04",
P1106:   "coSoSanXuatId": "QCS_QTT",
P1107:   "name": "Tiềm năng hợp tác với doanh nghiệp",
P1108:   "order": 4,
P1109:   "description": "Có thể khai thác dòng quạt thủ công cho quà tặng đối tác, chương trình quảng bá và các hoạt động mang bản sắc văn hóa.",
P1110:   "image": {
P1111:     "url": "\download\images\Quạt Từ Tâm\nanglucsanxuat4.png",
P1112:     "alt": "Tiềm năng hợp tác với doanh nghiệp Quạt Từ Tâm"
P1113:   }
P1114: }
P1115: 4.6. Năng lực sản xuất của QUẠT PHƯƠNG
P1116: {
P1117:   "id": "QP_NLSX01",
P1118:   "coSoSanXuatId": "QCS_QP",
P1119:   "name": "Đa dạng mẫu mã và kiểu dáng",
P1120:   "order": 1,
P1121:   "description": "Các dòng quạt mang nét truyền thống có thể được lựa chọn theo nhu cầu sử dụng, trang trí không gian hoặc làm quà tặng.",
P1122:   "image": {
P1123:     "url": "frontend\download\images\Quạt Phương\nanglucsanxuat1.png",
P1124:     "alt": "Đa dạng mẫu mã và kiểu dáng Quạt Phương"
P1125:   }
P1126: }
P1127: 
P1128: {
P1129:   "id": "QP_NLSX02",
P1130:   "coSoSanXuatId": "QCS_QP",
P1131:   "name": "Kết hợp giá trị thủ công và thẩm mỹ",
P1132:   "order": 2,
P1133:   "description": "Chú trọng vẻ đẹp của sản phẩm, tạo sự hài hòa giữa nét văn hóa truyền thống và nhu cầu thẩm mỹ hiện nay.",
P1134:   "image": {
P1135:     "url": "frontend\download\images\Quạt Phương\nanglucsanxuat2.png",
P1136:     "alt": "Kết hợp giá trị thủ công và thẩm mỹ Quạt Phương"
P1137:   }
P1138: }
P1139: 
P1140: {
P1141:   "id": "QP_NLSX03",
P1142:   "coSoSanXuatId": "QCS_QP",
P1143:   "name": "Ứng dụng trong quà tặng và sự kiện",
P1144:   "order": 3,
P1145:   "description": "Sản phẩm có tiềm năng phục vụ các chương trình văn hóa, sự kiện doanh nghiệp và hoạt động quảng bá thương hiệu.",
P1146:   "image": {
P1147:     "url": "frontend\download\images\Quạt Phương\nanglucsanxuat3.png",
P1148:     "alt": "Ứng dụng trong quà tặng và sự kiện Quạt Phương"
P1149:   }
P1150: }
P1151: 
P1152: {
P1153:   "id": "QP_NLSX04",
P1154:   "coSoSanXuatId": "QCS_QP",
P1155:   "name": "Khả năng phát triển đơn hàng theo yêu cầu",
P1156:   "order": 4,
P1157:   "description": "Có thể khai thác các phương án lựa chọn mẫu quạt phù hợp với từng mục đích hợp tác; quy mô nhận đơn và khả năng tùy chỉnh cần được xác nhận trực tiếp với cơ sở.",
P1158:   "image": {
P1159:     "url": "frontend\download\images\Quạt Phương\nanglucsanxuat4.png",
P1160:     "alt": "Khả năng phát triển đơn hàng theo yêu cầu Quạt Phương"
P1161:   }
P1162: }
P1163: 4.7. Năng lực sản xuất của MÂY TRE ĐAN VIỆT QUANG
P1164: {
P1165:   "id": "MTDVQ_NLSX01",
P1166:   "coSoSanXuatId": "MTD_MTDVQ",
P1167:   "name": "Sản phẩm mây tre đan",
P1168:   "order": 1,
P1169:   "description": "Đa dạng sản phẩm thủ công từ mây, tre và giang đan, mang vẻ đẹp mộc mạc và giá trị truyền thống.",
P1170:   "image": {
P1171:     "url": "\download\images\CS Mây tre việt quang\nanglucsanxuat1.webp",
P1172:     "alt": "Sản phẩm mây tre đan Mây Tre Đan Việt Quang"
P1173:   }
P1174: }
P1175: 
P1176: {
P1177:   "id": "MTDVQ_NLSX02",
P1178:   "coSoSanXuatId": "MTD_MTDVQ",
P1179:   "name": "Kỹ thuật đan thủ công",
P1180:   "order": 2,
P1181:   "description": "Kế thừa kinh nghiệm làm nghề qua nhiều thế hệ, chú trọng sự tỉ mỉ trong từng công đoạn đan.",
P1182:   "image": {
P1183:     "url": "\download\images\CS Mây tre việt quang\nanglucsanxuat2.webp",
P1184:     "alt": "Kỹ thuật đan thủ công Mây Tre Đan Việt Quang"
P1185:   }
P1186: }
P1187: 
P1188: {
P1189:   "id": "MTDVQ_NLSX03",
P1190:   "coSoSanXuatId": "MTD_MTDVQ",
P1191:   "name": "Sản phẩm trang trí",
P1192:   "order": 3,
P1193:   "description": "Phù hợp với nhu cầu trang trí không gian, nội thất và phát triển các bộ sưu tập mang bản sắc Việt.",
P1194:   "image": {
P1195:     "url": "\download\images\CS Mây tre việt quang\nanglucsanxuat3.jpg",
P1196:     "alt": "Sản phẩm trang trí Mây Tre Đan Việt Quang"
P1197:   }
P1198: }
P1199: 
P1200: {
P1201:   "id": "MTDVQ_NLSX04",
P1202:   "coSoSanXuatId": "MTD_MTDVQ",
P1203:   "name": "Quà tặng doanh nghiệp",
P1204:   "order": 4,
P1205:   "description": "Hỗ trợ trao đổi thiết kế theo yêu cầu, làm mẫu trước khi sản xuất hàng loạt cho đơn hàng doanh nghiệp.",
P1206:   "image": {
P1207:     "url": "\download\images\CS Mây tre việt quang\nanglucsanxuat4.png",
P1208:     "alt": "Quà tặng doanh nghiệp Mây Tre Đan Việt Quang"
P1209:   }
P1210: }
P1211: 4.8. Năng lực sản xuất của MÂY TRE ĐAN TUẤN ANH
P1212: {
P1213:   "id": "MTDTA_NLSX01",
P1214:   "coSoSanXuatId": "MTD_MTDTA",
P1215:   "name": "Đa dạng sản phẩm thủ công",
P1216:   "order": 1,
P1217:   "description": "Phát triển các dòng sản phẩm mây tre đan từ đồ gia dụng, phụ kiện đến vật dụng trang trí.",
P1218:   "image": {
P1219:     "url": "\download\images\CS mây tre đan tuấn anh\nlsx1.jpg",
P1220:     "alt": "Đa dạng sản phẩm thủ công Mây tre đan Tuấn Anh"
P1221:   }
P1222: }
P1223: 
P1224: {
P1225:   "id": "MTDTA_NLSX02",
P1226:   "coSoSanXuatId": "MTD_MTDTA",
P1227:   "name": "Thiết kế theo yêu cầu",
P1228:   "order": 2,
P1229:   "description": "Linh hoạt kiểu dáng, kích thước và công năng theo nhu cầu riêng của khách hàng.",
P1230:   "image": {
P1231:     "url": "\download\images\CS mây tre đan tuấn anh\nlsx2.jpg",
P1232:     "alt": "Thiết kế theo yêu cầu Mây tre đan Tuấn Anh"
P1233:   }
P1234: }
P1235: 
P1236: {
P1237:   "id": "MTDTA_NLSX03",
P1238:   "coSoSanXuatId": "MTD_MTDTA",
P1239:   "name": "Ứng dụng đa dạng",
P1240:   "order": 3,
P1241:   "description": "Phù hợp với không gian sống, nhà hàng, khách sạn, homestay và dịch vụ.",
P1242:   "image": {
P1243:     "url": "\download\images\CS mây tre đan tuấn anh\nlsx3.jpg",
P1244:     "alt": "Ứng dụng đa dạng Mây tre đan Tuấn Anh"
P1245:   }
P1246: }
P1247: 
P1248: {
P1249:   "id": "MTDTA_NLSX04",
P1250:   "coSoSanXuatId": "MTD_MTDTA",
P1251:   "name": "Đơn hàng riêng biệt",
P1252:   "order": 4,
P1253:   "description": "Tiếp nhận đơn đặt hàng phục vụ quà tặng, phụ kiện và nhu cầu hợp tác doanh nghiệp.",
P1254:   "image": {
P1255:     "url": "\download\images\CS mây tre đan tuấn anh\nlsx4.jpg",
P1256:     "alt": "Đơn hàng riêng biệt Mây tre đan Tuấn Anh"
P1257:   }
P1258: }
P1259: 4.9. Năng lực sản xuất của HOÀNG ANH CERAMICS
P1260: {
P1261:   "id": "HAC_NLSX01",
P1262:   "coSoSanXuatId": "GBT_HAC",
P1263:   "name": "",
P1264:   "order": 1,
P1265:   "description": "",
P1266:   "image": {
P1267:     "url": "",
P1268:     "alt": ""
P1269:   }
P1270: }
P1271: 
P1272: {
P1273:   "id": "HAC_NLSX02",
P1274:   "coSoSanXuatId": "GBT_HAC",
P1275:   "name": "",
P1276:   "order": 2,
P1277:   "description": "",
P1278:   "image": {
P1279:     "url": "",
P1280:     "alt": ""
P1281:   }
P1282: }
P1283: 
P1284: {
P1285:   "id": "HAC_NLSX03",
P1286:   "coSoSanXuatId": "GBT_HAC",
P1287:   "name": "",
P1288:   "order": 3,
P1289:   "description": "",
P1290:   "image": {
P1291:     "url": "",
P1292:     "alt": ""
P1293:   }
P1294: }
P1295: 
P1296: {
P1297:   "id": "HAC_NLSX04",
P1298:   "coSoSanXuatId": "GBT_HAC",
P1299:   "name": "",
P1300:   "order": 4,
P1301:   "description": "",
P1302:   "image": {
P1303:     "url": "",
P1304:     "alt": ""
P1305:   }
P1306: }
P1307: 4.10. Năng lực sản xuất của BÁCH NGÂN HỶ
P1308: {
P1309:   "id": "BNH_NLSX01",
P1310:   "coSoSanXuatId": "GBT_BNH",
P1311:   "name": "Bộ sưu tập mang dấu ấn riêng",
P1312:   "order": 1,
P1313:   "description": "Phát triển phong cách sản phẩm từ họa tiết caro, sắc xanh thanh lịch đến những thiết kế trẻ trung.",
P1314:   "image": {
P1315:     "url": "\download\images\CS bách ngân hỷ\nanglucsanxuat1.png",
P1316:     "alt": "Bộ sưu tập mang dấu ấn riêng Bách Ngân Hỷ"
P1317:   }
P1318: }
P1319: 
P1320: {
P1321:   "id": "BNH_NLSX02",
P1322:   "coSoSanXuatId": "GBT_BNH",
P1323:   "name": "Đa dạng màu sắc và họa tiết",
P1324:   "order": 2,
P1325:   "description": "Kết hợp kiểu dáng, màu men và họa tiết để tạo nên những bộ sưu tập có cá tính riêng.",
P1326:   "image": {
P1327:     "url": "\download\images\CS bách ngân hỷ\nanglucsanxuat2.jpg",
P1328:     "alt": "Đa dạng màu sắc và họa tiết Bách Ngân Hỷ"
P1329:   }
P1330: }
P1331: 
P1332: {
P1333:   "id": "BNH_NLSX03",
P1334:   "coSoSanXuatId": "GBT_BNH",
P1335:   "name": "Phù hợp cho không gian kinh doanh",
P1336:   "order": 3,
P1337:   "description": "Gợi ý các dòng cốc, đĩa và bộ đồ ăn phù hợp với phong cách nhà hàng, quán cà phê.",
P1338:   "image": {
P1339:     "url": "\download\images\CS bách ngân hỷ\nanglucsanxuat3.jpg",
P1340:     "alt": "Phù hợp cho không gian kinh doanh Bách Ngân Hỷ"
P1341:   }
P1342: }
P1343: 
P1344: {
P1345:   "id": "BNH_NLSX04",
P1346:   "coSoSanXuatId": "GBT_BNH",
P1347:   "name": "Sản phẩm cho những dịp đặc biệt",
P1348:   "order": 4,
P1349:   "description": "Lựa chọn các set gốm làm quà tặng đối tác, khách hàng và sự kiện doanh nghiệp.",
P1350:   "image": {
P1351:     "url": "\download\images\CS bách ngân hỷ\nanglucsanxuat4.png",
P1352:     "alt": "Sản phẩm cho những dịp đặc biệt Bách Ngân Hỷ"
P1353:   }
P1354: }
P1355: 4.11. Năng lực sản xuất của GỐM HẢI LONG
P1356: {
P1357:   "id": "GHL_NLSX01",
P1358:   "coSoSanXuatId": "GBT_GHL",
P1359:   "name": "Đa dạng sản phẩm",
P1360:   "order": 1,
P1361:   "description": "Từ đồ gia dụng, ấm chén, cốc tách đến đồ thờ cúng, gốm phong thủy và gốm mỹ nghệ, đáp ứng nhiều nhu cầu sử dụng khác nhau.",
P1362:   "image": {
P1363:     "url": "\download\images\CS gốm hải long\nanglucsanxuat1.jpg",
P1364:     "alt": "Đa dạng sản phẩm Gốm Hải Long"
P1365:   }
P1366: }
P1367: 
P1368: {
P1369:   "id": "GHL_NLSX02",
P1370:   "coSoSanXuatId": "GBT_GHL",
P1371:   "name": "Đồ gốm mỹ nghệ",
P1372:   "order": 2,
P1373:   "description": "Đa dạng sản phẩm trang trí mang dấu ấn thủ công, phù hợp với nhu cầu làm đẹp không gian và lựa chọn quà tặng.",
P1374:   "image": {
P1375:     "url": "\download\images\CS gốm hải long\nanglucsanxuat2.png",
P1376:     "alt": "Đồ gốm mỹ nghệ Gốm Hải Long"
P1377:   }
P1378: }
P1379: 
P1380: {
P1381:   "id": "GHL_NLSX03",
P1382:   "coSoSanXuatId": "GBT_GHL",
P1383:   "name": "Cung cấp vật liệu ngói truyền thống",
P1384:   "order": 3,
P1385:   "description": "Cung ứng vật liệu gốm truyền thống dành cho công trình kiến trúc cổ, không gian hoài niệm và các dự án cải tạo.",
P1386:   "image": {
P1387:     "url": "\download\images\CS gốm hải long\nanglucsanxuat3.jpg",
P1388:     "alt": "Cung cấp vật liệu ngói truyền thống Gốm Hải Long"
P1389:   }
P1390: }
P1391: 
P1392: {
P1393:   "id": "GHL_NLSX04",
P1394:   "coSoSanXuatId": "GBT_GHL",
P1395:   "name": "Nồi gốm NodaCook",
P1396:   "order": 4,
P1397:   "description": "Dòng nồi gốm sứ phục vụ nhu cầu nấu ăn, hướng đến hộ gia đình và các đơn vị kinh doanh sản phẩm nhà bếp.",
P1398:   "image": {
P1399:     "url": "\download\images\CS gốm hải long\nanglucsanxuat4.jpg",
P1400:     "alt": "Nồi gốm NodaCook Gốm Hải Long"
P1401:   }
P1402: }
P1403: 4.12. Năng lực sản xuất của GỐM TỚI LIÊN
P1404: {
P1405:   "id": "GTL_NLSX01",
P1406:   "coSoSanXuatId": "GBT_GTL",
P1407:   "name": "Kiểu dáng sản phẩm",
P1408:   "order": 1,
P1409:   "description": "Lựa chọn kiểu dáng ấm đi kèm theo mẫu tham khảo, concept chụp ảnh hoặc yêu cầu riêng của khách hàng.",
P1410:   "image": {
P1411:     "url": "\download\images\CS Gốm tới liên\nanglucsanxuat1.jpg",
P1412:     "alt": "Kiểu dáng sản phẩm Gốm Tới Liên"
P1413:   }
P1414: }
P1415: 
P1416: {
P1417:   "id": "GTL_NLSX02",
P1418:   "coSoSanXuatId": "GBT_GTL",
P1419:   "name": "Họa tiết và trang trí",
P1420:   "order": 2,
P1421:   "description": "Trao đổi về hoa văn, họa tiết và phong cách trang trí để sản phẩm phù hợp với ý tưởng hình ảnh hoặc bối cảnh sử dụng.",
P1422:   "image": {
P1423:     "url": "\download\images\CS Gốm tới liên\nanglucsanxuat2.jpg",
P1424:     "alt": "Họa tiết và trang trí Gốm Tới Liên"
P1425:   }
P1426: }
P1427: 
P1428: {
P1429:   "id": "GTL_NLSX03",
P1430:   "coSoSanXuatId": "GBT_GTL",
P1431:   "name": "Màu sắc và men gốm",
P1432:   "order": 3,
P1433:   "description": "Tham khảo các tông màu và hiệu ứng men phù hợp với concept, không gian trưng bày hoặc yêu cầu thẩm mỹ của khách hàng.",
P1434:   "image": {
P1435:     "url": "\download\images\CS Gốm tới liên\nanglucsanxuat3.png",
P1436:     "alt": "Màu sắc và men gốm Gốm Tới Liên"
P1437:   }
P1438: }
P1439: 
P1440: {
P1441:   "id": "GTL_NLSX04",
P1442:   "coSoSanXuatId": "GBT_GTL",
P1443:   "name": "Sản phẩm theo yêu cầu",
P1444:   "order": 4,
P1445:   "description": "Nhận mẫu tham khảo và yêu cầu về số lượng để trao đổi phương án sản xuất bộ ấm chén phục vụ chụp ảnh, quay phim, quảng cáo...",
P1446:   "image": {
P1447:     "url": "\download\images\CS Gốm tới liên\nanglucsanxuat4.jpg",
P1448:     "alt": "Sản phẩm theo yêu cầu Gốm Tới Liên"
P1449:   }
P1450: }
P1451: 4.13. Năng lực sản xuất của GỐM SỨ MẠNH HOA
P1452: {
P1453:   "id": "GSMH_NLSX01",
P1454:   "coSoSanXuatId": "GBT_GSMH",
P1455:   "name": "Đa dạng dòng sản phẩm",
P1456:   "order": 1,
P1457:   "description": "Danh mục bát đĩa, ấm chén, cốc, lọ hoa và đồ trang trí đáp ứng nhiều mục đích sử dụng, từ gia đình đến không gian kinh doanh.",
P1458:   "image": {
P1459:     "url": "\download\images\CS Gốm Mạnh Hoa\nanglucsanxuat1.jpg",
P1460:     "alt": "Đa dạng dòng sản phẩm Gốm Sứ Mạnh Hoa"
P1461:   }
P1462: }
P1463: 
P1464: {
P1465:   "id": "GSMH_NLSX02",
P1466:   "coSoSanXuatId": "GBT_GSMH",
P1467:   "name": "Ấm chén và cốc",
P1468:   "order": 2,
P1469:   "description": "Đa dạng kiểu dáng, phù hợp sử dụng tại gia đình, văn phòng và quán cà phê.",
P1470:   "image": {
P1471:     "url": "\download\images\CS Gốm Mạnh Hoa\nanglucsanxuat2.jpg",
P1472:     "alt": "Ấm chén và cốc Gốm Sứ Mạnh Hoa"
P1473:   }
P1474: }
P1475: 
P1476: {
P1477:   "id": "GSMH_NLSX03",
P1478:   "coSoSanXuatId": "GBT_GSMH",
P1479:   "name": "Gốm sứ trang trí",
P1480:   "order": 3,
P1481:   "description": "Gợi ý các dòng cốc, đĩa và bộ đồ ăn phù hợp với phong cách nhà hàng, quán cà phê.",
P1482:   "image": {
P1483:     "url": "\download\images\CS Gốm Mạnh Hoa\nanglucsanxuat3.png",
P1484:     "alt": "Gốm sứ trang trí Gốm Sứ Mạnh Hoa"
P1485:   }
P1486: }
P1487: 
P1488: {
P1489:   "id": "GSMH_NLSX04",
P1490:   "coSoSanXuatId": "GBT_GSMH",
P1491:   "name": "Sản phẩm cho những dịp đặc biệt",
P1492:   "order": 4,
P1493:   "description": "Gợi ý các bộ gốm sứ phục vụ nhu cầu tri ân khách hàng, tặng đối tác, quà tặng sự kiện hoặc quà tặng thương hiệu.",
P1494:   "image": {
P1495:     "url": "\download\images\CS Gốm Mạnh Hoa\nanglucsanxuat4.jpg",
P1496:     "alt": "Sản phẩm cho những dịp đặc biệt Gốm Sứ Mạnh Hoa"
P1497:   }
P1498: }
P1499: 4.14. Năng lực sản xuất của LỤA NHA XÁ
P1500: {
P1501:   "id": "LNX_NLSX01",
P1502:   "coSoSanXuatId": "LNX_LNX",
P1503:   "name": "Lụa tơ tằm truyền thống",
P1504:   "order": 1,
P1505:   "description": "Cung cấp các dòng lụa tơ tằm với vẻ đẹp mềm mại, thanh lịch, phục vụ nhu cầu may mặc và sáng tạo trang phục.",
P1506:   "image": {
P1507:     "url": "\download\images\CS Lụa nha xá\nanglucsanxuat1.webp",
P1508:     "alt": "Lụa tơ tằm truyền thống Lụa Nha Xá"
P1509:   }
P1510: }
P1511: 
P1512: {
P1513:   "id": "LNX_NLSX02",
P1514:   "coSoSanXuatId": "LNX_LNX",
P1515:   "name": "Đa dạng màu sắc, họa tiết",
P1516:   "order": 2,
P1517:   "description": "Từ lụa trơn đến lụa hoa, mang đến nhiều lựa chọn chất liệu cho áo dài và các bộ sưu tập thời trang.",
P1518:   "image": {
P1519:     "url": "\download\images\CS Lụa nha xá\nanglucsanxuat2.webp",
P1520:     "alt": "Đa dạng màu sắc, họa tiết Lụa Nha Xá"
P1521:   }
P1522: }
P1523: 
P1524: {
P1525:   "id": "LNX_NLSX03",
P1526:   "coSoSanXuatId": "LNX_LNX",
P1527:   "name": "Ứng dụng trong thời trang",
P1528:   "order": 3,
P1529:   "description": "Phù hợp với trang phục truyền thống, thiết kế hiện đại và nhu cầu của các nhà thiết kế, cơ sở may đo.",
P1530:   "image": {
P1531:     "url": "\download\images\CS Lụa nha xá\nanglucsanxuat3.png",
P1532:     "alt": "Ứng dụng trong thời trang Lụa Nha Xá"
P1533:   }
P1534: }
P1535: 
P1536: {
P1537:   "id": "LNX_NLSX04",
P1538:   "coSoSanXuatId": "LNX_LNX",
P1539:   "name": "Quà tặng mang dấu ấn",
P1540:   "order": 4,
P1541:   "description": "Khăn lụa và phụ kiện là lựa chọn quà tặng tinh tế dành cho đối tác, sự kiện và doanh nghiệp.",
P1542:   "image": {
P1543:     "url": "\download\images\CS Lụa nha xá\nanglucsanxuat4.png",
P1544:     "alt": "Quà tặng mang dấu ấn Lụa Nha Xá"
P1545:   }
P1546: }
P1547: 4.15. Năng lực sản xuất của SILK HẠ VY
P1548: {
P1549:   "id": "SHV_NLSX01",
P1550:   "coSoSanXuatId": "LNX_SHV",
P1551:   "name": "Kinh nghiệm & Năng lực chuyên môn",
P1552:   "order": 1,
P1553:   "description": "Gia đình có hơn 30 năm gắn bó với nghề sản xuất và kinh doanh lụa tơ tằm. Cung cấp tơ sợi, dệt hoa văn, nhuộm màu và hoàn thiện vải lụa.",
P1554:   "image": {
P1555:     "url": "\download\images\Silk Hạ Vy\nanglucsanxuat1.jpg",
P1556:     "alt": "Kinh nghiệm & Năng lực chuyên môn Silk Hạ Vy"
P1557:   }
P1558: }
P1559: 
P1560: {
P1561:   "id": "SHV_NLSX02",
P1562:   "coSoSanXuatId": "LNX_SHV",
P1563:   "name": "Khả năng tùy chỉnh",
P1564:   "order": 2,
P1565:   "description": "Nhận nhuộm theo mẫu màu, dệt hoa văn và xử lý lụa theo yêu cầu.",
P1566:   "image": {
P1567:     "url": "\download\images\Silk Hạ Vy\nanglucsanxuat2.jpg",
P1568:     "alt": "Khả năng tùy chỉnh Silk Hạ Vy"
P1569:   }
P1570: }
P1571: 
P1572: {
P1573:   "id": "SHV_NLSX03",
P1574:   "coSoSanXuatId": "LNX_SHV",
P1575:   "name": "Định hướng sản phẩm",
P1576:   "order": 3,
P1577:   "description": "Chủ động nguồn nguyên liệu và công đoạn nhuộm nhằm hỗ trợ tiến độ, đáp ứng nhu cầu đặt hàng.",
P1578:   "image": {
P1579:     "url": "\download\images\Silk Hạ Vy\nanglucsanxuat3.jpg",
P1580:     "alt": "Định hướng sản phẩm Silk Hạ Vy"
P1581:   }
P1582: }
P1583: 
P1584: {
P1585:   "id": "SHV_NLSX04",
P1586:   "coSoSanXuatId": "LNX_SHV",
P1587:   "name": "Đối tượng khách hàng",
P1588:   "order": 4,
P1589:   "description": "Xưởng dệt, nhà may, đại lý vải, thương hiệu thời trang, khách sỉ và khách lẻ.",
P1590:   "image": {
P1591:     "url": "\download\images\Silk Hạ Vy\nanglucsanxuat4.png",
P1592:     "alt": "Đối tượng khách hàng Silk Hạ Vy"
P1593:   }
P1594: }
```

## P1595 — 5. Dự án đã thực hiện

```text
P1595: 5. Dự án đã thực hiện
P1596: 5.1. Dự án đã thực hiện của cơ sở sản xuất NÓN LÁ HẢI YẾN
P1597: id
P1598: coSoSanXuatId: NÓN LÁ HẢI YẾN
P1599: Name: 
P1600: Description
P1601: link
P1602: createdAt
P1603: 5.2. Dự án đã thực hiện của HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG
P1604: id
P1605: coSoSanXuatId
P1606: name
P1607: Description
P1608: link
P1609: createdAt
P1610: 5.3. Dự án đã thực hiện của HOA NÓN LÀNG CHUÔNG
P1611: id
P1612: coSoSanXuatId
P1613: name
P1614: Description
P1615: Link: https://baolaocai.vn/trai-nghiem-lam-non-la-lang-chuong-tai-pho-co-ha-noi-post372100.html  
P1616: createdAt
P1617: 5.4. Dự án đã thực hiện của QUẠT CHÀNG SƠN
P1618: id
P1619: coSoSanXuatId
P1620: name
P1621: Description
P1622: link
P1623: createdAt
P1624: 5.5. Dự án đã thực hiện của QUẠT TỪ TÂM
P1625: id
P1626: coSoSanXuatId
P1627: name
P1628: Description
P1629: link
P1630: createdAt
P1631: 5.6. Dự án đã thực hiện của QUẠT PHƯƠNG
P1632: id
P1633: coSoSanXuatId
P1634: name
P1635: Description
P1636: link
P1637: createdAt
P1638: 5.7. Dự án đã thực hiện của MÂY TRE ĐAN VIỆT QUANG
P1639: id
P1640: coSoSanXuatId
P1641: name
P1642: Description
P1643: link
P1644: createdAt
P1645: 5.8. Dự án đã thực hiện của MÂY TRE ĐAN TUẤN ANH
P1646: id
P1647: coSoSanXuatId
P1648: name
P1649: Description
P1650: Link: https://nongthonmoihanoi.gov.vn/Backend/data/document/63141438-sanphamocop_20231-in.pdf? 
P1651: createdAt
P1652: 5.9. Dự án đã thực hiện của HOÀNG ANH CERAMICS
P1653: id
P1654: coSoSanXuatId
P1655: name
P1656: Description
P1657: link
P1658: createdAt
P1659: 5.10. Dự án đã thực hiện của BÁCH NGÂN HỶ
P1660: id
P1661: coSoSanXuatId
P1662: name
P1663: Description
P1664: link
P1665: createdAt
P1666: 5.11. Dự án đã thực hiện của GỐM HẢI LONG
P1667: id
P1668: coSoSanXuatId
P1669: name
P1670: Description
P1671: link
P1672: createdAt
P1673: 5.12. Dự án đã thực hiện của GỐM TỚI LIÊN
P1674: id
P1675: coSoSanXuatId
P1676: name
P1677: Description
P1678: link
P1679: createdAt
P1680: 5.13. Dự án đã thực hiện của GỐM SỨ MẠNH HOA
P1681: id
P1682: coSoSanXuatId
P1683: name
P1684: Description
P1685: link
P1686: createdAt
P1687: 5.14. Dự án đã thực hiện của LỤA NHA XÁ
P1688: id
P1689: coSoSanXuatId
P1690: name
P1691: Description
P1692: link
P1693: createdAt
P1694: 5.15. Dự án đã thực hiện của SILK HẠ VY
P1695: id
P1696: coSoSanXuatId
P1697: name
P1698: Description
P1699: link
P1700: createdAt
```

## P1701 — 6. Review

```text
P1701: 6. Review
P1702: 6.1. Review về NÓN LÁ HẢI YẾN
P1703: {
P1704:   "id": "rv_NLHY01",
P1705:   "coSoSanXuatId": "NLC_NLHY",
P1706:   "reviewerName": "Hà Trang",
P1707:   "reviewTime": "2026-05-15",
P1708:   "order": 1,
P1709:   "content": "Các dòng nón thủ công có tiềm năng trở thành quà tặng đối tác và sản phẩm lưu niệm mang đậm dấu ấn văn hóa Việt Nam. Khả năng đặt thiết kế riêng cũng giúp doanh nghiệp linh hoạt hơn khi lựa chọn sản phẩm phù hợp với chủ đề và nhu cầu của từng chương trình.",
P1710:   "avatar": null
P1711: }
P1712: 
P1713: 
P1714: {
P1715:   "id": "rv_NLHY02",
P1716:   "coSoSanXuatId": "NLC_NLHY",
P1717:   "reviewerName": "Phạm Nhy",
P1718:   "reviewTime": "2026-08-24",
P1719:   "order": 2,
P1720:   "content": "Những sản phẩm như nón cổ, nón quai thao và đèn trang trí mang đến nhiều ý tưởng sáng tạo cho không gian trưng bày. Tôi đánh giá cao tiềm năng kết hợp chất liệu thủ công truyền thống với phong cách thiết kế hiện đại.",
P1721:   "avatar": null
P1722: }
P1723: 
P1724: {
P1725:   "id": "rv_NLHY03",
P1726:   "coSoSanXuatId": "NLC_NLHY",
P1727:   "reviewerName": "Phạm Mai Chi",
P1728:   "reviewTime": "2025-07-25",
P1729:   "order": 3,
P1730:   "content": "Các dòng nón thủ công có tiềm năng trở thành quà tặng đối tác và sản phẩm lưu niệm mang đậm dấu ấn văn hóa Việt Nam. Khả năng đặt thiết kế riêng cũng giúp doanh nghiệp linh hoạt hơn khi lựa chọn sản phẩm phù hợp với chủ đề và nhu cầu của từng chương trình",
P1731:   "avatar": null
P1732: }
P1733: 6.2. Review về HTX MÂY TRE NÓN LÁ TẠ THU HƯƠNG
P1734: {
P1735:   "id": "rv_NLTTH01",
P1736:   "coSoSanXuatId": "NLC_NLTTH",
P1737:   "reviewerName": "Nguyễn Mai Thư",
P1738:   "reviewTime": "2026-09-13",
P1739:   "order": 1,
P1740:   "content": "Tôi đặc biệt yêu thích chiếc nón lá bởi hình dáng rất đẹp và duyên dáng. Những hình vẽ trên nón cũng ấn tượng và có ý nghĩa. Tôi mua nón để sưu tầm, phối hợp bài trí nhà cho đẹp và cũng để làm phong thủy",
P1741:   "avatar": null
P1742: }
P1743: {
P1744:   "id": "rv_NLTTH02",
P1745:   "coSoSanXuatId": "NLC_NLTTH",
P1746:   "reviewerName": "Vũ Minh Anh",
P1747:   "reviewTime": "2026-08-25",
P1748:   "order": 2,
P1749:   "content": "Hình ảnh chiếc áo dài truyền thống của phụ nữ Việt Nam luôn gắn liền với chiếc nón lá duyên dáng. Bởi vậy, tôi mua chiếc nón này làm món quà nhỏ tặng vợ nhân ngày sinh nhật.",
P1750:   "avatar": null
P1751: }
P1752: {
P1753:   "id": "rv_NLTTH03",
P1754:   "coSoSanXuatId": "NLC_NLTTH",
P1755:   "reviewerName": "Hà Thùy Linh",
P1756:   "reviewTime": "2026-05-14",
P1757:   "order": 3,
P1758:   "content": "Các sản phẩm nón thủ công có nét đẹp truyền thống, phù hợp với những chương trình văn hóa và biểu diễn nghệ thuật. Khả năng tùy chỉnh kích thước, kiểu dáng giúp chúng tôi dễ dàng lựa chọn sản phẩm phù hợp với ý tưởng tổ chức.",
P1759:   "avatar": null
P1760: }
P1761: 6.3. Review về HOA NÓN LÀNG CHUÔNG
P1762: {
P1763:   "id": "rv_HNLC01",
P1764:   "coSoSanXuatId": "NLC_HNLC",
P1765:   "reviewerName": "Vũ Thị Thanh Nhàn",
P1766:   "reviewTime": "2026-04-02",
P1767:   "order": 1,
P1768:   "content": "Nón Làng Chuông mang vẻ đẹp truyền thống và tạo điểm nhấn độc đáo cho các chương trình văn hóa. Những mẫu nón được trang trí sáng tạo giúp chúng tôi có thêm ý tưởng kết hợp yếu tố bản sắc Việt vào không gian và hoạt động sự kiện",
P1769:   "avatar": null
P1770: }
P1771: {
P1772:   "id": "rv_HNLC02",
P1773:   "coSoSanXuatId": "NLC_HNLC",
P1774:   "reviewerName": "Nguyễn Thị Lan Anh",
P1775:   "reviewTime": "2026-06-06",
P1776:   "order": 2,
P1777:   "content": "Các dòng nón thủ công có tiềm năng trở thành quà tặng đối tác và sản phẩm lưu niệm mang đậm dấu ấn văn hóa Việt Nam. Khả năng đặt thiết kế riêng cũng giúp doanh nghiệp linh hoạt hơn khi lựa chọn sản phẩm phù hợp với chủ đề và nhu cầu của từng chương trình",
P1778:   "avatar": null
P1779: }
P1780: {
P1781:   "id": "rv_HNLC03",
P1782:   "coSoSanXuatId": "NLC_HNLC",
P1783:   "reviewerName": "Kiều Hà Trang",
P1784:   "reviewTime": "2025-08-13",
P1785:   "order": 3,
P1786:   "content": "Các sản phẩm nón thủ công có nét đẹp truyền thống, phù hợp với những chương trình văn hóa và biểu diễn nghệ thuật. Khả năng tùy chỉnh kích thước, kiểu dáng giúp chúng tôi dễ dàng lựa chọn sản phẩm phù hợp với ý tưởng tổ chức.",
P1787:   "avatar": null
P1788: }
P1789: 6.4. Review về QUẠT CHÀNG SƠN
P1790: {
P1791:   "id": "rv_QCS01",
P1792:   "coSoSanXuatId": "QCS_QCS",
P1793:   "reviewerName": "Phạm Như Quỳnh",
P1794:   "reviewTime": "2026-01-11",
P1795:   "order": 1,
P1796:   "content": "Quạt giấy Chàng Sơn mang nét đẹp truyền thống nhưng vẫn có thể linh hoạt theo concept của từng chương trình. Đây là lựa chọn phù hợp để làm quà tặng, đạo cụ biểu diễn hoặc tạo điểm nhấn văn hóa cho sự kiện.",
P1797:   "avatar": null
P1798: }
P1799: {
P1800:   "id": "rv_QCS02",
P1801:   "coSoSanXuatId": "QCS_QCS",
P1802:   "reviewerName": "Nguyễn Thái Tuấn",
P1803:   "reviewTime": "2025-06-15",
P1804:   "order": 2,
P1805:   "content": "Sản phẩm có tính ứng dụng cao, mẫu mã đa dạng và có thể cân nhắc thiết kế riêng theo nhu cầu đặt hàng. Quạt giấy không chỉ là món quà lưu niệm mà còn góp phần truyền tải nét văn hóa Việt đến khách hàng và đối tác.",
P1806:   "avatar": null
P1807: }
P1808: {
P1809:   "id": "rv_QCS03",
P1810:   "coSoSanXuatId": "QCS_QCS",
P1811:   "reviewerName": "Hiền Chi",
P1812:   "reviewTime": "2026-02-01",
P1813:   "order": 3,
P1814:   "content": "Họa tiết trên quạt giấy mở ra nhiều ý tưởng sáng tạo cho các bộ ảnh, hoạt động trải nghiệm và chiến dịch truyền thông mang bản sắc Việt. Sự kết hợp giữa chất liệu truyền thống và thiết kế hiện đại giúp sản phẩm trở nên gần gũi với nhiều đối tượng.",
P1815:   "avatar": null
P1816: }
P1817: 6.5. Review về QUẠT TỪ TÂM
P1818: {
P1819:   "id": "rv_QTT01",
P1820:   "coSoSanXuatId": "QCS_QTT",
P1821:   "reviewerName": "Trần Phương Ý",
P1822:   "reviewTime": "2026-02-25",
P1823:   "order": 1,
P1824:   "content": "Điều tôi đặc biệt yêu thích ở Quạt Từ Tâm chính là sự tận tâm – từ khâu tư vấn, thiết kế đến giao hàng đều nhanh chóng, chuyên nghiệp. Các bạn đã giúp tôi hoàn thiện lô quạt đúng giờ để gửi đi Mỹ, điều này thực sự khiến tôi rất cảm kích.",
P1825:   "avatar": null
P1826: }
P1827: {
P1828:   "id": "rv_QTT02",
P1829:   "coSoSanXuatId": "QCS_QTT",
P1830:   "reviewerName": "Trần Văn Quân",
P1831:   "reviewTime": "2025-02-07",
P1832:   "order": 2,
P1833:   "content": "Những chiếc quạt từ Quạt Từ Tâm đã làm cho ngày của tôi trở nên thật đặc biệt! Các vị khách đều cảm tác khen ngợi và yêu thích chúng. Điều đó làm tôi cảm thấy thật tự hào khi mang một phần giá trị Việt Nam đến với mọi người.",
P1834:   "avatar": null
P1835: }
P1836: {
P1837:   "id": "rv_QTT03",
P1838:   "coSoSanXuatId": "QCS_QTT",
P1839:   "reviewerName": "Nguyễn Yến Chi",
P1840:   "reviewTime": "2026-04-14",
P1841:   "order": 3,
P1842:   "content": "Thiết kế quạt thể hiện rõ thông điệp và hình ảnh thương hiệu của chúng tôi với mặt sau hài hòa, sắc nét. Chất liệu nan tre và vải không chỉ thân thiện với môi trường mà còn nhẹ nhàng, dễ sử dụng – điều này rất phù hợp với các giá trị mà chúng tôi đang theo đuổi.",
P1843:   "avatar": null
P1844: }
P1845: 6.6. Review về QUẠT PHƯƠNG
P1846: {
P1847:   "id": "rv_QP01",
P1848:   "coSoSanXuatId": "QCS_QP",
P1849:   "reviewerName": "Trần Thu Anh",
P1850:   "reviewTime": "2026-10-19",
P1851:   "order": 1,
P1852:   "content": "Tôi ấn tượng với cách Quạt Phương kết hợp chất liệu truyền thống và kỹ thuật in hiện đại. Mỗi chiếc quạt không chỉ có tính thẩm mỹ mà còn mang nét văn hóa Việt Nam, rất phù hợp để làm quà tặng cho bạn bè và đối tác quốc tế.",
P1853:   "avatar": null
P1854: }
P1855: {
P1856:   "id": "rv_QP02",
P1857:   "coSoSanXuatId": "QCS_QP",
P1858:   "reviewerName": "Nguyễn Thị Kim Chi",
P1859:   "reviewTime": "2025-08-27",
P1860:   "order": 2,
P1861:   "content": "Điều khiến chúng tôi hài lòng là sự tỉ mỉ trong từng chi tiết và chất lượng hoàn thiện của sản phẩm. Quạt thủ công không chỉ đáp ứng nhu cầu sử dụng mà còn phù hợp với không gian văn hóa, lịch sử, nơi mỗi sản phẩm đều cần thể hiện được bản sắc truyền thống",
P1862:   "avatar": null
P1863: }
P1864: {
P1865:   "id": "rv_QP03",
P1866:   "coSoSanXuatId": "QCS_QP",
P1867:   "reviewerName": "Trần Tuấn Nam",
P1868:   "reviewTime": "2026-04-03",
P1869:   "order": 3,
P1870:   "content": "Với ngành du lịch, một món quà nhỏ nhưng mang dấu ấn địa phương có thể tạo nên trải nghiệm đáng nhớ cho du khách. Quạt thủ công là lựa chọn thú vị bởi vừa hữu ích, vừa giúp giới thiệu nét đẹp văn hóa Việt Nam theo cách gần gũi",
P1871:   "avatar": null
P1872: }
P1873: 6.7. Review về MÂY TRE ĐAN VIỆT QUANG
P1874: {
P1875:   "id": "rv_MTDVQ01",
P1876:   "coSoSanXuatId": "MTD_MTDVQ",
P1877:   "reviewerName": "Trần Quốc Huy",
P1878:   "reviewTime": "2024-07-01",
P1879:   "order": 1,
P1880:   "content": "Các sản phẩm mây tre đan có tính thẩm mỹ cao. Tôi đánh giá cao khả năng ứng dụng chất liệu truyền thống vào những sản phẩm phù hợp với nhu cầu quà tặng doanh nghiệp, vừa mang giá trị sử dụng, vừa góp phần lan tỏa bản sắc văn hóa Việt Nam.",
P1881:   "avatar": null
P1882: }
P1883: {
P1884:   "id": "rv_MTDVQ02",
P1885:   "coSoSanXuatId": "MTD_MTDVQ",
P1886:   "reviewerName": "Nguyễn Minh Anh",
P1887:   "reviewTime": "2025-11-25",
P1888:   "order": 2,
P1889:   "content": "Sản phẩm gây ấn tượng bởi chất liệu tự nhiên, đường đan tỉ mỉ và vẻ đẹp mộc mạc. Các dòng sản phẩm mây tre có tiềm năng ứng dụng trong nhiều không gian như nhà hàng, khách sạn, khu nghỉ dưỡng và cửa hàng theo phong cách gần gũi với thiên nhiên.",
P1890:   "avatar": null
P1891: }
P1892: {
P1893:   "id": "rv_MTDVQ03",
P1894:   "coSoSanXuatId": "MTD_MTDVQ",
P1895:   "reviewerName": "Lê Thu Hà",
P1896:   "reviewTime": "2025-03-29",
P1897:   "order": 3,
P1898:   "content": "Điểm nổi bật của sản phẩm nằm ở sự kết hợp giữa kỹ thuật đan truyền thống và khả năng ứng dụng trong đời sống hiện đại. Đây là nguồn cảm hứng hữu ích cho các dự án thiết kế nội thất, trang trí không gian và phát triển sản phẩm thủ công mang dấu ấn văn hóa Việt.",
P1899:   "avatar": null
P1900: }
P1901: 6.8. Review về Mây tre đan Tuấn Anh
P1902: {
P1903:   "id": "rv_MTDTA01",
P1904:   "coSoSanXuatId": "MTD_MTDTA",
P1905:   "reviewerName": "Bùi Ngọc Linh",
P1906:   "reviewTime": "2024-07-31",
P1907:   "order": 1,
P1908:   "content": "Các sản phẩm có nhiều tiềm năng ứng dụng trong lĩnh vực quà tặng và đồ dùng trang trí. Khả năng trao đổi về mẫu mã theo yêu cầu giúp doanh nghiệp có thêm lựa chọn khi phát triển sản phẩm phù hợp với định hướng thương hiệu.",
P1909:   "avatar": null
P1910: }
P1911: {
P1912:   "id": "rv_MTDTA02",
P1913:   "coSoSanXuatId": "MTD_MTDTA",
P1914:   "reviewerName": "Cao Xuân Vũ",
P1915:   "reviewTime": "2025-03-14",
P1916:   "order": 2,
P1917:   "content": "Những sản phẩm như khay đan và hộp đựng khăn giấy phù hợp với các không gian theo đuổi phong cách tự nhiên, gần gũi. Việc lựa chọn mẫu mã theo nhu cầu sử dụng là yếu tố đáng cân nhắc khi tìm kiếm sản phẩm cho khách sạn, homestay và nhà hàng.",
P1918:   "avatar": null
P1919: }
P1920: {
P1921:   "id": "rv_MTDTA03",
P1922:   "coSoSanXuatId": "MTD_MTDTA",
P1923:   "reviewerName": "Phạm Khánh Ly",
P1924:   "reviewTime": "2025-06-28",
P1925:   "order": 3,
P1926:   "content": "Việc tiếp nhận thiết kế riêng mở ra cơ hội phát triển các sản phẩm có kiểu dáng khác biệt. Đây là hướng đi đáng quan tâm đối với những thương hiệu muốn khai thác chất liệu và kỹ thuật thủ công để tạo dấu ấn riêng cho sản phẩm.",
P1927:   "avatar": null
P1928: }
P1929: 6.9. Review về Hoàng Anh Ceramics
P1930: {
P1931:   "id": "rv_HAC01",
P1932:   "coSoSanXuatId": "GBT_HAC",
P1933:   "reviewerName": "Nguyễn Minh Anh",
P1934:   "reviewTime": "2026-09-25",
P1935:   "order": 1,
P1936:   "content": "Tôi khá ấn tượng với các mẫu heo đất tại Hoàng Anh Ceramics. Sản phẩm có nhiều kiểu dáng, màu sắc dễ thương, phù hợp để tiết kiệm hoặc làm quà tặng. Có nhiều kích thước để lựa chọn nên khá tiện.",
P1937:   "avatar": null
P1938: }
P1939: {
P1940:   "id": "rv_HAC02",
P1941:   "coSoSanXuatId": "GBT_HAC",
P1942:   "reviewerName": "Trần Thu Hà",
P1943:   "reviewTime": "2026-03-12",
P1944:   "order": 2,
P1945:   "content": "Chúng tôi tìm kiếm những sản phẩm gốm sứ có thể sử dụng làm quà tặng và tạo dấu ấn riêng cho thương hiệu. Hoàng Anh Ceramics có các lựa chọn đa dạng, phù hợp để tham khảo cho những đơn hàng quà tặng theo nhu cầu của doanh nghiệp.",
P1946:   "avatar": null
P1947: }
P1948: {
P1949:   "id": "rv_HAC03",
P1950:   "coSoSanXuatId": "GBT_HAC",
P1951:   "reviewerName": "Emily Carter",
P1952:   "reviewTime": "2026-06-04",
P1953:   "order": 3,
P1954:   "content": "Tôi bị thu hút bởi những thiết kế ngộ nghĩnh và sự đa dạng của các mẫu heo đất bằng gốm. Chúng sẽ là những món quà đáng yêu và vật trang trí thú vị. Tôi cũng rất trân trọng kỹ thuật thủ công truyền thống đằng sau nghề gốm Việt Nam.",
P1955:   "avatar": null
P1956: }
P1957: 6.10. Review về BÁCH NGÂN HỶ
P1958: {
P1959:   "id": "rv_BNH01",
P1960:   "coSoSanXuatId": "GBT_BNH",
P1961:   "reviewerName": "Trần Phương Mai",
P1962:   "reviewTime": "2025-07-24",
P1963:   "order": 1,
P1964:   "content": "Tôi rất thích phong cách của Bách Ngân Hỷ. Họa tiết vẽ tay tinh tế, màu sắc nhẹ nhàng và có nét riêng, đặc biệt là bộ sưu tập Cherry. Sản phẩm vừa có thể sử dụng hằng ngày, vừa phù hợp để trang trí không gian sống.",
P1965:   "avatar": null
P1966: }
P1967: {
P1968:   "id": "rv_BNH02",
P1969:   "coSoSanXuatId": "GBT_BNH",
P1970:   "reviewerName": "Nguyễn Nhật Minh",
P1971:   "reviewTime": "2025-02-15",
P1972:   "order": 2,
P1973:   "content": "Tôi rất thích phong cách của Bách Ngân Hỷ. Họa tiết vẽ tay tinh tế, màu sắc nhẹ nhàng và có nét riêng, đặc biệt là bộ sưu tập Cherry. Sản phẩm vừa có thể sử dụng hằng ngày, vừa phù hợp để trang trí không gian sống.",
P1974:   "avatar": null
P1975: }
P1976: {
P1977:   "id": "rv_BNH03",
P1978:   "coSoSanXuatId": "GBT_BNH",
P1979:   "reviewerName": "Ngô Ngọc Ánh",
P1980:   "reviewTime": "2025-09-19",
P1981:   "order": 3,
P1982:   "content": "Sự kết hợp giữa kỹ thuật thủ công truyền thống Việt Nam và họa tiết lấy cảm hứng từ châu Âu hiện đại rất cuốn hút. Tôi đặc biệt thích màu sắc nhẹ nhàng và những chi tiết sinh động, tạo nên vẻ đẹp vừa thanh lịch vừa đương đại.",
P1983:   "avatar": null
P1984: }
P1985: 6.11. Review về GỐM HẢI LONG
P1986: {
P1987:   "id": "rv_GHL01",
P1988:   "coSoSanXuatId": "GBT_GHL",
P1989:   "reviewerName": "Trần Khánh Linh",
P1990:   "reviewTime": "2025-07-26",
P1991:   "order": 1,
P1992:   "content": "Những sản phẩm mang nét văn hóa truyền thống có tiềm năng sử dụng làm quà tặng hoặc vật phẩm trang trí cho sự kiện. Sự đa dạng về kiểu dáng giúp đơn vị tổ chức có thêm lựa chọn phù hợp với chủ đề chương trình.",
P1993:   "avatar": null
P1994: }
P1995: {
P1996:   "id": "rv_GHL02",
P1997:   "coSoSanXuatId": "GBT_GHL",
P1998:   "reviewerName": "Đỗ Ngọc Mai",
P1999:   "reviewTime": "2024-05-13",
P2000:   "order": 2,
P2001:   "content": "Mình đánh giá cao nét thủ công và sự đa dạng trong thiết kế sản phẩm. Đây là yếu tố giúp các mặt hàng gốm có điểm nhấn riêng, phù hợp với những khách hàng yêu thích sản phẩm mang dấu ấn truyền thống.",
P2002:   "avatar": null
P2003: }
P2004: {
P2005:   "id": "rv_GHL03",
P2006:   "coSoSanXuatId": "GBT_GHL",
P2007:   "reviewerName": "Nguyễn Đức Thành",
P2008:   "reviewTime": "2025-09-05",
P2009:   "order": 3,
P2010:   "content": "Các sản phẩm gốm có thể ứng dụng trong nhiều không gian khác nhau, từ nhà ở đến quán cà phê và nhà hàng. Nếu có thêm thông tin về kích thước, chất liệu và khả năng đặt theo yêu cầu, doanh nghiệp sẽ thuận tiện hơn trong quá trình lựa chọn.",
P2011:   "avatar": null
P2012: }
P2013: 6.12. Review về GỐM TỚI LIÊN
P2014: {
P2015:   "id": "rv_GTL01",
P2016:   "coSoSanXuatId": "GBT_GTL",
P2017:   "reviewerName": "Hà Mai Phương",
P2018:   "reviewTime": "2025-01-21",
P2019:   "order": 1,
P2020:   "content": "Mình rất ưng chiếc ấm đất nung củi này. Dáng ấm nhỏ gọn, cầm vừa tay, chất gốm đanh chắc và con cua nổi trên nắp làm rất tinh xảo, nhìn là thích ngay. Chờ lò hơn 20 ngày nhưng thành phẩm ra rất đáng để đợi, ai mê trà và đồ gốm thủ công nên thử một lần.",
P2021:   "avatar": null
P2022: }
P2023: {
P2024:   "id": "rv_GTL02",
P2025:   "coSoSanXuatId": "GBT_GTL",
P2026:   "reviewerName": "Trần Văn Minh",
P2027:   "reviewTime": "2025-12-13",
P2028:   "order": 2,
P2029:   "content": "Mình chấm khoảng 85% hài lòng, chỉ thiếu chút độ đanh của gốm, nhưng vẫn đáng để thử và mình sẽ đặt thêm một chiếc nữa.",
P2030:   "avatar": null
P2031: }
P2032: {
P2033:   "id": "rv_GTL03",
P2034:   "coSoSanXuatId": "GBT_GTL",
P2035:   "reviewerName": "Lữ Thanh Hà",
P2036:   "reviewTime": "2026-06-05",
P2037:   "order": 3,
P2038:   "content": "Chiếc ấm “Bạch Cúc Trường Tồn” nung củi thủ công này làm mình rất ưng. Cầm lên có cảm giác như chạm vào đất, lửa và khói, mộc mạc mà có hồn. Đúng chất gốm Việt, càng dùng càng thấy yêu, ai mê gốm nung củi nên thử một lần.",
P2039:   "avatar": null
P2040: }
P2041: 6.13. Review về Gốm SỨ Mạnh Hoa
P2042: {
P2043:   "id": "rv_GSMH01",
P2044:   "coSoSanXuatId": "GBT_GSMH",
P2045:   "reviewerName": "Nguyễn Mai Chi",
P2046:   "reviewTime": "2024-07-21",
P2047:   "order": 1,
P2048:   "content": "Tôi thích những sản phẩm gốm sứ có thiết kế trang nhã, dễ sử dụng trong sinh hoạt hằng ngày. Các mẫu ấm chén và đồ trang trí mang lại cảm giác gần gũi, phù hợp để sử dụng trong gia đình hoặc làm quà tặng.",
P2049:   "avatar": null
P2050: }
P2051: {
P2052:   "id": "rv_GSMH02",
P2053:   "coSoSanXuatId": "GBT_GSMH",
P2054:   "reviewerName": "Ngueyenx Khánh Toàn",
P2055:   "reviewTime": "2025-01-05",
P2056:   "order": 2,
P2057:   "content": "Điều chúng tôi quan tâm khi lựa chọn gốm sứ là sự đồng bộ về kiểu dáng và khả năng đáp ứng nhu cầu sử dụng thực tế. Mô hình hợp tác với cơ sở tại làng nghề Bát Tràng mang đến thêm lựa chọn khi tìm kiếm sản phẩm cho hoạt động kinh doanh.",
P2058:   "avatar": null
P2059: }
P2060: {
P2061:   "id": "rv_GSMH03",
P2062:   "coSoSanXuatId": "GBT_GSMH",
P2063:   "reviewerName": "Hoàng Hải An",
P2064:   "reviewTime": "2025-01-19",
P2065:   "order": 3,
P2066:   "content": "Sự kết hợp giữa kỹ thuật thủ công truyền thống Việt Nam và họa tiết lấy cảm hứng từ châu Âu hiện đại rất cuốn hút. Tôi đặc biệt thích màu sắc nhẹ nhàng và những chi tiết sinh động, tạo nên vẻ đẹp vừa thanh lịch vừa đương đại.",
P2067:   "avatar": null
P2068: }
P2069: 6.14. Review về LỤA NHA XÁ
P2070: {
P2071:   "id": "rv_LNX01",
P2072:   "coSoSanXuatId": "LNX_LNX",
P2073:   "reviewerName": "Nguyễn Thu Hương",
P2074:   "reviewTime": "2025-03-25",
P2075:   "order": 1,
P2076:   "content": "Lụa có nét đẹp riêng nhờ chất liệu mềm mại và vẻ thanh lịch, phù hợp với những sản phẩm thời trang hướng đến sự tinh tế. Các dòng lụa truyền thống cũng mang lại nhiều cảm hứng khi lựa chọn chất liệu cho những thiết kế mang bản sắc Việt.",
P2077:   "avatar": null
P2078: }
P2079: {
P2080:   "id": "rv_LNX02",
P2081:   "coSoSanXuatId": "LNX_LNX",
P2082:   "reviewerName": "Lê Hoàng Nam",
P2083:   "reviewTime": "2026-01-01",
P2084:   "order": 2,
P2085:   "content": "Chúng tôi quan tâm đến các sản phẩm từ lụa vì vừa có giá trị sử dụng, vừa mang ý nghĩa văn hóa. Khăn lụa là một lựa chọn đáng cân nhắc cho quà tặng đối tác, đặc biệt khi được lựa chọn kỹ về màu sắc, chất liệu và cách đóng gói.",
P2086:   "avatar": null
P2087: }
P2088: {
P2089:   "id": "rv_LNX03",
P2090:   "coSoSanXuatId": "LNX_LNX",
P2091:   "reviewerName": "Phạm Ngọc Mai",
P2092:   "reviewTime": "2026-09-25",
P2093:   "order": 3,
P2094:   "content": "Lụa truyền thống có sức hấp dẫn riêng nhờ sự kết hợp giữa chất liệu và kỹ thuật thủ công. Đây là nguồn cảm hứng để phát triển những thiết kế vừa giữ được nét duyên dáng truyền thống, vừa phù hợp với thị hiếu hiện đại.",
P2095:   "avatar": null
P2096: }
P2097: 6.15. Review về SILK HẠ VY
P2098: {
P2099:   "id": "rv_SHV01",
P2100:   "coSoSanXuatId": "LNX_SHV",
P2101:   "reviewerName": "Mai Phương Nhi",
P2102:   "reviewTime": "2026-04-21",
P2103:   "order": 1,
P2104:   "content": "Đối với xưởng may, nguồn vải và độ đồng đều giữa các đợt hàng là những yếu tố rất quan trọng. Khi làm việc với đơn vị cung cấp lụa, chúng tôi thường quan tâm đến quy cách vải, màu sắc và thời gian hoàn thành để sắp xếp kế hoạch sản xuất phù hợp.",
P2105:   "avatar": null
P2106: }
P2107: {
P2108:   "id": "rv_SHV02",
P2109:   "coSoSanXuatId": "LNX_SHV",
P2110:   "reviewerName": "Nguyễn Ngọc Linh",
P2111:   "reviewTime": "2025-11-02",
P2112:   "order": 2,
P2113:   "content": "Điều tôi quan tâm khi lựa chọn lụa là chất vải có phù hợp với ý tưởng thiết kế hay không. Màu sắc, độ rủ và bề mặt vải đều ảnh hưởng đến thành phẩm cuối cùng.",
P2114:   "avatar": null
P2115: }
P2116: {
P2117:   "id": "rv_SHV03",
P2118:   "coSoSanXuatId": "LNX_SHV",
P2119:   "reviewerName": "Trịnh Mỹ Anh",
P2120:   "reviewTime": "2026-06-17",
P2121:   "order": 3,
P2122:   "content": "Chúng tôi quan tâm đến các sản phẩm từ lụa vì vừa có giá trị sử dụng, vừa mang ý nghĩa văn hóa. Khăn lụa là một lựa chọn đáng cân nhắc cho quà tặng đối tác, đặc biệt khi được lựa chọn kỹ về màu sắc, chất liệu và cách đóng gói.",
P2123:   "avatar": null
P2124: }
```

## P2125 — 7. Sản phẩm

```text
P2125: 7. Sản phẩm
P2126: 7.1. SẢN PHẨM CỦA NÓN LÁ HẢI YẾN
P2127: Nón Quai Thao Nguyệt Sắc
P2128: {
P2129:   "id": "SP_NLC_NQTNS",
P2130:   "coSoSanXuatId": "NLC_NLHY",
P2131:   "name": "Nón Quai Thao Nguyệt Sắc",
P2132:   "itemDescription": "Gây ấn tượng với dáng nón tròn rộng, lòng nón thoáng và tông màu nâu vàng tự nhiên. Điểm nhấn nằm ở chuỗi hạt trang trí mềm mại cùng đôi tua đỏ nổi bật hai bên, tạo nên vẻ đẹp vừa trang nhã vừa duyên dáng. Sản phẩm gợi nhớ hình ảnh người phụ nữ Việt trong trang phục quan họ truyền thống.",
P2133:   "chatLieu": "Khung nón và vật liệu đan truyền thống; dây hạt trang trí và tua vải",
P2134:   "kyThuat": "Tạo hình và đan nón theo dáng tròn rộng, kết hợp hoàn thiện viền nón, đính dây hạt và tua trang trí.",
P2135:   "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",
P2136:   "dacDiemTitle": "Vẻ đẹp nền nã, lưu giữ nét duyên Kinh Bắc.",
P2137:   "dacDiemDescription": "Thiết kế nổi bật nhờ sự kết hợp giữa nền nón màu nâu vàng mộc mạc và các chi tiết trang trí giàu tính thẩm mỹ. Chuỗi hạt buông nhẹ theo vành nón tạo nét mềm mại, trong khi đôi tua đỏ mang đến điểm nhấn nổi bật, phù hợp với không gian biểu diễn và trưng bày văn hóa truyền thống.",
P2138:   "chatLieuVaMauSac": "Tông nâu vàng tự nhiên, kết hợp chuỗi hạt sáng màu và tua đỏ nổi bật.",
P2139:   "hoaTietVaKieuDang": "Nón dáng tròn, vành rộng, lòng lõm nhẹ, điểm nhấn là chuỗi hạt và hai tua đỏ buông đối xứng.",
P2140:   "isFeatured":,
P2141:   "images": [
P2142:     {
P2143:       "Url": “” ,
P2144:       "alt": "",
P2145:       "isMain": 
P2146:     }
P2147:   ]
P2148: }
P2149: 
P2150: {\n  "id": "SP_NLC_NQTKN",
P2151: "coSoSanXuatId": "NLC_NLHY",
P2152: "name": "Nón Quai Thao Kim Nguyệt",
P2153:  "itemDescription": "Nổi bật với sắc vàng rơm sáng và dáng nón tròn rộng mang nét đẹp cổ điển. Phần trung tâm được trang trí bằng họa tiết tròn tinh tế, kết hợp cùng dây quai sáng màu và đôi tua trắng mềm mại. Tổng thể tạo cảm giác nhẹ nhàng, thanh lịch, phù hợp với trang phục biểu diễn nghệ thuật truyền thống và các hoạt động văn hóa.",
P2154: "chatLieu": "Khung nón và vật liệu đan truyền thống; dây quai và tua trang trí.",
P2155:  "kyThuat": "Tạo hình nón tròn rộng, hoàn thiện phần chóp và vành nón, kết hợp trang trí họa tiết trung tâm cùng dây quai.",
P2156:   "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",
P2157:  "dacDiemTitle": "Sắc vàng dịu nhẹ, tôn lên vẻ đẹp thanh lịch.",
P2158: "dacDiemDescription": "Tông vàng rơm tạo cảm giác ấm áp và gần gũi, trong khi họa tiết trang trí ở trung tâm giúp chiếc nón thêm phần nổi bật. Dây quai trắng kết hợp tua mềm mang lại nét duyên dáng, giữ cho tổng thể cân đối và trang nhã.",
P2159: "chatLieuVaMauSac": "Nền vàng rơm tự nhiên, kết hợp dây quai và tua trắng thanh nhã.",
P2160: "hoaTietVaKieuDang": "Nón dáng tròn, vành rộng, trang trí họa tiết hình tròn ở trung tâm cùng đôi tua trắng buông hai bên.",
P2161: "isFeatured": null,
P2162: "images": [
P2163: ]
P2164: }
P2165: {\n  "id": "SP_NLC_NQTMN",\n  "coSoSanXuatId": "NLC_NLHY",\n  "name": "Nón Quai Thao Mộc Nguyên",\n  "itemDescription": "Mang vẻ đẹp giản dị với sắc nâu tự nhiên và kiểu dáng tròn rộng, hạn chế các chi tiết trang trí cầu kỳ. Phần dây quai bện màu nâu tạo điểm nhấn đồng điệu với thân nón, làm nổi bật vẻ đẹp mộc mạc của chất liệu và hình thức thủ công. Sản phẩm phù hợp với những bộ sưu tập văn hóa truyền thống, không gian trưng bày và hoạt động tái hiện trang phục xưa.",\n  "chatLieu": "Khung nón và vật liệu đan truyền thống; dây quai bện.",\n  "kyThuat": "Tạo hình nón tròn rộng, hoàn thiện vành nón cùng dây quai bện đơn giản.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Mộc mạc dáng xưa, tinh giản nét duyên",\n  "dacDiemDescription": "Sản phẩm thu hút bởi đường nét gọn gàng và màu sắc tự nhiên. Dây quai bện buông cong phía dưới vành tạo thành chi tiết trang trí nhẹ nhàng mà không làm mất đi vẻ giản dị của chiếc nón.",\n  "chatLieuVaMauSac": "Tông nâu vàng tự nhiên, kết hợp dây quai bện màu nâu đậm.",\n  "hoaTietVaKieuDang": "Nón dáng tròn, vành rộng, bề mặt đan theo đường đồng tâm, thiết kế tối giản với dây quai buông mềm mại.",\n  "isFeatured": null,\n  "images": []\n}
P2166: {\n  "id": "SP_NLC_NDKQ",\n  "coSoSanXuatId": "NLC_NLHY",\n  "name": "Nón Đầu Kim Quan",\n  "itemDescription": "Nổi bật với phần chóp cao hình nón, vành rộng nhiều lớp và hệ dây tua màu đen buông hai bên. Cấu trúc nón tạo cảm giác bề thế, trong khi các đường đan tự nhiên làm nổi bật nét thủ công truyền thống. Sản phẩm phù hợp với trưng bày văn hóa, phục dựng trang phục cổ hoặc các chương trình nghệ thuật mang cảm hứng lịch sử.",\n  "chatLieu": "Khung nón và vật liệu đan truyền thống; dây quai và tua trang trí",\n  "kyThuat": "Tạo hình chóp cao, đan và hoàn thiện vành nhiều lớp, kết hợp dây quai và tua trang trí.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Chóp cao nổi bật, vành rộng tạo dáng vẻ bề thế.",\n  "dacDiemDescription": "Điểm đặc trưng của sản phẩm là sự kết hợp giữa phần chóp cao và vành nón mở rộng theo nhiều tầng. Dây tua đen buông hai bên làm tăng vẻ trang trọng, tạo hình thức nổi bật khi kết hợp cùng trang phục biểu diễn hoặc trưng bày.",\n  "chatLieuVaMauSac": "Tông vàng rơm tự nhiên, kết hợp dây quai và tua đen.",\n  "hoaTietVaKieuDang": "Chóp cao hình nón, vành rộng nhiều lớp với các đường đan đồng tâm; dây quai buông cong, kết hợp tua đen ở hai bên.",\n  "isFeatured": null,\n  "images": []\n}
P2167: {\n  "id": "SP_NLC_NDHV",\n  "coSoSanXuatId": "NLC_NLHY",\n  "name": "Nón Đầu Hồng Vân",\n  "itemDescription": "Mang sắc vàng rơm ấm áp, kết hợp dây quai đỏ và tua trang trí nhiều màu tạo điểm nhấn nổi bật. Dáng nón chóp cao cùng phần vành rộng nhiều lớp đem lại vẻ ngoài cân đối, giàu tính trang trí. Sản phẩm phù hợp với các hoạt động biểu diễn nghệ thuật, chụp ảnh văn hóa và trưng bày sản phẩm thủ công truyền thống.",\n  "chatLieu": "Khung nón và vật liệu đan truyền thống; dây quai và tua trang trí.",\n  "kyThuat": "Tạo hình chóp cao và vành nhiều lớp, kết hợp hoàn thiện dây quai cùng tua trang trí màu sắc.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Sắc đỏ duyên dáng, điểm tô nét đẹp truyền thống.",\n  "dacDiemDescription": "Nền nón màu vàng rơm làm nổi bật dây quai đỏ và các dải tua nhiều màu ở hai bên. Sự tương phản giữa màu sắc tự nhiên của vật liệu đan và chi tiết trang trí tạo nên diện mạo sinh động nhưng vẫn giữ được nét cổ truyền.",\n  "chatLieuVaMauSac": "Nền vàng rơm, dây quai đỏ sẫm, tua trang trí phối đỏ và xanh.",\n  "hoaTietVaKieuDang": "Dáng chóp cao, vành rộng nhiều lớp, đường đan chạy theo thân nón; dây quai cong kết hợp tua trang trí đối xứng",\n  "isFeatured": null,\n  "images": []\n}
P2168: {\n  "id": "SP_NLC_NDVN",\n  "coSoSanXuatId": "NLC_NLHY",\n  "name": "Nón Đầu Vân Nguyệt",\n  "itemDescription": "Phần chóp cao, vành nón uốn cong mềm mại và dây quai màu trầm. Khác với những mẫu có vành rộng cân đối, thiết kế này tạo điểm nhấn bằng đường cong vểnh nhẹ ở hai bên, mang đến vẻ ngoài độc đáo và giàu tính tạo hình. Sản phẩm phù hợp với trưng bày nghệ thuật, phục dựng trang phục hoặc các bộ ảnh lấy cảm hứng từ văn hóa truyền thống.",\n  "chatLieu": "Khung nón và vật liệu đan truyền thống; dây quai và tua trang trí.",\n  "kyThuat": "Tạo hình chóp cao, định dáng vành cong, hoàn thiện các đường đan và lắp dây quai trang trí.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Vành cong cách điệu, tạo dấu ấn riêng cho dáng nón.",\n  "dacDiemDescription": "Sản phẩm nổi bật với phần vành uốn cong ở hai bên, tạo cảm giác chuyển động mềm mại cho tổng thể. Các đường đan tỏa đều từ chóp xuống vành giúp làm rõ cấu trúc thủ công, trong khi dây quai màu trầm giữ cho thiết kế hài hòa và trang nhã.",\n  "chatLieuVaMauSac": "Tông vàng rơm tự nhiên, dây quai màu nâu xanh trầm.",\n  "hoaTietVaKieuDang": "Chóp cao, vành cong vểnh hai bên, bề mặt đan theo các đường tỏa từ đỉnh; dây quai buông mềm với tua nhỏ ở hai phía.",\n  "isFeatured": null,\n  "images": []\n}
P2169: 7.2. SẢN PHẨM CỦA HTX Mây Tre Nón Lá Tạ Thu Hương
P2170: {\n  "id": "SP_NLC_NVDBL",\n  "coSoSanXuatId": "NLC_NLTTH",\n  "name": "Nón Vũ Điệu Bản Làng",\n  "itemDescription": "Tái hiện hình ảnh con người trong trang phục truyền thống qua những nét vẽ sinh động trên nền nón lá. Sự kết hợp giữa gam màu tươi sáng và hình ảnh sinh hoạt cộng đồng tạo nên một sản phẩm mang đậm dấu ấn văn hóa, phù hợp để trưng bày, làm quà lưu niệm hoặc giới thiệu nét đẹp Việt Nam.",\n  "chatLieu": "Nón lá thủ công, màu trang trí chuyên dụng;",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp vẽ tranh trang trí trên bề mặt.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Lưu nhịp điệu quê hương trên dáng nón Việt.",\n  "dacDiemDescription": "Sản phẩm nổi bật với những hình người trong trang phục truyền thống được sắp xếp quanh mặt nón. Các mảng màu đỏ, vàng, xanh tạo cảm giác chuyển động, gợi không khí vui tươi của những hoạt động văn hóa cộng đồng.",\n  "chatLieuVaMauSac": "Nền trắng ngà pha xanh nhạt, kết hợp các sắc đỏ, vàng, xanh lá và nâu.",\n  "hoaTietVaKieuDang": "Tranh vẽ người trong trang phục truyền thống, bố trí theo vòng cung trên mặt nón tròn.",\n  "isFeatured": null,\n  "images": []\n}
P2171: {\n  "id": "SP_NLC_NDATG",\n  "coSoSanXuatId": "NLC_NLTTH",\n  "name": "Nón Dấu Ấn Thời Gian",\n  "itemDescription": "Mang vẻ đẹp trầm lắng với tranh trang trí đơn sắc trên nền nón sáng màu. Hình ảnh thiên nhiên được thể hiện bằng những đường nét gợi phong cách hội họa cổ điển, kết hợp điểm nhấn đỏ ở trung tâm tạo nên sự tương phản tinh tế. Sản phẩm phù hợp với không gian trưng bày văn hóa và những bộ sưu tập thủ công mang hơi hướng hoài niệm.",\n  "chatLieu": "Nón lá thủ công, màu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp vẽ tranh đơn sắc và tạo điểm nhấn màu trên bề mặt.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Nét xưa còn mãi, dấu ấn còn lưu.",\n  "dacDiemDescription": "Nền nón sáng màu làm nổi bật những đường nét đen xám mô tả cây cối và cảnh vật. Điểm nhấn đỏ ở trung tâm tạo sự cân bằng thị giác, giúp sản phẩm vừa giữ được nét mộc mạc vừa mang dấu ấn nghệ thuật riêng.",\n  "chatLieuVaMauSac": "Nền trắng ngà, họa tiết đen xám và điểm nhấn đỏ.",\n  "hoaTietVaKieuDang": "Tranh thiên nhiên đơn sắc kết hợp điểm màu ở trung tâm trên dáng nón truyền thống.",\n  "isFeatured": null,\n  "images": []\n}
P2172: {\n  "id": "SP_NLC_NKV",\n  "coSoSanXuatId": "NLC_NLTTH",\n  "name": "Nón Kim Vũ",\n  "itemDescription": "Hình ảnh chim công được thể hiện bằng những đường nét đen nổi bật trên nền nón màu vàng rơm. Các chi tiết trang trí màu cam và đỏ hồng tạo điểm nhấn, trong khi viền hồng bao quanh làm tăng sức hút cho tổng thể. Sản phẩm phù hợp để trưng bày, làm quà tặng thủ công hoặc sử dụng trong các không gian mang phong cách nghệ thuật truyền thống.",\n  "chatLieu": "Nón lá thủ công, màu hoặc vật liệu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp trang trí hình chim công; kỹ thuật vẽ, thêu, đính họa tiết",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Vũ điệu sắc vàng, kiêu hãnh nét chim công.",\n  "dacDiemDescription": "Hình chim công được đặt ở vị trí trung tâm, tạo điểm nhấn rõ ràng trên bề mặt nón. Những đường nét kéo dài ở phần đuôi kết hợp cùng các chi tiết màu sắc giúp sản phẩm có bố cục cân đối và vẻ ngoài giàu tính trang trí.",\n  "chatLieuVaMauSac": "Nền vàng rơm, viền hồng, họa tiết đen kết hợp các điểm nhấn đỏ cam.",\n  "hoaTietVaKieuDang": "Hình chim công cách điệu với phần đuôi kéo dài, kết hợp các chi tiết trang trí nhỏ",\n  "isFeatured": null,\n  "images": []\n}
P2173: {\n  "id": "SP_NLC_NLHTC",\n  "coSoSanXuatId": "NLC_NLTTH",\n  "name": "Nón Liên Hoa Thanh Cảnh",\n  "itemDescription": "Hình ảnh hoa sen hồng trên nền nón sáng màu. Những chiếc lá xanh cùng các chi tiết hoa được thể hiện bằng màu sắc tươi sáng, tạo nên tổng thể gần gũi và giàu tính nghệ thuật. Sản phẩm phù hợp để làm quà lưu niệm, trưng bày hoặc giới thiệu hình ảnh hoa sen – biểu tượng quen thuộc trong văn hóa Việt Nam.",\n  "chatLieu": "Nón lá thủ công, màu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp vẽ hoặc trang trí họa tiết hoa sen trên bề mặt",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Hương sen thanh khiết, lưu giữ nét đẹp Việt.",\n  "dacDiemDescription": "Hình ảnh hoa sen được thể hiện nổi bật ở phần trung tâm và phía dưới mặt nón. Các mảng lá xanh cùng họa tiết phụ tạo nên bố cục hài hòa, làm nổi bật sắc hồng của cánh sen trên nền sáng.",\n  "chatLieuVaMauSac": "Nền trắng ngà, hoa sen hồng, lá xanh và các chi tiết trang trí nhiều màu.",\n  "hoaTietVaKieuDang": "Hoa sen nở kết hợp lá sen và các chi tiết hoa nhỏ, bố trí theo độ cong của mặt nón để tạo cảm giác tự nhiên.",\n  "isFeatured": null,\n  "images": []\n}
P2174: {\n  "id": "SP_NLC_NXD",\n  "coSoSanXuatId": "NLC_NLTTH",\n  "name": "Nón Xuân Điệp",\n  "itemDescription": "Sắc hồng phấn dịu dàng, kết hợp hình ảnh chim công giữa những cành hoa nở rộ. Sự phối hợp giữa màu hồng, xanh và các chi tiết hoa lá tạo nên vẻ đẹp tươi trẻ, giàu sức sống. Sản phẩm phù hợp với những bộ sưu tập nón nghệ thuật, quà tặng văn hóa và hoạt động quảng bá sản phẩm thủ công.",\n  "chatLieu": "Nón lá thủ công, màu hoặc vật liệu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp trang trí tranh hoa lá và hình chim",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Sắc xuân trên nón, nét duyên giữa đời.",\n  "dacDiemDescription": "Nền hồng tạo cảm giác nhẹ nhàng, làm nổi bật hình ảnh chim công xanh cùng những cành hoa nhỏ. Các chi tiết được bố trí trải đều trên bề mặt nón, tạo nên một bức tranh sinh động mà vẫn giữ được sự hài hòa trong màu sắc.",\n  "chatLieuVaMauSac": "Nền hồng phấn, họa tiết chim xanh, hoa hồng và cành cây nâu.",\n  "hoaTietVaKieuDang": "Chim công cách điệu kết hợp hoa nở và cành cây, tạo bố cục thiên nhiên mềm mại trên mặt nón tròn.",\n  "isFeatured": null,\n  "images": []\n}
P2175: {\n  "id": "SP_NLC_NDSTL",\n  "coSoSanXuatId": "NLC_NLTTH",\n  "name": "Nón Dấu Son Thăng Long",\n  "itemDescription": "Nền đỏ rực rỡ, kết hợp hình ảnh hoa sen vàng và công trình kiến trúc gợi nhớ đến Hà Nội. Các chi tiết cây xanh và cảnh quan được sắp xếp quanh mặt nón, tạo thành một bức tranh thu nhỏ mang dấu ấn địa danh. Sản phẩm phù hợp làm quà lưu niệm, quà tặng văn hóa hoặc trưng bày trong các không gian giới thiệu hình ảnh Việt Nam.",\n  "chatLieu": "Nón lá thủ công, màu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp vẽ tranh phong cảnh và trang trí họa tiết trên bề mặt.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Sắc đỏ nổi bật, khắc họa vẻ đẹp đất kinh kỳ.",\n  "dacDiemDescription": "Nền đỏ tạo điểm nhấn mạnh mẽ, làm nổi bật hình ảnh hoa sen vàng, cây xanh và công trình kiến trúc ở trung tâm. Bố cục tranh được tổ chức theo hình tròn, tận dụng đường cong của mặt nón để tạo nên một sản phẩm lưu niệm mang tính nhận diện địa phương.",\n  "chatLieuVaMauSac": "Nền đỏ, kết hợp hoa sen vàng, cây xanh và các chi tiết kiến trúc màu trắng ngà.",\n  "hoaTietVaKieuDang": "Tranh phong cảnh gợi nhắc kiến trúc Hà Nội, kết hợp hoa sen và cây xanh trên mặt nón.",\n  "isFeatured": null,\n  "images": []\n}
P2176: 7.3. SẢN PHẨM CỦA HOA NÓN LÀNG CHUÔNG
P2177: {\n  "id": "SP_NLC_NHS",\n  "coSoSanXuatId": "NLC_HNLC",\n  "name": "Nón Hỷ Sắc",\n  "itemDescription": "Nổi bật với nền trắng trang nhã, điểm xuyết họa tiết trang trí màu hồng và biểu tượng chữ Hỷ ở trung tâm. Sự kết hợp giữa hình dáng nón truyền thống và các chi tiết mang ý nghĩa cát tường tạo nên sản phẩm giàu giá trị văn hóa, phù hợp làm quà tặng, vật phẩm trưng bày hoặc sử dụng trong các dịp lễ cưới truyền thống.",\n  "chatLieu": "Nón lá thủ công; chất liệu lá và vật liệu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống, kết hợp trang trí họa tiết và đính kết chi tiết trên bề mặt.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Gửi treo nét đẹp, vun đắp duyên lành",\n  "dacDiemDescription": "Sản phẩm gây ấn tượng với nền nón sáng màu và các chi tiết trang trí được bố trí cân đối. Biểu tượng chữ Hỷ kết hợp cùng họa tiết mềm mại tạo nên vẻ đẹp trang trọng, gợi không khí vui tươi và ý nghĩa chúc phúc.",\n  "chatLieuVaMauSac": "Nền trắng ngà, kết hợp chi tiết trang trí màu hồng phấn và đỏ hồng.",\n  "hoaTietVaKieuDang": "Hoa lá cách điệu kết hợp biểu tượng chữ Hỷ ở trung tâm, tạo điểm nhấn nổi bật trên dáng nón tròn truyền thống.",\n  "isFeatured": null,\n  "images": []\n}
P2178: {\n  "id": "SP_NLC_NHQ",\n  "coSoSanXuatId": "NLC_HNLC",\n  "name": "Nón Hồn Quê",\n  "itemDescription": "Dáng nón lá truyền thống với những bức tranh phong cảnh được thể hiện trực tiếp trên bề mặt. Hình ảnh con người, thiên nhiên và sinh hoạt làng quê tạo nên nét riêng cho sản phẩm, biến chiếc nón quen thuộc thành một tác phẩm thủ công mang giá trị trang trí và lưu niệm.",\n  "chatLieu": "Nón lá thủ công; chất liệu nền và màu vẽ Acrylic",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp vẽ tranh trang trí trên bề mặt nón.",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Kể chuyện quê hương qua từng nét vẽ.",\n  "dacDiemDescription": "Bề mặt nón được tận dụng như một không gian hội họa thu nhỏ, nơi những hình ảnh phong cảnh và sinh hoạt được thể hiện bằng màu sắc hài hòa. Sản phẩm vừa giữ được dáng nón truyền thống, vừa mang dấu ấn sáng tạo riêng.",\n  "chatLieuVaMauSac": "Nón trắng ngà chuyển vàng nhạt ở chóp, kết hợp tranh vẽ nhiều màu sắc.",\n  "hoaTietVaKieuDang": "Tranh phong cảnh, con người và thiên nhiên được bố trí theo đường cong mặt nón, tạo bố cục hài hòa.",\n  "isFeatured": null,\n  "images": []\n}
P2179: {\n  "id": "SP_NLC_SN",\n  "coSoSanXuatId": "NLC_HNLC",\n  "name": "Nón Sen Ngọc",\n  "itemDescription": "Nền xanh lam dịu mắt và họa tiết hoa sen màu đỏ hồng được thể hiện nổi bật trên bề mặt. Sự kết hợp giữa hình dáng nón truyền thống và hoa văn thiên nhiên mang đến vẻ đẹp mềm mại, phù hợp để làm quà tặng, vật phẩm trưng bày hoặc phụ kiện mang dấu ấn văn hóa Việt Nam.",\n  "chatLieu": "Nón lá thủ công; chất liệu lá và vật liệu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp trang trí hoa văn; kỹ thuật thêu, vẽ đính nổi",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Sắc hoa rực rỡ, điểm tô nét duyên Việt.",\n  "dacDiemDescription": "Sản phẩm tạo điểm nhấn bằng sự tương phản giữa sắc xanh dịu và những đóa hoa đỏ hồng. Cách sắp xếp họa tiết theo độ cong của nón giúp tổng thể cân đối, làm nổi bật vẻ đẹp trang trí mà vẫn giữ được hình dáng truyền thống.",\n  "chatLieuVaMauSac": "Nền xanh lam nhạt, kết hợp hoa văn đỏ hồng và lá xanh.",\n  "hoaTietVaKieuDang": "Họa tiết hoa sen với cánh hoa nhiều lớp, kết hợp lá và nụ sen, tạo cảm giác sinh động trên bề mặt nón tròn.",\n  "isFeatured": null,\n  "images": []\n}
P2180: {\n  "id": "SP_NLC_NDL",\n  "coSoSanXuatId": "NLC_HNLC",\n  "name": "Nón Điệp Liên",\n  "itemDescription": "Mang sắc hồng nổi bật, kết hợp họa tiết hoa sen, lá sen và cánh bướm tạo nên tổng thể sinh động. Sản phẩm là sự kết hợp giữa dáng nón truyền thống và cách trang trí mang tính sáng tạo, phù hợp với nhu cầu quà tặng, chụp ảnh, trưng bày hoặc sử dụng trong các hoạt động văn hóa.",\n  "chatLieu": "Nón lá hủ công; chất liệu nền và vật liệu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp trang trí hoa văn; kỹ thuật tạo họa tiết",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Hương sen thoảng giữa hồ xanh, Mảnh mai vững vàng trời mây",\n  "dacDiemDescription": "Nền hồng tạo cảm giác trẻ trung, trong khi hình ảnh hoa sen và cánh bướm đem đến nét mềm mại, giàu tính trang trí. Bố cục họa tiết trải theo mặt nón giúp sản phẩm có điểm nhấn từ nhiều góc nhìn.",\n  "chatLieuVaMauSac": "Nền hồng phấn pha hồng sen, kết hợp hoa sen hồng, lá xanh và cánh bướm nhiều màu.",\n  "hoaTietVaKieuDang": "Hoa sen, lá sen và cánh bướm được phối hợp hài hòa trên mặt nón, tạo nét trang trí sinh động, giàu tính nghệ thuật.",\n  "isFeatured": null,\n  "images": []\n}
P2181: {\n  "id": "SP_NLC_NHD",\n  "coSoSanXuatId": "NLC_HNLC",\n  "name": "Nón Hoa Điệp",\n  "itemDescription": "Nền màu vàng rơm tự nhiên, điểm xuyết những cụm hoa nhỏ nhiều màu và hình ảnh cánh bướm ở trung tâm. Sản phẩm giữ lại nét mộc mạc của nón truyền thống, đồng thời tạo điểm nhấn bằng các chi tiết trang trí tươi sáng, phù hợp để trưng bày, trang trí không gian hoặc làm quà tặng thủ công.",\n  "chatLieu": "Nón lá thủ công; chất liệu nền và vật liệu trang trí",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp trang trí hoa văn; phương pháp vẽ, thêu đính hoa",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Vẻ đẹp mộc mạc điểm tô bằng sắc hoa tươi sáng.",\n  "dacDiemDescription": "Sự kết hợp giữa nền nón màu tự nhiên và các chi tiết hoa lá tạo nên tổng thể gần gũi, nhẹ nhàng. Những cụm hoa được bố trí quanh bề mặt nón, tạo cảm giác phong phú mà không làm mất đi vẻ giản dị vốn có.",\n  "chatLieuVaMauSac": "Nền vàng rơm tự nhiên, kết hợp hoa trắng, vàng, lá xanh và cánh bướm đỏ hồng.",\n  "hoaTietVaKieuDang": "Hoa nhỏ, lá xanh và cánh bướm được sắp xếp thành cụm trên mặt nón, tạo bố cục tự nhiên, hài hòa.",\n  "isFeatured": null,\n  "images": []\n}
P2182: {\n  "id": "SP_NLC_NXH",\n  "coSoSanXuatId": "NLC_HNLC",\n  "name": "Nón Xứ Huế",\n  "itemDescription": "Nón Lụa nổi bật với gam tím nhạt và bề mặt được phủ hoa văn tinh tế. Các đường nét trang trí tạo hiệu ứng thị giác nhẹ nhàng, mang đến diện mạo thanh lịch cho chiếc nón truyền thống. Sản phẩm phù hợp với nhu cầu trưng bày, quà tặng và phối hợp trong các không gian mang phong cách văn hóa Việt Nam.",\n  "chatLieu": "Nón trang trí phủ vải lụa",\n  "kyThuat": "Tạo hình nón truyền thống kết hợp phủ hoặc trang trí bề mặt bằng lụa",\n  "xuatXu": "Làng nón Chuông, xã Phương Trung, huyện Thanh Oai, Hà Nội",\n  "dacDiemTitle": "Mềm mại sắc lụa, duyên dáng dáng nón Việt.",\n  "dacDiemDescription": "Sản phẩm có màu tím nhạt đồng đều, kết hợp những đường hoa văn nhỏ tạo nên bề mặt giàu chi tiết. Sự tiết chế về màu sắc giúp chiếc nón giữ được vẻ trang nhã, phù hợp với các không gian trưng bày và bộ sưu tập thủ công.",\n  "chatLieuVaMauSac": "Nền tím nhạt, bề mặt có hoa văn cùng tông màu và hiệu ứng ánh sáng nhẹ.",\n  "hoaTietVaKieuDang": "Hoa văn nhỏ được trang trí trên bề mặt nón, kết hợp các đường đồng tâm theo cấu trúc của dáng nón truyền thống.",\n  "isFeatured": null,\n  "images": []\n}
P2183: 7.4. SẢN PHẨM CỦA QUẠT CHÀNG SƠN
P2184: {\n  "id": "SP_QCS_QLTDG",\n  "coSoSanXuatId": "QCS_QCS",\n  "name": "Quạt Linh Thú Dân Gian",\n  "itemDescription": "Hình tượng linh vật được thể hiện bằng những gam màu rực rỡ trên nền quạt trắng sáng. Các đường nét tạo hình khỏe khoắn, kết hợp sắc đỏ, vàng, xanh và đen, gợi nhắc đến nghệ thuật trang trí dân gian Việt Nam. Sản phẩm là lựa chọn phù hợp cho quà tặng văn hóa, vật phẩm trưng bày và các bộ sưu tập tôn vinh giá trị thủ công truyền thống.",\n  "chatLieu": "Nan quạt bằng tre hoặc gỗ, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí hình tượng linh vật bằng phương pháp vẽ hoặc in màu trên mặt quạt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Hình tượng dân gian, sắc màu đa nhiệm",\n  "dacDiemDescription": "Điểm nhấn của sản phẩm là hình tượng linh vật được thể hiện ở vị trí trung tâm, kết hợp những mảng màu nổi bật và đường nét cách điệu. Nền quạt sáng màu giúp họa tiết trở nên rõ nét, tạo nên tổng thể vừa sinh động vừa mang dấu ấn văn hóa truyền thống.",\n  "chatLieuVaMauSac": "Nền trắng ngà phối họa tiết đỏ, vàng, xanh lục, đen cùng nan quạt vàng nhạt tự nhiên.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, nổi bật với hình tượng linh vật cách điệu theo phong cách tranh dân gian, đặt giữa hệ nan tỏa đều.",\n  "isFeatured": null,\n  "images": []\n}
P2185: {\n  "id": "SP_QCS_QPLDT",\n  "coSoSanXuatId": "QCS_QCS",\n  "name": "Quạt Phúc Lộc Đồng Tử",\n  "itemDescription": "Mang vẻ đẹp tươi sáng với hình ảnh nhân vật đồng tử trong trang phục truyền thống được thể hiện trên nền quạt màu vàng kem. Những chi tiết trang phục nhiều màu kết hợp cùng các đường nét trang trí nhẹ nhàng tạo nên tổng thể gần gũi, gợi liên tưởng đến những hình tượng cầu chúc may mắn trong văn hóa phương Đông. Sản phẩm phù hợp làm quà tặng, vật phẩm trang trí hoặc bổ sung cho bộ sưu tập quạt nghệ thuật dân gian.",\n  "chatLieu": "Nan quạt bằng tre hoặc gỗ, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí hình nhân vật bằng phương pháp vẽ hoặc in màu trên nền quạt sáng.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Gửi trao phúc lành, vun đắp bình an.",\n  "dacDiemDescription": "Hình ảnh nhân vật được đặt ở vị trí trung tâm, tạo điểm nhấn trên nền quạt sáng màu. Các chi tiết trang phục đỏ, xanh và vàng giúp hình vẽ thêm sinh động, trong khi phần nan quạt màu sáng giữ cho tổng thể sự hài hòa, trang nhã.",\n  "chatLieuVaMauSac": "Nền vàng kem, phối họa tiết đa sắc và nan quạt vàng nhạt tự nhiên.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, nổi bật với hình tượng đồng tử trong trang phục truyền thống, mang đậm nét mỹ thuật phương Đông.",\n  "isFeatured": null,\n  "images": []\n}
P2186: {\n  "id": "SP_QCS_QMDNX",\n  "coSoSanXuatId": "QCS_QCS",\n  "name": "Quạt Mai Điểu Nghênh Xuân",\n  "itemDescription": "Tái hiện khung cảnh thiên nhiên giàu sức sống với những cành mai, đàn chim và sắc trời vàng ấm. Các chi tiết đỏ, đen và nâu được phối hợp trên nền vàng nhạt, gợi không khí mùa xuân và vẻ đẹp thanh tao của hội họa truyền thống. Sản phẩm phù hợp làm quà tặng dịp Tết, vật phẩm trang trí hoặc lựa chọn dành cho những người yêu thích tranh phong cảnh phương Đông.",\n  "chatLieu": "Nan quạt bằng tre hoặc gỗ, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí tranh cành mai và chim bằng phương pháp vẽ hoặc in màu.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Chim vui trên cành, sắc xuân lan tỏa.",\n  "dacDiemDescription": "Bức tranh trên mặt quạt gây ấn tượng với cành cây uốn lượn, những chú chim nổi bật và nền màu vàng ấm. Bố cục trải dài theo đường cong của quạt tạo cảm giác như một bức tranh phong cảnh thu nhỏ, vừa có chiều sâu vừa giữ được nét mềm mại.",\n  "chatLieuVaMauSac": "Nền vàng kem pha cam nhạt, phối họa tiết đa sắc và nan gỗ sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, trang trí cành cây, hoa mai và chim, mang nét cổ điển, đậm sắc xuân.",\n  "isFeatured": null,\n  "images": []\n}
P2187: {\n  "id": "SP_QCS_QLHPS",\n  "coSoSanXuatId": "QCS_QCS",\n  "name": "Quạt Liên Hoa Phấn Sắc",\n  "itemDescription": "Nổi bật với những đóa sen hồng được thể hiện trên nền xanh xám dịu mắt. Sự kết hợp giữa sắc hồng mềm mại, lá sen xanh và những đường nét tự nhiên tạo nên tổng thể hài hòa, gợi vẻ đẹp thanh tao của loài hoa gắn bó với văn hóa Việt Nam. Sản phẩm phù hợp làm quà tặng, vật phẩm trang trí hoặc phụ kiện cho các hoạt động văn hóa nghệ thuật.",\n  "chatLieu": "Nan quạt bằng tre hoặc gỗ, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí hoa sen và lá sen bằng phương pháp vẽ hoặc in màu.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Sen hồng khoe sắc, thanh nhã sắc xanh.",\n  "dacDiemDescription": "Những bông sen hồng được bố trí nổi bật trên nền xanh xám, tạo hiệu ứng tương phản nhẹ nhàng. Các cánh hoa mềm mại kết hợp cùng lá sen tạo cảm giác tự nhiên, giúp sản phẩm vừa có tính trang trí vừa gợi nét đẹp gần gũi của văn hóa Việt.",\n  "chatLieuVaMauSac": "Nền xanh xám, phối hoa sen hồng, lá xanh và nan quạt trắng ngà.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, nổi bật với cụm hoa sen nở và lá sen trải rộng, tạo bố cục cân đối, mềm mại.",\n  "isFeatured": null,\n  "images": []\n}
P2188: {\n  "id": "SP_QCS_QSTLB",\n  "coSoSanXuatId": "QCS_QCS",\n  "name": "Quạt Sơn Thủy Lục Bảo",\n  "itemDescription": "Mang đến hình ảnh phong cảnh thiên nhiên với núi non, cây cối, mặt nước và những công trình nhỏ ẩn hiện giữa sắc xanh tươi sáng. Bố cục nhiều lớp tạo cảm giác có chiều sâu, gợi một miền sơn thủy yên bình và giàu sức sống. Sản phẩm phù hợp làm quà tặng văn hóa, vật phẩm trang trí hoặc lựa chọn dành cho những người yêu thích tranh phong cảnh truyền thống.",\n  "chatLieu": "Nan quạt bằng tre hoặc gỗ, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí tranh phong cảnh bằng phương pháp vẽ hoặc in màu trên nền quạt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Non xanh nước biếc, mở ra miền cảnh sắc an nhiên.",\n  "dacDiemDescription": "Bức tranh phong cảnh được thể hiện bằng nhiều sắc xanh từ sáng đến đậm, kết hợp những chi tiết cây cối, núi đồi và công trình kiến trúc nhỏ. Cách phối màu tạo cảm giác tươi mát, trong khi bố cục nhiều lớp mang đến chiều sâu cho mặt quạt.",\n  "chatLieuVaMauSac": "Nền xanh lá phối sắc xanh, vàng, hồng, đỏ, kết hợp nan gỗ sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, nổi bật với tranh sơn thủy kết hợp núi non, cây cối, mặt nước và kiến trúc truyền thống.",\n  "isFeatured": null,\n  "images": []\n}
P2189: {\n  "id": "SP_QCS_QHLTM",\n  "coSoSanXuatId": "QCS_QCS",\n  "name": "Quạt Hắc Liên Thủy Mặc",\n  "itemDescription": "Gây ấn tượng với nền tối, nổi bật cùng những đóa sen hồng và các mảng họa tiết đen trắng mang phong cách thủy mặc. Sự tương phản giữa sắc hoa tươi sáng và nền trầm tạo nên vẻ đẹp sâu lắng, có chiều sâu nghệ thuật. Sản phẩm phù hợp làm quà tặng, vật phẩm trưng bày hoặc dành cho những người yêu thích hội họa truyền thống kết hợp phong cách hiện đại.",\n  "chatLieu": "Nan quạt bằng tre hoặc gỗ, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí hoa sen và họa tiết thủy mặc bằng phương pháp vẽ hoặc in màu.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Sen nở giữa mực, tĩnh tại phương Đông.",\n  "dacDiemDescription": "Những đóa sen hồng được đặt trên nền họa tiết đen trắng, tạo điểm nhấn thị giác rõ rệt. Các mảng sáng tối đan xen với sắc hoa giúp chiếc quạt mang vẻ đẹp vừa trầm lắng vừa sinh động, phù hợp với không gian nghệ thuật và trưng bày.",\n  "chatLieuVaMauSac": "Nền đen, trắng, xám điểm hoa sen hồng, kết hợp nan quạt nâu đậm.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, kết hợp hoa sen hồng và tranh thủy mặc, tạo hiệu ứng tương phản sáng tối tinh tế.",\n  "isFeatured": null,\n  "images": []\n}
P2190: 7.5. SẢN PHẨM CỦA QUẠT TỪ TÂM
P2191: {\n  "id": "SP_QCS_QKH",\n  "coSoSanXuatId": "QCS_QTT",\n  "name": "Quạt Khang Hi",\n  "itemDescription": "Mang vẻ đẹp thanh nhã với nền giấy sáng màu, kết hợp thư pháp và họa tiết hội họa theo phong cách phương Đông. Những nét mực đen mềm mại cùng điểm nhấn hồng đỏ tạo nên bố cục hài hòa, gợi tinh thần thi họa truyền thống. Sản phẩm phù hợp để trưng bày, làm quà tặng hoặc kết hợp với trang phục mang phong cách cổ điển.",\n  "chatLieu": "Giấy trang trí, nan quạt và cán quạt",\n  "kyThuat": "Tạo hình quạt xếp truyền thống, kết hợp trang trí thư pháp và họa tiết hội họa trên bề mặt giấy.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Nét mực phương Đông, lưu dấu vẻ đẹp cổ truyền.",\n  "dacDiemDescription": "Sản phẩm nổi bật với nền trắng kết hợp các nét mực đen và điểm nhấn màu hồng nhẹ. Bố cục trang trí không đối xứng tạo cảm giác tự nhiên, giúp chiếc quạt vừa có giá trị sử dụng vừa mang tính nghệ thuật.",\n  "chatLieuVaMauSac": "Nền giấy trắng ngà, họa tiết đen xám điểm hồng đỏ, kết hợp nan quạt màu đen tương phản.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, trang trí thư pháp, tranh phong cảnh và hoa nhỏ, tạo nét hài hòa, tinh tế.",\n  "isFeatured": null,\n  "images": []\n}
P2192: {\n  "id": "SP_QCS_QNG",\n  "coSoSanXuatId": "QCS_QTT",\n  "name": "Quạt Nan Gỗ",\n  "itemDescription": "Gây ấn tượng với phần mặt quạt màu xanh lam đậm, nổi bật cùng họa tiết rồng nhiều màu và những nhành hoa lá ánh vàng. Sự kết hợp giữa nền màu trầm và các chi tiết trang trí rực rỡ tạo nên vẻ đẹp sang trọng, đậm phong cách phương Đông. Sản phẩm phù hợp làm quà tặng, vật phẩm trưng bày hoặc phục vụ các hoạt động văn hóa nghệ thuật.",\n  "chatLieu": "Nan quạt màu gỗ sáng tự nhiên, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp với hệ nan liên kết, kết hợp trang trí hình tượng rồng và hoa văn thực vật trên mặt quạt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Nét mộc tự nhiên, điểm sắc nghệ thuật.",\n  "dacDiemDescription": "Chiếc quạt kết hợp phần nan màu sáng với mặt quạt xanh đậm, tạo nên sự tương phản rõ nét. Hình tượng rồng nhiều màu được đặt ở vị trí trung tâm, kết hợp cùng các nhành hoa lá màu vàng giúp tổng thể thêm sinh động và giàu tính trang trí.",\n  "chatLieuVaMauSac": "Nan gỗ sáng tự nhiên, mặt quạt xanh lam đậm kết hợp họa tiết đỏ, vàng, xanh lục nổi bật.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, trang trí hình rồng cách điệu cùng hoa văn thực vật, tạo điểm nhấn nổi bật trên nền xanh đậm.",\n  "isFeatured": null,\n  "images": []\n}
P2193: {\n  "id": "SP_QCS_QTT",\n  "coSoSanXuatId": "QCS_QTT",\n  "name": "Quạt Tranh Tết",\n  "itemDescription": "Mang không khí mùa xuân lên mặt quạt qua hình ảnh những cành hoa đào hồng nở rộ trên nền giấy sáng. Các nhánh cây sẫm màu uốn lượn mềm mại, kết hợp với sắc hoa tươi tắn tạo nên tổng thể nhẹ nhàng và giàu ý nghĩa. Sản phẩm thích hợp làm quà tặng dịp Tết, trang trí không gian ngày xuân hoặc sử dụng trong các hoạt động văn hóa truyền thống.",\n  "chatLieu": "Giấy trang trí, nan quạt và cán quạt.",\n  "kyThuat": "Tạo hình quạt xếp truyền thống, kết hợp vẽ hoặc in tranh hoa đào trên bề mặt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Mai đào khoe sắc, gửi trao lời chúc xuân.",\n  "dacDiemDescription": "Những cành hoa đào được thể hiện bằng đường nét uyển chuyển, trải rộng trên mặt quạt. Sắc hồng nổi bật trên nền trắng ngà, tạo cảm giác tươi sáng và mang ý nghĩa về sự khởi đầu tốt đẹp trong năm mới.",\n  "chatLieuVaMauSac": "Nền trắng ngà, hoa màu hồng phấn và hồng đậm, cành cây nâu đen; nan quạt màu đen.",\n  "hoaTietVaKieuDang": "Hình cành đào nở hoa được bố trí theo đường cong của mặt quạt bán nguyệt. Có tua đỏ làm điểm nhấn trang trí.",\n  "isFeatured": null,\n  "images": []\n}
P2194: {\n  "id": "SP_QCS_QHVCC",\n  "coSoSanXuatId": "QCS_QTT",\n  "name": "Quạt Hoa Văn Cao Cấp",\n  "itemDescription": "Nổi bật với nền đỏ rực rỡ cùng hệ họa tiết trang trí mang phong cách truyền thống. Những chi tiết ánh vàng được bố trí hài hòa trên mặt quạt, tạo hiệu ứng nổi bật và cảm giác sang trọng. Sản phẩm phù hợp làm quà tặng, vật phẩm trưng bày hoặc phụ kiện cho các chương trình nghệ thuật và sự kiện văn hóa.",\n  "chatLieu": "Giấy hoặc vải trang trí, nan quạt và cán quạt.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí hoa văn trên nền đỏ; phương pháp vẽ, in hoặc đính họa tiết",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Sắc đỏ nổi bật, điểm vàng sang trọng.",\n  "dacDiemDescription": "Nền đỏ tạo ấn tượng thị giác mạnh, trong khi các chi tiết vàng giúp bề mặt quạt thêm nổi bật. Hệ hoa văn được sắp xếp theo hình dáng mặt quạt, tạo sự cân đối và làm tăng vẻ trang trọng cho sản phẩm.",\n  "chatLieuVaMauSac": "Nền đỏ, họa tiết vàng và phần nan quạt màu ngà sáng",\n  "hoaTietVaKieuDang": "Hoa văn truyền thống kết hợp các mô-típ đối xứng và đường nét uốn lượn trên mặt quạt bán nguyệt.",\n  "isFeatured": null,\n  "images": []\n}
P2195: {\n  "id": "SP_QCS_QTT",\n  "coSoSanXuatId": "QCS_QTT",\n  "name": "Quạt Truyền Thống",\n  "itemDescription": "Mang vẻ đẹp thanh nhã với hình ảnh hoa sen trắng nổi bật trên nền xanh trầm. Các cánh hoa mềm mại kết hợp cùng lá sen xanh tạo nên bố cục hài hòa, gợi nhắc đến vẻ đẹp giản dị và thanh cao của văn hóa Việt Nam. Sản phẩm phù hợp làm quà tặng, vật phẩm trang trí hoặc sử dụng trong các hoạt động văn hóa nghệ thuật.",\n  "chatLieu": "Giấy hoặc vải trang trí, nan quạt và cán quạt",\n  "kyThuat": "Tạo hình quạt xếp truyền thống, kết hợp trang trí họa tiết hoa sen và lá sen trên mặt quạt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Hoa sen thanh khiết, sắc xanh dịu dàng.",\n  "dacDiemDescription": "Những bông sen trắng được bố trí thành cụm trên nền xanh, kết hợp cùng lá sen và nhụy vàng tạo điểm nhấn. Cách phối màu nhẹ nhàng giúp chiếc quạt giữ được vẻ đẹp trang nhã, phù hợp với nhiều không gian trưng bày.",\n  "chatLieuVaMauSac": "Nền xanh rêu pha xám, hoa sen trắng, nhụy vàng và lá xanh; nan quạt màu đen.",\n  "hoaTietVaKieuDang": "Cụm hoa sen nở kết hợp nụ sen và lá sen có phần tua đỏ nhỏ ở chốt quạt tạo điểm nhấn.",\n  "isFeatured": null,\n  "images": []\n}
P2196: {\n  "id": "SP_QCS_QTPT",\n  "coSoSanXuatId": "QCS_QTT",\n  "name": "Quạt Tranh Phong Thủy",\n  "itemDescription": "Nổi bật với bức tranh nhiều màu sắc, kết hợp hình ảnh chim công và các loài hoa trên nền sáng. Sự phối hợp giữa sắc xanh, hồng, tím, đỏ và vàng tạo nên tổng thể sinh động, giàu tính nghệ thuật. Hình tượng chim công thường gắn với vẻ đẹp và sự cao quý trong mỹ thuật trang trí, giúp sản phẩm phù hợp làm quà tặng hoặc trưng bày trong không gian mang phong cách Á Đông.",\n  "chatLieu": "Giấy hoặc vải trang trí, nan quạt và cán quạt.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp vẽ hoặc in tranh hoa lá và chim công trên mặt quạt;",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Muôn hoa hội tụ, gửi gắm phúc lành.",\n  "dacDiemDescription": "Bề mặt quạt được trang trí bằng những cụm hoa nhiều màu, kết hợp hình ảnh chim công làm điểm nhấn. Bố cục trải rộng theo hình bán nguyệt giúp các chi tiết hòa quyện, tạo nên sản phẩm có tính trang trí cao và vẻ đẹp nổi bật.",\n  "chatLieuVaMauSac": "Nền trắng ngà, họa tiết phối xanh, hồng, tím, đỏ và vàng; nan quạt màu sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Hình ảnh chim công kết hợp các cụm hoa lá nhiều màu, bố trí uốn lượn trên mặt quạt xếp hình bán nguyệt.",\n  "isFeatured": null,\n  "images": []\n}
P2197: {\n  "id": "SP_QCS_QSVCP",\n  "coSoSanXuatId": "QCS_QP",\n  "name": "Quạt Sắc Việt Cổ Phong",\n  "itemDescription": "Nền đen huyền bí, điểm xuyết hình ảnh những nhân vật trong trang phục truyền thống cùng các họa tiết hoa rực rỡ. Sự kết hợp giữa gam màu trầm và những chi tiết nhiều màu sắc tạo nên vẻ đẹp cổ điển, gợi nhắc đến trang phục và mỹ thuật phương Đông. Sản phẩm phù hợp để trưng bày, làm quà tặng văn hóa hoặc bổ sung vào bộ sưu tập quạt nghệ thuật mang dấu ấn truyền thống.",\n  "chatLieu": "Nan quạt màu gỗ tự nhiên, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp thủ công, kết hợp trang trí hình nhân vật và họa tiết hoa trên mặt quạt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Sắc màu kể chuyện văn hóa.",\n  "dacDiemDescription": "Nền đen tạo chiều sâu cho tổng thể, làm nổi bật hình ảnh nhân vật trong trang phục truyền thống và các họa tiết hoa nhiều màu. Bố cục được chia thành những mảng trang trí riêng biệt, tạo cảm giác cân đối và giúp từng chi tiết trở nên nổi bật.",\n  "chatLieuVaMauSac": "Nền đen phối họa tiết đỏ, vàng, xanh lá nổi bật, kết hợp nan gỗ sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, trang trí hình nhân vật trong trang phục truyền thống xen kẽ hoa văn cách điệu, bố trí theo từng ô.",\n  "isFeatured": null,\n  "images": []\n}
P2198: {\n  "id": "SP_QCS_QTVHL",\n  "coSoSanXuatId": "QCS_QP",\n  "name": "Quạt Thanh Vũ Hoa Lam",\n  "itemDescription": "Hình ảnh chim công xanh trên nền sáng, kết hợp cùng các họa tiết hoa lá mang sắc xanh và hồng nhẹ nhàng. Tổng thể tạo cảm giác thanh thoát, hài hòa giữa vẻ đẹp thiên nhiên và phong cách trang trí Á Đông. Sản phẩm thích hợp làm quà tặng, vật phẩm trưng bày hoặc phụ kiện trong các không gian mang hơi hướng truyền thống.",\n  "chatLieu": "Nan quạt màu gỗ tự nhiên, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí hình chim công và hoa lá trên mặt quạt.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Cánh quạt đón gió, sắc lam lưu tình.",\n  "dacDiemDescription": "Hình ảnh chim công xanh là điểm nhấn chính trên nền quạt sáng màu. Những cành hoa và lá được bố trí xung quanh, kết hợp các sắc xanh lam, hồng và xanh lục để tạo nên bố cục sinh động nhưng không quá rực rỡ.",\n  "chatLieuVaMauSac": "Nền trắng ngà, họa tiết xanh lam, xanh lục và hồng nhạt; nan quạt màu gỗ sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Chim công cách điệu kết hợp hoa lá, được sắp xếp theo đường cong của mặt quạt bán nguyệt.",\n  "isFeatured": null,\n  "images": []\n}
P2199: {\n  "id": "SP_QCS_QKHCT",\n  "coSoSanXuatId": "QCS_QP",\n  "name": "Quạt Kim Hoa Cát Tường",\n  "itemDescription": "Mang vẻ đẹp trang nhã với nền giấy trắng ngà, điểm xuyết các họa tiết màu vàng ánh kim. Những đường nét trang trí mềm mại kết hợp cùng sắc màu nhẹ nhàng tạo nên tổng thể tinh tế, phù hợp với không gian mang phong cách cổ điển. Sản phẩm có thể được sử dụng làm quà tặng, vật phẩm trưng bày hoặc kết hợp trong các bộ sưu tập quạt nghệ thuật.",\n  "chatLieu": "Nan quạt màu gỗ tự nhiên, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí họa tiết màu vàng trên nền sáng.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Sắc vàng thanh nhã, gửi gắm điều may.",\n  "dacDiemDescription": "Sắc vàng trên nền trắng ngà tạo hiệu ứng tương phản nhẹ, mang đến vẻ đẹp thanh lịch và không quá cầu kỳ. Các họa tiết được bố trí dọc theo mặt quạt, giúp tổng thể có chiều sâu mà vẫn giữ được sự hài hòa.",\n  "chatLieuVaMauSac": "Nền trắng ngà điểm họa tiết vàng nhạt, kết hợp nan gỗ tự nhiên thanh lịch.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, trang trí hoa văn thực vật và đường nét uốn lượn mềm mại.",\n  "isFeatured": null,\n  "images": []\n}
P2200: {\n  "id": "SP_QCS_QLDH",\n  "coSoSanXuatId": "QCS_QP",\n  "name": "Quạt Lam Đồ Họa",\n  "itemDescription": "Nền xanh dương đậm cùng hệ thống đường nét kỹ thuật màu sáng, gợi hình ảnh bản vẽ kiến trúc và các sơ đồ thiết kế. Phong cách thể hiện hiện đại tạo nên sự khác biệt so với những mẫu quạt thiên về hoa văn truyền thống. Sản phẩm phù hợp làm quà tặng sáng tạo, vật phẩm trưng bày hoặc quà lưu niệm dành cho những người yêu thích kiến trúc và thiết kế.",\n  "chatLieu": "Nan quạt màu đen, mặt quạt bằng giấy hoặc vải có họa tiết trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp in hoặc thể hiện các đường nét đồ họa trên mặt quạt",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Nét xanh sáng tạo, giao hòa truyền thống và hiện đại.",\n  "dacDiemDescription": "Nền xanh đậm làm nổi bật hệ thống đường nét và ký hiệu màu trắng xanh. Cách bố trí họa tiết theo từng nan tạo cảm giác có trật tự, gợi liên tưởng đến bản vẽ kỹ thuật và ngôn ngữ thiết kế hiện đại.",\n  "chatLieuVaMauSac": "Nền xanh dương đậm, họa tiết trắng xanh, kết hợp nan quạt màu đen.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, trang trí bản vẽ kỹ thuật với đường nét hình học và hình minh họa kiến trúc độc đáo",\n  "isFeatured": null,\n  "images": []\n}
P2201: {\n  "id": "SP_QCS_QVXL",\n  "coSoSanXuatId": "QCS_QP",\n  "name": "Quạt Vân Xoắn Lam",\n  "itemDescription": "Nền xanh lam trầm, kết hợp những họa tiết xoắn tròn màu trắng được lặp lại đều đặn trên bề mặt. Thiết kế tối giản về màu sắc nhưng giàu tính nhịp điệu, tạo nên vẻ đẹp mộc mạc và dễ nhận diện. Sản phẩm phù hợp với những người yêu thích họa tiết hình học, phong cách trang trí Á Đông và các vật phẩm thủ công có thiết kế tinh giản.",\n  "chatLieu": "Nan quạt màu gỗ tự nhiên, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí họa tiết xoắn tròn lặp lại trên nền xanh.",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Nhịp xoắn hài hòa, tạo dấu ấn từ những đường nét giản dị.",\n  "dacDiemDescription": "Các họa tiết xoắn tròn được sắp xếp liên tiếp trên nền xanh, tạo nhịp điệu thị giác rõ ràng. Sự tương phản giữa hai gam màu giúp hoa văn nổi bật mà không cần sử dụng quá nhiều chi tiết trang trí.",\n  "chatLieuVaMauSac": "Nền xanh lam pha xanh denim, họa tiết trắng ngà; nan quạt màu gỗ sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Họa tiết xoắn tròn cách điệu kết hợp các đường nét nhỏ, được lặp lại theo chiều xòe của quạt bán nguyệt.",\n  "isFeatured": null,\n  "images": []\n}
P2202: {\n  "id": "SP_QCS_QHXDG",\n  "coSoSanXuatId": "QCS_QP",\n  "name": "Quạt Hội Xuân Dân Gian",\n  "itemDescription": "Tái hiện không khí lễ hội truyền thống qua những hình ảnh nhân vật, hoạt động sinh hoạt và họa tiết trang trí nhiều màu sắc. Nền đỏ cam nổi bật kết hợp cùng các mảng màu xanh, vàng và trắng tạo nên tổng thể sống động, gợi cảm giác vui tươi của những ngày hội. Sản phẩm phù hợp làm quà tặng văn hóa, vật phẩm trưng bày hoặc sử dụng trong các chương trình giới thiệu nghệ thuật dân gian.",\n  "chatLieu": "Nan quạt màu gỗ tự nhiên, mặt quạt bằng giấy hoặc vải trang trí.",\n  "kyThuat": "Tạo hình quạt xếp, kết hợp trang trí tranh sinh hoạt dân gian trên bề mặt",\n  "xuatXu": "Làng quạt Chàng Sơn, Thạch Thất, Hà Nội.",\n  "dacDiemTitle": "Rộn ràng sắc hội, lưu giữ hồn quê Việt.",\n  "dacDiemDescription": "Bề mặt quạt được trang trí bằng nhiều hình ảnh nhân vật và chi tiết gợi không khí sinh hoạt cộng đồng. Nền đỏ cam tạo điểm nhấn mạnh mẽ, trong khi các mảng màu phong phú giúp bức tranh thêm sinh động. Bố cục trải rộng theo hình bán nguyệt tạo cảm giác như một khung cảnh lễ hội thu nhỏ.",\n  "chatLieuVaMauSac": "Nền đỏ cam rực rỡ, phối họa tiết đa sắc và nan gỗ sáng tự nhiên.",\n  "hoaTietVaKieuDang": "Quạt xếp bán nguyệt, tái hiện tranh sinh hoạt dân gian cùng hình ảnh nhân vật và hoa văn truyền thống.",\n  "isFeatured": null,\n  "images": []\n}
P2203: 7.7. SẢN PHẨM CỦA MÂY TRE ĐAN VIỆT QUANG
P2204: {\n  "id": "SP_MTD_TXMTDHD",\n  "coSoSanXuatId": "MTD_MTDVQ",\n  "name": "Túi Xách Mây Tre Đan Hồng Đan",\n  "itemDescription": "Túi xách thủ công kết hợp phần thân đan họa tiết zích zắc đỏ hồng với quai xách tròn bằng mây, tạo điểm nhấn nổi bật cho phong cách thời trang mang cảm hứng tự nhiên.",\n  "chatLieu": "Mây, tre hoặc sợi đan thủ công kết hợp quai xách bằng mây",\n  "kyThuat": "Đan thủ công, tạo hình thân túi và hoàn thiện quai xách.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Đan nét truyền thống, điểm sắc màu riêng.",\n  "dacDiemDescription": "Sản phẩm kết hợp kỹ thuật đan thủ công với cách phối màu hiện đại, tạo nên chiếc túi vừa có tính ứng dụng vừa mang dấu ấn thủ công mỹ nghệ. Thiết kế phù hợp với những chuyến dạo phố, du lịch hoặc phối cùng trang phục phong cách tự nhiên.",\n  "chatLieuVaMauSac": "Thân túi đan đỏ hồng phối trắng kem, kết hợp quai nâu vàng tự nhiên.",\n  "hoaTietVaKieuDang": "Túi dáng chữ nhật rộng, miệng mở, hai quai tròn và họa tiết zích zắc nổi bật.",\n  "isFeatured": null,\n  "images": []\n}
P2205: {\n  "id": "SP_MTD_GMTDM",\n  "coSoSanXuatId": "MTD_MTDVQ",\n  "name": "Ghế Mây Tựa Đan Mộc",\n  "itemDescription": "Ghế mây mang thiết kế tối giản với khung gỗ hoặc vật liệu tự nhiên kết hợp phần tựa đan thủ công, tạo cảm giác gần gũi và thư thái cho không gian sống.",\n  "chatLieu": "Mây đan kết hợp khung gỗ",\n  "kyThuat": "Đan mây phần tựa ghế, gia công khung và lắp ráp hoàn thiện.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Vẻ mộc tự nhiên, nâng niu từng phút giây",\n  "dacDiemDescription": "Chiếc ghế kết hợp kết cấu khung chắc chắn với bề mặt đan thoáng, mang lại vẻ đẹp giản dị mà vẫn có điểm nhấn thủ công. Sản phẩm phù hợp với không gian phòng khách, góc đọc sách, homestay hoặc khu nghỉ dưỡng theo phong cách tự nhiên.",\n  "chatLieuVaMauSac": "Tông nâu vàng tự nhiên, kết hợp đệm ngồi màu sáng, dễ phối hợp với nhiều không gian nội thất.",\n  "hoaTietVaKieuDang": "Ghế tựa lưng chữ nhật đan đều, chân nghiêng và tay vịn thấp, mang thiết kế gọn nhẹ, gần gũi với thiên nhiên.",\n  "isFeatured": null,\n  "images": []\n}
P2206: {\n  "id": "SP_MTD_LLMTDT",\n  "coSoSanXuatId": "MTD_MTDVQ",\n  "name": "Lót Ly Mây Tre Đan Tròn",\n  "itemDescription": "Lót ly mây tre đan có kiểu dáng tròn nhỏ gọn, bề mặt đan đều và màu sắc tự nhiên, giúp bảo vệ mặt bàn đồng thời tạo điểm nhấn mộc mạc cho góc thưởng trà.",\n  "chatLieu": "Mây hoặc sợi thực vật đan thủ công",\n  "kyThuat": "Đan xoắn hoặc đan vòng tròn, hoàn thiện viền sản phẩm.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Nét mộc dưới ly, điểm duyên trên bàn",\n  "dacDiemDescription": "Sản phẩm mang vẻ đẹp tự nhiên của vật liệu đan thủ công, phù hợp với thói quen thưởng trà và sử dụng đồ uống hằng ngày. Thiết kế đơn giản giúp lót ly dễ kết hợp với ấm trà gốm, cốc sứ và nhiều phong cách bày biện khác nhau.",\n  "chatLieuVaMauSac": "Tông nâu vàng tự nhiên, bề mặt đan nổi rõ, dễ kết hợp với đồ gốm và nội thất gỗ.",\n  "hoaTietVaKieuDang": "Lót ly dáng tròn, đan theo vòng đồng tâm, viền gọn gàng, tạo tổng thể cân đối và mộc mạc.",\n  "isFeatured": null,\n  "images": []\n}
P2207: {\n  "id": "SP_MTD_DGSVMT",\n  "coSoSanXuatId": "MTD_MTDVQ",\n  "name": "Đĩa Gốm Sứ Viền Mây Tre",\n  "itemDescription": "Đĩa gốm sứ trang trí với nhiều kiểu dáng và họa tiết xanh lam, kết hợp viền mây đan tự nhiên, tạo nên sự giao thoa giữa nghệ thuật gốm và thủ công mỹ nghệ.",\n  "chatLieu": "Gốm sứ kết hợp viền mây tre đan.",\n  "kyThuat": "Tạo hình và trang trí gốm sứ, đan viền mây và hoàn thiện sản phẩm.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Nét gốm thanh nhã, viền đan tự nhiên.",\n  "dacDiemDescription": "Sản phẩm kết hợp hai chất liệu thủ công với đặc trưng thẩm mỹ riêng: bề mặt gốm mang họa tiết trang trí tinh tế, trong khi phần viền đan tạo cảm giác gần gũi và mộc mạc. Sự kết hợp này giúp chiếc đĩa phù hợp cả với nhu cầu bày biện lẫn trang trí không gian.",\n  "chatLieuVaMauSac": "Đĩa nền trắng họa tiết xanh lam, kết hợp viền đan nâu vàng tự nhiên.",\n  "hoaTietVaKieuDang": "Đa dạng dáng tròn, bầu dục và cách điệu, trang trí hoa lá xanh trên nền sáng, tạo điểm nhấn mộc mạc, tinh tế.",\n  "isFeatured": null,\n  "images": []\n}
P2208: {\n  "id": "SP_MTD_KMMD",\n  "coSoSanXuatId": "MTD_MTDVQ",\n  "name": "Khay Mây Đựng Đồ",\n  "itemDescription": "Khay mây đan thủ công có dáng thuôn dài, phần thành thấp và tông màu tự nhiên, phù hợp để sắp xếp đồ dùng cá nhân, vật dụng bàn ăn hoặc các món đồ nhỏ trong gia đình.",\n  "chatLieu": "Mây hoặc vật liệu sợi thực vật đan thủ công",\n  "kyThuat": "Đan tạo hình khay, gia cố phần thành và hoàn thiện viền.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Gọn gàng trong sắp đặt, mộc mạc trong nét mây.",\n  "dacDiemDescription": "Với thiết kế đơn giản và kích thước có thể bố trí linh hoạt, khay mây hỗ trợ sắp xếp các vật dụng nhỏ một cách ngăn nắp. Sản phẩm phù hợp với bàn ăn, kệ bếp, bàn trà hoặc không gian lưu trú theo phong cách tự nhiên.",\n  "chatLieuVaMauSac": "Tông nâu vàng sáng, nổi bật với kết cấu đan tự nhiên, dễ phối hợp cùng đồ gỗ và gốm sứ.",\n  "hoaTietVaKieuDang": "Khay dáng thuôn dài, đáy phẳng, thành đan cao vừa phải và viền bo gọn, tạo vẻ mộc mạc, tinh tế.",\n  "isFeatured": null,\n  "images": []\n}
P2209: {\n  "id": "SP_MTD_HDGMTD",\n  "coSoSanXuatId": "MTD_MTDVQ",\n  "name": "Hộp Đựng Giấy Mây Tre Đan",\n  "itemDescription": "Hộp đựng giấy mây tre đan kết hợp công năng lưu trữ với vẻ đẹp thủ công tự nhiên, giúp không gian bàn làm việc, phòng khách hoặc phòng ngủ trở nên gọn gàng và hài hòa hơn.",\n  "chatLieu": "Mây, tre hoặc sợi thực vật đan thủ công",\n  "kyThuat": "Đan tạo hình hộp, gia cố khung và hoàn thiện viền.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Giữ không gian ngăn nắp, điểm tô vẻ đẹp tự nhiên.",\n  "dacDiemDescription": "Sản phẩm hướng đến sự tiện dụng trong sinh hoạt hằng ngày, đồng thời tạo điểm nhấn trang trí nhờ bề mặt đan có kết cấu rõ nét. Thiết kế phù hợp với nhiều không gian, từ bàn trang điểm đến phòng khách, văn phòng và cơ sở lưu trú.",\n  "chatLieuVaMauSac": "Tông nâu vàng tự nhiên, bề mặt đan mộc mạc, dễ kết hợp với nội thất gỗ, vải và gốm.",\n  "hoaTietVaKieuDang": "Hộp chữ nhật, thân đan đều, miệng mở tiện đặt hộp giấy, có thể kết hợp nắp hoặc khe rút giấy tùy thiết kế.",\n  "isFeatured": null,\n  "images": []\n}
P2210: 7.8. SẢN PHẨM CỦA MÂY TRE ĐAN TUẤN ANH
P2211: {\n  "id": "SP_MTD_TXMDT",\n  "coSoSanXuatId": "MTD_MTDTA",\n  "name": "Túi Xách Mây Dáng Tròn",\n  "itemDescription": "Túi xách mây dáng tròn nổi bật với bề mặt đan đều, quai xách nhỏ gọn và dây đeo tiện dụng, phù hợp với phong cách thời trang mang hơi hướng tự nhiên, mộc mạc.",\n  "chatLieu": "Mây hoặc sợi thực vật đan thủ công",\n  "kyThuat": "Đan tạo hình thân túi, hoàn thiện quai và lắp ráp phụ kiện.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Dáng tròn duyên dáng, lưu giữ nét mộc",\n  "dacDiemDescription": "Sản phẩm kết hợp kỹ thuật đan thủ công với kiểu dáng nhỏ gọn, tạo nên phụ kiện vừa có tính ứng dụng vừa mang dấu ấn thủ công mỹ nghệ. Thiết kế phù hợp với những chuyến dạo phố, du lịch hoặc phối cùng trang phục theo phong cách tự nhiên.",\n  "chatLieuVaMauSac": "Tông vàng nâu tự nhiên, kết hợp quai và dây đeo nâu trầm, tạo điểm nhấn hài hòa.",\n  "hoaTietVaKieuDang": "Túi dáng tròn dẹt, đan theo vòng đồng tâm, có nắp đóng, khóa da và quai xách hai bên, tạo nét độc đáo.",\n  "isFeatured": null,\n  "images": []\n}
P2212: {\n  "id": "SP_MTD_TXMTDTL",\n  "coSoSanXuatId": "MTD_MTDTA",\n  "name": "Túi Xách Mây Tre Đan Thanh Lịch",\n  "itemDescription": "Túi xách mây tre đan kết hợp phần thân đan thủ công với quai xách chắc chắn và các chi tiết trang trí, tạo nên thiết kế cân bằng giữa nét truyền thống và phong cách hiện đại.",\n  "chatLieu": "Mây tre hoặc sợi thực vật đan thủ công kết hợp phụ kiện da",\n  "kyThuat": "Đan tạo hình thân túi, gia cố khung và hoàn thiện phụ kiện.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Điểm chạm của phong cách hiện đại.",\n  "dacDiemDescription": "Sản phẩm gây ấn tượng với phần thân đan màu tự nhiên, kết hợp quai xách phía trên và các chi tiết da màu nâu. Thiết kế có cấu trúc rõ ràng, phù hợp với nhu cầu sử dụng hằng ngày hoặc làm phụ kiện trong những dịp gặp gỡ, dạo phố.",\n  "chatLieuVaMauSac": "Thân túi vàng nâu sáng, phối lót và phụ kiện nâu sẫm, tôn lên vẻ mộc mạc của chất liệu đan.",\n  "hoaTietVaKieuDang": "Túi dáng hộp chữ nhật, quai xách phía trên, thân đan đều kết hợp khóa cài da, tạo vẻ gọn gàng, tiện dụng.",\n  "isFeatured": null,\n  "images": []\n}
P2213: {\n  "id": "SP_MTD_TXMNG",\n  "coSoSanXuatId": "MTD_MTDTA",\n  "name": "Túi Xách Mây Nắp Gập",\n  "itemDescription": "Túi xách mây nắp gập có thiết kế hình hộp thanh lịch, nổi bật với bề mặt đan mắt cáo, chi tiết nơ trang trí và dây đeo dài, phù hợp với phong cách thời trang nhẹ nhàng.",\n  "chatLieu": "Mây hoặc sợi thực vật đan thủ công kết hợp phụ kiện",\n  "kyThuat": "Đan mắt cáo, tạo hình thân và nắp túi, hoàn thiện dây đeo và khóa cài.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Nắp gập thanh tao, tôn nét duyên riêng",\n  "dacDiemDescription": "Sản phẩm mang vẻ đẹp giản dị nhưng có điểm nhấn nhờ phần nắp gập và chi tiết trang trí phía trước. Sự kết hợp giữa màu sắc tự nhiên và kiểu dáng gọn gàng giúp túi dễ phối cùng nhiều phong cách trang phục.",\n  "chatLieuVaMauSac": "Tông vàng kem tự nhiên, phối dây đeo và chi tiết nâu sáng, tôn lên vẻ mộc mạc của chất liệu đan.",\n  "hoaTietVaKieuDang": "Túi dáng chữ nhật, nắp gập chéo, điểm nhấn nơ đan và khóa tròn, kết hợp dây đeo dài tiện dụng.",\n  "isFeatured": null,\n  "images": []\n}
P2214: {\n  "id": "SP_MTD_TXMTDDT",\n  "coSoSanXuatId": "MTD_MTDTA",\n  "name": "Túi Xách Mây Tre Đan Dáng Trống",\n  "itemDescription": "Túi xách mây tre đan dáng trống có hình dáng thuôn dài, bề mặt đan thủ công và dây đeo dài, tạo nên phụ kiện mang nét mộc mạc, phù hợp với các hoạt động thường ngày.",\n  "chatLieu": "Mây hoặc sợi thực vật đan thủ công kết hợp phụ kiện",\n  "kyThuat": "Đan tạo hình thân túi, gia cố hai đầu và hoàn thiện quai, dây đeo.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Đường đan tự nhiên, dáng túi phóng khoáng.",\n  "dacDiemDescription": "Thiết kế dáng trống tạo cảm giác khác biệt so với các mẫu túi hình hộp thông thường. Bề mặt đan đều kết hợp dây đeo dài giúp sản phẩm phù hợp với phong cách thời trang giản dị, gần gũi với thiên nhiên.",\n  "chatLieuVaMauSac": "Gam nâu vàng tự nhiên phối dây đeo và phụ kiện nâu sẫm, làm nổi bật kết cấu đan thủ công.",\n  "hoaTietVaKieuDang": "Túi dáng thuôn dài, hai đầu bo tròn như chiếc trống nằm ngang, kết hợp nắp gập, khóa cài phía trước và dây đeo dài tiện dụng.",\n  "isFeatured": null,\n  "images": []\n}
P2215: {\n  "id": "SP_MTD_VMTDHTHH",\n  "coSoSanXuatId": "MTD_MTDTA",\n  "name": "Vali Mây Tre Đan Họa Tiết Hình Học",\n  "itemDescription": "Vali mây tre đan có dáng hộp vuông vắn, phần thân được đan chắc chắn và trang trí họa tiết hình học, tạo nên sản phẩm vừa mang dấu ấn thủ công vừa có tính ứng dụng trong lưu trữ và trang trí.",\n  "chatLieu": "Mây tre hoặc sợi thực vật đan thủ công",\n  "kyThuat": "Đan tạo hình hộp, gia cố khung và hoàn thiện quai xách, khóa cài.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Mộc mạc đường đan, thanh lịch dáng hình",\n  "dacDiemDescription": "Sản phẩm nổi bật với kết cấu hộp rõ ràng và các họa tiết hình học được tạo nên từ cách phối sợi đan. Thiết kế mang nét cổ điển, phù hợp để đựng vật dụng cá nhân, lưu trữ đồ dùng hoặc làm điểm nhấn trang trí trong không gian sống.",\n  "chatLieuVaMauSac": "Tông nâu vàng phối nâu sẫm, làm nổi bật kết cấu đan thủ công và vẻ mộc mạc của sản phẩm.",\n  "hoaTietVaKieuDang": "Vali dáng hộp chữ nhật, nắp mở và quai xách phía trên. Họa tiết hình thoi kết hợp khóa cài giúp tổng thể cân đối, gọn gàng.",\n  "isFeatured": null,\n  "images": []\n}
P2216: {\n  "id": "SP_MTD_BGTTUT",\n  "coSoSanXuatId": "MTD_MTDTA",\n  "name": "Bộ Giành Tích Ủ Trà",\n  "itemDescription": "Bộ giành tích ủ trà được tạo hình từ các sợi đan tự nhiên, có nắp đậy hình chóp và kiểu dáng tròn đầy, góp phần giữ nét truyền thống trong không gian thưởng trà.",\n  "chatLieu": "Mây, tre hoặc sợi thực vật đan thủ công",\n  "kyThuat": "Đan tạo hình thân giành và nắp, hoàn thiện các vòng đan trang trí.",\n  "xuatXu": "Làng nghề Phú Vinh.",\n  "dacDiemTitle": "Giữ hơi trà ấm, lưu truyền nét Việt.",\n  "dacDiemDescription": "Bộ giành tích ủ trà gợi nhắc đến nét sinh hoạt thưởng trà truyền thống. Kiểu dáng tròn đầy cùng kết cấu đan thủ công tạo nên vẻ mộc mạc, phù hợp với không gian thưởng trà gia đình, nhà hàng mang phong cách truyền thống hoặc khu nghỉ dưỡng văn hóa.",\n  "chatLieuVaMauSac": "Tông vàng nâu tự nhiên làm nổi bật kết cấu sợi đan, tạo cảm giác mộc mạc, hài hòa với đồ gỗ và gốm.",\n  "hoaTietVaKieuDang": "Giành có thân tròn, nắp hình chóp với các vòng đan đồng tâm, tạo tổng thể cân đối và đậm nét thủ công.",\n  "isFeatured": null,\n  "images": []\n}
P2217: 7.9. SẢN PHẨM CỦA HOÀNG ANH CERAMICS
P2218: {\n  "id": "SP_GBT_01",\n  "coSoSanXuatId": "GBT_HAC",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2219: {\n  "id": "SP_GBT_02",\n  "coSoSanXuatId": "GBT_HAC",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2220: {\n  "id": "SP_GBT_03",\n  "coSoSanXuatId": "GBT_HAC",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2221: {\n  "id": "SP_GBT_04",\n  "coSoSanXuatId": "GBT_HAC",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2222: {\n  "id": "SP_GBT_05",\n  "coSoSanXuatId": "GBT_HAC",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2223: {\n  "id": "SP_GBT_06",\n  "coSoSanXuatId": "GBT_HAC",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2224: 7.10. SẢN PHẨM CỦA BÁCH NGÂN HỶ
P2225: {\n  "id": "SP_GBT_07",\n  "coSoSanXuatId": "GBT_BNH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2226: {\n  "id": "SP_GBT_08",\n  "coSoSanXuatId": "GBT_BNH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2227: {\n  "id": "SP_GBT_09",\n  "coSoSanXuatId": "GBT_BNH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2228: {\n  "id": "SP_GBT_10",\n  "coSoSanXuatId": "GBT_BNH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2229: {\n  "id": "SP_GBT_11",\n  "coSoSanXuatId": "GBT_BNH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2230: {\n  "id": "SP_GBT_12",\n  "coSoSanXuatId": "GBT_BNH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2231: 7.11. SẢN PHẨM CỦA GỐM HẢI LONG
P2232: {\n  "id": "SP_GBT_13",\n  "coSoSanXuatId": "GBT_GHL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2233: {\n  "id": "SP_GBT_14",\n  "coSoSanXuatId": "GBT_GHL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2234: {\n  "id": "SP_GBT_15",\n  "coSoSanXuatId": "GBT_GHL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2235: {\n  "id": "SP_GBT_16",\n  "coSoSanXuatId": "GBT_GHL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2236: {\n  "id": "SP_GBT_17",\n  "coSoSanXuatId": "GBT_GHL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2237: {\n  "id": "SP_GBT_18",\n  "coSoSanXuatId": "GBT_GHL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2238: 7.12. SẢN PHẨM CỦA GỐM TỚI LIÊN
P2239: {\n  "id": "SP_GBT_19",\n  "coSoSanXuatId": "GBT_GTL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2240: {\n  "id": "SP_GBT_20",\n  "coSoSanXuatId": "GBT_GTL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2241: {\n  "id": "SP_GBT_21",\n  "coSoSanXuatId": "GBT_GTL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2242: {\n  "id": "SP_GBT_22",\n  "coSoSanXuatId": "GBT_GTL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2243: {\n  "id": "SP_GBT_23",\n  "coSoSanXuatId": "GBT_GTL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2244: {\n  "id": "SP_GBT_24",\n  "coSoSanXuatId": "GBT_GTL",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2245: 7.13. SẢN PHẨM CỦA GỐM SỨ MẠNH HOA
P2246: {\n  "id": "SP_GBT_25",\n  "coSoSanXuatId": "GBT_GSMH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2247: {\n  "id": "SP_GBT_26",\n  "coSoSanXuatId": "GBT_GSMH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2248: {\n  "id": "SP_GBT_27",\n  "coSoSanXuatId": "GBT_GSMH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2249: {\n  "id": "SP_GBT_28",\n  "coSoSanXuatId": "GBT_GSMH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2250: {\n  "id": "SP_GBT_29",\n  "coSoSanXuatId": "GBT_GSMH",\n  "name": "",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2251: Bộ Giành Tích Ủ Trà
P2252: {
P2253:   "id": "SP_GBT_29",
P2254:   "coSoSanXuatId": "GBT_GSMH",
P2255:   "name": "Bộ Giành Tích Ủ Trà",
P2256:   "itemDescription": "",
P2257:   "chatLieu": "",
P2258:   "kyThuat": "",
P2259:   "xuatXu": "Làng gốm Bát Tràng, Hà Nội.",
P2260:   "dacDiemTitle": "",
P2261:   "dacDiemDescription": "",
P2262:   "chatLieuVaMauSac": "",
P2263:   "hoaTietVaKieuDang": "",
P2264:   "isFeatured": null,
P2265:   "images": []
P2266: }
P2267: 7.14. SẢN PHẨM CỦA LỤA NHA XÁ
P2268: {\n  "id": "SP_LNX_01",\n  "coSoSanXuatId": "LNX_LNX",\n  "name": "Lụa hoa văn Phượng Vũ",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2269: {\n  "id": "SP_LNX_02",\n  "coSoSanXuatId": "LNX_LNX",\n  "name": "Lụa hoa văn Phượng Vũ",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2270: {\n  "id": "SP_LNX_03",\n  "coSoSanXuatId": "LNX_LNX",\n  "name": "Lụa hoa văn Phượng Vũ",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2271: {\n  "id": "SP_LNX_04",\n  "coSoSanXuatId": "LNX_LNX",\n  "name": "Lụa hoa văn Phượng Vũ",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2272: {\n  "id": "SP_LNX_05",\n  "coSoSanXuatId": "LNX_LNX",\n  "name": "Lụa hoa văn Phượng Vũ",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2273: {\n  "id": "SP_LNX_06",\n  "coSoSanXuatId": "LNX_LNX",\n  "name": "Lụa hoa văn Phượng Vũ",\n  "itemDescription": "",\n  "chatLieu": "",\n  "kyThuat": "",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "",\n  "dacDiemDescription": "",\n  "chatLieuVaMauSac": "",\n  "hoaTietVaKieuDang": "",\n  "isFeatured": null,\n  "images": []\n}
P2274: 7.15. SẢN PHẨM CỦA SILK HẠ VY
P2275: {\n  "id": "SP_SHV_01",\n  "coSoSanXuatId": "LNX_SHV",\n  "name": "Lụa Hoa Tiết Trống Đồng",\n  "itemDescription": "Nổi bật với sắc hồng tím dịu dàng, điểm xuyết những họa tiết tròn lấy cảm hứng từ hoa văn trống đồng truyền thống. Sự kết hợp giữa màu sắc mềm mại và các biểu tượng văn hóa tạo nên chất liệu mang vẻ đẹp vừa cổ điển vừa hiện đại, phù hợp cho áo dài, trang phục biểu diễn và những thiết kế tôn vinh bản sắc Việt.",\n  "chatLieu": "Lụa hoa văn, 70% tơ tằm, 30% polyester.",\n  "kyThuat": "Dệt Jacquard tạo hoa văn trống đồng, kết hợp xử lý hoàn tất bề mặt để tăng độ mềm mại và hiệu ứng óng nhẹ.",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "Họa tiết cổ truyền trên nền lụa sắc hồng trang nhã.",\n  "dacDiemDescription": "Bề mặt vải gây ấn tượng bởi các họa tiết tròn được sắp xếp liên tục, tạo nhịp điệu thị giác hài hòa. Tông hồng tím kết hợp cùng sắc độ hoa văn trầm mang đến vẻ đẹp tinh tế, phù hợp với những thiết kế vừa có tính ứng dụng vừa chứa đựng giá trị văn hóa.",\n  "chatLieuVaMauSac": "Nền hồng phấn pha tím, hoa văn có sắc độ đậm nhạt tạo chiều sâu cho bề mặt.",\n  "hoaTietVaKieuDang": "Họa tiết tròn lấy cảm hứng từ hoa văn trống đồng, kết hợp các đường nét hình học và mô-típ trang trí truyền thống.",\n  "isFeatured": null,\n  "images": []\n}
P2276: {\n  "id": "SP_SHV_02",\n  "coSoSanXuatId": "LNX_SHV",\n  "name": "Lụa Hoa Văn Hoa Bèo",\n  "itemDescription": "Mang tông nâu vàng ấm áp, nổi bật với hệ hoa văn hoa lá được thể hiện dày và đều trên nền vải. Những đường nét mềm mại kết hợp cùng sắc màu trầm tạo nên vẻ đẹp thanh lịch, thích hợp cho áo dài, trang phục truyền thống và các thiết kế mang hơi hướng cổ điển.",\n  "chatLieu": "Lụa hoa văn, 70% tơ tằm, 30% polyester.",\n  "kyThuat": "Dệt Jacquard tạo hoa văn hoa lá, kết hợp xử lý hoàn tất nhằm tăng độ mềm mại và làm nổi bật bề mặt vải.",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "Sắc nâu thanh nhã, hoa văn mềm mại.",\n  "dacDiemDescription": "Sản phẩm tạo ấn tượng với các cụm hoa lá đan xen trên nền nâu vàng, mang đến cảm giác hài hòa và sang trọng. Hoa văn được phân bố tương đối đồng đều, giúp bề mặt vải có chiều sâu mà không làm mất đi sự nhẹ nhàng của tổng thể.",\n  "chatLieuVaMauSac": "Nền nâu vàng ánh đồng, hoa văn màu vàng kem tạo hiệu ứng tương phản nhẹ.",\n  "hoaTietVaKieuDang": "Hoa văn hoa lá cách điệu với các cành, lá và cụm hoa đan xen, tạo bố cục liên tục trên bề mặt vải.",\n  "isFeatured": null,\n  "images": []\n}
P2277: {\n  "id": "SP_SHV_03",\n  "coSoSanXuatId": "LNX_SHV",\n  "name": "Lụa Hoa Văn Sen Hồ Điệp",\n  "itemDescription": "Kết hợp gam vàng nhạt với sắc xanh lam dịu mắt, tạo nên tổng thể nhẹ nhàng và thanh lịch. Những họa tiết gợi hình ảnh hoa sen và hồ điệp được bố trí trên nền vải, mang đến nét duyên mềm mại cho các thiết kế áo dài, trang phục truyền thống và sản phẩm may mặc mang cảm hứng thiên nhiên.",\n  "chatLieu": "Lụa hoa văn, 70% tơ tằm, 30% polyester.",\n  "kyThuat": "Dệt Jacquard tạo hoa văn thiên nhiên, kết hợp xử lý hoàn tất bề mặt để duy trì độ mềm mại và hiệu ứng ánh nhẹ.",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "Sen thanh tao, bướm nhẹ nhàng, sắc lụa an nhiên.",\n  "dacDiemDescription": "Nền vải vàng nhạt kết hợp cùng các họa tiết xanh lam tạo nên sự tương phản tinh tế. Hoa văn được phân bố thoáng, giúp tổng thể nhẹ nhàng và phù hợp với những thiết kế đề cao sự thanh nhã.",\n  "chatLieuVaMauSac": "Nền vàng nhạt phối xanh lam, hoa văn có sắc độ nhẹ nhàng.",\n  "hoaTietVaKieuDang": "Hoa văn lấy cảm hứng từ sen và hồ điệp, thể hiện bằng những đường nét cách điệu trên nền vải sáng màu.",\n  "isFeatured": null,\n  "images": []\n}
P2278: {\n  "id": "SP_SHV_04",\n  "coSoSanXuatId": "LNX_SHV",\n  "name": "Lụa Hoa Văn Bồ Công Anh",\n  "itemDescription": "Sắc hồng đào nhẹ nhàng và những họa tiết nhỏ được phân bố đều trên bề mặt. Gam màu ngọt ngào kết hợp cùng hoa văn tinh giản tạo nên vẻ đẹp nữ tính, phù hợp với áo dài, trang phục thường ngày mang phong cách thanh lịch và những thiết kế dành cho người yêu thích sự nhẹ nhàng.",\n  "chatLieu": "Lụa hoa văn, 70% tơ tằm, 30% polyester.",\n  "kyThuat": "Dệt Jacquard tạo hoa văn nhỏ trên nền vải, kết hợp xử lý hoàn tất để tạo bề mặt mềm mại và ánh nhẹ.",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "Chạm nét mong manh, lưu giữ vẻ đẹp dịu dàng.",\n  "dacDiemDescription": "Bề mặt vải được điểm xuyết bằng các họa tiết nhỏ có sắc độ gần với màu nền, tạo hiệu ứng trang trí kín đáo. Tông hồng đào giúp tổng thể thêm dịu dàng, dễ kết hợp với nhiều kiểu dáng trang phục.",\n  "chatLieuVaMauSac": "Nền hồng đào pha hồng phấn, hoa văn hồng nhạt tạo hiệu ứng chìm nổi nhẹ.",\n  "hoaTietVaKieuDang": "Họa tiết nhỏ dạng chấm và mô-típ trang trí cách điệu, được sắp xếp đều đặn trên nền vải.",\n  "isFeatured": null,\n  "images": []\n}
P2279: {\n  "id": "SP_SHV_05",\n  "coSoSanXuatId": "LNX_SHV",\n  "name": "Lụa Hoa Văn Chấm Trắng",\n  "itemDescription": "Phối hai gam màu be sáng và cam đào, kết hợp cùng họa tiết chấm tròn tạo điểm nhấn trẻ trung. Bề mặt vải có hiệu ứng ánh nhẹ, giúp các chấm tròn nổi bật mà vẫn giữ được tổng thể hài hòa. Sản phẩm phù hợp cho áo dài cách tân, trang phục nữ tính và các thiết kế mang phong cách hiện đại.",\n  "chatLieu": "Lụa hoa văn, 70% tơ tằm, 30% polyester.",\n  "kyThuat": "Dệt Jacquard hoặc tạo hoa văn chấm trên nền vải;",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "Những chấm tròn nhỏ tạo nên nét duyên hiện đại.",\n  "dacDiemDescription": "Họa tiết chấm tròn được phân bố đều trên nền vải, tạo cảm giác nhịp nhàng và sinh động. Sự chuyển đổi giữa sắc be và cam đào mang lại nét mới mẻ, phù hợp với những thiết kế đề cao sự trẻ trung nhưng vẫn thanh lịch.",\n  "chatLieuVaMauSac": "Hai gam be sáng và cam đào, kết hợp các chấm tròn màu trắng kem.",\n  "hoaTietVaKieuDang": "Họa tiết chấm tròn kích thước tương đối đồng đều, bố trí theo nhịp lặp lại trên bề mặt vải.",\n  "isFeatured": null,\n  "images": []\n}
P2280: {\n  "id": "SP_SHV_06",\n  "coSoSanXuatId": "LNX_SHV",\n  "name": "Lụa Hoa Văn Thủy Tiên",\n  "itemDescription": "Mang gam trắng ngà pha xanh xám, kết hợp hệ hoa văn hoa lá mềm mại và có chiều sâu. Những đường nét trang trí uốn lượn trên nền sáng tạo cảm giác thanh thoát, gợi vẻ đẹp cổ điển và trang nhã. Sản phẩm phù hợp với áo dài, trang phục dự lễ và các thiết kế hướng đến phong cách tinh tế.",\n  "chatLieu": "Lụa hoa văn, 70% tơ tằm, 30% polyester.",\n  "kyThuat": "Dệt Jacquard tạo hoa văn hoa lá, kết hợp xử lý hoàn tất nhằm làm nổi bật sự tương phản nhẹ giữa nền vải và họa tiết.",\n  "xuatXu": "Làng Lụa Nha Xá, Ninh Bình",\n  "dacDiemTitle": "Thanh tao cánh thủy tiên, tinh tế sắc lụa.",\n  "dacDiemDescription": "Sản phẩm nổi bật với các họa tiết uốn lượn được sắp xếp liên tục trên nền trắng ngà. Sắc xanh xám nhẹ giúp hoa văn hiện lên tinh tế, tạo cảm giác cổ điển mà không nặng nề, phù hợp với những thiết kế cần sự chỉn chu và hài hòa.",\n  "chatLieuVaMauSac": "Nền trắng ngà pha xanh nhạt, hoa văn xanh xám tạo độ tương phản nhẹ.",\n  "hoaTietVaKieuDang": "Hoa văn hoa lá cách điệu, gồm các đường cong mềm mại và mô-típ thực vật nối tiếp nhau trên bề mặt vải.",\n  "isFeatured": null,\n  "images": []\n}
```
