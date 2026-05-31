import Link from "next/link";
import { tips } from "@/data/trip";

export const metadata = {
  title: "Thanh Toán — Hành Trình Trung Quốc",
};

export default function PaymentPage() {
  const { methods } = tips.payment;

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
          💳 Thanh Toán
        </h1>
        <p className="text-zinc-500 mt-1">
          Trung Quốc gần như không dùng tiền mặt — chuẩn bị kỹ trước khi đi
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {methods.map((method, idx) => (
          <div
            key={method.id}
            className={`rounded-xl border p-5 ${
              method.recommended
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{method.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-zinc-400">
                    #{idx + 1}
                  </span>
                  <h2 className="font-semibold text-zinc-900 dark:text-white">
                    {method.name}
                  </h2>
                  {method.recommended && (
                    <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded font-medium">
                      KHUYÊN DÙNG
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                Cách thực hiện
              </h3>
              <ol className="space-y-1.5">
                {method.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs flex items-center justify-center font-medium mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {method.notes && (
              <div className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2">
                💡 {method.notes}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Exchange rate tip */}
      <div className="mt-6 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4">
        <h3 className="font-medium text-zinc-900 dark:text-white mb-1">
          📊 Tỉ giá thực tế
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          VCB tính ~3.950 VNĐ/tệ qua Alipay. Đổi tay Hà Trung ~3.970 VNĐ/tệ.
          Dùng Alipay hơi rẻ hơn và tiện hơn nhiều.
        </p>
      </div>
    </div>
  );
}
