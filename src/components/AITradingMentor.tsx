import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, TrendingUp, CheckCircle, ArrowRight, MessageSquare, BarChart, PieChart, LineChart, Sparkles, Bot } from 'lucide-react';

interface AITradingMentorProps {
  language?: 'de' | 'en';
}

const AITradingMentor = ({ language = 'de' }: AITradingMentorProps) => {
  const texts = language === 'de' ? {
    kiPowered: "KI-POWERED",
    headline1: "Dein persönlicher",
    headline2: "KI-Trading-Mentor",
    headline3: "24/7 Analysen, Antworten & Wachstum",
    description: "Nutze KI-Power, um deine Trades sekundenschnell auszuwerten, mentale Blockaden zu lösen und deine Ergebnisse gezielt zu steigern.",
    aiLabel: "AI Trading Mentor"
  } : {
    kiPowered: "AI-POWERED",
    headline1: "Your Personal",
    headline2: "AI Trading Mentor",
    headline3: "24/7 Analysis, Answers & Growth",
    description: "Use AI power to evaluate your trades in seconds, solve mental blocks, and systematically improve your results.",
    aiLabel: "AI Trading Mentor"
  };

  const features = language === 'de' ? [
    {
      title: "Performance-Booster:",
      description: "Analysiert deine echten Trades und Strategien in Sekunden – und liefert klare, datenbasierte Schritte, um Gewinn­potenzial & Edge zu maximieren.",
      icon: TrendingUp,
      gradient: "from-blue-500 to-emerald-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Mindset-Schutzschild:",
      description: "Erkennt FOMO, Overtrading & Angst live, gibt sofort Feedback und hält deine Disziplin konstant stark.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      title: "Chart-Insights per Klick:",
      description: "Lade Screenshots hoch: Die KI erkennt Muster, Schlüsselzonen & Trendstrukturen und liefert dir fundierte technische Erkenntnisse.",
      icon: LineChart,
      gradient: "from-cyan-500 to-blue-500",
      shadowColor: "cyan-500/25"
    }
  ] : [
    {
      title: "Performance Booster:",
      description: "Analyzes your real trades and strategies in seconds – and provides clear, data-driven steps to maximize your profit potential & edge.",
      icon: TrendingUp,
      gradient: "from-blue-500 to-emerald-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Mindset Shield:",
      description: "Detects FOMO, overtrading & fear live, gives instant feedback and keeps your discipline consistently strong.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      title: "Chart Insights at a Click:",
      description: "Upload screenshots: The AI detects patterns, key zones & trend structures and delivers you solid technical insights.",
      icon: LineChart,
      gradient: "from-cyan-500 to-blue-500",
      shadowColor: "cyan-500/25"
    }
  ];

  // Data points animation
  const dataPoints = [
    { icon: BarChart, delay: 0, x: -180, y: -90 },
    { icon: PieChart, delay: 0.2, x: 180, y: -90 },
    { icon: LineChart, delay: 0.4, x: -180, y: 90 },
    { icon: TrendingUp, delay: 0.6, x: 180, y: 90 },
    { icon: Target, delay: 0.8, x: 0, y: -180 },
    { icon: Zap, delay: 1.0, x: 0, y: 180 }
  ];

  return (
    <section id="ai-mentor" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-full blur-3xl"></div>
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Bot size={24} className="text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles size={20} className="text-blue-500" />
                  <span className="text-blue-600 font-semibold text-lg">{texts.kiPowered}</span>
                  <Sparkles size={20} className="text-purple-500" />
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight leading-tight">
                {texts.headline1}
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  {texts.headline2}
                </span>
                <br />
                <span className="text-xl md:text-2xl text-gray-600 font-light">
                  {texts.headline3}
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                {texts.description}
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
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
                      <h3 className="text-base text-gray-900 mb-1 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                        <span className="text-blue-600 font-semibold">{feature.title}</span> {feature.description}
                      </h3>
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
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Larger AI Animation */}
          <motion.div
            className="flex-1 mt-8 lg:mt-0"
          >
            {/* Premium AI Brain Container */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-16 lg:p-24 shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-[500px] mx-auto min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              {/* Central AI Brain */}
              <div className="relative flex items-center justify-center">
                {/* Professional Data Points - Positioned around the brain */}
                {dataPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-10 h-10 md:w-14 md:h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-200/50 shadow-lg z-20"
                    initial={{ 
                      x: point.x,
                      y: point.y,
                      opacity: 0,
                      scale: 0.8
                    }}
                    animate={{ 
                      x: [point.x, point.x * 0.5, point.x * 0.2, 0],
                      y: [point.y, point.y * 0.5, point.y * 0.2, 0],
                      opacity: [0, 1, 1, 0],
                      scale: [0.8, 1, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 4,
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
                    <point.icon size={16} className="text-blue-600 md:w-6 md:h-6" />
                  </motion.div>
                ))}

                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center relative shadow-xl z-10"
                >
                  <Brain size={40} className="text-white z-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  
                  {/* Elegant pulsing rings */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0.2, 0.6]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
                  />
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.1, 0.4]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full"
                  />
                </motion.div>

                {/* Professional AI Label */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: window.innerWidth >= 768 ? 0.6 : 0,
                    delay: window.innerWidth >= 768 ? 1.0 : 0,
                    ease: "easeOut"
                  }}
                  className="absolute -bottom-16 md:-bottom-20 lg:-bottom-24 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap shadow-lg z-30"
                >
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-blue-600 md:w-5 md:h-5" />
                    <span>{texts.aiLabel}</span>
                    <Sparkles size={12} className="text-purple-500 md:w-4 md:h-4" />
                  </div>
                </motion.div>
              </div>

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

        {/* Additional Professional Context - Removed for compactness */}
      </div>
    </section>
  );
};

export default AITradingMentor;
