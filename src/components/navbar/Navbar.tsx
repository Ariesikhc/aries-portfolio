"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo - Responsive */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-white sm:text-xl"
        >
          Aries Ikhctiar
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden rounded-full bg-[#D41414] px-4 py-2 text-xs font-medium text-white transition hover:scale-105 sm:px-5 md:block sm:text-sm">
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          >
            {isOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/50 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-2 w-full rounded-lg bg-[#D41414] px-4 py-3 text-sm font-medium text-white transition hover:bg-red-700">
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}