// ─── Trip Overview ────────────────────────────────────────────────────────────

export const tripOverview = {
  title: "Hành Trình Trung Quốc",
  subtitle: "Quảng Châu & Thâm Quyến",
  groupSize: 4,
  totalDays: 6,
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
      food: "Đặc sản tỉnh Quảng Đông mang phong vị thanh nhẹ, giữ nguyên độ tươi ngọt tự nhiên: Dimsum, Vịt quay, Gà hấp.",
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
      food: "Ẩm thực giao thoa mạnh mẽ do lượng lớn dân nhập cư: Lẩu gà nước dừa, Hải sản tươi, Trà sữa thế hệ mới.",
    },
  ],
  transit: {
    from: "Ga Quảng Châu Nam (Guangzhou South)",
    to: "Ga Thâm Quyến Bắc (Shenzhen North) hoặc Ga Phúc Điền (Futian)",
    duration: "30–45 phút",
    type: "Tàu cao tốc",
    tip: "Đặt vé trước qua app Trip.com hoặc railway 12306 trên Alipay.",
    price: "~80 NDT/người",
  },
};

// ─── Day-by-Day Itinerary (with time slots) ────────────────────────────────────

export type SlotType =
  | "flight"
  | "transport"
  | "accommodation"
  | "food"
  | "sightseeing"
  | "shopping"
  | "leisure";

export interface TimeSlot {
  time: string;
  title: string;
  location: string;
  notes: string;
  price?: string;
  type: SlotType;
}

export interface Day {
  date: string;
  dateLabel: string;
  dayLabel: string;
  title: string;
  cityId: string;
  slots: TimeSlot[];
}

export const days: Day[] = [
  {
    date: "2024-08-28",
    dateLabel: "28/8",
    dayLabel: "Ngày 1",
    title: "Bay đến Quảng Châu – Khám phá buổi đầu",
    cityId: "guangzhou",
    slots: [
      {
        time: "08:00 – 12:00",
        title: "Bay HCM → Quảng Châu, di chuyển về khách sạn",
        location: "Sân bay Bạch Vân → Guangqi Homestay",
        notes: "Check-in khách sạn, nghỉ ngơi sau chuyến bay",
        type: "flight",
      },
      {
        time: "12:30 – 13:30",
        title: "Ăn trưa: Quán mì Jianji (坚记面店)",
        location: "Khu vực gần khách sạn",
        notes: "Đặc sản Mì Yifu của Quảng Châu",
        price: "20–40 NDT/tô",
        type: "food",
      },
      {
        time: "14:30 – 17:30",
        title: "Tham quan: Đảo Sa Diện (Shamian Island)",
        location: "Đảo Sa Diện",
        notes: "Đi dạo, chụp ảnh kiến trúc châu Âu thế kỷ 19",
        price: "Miễn phí",
        type: "sightseeing",
      },
      {
        time: "18:30 – 21:00",
        title: "Ăn tối: Tao Tao Ju (Đào Đào Cư) & Dạo Phố Bắc Kinh",
        location: "Phố đi bộ Bắc Kinh",
        notes: "Dimsum truyền thống, mua sắm, dạo phố đêm",
        price: "100–150 NDT/người",
        type: "food",
      },
    ],
  },
  {
    date: "2024-08-29",
    dateLabel: "29/8",
    dayLabel: "Ngày 2",
    title: "Khám phá di sản và biểu tượng Quảng Châu",
    cityId: "guangzhou",
    slots: [
      {
        time: "08:00 – 09:00",
        title: "Ăn sáng: Bánh cuốn Suiyin (穗银肠粉)",
        location: "Quán Suiyin",
        notes: "Ăn sáng kiểu địa phương, bánh cuốn trứ danh",
        price: "15–25 NDT/phần",
        type: "food",
      },
      {
        time: "09:30 – 12:00",
        title: "Tham quan: Công viên Việt Tú (Yuexiu Park)",
        location: "Công viên Việt Tú",
        notes: "Thiên nhiên, lịch sử — tượng dê năm con biểu tượng GZ",
        price: "Miễn phí",
        type: "sightseeing",
      },
      {
        time: "12:30 – 14:00",
        title: "Ăn trưa: Lianxiang Lou (Liên Hương)",
        location: "Khu vực trung tâm",
        notes: "Đặc sản Vịt quay Quảng Đông",
        price: "80–130 NDT/người",
        type: "food",
      },
      {
        time: "15:00 – 18:00",
        title: "Tham quan: Tháp Quảng Châu (Canton Tower)",
        location: "Tháp Quảng Châu",
        notes: "Ngắm toàn cảnh thành phố từ tầng cao",
        price: "150–398 NDT (tùy tầng)",
        type: "sightseeing",
      },
      {
        time: "19:00 – 21:00",
        title: "Du thuyền Đêm Sông Châu Giang",
        location: "Sông Châu Giang",
        notes: "Ngắm cảnh đêm lung linh, skyline rực rỡ",
        price: "80–160 NDT/người",
        type: "leisure",
      },
    ],
  },
  {
    date: "2024-08-30",
    dateLabel: "30/8",
    dayLabel: "Ngày 3",
    title: "Bản sắc văn hóa và thiên đường mua sắm",
    cityId: "guangzhou",
    slots: [
      {
        time: "09:00 – 11:30",
        title: "Tham quan: Nhà tưởng niệm Tôn Trung Sơn",
        location: "Nhà tưởng niệm Tôn Trung Sơn",
        notes: "Di tích lịch sử quan trọng, kiến trúc ấn tượng",
        price: "~10 NDT vào sảnh chính",
        type: "sightseeing",
      },
      {
        time: "12:00 – 13:30",
        title: "Ăn trưa & nghỉ ngơi",
        location: "Khu vực gần chợ Bạch Mã",
        notes: "Ăn trưa tự túc, nạp năng lượng cho buổi mua sắm",
        type: "food",
      },
      {
        time: "14:00 – 18:00",
        title: "Mua sắm: Chợ Quần áo Bạch Mã (Baima)",
        location: "Chợ Bạch Mã",
        notes: "Khu chợ đầu mối quần áo lớn nhất Quảng Châu",
        price: "Vào cửa tự do",
        type: "shopping",
      },
      {
        time: "19:00 – 21:00",
        title: "Ăn tối tự do & chuẩn bị hành lý đi Thâm Quyến",
        location: "Quanh khu vực khách sạn",
        notes: "Thưởng thức ẩm thực đường phố, thu dọn đồ đạc",
        type: "food",
      },
    ],
  },
  {
    date: "2024-08-31",
    dateLabel: "31/8",
    dayLabel: "Ngày 4",
    title: "Tàu cao tốc sang Thâm Quyến – Khám phá kỳ quan thế giới",
    cityId: "shenzhen",
    slots: [
      {
        time: "08:00 – 11:00",
        title: "Di chuyển: Tàu cao tốc Quảng Châu → Thâm Quyến",
        location: "Ga Quảng Châu Nam → Ga Thâm Quyến",
        notes: "Check-out khách sạn, làn riêng cho khách hộ chiếu, check-in trước 15–20 phút",
        price: "~80 NDT/người",
        type: "transport",
      },
      {
        time: "11:30 – 12:30",
        title: "Check-in khách sạn Thâm Quyến",
        location: "Jufuyuan Apartment, Thâm Quyến",
        notes: "Gửi hành lý hoặc nhận phòng nếu sớm",
        type: "accommodation",
      },
      {
        time: "13:00 – 14:30",
        title: "Ăn trưa & thưởng thức Trà sữa Heytea (Hỷ Trà)",
        location: "Khu vực trung tâm Thâm Quyến",
        notes: "Thương hiệu trà sữa xu hướng nổi tiếng nhất Trung Quốc",
        price: "15–30 NDT/ly",
        type: "food",
      },
      {
        time: "15:00 – 18:30",
        title: "Tham quan: Cửa sổ Thế giới (Window of the World)",
        location: "Cửa sổ Thế giới",
        notes: "Công viên chủ đề thu nhỏ các kỳ quan thế giới",
        price: "220 NDT (vé ngày)",
        type: "sightseeing",
      },
      {
        time: "19:30 – 21:30",
        title: "Ăn tối: Lẩu Gà Nước Dừa Runyuan",
        location: "Nhà hàng Runyuan",
        notes: "Đặc sản lẩu gà nước dừa Thâm Quyến, bắt buộc phải thử",
        price: "120–160 NDT/người",
        type: "food",
      },
    ],
  },
  {
    date: "2024-09-01",
    dateLabel: "1/9",
    dayLabel: "Ngày 5",
    title: "Thung lũng công nghệ và làng nghệ thuật",
    cityId: "shenzhen",
    slots: [
      {
        time: "09:00 – 12:00",
        title: "Nghệ thuật: Làng tranh sơn dầu Đại Phân (Dafen Village)",
        location: "Làng Đại Phân",
        notes: "Làng nghề hội họa nổi tiếng thế giới, chụp ảnh check-in",
        price: "Miễn phí",
        type: "sightseeing",
      },
      {
        time: "12:30 – 14:30",
        title: "Ăn trưa: Nhà hàng hải sản Leyuan Road",
        location: "Đường Leyuan",
        notes: "Hải sản tươi sống chất lượng cao",
        price: "150–250 NDT/người",
        type: "food",
      },
      {
        time: "15:00 – 18:00",
        title: "Công nghệ: Chợ điện tử Hoa Cường Bắc (Huaqiangbei)",
        location: "Chợ Hoa Cường Bắc",
        notes: "Thiên đường điện tử lớn nhất thế giới, giá rất tốt",
        price: "Miễn phí vào cửa",
        type: "shopping",
      },
      {
        time: "18:30 – 20:00",
        title: "Ăn tối: Đồ nướng Shaokao Đông Môn",
        location: "Phố đi bộ Đông Môn",
        notes: "Ẩm thực đường phố vỉa hè đặc trưng",
        price: "2–10 NDT/xiên",
        type: "food",
      },
      {
        time: "20:00 – 22:00",
        title: "Dạo chợ đêm Đông Môn (Dongmen)",
        location: "Phố đi bộ Đông Môn",
        notes: "Chợ đêm sầm uất, mua sắm quần áo, phụ kiện",
        price: "Miễn phí",
        type: "leisure",
      },
    ],
  },
  {
    date: "2024-09-02",
    dateLabel: "2/9",
    dayLabel: "Ngày 6",
    title: "Đỉnh Ping An IFC & Bay về HCM",
    cityId: "shenzhen",
    slots: [
      {
        time: "09:00 – 11:30",
        title: "Tham quan: Đài quan sát Ping An IFC (599m)",
        location: "Ping An Financial Center",
        notes: "Tòa nhà cao nhất Thâm Quyến, view toàn thành phố",
        price: "~200 NDT",
        type: "sightseeing",
      },
      {
        time: "12:00 – 13:30",
        title: "Ăn trưa tự do & mua quà lưu niệm",
        location: "Khu vực trung tâm",
        notes: "Bữa trưa cuối cùng tại Trung Quốc",
        type: "food",
      },
      {
        time: "14:00 – 15:30",
        title: "Di chuyển ra sân bay Thâm Quyến",
        location: "Sân bay Bảo An Thâm Quyến",
        notes: "Check-out khách sạn, bắt taxi hoặc tàu điện ra sân bay",
        type: "transport",
      },
      {
        time: "16:00 – 19:00",
        title: "Bay Thâm Quyến → HCM",
        location: "Sân bay Bảo An Thâm Quyến",
        notes: "Kết thúc chuyến đi tốt đẹp 🎉",
        type: "flight",
      },
    ],
  },
];

// ─── Places ────────────────────────────────────────────────────────────────────

export interface Place {
  id: number;
  cityId: string;
  name: string;
  type: string;
  price: string;
  free: boolean;
  emoji: string;
  note?: string;
}

export const places: Place[] = [
  // Guangzhou
  {
    id: 1,
    cityId: "guangzhou",
    name: "Tháp Quảng Châu (Canton Tower)",
    type: "Tham quan",
    price: "150–398 NDT (tùy tầng)",
    free: false,
    emoji: "🗼",
    note: "Icon của Quảng Châu, ngắm thành phố tuyệt đẹp ban đêm",
  },
  {
    id: 2,
    cityId: "guangzhou",
    name: "Đảo Sa Diện (Shamian Island)",
    type: "Đi dạo, chụp ảnh",
    price: "Miễn phí",
    free: true,
    emoji: "🌿",
    note: "Kiến trúc thực dân Pháp và Anh thế kỷ 19, rất đẹp để chụp ảnh",
  },
  {
    id: 3,
    cityId: "guangzhou",
    name: "Phố đi bộ Bắc Kinh (Beijing Road)",
    type: "Mua sắm, lịch sử",
    price: "Miễn phí",
    free: true,
    emoji: "🛍️",
    note: "Khu Shangxiajiu toàn đồ ăn ngon, đi tối siêu vui",
  },
  {
    id: 4,
    cityId: "guangzhou",
    name: "Du thuyền Đêm Sông Châu Giang",
    type: "Trải nghiệm đêm",
    price: "80–160 NDT/người",
    free: false,
    emoji: "🚢",
    note: "Ngắm skyline rực rỡ ban đêm từ sông Châu Giang",
  },
  {
    id: 5,
    cityId: "guangzhou",
    name: "Công viên Việt Tú (Yuexiu Park)",
    type: "Thiên nhiên, lịch sử",
    price: "Miễn phí",
    free: true,
    emoji: "🌳",
    note: "Công viên lớn nhất trung tâm GZ, có tượng dê năm con",
  },
  {
    id: 6,
    cityId: "guangzhou",
    name: "Nhà tưởng niệm Tôn Trung Sơn",
    type: "Di tích lịch sử",
    price: "~10 NDT vào sảnh chính",
    free: false,
    emoji: "🏛️",
  },
  {
    id: 7,
    cityId: "guangzhou",
    name: "Nhà hàng Tao Tao Ju (Đào Đào Cư)",
    type: "Ẩm thực — Dimsum",
    price: "100–150 NDT/người",
    free: false,
    emoji: "🥟",
    note: "Nhà hàng Dimsum lâu đời nổi tiếng nhất Quảng Châu",
  },
  {
    id: 8,
    cityId: "guangzhou",
    name: "Nhà hàng Lianxiang Lou (Liên Hương)",
    type: "Ẩm thực — Vịt quay",
    price: "80–130 NDT/người",
    free: false,
    emoji: "🦆",
  },
  {
    id: 9,
    cityId: "guangzhou",
    name: "Quán mì Jianji (坚记面店)",
    type: "Ẩm thực — Mì Yifu",
    price: "20–40 NDT/tô",
    free: false,
    emoji: "🍜",
  },
  {
    id: 10,
    cityId: "guangzhou",
    name: "Bánh cuốn Suiyin (穗银肠粉)",
    type: "Ăn sáng — Bánh cuốn",
    price: "15–25 NDT/phần",
    free: false,
    emoji: "🫔",
  },
  {
    id: 11,
    cityId: "guangzhou",
    name: "Chợ Quần áo Bạch Mã (Baima Market)",
    type: "Khu chợ đầu mối",
    price: "Vào cửa tự do",
    free: true,
    emoji: "👗",
    note: "Chợ đầu mối quần áo lớn nhất Quảng Châu",
  },
  // Shenzhen
  {
    id: 12,
    cityId: "shenzhen",
    name: "Cửa sổ Thế giới (Window of the World)",
    type: "Công viên chủ đề",
    price: "220 NDT (vé ngày)",
    free: false,
    emoji: "🌏",
    note: "Thu nhỏ 130 kỳ quan thế giới trong một công viên",
  },
  {
    id: 13,
    cityId: "shenzhen",
    name: "Chợ điện tử Hoa Cường Bắc (Huaqiangbei)",
    type: "Công nghệ, mua sắm",
    price: "Miễn phí vào cửa",
    free: true,
    emoji: "💻",
    note: "Thiên đường điện tử lớn nhất thế giới — mua đồ tech giá cực rẻ",
  },
  {
    id: 14,
    cityId: "shenzhen",
    name: "Làng tranh sơn dầu Đại Phân (Dafen Village)",
    type: "Nghệ thuật, check-in",
    price: "Miễn phí",
    free: true,
    emoji: "🎨",
    note: "Làng nghề hội họa nổi tiếng thế giới, sản xuất hàng triệu bức tranh/năm",
  },
  {
    id: 15,
    cityId: "shenzhen",
    name: "Phố đi bộ Đông Môn (Dongmen)",
    type: "Chợ đêm, ăn vặt",
    price: "Miễn phí",
    free: true,
    emoji: "🌃",
    note: "Khu chợ đêm sầm uất nhất SZ, ăn vặt và mua sắm",
  },
  {
    id: 16,
    cityId: "shenzhen",
    name: "Khu OCT Harbour",
    type: "Giải trí, nhạc nước",
    price: "Miễn phí (show diễn tính vé)",
    free: true,
    emoji: "🎪",
  },
  {
    id: 17,
    cityId: "shenzhen",
    name: "Lẩu Gà Nước Dừa Runyuan",
    type: "Ẩm thực — Lẩu gà",
    price: "120–160 NDT/người",
    free: false,
    emoji: "🍲",
    note: "Đặc sản lẩu gà nước dừa, bắt buộc phải thử khi đến SZ",
  },
  {
    id: 18,
    cityId: "shenzhen",
    name: "Trà sữa Heytea (Hỷ Trà)",
    type: "Thức uống xu hướng",
    price: "15–30 NDT/ly",
    free: false,
    emoji: "🧋",
    note: "Thương hiệu trà sữa đỉnh nhất Trung Quốc, xếp hàng cũng đáng",
  },
  {
    id: 19,
    cityId: "shenzhen",
    name: "Đài quan sát Ping An IFC (599m)",
    type: "Tham quan",
    price: "~200 NDT",
    free: false,
    emoji: "🏢",
    note: "Tòa nhà cao nhất SZ, view toàn thành phố 360°",
  },
  {
    id: 20,
    cityId: "shenzhen",
    name: "Công viên Liên Hoa Sơn",
    type: "Thiên nhiên, ngắm cảnh",
    price: "Miễn phí",
    free: true,
    emoji: "⛰️",
    note: "View ngắm toàn thành phố Thâm Quyến đẹp nhất",
  },
  {
    id: 21,
    cityId: "shenzhen",
    name: "Nhà hàng hải sản Leyuan Road",
    type: "Ẩm thực — Hải sản",
    price: "150–250 NDT/người",
    free: false,
    emoji: "🦞",
  },
  {
    id: 22,
    cityId: "shenzhen",
    name: "Đồ nướng Shaokao Đông Môn",
    type: "Ẩm thực đường phố",
    price: "2–10 NDT/xiên",
    free: false,
    emoji: "🍢",
    note: "Ăn vặt đường phố cực rẻ, ăn đến no mà không tốn nhiều tiền",
  },
];

// ─── Hotels ────────────────────────────────────────────────────────────────────

export interface Hotel {
  selected: boolean;
  cityId: string;
  name: string;
  priceVnd: number;
  rooms: number;
  perPersonVnd: number;
  totalVnd: number;
  address: string;
  roomType: string;
  nearbyMetro: string[];
  nearbyAttractions: string[];
  distanceToStation?: string;
}

export const hotels: Hotel[] = [
  {
    selected: true,
    cityId: "guangzhou",
    name: "Guangqi Homestay",
    priceVnd: 2594013,
    rooms: 1,
    perPersonVnd: 1945509,
    totalVnd: 7782039,
    address: "Room 812, Building A, Yujiang Garden, No. 38 Nanti 2nd Road, Yuexiu District",
    roomType: "2 giường king + 1 giường queen",
    nearbyMetro: ["Haizhu Square (520m)", "Beijing Lu (550m)"],
    nearbyAttractions: [
      "Bến tàu Tianzi Wharf (150m)",
      "Phố Bắc Kinh (400m)",
      "Chùa Đại Phật (650m)",
    ],
  },
  {
    selected: false,
    cityId: "guangzhou",
    name: "Guangzhou Xiyu Apartment",
    priceVnd: 1969823,
    rooms: 1,
    perPersonVnd: 492456,
    totalVnd: 5909469,
    address: "1st Floor, Tower C, Bolin International Apartment, No. 16 Huacheng Avenue, Tianhe",
    roomType: "Duplex 3 phòng ngủ",
    nearbyMetro: ["Wuyangcun (310m)", "Zhujiang New Town (430m)"],
    nearbyAttractions: [
      "Huacheng Square (0.5km)",
      "Nhà hát Opera Quảng Châu (0.8km)",
      "Canton Tower (2.5km)",
    ],
  },
  {
    selected: false,
    cityId: "guangzhou",
    name: "7 Days Inn Guangzhou Shangxiajiu",
    priceVnd: 510659,
    rooms: 3,
    perPersonVnd: 382994,
    totalVnd: 4595931,
    address: "No. 88 Wenchang South Road, Liwan District",
    roomType: "3 phòng × 1 giường queen",
    nearbyMetro: ["Changshou Lu (470m)", "Hualinsi (490m)"],
    nearbyAttractions: [
      "Phố Thượng Hạ Cửu (370m)",
      "Đảo Sa Diện (900m)",
      "Trần Gia Từ (1.2km)",
    ],
  },
  {
    selected: false,
    cityId: "guangzhou",
    name: "WF Apartment",
    priceVnd: 1976439,
    rooms: 1,
    perPersonVnd: 494110,
    totalVnd: 5929317,
    address: "No. 1 Residence, No. 16 Yujiang Road, Liwan District",
    roomType: "2 phòng ngủ",
    nearbyMetro: ["Ruyifang (360m)", "Huangsha (1km)"],
    nearbyAttractions: [
      "Bảo tàng Đường sắt GZ (160m)",
      "Dinh thự Lý Tiểu Long (550m)",
      "Shangxiajiu (1.2km)",
    ],
  },
  // Shenzhen
  {
    selected: true,
    cityId: "shenzhen",
    name: "Jufuyuan Apartment",
    priceVnd: 1287858,
    rooms: 1,
    perPersonVnd: 643929,
    totalVnd: 2575716,
    address: "23rd Floor, Gang'ao No. 8, No. 2118 Shennan East Road, Luohu District",
    roomType: "Phòng ngủ 1: 1 queen | Phòng ngủ 2: 2 giường đôi",
    nearbyMetro: ["Hubei (280m)", "Dongmen (480m)"],
    nearbyAttractions: [
      "Phố Đông Môn (400m)",
      "Kingkey 100 (1.5km)",
      "Ga Thâm Quyến (2.1km)",
    ],
  },
  {
    selected: false,
    cityId: "shenzhen",
    name: "Kary Apartment",
    priceVnd: 2119947,
    rooms: 1,
    perPersonVnd: 529987,
    totalVnd: 4239894,
    address: "No. 88-8 Bagua 3rd Road, Futian District",
    roomType: "3 phòng ngủ (2 queen + 1 đôi)",
    nearbyMetro: ["Hongling North (300m)", "Yuanling (400m)"],
    nearbyAttractions: [
      "Phố Đông Môn (3.5km)",
      "Công viên Lệ Chi (1.4km)",
    ],
  },
  {
    selected: false,
    cityId: "shenzhen",
    name: "Senmei International Apartment",
    priceVnd: 1976867,
    rooms: 1,
    perPersonVnd: 494217,
    totalVnd: 3953734,
    address: "Room 8D, Building C1, Jingji Binhe Times Plaza, Futian District",
    roomType: "2 phòng ngủ queen + 1 đôi phòng khách",
    nearbyMetro: ["Xiasha (260m)", "Chegongmiao (900m)"],
    nearbyAttractions: [
      "Ga Phúc Điền HSR (3.5km)",
      "Công viên đầm ngập mặn (1.2km)",
    ],
  },
  {
    selected: false,
    cityId: "shenzhen",
    name: "Aney Homestay",
    priceVnd: 1923833,
    rooms: 1,
    perPersonVnd: 480958,
    totalVnd: 3847666,
    address: "Nanshan District",
    roomType: "3 phòng ngủ đôi",
    nearbyMetro: ["Nanshan (350m, line 11 & 12)"],
    nearbyAttractions: [
      "Khu phố cổ Nam Đầu (2km)",
      "Sea World (6.5km)",
      "Cửa sổ Thế giới (5.5km)",
    ],
  },
];

// ─── Budget ────────────────────────────────────────────────────────────────────

export interface BudgetItem {
  id: string;
  category: string;
  description: string;
  detail: string;
  totalVnd: number;
  perPersonVnd: number;
  isEstimate: boolean;
}

export const budget: BudgetItem[] = [
  {
    id: "hotel-gz",
    category: "Khách sạn",
    description: "Guangqi Homestay — Quảng Châu",
    detail: "3 đêm",
    totalVnd: 7782039,
    perPersonVnd: 1945510,
    isEstimate: false,
  },
  {
    id: "flight-in",
    category: "Máy bay",
    description: "HCM → Quảng Châu",
    detail: "4 người",
    totalVnd: 11600000,
    perPersonVnd: 2900000,
    isEstimate: false,
  },
  {
    id: "hotel-sz",
    category: "Khách sạn",
    description: "Jufuyuan Apartment — Thâm Quyến",
    detail: "2 đêm",
    totalVnd: 2575716,
    perPersonVnd: 643929,
    isEstimate: false,
  },
  {
    id: "flight-out",
    category: "Máy bay",
    description: "Thâm Quyến → HCM (qua Quảng Châu)",
    detail: "4 người",
    totalVnd: 16400000,
    perPersonVnd: 4100000,
    isEstimate: false,
  },
  {
    id: "visa",
    category: "Visa",
    description: "Visa du lịch Trung Quốc (loại L)",
    detail: "75 USD/người",
    totalVnd: 8000000,
    perPersonVnd: 2000000,
    isEstimate: false,
  },
  {
    id: "transport",
    category: "Đi lại trong TP",
    description: "Subway, xe đạp, Didi",
    detail: "Ước tính",
    totalVnd: 4000000,
    perPersonVnd: 1000000,
    isEstimate: true,
  },
  {
    id: "food",
    category: "Ăn uống",
    description: "Toàn bộ 6 ngày",
    detail: "Ước tính",
    totalVnd: 8000000,
    perPersonVnd: 2000000,
    isEstimate: true,
  },
  {
    id: "sim",
    category: "SIM/eSIM",
    description: "5 ngày — 2GB/ngày, có VPN",
    detail: "4 người",
    totalVnd: 700000,
    perPersonVnd: 175000,
    isEstimate: false,
  },
  {
    id: "train-gz-sz",
    category: "Tàu cao tốc",
    description: "Quảng Châu → Thâm Quyến",
    detail: "80 NDT/người",
    totalVnd: 1120000,
    perPersonVnd: 280000,
    isEstimate: false,
  },
  {
    id: "train-sz-gz",
    category: "Tàu cao tốc",
    description: "Thâm Quyến → Quảng Châu (về)",
    detail: "80 NDT/người",
    totalVnd: 1120000,
    perPersonVnd: 280000,
    isEstimate: false,
  },
];

export const budgetTotal = {
  totalVnd: 61297755,
  perPersonVnd: 15324439,
};

// ─── Tips ────────────────────────────────────────────────────────────────────

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
        notes: "Giao dịch dưới 200 tệ (~700.000 VNĐ): miễn phí. Trên 200 tệ: phí ~3%.",
        recommended: true,
      },
      {
        id: "tour-card",
        name: "Tour Card trên Alipay",
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
        notes: "Các ga tàu cao tốc và tàu liên vận Gia Lâm–Nam Ninh chỉ nhận tiền mặt.",
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

// ─── References ────────────────────────────────────────────────────────────────

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
