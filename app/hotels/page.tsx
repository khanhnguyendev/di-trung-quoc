import Link from "next/link";
import { hotels, tripOverview } from "@/data/trip";

export const metadata = {
  title: "Khách sạn — Hành Trình Trung Quốc",
};

function formatVnd(n: number) {
  return new Intl.NumberFormat("vi-VN").format(Math.round(n));
}

export default function HotelsPage() {
  const gzHotels = hotels.filter((h) => h.cityId === "guangzhou");
  const szHotels = hotels.filter((h) => h.cityId === "shenzhen");

  const cities = [
    { id: "guangzhou", label: "🏙️ Quảng Châu", cityHotels: gzHotels },
    { id: "shenzhen", label: "🚀 Thâm Quyến", cityHotels: szHotels },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block">
          ← Trang chủ
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          🏨 Khách sạn
        </h1>
        <p className="text-zinc-500 mt-1">So sánh các lựa chọn — khách sạn đã chọn được đánh dấu</p>
      </div>

      {/* Recommendation notes */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8 text-sm text-amber-800 dark:text-amber-300">
        <p className="font-semibold mb-1">💡 Gợi ý khu vực:</p>
        <ul className="space-y-1 text-sm">
          <li>🏙️ <strong>Quảng Châu:</strong> Khu Beijing Road — gần metro, tối đi bộ ăn uống rất tiện</li>
          <li>🚀 <strong>Thâm Quyến Phúc Điền (福田):</strong> Gần nhiều line metro lớn, đi đâu cũng tiện</li>
          <li>🚀 <strong>Thâm Quyến Nam Sơn (南山):</strong> Vibe trẻ, hiện đại hơn, gần Sea World và Shenzhen Bay</li>
        </ul>
      </div>

      {cities.map(({ id, label, cityHotels }) => {
        const cityInfo = tripOverview.cities.find((c) => c.id === id)!;
        return (
          <section key={id} className="mb-10">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
              {label}
              <span className="text-sm font-normal text-zinc-500 ml-2">
                {cityInfo.startDate.split("-").reverse().join("/")} – {cityInfo.endDate.split("-").reverse().join("/")}
              </span>
            </h2>
            <div className="flex flex-col gap-4">
              {cityHotels.map((hotel) => (
                <div
                  key={hotel.name}
                  className={`rounded-xl border p-5 ${
                    hotel.selected
                      ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
                      : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-zinc-900 dark:text-white">{hotel.name}</h3>
                      {hotel.selected && (
                        <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded font-medium">ĐÃ CHỌN</span>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-zinc-900 dark:text-white">
                        {formatVnd(hotel.perPersonVnd)}₫
                      </div>
                      <div className="text-xs text-zinc-500">/người</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                    <div>
                      <span className="text-zinc-400">Phòng:</span>{" "}
                      <span className="text-zinc-700 dark:text-zinc-300">{hotel.roomType}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400">Tổng:</span>{" "}
                      <span className="text-zinc-700 dark:text-zinc-300">{formatVnd(hotel.totalVnd)}₫</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {hotel.nearbyMetro.map((m) => (
                      <span key={m} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full">
                        🚇 {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {hotel.nearbyAttractions.map((a) => (
                      <span key={a} className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-full">
                        📍 {a}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-zinc-400 mt-3">{hotel.address}</p>
                  <a
                    href={`https://maps.apple.com/?q=${encodeURIComponent(hotel.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2"
                  >
                    🗺️ Mở bản đồ
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
