import Image from "next/image";

const events = [
  {
    title: "Ngondo Festival",
    date: "December",
    location: "Douala",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Traditional celebration of the Sawa people on the banks of the Wouri River, featuring rituals, dances, and canoe races.",
  },
  {
    title: "Nguon Festival",
    date: "November",
    location: "Foumban",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Major Bamoun cultural festival with parades, royal dances, and craft exhibitions.",
  },
  {
    title: "Ecrans Noirs Festival",
    date: "July",
    location: "Yaoundé",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    description: "Central Africa's largest film festival, celebrating African audiovisual creation.",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest mb-4 block">Events</span>
          <h2 className="font-headline-lg text-headline-lg text-emerald-900 mb-4">Festivals & Celebrations</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Discover the major cultural and festive events that punctuate Cameroonian life throughout the year.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map((event, idx) => (
            <div key={event.title} className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: `${idx * 120}ms`}}>
              <Image src={event.image} alt={event.title} width={600} height={400} className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-emerald-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-xs text-tertiary mb-2">
                  <span>{event.date}</span>•<span>{event.location}</span>
                </div>
                <p className="text-on-surface-variant text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
