import { useState } from 'react';
import { Download, Play, Shield, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const worksheets = [
    {
      title: 'C3 - SUD/VOC Tracker',
      description: 'Log distress (SUD) and belief validity (VOC) across exercises.',
      printUrl: 'pubblic/workshet/C3 SUD VOC tracker.pdf',
      fillableUrl: 'pubblic/workshet/C3 SUD VOC tracker.pdf'
    },
    {
      title: 'C2 - Safe Place Worksheet',
      description: 'Build a sensory-rich refuge you can access anytime.',
      printUrl: 'pubblic/workshet/C2 Safe Place Worksheet.pdf',
      fillableUrl: 'pubblic/workshet/C2 Safe Place Worksheet.pdf'
    },
    {
      title: 'C4 - Body Scan Worksheet',
      description: 'Recognize physical sensations and track your body responses.',
      printUrl: 'pubblic/workshet/C4 Body Scan Worksheet.pdf',
      fillableUrl: 'pubblic/workshet/C4 Body Scan Worksheet.pdf'
    },
    {
      title: 'B3 - Safety Gates Worksheet',
      description: 'Establish safety protocols for your practice sessions.',
      printUrl: 'pubblic/workshet/B3 Safety Gates Worksheet.pdf',
      fillableUrl: 'pubblic/workshet/B3 Safety Gates Worksheet.pdf'
    },
    {
      title: 'C6 - Progress Diary',
      description: 'Track your progress and insights throughout your journey.',
      printUrl: 'pubblic/workshet/C6 Progress Diary.pdf',
      fillableUrl: 'pubblic/workshet/C6 Progress Diary.pdf'
    },
    {
      title: 'B2 - Weekly Tracking Sheet',
      description: 'Monitor your weekly progress and activities.',
      printUrl: 'pubblic/workshet/B2 Weekly Tracking Sheet.pdf',
      fillableUrl: 'pubblic/workshet/B2 Weekly Tracking Sheet.pdf'
    },
    {
      title: 'C1 - Personal Timeline',
      description: 'Document key events and milestones in your journey.',
      printUrl: 'pubblic/workshet/C1 Personal Timeline.pdf',
      fillableUrl: 'pubblic/workshet/C1 Personal Timeline.pdf'
    },
    {
      title: 'C5 - Closure Rituals Checklist',
      description: 'End your sessions with structured closure activities.',
      printUrl: 'pubblic/workshet/C5 Closure Rituals Checklist.pdf',
      fillableUrl: 'pubblic/workshet/C5 Closure Rituals Checklist.pdf'
    }
  ];

  const mediaResources = [
    { title: 'Introduction to EMDR Therapy (EMDRIA)', duration: 'Video', url: 'https://www.emdria.org/resource/introduction-to-emdr-therapy/' },
    { title: 'UCLA Mindful — Guided Meditations', duration: 'Various', url: 'https://www.uclahealth.org/uclamindful/free-guided-meditations' },
    { title: 'UC San Diego CFM — Guided Audio & Video', duration: 'Various', url: 'https://cih.ucsd.edu/mindfulness/guided-audio-video' },
    { title: 'Mayo Clinic — Mindful Breathing (MP3)', duration: 'Audio', url: 'https://www.mayo.edu/research/labs/mindful-breathing/audio-files' },
    { title: 'Mindfulness Coach (VA app)', duration: 'App', url: 'https://mobile.va.gov/app/mindfulness-coach' },
    { title: 'PTSD Coach Online (VA)', duration: 'Web App', url: 'https://www.ptsd.va.gov/apps/ptsdcoachonline/default.htm' }
  ];

  const faqs = [
    {
      question: 'Do I need to sign up to access the downloads?',
      answer: 'No. All worksheets and links are free to open—no account, no email required.'
    },
    {
      question: 'Are these audio/video safe to use?',
      answer: 'They\'re gentle, education-focused resources for grounding and resourcing. They\'re not trauma processing. If distress rises or you feel outside your window of tolerance, pause, use a calming tool, and consider contacting a qualified EMDR therapist (see Official Resources).'
    },
    {
      question: 'How should I use the worksheets?',
      answer: 'Print or use the fillable PDFs. Work slowly, stay within your comfort zone, and close with a calming ritual. Do not attempt to process traumatic memories on your own.'
    },
    {
      question: 'A link or PDF won\'t open—what can I try?',
      answer: '• Click "Open" to launch in a new tab. • If a PDF doesn\'t load, try another browser or download it. • If an external site is temporarily down, check back later (availability may change).'
    },
    {
      question: 'Can I share this page with a friend?',
      answer: 'Yes. You can share the public URL from the book\'s QR. Please do not redistribute the files elsewhere; link to this page instead.'
    },
    {
      question: 'Are the resources U.S.-specific?',
      answer: 'Yes. Official resources here focus on the United States (EMDRIA directory, SAMHSA FindTreatment, 988 Lifeline).'
    },
    {
      question: 'What if I need urgent help?',
      answer: 'In the U.S., call 911 for emergencies. For emotional support, dial/text 988 or chat at <a href="https://988lifeline.org/" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-700 underline">988lifeline.org</a>.'
    },
    {
      question: 'Who curated these materials?',
      answer: 'This toolkit accompanies "EMDR Therapy Simplified." Items were selected for clarity, safety, and evidence-informed self-support (education and stabilization only).'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md">
        Skip to content
      </a>

      <nav className="bg-white shadow-sm sticky top-0 z-40" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-semibold text-lg text-gray-900">EMDR Support Toolkit</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('downloads')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Downloads
              </button>
              <button onClick={() => scrollToSection('media')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Audio/Video
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Resources
              </button>
              <button onClick={() => scrollToSection('safety')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Safety
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t space-y-2">
              <button onClick={() => scrollToSection('downloads')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Downloads
              </button>
              <button onClick={() => scrollToSection('media')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Audio/Video
              </button>
              <button onClick={() => scrollToSection('resources')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Resources
              </button>
              <button onClick={() => scrollToSection('safety')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Safety
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                FAQ
              </button>
            </div>
          )}
        </div>
      </nav>

      <main id="main-content">
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  EMDR Therapy Simplified — Digital Toolkit
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Printable worksheets, gentle audio for grounding, and official U.S. resources. Evidence-informed. No sign-up required.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="#downloads"
                    role="button"
                    onClick={() => scrollToSection('downloads')}
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center"
                  >
                    Browse Downloads
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <svg
                  className="w-full h-auto max-w-md mx-auto"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt=""
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Large flowing shape */}
                  <path
                    d="M50 150 Q100 50, 200 80 Q300 110, 350 150 Q300 200, 200 220 Q100 250, 50 150 Z"
                    fill="url(#grad1)"
                    className="animate-pulse"
                    style={{animationDuration: '4s'}}
                  />
                  
                  {/* Medium flowing shape */}
                  <path
                    d="M80 120 Q150 70, 220 100 Q280 130, 320 170 Q280 210, 220 200 Q150 190, 80 120 Z"
                    fill="url(#grad2)"
                    className="animate-pulse"
                    style={{animationDuration: '6s', animationDelay: '1s'}}
                  />
                  
                  {/* Small accent circles */}
                  <circle cx="120" cy="100" r="8" fill="#3B82F6" fillOpacity="0.15"/>
                  <circle cx="280" cy="180" r="6" fill="#14B8A6" fillOpacity="0.2"/>
                  <circle cx="200" cy="240" r="4" fill="#3B82F6" fillOpacity="0.1"/>
                  
                  {/* Subtle curved lines */}
                  <path
                    d="M100 200 Q200 180, 300 200"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeOpacity="0.15"
                    fill="none"
                  />
                  <path
                    d="M120 160 Q220 140, 320 160"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeOpacity="0.1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="downloads" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloads — Worksheets & Trackers</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                These tools support stabilization, tracking, and gentle skills practice. Print or use the fillable versions. Do not attempt trauma exposure on your own.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {worksheets.map((worksheet, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-3">
                    <Download className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                    <h3 className="font-semibold text-gray-900 text-lg">{worksheet.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{worksheet.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={worksheet.printUrl}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Printable PDF
                    </a>
                    <a
                      href={worksheet.fillableUrl}
                      className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fillable PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="media" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated Audio & Video</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Short, gentle guides for grounding and resourcing. Use in a quiet, safe place. If distress rises, pause and return to stabilization.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-gray-900 text-sm mb-2">Watch: Introduction to EMDR Therapy (EMDRIA)</p>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg mb-2">
                <iframe 
                  src="https://www.youtube-nocookie.com/embed/Pkfln-ZtWeY" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title="Introduction to EMDR Therapy — EMDRIA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="text-right space-x-3">
                <a 
                  href="https://www.youtube.com/watch?v=Pkfln-ZtWeY" 
                  className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center"
                  target="_blank"
                  rel="noopener"
                >
                  Open on YouTube <ExternalLink size={12} className="ml-1" />
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://www.emdria.org/resource/introduction-to-emdr-therapy/" 
                  className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center"
                  target="_blank"
                  rel="noopener"
                >
                  Open on EMDRIA <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {mediaResources.map((resource, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Play className="text-teal-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.duration}</p>
                      {resource.title === 'Mindfulness Coach (VA app)' && (
                        <div className="mt-1 text-xs text-gray-500">
                          <a href="https://apps.apple.com/us/app/mindfulness-coach/id804284729" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-700">iOS</a>
                          <span className="mx-1">•</span>
                          <a href="https://play.google.com/store/apps/details?id=gov.va.mobilehealth.ncptsd.mindfulnesscoach" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-700">Android</a>
                        </div>
                      )}
                    </div>
                  </div>
                  <a
                    href={resource.url}
                    className="px-6 py-2 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Open</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-600">
              External links open on third-party sites. Availability may change.
            </p>
          </div>
        </section>

        <section id="resources" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Resources — United States</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 text-xl mb-3">EMDRIA Therapist Directory</h3>
                <p className="text-gray-700 mb-4 text-sm">Find certified EMDR therapists in your area through EMDRIA's official directory.</p>
                <a
                  href="https://www.emdria.org/find-an-emdr-therapist/"
                  className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 focus:outline-none focus:underline"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Directory</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 text-xl mb-3">Find Treatment (SAMHSA)</h3>
                <p className="text-gray-700 mb-4 text-sm">Search nationwide for mental health and related services. Confidential and free.</p>
                <a
                  href="https://findtreatment.gov/"
                  className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 focus:outline-none focus:underline"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Search Now</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 text-xl mb-3">Help in Crisis — 988</h3>
                <p className="text-gray-700 mb-2 text-sm">US: Call <strong>911</strong> for emergencies.</p>
                <p className="text-gray-700 mb-4 text-sm">For emotional support: dial/text <strong>988</strong> or chat online.</p>
                <a
                  href="https://988lifeline.org/"
                  className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 focus:outline-none focus:underline"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Get Help</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Learn about EMDR: 
                <a href="https://www.apa.org/topics/psychotherapy/emdr-therapy-ptsd" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-700 mx-1">APA</a>
                •
                <a href="https://www.ptsd.va.gov/understand_tx/emdr.asp" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-700 mx-1">VA/NCPTSD</a>
              </p>
            </div>
          </div>
        </section>

        <section id="safety" className="py-16 px-4 bg-amber-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-amber-300 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Shield className="text-amber-600" size={24} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h2>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    These materials support learning and stabilization only. <strong>Do NOT attempt to process traumatic memories on your own.</strong> If you feel outside your window of tolerance—nausea, dissociation, panic—pause, ground, and consider reaching out to a qualified EMDR therapist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="faq" className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
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

export default App;
