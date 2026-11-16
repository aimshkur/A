import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مهارتي AI | مساحة العمل الذكية للسيارات",
  description: "مساحة عمل ذكية لتجهيز صور السيارات وإدارة الإعلانات والمهام.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
