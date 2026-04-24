export default function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-emerald-900 cursor-pointer">menu</span>
          <span className="text-2xl font-serif font-black text-emerald-900 tracking-tight">Visit Cameroon</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-serif text-emerald-700 border-b-2 border-emerald-700 pb-1" href="#">Travel Essentials</a>
          <a className="font-serif text-stone-600 hover:text-emerald-600 transition-colors duration-300" href="#">Investment Portal</a>
          <a className="font-serif text-stone-600 hover:text-emerald-600 transition-colors duration-300" href="#">Culture</a>
        </nav>
      </div>
    </header>
  );
}
