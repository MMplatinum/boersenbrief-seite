import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, GraduationCap, Star } from 'lucide-react';

interface StatisticsProps {
  language?: 'de' | 'en';
}

const Statistics = ({ language = 'de' }: StatisticsProps) => {
  const texts = language === 'de' ? {
    headline: "Beginnen Sie Ihre Investmentreise mit dem",
    subtitle: "Börsendienst, dem bereits Hunderte Anleger vertrauen.",
    stats: [
      {
        icon: Users,
        number: "3.000+",
        description: "aktive Leser",
        gradient: "from-blue-500 to-cyan-500",
        shadowColor: "blue-500/25"
      },
      {
        icon: Globe,
        number: "11",
        description: "Länder",
        gradient: "from-purple-500 to-pink-500",
        shadowColor: "purple-500/25"
      },
      {
        icon: GraduationCap,
        number: "100%",
        description: "Mehrwert für jeden Investor",
        gradient: "from-green-500 to-emerald-500",
        shadowColor: "green-500/25"
      },
      {
        icon: Star,
        number: "4,8",
        description: "Sterne auf lettertest",
        gradient: "from-orange-500 to-red-500",
        shadowColor: "orange-500/25"
      }
    ]
  } : {
    headline: "Start your investment journey with the",
    subtitle: "stock market service that hundreds of investors already trust.",
    stats: [
      {
        icon: Users,
        number: "3,000+",
        description: "active readers",
        gradient: "from-blue-500 to-cyan-500",
        shadowColor: "blue-500/25"
      },
      {
        icon: Globe,
        number: "11",
        description: "countries",
        gradient: "from-purple-500 to-pink-500",
        shadowColor: "purple-500/25"
      },
      {
        icon: GraduationCap,
        number: "100%",
        description: "added value for every investor",
        gradient: "from-green-500 to-emerald-500",
        shadowColor: "green-500/25"
      },
      {
        icon: Star,
        number: "4.8",
        description: "stars on lettertest",
        gradient: "from-orange-500 to-red-500",
        shadowColor: "orange-500/25"
      }
    ]
  };

  return (
    <section className="py-12 md:py-16 lg:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements - wie ResultsShowcase */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Header - wie ResultsShowcase */}
        <motion.div
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
            {texts.headline}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {texts.subtitle}
            </span>
          </h2>
        </motion.div>

        {/* Statistics Grid - wie ResultsShowcase */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {texts.stats.map((stat, index) => (
            <motion.div
              key={stat.description}
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
              {/* Premium Card - wie ResultsShowcase */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                {/* Luxury Icon Container - wie ResultsShowcase */}
                <div className="relative mb-3 md:mb-5">
                  <div className={`w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r ${stat.gradient} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${stat.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <stat.icon size={18} className="md:hidden text-white relative z-10" />
                    <stat.icon size={24} className="hidden md:block text-white relative z-10" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r ${stat.gradient} rounded-lg md:rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                </div>

                {/* Value - wie ResultsShowcase */}
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 md:mb-3 leading-none`}>
                  {stat.number}
                </div>
                
                {/* Description - wie ResultsShowcase */}
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                  {stat.description}
                </h3>
                
                {/* Subtle Premium Pattern - wie ResultsShowcase */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Elegant Border Gradient on Hover - wie ResultsShowcase */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                
                {/* Premium Hover Overlay - wie ResultsShowcase */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 