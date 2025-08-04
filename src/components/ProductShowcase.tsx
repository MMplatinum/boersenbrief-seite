import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, LayoutDashboard, List, Calendar, CreditCard, BarChart3, BookOpen, Edit, TrendingUp, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

interface ProductShowcaseProps {
  language?: 'de' | 'en';
}

const ProductShowcase = ({ language = 'de' }: ProductShowcaseProps) => {
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);
  const fifthScreenshotRef = useRef<HTMLDivElement | null>(null);
  const fourthScreenshotRef = useRef<HTMLDivElement | null>(null);
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const prevShowAllScreenshots = useRef(showAllScreenshots);
  useEffect(() => {
    if (showAllScreenshots && fifthScreenshotRef.current) {
      fifthScreenshotRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (!showAllScreenshots && prevShowAllScreenshots.current && fourthScreenshotRef.current) {
      fourthScreenshotRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    prevShowAllScreenshots.current = showAllScreenshots;
  }, [showAllScreenshots]);

  const texts = language === 'de' ? {
    headline1: "Entdecke das Trading Journal, das deine",
    headline2: "Performance transformieren wird",
    subtitle: "Sieh dir die professionellen Features in Aktion an",
    ctaHeadline: "Bereit, dein Trading zu revolutionieren?",
    ctaDescription: "Erlebe alle Features selbst und entdecke, wie professionelles Trading Journaling deine Performance transformiert.",
    cta: "Jetzt risikofrei starten",
    guarantee: "14-Tage Geld-Zurück-Garantie",
    showMore: "weitere Screenshots anzeigen",
    showLess: "weitere Screenshots ausblenden"
  } : {
    headline1: "Discover the Trading Journal That Will",
    headline2: "Transform Your Performance",
    subtitle: "See the professional features in action",
    ctaHeadline: "Ready to revolutionize your trading?",
    ctaDescription: "Experience all features yourself and discover how professional trading journaling transforms your performance.",
    cta: "Start Risk-Free Now",
    guarantee: "14-Day Money-Back Guarantee",
    showMore: (n: number) => `Show ${n} more screenshots`,
    showLess: (n: number) => `Hide ${n} screenshots`
  };

  const showcaseItems = language === 'de' ? [
    {
      image: "/images/Trading Journal Dashboard.webp",
      title: "Trading Journal Dashboard",
      description: "Erstelle dir eine ganz persönliche Ansicht mit mehr als 30 individuellen Kennzahlen und Charts.",
      gradient: "from-blue-500 to-cyan-500",
      icon: LayoutDashboard
    },
    {
      image: "/images/Trades Liste.webp",
      title: "Trades Liste",
      description: "Überprüfe, filtere und analysiere all deine Trades im Detail.",
      gradient: "from-purple-500 to-pink-500",
      icon: List
    },
    {
      image: "/images/Kalender.webp",
      title: "Kalender",
      description: "Behalte jeden Trading-Tag und alle wichtigen Ereignisse im Blick.",
      gradient: "from-emerald-500 to-teal-500",
      icon: Calendar
    },
    {
      image: "/images/Konten-Management.webp",
      title: "Konten-Management",
      description: "Füge bis zu 20 Trading-Konten hinzu und verwalte sie bequem.",
      gradient: "from-orange-500 to-red-500",
      icon: CreditCard
    },
    {
      image: "/images/widgets (2).webp",
      title: "Widgets",
      description: "Wähle aus einer Vielzahl an Übersichten, um dein Dashboard zu optimieren.",
      gradient: "from-violet-500 to-purple-500",
      icon: BarChart3
    },
    {
      image: "/images/Strategie-Playbooks.webp",
      title: "Strategie-Playbooks",
      description: "Dokumentiere, verfeinere und befolge jeden Schritt deiner Trading-Regeln.",
      gradient: "from-teal-500 to-cyan-500",
      icon: BookOpen
    },
    {
      image: "/images/Notizen.webp",
      title: "Notizen",
      description: "Halte wichtige Entscheidungen, Veränderungen und Ideen fest.",
      gradient: "from-amber-500 to-orange-500",
      icon: Edit
    },
    {
      image: "/images/TradingView Charts.webp",
      title: "TradingView Charts",
      description: "Analysiere Charts und erfasse Screenshots von jedem Einstieg und Ausstieg.",
      gradient: "from-indigo-500 to-blue-500",
      icon: TrendingUp
    },
    {
      image: "/images/KI-Trading-Mentor.webp",
      title: "KI-Trading-Mentor",
      description: "Frage deinen Mentor allgemeine Trading-Themen oder steige tief in deine persönlichen Trading-Daten ein.",
      gradient: "from-pink-500 to-rose-500",
      icon: Brain
    }
  ] : [
    {
      image: "/images/Trading Journal Dashboard.webp",
      title: "Trading Journal Dashboard",
      description: "Create a fully personalized dashboard with more than 30 customizable metrics and charts.",
      gradient: "from-blue-500 to-cyan-500",
      icon: LayoutDashboard
    },
    {
      image: "/images/Trades Liste.webp",
      title: "Trades List",
      description: "Review, filter and analyze all your trades in detail.",
      gradient: "from-purple-500 to-pink-500",
      icon: List
    },
    {
      image: "/images/Kalender.webp",
      title: "Calendar",
      description: "Stay on top of each trading day and key events.",
      gradient: "from-emerald-500 to-teal-500",
      icon: Calendar
    },
    {
      image: "/images/Konten-Management.webp",
      title: "Account Management",
      description: "Add and manage up to 20 trading accounts seamlessly.",
      gradient: "from-orange-500 to-red-500",
      icon: CreditCard
    },
    {
      image: "/images/widgets (2).webp",
      title: "Widgets",
      description: "Choose from a variety of widgets to customize your dashboard.",
      gradient: "from-violet-500 to-purple-500",
      icon: BarChart3
    },
    {
      image: "/images/Strategie-Playbooks.webp",
      title: "Strategy Playbooks",
      description: "Document, refine, and apply your trading rules step by step.",
      gradient: "from-teal-500 to-cyan-500",
      icon: BookOpen
    },
    {
      image: "/images/Notizen.webp",
      title: "Notes",
      description: "Capture key decisions, adjustments, and ideas.",
      gradient: "from-amber-500 to-orange-500",
      icon: Edit
    },
    {
      image: "/images/TradingView Charts.webp",
      title: "TradingView Charts",
      description: "Analyze TradingView charts and capture entry and exit screenshots.",
      gradient: "from-indigo-500 to-blue-500",
      icon: TrendingUp
    },
    {
      image: "/images/KI-Trading-Mentor.webp",
      title: "AI Trading Mentor",
      description: "Ask your AI mentor general trading questions or dive deep into your own trading data.",
      gradient: "from-pink-500 to-rose-500",
      icon: Brain
    }
  ];

  // Mobile: show first 4, then all if expanded. Desktop: always show all
  const screenshotsToShow = showAllScreenshots ? showcaseItems : showcaseItems.slice(0, 4);
  const hasMoreScreenshots = showcaseItems.length > 4;

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
            {texts.headline1}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              {texts.headline2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Premium Screenshots Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Desktop: Show all screenshots */}
          <div className="hidden md:contents">
            {showcaseItems.map((item, index) => (
              <Dialog key={item.title} open={openImageIndex === index} onOpenChange={(open) => setOpenImageIndex(open ? index : null)}>
                <DialogTrigger asChild>
                  <motion.div
                    className="group relative h-full cursor-zoom-in"
                  >
                    {/* Premium Image Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={`MMplatinum Trading Journal - ${item.title} Feature im professionellen Trading Journal`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                          style={{ aspectRatio: '16/9' }}
                        />
                        {/* Premium Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      </div>
                      {/* Content Section */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start space-x-3 h-full">
                          {/* Icon */}
                          <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon size={20} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 font-light text-sm group-hover:text-gray-700 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
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
                      {/* Premium Border Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`MMplatinum Trading Journal - ${item.title} Feature im professionellen Trading Journal`}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
                    style={{ background: 'white' }}
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-lg">{item.title}</h3>
                    <p className="text-gray-100 font-light text-sm drop-shadow-lg">{item.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Mobile: Show limited screenshots with expand option */}
          <div className="md:hidden contents">
            {screenshotsToShow.map((item, index) => (
              <motion.div
                key={item.title}
                ref={index === 4 ? fifthScreenshotRef : index === 3 ? fourthScreenshotRef : undefined}
                className="group relative h-full"
              >
                {/* Premium Image Card */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={`MMplatinum Trading Journal - ${item.title} Feature im professionellen Trading Journal`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ aspectRatio: '16/9' }}
                    />
                    
                    {/* Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1">
                    <div className="flex items-start space-x-3 h-full">
                      {/* Icon */}
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={20} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-light text-sm group-hover:text-gray-700 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

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
                  
                  {/* Premium Border Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Show More Button */}
        {hasMoreScreenshots && (
          <div className="text-center md:hidden mb-16">
            <button
              onClick={() => setShowAllScreenshots(!showAllScreenshots)}
              className="group relative bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/60 text-blue-700 px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:from-blue-200 hover:to-purple-200 hover:shadow-lg hover:scale-105 hover:border-blue-300/60 overflow-hidden inline-flex items-center shadow-md"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>
                  {language === 'en'
                    ? (showAllScreenshots
                        ? (typeof texts.showLess === 'function' ? texts.showLess(showcaseItems.length - 4) : texts.showLess)
                        : (typeof texts.showMore === 'function' ? texts.showMore(showcaseItems.length - 4) : texts.showMore)
                      )
                    : (showAllScreenshots
                        ? `${showcaseItems.length - 4} ${texts.showLess}`
                        : `${showcaseItems.length - 4} ${texts.showMore}`
                      )
                  }
                </span>
                {showAllScreenshots ? (
                  <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform text-blue-600" />
                ) : (
                  <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform text-blue-600" />
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
