import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import InstrumentsSlider from '../components/InstrumentsSlider';
import Features from '../components/Features';
import JournalComparison from '../components/JournalComparison';
import ExpertQuotes from '../components/ExpertQuotes';
import MockupBundle from '../components/MockupBundle';
import TargetAudience from '../components/TargetAudience';
import FounderQuote from '../components/FounderQuote';
import TopFeatures from '../components/TopFeatures';
import AITradingMentor from '../components/AITradingMentor';
import ProductShowcase from '../components/ProductShowcase';
import SyncEAShowcase from '../components/SyncEAShowcase';
import Testimonials from '../components/Testimonials';
import ResultsShowcase from '../components/ResultsShowcase';
import SimplicityCTA from '../components/SimplicityCTA';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import MoneyBackGuarantee from '../components/MoneyBackGuarantee';
import AboutFounder from '../components/AboutFounder';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import SocialProofWidget from '../components/SocialProofWidget';

const Index = () => {
  useEffect(() => {
    document.title = "MMplatinum Trading Journal: Analysieren & Erfolgreicher Traden";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      <Hero />
      <InstrumentsSlider language="de" />
      <Features />
      <JournalComparison />
      <ExpertQuotes language="de" />
      <MockupBundle />
      <TargetAudience />
      <FounderQuote />
      <TopFeatures />
      <AITradingMentor />
      <ProductShowcase />
      <SyncEAShowcase />
      <Testimonials />
      <ResultsShowcase />
      <SimplicityCTA />
      <WhyChooseUs />
      <Pricing />
      <MoneyBackGuarantee />
      <AboutFounder />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SocialProofWidget />
    </motion.div>
  );
};

export default Index;
