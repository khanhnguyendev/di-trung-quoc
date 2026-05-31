import Link from "next/link";
import { itinerary, tripOverview } from "@/data/trip";

export const metadata = {
  title: "Lịch trình đầy đủ — Hành Trình Trung Quốc",
};

export default function ItineraryPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block"
        >
          ← Trang chủ
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          📅 Lịch trình đầy đủ
        </h1>
        <p className="text-zinc-500 mt-1">
          {tripOverview.totalDays} ngày · {tripOverview.groupSize} người
        </p>
      </div>

      {/* Transit info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8 flex items-start gap-3">
        <span className="text-xl">🚄</span>
        <div className="text-sm text-blue-800 dark:text-blue-300">
          <strong>Kết nối 2 thành phố:</strong> {tripOverview.transit.from} →{" "}
          {tripOverview.transit.to} — {tripOverview.transit.duration}
        </div>
      </div>

      {/* City sections */}
      {itinerary.map((city) => (
        <section key={city.cityId} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              {city.cityId === "guangzhou" ? "🏙️" : "🚀"} {city.cityName}
            </h2>
            <Link
              href={`/itinerary/${city.cityId}`}
              className="text-sm text-red-600 dark:text-red-400 hover:underline"
            >
              Xem chi tiết →
            </Link>
          </div>

          {/* Day timeline */}
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
            {city.days.map((day) => (
              <div key={day.dayNumber} className="relative mb-6 last:mb-0">
                <div className="absolute -left-4 w-4 h-4 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900 top-0.5" />
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">
                        {day.label}
                      </span>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">
                        {day.title}
                      </h3>
                    </div>
                    <span className="text-xs text-zinc-400 shrink-0">{day.date}</span>
                  </div>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 mb-3">
                    {day.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-300 dark:text-zinc-600 mt-0.5">•</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="text-blue-600 dark:text-blue-400">
                      🚇 {day.transport}
                    </span>
                  </div>
                  {day.notes && (
                    <div className="mt-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2">
                      💡 {day.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
