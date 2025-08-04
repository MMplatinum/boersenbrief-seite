import React from 'react';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  // Seitentitel für Google Analytics setzen
  React.useEffect(() => {
    document.title = 'Privacy Trading Journal';
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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Information about how we collect, use, and protect your personal data
            </p>
          </div>

          {/* Content Container */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 shadow-lg space-y-12">
            
            {/* 1. Privacy at a Glance */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                1. Privacy at a Glance
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">General Information</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data includes all data that can be used to personally identify you.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    For detailed information on data protection, please refer to our privacy policy listed below this text.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Collection on This Website</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Who is responsible for data collection on this website?</h4>
                      <p className="text-gray-700 font-light leading-relaxed">
                        Data processing on this website is carried out by the website operator. You can find the operator's contact details in the section "Information on the Responsible Party" in this privacy policy.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">How do we collect your data?</h4>
                      <p className="text-gray-700 font-light leading-relaxed mb-2">Your data is collected in two main ways:</p>
                      <ol className="list-decimal list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4">
                        <li>You provide it to us – for example, by entering information in a contact form.</li>
                        <li>Automatically or with your consent, through our IT systems when you visit the website. This includes technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">What do we use your data for?</h4>
                      <p className="text-gray-700 font-light leading-relaxed">
                        Some of the data is collected to ensure the website functions correctly. Other data may be used to analyze user behavior.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">What rights do you have regarding your data?</h4>
                      <p className="text-gray-700 font-light leading-relaxed mb-2">You have the right at any time to:</p>
                      <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4">
                        <li>Request information about the origin, recipients, and purpose of your stored personal data, free of charge.</li>
                        <li>Request correction or deletion of your data.</li>
                        <li>Revoke your consent to data processing at any time, effective for the future.</li>
                        <li>Request restriction of processing under certain circumstances.</li>
                        <li>File a complaint with the relevant supervisory authority if you believe your data is being processed unlawfully.</li>
                      </ul>
                      <p className="text-gray-700 font-light leading-relaxed mt-4">
                        For any questions about data protection, you can contact us at any time.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Analytics and Third-Party Tools</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    When you visit this website, your browsing behavior may be statistically analyzed. This is primarily done using analytics programs.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Detailed information about these analytics programs can be found in the privacy policy below.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                2. Hosting
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">IONOS</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We host our website with IONOS SE. The provider is IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany (hereinafter "IONOS").
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    When you visit our website, IONOS collects various log files, including your IP address.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    For more details, please refer to IONOS's privacy policy:{' '}
                    <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                      https://www.ionos.de/terms-gtc/terms-privacy
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Legal Basis</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The use of IONOS is based on Art. 6(1)(f) GDPR. We have a legitimate interest in ensuring the most reliable presentation of our website.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    If consent has been requested, processing is carried out solely based on consent (Art. 6(1)(a) GDPR and § 25(1) TTDSG), provided that consent includes the storage of cookies or access to information on the user's device (e.g., device fingerprinting) as per TTDSG. Consent can be revoked at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Processing Agreement (DPA)</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We have entered into a Data Processing Agreement (DPA) with the provider mentioned above. This is a legally required contract that ensures the provider processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. General Information and Mandatory Notices */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                3. General Information and Mandatory Notices
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Protection</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations as well as this privacy policy.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    When you use this website, various personal data is collected. Personal data refers to data that can be used to personally identify you. This privacy policy explains which data we collect, how we use it, and for what purpose.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    We would like to point out that data transmission over the internet (e.g., communication via email) may have security vulnerabilities. A complete protection of data from third-party access is not possible.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Information on the Responsible Party</h3>
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    The responsible party for data processing on this website is:
                  </p>
                  <div className="space-y-2 text-gray-700 font-light">
                    <p>MMplatinum e.K.</p>
                    <p>Michael Müller</p>
                    <p>Hepkestr. 153</p>
                    <p>01277 Dresden, Germany</p>
                  </div>
                  <div className="mt-4 space-y-2 text-gray-700 font-light">
                    <p>
                      <span className="font-medium text-gray-900">Phone:</span>{' '}
                      <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 transition-colors">
                        +49 (0) 1703633682
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">Email:</span>{' '}
                      <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">
                        info@mmplatinum.de
                      </a>
                    </p>
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    The responsible party is the natural or legal person who, alone or jointly with others, determines the purposes and means of processing personal data (e.g., names, email addresses, etc.).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Storage Duration</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Unless a specific storage period is mentioned in this privacy policy, your personal data will remain stored until the purpose for data processing no longer applies.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    If you request deletion of your data or withdraw your consent for data processing, your data will be deleted unless we have other legally permissible reasons for retaining your personal data (e.g., tax or commercial law retention periods). In such cases, the deletion will take place after these legal reasons no longer apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">General Information on the Legal Basis for Data Processing on This Website</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you have consented to data processing, we process your personal data based on Art. 6(1)(a) GDPR or, in the case of special categories of data under Art. 9(1) GDPR, based on Art. 9(2)(a) GDPR. If you have expressly consented to the transfer of personal data to third countries, data processing is also carried out on the basis of Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or access to information on your end device (e.g., via device fingerprinting), data processing is also based on § 25(1) TTDSG. Consent can be revoked at any time.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    If your data is required for contract fulfillment or pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR. Additionally, we process your data if necessary to comply with legal obligations based on Art. 6(1)(c) GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6(1)(f) GDPR. The specific legal basis for each case is detailed in the relevant sections of this privacy policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Protection Officer</h3>
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    We have appointed a data protection officer for our company:
                  </p>
                  <div className="space-y-2 text-gray-700 font-light">
                    <p>Michael Müller</p>
                    <p>Hepkestr. 153</p>
                    <p>01277 Dresden</p>
                    <p>Germany</p>
                  </div>
                  <div className="mt-4 space-y-2 text-gray-700 font-light">
                    <p>
                      <span className="font-medium text-gray-900">Phone:</span>{' '}
                      <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 transition-colors">
                        +49 (0) 1703633682
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">Email:</span>{' '}
                      <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">
                        info@mmplatinum.de
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Notice on Data Transfers to the USA and Other Third Countries</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We use tools from companies based in the USA or other countries that are not deemed to have an adequate level of data protection. When these tools are active, your personal data may be transferred to these third countries and processed there. We would like to point out that these countries may not provide a level of data protection comparable to that of the EU.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    For example, U.S. companies are required to disclose personal data to security authorities, and as a data subject, you may not have legal remedies against such disclosures. It is possible that U.S. authorities (e.g., intelligence agencies) may process, analyze, and permanently store your data located on U.S. servers for surveillance purposes. We have no influence over these processing activities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Revocation of Your Consent to Data Processing</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Many data processing operations are only possible with your explicit consent. You can revoke consent at any time. The legality of the data processing carried out before revocation remains unaffected.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)</h3>
                  <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 font-light leading-relaxed text-sm uppercase tracking-wide">
                      IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION. THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE APPLICABLE LEGAL BASIS FOR PROCESSING CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS OR IF THE PROCESSING SERVES TO ASSERT, EXERCISE, OR DEFEND LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1) GDPR).
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed text-sm uppercase tracking-wide mt-4">
                      IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH MARKETING; THIS ALSO APPLIES TO PROFILING IN CONNECTION WITH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Lodge a Complaint with the Supervisory Authority</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    In the event of GDPR violations, data subjects have the right to lodge a complaint with a supervisory authority, particularly in the member state of their habitual residence, workplace, or the place of the alleged infringement. This right exists without prejudice to other administrative or judicial remedies.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                <p className="text-sm text-gray-600 font-light">
                  <span className="font-medium text-gray-900">Questions about this Privacy Policy?</span> Contact us at{' '}
                  <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 font-medium">
                    info@mmplatinum.de
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 font-medium">
                    +49 (0) 1703633682
                  </a>.
                </p>
              </div>
            </section>

            {/* 4. Data Collection on Our Website */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                4. Data Collection on Our Website
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Cookies</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Some of our web pages use cookies. Cookies do not harm your computer and do not contain viruses. Cookies help make our website more user-friendly, efficient, and secure. Cookies are small text files that are stored on your computer and saved by your browser.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Most of the cookies we use are so-called "session cookies." They are automatically deleted after your visit. Other cookies remain in your device's memory until you delete them. These cookies make it possible to recognize your browser when you next visit the site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Server Log Files</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The website provider automatically collects and stores information that your browser automatically transmits to us in "server log files." These are:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>Browser type and browser version</li>
                    <li>Operating system used</li>
                    <li>Referrer URL</li>
                    <li>Host name of the accessing computer</li>
                    <li>Time of the server request</li>
                    <li>IP address</li>
                  </ul>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    This data will not be combined with data from other sources. The basis for data processing is Art. 6(1)(f) GDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Contact Form</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you send us questions via the contact form, we will collect the data entered on the form, including the contact details you provide, to answer your question and any follow-up questions. We do not share this information without your permission.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    We will, therefore, process any data you enter onto the contact form only with your consent per Art. 6(1)(a) GDPR. You may revoke your consent at any time. An informal email making this request is sufficient. The data processed before we receive your request may still be legally processed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Registration on This Website</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You can register on our website in order to access additional functions offered here. The input data will only be used for the purpose of using the respective site or service for which you have registered. The mandatory information requested during registration must be provided in full. Otherwise, we will reject your registration.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    To inform you about important changes such as those within the scope of our site or technical changes, we will use the email address specified during registration.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Analytics and Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                5. Analytics and Advertising
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Google Analytics</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    This website uses Google Analytics, a web analytics service. It is operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Google Analytics uses so-called "cookies." These are text files that are stored on your computer and that allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Google Analytics cookies are stored based on Art. 6(1)(f) GDPR. The website operator has a legitimate interest in analyzing user behavior to optimize both its website and its advertising.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Google Ads</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The website operator uses Google Ads. Google Ads is an online advertising program from Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States ("Google").
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Google Ads allows us to display ads in the Google search engine or on third-party websites when the user performs certain search queries on Google (keyword targeting). Analytics allows the analysis of the effectiveness of certain keywords and ads.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Facebook Pixel</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Our website measures conversions using visitor action pixels from Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA ("Facebook").
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    These allow the behavior of site visitors to be tracked after they click on a Facebook ad to reach the provider's website. This allows an analysis of the effectiveness of Facebook advertisements for statistical and market research purposes and their future optimization.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Newsletter */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                6. Newsletter
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Newsletter Data</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you would like to receive our newsletter, we require a valid email address as well as information that allows us to verify that you are the owner of the specified email address and that you agree to receive this newsletter. No additional data is collected or is only collected on a voluntary basis.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    We only use this data to send the requested information and do not pass it on to third parties. We will, therefore, process any data you enter onto the contact form only with your consent per Art. 6(1)(a) GDPR.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Mailchimp</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    This website uses the services of Mailchimp to send newsletters. This service is provided by Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Mailchimp is a service which organizes and analyzes the distribution of newsletters. If you enter data (e.g. your email address) to subscribe to our newsletter, it will be stored on Mailchimp servers in the USA.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Plugins and Tools */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                7. Plugins and Tools
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">YouTube</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Our website uses plugins from YouTube, which is operated by Google. The operator of the pages is YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    If you visit one of our pages featuring a YouTube plugin, a connection to the YouTube servers is established. Here the YouTube server is informed about which of our pages you have visited.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Google Web Fonts</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    For uniform representation of fonts, this page uses web fonts provided by Google. When you open a page, your browser loads the required web fonts into your browser cache to display texts and fonts correctly.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    For this purpose your browser has to establish a direct connection to Google servers. Google thus becomes aware that our web page was accessed via your IP address.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Google reCAPTCHA</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We use "Google reCAPTCHA" (hereinafter "reCAPTCHA") on our websites. This service is provided by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google").
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    reCAPTCHA is used to check whether the data entered on our website (such as on a contact form) has been entered by a human or by an automated program.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Further details about Google reCAPTCHA can be found in Google's privacy policy and terms of use:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-2">
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Google Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Google Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. eCommerce and Payment Providers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                8. eCommerce and Payment Providers
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Processing of Customer and Contract Data</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We collect, process, and use personal customer and contract data to establish, structure, and modify our contractual relationships. We only collect, process, and use personal data regarding the use of this website (usage data) if it is necessary to enable the user to utilize the service or for billing purposes. The legal basis for this is Art. 6(1)(b) GDPR.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Collected customer data is deleted after the completion of the order or termination of the business relationship and after any applicable legal retention periods have expired. Legal retention periods remain unaffected.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Transfer Upon Contract Conclusion for Services and Digital Content</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We transfer personal data to third parties only if this is necessary for contract fulfillment, such as to the bank responsible for processing payments.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Further data transfers do not occur unless you have explicitly consented to the transfer. Your data is not shared with third parties without your explicit consent, particularly for advertising purposes.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    The legal basis for data processing is Art. 6(1)(b) GDPR, which allows the processing of data for contract performance or pre-contractual measures.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Digistore24</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Some of our products, services, and content are offered by Digistore24 as a reseller. The provider and contractual partner is Digistore24 GmbH, St.-Godehard-Straße 32, 31139 Hildesheim, Germany.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    The extent to which Digistore24 collects and processes data when accessing this website is determined by Digistore24 GmbH as the data controller in its own privacy policy.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    More information can be found in Digistore24's privacy policy:{' '}
                    <a href="https://www.digistore24.com/dataschutz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                      https://www.digistore24.com/dataschutz
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Conversion Tools / Shopping Cart</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Digistore24 provides various services that can be embedded on websites via HTML and JavaScript code, such as the Social Proof Bubble or the Digistore24 Shopping Cart.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Each time one of these elements is embedded, non-personal data is loaded from the Digistore24 server (e.g., a JavaScript file).
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    When this data is loaded, your web browser requests a web page from Digistore24's server. Our server has no influence over the extent to which your web browser transmits data to Digistore24's servers. We do not transmit any data to Digistore24 ourselves.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Promo Links / Content Links</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    On this website, we use various links to Digistore24 offers to draw your attention to products that may interest you.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Some of these links lead to the domain digistore24.com, owned by Digistore24 GmbH.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    When you click on one of these links, your browser loads a webpage from Digistore24's server. At no point does our server transmit any data to Digistore24. Instead, the data is transmitted directly from your web browser to Digistore24, just as with any other website visit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Affiliate Ad Generator</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The Affiliate Ad Generator allows automated creation of advertising materials. It provides an input field where you can enter your Digistore24 ID. This generates advertising materials that allow you to quickly and easily promote products and services.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Additionally, based on your input, the system checks whether an affiliate partnership exists.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Our Social Media Presence */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                9. Our Social Media Presence
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Processing by Social Networks</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We maintain publicly accessible profiles on social networks. The specific social networks we use are listed below.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Social networks such as Facebook, Twitter, etc. can typically analyze your user behavior extensively when you visit their website or a website with integrated social media content (e.g., like buttons or advertisements). Visiting our social media pages may trigger several data protection-related processing activities, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>If you are logged into your social media account and visit our social media profile, the operator of the platform may link this visit to your user account.</li>
                    <li>Your personal data may still be collected even if you are not logged in or do not have an account with the social media platform. This data is collected via cookies stored on your device or by recording your IP address.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Legal Basis</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Our social media presence aims to ensure maximum visibility on the internet. This constitutes a legitimate interest as defined in Art. 6(1)(f) GDPR. The analysis processes initiated by social networks may be based on different legal grounds, which must be specified by the respective social media providers (e.g., consent under Art. 6(1)(a) GDPR).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Controller Responsibility and Exercising Your Rights</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you visit one of our social media profiles (e.g., Facebook), we share responsibility for data processing with the social media platform operator.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    You may exercise your rights (e.g., access, correction, deletion, restriction of processing, data portability, and complaints) both with us and the respective social media platform operator (e.g., Facebook).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Storage Duration</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    The data collected directly through our social media presence is deleted as soon as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-2">
                    <li>The purpose for storage no longer applies.</li>
                    <li>You request deletion.</li>
                    <li>You withdraw your consent for storage.</li>
                  </ul>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Stored cookies remain on your device until manually deleted. Legal retention obligations remain unaffected.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Social Networks in Detail</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Facebook</h4>
                      <p className="text-gray-700 font-light leading-relaxed">
                        We have a profile on Facebook, provided by Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland. According to Facebook, the collected data may also be transferred to the USA and other third countries.
                      </p>
                      <p className="text-gray-700 font-light leading-relaxed mt-4">
                        We have entered into a Controller Addendum agreement with Facebook, defining which data processing activities are managed by us or Facebook when you visit our Facebook page. You can view this agreement here:{' '}
                        <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                          https://www.facebook.com/legal/terms/page_controller_addendum
                        </a>
                      </p>
                      <p className="text-gray-700 font-light leading-relaxed mt-4">
                        Data transfers to the USA are based on the EU Commission's Standard Contractual Clauses. More details can be found here:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-2">
                        <li>
                          <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                            https://www.facebook.com/legal/EU_data_transfer_addendum
                          </a>
                        </li>
                        <li>
                          <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                            https://de-de.facebook.com/help/566994660333381
                          </a>
                        </li>
                      </ul>
                      <p className="text-gray-700 font-light leading-relaxed mt-4">
                        For further details, please refer to Facebook's privacy policy:{' '}
                        <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                          https://www.facebook.com/about/privacy/
                        </a>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">YouTube</h4>
                      <p className="text-gray-700 font-light leading-relaxed">
                        We have a profile on YouTube, operated by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.
                      </p>
                      <p className="text-gray-700 font-light leading-relaxed mt-4">
                        For details on how YouTube processes your personal data, please see YouTube's privacy policy:{' '}
                        <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                          https://policies.google.com/privacy?hl=en
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Contact Information */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                <p className="text-sm text-gray-600 font-light">
                  <span className="font-medium text-gray-900">Questions about this Privacy Policy?</span> Contact us at{' '}
                  <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 font-medium">
                    info@mmplatinum.de
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 font-medium">
                    +49 (0) 1703633682
                  </a>.
                </p>
              </div>
            </section>

            {/* 10. Data Processing for Marketing Purposes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                10. Data Processing for Marketing Purposes
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Opt-in and Opt-out Procedures</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Any marketing communications we send require your explicit consent. We provide clear opt-in mechanisms for all marketing activities and ensure easy opt-out procedures are available at all times.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    You can withdraw your consent for marketing communications at any time by clicking the unsubscribe link in any marketing email or by contacting us directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Email Marketing</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We may send promotional emails about our trading journal software, new features, special offers, and educational content. These emails are only sent to subscribers who have explicitly consented to receive marketing communications.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Our email marketing system tracks open rates, click-through rates, and other engagement metrics to improve our communications. This data is processed based on our legitimate interest in improving our services (Art. 6(1)(f) GDPR).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Retargeting and Remarketing</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We use retargeting technologies to show relevant advertisements to users who have previously visited our website. This includes Google Ads, Facebook Ads, and other advertising platforms.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    These technologies use cookies and similar tracking technologies to identify returning visitors and display targeted advertisements across various websites and platforms.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Rights of Data Subjects */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                11. Rights of Data Subjects
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right of Access (Art. 15 GDPR)</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right to obtain confirmation as to whether or not personal data concerning you is being processed, and access to such personal data. You may request information about:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>The purposes of the processing</li>
                    <li>The categories of personal data concerned</li>
                    <li>The recipients or categories of recipients to whom personal data has been disclosed</li>
                    <li>The envisaged period for which personal data will be stored</li>
                    <li>The source of the data if not collected directly from you</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Rectification (Art. 16 GDPR)</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right to obtain the rectification of inaccurate personal data concerning you without undue delay. You also have the right to have incomplete personal data completed, including by means of providing a supplementary statement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Erasure (Art. 17 GDPR)</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right to obtain the erasure of personal data concerning you without undue delay where one of the following grounds applies:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>The personal data is no longer necessary for the original purposes</li>
                    <li>You withdraw consent and there is no other legal ground for processing</li>
                    <li>You object to processing and there are no overriding legitimate grounds</li>
                    <li>The personal data has been unlawfully processed</li>
                    <li>The personal data must be erased for compliance with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Restriction of Processing (Art. 18 GDPR)</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right to obtain restriction of processing where one of the following applies:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>The accuracy of the personal data is contested by you</li>
                    <li>The processing is unlawful and you oppose erasure</li>
                    <li>We no longer need the data but you need it for legal claims</li>
                    <li>You have objected to processing pending verification of legitimate grounds</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Data Portability (Art. 20 GDPR)</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right to receive your personal data in a structured, commonly used and machine-readable format and have the right to transmit that data to another controller without hindrance, where the processing is based on consent or contract and carried out by automated means.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Right to Object (Art. 21 GDPR)</h3>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 font-light leading-relaxed text-sm">
                      <strong>YOU HAVE THE RIGHT TO OBJECT, ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION, AT ANY TIME TO PROCESSING OF PERSONAL DATA CONCERNING YOU WHICH IS BASED ON POINT (E) OR (F) OF ART. 6(1) GDPR, INCLUDING PROFILING BASED ON THOSE PROVISIONS.</strong>
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed text-sm mt-4">
                      <strong>WHERE PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH MARKETING, WHICH INCLUDES PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT MARKETING.</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Automated Decision Making and Profiling</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you, except where such decision is necessary for entering into or performance of a contract, authorized by law, or based on your explicit consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">How to Exercise Your Rights</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    To exercise any of these rights, please contact us using the contact information provided in this privacy policy. We will respond to your request within one month of receipt. In complex cases, we may extend this period by two additional months.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    We may ask you to provide additional information to verify your identity before processing your request. All requests are handled free of charge unless they are manifestly unfounded or excessive.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Data Security Measures */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                12. Data Security Measures
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Safeguards</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We implement appropriate technical measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Regular security updates and patches</li>
                    <li>Access controls and authentication systems</li>
                    <li>Firewalls and intrusion detection systems</li>
                    <li>Regular security audits and penetration testing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Organizational Measures</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We have implemented organizational measures to ensure data protection:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>Staff training on data protection principles</li>
                    <li>Confidentiality agreements with employees and contractors</li>
                    <li>Regular review and updating of privacy procedures</li>
                    <li>Incident response procedures for data breaches</li>
                    <li>Principle of data minimization in all processes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Breach Notification</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, unless the breach is unlikely to result in a risk to your rights and freedoms.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    If the breach is likely to result in a high risk to your rights and freedoms, we will also notify you directly without undue delay, providing clear information about the nature of the breach and the measures we are taking to address it.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                13. International Data Transfers
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Transfers to Third Countries</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Some of our service providers are located outside the European Economic Area (EEA). When we transfer your personal data to third countries, we ensure adequate protection through:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>European Commission adequacy decisions</li>
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Binding Corporate Rules (BCRs)</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">United States Transfers</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We work with several US-based service providers including Google, Facebook, and Mailchimp. For these transfers, we rely on the European Commission's Standard Contractual Clauses and additional safeguards where necessary.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    Please note that US law may require these companies to disclose personal data to US authorities. We have no control over such disclosures and cannot provide absolute guarantees regarding the protection of your data in such cases.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Your Rights Regarding International Transfers</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    You have the right to obtain information about the safeguards we have in place for international transfers and to object to transfers that do not provide adequate protection for your personal data.
                  </p>
                </div>
              </div>
            </section>

            {/* 14. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                14. Children's Privacy
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Age Restrictions</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Our trading journal software and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16 years of age.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information from our records promptly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Parental Rights</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will work with you to address the situation and ensure the protection of your child's privacy.
                  </p>
                </div>
              </div>
            </section>

            {/* 15. Changes to This Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                15. Changes to This Privacy Policy
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Policy Updates</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "last modified" date at the top of this policy.
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed mt-4">
                    For material changes that significantly affect your rights, we will provide prominent notice and, where required by law, obtain your consent before implementing such changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Notification of Changes</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    We will notify you of significant changes to this privacy policy through:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 font-light leading-relaxed space-y-1 ml-4 mt-4">
                    <li>Email notification to registered users</li>
                    <li>Prominent notice on our website</li>
                    <li>In-app notifications for software users</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 16. Contact Information and Complaints */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                16. Contact Information and Complaints
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Controller Contact</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-2 text-gray-700 font-light">
                      <p><strong className="text-gray-900">Company:</strong> MMplatinum e.K.</p>
                      <p><strong className="text-gray-900">Representative:</strong> Michael Müller</p>
                      <p><strong className="text-gray-900">Address:</strong> Hepkestr. 153, 01277 Dresden, Germany</p>
                      <p><strong className="text-gray-900">Phone:</strong> <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 transition-colors">+49 (0) 1703633682</a></p>
                      <p><strong className="text-gray-900">Email:</strong> <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">info@mmplatinum.de</a></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Data Protection Officer</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    For specific data protection inquiries, you can contact our Data Protection Officer:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <div className="space-y-2 text-gray-700 font-light">
                      <p><strong className="text-gray-900">Name:</strong> Michael Müller</p>
                      <p><strong className="text-gray-900">Email:</strong> <a href="mailto:info@mmplatinum.de" className="text-blue-600 hover:text-blue-700 transition-colors">info@mmplatinum.de</a></p>
                      <p><strong className="text-gray-900">Phone:</strong> <a href="tel:+491703633682" className="text-blue-600 hover:text-blue-700 transition-colors">+49 (0) 1703633682</a></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Supervisory Authority</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    If you believe that our processing of your personal data violates data protection laws, you have the right to lodge a complaint with a supervisory authority. The competent authority for us is:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <div className="space-y-2 text-gray-700 font-light">
                      <p><strong className="text-gray-900">Authority:</strong> Sächsische Datenschutz- und Transparenzbeauftragte</p>
                      <p><strong className="text-gray-900">Address:</strong> Devrientstraße 5, 01067 Dresden, Germany</p>
                      <p><strong className="text-gray-900">Phone:</strong> +49 351 85471-101</p>
                      <p><strong className="text-gray-900">Email:</strong> saechsdsb@slt.sachsen.de</p>
                      <p><strong className="text-gray-900">Website:</strong> <a href="https://www.saechsdsb.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">www.saechsdsb.de</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Effective Date */}
            <section className="border-t border-gray-200 pt-8">
              <div className="text-center">
                <p className="text-gray-600 font-light text-sm">
                  <strong className="text-gray-900">Last Updated:</strong> January 2025
                </p>
                <p className="text-gray-600 font-light text-sm mt-2">
                  This privacy policy is effective as of the date listed above and replaces any previous versions.
                </p>
              </div>
            </section>

            {/* Final Contact Section */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 font-light mb-6">
                  If you have any questions about this Privacy Policy or our data practices, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:info@mmplatinum.de" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Email Us
                  </a>
                  <a href="tel:+491703633682" className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    Call Us
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

export default Privacy; 