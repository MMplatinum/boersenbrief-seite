import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from "../components/Hero";
import InstrumentsSlider from '../components/InstrumentsSlider';
import Features from "../components/Features";
import JournalComparisonEN from "../components/JournalComparisonEN";
import ExpertQuotes from "../components/ExpertQuotes";
import MockupBundle from '../components/MockupBundle';
import TargetAudience from '../components/TargetAudience';
import FounderQuote from '../components/FounderQuote';
import TopFeatures from '../components/TopFeatures';
import AITradingMentor from '../components/AITradingMentor';
import ProductShowcase from "../components/ProductShowcase";
import SyncEAShowcase from '../components/SyncEAShowcase';
import Testimonials from '../components/Testimonials';
import ResultsShowcase from '../components/ResultsShowcase';
import SimplicityCTA from "../components/SimplicityCTA";
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from "../components/Pricing";
import MoneyBackGuarantee from "../components/MoneyBackGuarantee";
import AboutFounder from '../components/AboutFounder';
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import SocialProofWidget from '../components/SocialProofWidget';

const IndexEN = () => {
  useEffect(() => {
    document.title = "MMplatinum Trading Journal: Analyze & Trade Successfully";
    
    // Meta description for English page
    const englishDescription = "The ultimate Trading Journal for professional traders. Improve your trading performance with our professional Trading Journal. With Lifetime Access.";
    
    let metaElement = document.querySelector('meta[name="description"]');
    
    if (metaElement) {
      // Ensure it's an HTMLMetaElement before setting .content
      if (metaElement instanceof HTMLMetaElement) {
        metaElement.content = englishDescription;
      } else {
        // Fallback if it's some other element (should not happen for meta[name='description'])
        metaElement.setAttribute('content', englishDescription);
      }
    } else {
      // If it doesn't exist, create it
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = englishDescription;
      document.head.appendChild(newMetaDesc);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      <Navigation language="en" />
      <Hero language="en" />
      <InstrumentsSlider language="en" />
      <Features language="en" />
      <JournalComparisonEN />
      <ExpertQuotes language="en" />
      <MockupBundle />
      <TargetAudience language="en" />
      <FounderQuote language="en" />
      <TopFeatures language="en" />
      <AITradingMentor language="en" />
      <ProductShowcase language="en" />
      <SyncEAShowcase language="en" />
      <Testimonials language="en" />
      <ResultsShowcase language="en" />
      <SimplicityCTA language="en" />
      <WhyChooseUs language="en" />
      <Pricing language="en" />
      <MoneyBackGuarantee language="en" />
      <AboutFounder language="en" />
      <FAQ language="en" />
      <FinalCTA language="en" />
      <Footer language="en" />
      <SocialProofWidget language="en" />
    </motion.div>
  );
};

export default IndexEN; 