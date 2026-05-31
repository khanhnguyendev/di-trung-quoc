import Link from "next/link";
import { tips } from "@/data/trip";

export const metadata = {
  title: "Di Chuyển — Hành Trình Trung Quốc",
};

const costColors: Record<string, string> = {
  "1–7 tệ/lần": "text-green-600 dark:text-green-400",
  "1–3 tệ/lần": "text-green-600 dark:text-green-400",
  "3,5 tệ/30 phút": "text-green-600 dark:text-green-400",
  "~70–120 tệ/người": "text-blue-600 dark:text-blue-400",
};

export default function TransportPage() {
  const { options } = tips.transport;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link
          href="/tips"
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block"
        >
          ← Mẹo &amp; Tips
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          🚇 Di Chuyển
        </h1>
        <p className="text-zinc-500 mt-1">
          Rẻ, tiện lợi — subway và xe đạp là lựa chọn chính
        </p>
      </div>

      {/* Summary table */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden mb-8">
        <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-700">
          <h2 className="font-semibold text-zinc-900 dark:text-white text-sm">
            Tổng quan chi phí
          </h2>
        </div>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-700">
          {options.map((opt) => (
            <div key={opt.id} className="flex items-center px-4 py-3 gap-3">
              <span className="text-xl w-8 text-center">{opt.icon}</span>
              <span className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                {opt.name}
              </span>
              <span
                className={`text-sm font-medium ${
                  costColors[opt.cost] || "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {opt.cost}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail cards */}
      <div className="flex flex-col gap-5">
        {options.map((opt) => (
          <div
            key={opt.id}
            className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{opt.icon}</span>
              <div>
                <h2 className="font-semibold text-zinc-900 dark:text-white">
                  {opt.name}
                </h2>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className={`text-sm font-medium ${costColors[opt.cost] || "text-zinc-500"}`}>
                    {opt.cost}
                  </span>
                  {opt.apps.map((app) => (
                    <span
                      key={app}
                      className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {opt.description}
            </p>

            {opt.tips.length > 0 && (
              <ul className="space-y-1.5">
                {opt.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400">
                    <span>💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
