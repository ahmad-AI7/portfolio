"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact Us", id: "contactus" },
];

export default function GlassNavbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Track window resize → update `isDesktop`
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);

    checkScreen(); // run once
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isDesktop && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isDesktop || isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="
          fixed top-2 left-2 bottom-2 w-60
          backdrop-blur-2xl bg-white/10 dark:bg-black/40
          border border-white/20
          flex flex-col
          shadow-2xl z-40
          rounded-2xl
          transition-all
        "
      >
        {/* Signature */}
        <div className="flex items-center justify-center mt-6 mb-6">
          <Image
            src="/signature.png"
            alt="Signature"
            width={120}
            height={50}
            className="object-contain invert brightness-0 contrast-200"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 px-4 flex-grow">
          {navItems.map(({ name, id }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setActive(name);
                if (!isDesktop) setIsOpen(false); // auto close on mobile
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${
                  active === name
                    ? "bg-white/20 text-white shadow-lg"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className="text-sm font-medium">{name}</span>
            </motion.a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} My Portfolio
        </div>
      </motion.aside>
    </>
  );
}
