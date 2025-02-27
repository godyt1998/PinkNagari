import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Jaipur', path: '/jaipur' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-lg opacity-100' 
        : 'bg-transparent opacity-0'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-rose-600 hover:text-rose-600 font-display ml-8">
            PinkcityNagari
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 dark:text-gray-600 hover:text-rose-500 dark:hover:text-rose-500 transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 mr-8">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/918003041823"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors"
            >
              <FaWhatsapp className="h-8 w-8" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-4 w-4 text-yellow-400" />
              ) : (
                <MoonIcon className="h-4 w-4 text-gray-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Transition
          show={isMobileMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-100 hover:text-rose-500 dark:hover:text-rose-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;