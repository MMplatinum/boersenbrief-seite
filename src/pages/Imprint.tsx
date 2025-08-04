import React from 'react';
import { Button } from '@/components/ui/button';

const Imprint = () => {
  // Seitentitel für Google Analytics setzen
  React.useEffect(() => {
    document.title = 'Imprint Trading Journal';
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
              Imprint
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Legal Information and Contact Details
            </p>
          </div>

          {/* Content Container */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Information pursuant to § 5 TMG */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Information pursuant to § 5 TMG
              </h2>
              <div className="space-y-2 text-gray-700 font-light">
                <p>Michael Müller</p>
                <p>MMplatinum e.K.</p>
                <p>Hepkestr. 153</p>
                <p>01277 Dresden, Germany</p>
              </div>
              <div className="mt-6 space-y-2 text-gray-700 font-light">
                <p><span className="font-medium text-gray-900">Commercial Register:</span> HRA 11188</p>
                <p><span className="font-medium text-gray-900">Register Court:</span> Local Court of Dresden</p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Contact
              </h2>
              <div className="space-y-2 text-gray-700 font-light">
                <p>
                  <span className="font-medium text-gray-900">Phone:</span>{' '}
                  <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 transition-colors">
                    +49 170 3633682
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{' '}
                  <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">
                    info@mmplatinum.de
                  </a>
                </p>
              </div>
            </section>

            {/* VAT Identification Number */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                VAT Identification Number
              </h2>
              <p className="text-gray-700 font-light">
                VAT Identification Number according to § 27 a of the German VAT Act: 
                <span className="font-medium text-gray-900 ml-2">DE342160719</span>
              </p>
            </section>

            {/* EU Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                EU Dispute Resolution
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                The European Commission provides a platform for online dispute resolution (ODR):{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Our email address can be found above in the imprint.
              </p>
            </section>

            {/* Consumer Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Consumer Dispute Resolution/Universal Arbitration Board
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            {/* Liability for Content */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Liability for Content
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                As a service provider, we are responsible for our own content on these pages in accordance with general laws, pursuant to § 7 para. 1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the moment knowledge of a specific legal violation is obtained. If we become aware of any such legal violations, we will remove the content immediately.
              </p>
            </section>

            {/* Liability for Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Liability for Links
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Our website contains links to external third-party websites, over which we have no control. Therefore, we cannot assume any liability for such external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. No unlawful content was identifiable at the time of linking.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                However, continuous monitoring of the content of linked pages is unreasonable without specific indications of a legal violation. If we become aware of any legal violations, we will remove such links immediately.
              </p>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Copyright
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                The content and works created by the site operator on these pages, including content within paid services, are subject to German copyright law. Reproduction, editing, distribution, or any kind of exploitation beyond the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Violations will be legally prosecuted.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                If the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any legal violations, we will remove such content immediately.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint; 