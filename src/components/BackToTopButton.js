
"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-fade-in-up ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.25)" }}
    >
      <span className="material-symbols-outlined text-2xl">arrow_upward</span>
    </button>
  );
}
