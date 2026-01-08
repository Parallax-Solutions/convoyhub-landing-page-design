import '../i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import DiscoverSection from '@/components/DiscoverSection';
import SafetySection from '@/components/SafetySection';
import ReputationSection from '@/components/ReputationSection';
import ComingSoon from '@/components/ComingSoon';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <DiscoverSection />
        <SafetySection />
        <ReputationSection />
        <ComingSoon />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
