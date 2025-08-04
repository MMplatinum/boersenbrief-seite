import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BoersenbriefeSectionProps {
  language?: 'de' | 'en';
}

const BoersenbriefeSection = ({ language = 'de' }: BoersenbriefeSectionProps) => {
  const texts = language === 'de' ? {
    headline1: "Börsenbriefe,",
    headline2: "Anleger-Knowhow,",
    headline3: "und vieles mehr",
    description: "Erfolg an der Börse ist zeitraubend, stressig und den Markt schlagen schier unmöglich? Es geht auch anders! Lernen Sie jetzt MMplatinum kennen und finden Sie Ihren Weg zu mehr Rendite und weniger Stress.",
    ctaText: "Börsenbriefe entdecken"
  } : {
    headline1: "Stock Market Letters,",
    headline2: "Investor Know-how,",
    headline3: "and much more",
    description: "Success in the stock market is time-consuming, stressful and beating the market almost impossible? It can be different! Get to know MMplatinum now and find your way to more returns and less stress.",
    ctaText: "Discover Stock Market Letters"
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              ease: "easeOut"
            }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                {texts.headline1}
                <br />
                {texts.headline2}
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  {texts.headline3}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
              {texts.description}
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-normal text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden inline-flex items-center justify-center"
            >
              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
              
              {/* Button Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>{texts.ctaText}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Content - Tablet Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              delay: window.innerWidth >= 768 ? 0.2 : 0,
              ease: "easeOut"
            }}
            className="relative"
          >
            {/* Tablet Device */}
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Tablet Frame */}
              <div className="relative bg-black rounded-2xl p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-xl overflow-hidden aspect-[4/3] relative">
                  {/* Chart Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 relative">
                    
                    {/* Chart Area */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-sm">
                      {/* Chart Content */}
                      <div className="p-4 h-full">
                        {/* Chart Labels */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="text-sm font-medium text-gray-900">
                            <div>MMplatinum Premium SILVER</div>
                            <div className="text-gray-600">DAX P</div>
                          </div>
                        </div>
                        
                        {/* Chart Area */}
                        <div className="relative h-32 mb-2">
                          {/* Main Chart Line */}
                          <div className="absolute inset-0">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path
                                d="M0,80 L20,75 L40,60 L60,45 L80,30 L100,20"
                                stroke="#374151"
                                strokeWidth="3"
                                fill="none"
                              />
                              <path
                                d="M0,80 L20,75 L40,60 L60,45 L80,30 L100,20 L100,100 L0,100 Z"
                                fill="url(#chartGradient)"
                              />
                              <defs>
                                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#374151" stopOpacity="0.3"/>
                                  <stop offset="100%" stopColor="#374151" stopOpacity="0.1"/>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          
                          {/* Secondary Chart Line */}
                          <div className="absolute inset-0">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path
                                d="M0,85 L20,82 L40,78 L60,70 L80,65 L100,60"
                                stroke="#10B981"
                                strokeWidth="2"
                                fill="none"
                              />
                            </svg>
                          </div>
                        </div>
                        
                        {/* X-Axis Labels */}
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>2004</span>
                          <span>2007</span>
                          <span>2010</span>
                          <span>2013</span>
                          <span>2016</span>
                          <span>2019</span>
                          <span>2022</span>
                        </div>
                        
                        {/* Y-Axis Labels */}
                        <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-gray-500">
                          <span>5000</span>
                          <span>4000</span>
                          <span>3000</span>
                          <span>2000</span>
                          <span>1000</span>
                        </div>
                        
                        {/* MM Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-5">
                          <div className="text-6xl font-bold text-gray-400">MM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoersenbriefeSection; 