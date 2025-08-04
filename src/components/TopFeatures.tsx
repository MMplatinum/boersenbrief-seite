import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Calendar, Users, Upload, Target, Filter, Zap, Heart, FileText, CheckCircle, Camera, Sparkles, ArrowRight, ChevronDown, ChevronUp, Tag, Clock, TrendingUp } from 'lucide-react';

interface TopFeaturesProps {
  language?: 'de' | 'en';
}

const TopFeatures = ({ language = 'de' }: TopFeaturesProps) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const sixthFeatureRef = useRef<HTMLDivElement | null>(null);
  const fifthFeatureRef = useRef<HTMLDivElement | null>(null);

  const prevShowAllFeatures = useRef(showAllFeatures);
  useEffect(() => {
    if (showAllFeatures && sixthFeatureRef.current) {
      sixthFeatureRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (!showAllFeatures && prevShowAllFeatures.current && fifthFeatureRef.current) {
      fifthFeatureRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    prevShowAllFeatures.current = showAllFeatures;
  }, [showAllFeatures]);

  const texts = language === 'de' ? {
    headline1: "Entfessle dein volles Potenzial mit",
    headline2: "diesen Top-Features",
    subtitle: "Alles was moderne und fortschrittliche Trader brauchen",
    showMore: "weitere Features anzeigen",
    showLess: "weitere Features ausblenden"
  } : {
    headline1: "Unleash Your Full Potential with",
    headline2: "These Top Features",
    subtitle: "Everything modern and advanced traders need",
    showMore: (n: number) => `Show ${n} more features`,
    showLess: (n: number) => `Hide ${n} features`
  };

  const features = language === 'de' ? [
    {
      title: "Anpassbares Dashboard",
      description: "Erstelle dir deinen perfekten Arbeitsbereich aus mehr als 30 Drag-and-Drop-Widgets – so behältst du jederzeit den Überblick.",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Transaktionshistorie",
      description: "Prüfe jeden Einstieg und Ausstieg auf einen Blick – dir entgeht kein einziges Detail mehr.",
      icon: Calendar,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      title: "Kalender",
      description: "Verfolge mühelos deine täglichen Gewinne und Verluste – plane souverän deine nächsten Schritte.",
      icon: Calendar,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      title: "Multi-Konten-Verwaltung",
      description: "Wechsle bequem zwischen bis zu 20 Konten an einem Ort – und vereinfache dein gesamtes Trading.",
      icon: Users,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      title: "Strategie-Playbooks",
      description: "Dokumentiere und optimiere deine Trading-Strategien – so hast du alle Regeln immer griffbereit.",
      icon: FileText,
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "violet-500/25"
    },
    {
      title: "CSV-Upload deiner Historie",
      description: "Importiere deine komplette Trade-Historie in Sekunden: Einfach CSV hochladen, alle Positionen werden automatisch erkannt und analysiert.",
      icon: Upload,
      gradient: "from-indigo-500 to-blue-500",
      shadowColor: "indigo-500/25"
    },
    {
      title: "Viele Filterfunktionen",
      description: "Fokussiere dich auf das Wesentliche: Erkenne in Sekundenschnelle die Trades, die Aufmerksamkeit brauchen.",
      icon: Filter,
      gradient: "from-pink-500 to-rose-500",
      shadowColor: "pink-500/25"
    },
    {
      title: "Neue Trades hinzufügen",
      description: "Erfasse jede Position im Handumdrehen – verringere das Risiko, wichtige Details zu vergessen.",
      icon: Zap,
      gradient: "from-teal-500 to-cyan-500",
      shadowColor: "teal-500/25"
    },
    {
      title: "Emotionale Zustände",
      description: "Halte emotionale Höhen und Tiefen fest – gewinne mehr Selbsterkenntnis für kontrollierte Entscheidungen.",
      icon: Heart,
      gradient: "from-red-500 to-pink-500",
      shadowColor: "red-500/25"
    },
    {
      title: "Detaillierte Trade-Notizen",
      description: "Füge jedem Trade wichtige Erkenntnisse hinzu – erstelle eine Wissensbasis für dein Wachstum.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "green-500/25"
    },
    {
      title: "Regelbasierte Validierung",
      description: "Bleib diszipliniert, indem du jede Strategie-Regel bestätigst – so vermeidest du impulse Fehler.",
      icon: CheckCircle,
      gradient: "from-amber-500 to-orange-500",
      shadowColor: "amber-500/25"
    },
    {
      title: "Entry-Exit Screenshots",
      description: "Füge Momentaufnahmen zu deinen Trades hinzu – fördere deinen Lernprozess mit Fakten.",
      icon: Camera,
      gradient: "from-slate-500 to-gray-500",
      shadowColor: "slate-500/25"
    },
    {
      title: "Offene Positionen",
      description: "Dokumentiere alle entscheidenden Details direkt bei der Positionseröffnung. Perfekt für Swing Trader, die Positionen über mehrere Tage oder Wochen halten.",
      icon: Clock,
      gradient: "from-cyan-500 to-blue-500",
      shadowColor: "cyan-500/25"
    },
    {
      title: "Eigene Tags",
      description: "Erstelle individuelle Labels für deine Trades – denn jeder Trader hat seinen eigenen Workflow und verdient eine maßgeschneiderte Organisation.",
      icon: Tag,
      gradient: "from-fuchsia-500 to-purple-500",
      shadowColor: "fuchsia-500/25"
    },
    {
      title: "Pre-Market-Analysen",
      description: "Morgens vorbereiten – tagsüber traden – abends auswerten. Alle Erkenntnisse bleiben dauerhaft in deinem Kalender gespeichert.",
      icon: TrendingUp,
      gradient: "from-lime-500 to-green-500",
      shadowColor: "lime-500/25"
    }
  ] : [
    {
      title: "Customizable Dashboard",
      description: "Create your ideal workspace with more than 30 drag-and-drop widgets — stay on top of everything at a glance.",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "blue-500/25"
    },
    {
      title: "Transaction History",
      description: "View every entry and exit at a glance — never miss a detail.",
      icon: Calendar,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple-500/25"
    },
    {
      title: "Calendar",
      description: "Effortlessly track daily profits and losses — plan your next moves with confidence.",
      icon: Calendar,
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "emerald-500/25"
    },
    {
      title: "Multi-Account Management",
      description: "Switch conveniently between up to 20 accounts in one place — streamline your trading.",
      icon: Users,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange-500/25"
    },
    {
      title: "Strategy Playbooks",
      description: "Document and refine your trading strategies — keep all your rules at your fingertips.",
      icon: FileText,
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "violet-500/25"
    },
    {
      title: "CSV Upload of Your History",
      description: "Import your entire trading history in seconds — just upload a CSV file, and positions are automatically recognized and analyzed.",
      icon: Upload,
      gradient: "from-indigo-500 to-blue-500",
      shadowColor: "indigo-500/25"
    },
    {
      title: "Multiple Filter Functions",
      description: "Focus on what matters — identify trades needing attention in seconds.",
      icon: Filter,
      gradient: "from-pink-500 to-rose-500",
      shadowColor: "pink-500/25"
    },
    {
      title: "Add New Trades",
      description: "Record new trades in no time — minimize the risk of overlooking details.",
      icon: Zap,
      gradient: "from-teal-500 to-cyan-500",
      shadowColor: "teal-500/25"
    },
    {
      title: "Emotional States",
      description: "Track emotional highs and lows — gain self-awareness for more disciplined decisions.",
      icon: Heart,
      gradient: "from-red-500 to-pink-500",
      shadowColor: "red-500/25"
    },
    {
      title: "Detailed Trade Notes",
      description: "Capture key insights for every trade — build a knowledge base to fuel your growth.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "green-500/25"
    },
    {
      title: "Rule-Based Validation",
      description: "Validate every strategy rule — maintain discipline and prevent impulsive mistakes.",
      icon: CheckCircle,
      gradient: "from-amber-500 to-orange-500",
      shadowColor: "amber-500/25"
    },
    {
      title: "Entry-Exit Screenshots",
      description: "Attach entry and exit screenshots to each trade — enhance your learning with visual evidence.",
      icon: Camera,
      gradient: "from-slate-500 to-gray-500",
      shadowColor: "slate-500/25"
    },
    {
      title: "Open Positions",
      description: "Document all crucial details from the moment you open a position. Perfect for swing traders managing positions that run for days or weeks.",
      icon: Clock,
      gradient: "from-cyan-500 to-blue-500",
      shadowColor: "cyan-500/25"
    },
    {
      title: "Custom Tags",
      description: "Create your own labels for trades — because every trader's workflow is unique and deserves personalized organization.",
      icon: Tag,
      gradient: "from-fuchsia-500 to-purple-500",
      shadowColor: "fuchsia-500/25"
    },
    {
      title: "Pre-Market Analysis",
      description: "Plan your morning analysis, execute trades throughout the day, and review in the evening — all data stays permanently accessible in your calendar.",
      icon: TrendingUp,
      gradient: "from-lime-500 to-green-500",
      shadowColor: "lime-500/25"
    }
  ];

  // Mobile: show first 5, then all if expanded. Desktop: always show all
  const featuresToShow = showAllFeatures ? features : features.slice(0, 5);
  const hasMoreFeatures = features.length > 5;

  return (
    <section id="top-features" className="py-16 md:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-container">
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
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
            {texts.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Desktop: Show all features */}
          <div className="hidden md:contents">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
              >
                {/* Premium Card */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Luxury Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${feature.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <feature.icon size={28} className="text-white relative z-10" />
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Subtle Premium Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Elegant Border Gradient on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Show limited features with expand option */}
          <div className="md:hidden contents">
            {featuresToShow.map((feature, index) => (
              <motion.div
                key={feature.title}
                ref={index === 5 ? sixthFeatureRef : index === 4 ? fifthFeatureRef : undefined}
                className="group relative"
              >
                {/* Premium Card */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Luxury Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${feature.shadowColor} group-hover:shadow-xl relative overflow-hidden`}>
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <feature.icon size={28} className="text-white relative z-10" />
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Subtle Premium Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Elegant Border Gradient on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Show More/Less Button */}
        {hasMoreFeatures && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0 }}
            className="md:hidden text-center mb-16"
          >
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="group relative bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/60 text-blue-700 px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:from-blue-200 hover:to-purple-200 hover:shadow-lg hover:scale-105 hover:border-blue-300/60 overflow-hidden inline-flex items-center shadow-md"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>
                  {language === 'en'
                    ? (showAllFeatures 
                        ? (typeof texts.showLess === 'function' ? texts.showLess(features.length - 5) : texts.showLess)
                        : (typeof texts.showMore === 'function' ? texts.showMore(features.length - 5) : texts.showMore)
                      )
                    : (showAllFeatures 
                        ? `${features.length - 5} ${texts.showLess}`
                        : `${features.length - 5} ${texts.showMore}`
                      )
                  }
                </span>
                {showAllFeatures ? (
                  <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform text-blue-600" />
                ) : (
                  <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform text-blue-600" />
                )}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TopFeatures;
