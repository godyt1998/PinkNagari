import { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <>
          <a
            href="https://wa.me/918003041823"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-4 bottom-20 z-50 p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>

          <button
            onClick={scrollToTop}
            className="fixed right-4 bottom-4 z-50 p-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-lg transition-all duration-300"
          >
            <FaArrowUp className="h-5 w-5" />
          </button>
        </>
      )}
    </>
  );
};

export default ScrollToTop;