import { useState, useEffect, useRef } from 'react';
import { Users, Award, Briefcase, Globe, Zap, Target } from 'lucide-react';

const stats = [
  { 
    id: 1, 
    name: 'Client Success Rate', 
    value: 98, 
    suffix: '%',
    icon: Target,
    description: 'Satisfaction guaranteed'
  },
  { 
    id: 2, 
    name: 'Projects Delivered', 
    value: 500, 
    suffix: '+',
    icon: Briefcase,
    description: 'Across industries'
  },
  { 
    id: 3, 
    name: 'ROI Increase', 
    value: 200, 
    suffix: '%',
    icon: Zap,
    description: 'Average improvement'
  },
  { 
    id: 4, 
    name: 'Global Reach', 
    value: 30, 
    suffix: '+',
    icon: Globe,
    description: 'Countries served'
  },
];

export default function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            start = end;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="relative bg-black py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="relative group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl transform rotate-6 group-hover:rotate-4 transition-transform"></div>
              <div className="relative">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="mt-6 text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {counters[index]}{stat.suffix}
                </p>
                <p className="mt-2 text-xl font-semibold text-center text-white">{stat.name}</p>
                <p className="mt-1 text-sm text-center text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}