
import TopAppBar from "../components/TopAppBar";
import HeroSection from "../components/HeroSection";
import PracticalInfoSection from "../components/PracticalInfoSection";
import InvestmentSection from "../components/InvestmentSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <TopAppBar />
      <main className="pt-20">
        <HeroSection />
        <PracticalInfoSection />
        <div className="w-full h-12 flex items-center justify-center opacity-20 overflow-hidden pointer-events-none">
          <div className="ndop-pattern w-full h-full"></div>
        </div>
        <InvestmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
