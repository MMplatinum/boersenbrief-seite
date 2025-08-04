import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface MMplatinumBenefitsProps {
  language?: 'de' | 'en';
}

const MMplatinumBenefits = ({ language = 'de' }: MMplatinumBenefitsProps) => {
  const texts = language === 'de' ? {
    headline: "Mit MMplatinum...",
    benefits: [
      "erreichen Sie Ihre finanziellen Ziele effizienter.",
      "schützen Sie Ihr Depot vor großen Einbrüchen.",
      "investieren Sie ohne Unsicherheiten.",
      "verlassen Sie sich auf bewährte Methoden.",
      "wissen Sie stets, wann zu handeln ist."
    ],
    ctaText: "Jetzt Börsenbriefe entdecken"
  } : {
    headline: "With MMplatinum...",
    benefits: [
      "you achieve your financial goals more efficiently.",
      "you protect your portfolio from major crashes.",
      "you invest without uncertainties.",
      "you rely on proven methods.",
      "you always know when to act."
    ],
    ctaText: "Discover Stock Letters Now"
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              ease: "easeOut"
            }}
            className="space-y-8"
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
              {texts.headline}
            </h2>

            {/* Benefits List */}
            <div className="space-y-6">
              {texts.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: window.innerWidth >= 768 ? 0.6 : 0,
                    delay: window.innerWidth >= 768 ? 0.2 + (index * 0.1) : 0,
                    ease: "easeOut"
                  }}
                  className="flex items-start gap-4 group"
                >
                  {/* Check Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Benefit Text */}
                  <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.6 : 0,
                ease: "easeOut"
              }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden inline-flex items-center justify-center"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative z-10">{texts.ctaText}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: window.innerWidth >= 768 ? 0.8 : 0,
              delay: window.innerWidth >= 768 ? 0.3 : 0,
              ease: "easeOut"
            }}
            className="relative"
          >
            {/* Image Placeholder */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3] overflow-hidden">
              {/* Image Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-700"></div>
              
              {/* Placeholder Content */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <div className="text-white text-2xl font-bold">
                      MM
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm font-medium px-4">
                    Paar schaut gemeinsam auf Laptop<br/>
                    entspannt auf dem Sofa
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MMplatinumBenefits;