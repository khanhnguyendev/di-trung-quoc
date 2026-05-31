import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hành Trình Trung Quốc — Quảng Châu & Thâm Quyến",
  description:
    "Kế hoạch du lịch chi tiết: Quảng Châu & Thâm Quyến 5 ngày 4 đêm. Tips Alipay, tàu cao tốc, phương tiện công cộng.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex bg-zinc-50 dark:bg-zinc-900">
        <Nav />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
