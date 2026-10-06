import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Agent",
  description:
    "AI Website Development Agent — turn designs into production-ready websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page-shell">{children}</body>
    </html>
  );
}
