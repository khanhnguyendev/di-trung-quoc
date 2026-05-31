import Link from "next/link";
import { tripOverview, tips } from "@/data/trip";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          🇨🇳 {tripOverview.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {tripOverview.subtitle}
        </p>
      </div>

      {/* Trip stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: "Thành phố", value: `${tripOverview.cities.length} thành phố` },
          { label: "Tổng ngày", value: `${tripOverview.totalDays} ngày` },
          { label: "Số người", value: `${tripOverview.groupSize} người` },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-zinc-800 rounded-xl p-4 text-center border border-zinc-200 dark:border-zinc-700"
          >
            <div className="text-xl font-bold text-zinc-900 dark:text-white">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Cities */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
          Điểm đến
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {tripOverview.cities.map((city) => (
            <Link
              key={city.id}
              href={`/itinerary/${city.id}`}
              className="bg-white dark:bg-zinc-800 rounded-xl p-5 border border-zinc-200 dark:border-zinc-700 hover:border-red-300 dark:hover:border-red-700 transition-colors group"
            >
              <div className="text-3xl mb-2">{city.emoji}</div>
              <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {city.name}
                <span className="text-xs text-zinc-500 font-normal ml-2">
                  ({city.nameEn})
                </span>
              </h3>
              <p className="text-sm text-zinc-500 mt-1">
                {city.startDate.split("-").reverse().join("/")} →{" "}
                {city.endDate.split("-").reverse().join("/")} · {city.days} ngày
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                {city.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {city.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Transit between cities */}
      <section className="mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚄</span>
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-300">
                Di chuyển giữa 2 thành phố
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-400 mt-1">
                {tripOverview.transit.from} → {tripOverview.transit.to}
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-0.5">
                ⏱ {tripOverview.transit.duration} · {tripOverview.transit.tip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical tips */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
          Lưu ý quan trọng
        </h2>
        <div className="flex flex-col gap-3">
          {tips.important.map((tip) => (
            <div
              key={tip.id}
              className={`rounded-xl p-4 border flex items-start gap-3 ${
                tip.priority === "critical"
                  ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                  : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
              }`}
            >
              <span className="text-2xl">{tip.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                    {tip.title}
                  </h3>
                  {tip.priority === "critical" && (
                    <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded font-medium">
                      BẮT BUỘC
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick nav */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
          Xem thêm
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/itinerary"
            className="bg-white dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700 hover:border-red-300 dark:hover:border-red-700 transition-colors"
          >
            <div className="text-2xl mb-1">📅</div>
            <div className="font-medium text-sm text-zinc-900 dark:text-white">
              Lịch trình đầy đủ
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">Day-by-day plan</div>
          </Link>
          <Link
            href="/tips"
            className="bg-white dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700 hover:border-red-300 dark:hover:border-red-700 transition-colors"
          >
            <div className="text-2xl mb-1">💡</div>
            <div className="font-medium text-sm text-zinc-900 dark:text-white">
              Mẹo &amp; Tips
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">
              Thanh toán, di chuyển, app
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
