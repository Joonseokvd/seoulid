import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seoul ID",
  description: "Seoul id — a book as a web by Ryu Haechan and Drei Stack.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
