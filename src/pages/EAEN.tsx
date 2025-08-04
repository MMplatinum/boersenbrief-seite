import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, TrendingUp, CheckCircle, ArrowRight, Users, Zap, FileText, BarChart3, PenTool, ArrowLeft, Euro, Monitor, Smartphone, RefreshCw, Activity, PieChart, Database } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Footer from '../components/Footer';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const EAEN = () => {
  React.useEffect(() => {
    // SEO protection
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    document.title = 'SyncEA Expert Advisor - Automatic Trade Synchronization';

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "80% Less Data Entry Time",
      description: "SyncEA imports all MT4/MT5 trades automatically – no more copy-paste.",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      icon: Target,
      title: "Focus on Next Setups",
      description: "Technology logs, you analyze – finally trading instead of typing.",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      icon: TrendingUp,
      title: "Years of History in Minutes",
      description: "SyncEA pulls all past MT4/MT5 trades directly from your broker – no CSV, no manual work.",
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    }
  ];

  const targetGroups = [
    {
      title: "Traders with History",
      description: "You have thousands of trades and want to finally analyze them professionally – SyncEA handles the import for you.",
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      title: "Active Daytraders", 
      description: "You place multiple trades per day and need an auto-logger so you can focus fully on entry & exit.",
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "violet-500/25"
    },
    {
      title: "Efficiency-oriented Traders",
      description: "You seek every lever that saves time and eliminates errors – SyncEA automates the tedious work so you can focus on what matters.",
      gradient: "from-indigo-500 to-blue-500",
      shadowColor: "indigo-500/25"
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">MMplatinum</h1>
                <p className="text-sm text-gray-600">SyncEA Expert Advisor</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/en"
                className="group inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                <span className="text-sm font-medium">Back to Main Page</span>
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="pt-8 md:pt-20 pb-24 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-light text-gray-900 mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              100% Data Accuracy
            </span>{' '}
            – with 80% Less Effort
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
          >
            SyncEA automatically imports all your MT4/MT5 trades into the MMplatinum Trading Journal. 
            <strong className="text-gray-800"> No more manual typing, no copy-paste errors.</strong>
          </motion.p>

          <motion.div
            className="mb-8"
          >
            <motion.a
              href="https://mmplatinum.lemonsqueezy.com/buy/0326c7fb-c9ff-4321-adea-b5d551274b7b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 inline-block"
            >
              Buy SyncEA Now
            </motion.a>
          </motion.div>

          {/* Sync Animation */}
          <motion.div
            className="flex justify-center mt-8"
          >
            {/* Sync Animation Container */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 md:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-[500px] mx-auto min-h-[320px] md:min-h-[370px] flex items-center justify-center">
              
              {/* MT4/MT5 Platform (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
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
                    delay: 1.4 + point.delay,
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
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 360],
                }}
                transition={{ 
                  opacity: { delay: 1.4, duration: 0.5 },
                  scale: { delay: 1.4, duration: 0.5 },
                  rotate: { 
                    delay: 1.9,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
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
                    delay: 1.9,
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
                    delay: 2.4,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-emerald-400/30 rounded-full"
                />
              </motion.div>

              {/* Sync Active Label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 2.5,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="absolute bottom-2 md:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap shadow-lg z-30"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>Auto-Sync Active</span>
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
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16"
          >
            Why SyncEA is the perfect addition for you
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? index * 0.2 : 0,
                  ease: "easeOut"
                }}
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
                    <div className={`bg-gradient-to-r ${benefit.gradient} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${benefit.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <benefit.icon size={28} className="text-white relative z-10" />
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Premium Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-24 bg-gradient-to-br from-gray-50/40 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-4"
          >
            Perfect for these trader types
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {targetGroups.map((group, index) => (
              <motion.div
                key={group.title}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? index * 0.2 : 0,
                  ease: "easeOut"
                }}
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
                    <div className={`bg-gradient-to-r ${group.gradient} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${group.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <Users size={24} className="text-white relative z-10" />
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-r ${group.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {group.description}
                  </p>
                </div>
                
                {/* Premium Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Division */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-6"
          >
            Data Power + Trader Know-how = Maximum Learning Effect
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 font-light"
          >
            <em>SyncEA</em> fills your journal with all the hard facts – you add the <strong>insights</strong> that truly drive progress.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Automatic */}
            <motion.div
              transition={{ duration: 0.8 }}
              className="group relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-200/60 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Automatic (<em>SyncEA</em>)</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Symbol & Instrument</li>
                  <li>• Entry & Exit Time and Price</li>
                  <li>• Position Size (Lots)</li>
                  <li>• Commissions, Swaps</li>
                  <li>• Profit/Loss Calculation</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>

            {/* Manual */}
            <motion.div
              transition={{ duration: 0.8 }}
              className="group relative bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-emerald-200/60 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Manual (You)</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Strategy & Rule Check</li>
                  <li>• Entry/Exit Screenshots</li>
                  <li>• Emotion / Mindset Notes</li>
                  <li>• Personal Learning Notes</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 font-light">
              <strong>Result:</strong> All numbers are in the journal within seconds – your time flows into reflection, analysis and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gradient-to-br from-gray-50/40 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-gray-900 mb-12"
          >
            This means for you
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-lg text-gray-700">less effort</div>
            </motion.div>
            <motion.div
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-lg text-gray-700">data accuracy</div>
            </motion.div>
            <motion.div
              className="text-center"
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">∞</div>
              <div className="text-lg text-gray-700">more focus on trading</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-12 max-w-2xl mx-auto shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Start now with SyncEA
            </h2>
                         <p className="text-xl text-gray-600 mb-8 font-light">
               One-time €20 - lifetime usage
             </p>
             
             <div className="flex items-center justify-center gap-4 mb-8">
               <span className="text-2xl text-gray-400 line-through">€39</span>
               <span className="text-4xl font-bold text-gray-900 flex items-center gap-1">
                 €20
               </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Launch Price
              </span>
            </div>

            <motion.a
              href="https://mmplatinum.lemonsqueezy.com/buy/0326c7fb-c9ff-4321-adea-b5d551274b7b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 inline-block"
            >
              Buy SyncEA Now
            </motion.a>

                         <p className="text-sm text-gray-500 mt-4">
               Instant Download • Quick Setup
             </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default EAEN;