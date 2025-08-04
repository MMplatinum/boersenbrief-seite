import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap, Sparkles, Crown, Clock, Gift, Shield } from 'lucide-react';

interface FinalCTAProps {
  language?: 'de' | 'en';
}

const FinalCTA = ({ language = 'de' }: FinalCTAProps) => {
  const texts = language === 'de' ? {
    mainHeadline: "Jetzt Chance ergreifen",
    subtitle: "Das Special Launch Offer endet schon bald - Jetzt noch Lifetime-Zugang sichern",
    ctaMobileLine1: "Lifetime-Zugang für nur 59€",
    ctaMobileLine2: "sichern - statt 348€/Jahr",
    ctaDesktop: "Lifetime-Zugang für nur 59€ sichern - statt 348€/Jahr",
    guarantee: "14-Tage Geld-zurück-Garantie",
    instantAccess: "Sofortiger Zugang",
    oneTimePayment: "Einmalige Zahlung"
  } : {
    mainHeadline: "Seize the Opportunity Now",
    subtitle: "The Special Launch Offer ends soon - Secure lifetime access now",
    ctaMobileLine1: "Secure lifetime access for only $69",
    ctaMobileLine2: "instead of $348/year",
    ctaDesktop: "Secure lifetime access for only $69 - instead of $348/year",
    guarantee: "14-day money-back guarantee",
    instantAccess: "Instant access",
    oneTimePayment: "One-time payment"
  };

  const urgencyFeatures = language === 'de' ? [
    {
      icon: Star,
      text: "Über 1000 zufriedene Trader",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      text: "14-Tage Geld-zurück-Garantie",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      text: "Sofortiger Zugang nach Kauf",
      gradient: "from-blue-500 to-purple-500"
    }
  ] : [
    {
      icon: Star,
      text: "Over 1000 satisfied traders",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      text: "14-day money-back guarantee",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      text: "Instant access after purchase",
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-red-50/80 via-orange-50/60 to-yellow-50/40 relative overflow-hidden">
      {/* Dramatic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-r from-red-50/50 to-orange-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Urgent Header */}
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              {texts.mainHeadline}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Urgency Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {urgencyFeatures.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 }}
              className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                {/* Premium Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${point.gradient} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <point.icon size={28} className="text-white relative z-10" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${point.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125 mx-auto`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                  {point.text}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {/* Add the description here */}
                </p>
              </div>
              
              {/* Premium Border Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Premium Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${point.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r ${point.gradient} rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.6 : 0,
            delay: window.innerWidth >= 768 ? 0.2 : 0,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <div className="relative mb-8">
            <a 
              href={language === 'en' 
                ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden inline-flex items-center"
            >
              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
              
              {/* Button Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center justify-center space-x-3 whitespace-nowrap">
                {/* Mobile Version - Zwei Zeilen */}
                <span className="flex flex-col items-center text-center sm:hidden">
                  <span className="text-base font-normal mb-1">{texts.ctaMobileLine1}</span>
                  <span className="text-base font-medium">{texts.ctaMobileLine2}</span>
                </span>
                
                {/* Desktop Version - Eine Zeile */}
                <span className="hidden sm:flex items-center space-x-3">
                  <span>{texts.ctaDesktop}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
                
                {/* Mobile Arrow */}
                <ArrowRight size={20} className="sm:hidden group-hover:translate-x-2 transition-transform mt-1" />
              </span>
            </a>
          </div>
            
          {/* Premium Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield size={18} className="text-green-600" />
              <span className="text-sm font-light">{texts.guarantee}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={18} className="text-yellow-600" />
              <span className="text-sm font-light">{texts.instantAccess}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift size={18} className="text-blue-600" />
              <span className="text-sm font-light">{texts.oneTimePayment}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA; 