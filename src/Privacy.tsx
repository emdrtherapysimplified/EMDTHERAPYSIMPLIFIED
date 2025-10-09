import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-40" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="font-semibold text-lg text-gray-900">EMDR Support Toolkit</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              
              <p className="mb-4">
                Last updated: [Current Date]
              </p>
              
              <p className="mb-4">
                This Privacy Policy describes how EMDR Therapy Simplified ("we," "us," or "our") collects, uses, and discloses your information when you use our website (the "Service").
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information Collection</h3>
              
              <p className="mb-4">
                We do not collect personal information unless you voluntarily provide it through contact forms or email. We do not use cookies or tracking technologies to collect information about your browsing behavior.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Use of Information</h3>
              
              <p className="mb-4">
                Any information you voluntarily provide is used solely to respond to your inquiries or improve our services. We do not sell, rent, or share your personal information with third parties.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">External Links</h3>
              
              <p className="mb-4">
                Our Service contains links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their privacy policies.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Security</h3>
              
              <p className="mb-4">
                We implement reasonable security measures to protect any information you provide. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h3>
              
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
              
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:emdrtherapysimplified@gmail.com?subject=EMDR%20Toolkit%20Privacy%20Policy" className="text-blue-600 hover:text-blue-700">emdrtherapysimplified@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm">
                © <span id='year'></span> EMDR Therapy Simplified. 'EMDR Therapy Simplified — Digital Toolkit.'
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-4 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors focus:outline-none focus:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors focus:outline-none focus:underline">
                Terms
              </Link>
              <a href="mailto:emdrtherapysimplified@gmail.com?subject=EMDR%20Toolkit%20Feedback" className="hover:text-white transition-colors focus:outline-none focus:underline">
                Contact
              </a>
              <div className="text-xs text-gray-400 mt-2 sm:mt-0">
                Questions? Email us. We do not provide medical advice via email.
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: `document.getElementById('year').textContent = new Date().getFullYear();` }}></script>
    </div>
  );
}

export default Privacy;