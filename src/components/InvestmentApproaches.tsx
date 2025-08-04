import React from 'react';
import { motion } from 'framer-motion';

interface InvestmentApproachesProps {
  language?: 'de' | 'en';
}

const InvestmentApproaches = ({ language = 'de' }: InvestmentApproachesProps) => {
  const texts = language === 'de' ? {
    headline: "Bewährte Investmentansätze für Ihren Erfolg",
    name: "Michael Müller",
    role: "Gründer von MMplatinum",
    paragraph1: "Hallo, mein Name ist Michael Müller, der Gründer von MMplatinum. Mit über 20 Jahren an den Finanzmärkten, davon 15 Jahre im Wealth Management und 8 Jahre in Führungspositionen, habe ich Ansätze zum Erfolg entwickelt, die auch Ihnen helfen können.",
    paragraph2: "Diese Ansätze sind so konzipiert, dass sie typische Privatanleger-Fehler vermeiden, leicht verständlich sind und für Anleger aller Erfahrungsstufen geeignet sind. Das Ergebnis: Mehr Rendite und geringere Schwankungen, damit Sie Ihre finanziellen Ziele schneller, sicherer und vor allem stressfreier erreichen.",
    quote: "Erfolgreiches Anlegen bedeutet nicht, die Zukunft treffsicher vorherzusagen. Es geht vielmehr darum, die bestmöglichen Gewinnwahrscheinlichkeiten konsequent zu nutzen."
  } : {
    headline: "Proven Investment Approaches for Your Success",
    name: "Michael Müller",
    role: "Founder of MMplatinum",
    paragraph1: "Hello, my name is Michael Müller, the founder of MMplatinum. With over 20 years in the financial markets, including 15 years in wealth management and 8 years in leadership roles, I have developed approaches to success that can help you too.",
    paragraph2: "These approaches are designed to avoid typical private investor mistakes, are easy to understand, and suitable for investors of all experience levels. The result: More returns and lower fluctuations, so you can achieve your financial goals faster, more securely, and above all, more stress-free.",
    quote: "Successful investing does not mean accurately predicting the future. It is much more about consistently utilizing the best possible probabilities of winning."
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            {texts.headline}
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.2 : 0,
            ease: "easeOut"
          }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.4 : 0,
                ease: "easeOut"
              }}
              className="relative"
            >
              {/* Professional Portrait Placeholder */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-[4/5] max-w-sm mx-auto lg:max-w-none overflow-hidden">
                {/* Image Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-700"></div>
                
                {/* Professional Man Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">MM</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.6 : 0,
                ease: "easeOut"
              }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                  {texts.name}
                </h3>
                <p className="text-lg text-gray-600 font-light">
                  {texts.role}
                </p>
              </div>

              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p className="text-lg">
                  {texts.paragraph1}
                </p>
                <p className="text-lg">
                  {texts.paragraph2}
                </p>
                
                {/* Quote within the same container */}
                <div className="relative mt-8 pt-6 border-t border-gray-200">
                  {/* Stylized Quotation Marks */}
                  <div className="absolute top-6 left-0 text-4xl md:text-5xl text-gray-300 font-serif">
                    "
                  </div>
                  <div className="absolute bottom-0 right-0 text-4xl md:text-5xl text-gray-300 font-serif">
                    "
                  </div>

                  {/* Quote Text */}
                  <div className="relative z-10">
                    <blockquote className="text-lg md:text-xl font-light text-gray-700 leading-relaxed italic">
                      {texts.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentApproaches; 