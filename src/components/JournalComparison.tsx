import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

const JournalComparison = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30 relative overflow-hidden">
      {/* Hintergrund-Akzente */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative section-container">
        {/* Micro-Headline */}
        <motion.h2
          className="text-center text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 max-w-6xl mx-auto mb-16 tracking-tight leading-tight"
        >
          Chaos oder Klarheit –
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
            du hast die Wahl
          </span>
        </motion.h2>

        {/* Vergleichs-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ohne Journal */}
          <motion.div
            className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            {/* Raster-Hintergrund */}
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Icon & Titel */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-red-500/25 group-hover:shadow-xl relative overflow-hidden">
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <X size={28} className="text-white relative z-10" />
                </div>
                {/* Icon Glow Effect */}
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125"></div>
                <h4 className="text-xl font-semibold text-gray-900">Ohne Trading Journal</h4>
              </div>

              {/* Bullets */}
              <div className="space-y-3 mb-6">
                {[
                  'Verlorene Trades = Rätselraten',
                  'Strategie-Wechsel & Indikator-Hopping',
                  'Emotionale Ausreißer / Overtrading',
                  'Fehlende Klarheit in Drawdowns',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <X size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-light leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Verlust-Serien fühlen sich wie böse Überraschungen an, du springst von Setup zu Setup und jede Emotion wird zur Kostenfalle. Ohne Daten weißt du nie, ob der Fehler in der Strategie oder in deinem Verhalten steckt.
              </p>
              {/* Agitation */}
              <div className="mt-4 p-4 bg-red-50/60 border border-red-100 rounded-lg">
                <p className="text-red-700 text-sm font-light">
                  Das führt zu Frust, Selbstzweifeln – und oft zur Aufgabe, bevor du dein echtes Potenzial erreichst.
                </p>
              </div>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.div>

          {/* Mit Journal */}
          <motion.div
            className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            {/* Raster-Hintergrund */}
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Icon & Titel */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-emerald-500/25 group-hover:shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <CheckCircle size={28} className="text-white relative z-10" />
                </div>
                {/* Icon Glow Effect */}
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125" />
                <h4 className="text-xl font-semibold text-gray-900">Mit Trading Journal</h4>
              </div>

              {/* Bullets */}
              <div className="space-y-3 mb-6">
                {[
                  'Klare Muster & Ursachen erkennen',
                  'Disziplin-Score & Regel-Checks',
                  'KI-Mentor: Analyse deiner letzten 100 Trades',
                  'Nachvollziehbare Daten & ruhiger Kopf',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-light leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Solution */}
              <p className="text-gray-700 font-light leading-relaxed">
                Mit dem MMplatinum Trading Journal verwandelst du Chaos in Klarheit. Jede Position, jeder Gedanke, jeder Screenshot landet strukturiert in deinem Dashboard. Der KI-Trading-Mentor erkennt Stärken & Schwächen in Sekunden, deine Ergebnisse werden planbar – Disziplin steigt, Drawdowns schrumpfen.
              </p>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
        >
          <a
            href="https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden inline-flex items-center"
          >
            {/* Animated Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none"></div>

            {/* Hover Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

            <span className="relative z-10 flex items-center space-x-2">
              {/* Mobile Version – zwei Zeilen */}
              <span className="flex flex-col items-center text-center sm:hidden">
                <span className="text-base font-normal mb-1">Ich wähle Klarheit</span>
                <span className="text-base font-medium flex items-center space-x-2">
                  <span>Jetzt Journal sichern</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </span>

              {/* Desktop Version – eine Zeile */}
              <span className="hidden sm:flex items-center space-x-2">
                <span>Ich wähle Klarheit – Jetzt Journal sichern</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JournalComparison; 