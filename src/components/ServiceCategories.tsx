import { 
  Search, Globe, ShoppingCart, MapPin, DollarSign, 
  MessageCircle, Code, BarChart2, PenTool, Box 
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'SEO & GEO',
    icon: Search,
    services: [
      { name: 'Generative Engine Optimization', path: '/services/geo' },
      { name: 'National SEO', path: '/services/national-seo' },
      { name: 'eCommerce SEO Services', path: '/services/ecommerce-seo' },
      { name: 'Local SEO', path: '/services/local-seo' },
    ],
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Paid Media',
    icon: DollarSign,
    services: [
      { name: 'Paid Media (SEM/PPC)', path: '/services/sem-ppc' },
      { name: 'Bing Ads', path: '/services/bing-ads' },
      { name: 'Google Ads', path: '/services/google-ads' },
      { name: 'Programmatic Buying', path: '/services/programmatic' },
    ],
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'Social Media',
    icon: MessageCircle,
    services: [
      { name: 'Social Media Advertising', path: '/services/social-ads' },
      { name: 'Social Media Management', path: '/services/social-management' },
      { name: 'Influencer Marketing', path: '/services/influencer' },
      { name: 'Meta Advertising', path: '/services/meta-ads' },
    ],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Web Development',
    icon: Code,
    services: [
      { name: 'Conversion Rate Optimization', path: '/services/cro' },
      { name: 'eCommerce Integration', path: '/services/ecommerce' },
      { name: 'UI & UX', path: '/services/ui-ux' },
      { name: 'Lead Generation', path: '/services/lead-gen' },
    ],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'Content & PR',
    icon: PenTool,
    services: [
      { name: 'Content Auditing', path: '/services/content-audit' },
      { name: 'Content Marketing', path: '/services/content-marketing' },
      { name: 'Digital PR', path: '/services/digital-pr' },
      { name: 'Guest Posting', path: '/services/guest-posting' },
    ],
    gradient: 'from-yellow-600 to-amber-600'
  },
  {
    title: 'Amazon Services',
    icon: Box,
    services: [
      { name: 'Amazon Marketing', path: '/services/amazon-marketing' },
      { name: 'Amazon Vendor Central', path: '/services/vendor-central' },
      { name: 'Demand Side Platform (DSP)', path: '/services/amazon-dsp' },
    ],
    gradient: 'from-indigo-600 to-violet-600'
  }
];

export default function ServiceCategories() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Comprehensive Digital Solutions
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Explore our full range of services designed to elevate your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.title} className="relative group">
              <div className="relative z-10 bg-gray-900 p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {category.title}
                </h3>
                
                <ul className="mt-4 space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                      <a href={service.path} className="text-sm">{service.name}</a>
                    </li>
                  ))}
                </ul>
                
                <a href={`/services/${category.title.toLowerCase().replace(' ', '-')}`}
                   className="mt-6 inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300">
                  View All Services
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}