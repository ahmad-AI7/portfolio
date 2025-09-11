"use client";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Hero Image Section */}
      <div className="w-full h-[70vh] relative">
        <img
          src="https://sheikhnabeel.com/wp-content/uploads/2025/05/about.jpg"
          alt="Sheikh Nabeel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content Section BELOW the image */}
      <div className="w-full px-6 py-16 bg-black text-center">
        <h1 className="text-6xl font-extrabold tracking-wide mb-4">
          SHEIKH <span className="text-blue-400">NABEEL</span>
        </h1>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-6 text-lg">
          <a href="#" className="hover:text-blue-400 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            LinkedIn
          </a>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          I’m Sheikh Nabeel – Entrepreneur, Business Strategist & CEO of
          EurosHub. I help startups, agencies, and enterprises scale smarter
          through data-driven operations, strategic branding, and digital
          transformation.
        </p>
      </div>
    </section>
  );
}
