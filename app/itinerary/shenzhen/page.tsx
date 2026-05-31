import Link from "next/link";
import { days, tripOverview, type SlotType } from "@/data/trip";

export const metadata = {
  title: "Thâm Quyến — Lịch trình",
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

const slotBadge: Record<SlotType, string> = {
  flight: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  transport: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  accommodation: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  food: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  sightseeing: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  shopping: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  leisure: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
};

export default function ShenzhenItineraryPage() {
  const cityDays = days.filter((d) => d.cityId === "shenzhen");
  const cityInfo = tripOverview.cities.find((c) => c.id === "shenzhen")!;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/itinerary" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block">
          ← Lịch trình
        </Link>
        <div className="text-4xl mb-2">🚀</div>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          {cityInfo.name}
          <span className="text-base text-zinc-500 font-normal ml-2">({cityInfo.nameEn})</span>
        </h1>
        <p className="text-zinc-500 mt-1">
          {cityInfo.startDate.split("-").reverse().join("/")} → {cityInfo.endDate.split("-").reverse().join("/")} · {cityInfo.days} ngày
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{cityInfo.food}</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6 flex items-start gap-3 text-sm text-blue-800 dark:text-blue-300">
        <span>🚄</span>
        <span>Đến từ {tripOverview.transit.from} — {tripOverview.transit.duration} · {tripOverview.transit.price}</span>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
        {cityDays.map((day) => (
          <div key={day.date} className="relative mb-8 last:mb-0">
            <div className="absolute -left-4 w-4 h-4 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900 top-1" />
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-700">
                <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">
                  {day.dayLabel} · {day.dateLabel}
                </span>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mt-0.5">{day.title}</h2>
              </div>
              <div className="divide-y divide-zinc-50 dark:divide-zinc-700/50">
                {day.slots.map((slot, i) => (
                  <div key={i} className="px-5 py-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">{slotIcon[slot.type]}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-medium text-zinc-900 dark:text-white text-sm">{slot.title}</h3>
                          <span className="text-xs text-zinc-400 shrink-0 font-mono">{slot.time}</span>
                        </div>
                        <p className="text-xs text-zinc-500 mb-2">📍 {slot.location}</p>
                        {slot.notes && (
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">{slot.notes}</p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${slotBadge[slot.type]}`}>
                            {slot.type}
                          </span>
                          {slot.price && (
                            <span className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                              💰 {slot.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/itinerary/guangzhou" className="text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
          ← Quay lại lịch trình Quảng Châu
        </Link>
      </div>
    </div>
  );
}
