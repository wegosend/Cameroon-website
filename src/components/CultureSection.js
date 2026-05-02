import Image from "next/image";

export default function CultureSection() {
  return (
    <section className="py-20 bg-surface-container-high relative overflow-hidden animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Culture</span>
          <h2 className="font-headline-lg text-headline-lg text-emerald-900 mb-4">A Mosaic of Traditions</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">From the vibrant rhythms of Makossa to the colorful Ndop fabrics, Cameroon’s cultural diversity is celebrated in every region. Discover festivals, music, cuisine, and ancestral arts that make Cameroon unique.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Makossa dancers" width={600} height={400} className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-emerald-900 mb-2">Music & Dance</h3>
              <p className="text-on-surface-variant">Experience the energy of Makossa, Bikutsi, and traditional dances at local festivals and ceremonies.</p>
            </div>
          </div>
          <div className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
            <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Ndop fabric" width={600} height={400} className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-emerald-900 mb-2">Art & Textiles</h3>
              <p className="text-on-surface-variant">Admire the artistry of Ndop, Bamileke beadwork, and wood carvings in markets and museums.</p>
            </div>
          </div>
          <div className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
            <Image src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" alt="Cameroonian cuisine" width={600} height={400} className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-emerald-900 mb-2">Cuisine</h3>
              <p className="text-on-surface-variant">Taste iconic dishes like Ndolé, Koki, and grilled fish, reflecting the country’s rich culinary heritage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
