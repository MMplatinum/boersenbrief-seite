import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Table, BookOpen, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';

// TypeScript Declaration für gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const StarterGuide = () => {
  // Seitentitel für Google Analytics setzen
  React.useEffect(() => {
    document.title = 'Starter Guide Trading Journal';
  }, []);

  const downloads = [
    {
      title: "Starter Guide deutsch",
      description: "Kompletter Leitfaden für den optimalen Start mit dem Trading Journal",
      file: "/downloads/pdf/starter-guide-deutsch.pdf",
      icon: BookOpen,
      type: "PDF",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Starter Guide english", 
      description: "Complete guide for optimal start with the Trading Journal",
      file: "/downloads/pdf/starter-guide-english.pdf",
      icon: BookOpen,
      type: "PDF",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Upload Guide deutsch",
      description: "Schritt-für-Schritt Anleitung zum fehlerfreien Import alter Trade-Listen",
      file: "/downloads/pdf/upload-guide-deutsch.pdf", 
      icon: TrendingUp,
      type: "PDF",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Upload Guide english",
      description: "Step-by-step guide for error-free import of old trade lists",
      file: "/downloads/pdf/upload-guide-english.pdf",
      icon: TrendingUp, 
      type: "PDF",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "CSV Vorlage deutsch",
      description: "Optimale CSV-Vorlage für den perfekten Datenimport",
      file: "/downloads/csv/csv-template-deutsch.csv",
      icon: Table,
      type: "CSV", 
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "CSV Template english",
      description: "Optimal CSV template for perfect data import",
      file: "/downloads/csv/csv-template-english.csv",
      icon: Table,
      type: "CSV",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const handleDownload = (filename: string, filepath: string) => {
    // Analytics tracking für Downloads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'download', {
        'file_name': filename,
        'file_type': filepath.split('.').pop()
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/40 to-blue-50/30">
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">MMplatinum</h1>
                <p className="text-sm text-gray-600">Starter Guide & Resources</p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-blue-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
              Dein schneller Start ins
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                erfolgreiche Trading
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              Hol dir jetzt unseren kostenlosen Starter-Guide und erfahre Schritt für Schritt, wie du dein Trading Journal optimal einrichtest und nutzt. Von der Kontoeröffnung über die Dokumentation deiner Trades bis hin zur regelmäßigen Analyse deiner Ergebnisse - dieser Guide zeigt dir den Weg zu mehr Struktur, Disziplin und langfristigem Erfolg. Starte noch heute und lade ihn gleich herunter!
            </p>
          </motion.div>

          {/* Starter Guide Downloads */}
          <motion.section
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {downloads.slice(0, 2).map((download, index) => (
                <motion.div
                  key={download.title}
                  className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${download.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                        <download.icon size={28} className="text-white relative z-10" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${download.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {download.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${download.gradient} text-white`}>
                        {download.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 font-light leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                      {download.description}
                    </p>

                    <a
                      href={download.file}
                      download
                      onClick={() => handleDownload(download.title, download.file)}
                      className={`group/btn relative bg-gradient-to-r ${download.gradient} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden inline-flex items-center w-full justify-center mt-auto`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center space-x-2">
                        <Download size={18} />
                        <span>Download</span>
                      </span>
                    </a>
                  </div>

                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${download.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Upload Guide Section */}
          <motion.section
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Trades importieren ohne Kopfschmerzen –
                </span>
                <br />
                dein Upload-Guide
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                Hol dir jetzt unseren kostenlosen Upload-Guide und erfahre Schritt für Schritt, wie du "alte" Trade-Listen fehlerfrei ins Journal lädst. Vom richtigen CSV-Format bis hin zur perfekten Kontozuordnung – dieser Guide sorgt dafür, dass jeder Trade erkannt und deine Performance präzise berechnet wird. Lade dir den Guide gleich herunter und starte in weniger als fünf Minuten mit einem sauber geführten Journal!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {downloads.slice(2).map((download, index) => (
                <motion.div
                  key={download.title}
                  className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative z-10 text-center flex flex-col h-full">
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${download.gradient} rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                        <download.icon size={20} className="text-white relative z-10" />
                      </div>
                    </div>

                    <div className="flex items-center justify-center mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${download.gradient} text-white`}>
                        {download.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {download.title}
                    </h3>
                    
                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                      {download.description}
                    </p>

                    <a
                      href={download.file}
                      download
                      onClick={() => handleDownload(download.title, download.file)}
                      className={`group/btn relative bg-gradient-to-r ${download.gradient} text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden inline-flex items-center w-full justify-center mt-auto`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center space-x-2">
                        <Download size={14} />
                        <span>Download</span>
                      </span>
                    </a>
                  </div>

                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${download.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            className="text-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 shadow-xl"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                Starte mit den richtigen Grundlagen
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Schritt-für-Schritt Anleitung</h4>
                    <p className="text-gray-600 font-light">Klare Anweisungen für den optimalen Start</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fehlerfrei importieren</h4>
                    <p className="text-gray-600 font-light">CSV-Templates für perfekte Datenqualität</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sofort einsatzbereit</h4>
                    <p className="text-gray-600 font-light">In wenigen Minuten startklar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default StarterGuide; 