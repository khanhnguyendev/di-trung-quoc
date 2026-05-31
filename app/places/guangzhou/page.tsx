import Link from "next/link";
import { places, tripOverview } from "@/data/trip";

export const metadata = {
  title: "Địa điểm Quảng Châu — Hành Trình Trung Quốc",
};

export default function GuangzhouPlacesPage() {
  const cityPlaces = places.filter((p) => p.cityId === "guangzhou");
  const cityInfo = tripOverview.cities.find((c) => c.id === "guangzhou")!;

  const byType = cityPlaces.reduce<Record<string, typeof cityPlaces>>((acc, p) => {
    const cat = p.type.split(" — ")[0];
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  }, {});

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/places" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block">
          ← Địa điểm
        </Link>
        <div className="text-4xl mb-2">🏙️</div>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          {cityInfo.name} — {cityPlaces.length} địa điểm
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{cityInfo.food}</p>
      </div>

      {/* Anchor nav */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(byType).map((cat) => (
          <a
            key={cat}
            href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-red-300 dark:hover:border-red-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            {cat}
          </a>
        ))}
      </div>

      {Object.entries(byType).map(([cat, items]) => (
        <section key={cat} id={cat.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">{cat}</h2>
          <div className="flex flex-col gap-3">
            {items.map((place) => (
              <div key={place.id} className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-3xl shrink-0">{place.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">{place.name}</h3>
                      <span className={`text-xs font-medium shrink-0 ${place.free ? "text-green-600 dark:text-green-400" : "text-zinc-500"}`}>
                        {place.price}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">{place.type}</p>
                    {place.note && (
                      <p className="text-xs text-amber-700 dark:text-amber-400 mt-2 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
                        💡 {place.note}
                      </p>
                    )}
                    <a
                      href={`https://maps.apple.com/?q=${encodeURIComponent(place.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2"
                    >
                      🗺️ Xem trên bản đồ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <Link href="/places/shenzhen" className="block text-center text-sm text-red-600 dark:text-red-400 hover:underline mt-4">
        Xem địa điểm Thâm Quyến →
      </Link>
    </div>
  );
}
