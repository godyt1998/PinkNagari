import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const subject = "New Contact Form Submission";
    const body = `
Name: ${formData.get('firstName')} ${formData.get('lastName')}
Phone: ${formData.get('phone')}
Email: ${formData.get('email')}
Message: ${formData.get('message')}
    `;

    window.location.href = `mailto:contact@pinkcitynagari.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section 
          className="min-h-screen pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/images/about-sky.jpg')`,
          }}
        >
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
    
            {/* Main Content */}
            <div className="flex flex-col gap-12">
              {/* Forms Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-16">
                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          First Name
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Last Name
                        </label>
                        <input
                          name="lastName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-4 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
    
                {/* Contact Information */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {/* Location */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 bg-rose-500/10 rounded-full mb-2">
                        <FaMapMarkerAlt className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Pink Street, C-Scheme<br />
                          Jaipur, Rajasthan 302001
                        </p>
                      </div>
                    </div>
    
                    {/* Phone */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 bg-rose-500/10 rounded-full mb-2">
                        <FaPhone className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                        <a href="tel:+918003041823" className="text-gray-600 dark:text-gray-300 hover:text-rose-500">
                          +91 800-304-1823
                        </a>
                      </div>
                    </div>
    
                    {/* Email */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 bg-rose-500/10 rounded-full mb-2">
                        <FaEnvelope className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                        <a href="mailto:contact@pinkcitynagari.com" className="text-gray-600 dark:text-gray-300 hover:text-rose-500">
                          contact@pinkcitynagari.com
                        </a>
                      </div>
                    </div>
    
                    {/* Business Hours */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 bg-rose-500/10 rounded-full mb-2">
                        <FaClock className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday<br />
                          9:00 AM - 6:00 PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    {/* Full Width Map */}
              <div className="w-[calc(100%-8rem)] h-[400px] rounded-2xl overflow-hidden shadow-xl mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973690853!2d75.65047151643676!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689927464635!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Contact;