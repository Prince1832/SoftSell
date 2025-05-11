import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const testimonials = [
    {
        image: 'womanimage.jpg',
        name: 'Anjali Verma',
        role: 'IT Manager',
        company: 'TechNova Pvt. Ltd.',
        feedback:
            'SoftSell helped us sell our old software licenses and we got a fantastic deal. The process was very easy and fast!',
    },
    {
        image: 'menimage.jpg',
        name: 'Rohit Mehra',
        role: 'Founder',
        company: 'Digital Edge',
        feedback:
            'I am very happy with SoftSell. Their platform is professional, and customer service has been excellent. Highly recommended!',
    },
    {
        image: 'womanimage.jpg',
        name: 'Priya Sharma',
        role: 'Project Manager',
        company: 'NextGen Solutions',
        feedback:
            'SoftSell provided us with a seamless experience when upgrading our licenses. The team was extremely helpful, and the savings were incredible!',
    },
    {
        image: 'menimage.jpg',
        name: 'Vikram Singh',
        role: 'Software Engineer',
        company: 'CodeCrafters Inc.',
        feedback:
            'I was initially skeptical, but SoftSell delivered beyond expectations. The entire process was hassle-free and transparent.',
    },
    {
        image: 'womanimage.jpg',
        name: 'Nisha khatoon',
        role: 'Operations Head',
        company: 'InnovateX',
        feedback:
            "SoftSell's customer support is top-notch! They guided me through the process step-by-step, ensuring I got the best value for my unused software.",
    },
];

// Framer Motion variants
const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 1.1,
        },
    },
};

const Testimonials = () => {
    const { darkMode } = useTheme();

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-800'
                } md:py-16 py-12 px-4 text-center select-none`}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                What Our Customers Say
            </h2>

            <div className="max-w-7xl mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className={`p-6 rounded-xl shadow hover:shadow-lg transition flex items-center space-x-4 ${darkMode
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-white text-gray-800'
                                    }`}
                            >
                                <div className="text-left">
                                    <p
                                        className={`mb-4 italic line-clamp-3 ${darkMode ? 'text-gray-100' : 'text-gray-700'
                                            }`}
                                    >
                                        "{t.feedback}"
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src={t.image}
                                            alt="profile"
                                            className="w-16 h-16 rounded-full mr-5"
                                        />
                                        <div className="font-semibold text-blue-600 flex flex-col">
                                            {t.name}
                                            <span
                                                className={`font-normal text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                                    }`}
                                            >
                                                {t.role}, {t.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
};

export default Testimonials;
