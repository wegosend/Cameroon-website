export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-emerald-900 via-emerald-700 to-emerald-500 dark:from-stone-950 dark:via-emerald-900 dark:to-emerald-700 border-t border-stone-200 py-16 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-extrabold font-serif tracking-tight block mb-6 drop-shadow-lg">Visit Cameroon</span>
          <p className="text-emerald-100 text-base leading-relaxed mb-6">Promoting the extraordinary beauty and boundless potential of Africa's heartland.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-emerald-200 cursor-pointer hover:text-yellow-300 transition-colors duration-200 text-2xl">public</span>
            <span className="material-symbols-outlined text-emerald-200 cursor-pointer hover:text-yellow-300 transition-colors duration-200 text-2xl">language</span>
            <span className="material-symbols-outlined text-emerald-200 cursor-pointer hover:text-yellow-300 transition-colors duration-200 text-2xl">mail</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-yellow-300 mb-6 uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4 text-emerald-100 text-base">
            <li><a className="hover:text-yellow-300 underline decoration-yellow-200/30 underline-offset-4 transition-colors duration-200" href="#">Destinations</a></li>
            <li><a className="hover:text-yellow-300 underline decoration-yellow-200/30 underline-offset-4 transition-colors duration-200" href="#">Culture</a></li>
            <li><a className="hover:text-yellow-300 underline decoration-yellow-200/30 underline-offset-4 transition-colors duration-200" href="#">E-Visa Portal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-yellow-300 mb-6 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-4 text-emerald-100 text-base">
            <li><a className="hover:text-yellow-300 underline decoration-yellow-200/30 underline-offset-4 transition-colors duration-200" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-yellow-300 underline decoration-yellow-200/30 underline-offset-4 transition-colors duration-200" href="#">Terms of Service</a></li>
            <li><a className="hover:text-yellow-300 underline decoration-yellow-200/30 underline-offset-4 transition-colors duration-200" href="#">Invest Cameroon Agency</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-yellow-300 mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="text-emerald-100 text-base mb-4">Stay updated with travel and business insights.</p>
          <div className="flex gap-2">
            <input className="bg-white/90 border-none rounded-full text-emerald-900 px-4 py-2 w-full focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-md" placeholder="Email" type="text" />
            <button className="bg-yellow-300 text-emerald-900 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-400 transition-all duration-200">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-emerald-200/30">
        <p className="text-emerald-100 text-sm text-center">© 2024 Republic of Cameroon. All rights reserved.</p>
      </div>
    </footer>
  );
}
