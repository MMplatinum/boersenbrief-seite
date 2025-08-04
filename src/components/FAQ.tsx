import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Mail, ArrowRight } from 'lucide-react';

interface FAQProps {
  language?: 'de' | 'en';
}

const FAQ = ({ language = 'de' }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const texts = language === 'de' ? {
    title: "FAQs",
    subtitle: "Antworten auf die wichtigsten Fragen zu deinem Trading Journal",
    contactTitle: "Du hast noch Fragen?",
    contactText: "Unser Team steht dir gerne zur Verfügung und beantwortet all deine Fragen rund um das Trading Journal.",
    contactButton: "Jetzt kontaktieren",
    emailSubject: "Frage zum Trading Journal"
  } : {
    title: "FAQs",
    subtitle: "Answers to the most important questions about your trading journal",
    contactTitle: "Still have questions?",
    contactText: "Our team is happy to help and answer all your questions about the trading journal.",
    contactButton: "Contact us now",
    emailSubject: "Question about Trading Journal"
  };

  const faqs = language === 'de' ? [
    {
      question: "Gibt es weitere, regelmäßige Kosten?",
      answer: `Nein, es gibt keine wiederkehrenden Kosten. Du zahlst einmalig für lebenslangen Zugang – ohne monatliche oder jährliche Gebühren.

Direkt nach dem Kauf erhältst du vollen Zugriff, ohne dir Gedanken über weitere Zahlungen machen zu müssen. Unser Ziel ist es, dir eine einmalige Investition zu bieten, die dir hilft, dein Trading für immer zu verwalten und zu optimieren – ganz ohne laufende Kosten.`,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      question: "Muss ich ein Programm installieren oder eine App herunterladen?",
      answer: `Nein, es gibt nichts zu installieren. Das Trading Journal ist eine vollständig cloudbasierte Web-App – du kannst also von jedem modernen Browser darauf zugreifen, ohne Software herunterladen oder einrichten zu müssen.

Du kannst dich von jedem Gerät aus anmelden – ob PC, Tablet oder Smartphone – und hast jederzeit und überall sofortigen Zugriff auf deine Trading-Daten.`,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      question: "Kann ich das Trading-Journal auch von meinem Smartphone oder Tablet aus nutzen?",
      answer: `Ja! Da es cloudbasiert ist, kannst du deine Trades überall auf deinem Smartphone oder Tablet erfassen und sie später auf deinem Desktop überprüfen.

Die Benutzeroberfläche ist für alle Geräte optimiert, sodass du deine Trades nahtlos verfolgen, analysieren und verwalten kannst – egal, ob du zu Hause bist oder unterwegs.`,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      question: "Kann ich unter einem Benutzerkonto mehrere Trading-Konten verwalten?",
      answer: `Absolut! Mit einem einzigen Login kannst du bis zu 20 verschiedene Accounts erstellen, verwalten, analysieren und sogar löschen.

Alles wird über ein zentrales Dashboard gesteuert, sodass du mühelos mehrere Accounts an einem Ort verfolgen und analysieren kannst.`,
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "Kann ich meinen Broker direkt mit dem Trading-Journal verbinden?",
      answer: `Absolut – mittlerweile hast du drei Möglichkeiten, deine Trades ins Journal zu holen.

Mit dem SyncEA verbindest du jeden MT4-/MT5-Broker direkt und alle Hard-Facts (Symbol, Ein-/Ausstieg, Volumen, P/L, Gebühren u. Ä.) landen vollautomatisch im Journal.

Für andere Broker oder Plattformen nutzt du einfach den CSV-Upload und importierst komplette Historien mit wenigen Klicks.

Oder du erfasst alle Tradedetails manuell.

Egal für welche Variante du dich entscheidest: Screenshots, Emotionen, Strategie-Treue und individuelle Trade-Notizen solltest du immer manuell ergänzen. Gerade diese „Soft-Facts" machen aus bloßen Zahlen verwertbare Erkenntnisse – sie zeigen dir, warum ein Trade funktioniert hat und wo du dein Verhalten noch verbessern kannst.`,
      gradient: "from-violet-500 to-purple-500"
    }
  ] : [
    {
      question: "Are there any additional, recurring costs?",
      answer: `No, there are no recurring costs. You pay once for lifetime access – without monthly or annual fees.

Right after purchase, you get full access without having to worry about additional payments. Our goal is to offer you a one-time investment that helps you manage and optimize your trading forever – completely without ongoing costs.`,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      question: "Do I need to install a program or download an app?",
      answer: `No, there's nothing to install. The Trading Journal is a fully cloud-based web app – so you can access it from any modern browser without having to download or set up software.

You can log in from any device – whether PC, tablet or smartphone – and have instant access to your trading data anytime, anywhere.`,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      question: "Can I use the Trading Journal from my smartphone or tablet?",
      answer: `Yes! Since it's cloud-based, you can record your trades anywhere on your smartphone or tablet and review them later on your desktop.

The user interface is optimized for all devices, so you can seamlessly track, analyze and manage your trades – whether you're at home or on the go.`,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      question: "Can I manage multiple trading accounts under one user account?",
      answer: `Absolutely! With a single login, you can create, manage, analyze and even delete up to 20 different accounts.

Everything is controlled through a central dashboard, so you can effortlessly track and analyze multiple accounts in one place.`,
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "Can I connect my broker directly to the Trading Journal?",
      answer: `Absolutely – you now have three ways to get your trades into the journal.

With SyncEA, you connect any MT4/MT5 broker directly and all hard facts (symbol, entry/exit, volume, P/L, fees, etc.) land fully automatically in the journal.

For other brokers or platforms, simply use the CSV upload and import complete histories with just a few clicks.

Or you can capture all trade details manually.

Regardless of which option you choose: Screenshots, emotions, strategy adherence and individual trade notes should always be added manually. These "soft facts" turn raw numbers into actionable insights – they show you why a trade worked and where you can still improve your behavior.`,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container max-w-5xl">
        {/* Professional Header */}
        <motion.div
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {texts.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Premium FAQ Accordion */}
        <div className="space-y-6 mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
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

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="relative z-10 w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {faq.question}
                </h3>
                
                {/* Premium Toggle Icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    {/* Icon Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    {openIndex === index ? (
                      <Minus size={20} className="text-white relative z-10" />
                    ) : (
                      <Plus size={20} className="text-white relative z-10" />
                    )}
                  </div>
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 1 }}
                    animate={{ 
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0 }}
                    className="overflow-hidden bg-gradient-to-r from-gray-50/60 to-blue-50/30 backdrop-blur-sm relative z-10"
                  >
                    <div className="px-8 pb-8">
                      <div className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6">
                        <p className="text-gray-700 font-light leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Premium Border Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Premium Contact Section */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.3 : 0,
            ease: "easeOut"
          }}
          className="text-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg"
        >
          <div className="relative z-10">
            {/* Premium Icon */}
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                {/* Icon Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-1000"></div>
                <MessageCircle size={28} className="text-white relative z-10" />
              </div>
              {/* Icon Glow Effect */}
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-20 blur-xl transition-all duration-300 mx-auto"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">{texts.contactTitle}</h3>
            
            <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              {texts.contactText}
            </p>
            
            <a 
              href={`mailto:info@mmplatinum.de?subject=${texts.emailSubject}`}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center"
            >
              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>
              
              {/* Button Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center space-x-2 whitespace-nowrap">
                <Mail size={18} />
                <span>{texts.contactButton}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
