export default function ContactSection() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/2">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h2 className="font-display-xl text-display-xl text-emerald-900 mb-8 leading-tight">We are here to <br />guide your journey.</h2>
          <p className="text-stone-600 font-body-lg mb-12">Whether you're planning a cultural tour or exploring a large-scale investment, our liaison offices provide expert advice and administrative support.</p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Yaoundé Headquarters</h4>
                <p className="text-stone-500">Boulevard du 20 Mai, B.P. 266, Centre Region</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Direct Liaison</h4>
                <p className="text-stone-500">+237 222 33 44 55 (General Inquiries)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <form className="glass-card p-10 rounded-[32px] border border-white shadow-2xl shadow-emerald-900/5">
            <h3 className="font-headline-md text-headline-md text-emerald-900 mb-8">Inquiry Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-stone-500">Full Name</label>
                <input className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-stone-500">Email Address</label>
                <input className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold uppercase text-stone-500">Inquiry Type</label>
              <select className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary">
                <option>Tourism Information</option>
                <option>Investment Opportunity</option>
                <option>Visa Support</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold uppercase text-stone-500">Message</label>
              <textarea className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary" placeholder="How can we assist you?" rows={4}></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-on-primary-fixed-variant transition-all">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
