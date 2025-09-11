"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Header Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg" // <-- put your image in /public/hero-bg.jpg
            alt="Sheikh Nabeel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
        </div>

        {/* Header Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl font-extrabold tracking-wide mb-4">
            HEIKH <span className="text-blue-400">NABEEL</span>
          </h1>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-6 text-lg">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            I’m Sheikh Nabeel – Entrepreneur, Business Strategist & CEO of EurosHub. 
            I help startups, agencies, and enterprises scale smarter through 
            data-driven operations, strategic branding, and digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20">
        {/* Page Title */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Contact Us
        </motion.h2>

        {/* Contact Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-gray-300 text-lg text-center mb-10"
        >
          Have an idea, project, or collaboration in mind?  
          Let’s get in touch! Fill the form below and I’ll respond as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold text-white shadow-lg hover:shadow-2xl transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}
