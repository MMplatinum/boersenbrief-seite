import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Target, TrendingUp, Activity, BarChart3, PieChart, Database, RefreshCw, Smartphone, Monitor } from 'lucide-react';

interface SyncEAShowcaseProps {
  language?: 'de' | 'en';
}

const SyncEAShowcase = ({ language = 'de' }: SyncEAShowcaseProps) => {
  const texts = language === 'de' ? {
    syncPowered: "AUTO-SYNC",
    headline1: "SyncEA Broker-Integration:",
    headline2: "Automatischer Trade-Import",
    headline3: "",
    description: "SyncEA verbindet deine MT4/MT5-Plattform direkt mit dem Trading Journal. Jeder Trade wird automatisch erfasst – keine manuelle Eingabe, keine Fehler, nur perfekte Daten.",
    syncLabel: "Auto-Sync Active"
  } : {
    syncPowered: "AUTO-SYNC",
    headline1: "SyncEA Broker Integration:",
    headline2: "Automatic Trade Import",
    headline3: "",
    description: "SyncEA connects your MT4/MT5 platform directly to the Trading Journal. Every trade is automatically captured – no manual entry, no errors, just perfect data.",
    syncLabel: "Auto-Sync Active"
  };

  const features = language === 'de' ? [
    {
      title: "100% Datengenauigkeit:",
      description: "Jeder Trade wird exakt wie ausgeführt erfasst",
      icon: Target,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      title: "80% weniger Zeitaufwand:",
      description: "Fokus auf Trading statt auf Dateneingabe",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Sofortige Synchronisation:",
      description: "Trades erscheinen automatisch im Journal",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    }
  ] : [
    {
      title: "100% Data Accuracy:",
      description: "Every trade captured exactly as executed",
      icon: Target,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      title: "80% Less Time:",
      description: "Focus on trading instead of data entry",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Instant Synchronization:",
      description: "Trades appear automatically in journal",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    }
  ];

  // Trade data points animation from MT4/MT5 to Journal
  const tradeDataPoints = [
    { icon: TrendingUp, delay: 0, label: "Price Data" },
    { icon: Activity, delay: 0.3, label: "Volume" },
    { icon: BarChart3, delay: 0.6, label: "P&L" },
    { icon: PieChart, delay: 0.9, label: "Time" },
    { icon: Database, delay: 1.2, label: "Symbol" },
    { icon: Target, delay: 1.5, label: "Position" }
  ];

  return (
    <section id="auto-sync" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-r from-emerald-100/60 to-blue-100/60 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? 0.2 : 0,
                  ease: "easeOut"
                }}
                className="flex items-center space-x-3 mb-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <RefreshCw size={24} className="text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <Zap size={20} className="text-emerald-500" />
                  <span className="text-emerald-600 font-semibold text-lg">{texts.syncPowered}</span>
                  <Zap size={20} className="text-blue-500" />
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight leading-tight">
                {texts.headline1}
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-700 bg-clip-text text-transparent">
                  {texts.headline2}
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                {texts.description}
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    {/* Premium Icon */}
                    <div className="relative">
                      <div className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${feature.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                        {/* Icon Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                        <feature.icon size={20} className="text-white relative z-10" />
                      </div>
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                        <span className="text-emerald-600">{feature.title}</span> {feature.description}
                      </h3>
                    </div>
                  </div>

                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - MT4/MT5 to Journal Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              delay: window.innerWidth >= 768 ? 0.4 : 0,
              ease: "easeOut"
            }}
            className="flex-1 mt-8 lg:mt-0"
          >
            {/* Sync Animation Container */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-16 lg:p-24 shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-[500px] mx-auto min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              
              {/* MT4/MT5 Platform (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute left-8 md:left-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg mb-2">
                  <Monitor size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm text-gray-600 font-medium">MT4/MT5</span>
              </motion.div>

              {/* Trading Journal App (Right) */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute right-8 md:right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mb-2">
                  <Smartphone size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm text-gray-600 font-medium">Journal</span>
              </motion.div>

              {/* Animated Trade Data Points */}
              {tradeDataPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="absolute w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-200/50 shadow-md z-20"
                  initial={{ 
                    x: -120,
                    y: 0,
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    x: [-120, -60, 0, 60, 120],
                    y: [0, -10, 0, 10, 0],
                    opacity: [0, 1, 1, 1, 0],
                    scale: [0.8, 1, 1, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: point.delay,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center'
                  }}
                >
                  <point.icon size={16} className="text-emerald-600 md:w-5 md:h-5" />
                </motion.div>
              ))}

              {/* Central Sync Symbol */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-600 rounded-full flex items-center justify-center relative shadow-xl z-10"
              >
                <RefreshCw size={24} className="text-white z-10 md:w-8 md:h-8" />
                
                {/* Pulsing rings */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0.2, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-blue-400/40 rounded-full"
                />
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 0.1, 0.4]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-emerald-400/30 rounded-full"
                />
              </motion.div>

              {/* Sync Active Label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? 1.0 : 0,
                  ease: "easeOut"
                }}
                className="absolute bottom-2 md:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap shadow-lg z-30"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>{texts.syncLabel}</span>
                  <RefreshCw size={16} className="text-emerald-600 md:w-5 md:h-5" />
                </div>
              </motion.div>

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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SyncEAShowcase; 