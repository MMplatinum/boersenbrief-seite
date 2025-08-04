import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, DollarSign, Users, Gift, CheckCircle, Link as LinkIcon, Settings, Plus, Minus, TrendingUp, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navigation';

// TypeScript Declaration für gtag (falls noch nicht global vorhanden)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Partners = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Partnerprogramm - MMplatinum Trading Journal";
    // Ggf. Analytics Event hier
  }, []);

  // Placeholder Texte, angelehnt an TradeZella, aber generischer
  const texts = {
    heroHeadline1: "Werde jetzt ein",
    heroHeadline2: "MMplatinum Partner",
    heroSubheadline: "Verdiene 30% Provision für jeden geworbenen Kunden und hilf Tradern, ihre Ziele zu erreichen.",
    heroCta: "Jetzt Partner werden",
    howItWorksTitle1: "So einfach",
    howItWorksTitle2: "startest du durch",
    howItWorksSubtitle: "Dein Weg zum erfolgreichen Partner in nur drei einfachen Schritten",
    step1Title: "Bewerben & Beitreten",
    step1Description: "Klicke auf 'Partner werden' und erstelle einen kostenlosen Lemon Squeezy Account. Die Registrierung dauert nur wenige Minuten.",
    step2Title: "Empfehlungslink erhalten",
    step2Description: "Nach unserer Bestätigung deiner Anfrage erhältst du sofort Zugang zu deinem Partner-Dashboard mit deinem persönlichen Empfehlungslink und Tracking-Tools.",
    step3Title: "Provisionen verdienen",
    step3Description: "Empfiehl das Trading Journal über deine Website, deinen Blog oder Social Media und verdiene 30% Provision für jeden erfolgreichen Verkauf.",
    whyPartnerTitle1: "Warum MMplatinum",
    whyPartnerTitle2: "Partner werden?",
    whyPartnerSubtitle: "Profitiere von 6-9% Conversion Rate, 30% Provision und unserem erfolgreichen Partnerprogramm.",
    benefit1Title: "Faire 30% Provision",
    benefit1Description: "Verdiene eine attraktive Provision von 30% für jeden erfolgreichen Verkauf des MMplatinum Trading Journals (einmalig 59€).",
    benefit2Title: "30-Tage Cookie-Laufzeit",
    benefit2Description: "Profitiere von einer 30-tägigen Cookie-Laufzeit. Du erhältst Provision für alle Käufe, die innerhalb von 30 Tagen nach deiner Empfehlung getätigt werden.",
    benefit3Title: "Hohe Conversion Rates (6-9%)",
    benefit3Description: "Unser Produkt konvertiert stark: Mit bezahltem Traffic erreichen wir 6-9% Conversion Rate. Das bedeutet mehr Einnahmen für dich!",
    benefit4Title: "Starkes Produkt & Support",
    benefit4Description: "Bewirb ein Produkt mit 30+ Analyse-Widgets, KI-Mentor, zweisprachiger App und zweisprachigem Support (DE/EN), das von Tradern für Trader entwickelt wurde.",
    benefit5Title: "Lifetime Attribution",
    benefit5Description: "Verdiene dauerhaft an deinen geworbenen Kunden dank Lifetime Attribution. Einmal geworben, immer beteiligt!",
    benefit6Title: "Einfache Registrierung & Abwicklung",
    benefit6Description: "Keine komplizierte Bewerbung. Die Registrierung und Abwicklung läuft einfach und zuverlässig über Lemon Squeezy.",
    faqTitle: "FAQs",
    faqSubtitle: "Antworten auf die wichtigsten Fragen zu unserem Partnerprogramm",
    faq1Question: "Wie viel kann ich verdienen?",
    faq1Answer: "Du verdienst 30% Provision für jeden erfolgreichen Verkauf des MMplatinum Trading Journals (Preis 59€). Es gibt keine Begrenzung, wie viel du insgesamt verdienen kannst.",
    faq3Question: "Für wen ist das Produkt ideal?",
    faq3Answer: "Das Journal ist ideal für Daytrader, Swingtrader, Forex/CFD-Nutzer und Trading-Anfänger, die Struktur suchen. Auch für Coaches, Lehrer und Kursteilnehmer ist es eine wertvolle Ergänzung.",
    faq4Question: "Was ist bei der Bewerbung erlaubt und was nicht?",
    faq4Answer: "Erlaubt: Empfehlungen an Freunde, Social Media Posts, YouTube Videos, ehrliche Reviews, Blog-Artikel, E-Mail Newsletter, Trading-Gruppen und Communities. Nicht erlaubt: Brand Bidding (auf unsere Marke bieten), Falschaussagen über das Produkt, unrealistische Versprechungen oder Performance-Garantien, eigene Käufe über den Empfehlungslink.",
    finalCtaHeadline: "Tritt noch heute unserem Partnerprogramm bei!",
    finalCtaSubheadline: "Beginne, mit deiner Empfehlung 30% Provision pro Verkauf zu verdienen und profitiere von 6-9% Conversion Rate.",
    finalCtaButton: "Jetzt zum Partnerprogramm"
  };

  const howItWorksSteps = [
    { 
      icon: Users, 
      title: texts.step1Title, 
      description: texts.step1Description, 
      gradient: "from-sky-500 to-cyan-500", 
      shadowColor: "sky-500/25"
    },
    { 
      icon: LinkIcon, 
      title: texts.step2Title, 
      description: texts.step2Description, 
      gradient: "from-teal-500 to-emerald-500",
      shadowColor: "teal-500/25"  
    },
    { 
      icon: DollarSign, 
      title: texts.step3Title, 
      description: texts.step3Description, 
      gradient: "from-blue-500 to-indigo-500",
      shadowColor: "blue-500/25"
    },
  ];

  const benefits = [
    { 
      icon: DollarSign, 
      title: texts.benefit1Title, 
      description: texts.benefit1Description, 
      gradient: "from-green-500 to-emerald-500", 
      shadowColor: "green-500/25"
    },
    { 
      icon: Gift, 
      title: texts.benefit2Title, 
      description: texts.benefit2Description, 
      gradient: "from-sky-500 to-blue-500", 
      shadowColor: "sky-500/25"
    },
    { 
      icon: TrendingUp, 
      title: texts.benefit3Title, 
      description: texts.benefit3Description, 
      gradient: "from-purple-500 to-violet-500", 
      shadowColor: "purple-500/25"
    },
    { 
      icon: CheckCircle, 
      title: texts.benefit4Title, 
      description: texts.benefit4Description, 
      gradient: "from-lime-500 to-green-600", 
      shadowColor: "lime-500/25"
    },
    { 
      icon: Award, 
      title: texts.benefit5Title, 
      description: texts.benefit5Description, 
      gradient: "from-amber-500 to-yellow-500", 
      shadowColor: "amber-500/25"
    },
    { 
      icon: Settings, 
      title: texts.benefit6Title, 
      description: texts.benefit6Description, 
      gradient: "from-rose-500 to-pink-500", 
      shadowColor: "rose-500/25"
    },
  ];

  const faqs = [
    { 
      question: texts.faq1Question, 
      answer: texts.faq1Answer,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      question: texts.faq3Question, 
      answer: texts.faq3Answer,
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      question: texts.faq4Question, 
      answer: texts.faq4Answer,
      gradient: "from-orange-500 to-red-500"
    },
  ];

  // Definiere einen Typ für die Props von ChevronDown, der 'size' einschließt
  interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
  }

  // Helper-Komponente für ChevronDown, da es in der FAQ-Section genutzt wird
  const ChevronDown = (props: ChevronDownProps) => {
    const { size = 24, ...rest } = props; // Standardgröße 24, wenn keine angegeben
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar language="de" /> {/* Annahme: Navbar akzeptiert language prop */}

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden"
      >
        {/* Clean Background Elements - matching Hero.tsx */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative section-container">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 tracking-tight leading-none md:leading-tight"
            >
              {texts.heroHeadline1}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                {texts.heroHeadline2}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-snug md:leading-relaxed"
            >
              {texts.heroSubheadline}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} 
            >
              <a
                href="https://mmplatinum.lemonsqueezy.com/affiliates" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden inline-flex items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{texts.heroCta}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-12 md:mt-16" // Abstand zum Button
            >
              <img 
                src="/images/partner-globe.webp" // Korrigierter Pfad zum Bild im public/images Ordner
                alt="Partner Network Globe" 
                className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl rounded-lg" // Bild vergrößert und Schatten entfernt
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* How it Works Section */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-white via-blue-50/30 to-gray-50/60 relative overflow-hidden">
        {/* Elegant Background Elements - matching TargetAudience.tsx */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              {texts.howItWorksTitle1}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                {texts.howItWorksTitle2}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {texts.howItWorksSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? index * 0.2 : 0,
                  ease: "easeOut"
                }}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow items-center text-center">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${step.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <step.icon size={28} className="text-white relative z-10" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {step.description}
                  </p>
                </div>
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>

                <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${step.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-white via-blue-50/30 to-gray-50/60 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              {texts.whyPartnerTitle1}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                {texts.whyPartnerTitle2}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {texts.whyPartnerSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? index * 0.2 : 0,
                  ease: "easeOut"
                }}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${benefit.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <benefit.icon size={28} className="text-white relative z-10" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {benefit.description}
                  </p>
                </div>
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>

                <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${benefit.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r ${benefit.gradient} rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section - exactly matching FAQ.tsx style */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative section-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                {texts.faqTitle}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {texts.faqSubtitle}
            </p>
          </motion.div>

          <div className="space-y-6 mb-20">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: window.innerWidth >= 768 ? 0.5 : 0,
                  delay: window.innerWidth >= 768 ? index * 0.1 : 0,
                  ease: "easeOut"
                }}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="relative z-10 w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      {openIndex === index ? (
                        <Minus size={20} className="text-white relative z-10" />
                      ) : (
                        <Plus size={20} className="text-white relative z-10" />
                      )}
                    </div>
                    <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 1 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-gradient-to-r from-gray-50/60 to-blue-50/30 backdrop-blur-sm relative z-10"
                    >
                      <div className="px-8 pb-8">
                        <div className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6">
                          <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-br from-slate-800 via-sky-800 to-cyan-900 text-white">
        <div className="section-container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 tracking-tight"
          >
            {texts.finalCtaHeadline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-sky-200/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            {texts.finalCtaSubheadline}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://mmplatinum.lemonsqueezy.com/affiliates" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30 overflow-hidden inline-flex items-center space-x-2"
          >
            <span>{texts.finalCtaButton}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      <Footer language="de" /> {/* Annahme: Footer akzeptiert language prop */}
    </div>
  );
};

export default Partners; 