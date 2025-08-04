import React from 'react';
import { motion } from 'framer-motion';

interface AboutFounderProps {
  language?: 'de' | 'en';
}

const AboutFounder = ({ language = 'de' }: AboutFounderProps) => {
  const texts = language === 'de' ? {
    title: "Über den Gründer",
    subtitle: "Die Vision und Expertise hinter dem MMplatinum Trading Journal",
    headline: "Jahrzehntelange Markterfahrung –",
    headlineHighlight: "jetzt für dich verfügbar",
    imageAlt: "Michael Müller - Gründer von MMplatinum",
    paragraphs: [
      "In meinen über 20 Jahren an den Finanzmärkten – davon 15 Jahre im Wealth Management und 8 Jahre in Führungspositionen – habe ich über 30.000 Stunden der Börse gewidmet. Durch eigenes aktives Handeln und die genaue Beobachtung Tausender von Anlegern habe ich gelernt, dass wahrer, dauerhafter Erfolg nicht durch das Lesen von Büchern oder den Besuch von Seminaren erreicht wird.",
      "Er wird durch echte Markterfahrung, genaue Analyse und die Beherrschung der eigenen Emotionen erreicht.",
      "Bei MMplatinum, einem der bestbewertesten Börsendienste im deutschsprachigen Raum, habe ich meine Erkenntnisse und Strategien in eine Reihe von Tools und Services zusammengefasst, die deinen Weg zu dauerhafter Profitabilität beschleunigen sollen. Im Mittelpunkt dieses Angebots steht u.a. unser neues Trading Journal – ein Tool, das diszipliniertes, transparentes Trading fördert und dich in die Lage versetzt, kostspielige Fehler zu vermeiden und gleichzeitig deinen Ansatz kontinuierlich zu verfeinern.",
      "Meine Mission ist einfach: Ich möchte dir einen vertrauenswürdigen Partner zur Seite stellen, der über jahrzehntelange Markterfahrung verfügt. Mit MMplatinum und unserem Trading Journal erhältst du direkten Zugriff auf bewährte Kennzahlen und umsetzbare Erkenntnisse, die dir dabei helfen, smarter zu traden und zuverlässigen, langfristigen Erfolg aufzubauen.",
      "Entdecke, wie meine Erfahrung dir auf den dynamischen Kapitalmärkten von heute einen Vorteil verschaffen kann."
    ]
  } : {
    title: "About the Founder",
    subtitle: "The vision and expertise behind the MMplatinum Trading Journal",
    headline: "Decades of Market Mastery –",
    headlineHighlight: "Now at Your Fingertips",
    imageAlt: "Michael Müller - Founder of MMplatinum",
    paragraphs: [
      "With over 20 years in the financial markets - 15 of those in wealth management and 8 in leadership roles - I've dedicated more than 30,000 hours to the stock market. Through active trading and close observation of thousands of investors, I've learned that true, lasting success isn't achieved by reading books or attending seminars. It's forged through real market experience, precise analysis, and mastering the control of your emotions.",
      "At MMplatinum, one of the best-rated trading services in the German-speaking region, I've distilled my insights and strategies into a suite of tools and services designed to fast-track your journey to consistent profitability. Central to this offering is our new Trading Journal - a tool that encapsulates disciplined, transparent trading practices and empowers you to avoid costly mistakes while continuously refining your approach.",
      "My mission is simple: to provide you with a trusted partner who shares decades of market expertise. With MMplatinum and our Trading Journal, you gain direct access to proven metrics and actionable insights, helping you trade smarter and build reliable, long-term success. Discover how my experience can be your advantage in today's dynamic capital markets."
    ]
  };

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Professional Founder Image */}
          <motion.div
            className="relative max-w-md mx-auto lg:max-w-full"
          >
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '25px 25px'
                }}></div>
              </div>

              <div className="relative z-10">
                {/* Professional Image Placeholder */}
                <div className="relative mb-6">
                  <div className="w-full aspect-[4/5] max-h-96 lg:max-h-none bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                    {/* Image Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    {/* Real Founder Photo */}
                    <img 
                      src="/images/ich.webp" 
                      alt={texts.imageAlt}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6"
          >
            {/* Main Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                  {texts.headline} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{texts.headlineHighlight}</span>
                </h3>
              </div>

              <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
                {texts.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder; 