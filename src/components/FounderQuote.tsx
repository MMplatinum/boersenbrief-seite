import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface FounderQuoteProps {
  language?: 'de' | 'en';
}

const FounderQuote = ({ language = 'de' }: FounderQuoteProps) => {
  const texts = language === 'de' ? {
    quote: "Selbst die beste Trading-Strategie bringt dir nichts, wenn du nicht diszipliniert genug bist, sie umzusetzen. Eine Strategie ist nur ein Werkzeug – DU bist der Schlüssel zum Erfolg. Genau deshalb ist dieses Trading Journal auf dich zugeschnitten, nicht auf die Strategie.",
    highlight: "DU bist der Schlüssel zum Erfolg.",
    founder: "Gründer von"
  } : {
    quote: "Even the best trading strategy won't help you unless you're disciplined enough to follow it. A strategy is just a tool – YOU are the key to success. That's why this trading journal is built around you, not around the strategy.",
    highlight: "YOU are the key to success.",
    founder: "Founder of"
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50/60 via-white to-blue-50/30 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container max-w-6xl">
        <motion.div
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-10 md:p-14 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 w-10 h-10 text-blue-500/25">
            <Quote size={40} />
          </div>

          {/* Quote Content */}
          <div className="pt-8">
            <blockquote className="text-lg md:text-xl font-light text-gray-800 leading-relaxed mb-10 pl-6 md:pl-14">
              {language === 'de' ? (
                <>
                  Selbst die beste Trading-Strategie bringt dir nichts, wenn du nicht diszipliniert genug bist, sie umzusetzen. Eine Strategie ist nur ein Werkzeug – 
                  <span className="font-semibold text-gray-900"> DU bist der Schlüssel zum Erfolg.</span> Genau 
                  deshalb ist dieses Trading Journal auf dich zugeschnitten, nicht auf die Strategie.
                </>
              ) : (
                <>
                  Even the best trading strategy won't help you unless you're disciplined enough to follow it. A strategy is just a tool – 
                  <span className="font-semibold text-gray-900">YOU are the key to success.</span> That's why this trading journal is built around you, not around the strategy.
                </>
              )}
            </blockquote>

            {/* Bottom Section with Founder Info and Siegel */}
            <div className="flex items-center justify-between pl-6 md:pl-14">
              {/* Founder Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/quote-ich.webp" 
                  alt="Michael Müller - Gründer von MMplatinum" 
                  className="h-20 w-auto"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Michael Müller
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {texts.founder} <span className="font-semibold text-blue-600">MMplatinum</span>
                  </p>
                </div>
              </div>

              {/* Siegel */}
              <motion.div
                initial={window.innerWidth >= 768 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? 0.3 : 0,
                  ease: "easeOut"
                }}
                className="flex-shrink-0 hidden md:block"
              >
                <img 
                  src="/images/siegel.webp" 
                  alt="Vertrauenssiegel" 
                  className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-2">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote; 