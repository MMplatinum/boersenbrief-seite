import React from 'react';
import { motion } from 'framer-motion';
import { Download, Settings, Code, ArrowRight, Star, FileText } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const SyncEAEN = () => {
  React.useEffect(() => {
    document.title = 'SyncEA Expert Advisor - Trading Journal Synchronization';
    
    // Prevent search engine indexing
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }
    
    // Cleanup on unmount
    return () => {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.remove();
      }
    };
  }, []);

  const downloads = [
    {
      title: "SyncEA for MT4",
      description: "Expert Advisor for MetaTrader 4 - Automatic synchronization of all trades with the Trading Journal (Version 1.01 from 01.08.2025)",
      file: "/downloads/ea/MMplatinumJournalSync.ex4",
      icon: Code,
      type: "EX4",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "SyncEA for MT5", 
      description: "Expert Advisor for MetaTrader 5 - Automatic synchronization of all trades with the Trading Journal (Version 1.01 from 01.08.2025)",
      file: "/downloads/ea/MMplatinumJournalSync.ex5",
      icon: Code,
      type: "EX5",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Installation & Setup Guide",
      description: "Step-by-step guide for installation and configuration of the SyncEA Expert Advisors",
      file: "/downloads/pdf/syncEA-guide-english.pdf",
      icon: Settings,
      type: "PDF",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];



  const handleDownload = (filename: string, filepath: string) => {
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
                <p className="text-sm text-gray-600">SyncEA Expert Advisor</p>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
              Automatic Trade Synchronization
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                directly from MetaTrader
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              No more manual entry - all trades are automatically transferred to your journal. Simply install and let the data be entered automatically!
            </p>
          </motion.div>



          {/* Downloads Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Downloads for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MT4 & MT5</span>
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Download the matching Expert Advisors for your MetaTrader version
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {downloads.map((download, index) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                  duration: window.innerWidth >= 768 ? 0.6 : 0,
                  delay: window.innerWidth >= 768 ? 0.3 + index * 0.1 : 0,
                  ease: "easeOut"
                }}
                  className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
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

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${download.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How it Works Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-24 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                How it <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">works</span>
              </h2>
              <p className="text-lg text-gray-600 font-light">
                From installation to automatic synchronization in just a few minutes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Install EA",
                  description: "Download the matching Expert Advisor for your MT4/MT5 version and install it"
                },
                {
                  step: "2", 
                  title: "Configure",
                  description: "Follow the guide and configure the EA once with your Trading Journal credentials"
                },
                {
                  step: "3",
                  title: "Auto-sync",
                  description: "From now on, all trades will be automatically synchronized with your Trading Journal"
                }
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-light">{item.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-8">
                      <ArrowRight className="text-gray-300" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Star size={32} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Questions about installation?
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              Our support team is happy to help you set up the SyncEA Expert Advisors. 
              Simply contact us via chat or email.
            </p>
            <a
              href="mailto:info@mmplatinum.de"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Contact Support</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SyncEAEN;