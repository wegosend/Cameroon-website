import Image from "next/image";

export default function AboutCameroonSection() {
  return (
    <section id="about-cameroon" className="py-24 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 w-full animate-fade-in-up">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">About</span>
          <h2 className="font-headline-lg text-headline-lg text-emerald-900 mb-6">Cameroon at a Glance</h2>
          <p className="text-on-surface-variant font-body-lg mb-8">Nicknamed “Africa in miniature,” Cameroon offers a unique diversity of landscapes, cultures, and traditions. From Atlantic beaches to northern mountains and equatorial forests, the country captivates with its natural and human richness.</p>
          <ul className="grid grid-cols-2 gap-6 mb-8">
            <li className="bg-primary-container text-on-primary-container rounded-xl p-4 text-center">
              <span className="block text-2xl font-bold">28M</span>
              <span className="text-xs uppercase tracking-wider">Inhabitants</span>
            </li>
            <li className="bg-secondary-container text-on-secondary-container rounded-xl p-4 text-center">
              <span className="block text-2xl font-bold">250+</span>
              <span className="text-xs uppercase tracking-wider">Languages</span>
            </li>
            <li className="bg-tertiary-container text-on-tertiary-container rounded-xl p-4 text-center">
              <span className="block text-2xl font-bold">475,000</span>
              <span className="text-xs uppercase tracking-wider">km²</span>
            </li>
            <li className="bg-emerald-900 text-white rounded-xl p-4 text-center">
              <span className="block text-2xl font-bold">10</span>
              <span className="text-xs uppercase tracking-wider">Regions</span>
            </li>
          </ul>
          <p className="text-on-surface-variant font-body-md">Capital: <span className="font-bold">Yaoundé</span> | Official languages: <span className="font-bold">French</span> & <span className="font-bold">English</span></p>
        </div>
        <div className="md:w-1/2 w-full animate-fade-in-up flex justify-center">
          <Image src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" alt="Mountains of Cameroon" width={500} height={400} className="rounded-3xl shadow-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}
