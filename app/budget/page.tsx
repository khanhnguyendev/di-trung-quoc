import Link from "next/link";
import { budget, budgetTotal, tripOverview } from "@/data/trip";

export const metadata = {
  title: "Chi phí — Hành Trình Trung Quốc",
};

function formatVnd(n: number) {
  return new Intl.NumberFormat("vi-VN").format(Math.round(n));
}

const categoryIcon: Record<string, string> = {
  "Khách sạn": "🏨",
  "Máy bay": "✈️",
  "Visa": "🛂",
  "Đi lại trong TP": "🚇",
  "Ăn uống": "🍽️",
  "SIM/eSIM": "📶",
  "Tàu cao tốc": "🚄",
};

export default function BudgetPage() {
  const categories = [...new Set(budget.map((b) => b.category))];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-3 inline-block">
          ← Trang chủ
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          💰 Chi phí
        </h1>
        <p className="text-zinc-500 mt-1">{tripOverview.groupSize} người · {tripOverview.totalDays} ngày</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-red-700 dark:text-red-400">
            {formatVnd(budgetTotal.perPersonVnd)}₫
          </div>
          <div className="text-xs text-red-600 dark:text-red-500 mt-1">Chi phí / người</div>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-zinc-700 dark:text-zinc-300">
            {formatVnd(budgetTotal.totalVnd)}₫
          </div>
          <div className="text-xs text-zinc-500 mt-1">Tổng {tripOverview.groupSize} người</div>
        </div>
      </div>

      {/* Breakdown by category */}
      <div className="flex flex-col gap-4 mb-8">
        {categories.map((cat) => {
          const items = budget.filter((b) => b.category === cat);
          const catTotal = items.reduce((s, b) => s + b.totalVnd, 0);
          const catPerPerson = items.reduce((s, b) => s + b.perPersonVnd, 0);
          return (
            <div key={cat} className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{categoryIcon[cat] || "💼"}</span>
                  <span className="font-semibold text-sm text-zinc-900 dark:text-white">{cat}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {formatVnd(catPerPerson)}₫
                  </div>
                  <div className="text-xs text-zinc-400">/người</div>
                </div>
              </div>
              <div className="divide-y divide-zinc-50 dark:divide-zinc-700/50">
                {items.map((item) => (
                  <div key={item.id} className="px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {item.detail}
                        {item.isEstimate && (
                          <span className="ml-1 text-amber-500">· ước tính</span>
                        )}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm text-zinc-700 dark:text-zinc-300">
                        {formatVnd(item.perPersonVnd)}₫
                      </div>
                      <div className="text-xs text-zinc-400">
                        {formatVnd(item.totalVnd)}₫ tổng
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Not included */}
      <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p className="font-medium text-zinc-700 dark:text-zinc-300 mb-2">Chưa bao gồm:</p>
        <ul className="space-y-1">
          <li>• Mua sắm (tùy nhu cầu)</li>
          <li>• Vé tham quan (Canton Tower, Window of the World, Ping An IFC...)</li>
          <li>• Bảo hiểm du lịch</li>
        </ul>
      </div>
    </div>
  );
}
