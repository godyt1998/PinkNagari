import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-8 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start md:ml-8">
            <Link to="/" className="text-2xl font-bold text-rose-500 mb-4 font-display">
              PinkcityNagari
            </Link>
            <p className="text-gray-400 text-center md:text-left max-w-xs">
              Your trusted companion for premium experiences in Jaipur. PinkcityNagari ensures discretion and quality service.
            </p>
          </div>
          {/* Quick Links */}
          <div className="text-center md:text-left md:pl-16">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-rose-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-rose-500 transition-colors">About</Link></li>
              <li><Link to="/jaipur" className="text-gray-400 hover:text-rose-500 transition-colors">Jaipur</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-rose-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="text-center md:text-left md:pl-16">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/918003041823" className="text-gray-400 hover:text-rose-500 transition-colors inline-flex items-center justify-center md:justify-start">
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contact@pinkcitynagari.com" className="text-gray-400 hover:text-rose-500 transition-colors inline-flex items-center justify-center md:justify-start">
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </li>
              <li>
                <a href="tel:+918003041823" className="text-gray-400 hover:text-rose-500 transition-colors inline-flex items-center justify-center md:justify-start">
                  <FaPhone className="mr-2" /> Phone
                </a>
              </li>
            </ul>
          </div>
          {/* Location */}
          <div className="text-center md:text-left md:pl-16 md:pr-8">
            <h4 className="text-xl font-semibold mb-4">Location</h4>
            <div className="w-full h-36 rounded-lg overflow-hidden mx-auto md:mx-0 max-w-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973690853!2d75.65047151643676!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689927464635!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PinkcityNagari Location"
                className="grayscale opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Copyright - adjusted spacing */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PinkcityNagari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;