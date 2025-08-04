import React from 'react';
import { Button } from '@/components/ui/button';

const Disclaimer = () => {
  // Seitentitel für Google Analytics setzen
  React.useEffect(() => {
    document.title = 'Disclaimer Trading Journal';
  }, []);

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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight">
              Disclaimer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Legal risk disclaimer and liability exclusion for MMplatinum services
            </p>
          </div>

          {/* Content Container */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 shadow-lg space-y-12">
            
            {/* Legally Required Risk Disclaimer and Liability Exclusion */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">
                Legally Required Risk Disclaimer and Liability Exclusion
              </h2>
              
              <div className="space-y-8">
                {/* Content Sources */}
                <div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The content provided on the website of <strong>MMplatinum e.K. (Michael Müller)</strong>, such as trading signals, portfolio overviews, stock lists, and risk filters, is based on careful research, which is derived from third-party sources. These sources are considered trustworthy and reliable by MMplatinum e.K. (Michael Müller).
                  </p>
                </div>

                {/* Information Purpose */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 font-light leading-relaxed">
                    The information contained on this website is provided for <strong>informational purposes only</strong> and should not be understood as a purchase recommendation or investment advice. The information regarding investment strategies cannot replace individual advice that considers the personal circumstances of the investor. Furthermore, not all specific aspects associated with investing in securities or their derivatives can be taken into account.
                  </p>
                </div>

                {/* Risk Warning */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <div className="space-y-4">
                    <p className="text-gray-700 font-light leading-relaxed">
                      <strong className="text-red-700">The user is explicitly advised that trading in publicly listed securities is subject to substantial price fluctuations and the associated risks, which may even lead to a total loss.</strong>
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed">
                      For every investment decision made by the user based on information from this website or its services, the user always acts <strong>independently and at their own risk</strong>. Past returns are not a guarantee for the future.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Liability Exclusion */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">
                Liability Exclusion
              </h2>
              
              <div className="space-y-8">
                {/* General Liability Exclusion */}
                <div>
                  <p className="text-gray-700 font-light leading-relaxed text-lg">
                    <strong>Liability for damages resulting from the use of information provided on this website for the user's own investment decisions is excluded.</strong>
                  </p>
                </div>

                {/* Exceptions to Liability Exclusion */}
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    The liability exclusion does not apply in cases of:
                  </h3>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <ul className="space-y-4 text-gray-700 font-light leading-relaxed">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong className="text-gray-900">Intentional misconduct or gross negligence</strong></span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong className="text-gray-900">Personal injury</strong></span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong className="text-gray-900">Breach of essential contractual obligations</strong>, on which the user could particularly rely</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Additional Liability Provisions */}
                <div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The liability exclusion also does not apply to violations of <strong>contractual core obligations, whose fulfillment was reasonably expected</strong>.
                  </p>
                </div>

                {/* Third-Party Websites */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <p className="text-gray-700 font-light leading-relaxed">
                    <strong className="text-gray-900">MMplatinum e.K. (Michael Müller)</strong> assumes no liability for damages incurred by the user due to the use of third-party websites.
                  </p>
                </div>
              </div>
            </section>

            {/* Important Notice */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    ⚠️ Important Risk Notice
                  </h3>
                  <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                    <p>
                      <strong>Trading involves substantial risk of loss.</strong> You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources.
                    </p>
                    <p>
                      <strong>Past performance is not indicative of future results.</strong> No representation is made that any account will or is likely to achieve profits similar to those discussed on this website.
                    </p>
                    <p>
                      <strong>Always consult with a qualified financial advisor</strong> before making any investment decisions. The content on this website is for educational purposes only and should not be considered personalized investment advice.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-t border-gray-200 pt-8">
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Questions about this Disclaimer?</h3>
                <p className="text-gray-600 font-light mb-6">
                  If you have any questions regarding this disclaimer or our risk policies, please contact us.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
                  <div className="space-y-2 text-gray-700 font-light">
                    <p><strong className="text-gray-900">Company:</strong> MMplatinum e.K.</p>
                    <p><strong className="text-gray-900">Owner:</strong> Michael Müller</p>
                    <p><strong className="text-gray-900">Email:</strong> <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">info@mmplatinum.de</a></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Documents Links */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Related Legal Documents</h3>
                <p className="text-gray-600 font-light mb-6">
                  For complete legal information, please review our other legal documents.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/terms" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Terms & Conditions
                  </a>
                  <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/imprint" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Imprint
                  </a>
                </div>
              </div>
            </section>

            {/* Copyright */}
            <section className="border-t border-gray-200 pt-8">
              <div className="text-center">
                <p className="text-gray-600 font-light text-sm">
                  <strong className="text-gray-900">© 2025 MMplatinum e.K. All rights reserved.</strong>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer; 