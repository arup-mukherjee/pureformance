import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white california">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Subscribe to our newsletter for the latest digital marketing insights.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:max-w-md px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
          >
            Subscribe
            <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}