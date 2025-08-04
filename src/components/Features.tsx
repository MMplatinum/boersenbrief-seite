import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, TrendingUp, ArrowRight, Sparkles, Zap, Quote } from 'lucide-react';

interface FeaturesProps {
  language?: 'de' | 'en';
}

const Features = ({ language = 'de' }: FeaturesProps) => {
  const texts = language === 'de' ? {
    headline1: "Die 3 größten Hebel für deinen",
    headline2: "Trading-Erfolg",
    subtitle: "- nur durch ein professionelles Trading Journal realisierbar -",
    cta: "Diese 3 Hebel nutzen - Lifetime-Zugang sichern",
    ctaMobileLine1: "Diese 3 Hebel nutzen",
    ctaMobileLine2: "Lifetime-Zugang sichern",
    guarantee: "14-Tage Geld-Zurück-Garantie",
    testimonial: "Ein unverzichtbares Tool für jeden Trader, der es ernst meint. Meine Ergebnisse haben einen richtigen Schub nach vorn gemacht und ich bin auf dem besten Weg zum Vollzeit-Trader.",
    testimonialName: "Lukas R.",
    testimonialLocation: "München"
  } : {
    headline1: "The 3 Most Powerful Levers for Your",
    headline2: "Trading Success", 
    subtitle: "- only achievable through a professional trading journal -",
    cta: "Use These 3 Levers - Secure Lifetime Access",
    ctaMobileLine1: "Use These 3 Levers",
    ctaMobileLine2: "Secure Lifetime Access",
    guarantee: "14-Day Money-Back Guarantee",
    testimonial: "An indispensable tool for every serious trader. My results have really taken off, and I'm well on my way to becoming a full-time trader.",
    testimonialName: "Lukas R.",
    testimonialLocation: "Munich"
  };

  const features = language === 'de' ? [
    {
      icon: Target,
      title: "Absolute Klarheit & Selbstvertrauen",
      description: "Fokussiere dich nur noch auf die Elemente, die dich wirklich erfolgreich machen.",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      icon: Shield,
      title: "Nachhaltige Disziplin",
      description: "Folge deinen Regeln müheloser, ohne emotionsbedingte Abweichungen.",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      icon: TrendingUp,
      title: "Kontinuierliche Performance-Steigerung",
      description: "Glätte und steigere nachhaltig deine Equity-Kurve für mehr Ruhe und Sicherheit.",
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    }
  ] : [
    {
      icon: Target,
      title: "Absolute Clarity & Confidence",
      description: "Focus only on the elements that truly drive your success.",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      icon: Shield,
      title: "Sustainable Discipline",
      description: "Effortlessly stick to your rules without letting emotions derail you.",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      icon: TrendingUp,
      title: "Continuous Performance Improvement",
      description: "Achieve smooth and sustainable equity curve growth for greater peace of mind and security.",
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Professional Header */}
        <motion.div
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            {texts.headline1}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {texts.headline2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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

              <div className="relative z-10">
                {/* Premium Icon */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${feature.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <feature.icon size={28} className="text-white relative z-10" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Premium Border Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Premium Testimonial Section */}
        <motion.div
          className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-12 max-w-5xl mx-auto mb-16 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden mt-32"
        >
          {/* Premium Background Pattern */}
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
            <blockquote className="text-xl text-gray-700 font-light leading-relaxed mb-8 italic text-center">
              {texts.testimonial}
            </blockquote>
            
            <div className="flex flex-col items-center space-y-3">
              {/* 5 Sterne über dem Namen */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">{texts.testimonialName}</h4>
                <p className="text-gray-600 font-light text-sm">{texts.testimonialLocation}</p>
              </div>
            </div>
          </div>

          {/* Premium Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <a 
            href={language === 'en' 
              ? "https://mmplatinum.lemonsqueezy.com/buy/57232828-23d1-483e-ae41-a448a25b03b3?desc=0"
                : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden inline-flex items-center"
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
                <span>{texts.cta}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Mobile Arrow */}
              <ArrowRight size={18} className="sm:hidden group-hover:translate-x-1 transition-transform mt-1" />
            </span>
          </a>
          <p className="text-gray-600 font-light">{texts.guarantee}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
