"use client";
import { useState } from "react";

export default function TopAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-emerald-900/90 via-emerald-700/80 to-emerald-500/80 backdrop-blur-md border-b border-emerald-200/30 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="material-symbols-outlined text-yellow-300 cursor-pointer text-3xl hover:scale-110 transition-transform duration-200">menu</span>
          </button>
          <span className="text-3xl font-extrabold font-serif text-white tracking-tight drop-shadow-lg">Visit Cameroon</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-serif text-yellow-300 border-b-2 border-yellow-300 pb-1 hover:text-white hover:border-white transition-all duration-200 text-lg" href="#travel-essentials">Travel Essentials</a>
          <a className="font-serif text-white hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 transition-all duration-200 text-lg" href="#investment-portal">Investment Portal</a>
          <a className="font-serif text-white hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 transition-all duration-200 text-lg" href="#culture">Culture</a>
          <a className="ml-6 px-5 py-2 rounded-full bg-yellow-300 text-emerald-900 font-bold shadow-md hover:bg-yellow-400 transition-all duration-200 text-base" href="#practical-info">Discover</a>
        </nav>
      </div>
      {/* Menu mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="w-64 h-full bg-gradient-to-b from-emerald-900 via-emerald-700 to-emerald-500 shadow-2xl p-8 flex flex-col gap-8 animate-fade-in-up relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-yellow-300 text-2xl focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <a className="font-serif text-yellow-300 border-b-2 border-yellow-300 pb-1 hover:text-white hover:border-white transition-all duration-200 text-lg" href="#travel-essentials">Travel Essentials</a>
            <a className="font-serif text-white hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 transition-all duration-200 text-lg" href="#investment-portal">Investment Portal</a>
            <a className="font-serif text-white hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 transition-all duration-200 text-lg" href="#culture">Culture</a>
            <a className="px-5 py-2 rounded-full bg-yellow-300 text-emerald-900 font-bold shadow-md hover:bg-yellow-400 transition-all duration-200 text-base mt-4" href="#practical-info">Discover</a>
          </div>
        </div>
      )}
    </header>
  );
}
