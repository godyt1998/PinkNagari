import { useState } from 'react';
import Modal from './Modal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative ml-4 md:ml-8">
            <img
              src="./images/about-banner.jpg"
              alt="About PinkcityNagari"
              className="rounded-[2rem] shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
            />
            <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 overflow-hidden rounded-full animate-spin-slow">
              <img
                src="./images/sex-circle.jpg"
                alt=""
                className="w-full h-full object-cover transform scale-110 opacity-90"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
              Welcome to jaipur escort service 
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              Discover the finest experiences in Jaipur Escort with PinkcityNagari. We pride ourselves on providing exceptional services with utmost discretion and professionalism with indipendent escort.
            </p>
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex flex-col items-center space-y-8 w-full max-w-md">
                <div className="flex items-start w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Premium Quality</h3>
                    <p className="text-gray-600 dark:text-gray-300">We ensure the highest standards of service quality.</p>
                  </div>
                </div>

                <div className="flex items-start w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">100% Discretion</h3>
                    <p className="text-gray-600 dark:text-gray-300">Your privacy is our top priority.</p>
                  </div>
                </div>

                <div className="flex items-start w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">24/7 Availability</h3>
                    <p className="text-gray-600 dark:text-gray-300">We're here for you around the clock.</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
              >
                Learn More
              </button>

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="About PinkcityNagari"
              >
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Welcome to jaipur escort, your premier destination for experiencing the vibrant culture and hospitality of Jaipur. Our platform is dedicated to providing exceptional services with the utmost discretion and professionalism jaipur call girl service. indipendent escort jaipur best escort service.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Commitment:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                    <li>Premium Quality Services</li>
                    <li>100% Discretion Guaranteed</li>
                    <li>24/7 Customer Support</li>
                    <li>Professional and Reliable Staff</li>
                    <li>Safe and Secure Environment</li>
                  </ul>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    Trust Pinkcity to deliver an unforgettable experience with complete privacy and satisfaction guaranteed. call girl service 
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 py-12 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Choose PinkcityNagari in Jaipur?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-rose-500/10 rounded-full">
                    <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Trusted & Verified
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  100% verified profiles with real photos and genuine services in Jaipur.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-rose-500/10 rounded-full">
                    <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Privacy Guaranteed
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Complete discretion and confidentiality for all our clients.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-rose-500/10 rounded-full">
                    <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  24/7 Availability
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Round-the-clock service with instant booking confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
