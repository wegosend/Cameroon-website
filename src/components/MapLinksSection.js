export default function MapLinksSection() {
  return (
    <section id="map-links" className="py-24 bg-surface-container-high">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Explore</span>
          <h2 className="font-headline-lg text-headline-lg text-emerald-900 mb-4">Map & Useful Links</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Locate Cameroon and quickly access essential resources to prepare your trip or investment project.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-2/3 rounded-3xl overflow-hidden shadow-lg mb-8 md:mb-0">
            <iframe
              title="Map of Cameroon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12794497.39383547!2d8.6752778!3d7.3697219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf3c1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sCameroon!5e0!3m2!1sen!2sfr!4v1683123456789!5m2!1sen!2sfr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 space-y-6">
            <a href="https://www.diplocam.cm/" target="_blank" rel="noopener" className="block bg-primary-container text-on-primary-container rounded-xl px-6 py-4 font-bold shadow hover:bg-primary transition-colors">Ministry of Foreign Affairs</a>
            <a href="https://www.evisacam.cm/" target="_blank" rel="noopener" className="block bg-secondary-container text-on-secondary-container rounded-xl px-6 py-4 font-bold shadow hover:bg-secondary transition-colors">Cameroon E-Visa Portal</a>
            <a href="https://www.investincameroon.net/" target="_blank" rel="noopener" className="block bg-tertiary-container text-on-tertiary-container rounded-xl px-6 py-4 font-bold shadow hover:bg-tertiary transition-colors">Invest in Cameroon</a>
            <a href="https://www.tourisme.cm/" target="_blank" rel="noopener" className="block bg-emerald-900 text-white rounded-xl px-6 py-4 font-bold shadow hover:bg-emerald-700 transition-colors">National Tourism Office</a>
          </div>
        </div>
      </div>
    </section>
  );
}
