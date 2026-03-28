import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueMetrics from './components/ValueMetrics';
import FeatureSuite from './components/FeatureSuite';
import WhyUs from './components/WhyUs';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen font-inter">
      <Navbar />
      <HeroSection />
      <ValueMetrics />
      <FeatureSuite />
      <WhyUs />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
