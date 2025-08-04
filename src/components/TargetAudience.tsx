import React from 'react';
import { motion } from 'framer-motion';
import { User, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  language?: 'de' | 'en';
}

const TargetAudience = ({ language = 'de' }: TargetAudienceProps) => {
  const texts = language === 'de' ? {
    headline1: "Für wen ist dieses",
    headline2: "Trading Journal geeignet",
    subtitle: "Von Einsteigern bis hin zu Trading-Profis - für jeden Erfahrungsgrad optimiert"
  } : {
    headline1: "Who Is This",
    headline2: "Trading Journal For",
    subtitle: "From beginners to trading professionals - optimized for every experience level"
  };

  const audiences = language === 'de' ? [
    {
      title: "Für Einsteiger",
      description: "Perfekt für Trading-Anfänger, die von Beginn an professionelle Gewohnheiten entwickeln und ihre Lernkurve beschleunigen möchten. Das Journal hilft dir dabei, Struktur in dein Trading zu bringen und systematisch zu lernen.",
      icon: User,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Für erfahrene Trader",
      description: "Ideal für Trader mit Vorerfahrung, die ihre Performance optimieren und blinde Flecken in ihrer Strategie aufdecken möchten. Erkenne Muster und verbessere deine Entscheidungsfindung systematisch.",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      title: "Für Trading-Profis",
      description: "Unverzichtbar für professionelle Trader, die ihre Performance auf ein neues Level heben möchten. Mit tiefgehenden Kennzahlen und strukturierten Auswertungen schöpfst du jedes kleinste Verbesserungspotenzial aus.",
      icon: Award,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    }
  ] : [
    {
      title: "For Beginners",
      description: "Perfect for beginner traders who want to establish professional habits from day one and accelerate their learning process. The journal helps you bring structure to your trading and learn in a systematic way.",
      icon: User,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "For Experienced Traders",
      description: "Ideal for experienced traders who want to optimize performance and uncover blind spots in their strategy. Systematically recognize patterns and refine your decision-making.",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      title: "For Trading Professionals",
      description: "Indispensable for professional traders aiming to take their performance to the next level. With comprehensive metrics and structured evaluations, you'll unlock even the smallest opportunities for improvement.",
      icon: Award,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-white via-blue-50/30 to-gray-50/60 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Premium Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${audience.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${audience.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <audience.icon size={28} className="text-white relative z-10" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${audience.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                  {audience.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {audience.description}
                </p>
              </div>
              
              {/* Premium Border Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Premium Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${audience.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r ${audience.gradient} rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
