import Link from "next/link";
import { places, tripOverview } from "@/data/trip";

export const metadata = {
  title: "Địa điểm — Hành Trình Trung Quốc",
};

export default function PlacesPage() {
  const gzPlaces = places.filter((p) => p.cityId === "guangzhou");
  const szPlaces = places.filter((p) => p.cityId === "shenzhen");
  const gzCity = tripOverview.cities.find((c) => c.id === "guangzhou")!;
  const szCity = tripOverview.cities.find((c) => c.id === "shenzhen")!;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block">
          ← Trang chủ
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          📍 Địa điểm
        </h1>
        <p className="text-zinc-500 mt-1">
          {places.length} địa điểm — ăn uống, tham quan, mua sắm
        </p>
      </div>

      {[
        { city: gzCity, cityPlaces: gzPlaces, href: "/places/guangzhou", emoji: "🏙️" },
        { city: szCity, cityPlaces: szPlaces, href: "/places/shenzhen", emoji: "🚀" },
      ].map(({ city, cityPlaces, href, emoji }) => (
        <section key={city.id} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                {emoji} {city.name}
              </h2>
              <p className="text-xs text-zinc-500 mt-0.5">{city.food}</p>
            </div>
            <Link href={href} className="text-sm text-red-600 dark:text-red-400 hover:underline shrink-0">
              Xem tất cả →
            </Link>
          </div>

          <div className="grid gap-2">
            {cityPlaces.slice(0, 5).map((place) => (
              <div
                key={place.id}
                className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-3 flex items-center gap-3"
              >
                <span className="text-2xl w-8 text-center shrink-0">{place.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-white truncate">{place.name}</h3>
                  <p className="text-xs text-zinc-500">{place.type}</p>
                </div>
                <span className={`text-xs font-medium shrink-0 ${place.free ? "text-green-600 dark:text-green-400" : "text-zinc-500"}`}>
                  {place.free ? "Miễn phí" : place.price}
                </span>
              </div>
            ))}
            {cityPlaces.length > 5 && (
              <Link
                href={href}
                className="text-center text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-400 py-2"
              >
                +{cityPlaces.length - 5} địa điểm nữa →
              </Link>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
