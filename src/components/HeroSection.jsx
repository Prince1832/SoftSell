import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import GetQuote from './GetQuote';

const HeroSection = () => {
    const { darkMode } = useTheme();
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    return (
        <>
            <section
                className={`md:py-20 py-15 px-4 text-center mt-15 transition-colors duration-500
              ${darkMode
                    ? "bg-gradient-to-br from-gray-600 to-gray-900 text-white"
                    : "bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
                }  select-none`}
            >
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Sell Your Unused Software Licenses Easily
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Turn your unused licenses into cash in just a few simple steps.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className={`font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer 
                          ${darkMode
                                ? "bg-gray-100 text-blue-800 hover:bg-gray-200"
                                : "bg-white text-blue-700 hover:bg-gray-100"
                            }`}
                    >
                        Get a Quote
                    </button>
                </div>
            </section>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-transparent bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
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

export default HeroSection;
