import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, CheckCircle, ArrowRight, Mail, Star, Award } from 'lucide-react';

interface MoneyBackGuaranteeProps {
  language?: 'de' | 'en';
}

const MoneyBackGuarantee = ({ language = 'de' }: MoneyBackGuaranteeProps) => {
  const texts = language === 'de' ? {
    mainTitle: "Geld-zurück-Garantie",
    subtitle: "Wir sind so überzeugt von unserem Trading Journal, dass wir dir eine 14-tägige Geld-zurück-Garantie bieten.",
    protectedTitle: "Deine Investition ist zu 100% geschützt",
    protectedText: "Falls du innerhalb der ersten 14 Tage merkst, dass das MMplatinum Trading Journal nicht das richtige für dich ist, erhältst du ohne Wenn und Aber dein Geld zurück. Keine komplizierten Fragen, keine versteckten Bedingungen.",
    riskFreeTitle: "Du gehst absolut kein Risiko ein!",
    riskFreeText: "Teste das Trading Journal 14 Tage lang und überzeuge dich selbst. Solltest du nicht zu 100% zufrieden sein, schreibe uns einfach eine E-Mail und du erhältst dein Geld vollständig zurück.",
    ctaMobileLine1: "Lifetime-Zugang mit",
    ctaMobileLine2: "14-Tage Garantie sichern",
    ctaDesktop: "Lifetime-Zugang mit 14-Tage Garantie sichern"
  } : {
    mainTitle: "Money-Back Guarantee",
    subtitle: "We are so confident in our trading journal that we offer you a 14-day money-back guarantee.",
    protectedTitle: "Your investment is 100% protected",
    protectedText: "If within the first 14 days you decide the MMplatinum Trading Journal isn't right for you, you'll receive a full refund—no ifs, ands, or buts. No questions asked. No hidden conditions.",
    riskFreeTitle: "There's absolutely no risk!",
    riskFreeText: "Try the trading journal risk-free for 14 days, and see for yourself. If you're not 100 % satisfied, simply email us, and you'll receive a full refund.",
    ctaMobileLine1: "Secure Lifetime Access with",
    ctaMobileLine2: "14-Day Guarantee",
    ctaDesktop: "Secure Lifetime Access with a 14-Day Guarantee"
  };

  const guaranteeFeatures = language === 'de' ? [
    {
      icon: Clock,
      title: "14 Tage Testzeit",
      description: "Probiere das Trading Journal 14 Tage lang risikofrei aus",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "100% Geld-zurück",
      description: "Falls du nicht zufrieden bist, erhältst du dein Geld vollständig zurück",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Keine Fragen gestellt",
      description: "Einfache Rückerstattung ohne komplizierte Begründungen",
      gradient: "from-purple-500 to-pink-500"
    }
  ] : [
    {
      icon: Clock,
      title: "14 Days Trial Period",
      description: "Try the trading journal completely risk-free for 14 days",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "100% Money Back",
      description: "If you're not completely satisfied, you'll get a full refund",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "No Questions Asked",
      description: "Enjoy a hassle-free refund with no complicated procedures",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-white via-gray-50/40 to-green-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-green-50/40 to-blue-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0 }}
          className="text-center mb-16"
        >
          {/* Premium Icon */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl hover:scale-110 transition-transform duration-300 relative overflow-hidden">
              {/* Icon Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-700 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[200%]"></div>
              <Shield size={48} className="text-white relative z-10" />
            </div>
            {/* Icon Glow Effect */}
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 hover:opacity-20 blur-xl transition-all duration-300 mx-auto"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {texts.mainTitle}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {texts.subtitle.split('14-tägige Geld-zurück-Garantie').length > 1 ? (
              <>
                {texts.subtitle.split('14-tägige Geld-zurück-Garantie')[0]}
                <span className="text-green-600 font-semibold">
                  {language === 'de' ? '14-tägige Geld-zurück-Garantie' : '14-day money-back guarantee'}
                </span>
                {texts.subtitle.split('14-tägige Geld-zurück-Garantie')[1]}
              </>
            ) : (
              <>
                {texts.subtitle.split('14-day money-back guarantee')[0]}
                <span className="text-green-600 font-semibold"> 14-day money-back guarantee</span>
                {texts.subtitle.split('14-day money-back guarantee')[1]}
              </>
            )}
          </p>
        </motion.div>

        {/* Premium Main Guarantee Box */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0 }}
          className="text-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
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

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6 space-x-2">
                <Award size={24} className="text-green-600" />
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">
                  {texts.protectedTitle}
                </h3>
                <Award size={24} className="text-blue-600" />
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                {texts.protectedText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {guaranteeFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0 }}
                  className="group text-center"
                >
                  {/* Premium Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <feature.icon size={32} className="text-white relative z-10" />
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125 mx-auto`}></div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Premium Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </motion.div>

        {/* Premium Risk-free Statement */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0 }}
          className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-12 shadow-2xl text-center mt-20 overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6 space-x-2">
              <Star size={28} className="text-white" />
              <h3 className="text-3xl md:text-4xl font-light text-white">
                {texts.riskFreeTitle}
              </h3>
              <Star size={28} className="text-white" />
            </div>
            
            <p className="text-xl text-white/90 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              {texts.riskFreeText}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={language === 'en' 
                  ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden inline-flex items-center"
              >
                {/* Animated Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
                
                {/* Button Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center justify-center space-x-3 whitespace-nowrap">
                  {/* Mobile Version - Zwei Zeilen */}
                  <span className="flex flex-col items-center text-center sm:hidden">
                    <span className="text-base font-normal mb-1">{texts.ctaMobileLine1}</span>
                    <span className="text-base font-medium">{texts.ctaMobileLine2}</span>
                  </span>
                  
                  {/* Desktop Version - Eine Zeile */}
                  <span className="hidden sm:flex items-center space-x-3">
                    <span>{texts.ctaDesktop}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  
                  {/* Mobile Arrow */}
                  <ArrowRight size={20} className="sm:hidden group-hover:translate-x-2 transition-transform mt-1" />
                </span>
              </a>
              
              <div className="flex items-center space-x-2 text-white/90 font-light">
                <Mail size={20} />
                <span>info@mmplatinum.de</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee; 