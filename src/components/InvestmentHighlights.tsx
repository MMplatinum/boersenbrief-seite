import React from 'react';
import { motion } from 'framer-motion';

interface InvestmentHighlightsProps {
  language?: 'de' | 'en';
}

const InvestmentHighlights = ({ language = 'de' }: InvestmentHighlightsProps) => {
  const texts = language === 'de' ? {
    headline: "Einige Highlights,",
    subtitle: "die meine Anleger über die letzten Monate mit MMplatinum realisieren konnten."
  } : {
    headline: "Some Highlights,",
    subtitle: "that my investors were able to realize over the last months with MMplatinum."
  };

  const companies = [
    { name: "Fiserv", logo: "FISERV", percentage: "+140%", color: "from-orange-500 to-orange-600" },
    { name: "NVIDIA", logo: "NVIDIA", percentage: "+311%", color: "from-green-500 to-green-600" },
    { name: "Broadcom", logo: "BROADCOM", percentage: "+150%", color: "from-red-500 to-red-600" },
    { name: "Broadcom", logo: "BROADCOM", percentage: "+121%", color: "from-red-500 to-red-600" },
    { name: "Costco", logo: "COSTCO WHOLESALE", percentage: "+135%", color: "from-red-500 to-red-600" },
    { name: "Amazon", logo: "amazon", percentage: "+113%", color: "from-gray-800 to-gray-900" },
    { name: "Progressive", logo: "PROGRESSIVE", percentage: "+113%", color: "from-blue-500 to-blue-600" },
    { name: "Lilly", logo: "Lilly", percentage: "+105%", color: "from-red-500 to-red-600" },
    { name: "Motorola Solutions", logo: "MOTOROLA SOLUTIONS", percentage: "+120%", color: "from-gray-800 to-gray-900" },
    { name: "John Deere", logo: "JOHN DEERE", percentage: "+88%", color: "from-green-500 to-green-600" },
    { name: "Align", logo: "align", percentage: "+228%", color: "from-gray-700 to-gray-800" },
    { name: "Intuitive Surgical", logo: "INTUITIVE SURGICAL", percentage: "+135%", color: "from-gray-500 to-gray-600" },
    { name: "NVIDIA", logo: "NVIDIA", percentage: "+93%", color: "from-green-500 to-green-600" },
    { name: "Pinduoduo", logo: "Pinduoduo", percentage: "+90%", color: "from-red-500 to-red-600" },
    { name: "Copart", logo: "Copart", percentage: "+92%", color: "from-blue-500 to-blue-600" },
    { name: "Google", logo: "Google", percentage: "+106%", color: "from-blue-500 to-blue-600" }
  ];

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-4">
            {texts.headline}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Company Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.2 : 0,
            ease: "easeOut"
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
        >
          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: window.innerWidth >= 768 ? 0.6 : 0,
                delay: window.innerWidth >= 768 ? 0.4 + (index * 0.05) : 0,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Company Card */}
              <div className="relative bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 md:p-6 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                
                {/* Company Logo */}
                <div className="mb-3">
                  <div className={`w-full h-12 md:h-16 bg-gradient-to-r ${company.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm md:text-base tracking-tight">
                      {company.logo}
                    </span>
                  </div>
                </div>

                {/* Percentage */}
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                    {company.percentage}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    {company.name}
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
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
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.8 : 0,
            ease: "easeOut"
          }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 font-light italic">
            {language === 'de' ? 'Vergangene Ergebnisse garantieren keine zukünftigen Erträge.' : 'Past performance does not guarantee future returns.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentHighlights; 