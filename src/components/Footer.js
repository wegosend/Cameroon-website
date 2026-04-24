export default function Footer() {
  return (
    <footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-serif font-bold text-emerald-900 tracking-tight block mb-6">Visit Cameroon</span>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">Promoting the extraordinary beauty and boundless potential of Africa's heartland.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-primary">public</span>
            <span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-primary">language</span>
            <span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-primary">mail</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-emerald-900 mb-6">Resources</h4>
          <ul className="space-y-4 text-stone-500 text-sm">
            <li><a className="hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4" href="#">Destinations</a></li>
            <li><a className="hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4" href="#">Culture</a></li>
            <li><a className="hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4" href="#">E-Visa Portal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-emerald-900 mb-6">Legal</h4>
          <ul className="space-y-4 text-stone-500 text-sm">
            <li><a className="hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4" href="#">Terms of Service</a></li>
            <li><a className="hover:text-emerald-600 underline decoration-emerald-500/30 underline-offset-4" href="#">Invest Cameroon Agency</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-emerald-900 mb-6">Newsletter</h4>
          <p className="text-stone-500 text-sm mb-4">Stay updated with travel and business insights.</p>
          <div className="flex gap-2">
            <input className="bg-white border-stone-200 rounded-lg text-sm w-full" placeholder="Email" type="text" />
            <button className="bg-primary text-white px-4 rounded-lg">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-stone-200">
        <p className="text-stone-500 text-sm text-center">© 2024 Republic of Cameroon. All rights reserved.</p>
      </div>
    </footer>
  );
}
