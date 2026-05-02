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
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Yaoundé Headquarters</h4>
                <p className="text-stone-500">Boulevard du 20 Mai, P.O. Box 266, Center Region</p>
                <a href="https://goo.gl/maps/6Qw8Qw8Qw8Qw8Qw8A" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-primary font-bold hover:underline mt-1 text-sm">
                  <span className="material-symbols-outlined text-base">map</span> View on Google Maps
                </a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Direct Liaison</h4>
                <a href="tel:+237222334455" className="inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm">
                  <span className="material-symbols-outlined text-base">phone</span> +237 222 33 44 55
                </a>
                <a href="mailto:info@cameroon.gov" className="inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm ml-4">
                  <span className="material-symbols-outlined text-base">mail</span> info@cameroon.gov
                </a>
                <a href="https://wa.me/237222334455" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-green-600 font-bold hover:underline text-sm ml-4">
                  <span className="material-symbols-outlined text-base">chat</span> WhatsApp
                </a>
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
                <input className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" placeholder="John Doe" type="text" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-stone-500">Email Address</label>
                <input className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" placeholder="john@example.com" type="email" required />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold uppercase text-stone-500">Inquiry Type</label>
              <select className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" required>
                <option>Tourism Information</option>
                <option>Investment Opportunity</option>
                <option>Visa Support</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold uppercase text-stone-500">Message</label>
              <textarea className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" placeholder="How can we assist you?" rows={4} required></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-on-primary-fixed-variant transition-all">
              Send Inquiry
            </button>
            {/* Feedback visuel après envoi (à implémenter côté JS si besoin) */}
            {/* <p className="text-green-600 font-bold mt-4">Thank you for your message! We will get back to you soon.</p> */}
          </form>
        </div>
      </div>
    </section>
  );
}
