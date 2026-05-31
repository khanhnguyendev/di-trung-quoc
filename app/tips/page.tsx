import Link from "next/link";
import { tips } from "@/data/trip";

export const metadata = {
  title: "Mẹo & Tips — Hành Trình Trung Quốc",
};

const sections = [
  {
    href: "/tips/payment",
    icon: "💳",
    title: "Thanh Toán",
    description: "Alipay, Tour Card, tiền mặt dự phòng",
    count: `${tips.payment.methods.length} phương thức`,
  },
  {
    href: "/tips/transport",
    icon: "🚇",
    title: "Di Chuyển",
    description: "Subway, xe đạp, Didi, tàu cao tốc",
    count: `${tips.transport.options.length} phương tiện`,
  },
  {
    href: "/tips/apps",
    icon: "📱",
    title: "Ứng Dụng Cần Cài",
    description: "Danh sách app thiết yếu trước khi đi",
    count: `${tips.apps.list.length} ứng dụng`,
  },
];

export default function TipsPage() {
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
          💡 Mẹo &amp; Tips
        </h1>
        <p className="text-zinc-500 mt-1">
          Mọi thứ cần biết trước và trong chuyến đi
        </p>
      </div>

      {/* Critical warning */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📱</span>
          <div>
            <h2 className="font-bold text-red-900 dark:text-red-300">
              Phải cài Alipay — điều quan trọng nói 3 lần!
            </h2>
            <p className="text-sm text-red-800 dark:text-red-400 mt-1">
              Trung Quốc gần như không dùng tiền mặt. Alipay dùng được mọi thứ:
              subway, bus, taxi (Didi), xe đạp, đặt vé tàu, thanh toán cửa hàng.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid gap-4 mb-8">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="bg-white dark:bg-zinc-800 rounded-xl p-5 border border-zinc-200 dark:border-zinc-700 hover:border-red-300 dark:hover:border-red-700 transition-colors flex items-center gap-4 group"
          >
            <span className="text-3xl">{section.icon}</span>
            <div className="flex-1">
              <h2 className="font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {section.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-0.5">{section.description}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs text-zinc-400">{section.count}</span>
              <div className="text-zinc-400 group-hover:text-red-500 transition-colors mt-0.5">→</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Important notes summary */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
          Lưu ý khác
        </h2>
        <div className="flex flex-col gap-3">
          {tips.important
            .filter((t) => t.id !== "alipay")
            .map((tip) => (
              <div
                key={tip.id}
                className="bg-white dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700 flex items-start gap-3"
              >
                <span className="text-xl">{tip.icon}</span>
                <div>
                  <h3 className="font-medium text-sm text-zinc-900 dark:text-white">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
