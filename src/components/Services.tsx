import { BarChart, Globe, Megaphone, Palette, Target, Code, Lightbulb, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with your business goals. We analyze market trends, competitor insights, and customer behavior to create winning digital roadmaps.',
    icon: Target,
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies. From e-commerce to web apps, we create scalable solutions that drive business growth.',
    icon: Code,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Brand Identity',
    description: 'Comprehensive branding solutions that tell your story. We craft unique visual identities, guidelines, and brand experiences that resonate with your audience.',
    icon: Lightbulb,
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Result-driven marketing campaigns that convert. Our strategies combine SEO, content marketing, and paid advertising to maximize your ROI.',
    icon: TrendingUp,
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Analytics & Insights',
    description: 'Deep dive into your data to uncover opportunities. We provide actionable insights and regular reporting to optimize your digital performance.',
    icon: BarChart,
    gradient: 'from-red-600 to-pink-600',
  },
  {
    title: 'Global Reach',
    description: 'Expand your business across borders. We help you reach international markets with localized strategies and multi-language support.',
    icon: Globe,
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Brand Marketing',
    description: 'Strategic brand campaigns that elevate your presence. We create compelling narratives that build trust and drive customer loyalty.',
    icon: Palette,
    gradient: 'from-fuchsia-600 to-pink-600',
  },
  {
    title: 'Social Media',
    description: 'Engaging social media strategies that connect. We manage your social presence and create content that sparks conversations.',
    icon: Megaphone,
    gradient: 'from-blue-600 to-indigo-600',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Comprehensive digital solutions crafted to elevate your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              <div className="relative z-10 bg-gray-900 p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.gradient}`}>
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                  >
                    Learn more
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            Start Your Digital Journey
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}