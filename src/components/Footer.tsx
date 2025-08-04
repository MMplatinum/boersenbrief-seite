import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  language?: 'de' | 'en';
}

const Footer = ({ language = 'de' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const texts = language === 'de' ? {
    description: "Das professionelle Trading Journal für nachhaltig profitable Trader",
    product: "Produkt",
    features: "Features",
    pricing: "Preise",
    testimonials: "Testimonials",
    support: "Support",
    faq: "FAQ",
    contact: "Kontakt",
    partners: "Partner werden",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    imprint: "Impressum",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
    copyright: `© ${currentYear} MMplatinum. Alle Rechte vorbehalten.`,
    // riskWarning removed per requirement
  } : {
    description: "The professional trading journal for sustainably profitable traders",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    testimonials: "Testimonials",
    support: "Support",
    faq: "FAQ",
    contact: "Contact",
    partners: "Become Partner",
    legal: "Legal",
    privacy: "Privacy",
    imprint: "Imprint",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
    copyright: `© ${currentYear} MMplatinum. All rights reserved.`,
    // riskWarning removed per requirement
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="/images/logo.png" 
              alt="MMplatinum Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </div>
          
          <p className="text-xl text-white/80 font-light mb-8 max-w-2xl mx-auto">
            {texts.description}
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
                  initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: window.innerWidth >= 768 ? 0.6 : 0,
          delay: window.innerWidth >= 768 ? 0.2 : 0,
          ease: "easeOut"
        }}
          className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-24 xl:gap-32 mb-12 text-center lg:text-left"
        >
          <div>
            <h4 className="text-white font-medium mb-4">{texts.product}</h4>
            <ul className="space-y-3 text-white/60 font-light">
              <li><a href="#top-features" className="hover:text-white transition-colors">{texts.features}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{texts.pricing}</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">{texts.testimonials}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">{texts.support}</h4>
            <ul className="space-y-3 text-white/60 font-light">
              <li><a href="#faq" className="hover:text-white transition-colors">{texts.faq}</a></li>
              <li><a href="mailto:info@mmplatinum.de" className="hover:text-white transition-colors">{texts.contact}</a></li>
              <li><a href={language === 'de' ? "/partners" : "/en/partners"} className="hover:text-white transition-colors">{texts.partners}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">{texts.legal}</h4>
            <ul className="space-y-3 text-white/60 font-light">
              <li><a href="/privacy" className="hover:text-white transition-colors">{texts.privacy}</a></li>
              <li><a href="/imprint" className="hover:text-white transition-colors">{texts.imprint}</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">{texts.terms}</a></li>
              <li><a href="/disclaimer" className="hover:text-white transition-colors">{texts.disclaimer}</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/60 font-light">
            {texts.copyright}
          </p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
