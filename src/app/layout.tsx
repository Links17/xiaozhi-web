import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Xiaozhi",
  description: "Xiaozhi App with iOS Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
} 