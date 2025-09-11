"use client";

import GlassNavbar from "@/app/navbar/SideNav";
import HeroSection from "@/components/Homepage/HeroSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex">
      {/* Sidebar Navbar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 z-50">
        <GlassNavbar />
      </aside>

      {/* Main Content (shifted to right by navbar width) */}
      <div className="flex-1 ml-64">
        {/* Hero Section (modular component) */}
        <HeroSection />

        {/* About Section */}
        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Services</h2>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Portfolio</h2>
        </section>

        {/* Contact Us Section */}
        <section
          id="contactus"
          className="h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Contact Us</h2>
        </section>
      </div>
    </main>
  );
}
