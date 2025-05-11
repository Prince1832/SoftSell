import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Mail, MapPin, Phone, Facebook, Linkedin, Layers } from 'lucide-react';
import GetQuote from './GetQuote';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { darkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className={`${darkMode ? 'bg-gray-900 text-white border-t border-gray-600' : 'bg-gray-200 text-gray-800'} px-6 py-12 select-none`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-2">
              <Link to="/" className="flex items-center gap-2">
                <Layers className="w-8 h-8" />
                SoftSell
              </Link>
            </div>
            <p className="text-lg font-medium">Empowering businesses to sell smarter, grow faster.</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
            <ul className="space-y-2 text-md font-medium">
              <li>
                <a href="/" className="group inline-block relative">
                  Home
                  <span className="block h-[2px] bg-blue-600 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="/services" className="group inline-block relative">
                  Services
                  <span className="block h-[2px] bg-blue-600 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                  className="group inline-block relative"
                >
                  About Us
                  <span className="block h-[2px] bg-blue-600 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <a href="/contact" className="group inline-block relative">
                  Contact
                  <span className="block h-[2px] bg-blue-600 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-3">Subscribe</h3>
            <p className="text-md font-medium mb-2">Get latest updates and offers.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className={`px-3 py-2 rounded outline-none text-sm ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border`}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-3 md:ml-15">Contact</h3>
            <ul className="text-md font-medium space-y-2">
              <li className="flex items-center gap-2 md:ml-15"><MapPin size={20} /> Mumbai, India</li>
              <li className="flex items-center gap-2 md:ml-15"><Phone size={20} /> +91 98765 43210</li>
              <li className="flex items-center gap-2 md:ml-15"><Mail size={20} /> support@softsell.in</li>
            </ul>

            <div className="flex mt-4 gap-6 md:ml-15">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="hover:text-blue-700 transition-colors duration-500" size={20} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="hover:text-blue-700 transition-all duration-500 ease-in-out" size={20} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current hover:text-gray-800 dark:hover:text-blue-700 transition-colors duration-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={`${'mt-10 text-center text-lg font-medium pt-6 border-t'} ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>  
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white shadow-lg max-w-4xl w-full p-6 relative transition-transform duration-300 scale-100">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-3xl font-bold z-100"
            >
              &times;
            </button>
            <GetQuote />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
