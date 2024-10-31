import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold california">Pulse</h3>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative digital solutions and strategic marketing approaches.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 california">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Digital Strategy</li>
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 california">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 california">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Pulse. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span className="text-gray-400 text-sm">by Pulse Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}