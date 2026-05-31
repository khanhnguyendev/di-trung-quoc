export const tripOverview = {
  title: "Hành Trình Trung Quốc",
  subtitle: "Quảng Châu & Thâm Quyến",
  groupSize: 4,
  totalDays: 5,
  cities: [
    {
      id: "guangzhou",
      name: "Quảng Châu",
      nameEn: "Guangzhou",
      startDate: "2024-08-28",
      endDate: "2024-08-31",
      days: 3,
      description:
        "Khám phá văn hóa, mua sắm và ẩm thực tại thành phố lớn nhất miền Nam Trung Quốc.",
      highlights: ["Văn hóa", "Mua sắm", "Ẩm thực"],
      emoji: "🏙️",
    },
    {
      id: "shenzhen",
      name: "Thâm Quyến",
      nameEn: "Shenzhen",
      startDate: "2024-08-31",
      endDate: "2024-09-02",
      days: 2,
      description:
        "Trải nghiệm thành phố công nghệ, check-in các công viên giải trí và đô thị hiện đại.",
      highlights: ["Công nghệ", "Công viên giải trí", "Đô thị hiện đại"],
      emoji: "🚀",
    },
  ],
  transit: {
    from: "Ga Quảng Châu Nam (Guangzhou South)",
    to: "Ga Thâm Quyến Bắc (Shenzhen North) hoặc Ga Phúc Điền (Futian)",
    duration: "30–45 phút",
    type: "Tàu cao tốc",
    tip: "Đặt vé trước qua app Trip.com hoặc railway 12306 trên Alipay.",
  },
};

export const itinerary = [
  {
    cityId: "guangzhou",
    cityName: "Quảng Châu",
    days: [
      {
        dayNumber: 1,
        date: "28/08/2024",
        label: "Ngày 1",
        title: "Đến Quảng Châu & Khám phá trung tâm",
        activities: [
          "Nhận phòng khách sạn, nghỉ ngơi",
          "Khám phá khu phố cổ Thượng Hạ Cửu (Shangxiajiu)",
          "Ăn dim sum truyền thống tại nhà hàng địa phương",
          "Dạo bộ dọc bờ sông Châu Giang buổi tối",
        ],
        transport: "Subway từ sân bay/ga tàu đến trung tâm",
        notes: "Cài đặt Alipay và Guangzhou Metro app trước khi đi.",
      },
      {
        dayNumber: 2,
        date: "29/08/2024",
        label: "Ngày 2",
        title: "Văn hóa & Mua sắm",
        activities: [
          "Thăm Đền Trần Gia Từ (Chen Clan Ancestral Hall)",
          "Tham quan Bảo tàng Quảng Đông",
          "Mua sắm tại Phố Bắc Kinh (Beijing Road)",
          "Khám phá khu Thiên Hà (Tianhe) — trung tâm thương mại hiện đại",
        ],
        transport: "Subway line 1, 3 — tiện lợi và rẻ (1–7 tệ/lần)",
        notes: "Dùng Alipay quét mã QR để thanh toán mọi nơi.",
      },
      {
        dayNumber: 3,
        date: "30/08/2024",
        label: "Ngày 3 (sáng)",
        title: "Buổi sáng cuối tại Quảng Châu",
        activities: [
          "Ăn sáng phong cách Quảng Đông (bánh cuốn, dimsum)",
          "Đạp xe dọc đường ven sông (thuê Hello Bike qua Alipay — 3,5 tệ/30 phút)",
          "Check out khách sạn",
          "Di chuyển đến Ga Quảng Châu Nam để lên tàu",
        ],
        transport: "Subway đến Guangzhou South station",
        notes: "Check in trước 15–20 phút. Có làn riêng cho khách dùng hộ chiếu.",
      },
    ],
  },
  {
    cityId: "shenzhen",
    cityName: "Thâm Quyến",
    days: [
      {
        dayNumber: 4,
        date: "31/08/2024",
        label: "Ngày 3 (chiều) & Ngày 4",
        title: "Đến Thâm Quyến & Khám phá",
        activities: [
          "Đến Ga Thâm Quyến Bắc / Phúc Điền bằng tàu cao tốc",
          "Nhận phòng và nghỉ ngơi",
          "Tham quan OCT-LOFT (khu sáng tạo nghệ thuật)",
          "Khám phá Dongmen Walking Street — mua sắm và ăn vặt",
          "Trải nghiệm công viên giải trí (Splendid China Folk Village hoặc Happy Valley)",
        ],
        transport: "Tàu cao tốc từ Quảng Châu Nam (30–45 phút) + Subway nội thành",
        notes: "Vé tàu tích hợp hộ chiếu, không cần in. Dùng Alipay subway.",
      },
      {
        dayNumber: 5,
        date: "01/09/2024",
        label: "Ngày 5",
        title: "Thành phố công nghệ & Ra về",
        activities: [
          "Thăm khu Huaqiangbei — thiên đường điện tử lớn nhất thế giới",
          "Check-in tại tòa nhà Ping An Finance Centre (tòa nhà cao nhất SZ)",
          "Mua sắm đồ điện tử, phụ kiện với giá tốt",
          "Chuẩn bị về nước hoặc di chuyển tiếp",
        ],
        transport: "Subway line 1, 7 — phủ sóng khắp thành phố",
        notes: "Huaqiangbei là điểm mua sắm đồ công nghệ nổi tiếng toàn cầu.",
      },
    ],
  },
];

export const tips = {
  important: [
    {
      id: "alipay",
      title: "Phải cài Alipay",
      icon: "📱",
      priority: "critical",
      description:
        "Điều quan trọng nói 3 lần! Trung Quốc gần như không dùng tiền mặt. Alipay dùng được: đặt Didi, đi subway, đi bus, railway 12306, thuê xe đạp.",
      details: [
        "Tải Alipay và đăng ký bằng số điện thoại Việt Nam",
        "Liên kết thẻ tín dụng/ghi nợ quốc tế (Visa, Mastercard, JCB)",
        "Tỉ giá VCB: 3.950 VNĐ/tệ — tốt hơn đổi tay (3.970)",
      ],
    },
    {
      id: "internet",
      title: "Internet & VPN",
      icon: "🌐",
      priority: "high",
      description:
        "Mua eSIM hoặc SIM du lịch Trung Quốc có tính năng vượt tường lửa (VPN) để truy cập Facebook, Google, Zalo bình thường.",
    },
    {
      id: "visa",
      title: "Visa",
      icon: "🛂",
      priority: "high",
      description:
        "Đảm bảo có Visa du lịch Trung Quốc (loại L) hoặc visa đoàn phù hợp với lịch trình.",
    },
    {
      id: "maps",
      title: "Bản đồ",
      icon: "🗺️",
      priority: "medium",
      description:
        "Tải Gaode Maps (Amap) để tìm đường. Apple Maps cũng dùng tốt tại Trung Quốc. Google Maps không hoạt động.",
    },
  ],

  payment: {
    title: "Thanh Toán",
    methods: [
      {
        id: "alipay-card",
        name: "Alipay liên kết thẻ quốc tế (Khuyên dùng)",
        icon: "💳",
        steps: [
          "Tải ứng dụng Alipay",
          "Đăng ký bằng số điện thoại Việt Nam",
          "Liên kết thẻ Visa, Mastercard hoặc JCB",
          "Quét mã QR cửa hàng hoặc đưa mã QR của mình cho thu ngân",
        ],
        notes:
          "Giao dịch dưới 200 tệ (~700.000 VNĐ): miễn phí. Trên 200 tệ: phí ~3%.",
        recommended: true,
      },
      {
        id: "tour-card",
        name: 'Tour Card trên Alipay',
        icon: "🏦",
        steps: [
          'Tìm kiếm "Tour Card" trên thanh tìm kiếm Alipay',
          "Do ngân hàng Bank of Shanghai cung cấp",
          "Nạp tiền từ thẻ quốc tế vào thẻ ngân hàng ảo Trung Quốc",
          "Có thể chi tiêu trong vòng 90 ngày",
        ],
        notes: "Dùng khi thẻ quốc tế bị từ chối khi liên kết trực tiếp.",
        recommended: false,
      },
      {
        id: "cash",
        name: "Tiền mặt dự phòng",
        icon: "💵",
        steps: [
          "Đổi sẵn 500–1.000 tệ trước khi đi",
          "Dùng khi ứng dụng gặp sự cố mạng hoặc lỗi thẻ",
        ],
        notes:
          "Các ga tàu cao tốc và tàu liên vận Gia Lâm–Nam Ninh chỉ nhận tiền mặt.",
        recommended: false,
      },
    ],
  },

  transport: {
    title: "Phương Tiện Di Chuyển",
    options: [
      {
        id: "subway",
        name: "Tàu điện ngầm (Subway)",
        icon: "🚇",
        cost: "1–7 tệ/lần",
        apps: ["Guangzhou Metro", "Alipay"],
        description:
          "Phương tiện chính. Rẻ, tiện lợi, phủ khắp thành phố. App Guangzhou Metro hướng dẫn cụ thể đi line nào, xuống điểm nào.",
        tips: ["Dùng Alipay quét mã QR tại cổng soát vé", "Subway SZ dùng Alipay tương tự"],
      },
      {
        id: "bus",
        name: "Xe buýt",
        icon: "🚌",
        cost: "1–3 tệ/lần",
        apps: ["Alipay"],
        description: "Rẻ nhất, phủ sóng rộng nhưng chậm hơn subway.",
        tips: ["Thanh toán qua Alipay"],
      },
      {
        id: "bike",
        name: "Xe đạp thuê (Hello Bike)",
        icon: "🚲",
        cost: "3,5 tệ/30 phút",
        apps: ["Alipay (Hello Bike)"],
        description:
          "Rất chill — dân địa phương đạp xe nhiều, kể cả 1 giờ sáng. Thuê qua Alipay, hãng Hello Bike.",
        tips: ["Tìm Hello Bike ngay trên Alipay", "Trả xe tại bất kỳ điểm đỗ nào"],
      },
      {
        id: "didi",
        name: "Didi (Taxi)",
        icon: "🚕",
        cost: "Tùy quãng đường",
        apps: ["Didi", "Alipay"],
        description:
          "Giống Grab/Uber. Nhóm chỉ đặt đúng 2 chuyến trong cả hành trình — subway và xe đạp đủ xài.",
        tips: ["Đặt qua Alipay hoặc app Didi", "Thanh toán không dùng tiền mặt"],
      },
      {
        id: "hsr",
        name: "Tàu cao tốc liên thành phố",
        icon: "🚄",
        cost: "~70–120 tệ/người",
        apps: ["Alipay (railway 12306)", "Trip.com"],
        description:
          "Quảng Châu Nam → Thâm Quyến Bắc/Phúc Điền: 30–45 phút. Vé tích hợp hộ chiếu.",
        tips: [
          "Mua vé qua railway 12306 trên Alipay",
          "Có làn riêng cho khách dùng hộ chiếu",
          "Check in trước 15–20 phút",
          "Tàu liên vận Gia Lâm–Nam Ninh chỉ nhận tiền mặt",
        ],
      },
    ],
  },

  apps: {
    title: "Ứng Dụng Cần Cài",
    list: [
      {
        id: "alipay",
        name: "Alipay",
        icon: "💙",
        priority: "critical",
        use: "Thanh toán, subway, taxi, xe đạp, tàu hỏa — tất cả trong một",
        available: ["iOS", "Android"],
      },
      {
        id: "wechat",
        name: "WeChat",
        icon: "💚",
        priority: "high",
        use: "Nhắn tin, thanh toán (WeChat Pay) — nhiều cửa hàng nhỏ dùng WeChat QR",
        available: ["iOS", "Android"],
      },
      {
        id: "gaode",
        name: "Gaode Maps (Amap / 高德地图)",
        icon: "🗺️",
        priority: "high",
        use: "Bản đồ chỉ đường — Google Maps không hoạt động tại TQ",
        available: ["iOS", "Android"],
      },
      {
        id: "guangzhou-metro",
        name: "Guangzhou Metro",
        icon: "🚇",
        priority: "medium",
        use: "Bản đồ subway Quảng Châu, chỉ đường từng tuyến",
        available: ["iOS", "Android"],
      },
      {
        id: "trip",
        name: "Trip.com",
        icon: "✈️",
        priority: "medium",
        use: "Đặt vé tàu cao tốc, khách sạn",
        available: ["iOS", "Android"],
      },
      {
        id: "12306",
        name: "Railway 12306 (trên Alipay)",
        icon: "🚄",
        priority: "medium",
        use: "Đặt vé tàu hỏa chính thức — tích hợp ngay trong Alipay",
        available: ["Trong Alipay"],
      },
    ],
  },
};

export const references = [
  {
    title: "Group du lịch nước ngoài — Tìm bạn đồng hành",
    url: "https://www.facebook.com/groups/TimBanDuLichNuocNgoai/posts/3017133788485801/",
    source: "Facebook Group",
  },
  {
    title: "Kinh nghiệm du lịch Quảng Châu từ A đến Z",
    url: "https://www.bestprice.vn/blog/diem-den-8/trung-quoc-57/kinh-nghiem-du-lich-quang-chau-tu-a-den-z-hanh-trinh-4-mua-day-sac-mau_2-14507.html",
    source: "BestPrice.vn",
  },
];
