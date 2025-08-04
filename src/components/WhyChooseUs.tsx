import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Settings, Upload, Database, Target, Clock, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';

interface WhyChooseUsProps {
  language?: 'de' | 'en';
}

const WhyChooseUs = ({ language = 'de' }: WhyChooseUsProps) => {
  const texts = language === 'de' ? {
    mainHeadline1: "6 Gründe, warum smarte Trader das",
    mainHeadline2: "MMplatinum Trading Journal wählen",
    stepsHeadline1: "Ein 3-Schritte-Plan zu",
    stepsHeadline2: "Next-Level Ergebnissen",
    stepsSubtitle: "Der bewährte Weg zu besseren Trading-Ergebnissen – einfach, systematisch, erfolgreich"
  } : {
    mainHeadline1: "6 Reasons Why Smart Traders Choose the",
    mainHeadline2: "MMplatinum Trading Journal",
    stepsHeadline1: "A 3-Step Plan to",
    stepsHeadline2: "Next-Level Results",
    stepsSubtitle: "The proven path to better trading results – simple, systematic, successful"
  };

  const reasons = language === 'de' ? [
    {
      number: "1",
      title: "Mehrsprachiges Menü",
      description: "Wechsle mühelos zwischen deutscher oder englischer Benutzeroberfläche.",
      icon: Menu,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      number: "2", 
      title: "Einfache Einrichtung",
      description: "Beginne innerhalb weniger Minuten mit der Dokumentation deiner Trades – ohne kompliziertes Onboarding.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      number: "3",
      title: "Müheloser Datenimport",
      description: "Lade deine Trade-Historie per CSV hoch oder nutze SyncEA für automatische MT4/MT5-Synchronisation – das Journal erkennt alle Einträge automatisch und liefert sofort aussagekräftige Auswertungen.",
      icon: Upload,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      number: "4",
      title: "Datenbasierte Einblicke",
      description: "Verwandle Rohdaten in aussagekräftige Kennzahlen, mit denen du dein Trading gezielt verbessern kannst.",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      number: "5",
      title: "Absolute Klarheit",
      description: "Konzentriere dich auf die Faktoren, die wirklich wichtig sind, ohne in irrelevanten Daten zu versinken.",
      icon: Target,
      gradient: "from-indigo-500 to-purple-500",
      shadowColor: "indigo-500/25"
    },
    {
      number: "6",
      title: "Lebenslanger Zugang",
      description: "Einmalige Zahlung, unbegrenzte Nutzung – inklusive aller zukünftigen Updates.",
      icon: Clock,
      gradient: "from-pink-500 to-rose-500",
      shadowColor: "pink-500/25"
    }
  ] : [
    {
      number: "1",
      title: "Multilingual Menu",
      description: "Easily switch your interface between English and German.",
      icon: Menu,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      number: "2", 
      title: "Simple Setup",
      description: "Start documenting your trades in minutes — no complex onboarding required.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      number: "3",
      title: "Effortless Data Import",
      description: "Upload your trade history via CSV or use SyncEA for automatic MT4/MT5 synchronization – the journal recognizes all entries automatically and provides instant insights.",
      icon: Upload,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      number: "4",
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable metrics that refine your trading.",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      number: "5",
      title: "Absolute Clarity",
      description: "Focus on what truly matters without drowning in irrelevant data.",
      icon: Target,
      gradient: "from-indigo-500 to-purple-500",
      shadowColor: "indigo-500/25"
    },
    {
      number: "6",
      title: "Lifetime Access",
      description: "One-time purchase grants unlimited access including all future updates.",
      icon: Clock,
      gradient: "from-pink-500 to-rose-500",
      shadowColor: "pink-500/25"
    }
  ];

  const steps = language === 'de' ? [
    {
      number: "01",
      title: "Erfassen",
      description: "Dokumentiere deine Trades systematisch mit allen relevanten Details.",
      color: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      number: "02", 
      title: "Analysieren",
      description: "Erkenne Muster und Schwächen in deiner Trading-Performance durch KI-gestützte Analysen.",
      color: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      number: "03",
      title: "Wachsen",
      description: "Setze die Erkenntnisse in die Praxis um, optimiere dein Verhalten und verfeinere fortlaufend deine Strategie.",
      color: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    }
  ] : [
    {
      number: "01",
      title: "Track",
      description: "Systematically document every trade with all relevant details.",
      color: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      number: "02", 
      title: "Analyze",
      description: "Identify patterns and weaknesses in your trading performance using AI-powered analysis.",
      color: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      number: "03",
      title: "Grow",
      description: "Apply insights to optimize your behavior and continuously refine your strategy.",
      color: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Professional Header */}
        <motion.div
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            {texts.mainHeadline1}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {texts.mainHeadline2}
            </span>
          </h2>
        </motion.div>

        {/* Premium Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                {/* Premium Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <reason.icon size={24} className="text-white relative z-10" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    {/* Premium Number Badge */}
                    <div className="relative">
                      <span className={`w-8 h-8 bg-gradient-to-r ${reason.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {reason.number}
                      </span>
                      {/* Badge Glow */}
                      <div className={`absolute inset-0 w-8 h-8 bg-gradient-to-r ${reason.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300`}></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              </div>
              
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
              
              {/* Premium Border Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Premium 3-Step Process */}
        <motion.div
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            {texts.stepsHeadline1}
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              {texts.stepsHeadline2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {texts.stepsSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group relative text-center h-full"
            >
              {/* Premium Step Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-10 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
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

                <div className="relative z-10 flex flex-col h-full">
                  {/* Premium Number Badge */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                      {/* Badge Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <span className="text-white text-2xl font-bold relative z-10">{step.number}</span>
                    </div>
                    {/* Badge Glow Effect */}
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125 mx-auto`}></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Premium Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Connection Line (only between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 transform translate-x-1/2 w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
