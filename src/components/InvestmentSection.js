import Image from "next/image";

export default function InvestmentSection() {
  return (
    <section className="py-20 bg-emerald-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 ndop-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-widest mb-4 block">Strategic Vision</span>
            <h2 className="font-display-xl text-display-xl leading-tight">Emergence 2035: <br />Invest in Resilience</h2>
          </div>
          <div className="pb-2">
            <button className="px-8 py-4 bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold rounded-xl hover:bg-tertiary-fixed transition-colors flex items-center gap-3">
              Download Investor Guide
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Bento Item 1: Agriculture */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHSG1O56u2qBgk057ZktufG1ML2rzB2ZmfvZIun-tGKNvyi7PZyR2obZ4_lb5CzNwLlBF6YYHKhIWRsjz2XUPPRsd-oJXpEW34hTD6ENwZyHg26iV5RKtydle3oQm6YhcHDahUbVxREpl0WDfiN1lfvRPFob1sNg1HEq_Lg9XHCQzJbVHOyF7AFlUPGjQB3RBTmw4OQtElR7u4EyYRO2Is2TH2cWo_RxapTHsklFBovCdFYfk97UtCdRHMkDArHx6ML4rS4ck6G8"
              alt="Large scale cocoa plantation in Cameroon"
              fill
              style={{objectFit: "cover"}}
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-serif font-bold mb-2">Agri-Business</h3>
              <p className="text-white/80 max-w-md">Cameroon is the world's 5th largest cocoa producer with vast untapped fertile lands for sustainable industrial farming.</p>
            </div>
          </div>
          {/* Bento Item 2: Infrastructure */}
          <div className="md:col-span-4 bg-primary-container p-8 rounded-3xl flex flex-col justify-between border border-emerald-400/20">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">architecture</span>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Infrastructure</h3>
              <p className="text-emerald-50/80 mb-6">Major projects in deep-sea ports, highway networks, and renewable energy corridors under the national development plan.</p>
              <div className="h-2 w-full bg-emerald-800 rounded-full overflow-hidden">
                <div className="h-full bg-tertiary-fixed-dim w-3/4"></div>
              </div>
              <span className="text-xs text-emerald-200 mt-2 block">75% Project Completion Rate 2023</span>
            </div>
          </div>
          {/* Bento Item 3: Energy */}
          <div className="md:col-span-4 bg-white text-emerald-900 p-8 rounded-3xl flex flex-col justify-between border border-stone-200">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-4">bolt</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Energy Sector</h3>
              <p className="text-stone-600">Highest hydroelectric potential in the region. Incentives for solar and green hydrogen initiatives.</p>
            </div>
            <a className="font-bold flex items-center gap-2 text-emerald-700 group" href="#">
              Explore Power Grid
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          {/* Bento Item 4: Mining */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaRzPI4ub_1sv7s4DIqr6X2ZgqIcdh8SH6MJh_T-t0vmx3CSLzGIF9wjM9DO8UrKxK_ns02tMHh-pT9u4ejHRKgsehwJH7Y4Qc13R9wQn8dCV-AyAU9pb1OpmGHK0vKE25QBMKu-SHbj6cQV6sj9NI7xUJuIufHSoFwIWzVx1STb_7uR8H-H4TuA3F28hO9jY9c-LEfy_qbdToAz7-A5_vOHZ1Ybhl7BSkjVr69ibLd1xAtv5qRtJ5yarzaNaTFYxSN0h4-juO-sw"
              alt="Heavy machinery at a bauxite mining site"
              fill
              style={{objectFit: "cover"}}
              sizes="(min-width: 1024px) 66vw, 100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-serif font-bold mb-2">Natural Resources</h3>
              <p className="text-white/80 max-w-md">Rich deposits of bauxite, iron ore, and cobalt with new streamlined licensing frameworks for international partners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
