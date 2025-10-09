import React from 'react';
import { Link } from 'react-router-dom';

function Terms() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Terms of Use</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
              
              <p className="mb-4">
                Last updated: [Current Date]
              </p>
              
              <p className="mb-4">
                Please read these Terms of Use ("Terms") carefully before using the EMDR Therapy Simplified website (the "Service").
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Acceptance of Terms</h3>
              
              <p className="mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Educational Purpose Only</h3>
              
              <p className="mb-4">
                The content provided through this Service is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h3>
              
              <p className="mb-4">
                The Service and its original content, features, and functionality are owned by EMDR Therapy Simplified and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">User Responsibilities</h3>
              
              <p className="mb-4">
                You are responsible for your use of the Service and any content you provide, including compliance with applicable laws, rules, and regulations.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h3>
              
              <p className="mb-4">
                In no event shall EMDR Therapy Simplified, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">External Links</h3>
              
              <p className="mb-4">
                Our Service may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their content, privacy policies, or practices.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Terms</h3>
              
              <p className="mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
              
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at: <a href="mailto:emdrtherapysimplified@gmail.com?subject=EMDR%20Toolkit%20Terms" className="text-blue-600 hover:text-blue-700">emdrtherapysimplified@gmail.com</a>
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

export default Terms;