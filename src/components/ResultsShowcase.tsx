import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Heart } from 'lucide-react';

interface ResultsShowcaseProps {
  language?: 'de' | 'en';
}

const ResultsShowcase = ({ language = 'de' }: ResultsShowcaseProps) => {
  const texts = language === 'de' ? {
    headline1: "Beeindruckende Verbesserungen",
    headline2: "innerhalb nur weniger Wochen", 
    subtitle: "Das Geheimnis liegt in dir als Trader - nicht in der Strategie.",
    footnote: "Ergebnisse können je nach Trader variieren."
  } : {
    headline1: "Impressive Improvements",
    headline2: "Within Just a Few Weeks",
    subtitle: "The secret lies within you as a trader - not in the strategy.",
    footnote: "Results may vary by trader."
  };

  const results = language === 'de' ? [
    {
      value: "+31%",
      label: "Gewinnrate",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "green-500/25"
    },
    {
      value: "+85%",
      label: "Profitfaktor",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      value: "+40%",
      label: "Chance/Risiko-Verhältnis",
      icon: Award,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      value: "+100%",
      label: "Klarheit und Selbstvertrauen",
      icon: Heart,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    }
  ] : [
    {
      value: "+31%",
      label: "Win Rate",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "green-500/25"
    },
    {
      value: "+85%",
      label: "Profit Factor",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      value: "+40%",
      label: "Risk/Reward Ratio",
      icon: Award,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      value: "+100%",
      label: "Clarity and Confidence",
      icon: Heart,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements - wie TopFeatures */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Header - an andere Sections angepasst */}
        <motion.div
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
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

        {/* Results Grid - mobile optimiert */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={window.innerWidth >= 768 ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.6 : 0,
                delay: window.innerWidth >= 768 ? index * 0.1 : 0,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Premium Card - mobile optimiert */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                {/* Luxury Icon Container - mobile angepasst */}
                <div className="relative mb-3 md:mb-5">
                  <div className={`w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r ${result.gradient} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${result.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <result.icon size={18} className="md:hidden text-white relative z-10" />
                    <result.icon size={24} className="hidden md:block text-white relative z-10" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r ${result.gradient} rounded-lg md:rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                </div>

                {/* Value - mobile optimiert */}
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-2 md:mb-3 leading-none`}>
                  {result.value}
                </div>
                
                {/* Label - mobile optimiert */}
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                  {result.label}
                </h3>
                
                {/* Subtle Premium Pattern - exakt wie TopFeatures */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Elegant Border Gradient on Hover - exakt wie TopFeatures */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${result.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                
                {/* Premium Hover Overlay - exakt wie TopFeatures */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote - näher an Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.6 : 0,
            delay: window.innerWidth >= 768 ? 0.4 : 0,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 font-light italic">
            {texts.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsShowcase; 