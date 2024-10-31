import { Shield, Zap, Trophy, Users } from 'lucide-react';

const features = [
  {
    name: 'Data-Driven Approach',
    description: 'We leverage advanced analytics and AI to make informed decisions that drive real results.',
    icon: Zap,
  },
  {
    name: 'Industry Expertise',
    description: '15+ years of experience in digital marketing and technology solutions.',
    icon: Trophy,
  },
  {
    name: 'Dedicated Team',
    description: 'A team of certified professionals committed to your success.',
    icon: Users,
  },
  {
    name: 'Proven Results',
    description: 'Consistent track record of delivering exceptional ROI for our clients.',
    icon: Shield,
  },
];

export default function WhyUs() {
  return (
    <div id="why-us" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Why Choose Pureformance
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We combine innovation with expertise to deliver exceptional results
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="relative z-10 bg-gray-900 p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl transform rotate-6 group-hover:rotate-4 transition-transform"></div>
                  <div className="relative flex items-center justify-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                        <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-white">{feature.name}</h3>
                      <p className="mt-2 text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Start Your Journey
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}