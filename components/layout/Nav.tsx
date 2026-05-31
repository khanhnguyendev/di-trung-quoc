"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Tổng quan" },
  { href: "/itinerary", label: "Lịch trình" },
  { href: "/tips", label: "Mẹo & Tips" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex flex-col w-56 min-h-screen border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 gap-1 shrink-0">
        <div className="mb-6">
          <Link href="/" className="block">
            <span className="text-lg font-bold text-zinc-900 dark:text-white">🇨🇳 Trung Quốc</span>
            <span className="block text-xs text-zinc-500 mt-0.5">28/8 – 2/9 · 4 người</span>
          </Link>
        </div>
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-1 flex flex-col items-center py-3 text-xs font-medium transition-colors gap-0.5 ${
                active
                  ? "text-red-600 dark:text-red-400"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <span className="text-base">
                {link.href === "/" ? "🏠" : link.href === "/itinerary" ? "📅" : "💡"}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
