"use client";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Image, Mail } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home", icon: <Home size={26} /> },
  { href: "#about", label: "About", icon: <User size={26} /> },
  { href: "#services", label: "Services", icon: <Briefcase size={26} /> },
  { href: "#portfolio", label: "Portfolio", icon: <Image size={26} /> },
  { href: "#contactus", label: "Contact", icon: <Mail size={26} /> },
];

export default function DockNavbar() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-end gap-6 px-6 py-3 rounded-2xl
          bg-[#0b132b]/70 backdrop-blur-2xl border border-[#1c2541] shadow-2xl"
      >
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex flex-col items-center group"
            style={{ transformOrigin: "bottom center" }}
            animate={{
              scale: hovered === i ? 1.4 : hovered !== null ? 0.9 : 1,
              y: hovered === i ? -12 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl
                bg-[#1c2541] border border-[#1c2541]/40 shadow-lg
                text-slate-300 group-hover:text-[#56a3a6] transition-colors"
            >
              {link.icon}
            </div>
            {/* Label on hover */}
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: hovered === i ? 1 : 0,
                y: hovered === i ? 0 : 6,
              }}
              transition={{ duration: 0.2 }}
              className="mt-2 text-xs text-[#56a3a6]"
            >
              {link.label}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
