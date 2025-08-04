import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  language?: 'de' | 'en';
}

const Testimonials = ({ language = 'de' }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = language === 'de' ? {
    headline1: "Noch nicht überzeugt?",
    headline2: "Das sagen unsere Kunden.",
    subtitle: "Klingt, als wären sie begeistert? Wir sind sicher, dass du es auch sein wirst!",
    resultLabel: "Resultat:"
  } : {
    headline1: "Not convinced, yet?",
    headline2: "Here's what our customers say.",
    subtitle: "Sounds like they're excited? We're sure you will be too!",
    resultLabel: "Result:"
  };

  const testimonials = language === 'de' ? [
    {
      name: "Daniel",
      content: "Ich habe meine Trades jahrelang in Excel festgehalten, aber dieses Trading Journal hat wirklich alles verändert. Endlich erkenne ich Verhaltensmuster, die mir vorher nie aufgefallen sind.",
      result: "Chance/Risko-Verhältnis 0,97 auf 1,36 gesteigert bei gleicher Gewinnrate.",
      avatar: "/images/Daniel.webp",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      name: "Martin", 
      content: "Das Trading Journal von MMplatinum hat mir Einblicke über mein Trading geliefert, von denen ich gar nicht wusste, dass ich sie brauche. Schon jetzt fühle ich mich bei der Umsetzung meiner Strategie viel sicherer.",
      result: "Höherer durchschnittlicher Gewinn durch mehr Disziplin bei den Ausstiegs-Regeln.",
      avatar: "/images/Martin.webp",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      name: "Joshua",
      content: "Ich hatte das Glück, das Journal vier Wochen lang vor der Veröffentlichung zu testen, und bin begeistert, wie intuitiv und benutzerfreundlich es ist. Mein Profit-Faktor hat sich bereits von 0,87 auf 1,61 verbessert.",
      result: "Profit-Faktor annähernd verdoppelt.",
      avatar: "/images/Joshua.webp",
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "green-500/25"
    },
    {
      name: "Anna",
      content: "Mir war nie bewusst, wie wichtig ein Trading Journal sein kann. Jetzt sehe ich ganz genau, was funktioniert und was mich noch zurückhält.",
      result: "Anzahl gehandelter Symbole von von 5 auf 2 reduziert und Profitfaktor von 1,2 auf 2,3 gesteigert.",
      avatar: "/images/Anna.webp",
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      name: "Alex",
      content: "Seit ich das Trading Journal von MMplatinum nutze, bin ich ein deutlich disziplinierterer Trader geworden. Die Erkenntnisse, die ich aus meinen Trades gewinne, sind unbezahlbar.",
      result: "Weniger Impulse-Trades, konsistentere Gewinne.",
      avatar: "/images/Alex.webp",
      gradient: "from-teal-500 to-blue-500",
      shadowColor: "teal-500/25"
    },
    {
      name: "Pierre",
      content: "Beim Trading zählt vor allem, wie du dich während eines Trades verhältst – und genau das zeigt dir dieses Journal auf unverblümte Weise. Meine Rendite ist besser geworden.",
      result: "Profit-Faktor gesteigert und Performanceverlauf geglättet.",
      avatar: "/images/Pierre.webp",
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "violet-500/25"
    }
  ] : [
    {
      name: "Daniel",
      content: "I've been tracking my trades in Excel for years, but this trading journal has truly changed everything. I finally recognize behavioral patterns that I never noticed before.",
      result: "Risk/reward ratio improved from 0.97 to 1.36 with the same win rate.",
      avatar: "/images/Daniel.webp",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      name: "Martin", 
      content: "The MMplatinum trading journal has given me insights about my trading that I didn't even know I needed. I already feel much more confident implementing my strategy.",
      result: "Higher average profit through more discipline with exit rules.",
      avatar: "/images/Martin.webp",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      name: "Joshua",
      content: "I was lucky enough to test the journal for four weeks before release, and I'm amazed at how intuitive and user-friendly it is. My profit factor has already improved from 0.87 to 1.61.",
      result: "Profit factor nearly doubled.",
      avatar: "/images/Joshua.webp",
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "green-500/25"
    },
    {
      name: "Anna",
      content: "I was never aware of how important a trading journal could be. Now I see exactly what works and what's still holding me back.",
      result: "Reduced traded symbols from 5 to 2 and increased profit factor from 1.2 to 2.3.",
      avatar: "/images/Anna.webp",
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      name: "Alex",
      content: "Since I've been using the MMplatinum trading journal, I've become a much more disciplined trader. The insights I gain from my trades are invaluable.",
      result: "Fewer impulse trades, more consistent profits.",
      avatar: "/images/Alex.webp",
      gradient: "from-teal-500 to-blue-500",
      shadowColor: "teal-500/25"
    },
    {
      name: "Pierre",
      content: "In trading, what matters most is how you behave during a trade – and this journal shows you that in an unvarnished way. My returns have improved.",
      result: "Profit factor increased and performance curve smoothed.",
      avatar: "/images/Pierre.webp",
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "violet-500/25"
    }
  ];

  const stats = language === 'de' ? [
    { value: "+31%", label: "Gewinnrate", gradient: "from-green-500 to-emerald-500" },
    { value: "+85%", label: "Profitfaktor", gradient: "from-blue-500 to-cyan-500" },
    { value: "+40%", label: "Chance/Risiko", gradient: "from-purple-500 to-pink-500" },
    { value: "+100%", label: "Klarheit", gradient: "from-orange-500 to-red-500" }
  ] : [
    { value: "+31%", label: "Win Rate", gradient: "from-green-500 to-emerald-500" },
    { value: "+85%", label: "Profit Factor", gradient: "from-blue-500 to-cyan-500" },
    { value: "+40%", label: "Risk/Reward", gradient: "from-purple-500 to-pink-500" },
    { value: "+100%", label: "Clarity", gradient: "from-orange-500 to-red-500" }
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Helper functions for peek view
  const getPrevIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % testimonials.length;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
        {/* Simplified Header */}
        <motion.div
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            {texts.headline1}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {texts.headline2}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Testimonial Slider with Peek View */}
        <motion.div
          className="relative"
        >
          <div className="max-w-[90rem] mx-auto">
            <div className="relative flex items-center justify-center gap-6 md:gap-12">
              
              {/* Previous Testimonial (Peek) */}
              <div className="hidden lg:block w-80 xl:w-96 opacity-40 hover:opacity-60 transition-all duration-300 cursor-pointer transform scale-80 hover:scale-85"
                   onClick={prevSlide}>
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-6 xl:p-8 shadow-md">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-sm xl:text-base font-light text-gray-700 leading-relaxed mb-4" 
                             style={{
                               display: '-webkit-box',
                               WebkitLineClamp: 4,
                               WebkitBoxOrient: 'vertical',
                               overflow: 'hidden'
                             }}>
                    "{testimonials[getPrevIndex()].content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonials[getPrevIndex()].avatar} 
                      alt={testimonials[getPrevIndex()].name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm xl:text-base">
                        {testimonials[getPrevIndex()].name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Testimonial (Main) */}
              <div className="w-full max-w-4xl z-10">
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
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

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="group"
                    >
                      {/* Compact Stars */}
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      
                      {/* Compact Testimonial Content */}
                      <blockquote className="text-lg md:text-xl font-light text-gray-800 leading-relaxed mb-8">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                      
                      {/* Compact Result Card */}
                      <div className="relative bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/50 rounded-lg p-4 mb-6 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <ArrowRight size={12} className="text-white" />
                          </div>
                          <div>
                            <p className="text-green-800 font-medium leading-relaxed text-sm">
                              <span className="text-green-600 text-xs uppercase tracking-wide font-semibold">{texts.resultLabel}</span><br />
                              {testimonials[currentIndex].result}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Compact Customer Info */}
                      <div className="flex items-center space-x-3">
                        {/* Avatar Image */}
                        <div className="relative">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name}
                            className="w-10 h-10 rounded-full object-cover shadow-md"
                          />
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 text-base">
                            {testimonials[currentIndex].name}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Compact Navigation */}
                  <div className="absolute bottom-6 right-6 flex items-center space-x-2">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight size={16} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>

              {/* Next Testimonial (Peek) */}
              <div className="hidden lg:block w-80 xl:w-96 opacity-40 hover:opacity-60 transition-all duration-300 cursor-pointer transform scale-80 hover:scale-85"
                   onClick={nextSlide}>
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-6 xl:p-8 shadow-md">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-sm xl:text-base font-light text-gray-700 leading-relaxed mb-4" 
                             style={{
                               display: '-webkit-box',
                               WebkitLineClamp: 4,
                               WebkitBoxOrient: 'vertical',
                               overflow: 'hidden'
                             }}>
                    "{testimonials[getNextIndex()].content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonials[getNextIndex()].avatar} 
                      alt={testimonials[getNextIndex()].name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm xl:text-base">
                        {testimonials[getNextIndex()].name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile Indicator Dots */}
            <div className="flex justify-center space-x-2 mt-8 lg:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
