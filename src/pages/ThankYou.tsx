import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ThankYou = () => {
  // Seitentitel für Google Analytics setzen
  React.useEffect(() => {
    document.title = 'Danke Trading Journal';
  }, []);

  const steps = [
    {
      number: 1,
      title: "Check Your Inbox",
      description: "Look for an email from us with your login credentials.",
      icon: Mail
    },
    {
      number: 2,
      title: "Log in to Your Trading Journal",
      description: "Access your account and start exploring the features.",
      icon: BookOpen
    },
    {
      number: 3,
      title: "Get Started",
      description: "Begin tracking and optimizing your trades today.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-light">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="py-6 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="MMplatinum Logo" 
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'}
                className="border-gray-200 hover:bg-gray-50 font-medium"
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Thank You Header */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight tracking-tight">
                  Thank You{' '}
                  <span className="text-gray-900">for Your Purchase!</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  Your Trading Journal Access Details Have Been Sent to Your Email.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group relative"
                  >
                    <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
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

                      <div className="relative z-10 flex items-start space-x-6">
                        {/* Premium Icon Container */}
                        <div className="relative flex-shrink-0">
                          <div className={`w-16 h-16 bg-gradient-to-r ${
                            step.number === 1 ? 'from-blue-500 to-cyan-500' :
                            step.number === 2 ? 'from-purple-500 to-pink-500' :
                            'from-emerald-500 to-teal-500'
                          } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-${
                            step.number === 1 ? 'blue-500/25' :
                            step.number === 2 ? 'purple-500/25' :
                            'emerald-500/25'
                          } group-hover:shadow-xl relative overflow-hidden`}>
                            {/* Icon Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                            <step.icon size={28} className="text-white relative z-10" />
                          </div>
                          {/* Icon Glow Effect */}
                          <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${
                            step.number === 1 ? 'from-blue-500 to-cyan-500' :
                            step.number === 2 ? 'from-purple-500 to-pink-500' :
                            'from-emerald-500 to-teal-500'
                          } rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:scale-125`}></div>
                          
                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -left-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-sm font-semibold text-gray-700">{step.number}</span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900 tracking-tight leading-tight group-hover:text-gray-800 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Premium Border Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                        step.number === 1 ? 'from-blue-500 to-cyan-500' :
                        step.number === 2 ? 'from-purple-500 to-pink-500' :
                        'from-emerald-500 to-teal-500'
                      } opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                      
                      {/* Premium Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <p className="text-sm text-gray-600 font-light">
                  <strong className="text-gray-900 font-medium">Still have questions?</strong> Our support team is available at{' '}
                  <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 font-medium">
                    info@mmplatinum.de
                  </a>{' '}
                  to assist you.
                </p>
              </div>
            </div>

            {/* Right Column - Mailman Image */}
            <div className="relative lg:pl-12 flex items-center justify-center">
              <div className="relative">
                {/* Subtle Background Glow - Only for the image itself */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl scale-110"></div>
                
                {/* Mailman Image - Direct on background */}
                <div className="relative z-10">
                  <img 
                    src="/images/mailman (2).webp" 
                    alt="Mailman delivering email" 
                    className="w-[28rem] h-[28rem] object-contain filter drop-shadow-lg"
                  />
                </div>

                {/* Subtle floating animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 