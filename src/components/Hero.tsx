import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Play, ArrowRight, Star, Shield } from 'lucide-react';

interface HeroProps {
  language?: 'de' | 'en';
}

const Hero = ({ language = 'de' }: HeroProps) => {
  const texts = language === 'de' ? {
    headline: "Schluss mit Drawdown-Frust - mit diesem AI-Powered Tool zum profitablen Trader",
    subtitle: "Das MMplatinum Trading Journal mit KI-Trading-Mentor und Auto-Sync bringt dich endlich ans Ziel.",
    aiMentor: "Mit integriertem KI-Trading-Mentor und optionalem Broker-Auto-Sync",
    ctaMain: "Nur kurze Zeit:",
    ctaStrike: "348€/Jahr",
    ctaPrice: "Lifetime-Zugang für nur 59€",
    guarantee: "Ohne Risiko dank 14-Tage Geld-zurück-Garantie",
    guaranteeMobile: "14-Tage Geld-zurück-Garantie"
  } : {
    headline: "End Drawdown Frustration - this Tool Makes You a Profitable Trader",
    subtitle: "MMplatinum Trading Journal – with AI Trading Mentor and auto-sync – finally gets you to your goal.",
    aiMentor: "With integrated AI Trading Mentor and optional Broker Auto-Sync",
    ctaMain: "Limited time offer:",
    ctaStrike: "$348/year",
    ctaPrice: "Lifetime access for only $69",
    guarantee: "Risk-free with 14-day money-back guarantee",
    guaranteeMobile: "14-day money-back guarantee"
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="text-center">
          {/* Pre-Headline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              ease: "easeOut"
            }} 
            className="mb-6 md:mb-8 flex justify-center"
          >
            <div className="bg-gradient-to-r from-purple-50/70 to-blue-50/70 border border-purple-200/30 rounded-full px-2 md:px-4 py-1.5 md:py-2 shadow-sm backdrop-blur-sm">
              <p className="text-purple-600 font-medium text-center text-xs md:text-sm">
                {language === 'de' ? 'Für Trader, die nachhaltig profitabel werden möchten' : 'For traders who want to become consistently profitable'}
              </p>
            </div>
          </motion.div>

          {/* Professional Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              ease: "easeOut"
            }} 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 tracking-tight leading-none md:leading-tight"
          >
            <span className="block md:hidden">
              {language === 'de' ? (
                <>
                  Schluss mit Drawdown-Frust -
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                    mit diesem AI-Powered Tool zum profitablen Trader
                  </span>
                </>
              ) : (
                <>
                  End Drawdown Frustration -
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                    This AI-Powered Tool Makes You<br />
                    a Profitable Trader
                  </span>
                </>
              )}
            </span>
            <span className="hidden md:block">
              {language === 'de' ? (
                <>
                  Schluss mit Drawdown-Frust -
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                    mit diesem AI-Powered Tool zum profitablen Trader
                  </span>
                </>
              ) : (
                <>
                  End Drawdown Frustration -
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                    This AI-Powered Tool Makes You<br />
                    a Profitable Trader
                  </span>
                </>
              )}
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
            className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto font-light leading-snug md:leading-relaxed"
          >
            <span className="block md:hidden">{texts.subtitle}</span>
            <span className="hidden md:inline">
              {language === 'de' ? (
                <>
                  Das MMplatinum Trading Journal mit KI-Trading-Mentor und Auto-Sync<br />
                  bringt dich endlich ans Ziel.
                </>
              ) : (
                <>
                  MMplatinum Trading Journal – with AI Trading Mentor and auto-sync –<br />
                  finally gets you to your goal.
                </>
              )}
            </span>
          </motion.p>



          {/* Professional CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              delay: window.innerWidth >= 768 ? 0.6 : 0,
              ease: "easeOut"
            }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2"
          >
            <a 
              href={language === 'en' 
                ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3.5 md:px-9 md:py-4.5 rounded-xl font-medium text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden inline-flex items-center"
            >
              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
              
              {/* Button Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              {/* Mobile Version - Two Lines */}
              <span className="relative z-10 flex flex-col items-center text-center md:hidden">
                <span className="text-sm font-normal mb-1">
                  {texts.ctaMain} <span className="line-through opacity-75">{texts.ctaStrike}</span>
                </span>
                <span className="flex items-center space-x-2 font-semibold">
                  <span>{texts.ctaPrice}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
              
              {/* Desktop Version - Single Line */}
              <span className="relative z-10 hidden md:flex items-center space-x-2 whitespace-nowrap">
                <span>{texts.ctaMain} <span className="line-through opacity-75 mr-2">{texts.ctaStrike}</span> {texts.ctaPrice}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              delay: window.innerWidth >= 768 ? 0.8 : 0,
              ease: "easeOut"
            }} 
            className="text-gray-500 mb-16 md:mb-32 text-base"
          >
            {/* Mobile Version - Compact with icon */}
            <span className="md:hidden flex items-center justify-center space-x-2">
              <Shield size={16} className="text-green-600" />
              <span>{texts.guaranteeMobile}</span>
            </span>
            
            {/* Desktop Version - With icon */}
            <span className="hidden md:flex items-center justify-center space-x-2">
              <Shield size={16} className="text-green-600" />
              <span>{texts.guarantee}</span>
            </span>
          </motion.p>

          {/* Clean Product Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ 
              duration: window.innerWidth >= 768 ? 1.0 : 0,
              delay: window.innerWidth >= 768 ? 1.0 : 0,
              ease: "easeOut"
            }} 
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative group">
              {/* Strong Purple Glow Effect - Multiple Layers */}
              {/* Mobile: Very compact but intense glow */}
              <div className="absolute -inset-2 md:-inset-8 bg-gradient-to-r from-purple-500/60 via-blue-500/50 to-purple-600/60 md:from-purple-500/40 md:via-blue-500/30 md:to-purple-600/40 rounded-3xl blur-xl md:blur-3xl opacity-90 md:opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -inset-1 md:-inset-6 bg-gradient-to-r from-purple-400/50 via-pink-400/40 to-purple-500/50 md:from-purple-400/30 md:via-pink-400/20 md:to-purple-500/30 rounded-3xl blur-lg md:blur-2xl opacity-95 md:opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 md:-inset-4 bg-gradient-to-r from-purple-600/70 via-purple-500/60 to-blue-600/50 md:from-purple-600/50 md:via-purple-500/40 md:to-blue-600/30 rounded-3xl blur-md md:blur-xl opacity-80 md:opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-0 rounded-2xl shadow-2xl group-hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src="/images/dashboarddark.webp" 
                      alt="MMplatinum Trading Journal Dashboard - Das professionelle Trading Journal für erfolgreiche Trader" 
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
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