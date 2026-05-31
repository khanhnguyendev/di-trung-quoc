import Link from "next/link";
import { itinerary, tripOverview } from "@/data/trip";

export const metadata = {
  title: "Quảng Châu — Hành Trình Trung Quốc",
};

export default function GuangzhouPage() {
  const city = itinerary.find((c) => c.cityId === "guangzhou")!;
  const cityInfo = tripOverview.cities.find((c) => c.id === "guangzhou")!;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link
          href="/itinerary"
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block"
        >
          ← Lịch trình
        </Link>
        <div className="text-4xl mb-2">🏙️</div>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          {cityInfo.name}
          <span className="text-base text-zinc-500 font-normal ml-2">
            ({cityInfo.nameEn})
          </span>
        </h1>
        <p className="text-zinc-500 mt-1">
          {cityInfo.startDate.split("-").reverse().join("/")} →{" "}
          {cityInfo.endDate.split("-").reverse().join("/")} · {cityInfo.days} ngày
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">{cityInfo.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {cityInfo.highlights.map((h) => (
            <span
              key={h}
              className="text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-2 py-1 rounded-full"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Day timeline */}
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
        {city.days.map((day) => (
          <div key={day.dayNumber} className="relative mb-6 last:mb-0">
            <div className="absolute -left-4 w-4 h-4 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900 top-1" />
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-5 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">
                    {day.label}
                  </span>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {day.title}
                  </h2>
                </div>
                <span className="text-sm text-zinc-400 shrink-0 mt-1">{day.date}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {day.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-red-400 font-bold mt-0.5">→</span>
                    {act}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-700 space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-blue-500">🚇</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{day.transport}</span>
                </div>
                {day.notes && (
                  <div className="flex items-start gap-2 text-sm">
                    <span>💡</span>
                    <span className="text-amber-700 dark:text-amber-400">{day.notes}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transit to Shenzhen */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          🚄 Tiếp theo: Di chuyển đến Thâm Quyến
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-400">
          {tripOverview.transit.from} → {tripOverview.transit.to}
        </p>
        <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
          ⏱ {tripOverview.transit.duration} · {tripOverview.transit.tip}
        </p>
        <Link
          href="/itinerary/shenzhen"
          className="mt-3 inline-block text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline"
        >
          Xem lịch trình Thâm Quyến →
        </Link>
      </div>
    </div>
  );
}
