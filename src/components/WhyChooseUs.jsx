// import React, { useRef, useEffect, useState } from 'react';
// import {
//   FaShieldAlt, FaRocket, FaHandshake, FaClock,
//   FaGlobe, FaCheckCircle, FaArrowLeft, FaArrowRight
// } from 'react-icons/fa';
// import { useTheme } from './ThemeContext';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';

// const points = [
//   {
//     icon: <FaShieldAlt size={36} className="text-blue-600 mb-3" />,
//     title: 'Secure & Trusted',
//     description: 'Your data is safe with our encrypted and verified systems.',
//   },
//   {
//     icon: <FaRocket size={36} className="text-blue-600 mb-3" />,
//     title: 'Fast Process',
//     description: 'Complete the license selling process in just a few clicks.',
//   },
//   {
//     icon: <FaHandshake size={36} className="text-blue-600 mb-3" />,
//     title: 'Fair Deals',
//     description: 'We offer the best market rates for your unused licenses.',
//   },
//   {
//     icon: <FaClock size={36} className="text-blue-600 mb-3" />,
//     title: '24/7 Support',
//     description: 'Our support team is available around the clock to help you.',
//   },
//   {
//     icon: <FaGlobe size={36} className="text-blue-600 mb-3" />,
//     title: 'Global Reach',
//     description: 'We connect you with buyers across multiple countries.',
//   },
//   {
//     icon: <FaCheckCircle size={36} className="text-blue-600 mb-3" />,
//     title: 'Verified Buyers',
//     description: 'We ensure all buyers are authentic and verified.',
//   },
// ];

// const WhyChooseUs = () => {
//   const { darkMode } = useTheme();
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);


//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.allowTouchMove = isMobile;
//       swiperRef.current.params.simulateTouch = isMobile;
//       swiperRef.current.params.mousewheel.enabled = isMobile;
//       if (isMobile) {
//         swiperRef.current.mousewheel?.enable?.();
//       } else {
//         swiperRef.current.mousewheel?.disable?.();
//       }
//       swiperRef.current.update();
//     }
//   }, [isMobile]);

//   return (
//     <section
//       className={`md:py-16 py-10 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-600' : 'bg-white'
//         }  select-none`}
//       id="why-choose-us"
//     >
//       <h2
//         className={`text-3xl md:text-4xl font-bold mb-12 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'
//           }`}
//       >
//         Why Choose Us
//       </h2>

//       <div className="max-w-7xl mx-auto relative">
//         <div className="absolute right-4 top-[-70px] flex gap-2 z-10 md:flex hidden">
//           <button
//             ref={prevRef}
//             className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition cursor-pointer"
//             aria-label="Previous slide"
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             ref={nextRef}
//             className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition cursor-pointer"
//             aria-label="Next slide"
//           >
//             <FaArrowRight />
//           </button>
//         </div>

//         <div className={`relative ${isMobile ? 'animate-[shake_2s_infinite]' : ''}`}>
//           <Swiper
//             modules={[Navigation, FreeMode, Mousewheel]}
//             loop={true}
//             slidesPerGroup={1}
//             // freeMode={true}
//             spaceBetween={20}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             mousewheel={{
//               enabled: isMobile,
//               forceToAxis: true,
//               releaseOnEdges: true,
//             }}
//             simulateTouch={isMobile}
//             allowTouchMove={isMobile}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//             }}
//             className="py-2"
//           >
//             {points.map((point, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className={`p-6 h-full border rounded-xl transition-all duration-300 hover:shadow-lg ${darkMode
//                     ? 'bg-gray-800 border-gray-700 text-gray-200 shadow-white/10'
//                     : 'bg-white border-gray-200 text-black shadow'
//                     }`}
//                 >
//                   {point.icon}
//                   <h3 className="text-2xl text-start font-semibold mb-2">{point.title}</h3>
//                   <p className="text-sm text-start">{point.description}</p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;




import React, { useRef, useEffect, useState } from 'react';
import {
  FaShieldAlt, FaRocket, FaHandshake, FaClock,
  FaGlobe, FaCheckCircle, FaArrowLeft, FaArrowRight
} from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const points = [
  {
    icon: <FaShieldAlt size={36} className="text-blue-600 mb-3" />,
    title: 'Secure & Trusted',
    description: 'Your data is safe with our encrypted and verified systems.',
  },
  {
    icon: <FaRocket size={36} className="text-blue-600 mb-3" />,
    title: 'Fast Process',
    description: 'Complete the license selling process in just a few clicks.',
  },
  {
    icon: <FaHandshake size={36} className="text-blue-600 mb-3" />,
    title: 'Fair Deals',
    description: 'We offer the best market rates for your unused licenses.',
  },
  {
    icon: <FaClock size={36} className="text-blue-600 mb-3" />,
    title: '24/7 Support',
    description: 'Our support team is available around the clock to help you.',
  },
  {
    icon: <FaGlobe size={36} className="text-blue-600 mb-3" />,
    title: 'Global Reach',
    description: 'We connect you with buyers across multiple countries.',
  },
  {
    icon: <FaCheckCircle size={36} className="text-blue-600 mb-3" />,
    title: 'Verified Buyers',
    description: 'We ensure all buyers are authentic and verified.',
  },
];

const WhyChooseUs = () => {
  const { darkMode } = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.allowTouchMove = isMobile;
      swiperRef.current.params.simulateTouch = isMobile;
      swiperRef.current.params.mousewheel.enabled = isMobile;
      if (isMobile) {
        swiperRef.current.mousewheel?.enable?.();
      } else {
        swiperRef.current.mousewheel?.disable?.();
      }
      swiperRef.current.update();
    }
  }, [isMobile]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={`md:py-16 py-10 px-4 text-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 border-t border-gray-600' : 'bg-white'
      } select-none`}
      id="why-choose-us"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-12 transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        Why Choose Us
      </h2>

      <div className="max-w-7xl mx-auto relative">
        <div className="absolute right-4 top-[-70px] flex gap-2 z-10 md:flex hidden">
          <button
            ref={prevRef}
            className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition cursor-pointer"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition cursor-pointer"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className={`relative ${isMobile ? 'animate-[shake_2s_infinite]' : ''}`}>
          <Swiper
            modules={[Navigation, FreeMode, Mousewheel]}
            loop={true}
            slidesPerGroup={1}
            spaceBetween={20}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            mousewheel={{
              enabled: isMobile,
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            simulateTouch={isMobile}
            allowTouchMove={isMobile}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="py-2"
          >
            {points.map((point, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-6 h-full border rounded-xl transition-all duration-300 hover:shadow-lg ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-gray-200 shadow-white/10'
                      : 'bg-white border-gray-200 text-black shadow'
                  }`}
                >
                  {point.icon}
                  <h3 className="text-2xl text-start font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-start">{point.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
