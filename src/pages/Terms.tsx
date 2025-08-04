import React from 'react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  // Seitentitel für Google Analytics setzen
  React.useEffect(() => {
    document.title = 'Terms Trading Journal';
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
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Governing your use of the MMplatinum Trading Journal and related services
            </p>
            <p className="text-sm text-gray-500 font-light">
              <strong>Last Updated:</strong> 03.02.2025
            </p>
          </div>

          {/* Content Container */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 shadow-lg space-y-12">
            
            {/* Introduction */}
            <section>
              <p className="text-gray-700 font-light leading-relaxed text-lg">
                These Terms & Conditions ("Terms") govern your use of the services offered by <strong>MMplatinum e.K.</strong> ("MMplatinum," "we," "us," or "our"), including access to the Telegram channel that provides trading signals (the "Signals Channel") and the web-based Trading Journal (the "Trading Journal") (collectively, the "Services"). By purchasing or using our Services, you agree to be bound by these Terms.
              </p>
            </section>

            {/* 1. Company Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                1. Company Information
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-2 text-gray-700 font-light">
                  <li><strong className="text-gray-900">Business Name:</strong> MMplatinum e.K.</li>
                  <li><strong className="text-gray-900">Owner:</strong> Michael Müller</li>
                  <li><strong className="text-gray-900">Registered Address:</strong> Hepkestr. 153, 01277 Dresden, Germany</li>
                  <li><strong className="text-gray-900">Email:</strong> <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">info@mmplatinum.de</a></li>
                </ul>
              </div>
              
              <p className="text-gray-700 font-light leading-relaxed mt-4">
                For further details, please see our Imprint/Legal Notice on our website.
              </p>
            </section>

            {/* 2. Description of Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                2. Description of Services
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Trading Journal:</h3>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-2 ml-4">
                    <li>A web-based application providing users with features to document and analyze their trading activities.</li>
                    <li>Lifetime access is provided upon purchase ("one-time payment"), though we reserve the right to change pricing or features for new customers in the future. Existing customers will not be affected by any such price changes.</li>
                    <li>Services are generally provided immediately upon successful payment and confirmation of your order.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Contract Formation */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                3. Contract Formation
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Order Process:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    By clicking the button to purchase any of our Services, you submit a binding offer to enter into a contract with us under these Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Confirmation:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The contract becomes effective when we (a) send you a confirmation email, or (b) provide access to the Services, whichever occurs first.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Payment and Pricing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                4. Payment and Pricing
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Payment Methods:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We offer various payment methods, such as credit cards and other local or online payment solutions. You will be able to select from the available options during checkout.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Trading Journal:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    One-time payment ("lifetime access") with no recurring subscription fee.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Taxes:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    All prices are shown inclusive/exclusive of taxes where required by law. Any applicable taxes will be disclosed to you prior to purchase.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Refund Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                5. Refund Policy
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Trading Journal (14 Day Money back guarantee):</h3>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-2">
                      <li>As a consumer, you have the right to withdraw from the purchase of the Trading Journal within <strong>14 days</strong> of concluding the contract, without giving any reason.</li>
                      <li>If you withdraw within this period, you will receive a full refund of any amounts paid for the Trading Journal.</li>
                      <li>To exercise your right of withdrawal, you must inform us by email at <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">info@mmplatinum.de</a> within the 14-day period.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Risk Notice and Liability Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                7. Risk Notice and Liability Disclaimer
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Not Financial or Investment Advice:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    MMplatinum provides informations for educationally purposes only and does not constitute financial or investment advice.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">No Guarantees of Results:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Past performance is not indicative of future results. Trading involves substantial risk of loss.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Disclaimer:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    For more details on risks and limitations of liability, please refer to our full Disclaimer.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. User Obligations and Conduct */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                8. User Obligations and Conduct
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Lawful Use:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You agree to use the Services in compliance with all applicable laws and regulations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Prohibited Actions:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You shall not misuse, resell, or redistribute our content without our explicit written permission.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Access Credentials:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You are responsible for safeguarding any login credentials and for any activity under your account.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                9. Intellectual Property
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Ownership:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    All content, materials, and intellectual property within the Services are owned by MMplatinum e.K.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">License:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We grant you a non-exclusive, non-transferable, revocable license to use the Services for your personal use only.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Restrictions:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You may not copy, reproduce, distribute, or create derivative works of the Services or any related content without prior written permission from us.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. Data Protection and Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                10. Data Protection and Privacy
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Privacy Policy:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Please refer to our <a href="/privacy" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Privacy Policy</a> to understand how we collect, use, and protect your personal data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Third-Party Services:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We may use third-party payment providers or hosting services, and your data may be processed by these third parties in accordance with their own privacy policies.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Service Availability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                11. Service Availability
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Uptime:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We aim to provide uninterrupted access to our Services. However, we do not guarantee constant, error-free availability.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Maintenance and Downtime:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Temporary interruptions may occur due to maintenance, technical issues, or outages of third-party providers. We will make reasonable efforts to notify you of significant interruptions in advance, if possible.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                12. Governing Law and Jurisdiction
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">B2C Only:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    These Terms apply to consumers (B2C).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Governing Law:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    These Terms and any dispute arising out of or in connection with them shall be governed exclusively by the laws of the Federal Republic of Germany, excluding its conflicts of law provisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">International Customers:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you access or use the Services from outside Germany, you are responsible for compliance with the laws of your own jurisdiction. We provide the Services under German law only.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. Changes to These Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                13. Changes to These Terms
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Amend:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We may modify these Terms from time to time to reflect legal or service changes, or to address misuse or changes in our business practices.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Notification:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We will post any updates on our website. If you continue to use the Services after the updated Terms have been published, you are deemed to have accepted the changes.
                  </p>
                </div>
              </div>
            </section>

            {/* 14. International Users */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                14. International Users
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">User Responsibility:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Customers located outside Germany are responsible for understanding and complying with any local laws and regulations applicable to them.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">German Law Applies:</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We apply German law to the provision of our Services. We do not undertake any responsibility for compliance with foreign legal requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* 15. Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                15. Contact Information
              </h2>
              
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                If you have any questions, concerns, or complaints regarding these Terms or the Services, please contact us at:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-light">
                  <strong className="text-gray-900">Email:</strong> <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">info@mmplatinum.de</a>
                </p>
              </div>
              
              <p className="text-gray-700 font-light leading-relaxed mt-4">
                We will do our best to address your inquiry in a timely and satisfactory manner.
              </p>
            </section>

            {/* Acknowledgment */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Acknowledgment
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700 font-light leading-relaxed">
                  By purchasing or using our Services, you acknowledge that you have read these Terms, understand them, and agree to be bound by them.
                </p>
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

            {/* Contact Section */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Questions about these Terms?</h3>
                <p className="text-gray-600 font-light mb-6">
                  We're here to help clarify any questions you may have about our Terms & Conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:info@mmplatinum.de" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Support
                  </a>
                  <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    View Privacy Policy
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 