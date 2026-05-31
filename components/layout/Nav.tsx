"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Tổng quan", icon: "🏠" },
  { href: "/itinerary", label: "Lịch trình", icon: "📅" },
  { href: "/places", label: "Địa điểm", icon: "📍" },
  { href: "/hotels", label: "Khách sạn", icon: "🏨" },
  { href: "/budget", label: "Chi phí", icon: "💰" },
  { href: "/tips", label: "Mẹo & Tips", icon: "💡" },
];

const mobileLinks = links.filter((l) =>
  ["/", "/itinerary", "/places", "/hotels", "/tips"].includes(l.href)
);

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              isActive(link.href)
                ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            }`}
          >
            <span>{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex">
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-1 flex flex-col items-center py-2.5 text-xs font-medium transition-colors gap-0.5 ${
              isActive(link.href)
                ? "text-red-600 dark:text-red-400"
                : "text-zinc-500 dark:text-zinc-400"
            }`}
          >
            <span className="text-base">{link.icon}</span>
            <span className="text-[10px]">{link.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
