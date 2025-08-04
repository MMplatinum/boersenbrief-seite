import React from 'react';
import { motion } from 'framer-motion';

interface EmotionsSectionProps {
  language?: 'de' | 'en';
}

const EmotionsSection = ({ language = 'de' }: EmotionsSectionProps) => {
  const texts = language === 'de' ? {
    mainHeadline: "Ihre Emotionen sind entscheidend",
    subHeadline: "Seit Jahrzehnten bestätigen unzählige Studien:",
    paragraph1: "Mehr als 80% der Privatanleger verlieren an der Börse langfristig Geld, obwohl die Aktienmärkte über die Jahre steigen.",
    paragraph2: "Die tatsächliche Ursache, dieser erschreckenden Statistik, liegt jedoch keineswegs im mangelnden Wissen oder fehlenden Informationszugang der Anleger.",
    paragraph3: "Erfolgreiches Investieren ist zu 20% Strategie und zu 80% Emotionen. Emotionen wie Angst, Gier, Hoffnung, Euphorie und Verunsicherung bewegen Anleger dazu, Entscheidungen zu treffen, die ihnen langfristig zum Nachteil werden.",
    paragraph4: "MMplatinum bietet Ihnen deshalb mehr als nur erprobte und erfolgreich bewährte Anlagestrategien. Sie erhalten zudem klare Handelssignale und eine tägliche Begleitung, die Ihnen wesentlich dabei helfen wird, Ihre Emotionen im Griff zu behalten. Dies ermöglicht es Ihnen, konsequent auf dem Weg zum Anlageerfolg zu bleiben."
  } : {
    mainHeadline: "Your emotions are decisive",
    subHeadline: "For decades, countless studies have confirmed:",
    paragraph1: "More than 80% of private investors lose money on the stock market in the long term, although stock markets rise over the years.",
    paragraph2: "The actual cause of this alarming statistic, however, is by no means due to investors' lack of knowledge or missing access to information.",
    paragraph3: "Successful investing is 20% strategy and 80% emotions. Emotions like fear, greed, hope, euphoria and uncertainty drive investors to make decisions that will be detrimental to them in the long run.",
    paragraph4: "MMplatinum therefore offers you more than just proven and successfully tested investment strategies. You also receive clear trading signals and daily guidance that will significantly help you keep your emotions in check. This enables you to consistently stay on the path to investment success."
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-4">
            Ihre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Emotionen</span> sind entscheidend
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            {texts.subHeadline}
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: window.innerWidth >= 768 ? 0.8 : 0,
            delay: window.innerWidth >= 768 ? 0.2 : 0,
            ease: "easeOut"
          }}
          className="group relative"
        >
          <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {texts.paragraph1}
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {texts.paragraph2}
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {texts.paragraph3}
              </p>
              
              <div className="relative bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-6 md:p-8 border border-blue-100/50">
                <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
                  <span className="font-medium text-gray-900">MMplatinum</span> {texts.paragraph4.replace('MMplatinum ', '')}
                </p>
              </div>
            </div>

            {/* Shimmer Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
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
      </div>
    </section>
  );
};

export default EmotionsSection;