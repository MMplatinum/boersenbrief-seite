import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, ArrowRight, Sparkles, Euro, Gift, Zap, Shield } from 'lucide-react';

interface PricingProps {
  language?: 'de' | 'en';
}

const Pricing = ({ language = 'de' }: PricingProps) => {
  const texts = language === 'de' ? {
    subtitle: "Ein Plan für all deine Bedürfnisse – einmalig, lebenslang, professionell",
    title: "MMplatinum Trading Journal",
    withMentor: "mit KI-Trading-Mentor",
    normalPrice: "Normal €29/Monat",
    lifetime: "/Lifetime",
    savingsBadge: "Spare fast €300 pro Jahr",
    ctaMobileLine1: "Lifetime-Zugang sichern",
    ctaMobileLine2: "59€ einmalig",
    ctaDesktop: "Lifetime-Zugang sichern - 59€ einmalig",
    guarantee: "14-Tage Geld-Zurück-Garantie",
    instantAccess: "Sofortiger Zugang",
    whyNowTitle: "Warum jetzt zugreifen?",
    whyNowText: "Das Special Launch Offer ist zeitlich begrenzt. Sichere dir lebenslangen Zugang zu unserem professionellen Trading Journal und starte noch heute deine Trading-Transformation."
  } : {
    subtitle: "One plan for all your needs – one-time, lifetime, professional",
    title: "MMplatinum Trading Journal",
    withMentor: "with AI Trading Mentor",
    normalPrice: "Normally $29/month",
    lifetime: "/Lifetime",
    savingsBadge: "Save almost $300 per year",
    ctaMobileLine1: "Secure Lifetime Access",
    ctaMobileLine2: "$69 one-time",
    ctaDesktop: "Secure Lifetime Access - $69 one-time",
    guarantee: "14-Day Money-Back Guarantee",
    instantAccess: "Instant Access",
    whyNowTitle: "Why act now?",
    whyNowText: "The Special Launch Offer is limited time only. Secure lifetime access to our professional trading journal and start your trading transformation today."
  };

  const features = language === 'de' ? [
    { text: "24/7 KI-Trading-Mentor" },
    { text: "bis zu 20 Konten" },
    { text: "unbegrenzte Screenshots" },
    { text: "unbegrenzte Playbooks" },
    { text: "100% datenbasierte Einblicke" }
  ] : [
    { text: "24/7 AI Trading Mentor" },
    { text: "Up to 20 accounts" },
    { text: "Unlimited screenshots" },
    { text: "Unlimited playbooks" },
    { text: "100% data-driven insights" }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Professional Header */}
        <motion.div
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight leading-tight">
            Special Launch
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.2 : 0,
            ease: "easeOut"
          }}
          className="relative max-w-lg mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0 }}
            className="relative group"
          >
            {/* Premium Pricing Card */}
            <div className="relative bg-white/95 backdrop-blur-sm border-2 border-purple-500 rounded-2xl p-6 shadow-2xl hover:shadow-white/10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-5 pt-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 tracking-tight leading-tight">
                    {texts.title}
                    <br />
                    <span className="text-base text-gray-600 font-light">{texts.withMentor}</span>
                  </h3>
                  
                  {/* Price Comparison */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-lg text-gray-600 line-through font-medium">{texts.normalPrice}</span>
                  </div>
                  
                  {/* Main Price */}
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl md:text-5xl font-light text-gray-900">
                      {language === 'de' ? '59€' : '$69'}
                    </span>
                    <span className="text-gray-600 font-light text-lg ml-2">{texts.lifetime}</span>
                  </div>
                  
                  {/* Savings Badge */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-4 py-2 inline-block mb-4">
                    <div className="flex items-center space-x-2">
                      <Gift size={14} className="text-green-600" />
                      <span className="text-green-700 font-semibold text-sm">{texts.savingsBadge}</span>
                    </div>
                  </div>
                </div>

                {/* Premium CTA Button */}
                <div className="mb-8">
                  <a 
                    href={language === 'en' 
                      ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden flex items-center justify-center"
                  >
                    {/* Animated Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
                    
                    {/* Button Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    
                    <span className="relative z-10 flex items-center justify-center space-x-2 whitespace-nowrap">
                      {/* Mobile Version - Zwei Zeilen */}
                      <span className="flex flex-col items-center text-center md:hidden">
                        <span className="text-sm font-normal mb-1">{texts.ctaMobileLine1}</span>
                        <span className="flex items-center space-x-1 font-semibold">
                          <span>{texts.ctaMobileLine2}</span>
                        </span>
                      </span>
                      
                      {/* Desktop Version - Verkürzt */}
                      <span className="hidden md:flex items-center space-x-2">
                        <span>{texts.ctaDesktop}</span>
                      </span>
                      
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>

                {/* Premium Features List */}
                <ul className="space-y-3 mb-6 max-w-xs mx-auto">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 1, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0 }}
                      className="group flex items-start space-x-2"
                    >
                      {/* Premium Check Icon */}
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Check size={18} className="text-white drop-shadow" />
                        </div>
                        {/* Icon Glow */}
                        <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300"></div>
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-gray-700 font-light text-base group-hover:text-gray-900 transition-colors duration-300">{feature.text}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Trust Elements */}
                <div className="flex items-center justify-center space-x-6 text-center text-gray-600 font-light">
                  <div className="flex items-center space-x-2">
                    <Shield size={14} className="text-green-600" />
                    <span className="text-xs">{texts.guarantee}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap size={14} className="text-blue-600" />
                    <span className="text-xs">{texts.instantAccess}</span>
                  </div>
                </div>
              </div>

              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Trust Section */}
        <motion.div
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.4 : 0,
            ease: "easeOut"
          }}
          className="text-center mt-20"
        >
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-3 space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">{texts.whyNowTitle}</h3>
            </div>
            <p className="text-gray-600 font-light leading-relaxed text-base">
              {texts.whyNowText.split('Special Launch Offer').map((part, index) => 
                index === 1 ? (
                  <span key={index}>
                    <span className="font-semibold text-blue-600">Special Launch Offer</span>
                    {part}
                  </span>
                ) : part
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
