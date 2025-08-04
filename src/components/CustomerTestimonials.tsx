import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface CustomerTestimonialsProps {
  language?: 'de' | 'en';
}

const CustomerTestimonials = ({ language = 'de' }: CustomerTestimonialsProps) => {
  const texts = language === 'de' ? {
    headline: "Warum erfolgreiche Anleger",
    highlightedText: "auf MMplatinum setzen",
    testimonials: [
      {
        quote: "Minimaler Hebel, maximale Ergebnisse. Bin einfach mega zufrieden. Alles klar und verständlich. Konnte bereits >50% in den letzten 4 Monaten einfahren.",
        name: "Peter Strahl",
        rating: 5
      },
      {
        quote: "Endlich ein Börsendienst, der zu mir passt. Da wird nicht viel geschrieben sondern systematisch gehandelt und ich bin mehr als zufrieden.",
        name: "Adam L.",
        rating: 5
      },
      {
        quote: "Klar verständliche Erläuterungen sowie endlich ein Börsendienst mit funktionierendem Risikomanagement.",
        name: "Markus R.",
        rating: 5
      }
    ]
  } : {
    headline: "Why successful investors",
    highlightedText: "rely on MMplatinum",
    testimonials: [
      {
        quote: "Minimal leverage, maximum results. I'm simply extremely satisfied. Everything clear and understandable. Was able to achieve >50% in the last 4 months.",
        name: "Peter Strahl",
        rating: 5
      },
      {
        quote: "Finally a stock service that suits me. Not much writing but systematic trading and I'm more than satisfied.",
        name: "Adam L.",
        rating: 5
      },
      {
        quote: "Clear understandable explanations and finally a stock service with functioning risk management.",
        name: "Markus R.",
        rating: 5
      }
    ]
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
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
          className="text-left mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left - Headline */}
            <div className="lg:flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                {texts.headline}
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight leading-tight">
                {texts.highlightedText}
              </h2>
            </div>

            {/* Right - Rating Badge */}
            <div className="lg:flex-shrink-0">
              <div className="flex items-center gap-4">
                {/* Customer Avatars */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-gray-600">
                        {i === 1 ? 'P' : i === 2 ? 'A' : i === 3 ? 'M' : i === 4 ? 'S' : 'K'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BESTNOTE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {texts.testimonials.map((testimonial, index) => (
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
              {/* Testimonial Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                
                {/* Quote Icon */}
                <div className="text-6xl md:text-7xl font-bold text-gray-200 mb-4 leading-none">
                  "
                </div>

                {/* Quote Text */}
                <div className="flex-1 mb-6">
                  <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Shimmer Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;