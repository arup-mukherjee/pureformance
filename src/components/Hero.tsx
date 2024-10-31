import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
      
      {/* Animated background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-8">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Transforming Digital Presence
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight">
            <span className="block">We Create</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Digital Excellence
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto lg:mx-0">
            Elevate your brand with cutting-edge digital solutions that drive growth, 
            engagement, and measurable results.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#contact" 
               className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a href="#services"
               className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-white border border-purple-500/30 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-200">
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="text-gray-400">Team Members</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl"></div>
    </div>
  );
}