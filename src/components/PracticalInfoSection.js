export default function PracticalInfoSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full ndop-pattern z-0"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Preparation</span>
          <h2 className="font-headline-lg text-headline-lg text-emerald-900">Travel Essentials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Visas */}
          <div className="group">
            <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-6 text-on-primary-container group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">demography</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-4">Visas & Entry</h3>
            <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">Most visitors require a visa. E-visas are now available through the official government portal for streamlined processing. Ensure your passport is valid for at least 6 months.</p>
            <a className="text-primary font-bold inline-flex items-center gap-2 hover:underline" href="#">Apply for E-visa <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          {/* Currency */}
          <div className="group">
            <div className="w-16 h-16 bg-tertiary-container rounded-2xl flex items-center justify-center mb-6 text-on-tertiary-container group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-4">Currency & Banks</h3>
            <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">The official currency is the Central African CFA franc (XAF), pegged to the Euro. Credit cards are accepted in major hotels and supermarkets; cash is preferred elsewhere.</p>
            <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/30">
              <span className="text-xs font-bold text-tertiary uppercase">Current Rate:</span>
              <div className="flex justify-between items-center mt-1">
                <span className="font-bold">1 EUR</span>
                <span className="material-symbols-outlined text-sm">sync</span>
                <span className="font-bold">~655.95 XAF</span>
              </div>
            </div>
          </div>
          {/* Climate */}
          <div className="group">
            <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 text-on-secondary-container group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">thermostat</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-4">Climate & Health</h3>
            <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">Tropical climate. Rainy season varies by region. Yellow fever vaccination is mandatory. Malaria prophylaxis is highly recommended for all travelers.</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">wb_sunny</span>
                <span>25°C - 30°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
