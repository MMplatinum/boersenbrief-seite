import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Play, ArrowRight, Star, Shield, Check } from 'lucide-react';

interface HeroProps {
  language?: 'de' | 'en';
}

const Hero = ({ language = 'de' }: HeroProps) => {
  const texts = language === 'de' ? {
    headline: "Ihr Börsenerfolg startet hier.",
    subtitle: "Verwirklichen Sie Ihre finanziellen Träume schneller als je zuvor - mit einer klaren Strategie, hohen Renditen und minimiertem Risiko.",
    ctaTradingJournal: "Trading Journal",
    ctaBoersenbriefe: "Börsenbriefe",
    ratingText: "GEPRÜFTE LESERBEWERTUNGEN",
    ratingBestnote: "BESTNOTE",
    ratingLettertest: "Lettertest ✔",
    ratingDate: "26.1.2024"
  } : {
    headline: "Your Stock Market Success Starts Here.",
    subtitle: "Realize your financial dreams faster than ever before - with a clear strategy, high returns and minimized risk.",
    ctaTradingJournal: "Trading Journal",
    ctaBoersenbriefe: "Stock Letters",
    ratingText: "VERIFIED READER REVIEWS",
    ratingBestnote: "BEST RATING",
    ratingLettertest: "Lettertest ✔",
    ratingDate: "26.1.2024"
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container pt-40 pb-24 lg:pt-48 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text and CTAs */}
          <div className="text-left">
            {/* Professional Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                ease: "easeOut"
              }} 
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight leading-none md:leading-tight"
            >
              <span className="block md:hidden">
                Ihr Börsenerfolg{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  startet hier.
                </span>
              </span>
              <span className="hidden md:block">
                Ihr Börsenerfolg{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  startet hier.
                </span>
              </span>
            </motion.h1>

            {/* Clean Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.2 : 0,
                ease: "easeOut"
              }} 
              className="text-lg md:text-xl text-gray-600 mb-8 font-light leading-snug md:leading-relaxed"
            >
              {texts.subtitle}
            </motion.p>

            {/* Professional CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.4 : 0,
                ease: "easeOut"
              }} 
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              {/* Trading Journal Button */}
              <a 
                href="#"
                className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-normal text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden inline-flex items-center justify-center"
              >
                {/* Animated Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
                
                {/* Button Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{texts.ctaTradingJournal}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Börsenbriefe Button */}
              <a 
                href="#"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-normal text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden inline-flex items-center justify-center"
              >
                {/* Animated Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
                
                {/* Button Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{texts.ctaBoersenbriefe}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>

            {/* Social Proof - Rating Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.6 : 0,
                ease: "easeOut"
              }} 
              className="flex items-center space-x-4"
            >
              {/* Profile Pictures */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white shadow-sm"></div>
                ))}
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Rating Badge */}
              <div className="bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-center">
                <div className="text-xs font-medium text-blue-800 mb-1">{texts.ratingText}</div>
                <div className="text-sm font-bold text-blue-900 mb-1">{texts.ratingBestnote}</div>
                <div className="flex justify-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Check key={i} size={12} className="text-yellow-500" />
                  ))}
                </div>
                <div className="text-xs text-blue-700">
                  {texts.ratingLettertest} {texts.ratingDate}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ 
              duration: window.innerWidth >= 768 ? 1.0 : 0,
              delay: window.innerWidth >= 768 ? 0.8 : 0,
              ease: "easeOut"
            }} 
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Strong Purple Glow Effect - Multiple Layers */}
              <div className="absolute -inset-2 md:-inset-8 bg-gradient-to-r from-purple-500/60 via-blue-500/50 to-purple-600/60 md:from-purple-500/40 md:via-blue-500/30 md:to-purple-600/40 rounded-full blur-xl md:blur-3xl opacity-90 md:opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -inset-1 md:-inset-6 bg-gradient-to-r from-purple-400/50 via-pink-400/40 to-purple-500/50 md:from-purple-400/30 md:via-pink-400/20 md:to-purple-500/30 rounded-full blur-lg md:blur-2xl opacity-95 md:opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 md:-inset-4 bg-gradient-to-r from-purple-600/70 via-purple-500/60 to-blue-600/50 md:from-purple-600/50 md:via-purple-500/40 md:to-blue-600/30 rounded-full blur-md md:blur-xl opacity-80 md:opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-2xl group-hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden w-64 h-64 md:w-80 md:h-80">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  {/* Placeholder for the professional man image */}
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mx-auto mb-2 flex items-center justify-center">
                        <div className="text-4xl">👨‍💼</div>
                      </div>
                      <div className="text-xs">Professioneller Trader</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;