import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

const serviceCategories = [
  {
    title: 'SEO & GEO',
    items: [
      'Generative Engine Optimization',
      'National SEO',
      'eCommerce SEO Services',
      'Local SEO',
      'All SEO Services'
    ]
  },
  {
    title: 'Paid Media',
    items: [
      'Paid Media (SEM/PPC)',
      'Bing Ads',
      'Google Ads',
      'Programmatic Buying',
      'All Paid Media Services'
    ]
  },
  {
    title: 'Social Media',
    items: [
      'Social Media Advertising (Paid)',
      'Social Media Management',
      'Influencer Marketing',
      'Meta Advertising',
      'All Social Media Services'
    ]
  },
  {
    title: 'Web Development',
    items: [
      'Conversion Rate Optimization',
      'eCommerce Integration',
      'UI & UX',
      'Lead Generation',
      'All Web Development Services'
    ]
  },
  {
    title: 'Content & PR',
    items: [
      'Content Auditing',
      'Content Marketing',
      'Digital PR',
      'Guest Posting',
      'All Content & PR Services'
    ]
  },
  {
    title: 'Branding & Creative',
    items: [
      'Brand Strategy and Design',
      'Email Marketing',
      'Graphic Design',
      'Video Production',
      'All Branding & Creative Services'
    ]
  },
  {
    title: 'Amazon',
    items: [
      'Amazon Marketing',
      'Amazon Vendor Central',
      'Demand Side Platform (DSP)',
      'All Amazon Services'
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white california">Pureformance</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showServices && (
                <div 
                  className="absolute left-0 mt-2 w-screen max-w-screen-xl -ml-[600px] p-4 bg-black/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-800"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <div className="grid grid-cols-4 gap-8">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item}>
                              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#work" className="text-gray-300 hover:text-purple-400 transition-colors">Work</a>
            <a href="#why-us" className="text-gray-300 hover:text-purple-400 transition-colors">Why Us</a>
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
            <button className="block px-3 py-2 text-gray-300 hover:text-purple-400 w-full text-left">
              Services
            </button>
            <a href="#work" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Work</a>
            <a href="#why-us" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Why Us</a>
            <a href="#contact" className="block px-3 py-2 text-purple-400 font-medium">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}