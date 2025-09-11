import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassNavbar from "@/components/Global/Navbar/sidenavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-black via-gray-900 to-black text-white`}
      >
        {/* Main wrapper */}
        <div className="relative min-h-screen w-full">
          {/* Floating Side Navbar */}
          <aside className="fixed top-0 left-0 h-full w-[20%] md:w-[15%] sm:w-[60px] z-50">
            <GlassNavbar />
          </aside>

          {/* Page Content - Full width, responsive */}
          <main className="min-h-screen w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
