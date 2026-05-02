import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Traditional Cameroonian dance",
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Colorful Ndop fabrics",
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    alt: "Mountains of Cameroon",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Kribi beach",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Local market in Cameroon",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    alt: "Cameroonian wildlife",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Gallery</span>
          <h2 className="font-headline-lg text-headline-lg text-emerald-900 mb-4">Cameroon's Beauty</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Explore the diversity of landscapes, cultures, and daily life through this selection of photos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div key={img.src} className="overflow-hidden rounded-3xl shadow-lg group hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
              <Image src={img.src} alt={img.alt} width={600} height={400} className="w-full h-64 object-cover group-hover:brightness-90 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
