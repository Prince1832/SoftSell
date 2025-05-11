import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Jab user page 300px neeche scroll kare
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Top pe smooth scroll karna
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Scroll event ko listen karna
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 w-12 h-12 right-4 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 z-10 hover:bg-blue-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
