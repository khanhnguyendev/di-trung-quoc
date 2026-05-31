import Link from "next/link";
import { tips } from "@/data/trip";

export const metadata = {
  title: "Ứng Dụng Cần Cài — Hành Trình Trung Quốc",
};

const priorityLabel: Record<string, { label: string; className: string }> = {
  critical: {
    label: "BẮT BUỘC",
    className: "bg-red-600 text-white",
  },
  high: {
    label: "QUAN TRỌNG",
    className: "bg-amber-500 text-white",
  },
  medium: {
    label: "NÊN CÀI",
    className: "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300",
  },
};

export default function AppsPage() {
  const { list } = tips.apps;
  const critical = list.filter((a) => a.priority === "critical");
  const high = list.filter((a) => a.priority === "high");
  const medium = list.filter((a) => a.priority === "medium");

  const groups = [
    { label: "Bắt buộc cài", apps: critical },
    { label: "Quan trọng", apps: high },
    { label: "Nên cài", apps: medium },
  ];

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
          📱 Ứng Dụng Cần Cài
        </h1>
        <p className="text-zinc-500 mt-1">
          Cài trước khi lên máy bay — một số app cần xác thực tại Việt Nam
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {groups.map(
          (group) =>
            group.apps.length > 0 && (
              <section key={group.label}>
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
                  {group.label}
                </h2>
                <div className="flex flex-col gap-3">
                  {group.apps.map((app) => {
                    const badge = priorityLabel[app.priority];
                    return (
                      <div
                        key={app.id}
                        className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 flex items-start gap-4"
                      >
                        <span className="text-3xl">{app.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-semibold text-zinc-900 dark:text-white">
                              {app.name}
                            </h3>
                            <span
                              className={`text-xs px-1.5 py-0.5 rounded font-medium ${badge.className}`}
                            >
                              {badge.label}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {app.use}
                          </p>
                          <div className="flex gap-1.5 mt-2">
                            {app.available.map((platform) => (
                              <span
                                key={platform}
                                className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-500 px-2 py-0.5 rounded"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )
        )}
      </div>
    </div>
  );
}
