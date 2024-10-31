import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Ready to transform your digital presence? Get in touch with us.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your message"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Fill out the form or contact us directly using the information below.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    <span>123 Innovation Street, Tech City, TC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="h-5 w-5 text-indigo-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="h-5 w-5 text-indigo-600" />
                    <span>hello@pulseagency.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}