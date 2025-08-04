import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import BoersenbriefeSection from '../components/BoersenbriefeSection';
import InvestmentApproaches from '../components/InvestmentApproaches';
import InvestmentHighlights from '../components/InvestmentHighlights';
import ServicesSection from '../components/ServicesSection';
import CustomerTestimonials from '../components/CustomerTestimonials';
import EmotionsSection from '../components/EmotionsSection';
import MMplatinumBenefits from '../components/MMplatinumBenefits';
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

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Statistics />
        <BoersenbriefeSection />
        <InvestmentApproaches />
        <InvestmentHighlights />
        <ServicesSection />
        <CustomerTestimonials />
        <EmotionsSection />
        <MMplatinumBenefits />
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
      </div>
    </QueryClientProvider>
  );
};

export default Index;
