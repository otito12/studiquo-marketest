import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studiquo",
  description: "Studiquo Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
