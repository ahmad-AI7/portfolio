"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassNavbar() {
  const navItems = ["Home", "About", "Services", "Portfolio", "Contact Us"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-4/5 flex items-center justify-around rounded-full px-8 py-4
                   bg-white/10 backdrop-blur-xl border border-white/30
                   shadow-[0_8px_32px_rgba(31,38,135,0.2)] relative overflow-hidden"
      >
        {/* Animated pill - fixed width (1/5 of navbar width) */}
        {hoveredIndex !== null && (
          <motion.div
            layoutId="nav-pill"
            className="absolute top-0 bottom-0
                       bg-white/20 backdrop-blur-2xl border border-white/40
                       rounded-full
                       shadow-[inset_-4px_-2px_8px_rgba(255,255,255,0.3),inset_4px_4px_12px_rgba(0,0,0,0.25),0_4px_12px_rgba(0,0,0,0.2)]"
            style={{
              width: "20%",
            }}
            animate={{
              left: `${hoveredIndex * 20}%`,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}

        {/* Menu Items */}
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-1 text-center py-2 cursor-pointer select-none z-10"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-white font-semibold tracking-wide">{item}</span>
          </div>
        ))}
      </motion.nav>
    </div>
  );
}
