import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const CustomerQuote = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
        >
          {/* Quote Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-12">
            <Quote size={40} className="text-white" />
          </div>

          {/* Main Quote */}
          <blockquote className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-12 tracking-tight">
            "Das beste Investment, das ich je für mein Trading gemacht habe. 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> 
              Meine Performance hat sich um 180% verbessert
            </span> 
            – und das innerhalb der ersten 6 Wochen!"
          </blockquote>

          {/* Star Rating */}
          <motion.div
            initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.6 : 0,
              delay: window.innerWidth >= 768 ? 0.2 : 0,
              ease: "easeOut"
            }}
            className="flex justify-center space-x-2 mb-8"
          >
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={32} className="text-yellow-400 fill-current" />
            ))}
          </motion.div>

          {/* Customer Info */}
          <motion.div
            initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.6 : 0,
              delay: window.innerWidth >= 768 ? 0.3 : 0,
              ease: "easeOut"
            }}
            className="flex items-center justify-center space-x-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SR</span>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-medium text-gray-900 mb-1">
                Sarah Rodriguez
              </h3>
              <p className="text-lg text-gray-600 font-light mb-1">
                Professionelle Daytrader
              </p>
              <p className="text-base text-gray-500 font-light">
                3+ Jahre Trading-Erfahrung
              </p>
            </div>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.6 : 0,
              delay: window.innerWidth >= 768 ? 0.4 : 0,
              ease: "easeOut"
            }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8">
              <div className="text-3xl font-bold text-blue-600 mb-2">+180%</div>
              <div className="text-gray-600 font-light">Performance-Steigerung</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8">
              <div className="text-3xl font-bold text-blue-600 mb-2">6 Wochen</div>
              <div className="text-gray-600 font-light">bis zu ersten Erfolgen</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8">
              <div className="text-3xl font-bold text-blue-600 mb-2">€12,840</div>
              <div className="text-gray-600 font-light">zusätzlicher Gewinn</div>
            </div>
          </motion.div>

          {/* Verification Badge */}
          <motion.div
            initial={window.innerWidth >= 768 ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.6 : 0,
              delay: window.innerWidth >= 768 ? 0.5 : 0,
              ease: "easeOut"
            }}
            className="mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-6 py-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-green-700 font-medium">Verifizierte Bewertung</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerQuote; 