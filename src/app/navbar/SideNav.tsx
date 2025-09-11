"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Services", id: "services", icon: Briefcase },
  { name: "Portfolio", id: "portfolio", icon: Layers },
  { name: "Contact Us", id: "contactus", icon: Mail },
];

export default function GlassNavbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const NavContent = () => (
    <nav className="flex flex-col space-y-2 w-full">
      {navItems.map(({ name, id, icon: Icon }) => (
        <motion.a
          key={id}
          href={`#${id}`}
          onClick={() => {
            setActive(name);
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
            ${
              active === name
                ? "bg-white/20 text-white shadow-lg"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
        >
          <Icon className="h-5 w-5" />
          <span className="text-sm font-medium">{name}</span>
        </motion.a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 z-[60] md:hidden p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg text-white"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop Sidebar */}
      <aside
        className="
          hidden md:flex
          fixed top-3 left-3 h-[90vh] w-72
          backdrop-blur-2xl bg-white/10 dark:bg-black/40
          border border-white/20
          flex-col justify-center
          shadow-2xl z-50
          rounded-3xl
          overflow-hidden
          px-6 py-4
        "
      >
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              fixed top-0 left-0 h-screen w-64
              backdrop-blur-2xl bg-white/10 dark:bg-black/40
              border-r border-white/20
              flex flex-col justify-center
              shadow-2xl z-50
              rounded-tr-3xl rounded-br-3xl
              overflow-hidden
              px-6 py-4
              md:hidden
            "
          >
            <NavContent />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
