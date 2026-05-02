
import TopAppBar from "../components/TopAppBar";
import HeroSection from "../components/HeroSection";
import AboutCameroonSection from "../components/AboutCameroonSection";
import PracticalInfoSection from "../components/PracticalInfoSection";
import InvestmentSection from "../components/InvestmentSection";
import CultureSection from "../components/CultureSection";
import GallerySection from "../components/GallerySection";
import EventsSection from "../components/EventsSection";
import ContactSection from "../components/ContactSection";
import MapLinksSection from "../components/MapLinksSection";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <TopAppBar />
      <main className="pt-20">
        <HeroSection />
        <AboutCameroonSection />
        <section id="travel-essentials">
          <PracticalInfoSection />
        </section>
        <div className="w-full h-12 flex items-center justify-center opacity-20 overflow-hidden pointer-events-none">
          <div className="ndop-pattern w-full h-full"></div>
        </div>
        <section id="investment-portal">
          <InvestmentSection />
        </section>
        <EventsSection />
        <section id="culture">
          <CultureSection />
        </section>
        <GallerySection />
        <MapLinksSection />
        <section id="practical-info">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
