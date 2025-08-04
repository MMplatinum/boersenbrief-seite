import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, Zap, ArrowRight } from 'lucide-react';

interface SimplicityCTAProps {
  language?: 'de' | 'en';
}

const SimplicityCTA = ({ language = 'de' }: SimplicityCTAProps) => {
  const texts = language === 'de' ? {
    headline1: "Keine unnötige Komplexität –",
    headline2: "für ein klares Ziel",
    subtitle: "Dich zum bestmöglichen Trader machen, indem du dich auf das konzentrierst, was wirklich Erfolg bringt – und sonst nichts.",
    cta: "Schluss mit Verwirrung - Jetzt klares Trading Journal sichern",
    ctaMobileLine1: "Schluss mit Verwirrung",
    ctaMobileLine2: "Klares Trading Journal sichern",
    unnecessary: "Überflüssig",
    focused: "Fokussiert auf das Wesentliche"
  } : {
    headline1: "No unnecessary complexity –",
    headline2: "for a clear goal",
    subtitle: "Empower you to become the best trader you can be, by focusing on what really drives success - and nothing else.",
    cta: "End the confusion - Secure clear trading journal now",
    ctaMobileLine1: "End the confusion",
    ctaMobileLine2: "Secure clear trading journal",
    unnecessary: "Unnecessary",
    focused: "Focused on the essential"
  };

  const benefits = language === 'de' ? [
    {
      title: "Keine überflüssigen Grafiken",
      description: "Nur das Wesentliche für optimale Klarheit und bessere Entscheidungen bei deinen Trades.",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      title: "Keine irrelevanten Kennzahlen",
      description: "Konzentration auf die Metriken, die wirklich einen Einfluss auf deinen Trading-Erfolg haben.",
      icon: CheckCircle,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Kein verwirrendes Dashboard",
      description: "Klare und intuitive Benutzeroberfläche für maximale Produktivität und Fokus.",
      icon: CheckCircle,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    }
  ] : [
    {
      title: "No extraneous graphics",
      description: "Only the essentials for optimal clarity and better decision-making.",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      title: "No irrelevant metrics",
      description: "Focus only on the metrics that truly impact your trading success.",
      icon: CheckCircle,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "No confusing dashboard",
      description: "Enjoy a clear, intuitive dashboard for maximum productivity and focus.",
      icon: CheckCircle,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
            {texts.headline1}
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {texts.headline2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
            {texts.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Benefits List */}
          <motion.div
            className="flex-1"
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: window.innerWidth >= 768 ? 0.6 : 0,
                    delay: window.innerWidth >= 768 ? index * 0.1 : 0,
                    ease: "easeOut"
                  }}
                  className="group flex items-start space-x-4"
                >
                  {/* Premium Icon Container */}
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${benefit.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <benefit.icon size={28} className="text-white relative z-10" />
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Mockup - jetzt auch mobil sichtbar */}
          <motion.div
            className="flex-1 mt-8 lg:mt-0"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/fokus.webp"
                  alt="MMplatinum Trading Journal - Einfache und benutzerfreundliche Trading Journal Oberfläche"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Overlay annotations */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium flex items-center space-x-1">
                  <X size={12} className="md:hidden" />
                  <X size={14} className="hidden md:block" />
                  <span>{texts.unnecessary}</span>
                </div>
                
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium flex items-center space-x-1">
                  <CheckCircle size={12} className="md:hidden" />
                  <CheckCircle size={14} className="hidden md:block" />
                  <span>{texts.focused}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button hinzufügen */}
        <motion.div
          className="text-center"
        >
          <a 
            href={language === 'en' 
              ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden inline-flex items-center"
          >
            {/* Animated Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
            
            {/* Button Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            
            <span className="relative z-10 flex items-center justify-center space-x-2 whitespace-nowrap">
              {/* Mobile Version - Zwei Zeilen mit Arrow integriert */}
              <span className="flex flex-col items-center text-center sm:hidden">
                <span className="text-sm font-normal mb-1">{texts.ctaMobileLine1}</span>
                <span className="text-sm font-medium flex items-center space-x-2">
                  <span>{texts.ctaMobileLine2}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
              
              {/* Desktop Version - Eine Zeile */}
              <span className="hidden sm:flex items-center space-x-2">
                <span>{texts.cta}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default SimplicityCTA;
