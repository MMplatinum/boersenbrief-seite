import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  language?: 'de' | 'en';
}

const Navigation = ({ language = 'de' }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = language === 'de' ? [
    { name: 'Features', href: '#top-features' },
    { name: 'Auto-Sync', href: '#auto-sync' },
    { name: 'KI-Mentor', href: '#ai-mentor' },
    { name: 'Preise', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' }
  ] : [
    { name: 'Features', href: '#top-features' },
    { name: 'Auto-Sync', href: '#auto-sync' },
    { name: 'AI Mentor', href: '#ai-mentor' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const texts = language === 'de' ? {
    login: 'Login',
    startButton: 'Jetzt starten',
    mobileStartButton: 'Starten'
  } : {
    login: 'Login',
    startButton: 'Get Started',
    mobileStartButton: 'Start'
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-2xl border-b border-white/20' 
            : 'bg-white/60 backdrop-blur-xl border-b border-white/10'
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
            : '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Glass effect overlay */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          isScrolled 
            ? 'bg-gradient-to-r from-blue-50/40 via-white/60 to-purple-50/40' 
            : 'bg-gradient-to-r from-blue-50/20 via-white/30 to-purple-50/20'
        }`}></div>
        
        {/* Subtle shine effect */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-50'
        }`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        </div>

        <div className="section-container">
          <div className="flex justify-between items-center py-1 lg:py-2 relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/images/logo.png" 
                alt="MMplatinum Logo" 
                className="h-5 md:h-6 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: window.innerWidth >= 768 ? 0.2 + index * 0.1 : 0,
                      duration: window.innerWidth >= 768 ? 0.3 : 0
                    }}
                    onClick={() => handleNavClick(item.href)}
                    className="relative text-gray-700 hover:text-blue-600 font-normal transition-all duration-200 text-base py-2 px-1 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full rounded-full"></span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop Buttons + Language Switcher */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <LanguageSwitcher />
              </motion.div>
              <motion.a
                href="https://app.mmplatinum.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl font-normal transition-all duration-200 hover:bg-gray-100/50"
              >
                {texts.login}
              </motion.a>
              <motion.a
                href={language === 'en' 
                  ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                  : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
                }
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl font-normal hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                {texts.startButton}
              </motion.a>
            </div>

            {/* Mobile Header Buttons */}
            <div className="flex lg:hidden items-center space-x-3">
              <LanguageSwitcher />
              <motion.a
                href={language === 'en' 
                  ? "https://mmplatinum-en.lemonsqueezy.com/buy/077ca090-7616-4201-82f7-fdf2ebc67d5d?desc=0"
                  : "https://mmplatinum.lemonsqueezy.com/buy/edea0b8b-869d-4964-b413-1600e031e96c?desc=0"
                }
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-lg font-normal text-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                {texts.mobileStartButton}
              </motion.a>
              
              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-100 rounded-lg"
              >
                {isMobileMenuOpen ? <X size={24} weight="regular" /> : <List size={24} weight="regular" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 backdrop-premium border-l border-gray-200/30 z-40 lg:hidden"
            style={{ boxShadow: 'var(--shadow-xl)' }}
          >
            <div className="pt-20 px-8">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: window.innerWidth >= 768 ? 0.1 + index * 0.1 : 0,
                      duration: window.innerWidth >= 768 ? 0.3 : 0
                    }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-lg text-gray-700 hover:text-gray-900 font-normal py-3 px-3 transition-all duration-200 hover:bg-gray-50/50 rounded-xl"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.a
                  href="https://app.mmplatinum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                  className="block w-full text-left text-lg text-gray-700 hover:text-gray-900 font-normal py-3 px-3 transition-all duration-200 hover:bg-gray-50/50 rounded-xl border-t border-gray-200/50 mt-8 pt-8"
                >
                  {texts.login}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
