import type { Metadata } from "next";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";

export const metadata: Metadata = {
  title: "Dashboard - Xiaozhi",
  description: "Dashboard for Xiaozhi App",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border-b border-ios-gray-light/50">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-[10px] bg-ios-blue text-white">
            <span className="text-sm font-semibold">小</span>
          </div>
          <h1 className="text-lg font-semibold">Xiaozhi</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-ios-gray-light">
            <span className="text-sm font-semibold text-ios-gray-dark">JD</span>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6 px-4 max-w-lg mx-auto">
        {children}
      </main>
      <DashboardNav />
    </div>
  );
} 