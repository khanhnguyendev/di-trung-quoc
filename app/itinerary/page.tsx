import Link from "next/link";
import { days, tripOverview, type SlotType } from "@/data/trip";

export const metadata = {
  title: "Lịch trình đầy đủ — Hành Trình Trung Quốc",
};

const slotIcon: Record<SlotType, string> = {
  flight: "✈️",
  transport: "🚄",
  accommodation: "🏨",
  food: "🍽️",
  sightseeing: "🏛️",
  shopping: "🛍️",
  leisure: "🎉",
};

const slotColor: Record<SlotType, string> = {
  flight: "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800",
  transport: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  accommodation: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800",
  food: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
  sightseeing: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
  shopping: "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800",
  leisure: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
};

export default function ItineraryPage() {
  const gzDays = days.filter((d) => d.cityId === "guangzhou");
  const szDays = days.filter((d) => d.cityId === "shenzhen");

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block">
          ← Trang chủ
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          📅 Lịch trình đầy đủ
        </h1>
        <p className="text-zinc-500 mt-1">{tripOverview.totalDays} ngày · {tripOverview.groupSize} người</p>
      </div>

      {/* Transit info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8 flex items-start gap-3">
        <span className="text-xl">🚄</span>
        <div className="text-sm text-blue-800 dark:text-blue-300">
          <strong>Kết nối 2 thành phố:</strong> {tripOverview.transit.from} → {tripOverview.transit.to} — {tripOverview.transit.duration} · {tripOverview.transit.price}
        </div>
      </div>

      {[
        { cityId: "guangzhou", label: "🏙️ Quảng Châu", cityDays: gzDays, href: "/itinerary/guangzhou" },
        { cityId: "shenzhen", label: "🚀 Thâm Quyến", cityDays: szDays, href: "/itinerary/shenzhen" },
      ].map(({ label, cityDays, href }) => (
        <section key={href} className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{label}</h2>
            <Link href={href} className="text-sm text-red-600 dark:text-red-400 hover:underline">
              Xem chi tiết →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {cityDays.map((day) => (
              <div key={day.date} className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">{day.dayLabel} · {day.dateLabel}</span>
                    <h3 className="font-semibold text-zinc-900 dark:text-white text-sm mt-0.5">{day.title}</h3>
                  </div>
                </div>
                <div className="divide-y divide-zinc-50 dark:divide-zinc-700/50">
                  {day.slots.map((slot, i) => (
                    <div key={i} className="px-4 py-3 flex items-start gap-3">
                      <span className="text-lg w-6 text-center shrink-0 mt-0.5">{slotIcon[slot.type]}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-medium text-zinc-900 dark:text-white">{slot.title}</span>
                          <span className="text-xs text-zinc-400 shrink-0">{slot.time}</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5">📍 {slot.location}</p>
                        <a
                          href={`https://maps.apple.com/?q=${encodeURIComponent(slot.location)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
                        >
                          🗺️ Mở bản đồ
                        </a>
                        {slot.price && (
                          <span className="text-xs text-green-600 dark:text-green-400 mt-0.5 block">💰 {slot.price}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {(Object.entries(slotIcon) as [SlotType, string][]).map(([type, icon]) => (
          <span key={type} className={`text-xs px-2 py-1 rounded-full border ${slotColor[type]}`}>
            {icon} {type}
          </span>
        ))}
      </div>
    </div>
  );
}
