import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  language?: 'de' | 'en';
}

const ServicesSection = ({ language = 'de' }: ServicesSectionProps) => {
  const texts = language === 'de' ? {
    headline: "Ihre Wege zum Erfolg",
    subtitle: "Wählen Sie den Ansatz, der am besten zu Ihren Zielen passt",
    services: [
      {
        title: "Börsenbriefe folgen",
        description: "Nutzen Sie unsere Börsenbriefe als direkten Pfad zu Ihren finanziellen Zielen, begleitet von Expertenwissen.",
        ctaText: "Börsenbriefe",
        imageAlt: "Bergsteiger helfen sich gegenseitig beim Klettern",
        isNew: false
      },
      {
        title: "Eigenständig investieren",
        description: "Lernen Sie, Ihr Portfolio eigenständig und effizient zu verwalten - mit den richtigen Tools und Strategien.",
        ctaText: "Light",
        imageAlt: "Hand mit Stift über Notizbuch und Laptop",
        isNew: false
      },
      {
        title: "Börsenwissen stärken",
        description: "Erwerben Sie solide Grundlagen für Ihre erfolgreiche Börsenkarriere – einfach erklärt und direkt anwendbar.",
        ctaText: "Know-how-Bereich",
        imageAlt: "Seminar mit MMPLATINUM Präsentation",
        isNew: false
      },
      {
        title: "Trading Journal (für Trader)",
        description: "Erfahren Sie, wie dieses Trading Journal Ihr Trading schon in wenigen Tagen grundlegend verändern kann.",
        ctaText: "zum Trading Journal",
        imageAlt: "Paar schaut gemeinsam auf Laptop",
        isNew: true
      }
    ]
  } : {
    headline: "Your Paths to Success",
    subtitle: "Choose the approach that best fits your goals",
    services: [
      {
        title: "Follow Stock Letters",
        description: "Use our stock letters as a direct path to your financial goals, accompanied by expert knowledge.",
        ctaText: "Stock Letters",
        imageAlt: "Mountain climbers helping each other",
        isNew: false
      },
      {
        title: "Invest Independently",
        description: "Learn to manage your portfolio independently and efficiently - with the right tools and strategies.",
        ctaText: "Light",
        imageAlt: "Hand with pen over notebook and laptop",
        isNew: false
      },
      {
        title: "Strengthen Stock Market Knowledge",
        description: "Acquire solid foundations for your successful stock market career – simply explained and directly applicable.",
        ctaText: "Know-how Area",
        imageAlt: "Seminar with MMPLATINUM presentation",
        isNew: false
      },
      {
        title: "Trading Journal (for Traders)",
        description: "Learn how this Trading Journal can fundamentally change your trading in just a few days.",
        ctaText: "to Trading Journal",
        imageAlt: "Couple looking at laptop together",
        isNew: true
      }
    ]
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-4">
            Für <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">(fast) jeden Anleger</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            die passende Lösung
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {texts.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.8 : 0,
                delay: window.innerWidth >= 768 ? 0.2 + (index * 0.1) : 0,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Service Card - Similar to original design */}
              <div className={`relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${service.isNew ? 'ring-2 ring-purple-200' : ''}`}>
                
                {/* New Badge */}
                {service.isNew && (
                  <div className="absolute -top-2 -left-2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      neu
                    </div>
                  </div>
                )}

                {/* Image Placeholder */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg aspect-[16/9] overflow-hidden mb-6">
                  {/* Image Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  
                  {/* Placeholder Content */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <div className="text-white text-lg font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs font-medium px-2">
                        {service.imageAlt}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden inline-flex items-center justify-center"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    
                    <span className="relative z-10">{service.ctaText}</span>
                  </motion.button>
                </div>

                {/* Shimmer Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 