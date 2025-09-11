"use client";

import GlassNavbar from "@/app/navbar/SideNav";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex">
      {/* Sidebar Navbar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 z-50">
        <GlassNavbar />
      </aside>

      {/* Main Content (shifted to right by navbar width) */}
      <div className="flex-1 ml-64">
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg max-w-2xl text-gray-300">
            This site is built with Next.js, TailwindCSS, and will showcase
            projects with stunning 3D glass effects.
          </p>
        </section>

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
