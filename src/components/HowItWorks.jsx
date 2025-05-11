// import React from 'react';
// import { useTheme } from './ThemeContext';
// import {
//   FaUpload,
//   FaSearchDollar,
//   FaLock,
//   FaHandshake,
//   FaMoneyCheckAlt
// } from 'react-icons/fa';

// const steps = [
//   {
//     icon: <FaUpload size={40} className="text-blue-600 mb-2" />,
//     title: 'Upload License',
//     description: 'Submit details of your unused software licenses securely.',
//   },
//   {
//     icon: <FaSearchDollar size={40} className="text-blue-600 mb-2" />,
//     title: 'Get Valuation',
//     description: 'We evaluate your license and tell you how much it’s worth.',
//   },
//   {
//     icon: <FaLock size={40} className="text-blue-600 mb-2" />,
//     title: 'Secure Verification',
//     description: 'We verify the license details and ensure a secure handover.',
//   },
//   {
//     icon: <FaHandshake size={40} className="text-blue-600 mb-2" />,
//     title: 'Connect with Buyer',
//     description: 'We match your license with trusted and verified buyers.',
//   },
//   {
//     icon: <FaMoneyCheckAlt size={40} className="text-blue-600 mb-2" />,
//     title: 'Get Paid',
//     description: 'Receive payment directly once the deal is finalized.',
//   },
// ];

// const HowItWorks = () => {
//   const { darkMode } = useTheme();

//   return (
//     <section
//       className={`md:py-16 py-10 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`}
//       id="howItWorks"
//     >
//       <h2
//         className={`text-3xl md:text-4xl font-bold mb-12 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'
//           }`}
//       >
//         How It Works
//       </h2>

//       <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-xl transition-all duration-300 border hover:shadow-lg ${darkMode
//               ? 'bg-gray-800 border-gray-700 shadow-white/10 text-gray-200'
//               : 'bg-white border-gray-200 shadow text-black'
//               } `}
//           >
//             {step.icon}
//             <h3 className="text-2xl text-start font-semibold mb-2">{step.title}</h3>
//             <p className="text-sm text-start">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;




import React from 'react';
import { useTheme } from './ThemeContext';
import {
  FaUpload,
  FaSearchDollar,
  FaLock,
  FaHandshake,
  FaMoneyCheckAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUpload size={40} className="text-blue-600 mb-2" />,
    title: 'Upload License',
    description: 'Submit details of your unused software licenses securely.',
  },
  {
    icon: <FaSearchDollar size={40} className="text-blue-600 mb-2" />,
    title: 'Get Valuation',
    description: 'We evaluate your license and tell you how much it’s worth.',
  },
  {
    icon: <FaLock size={40} className="text-blue-600 mb-2" />,
    title: 'Secure Verification',
    description: 'We verify the license details and ensure a secure handover.',
  },
  {
    icon: <FaHandshake size={40} className="text-blue-600 mb-2" />,
    title: 'Connect with Buyer',
    description: 'We match your license with trusted and verified buyers.',
  },
  {
    icon: <FaMoneyCheckAlt size={40} className="text-blue-600 mb-2" />,
    title: 'Get Paid',
    description: 'Receive payment directly once the deal is finalized.',
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 1.1,
      ease: 'easeOut'
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const HowItWorks = () => {
  const { darkMode } = useTheme();

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`md:py-16 py-10 px-4 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`}
      id="howItWorks"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-12 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}
      >
        How It Works
      </h2>

      <motion.div
        className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`p-6 rounded-xl transition-all duration-300 border hover:shadow-lg ${darkMode
              ? 'bg-gray-800 border-gray-700 shadow-white/10 text-gray-200'
              : 'bg-white border-gray-200 shadow text-black'
              }`}
          >
            {step.icon}
            <h3 className="text-2xl text-start font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-start">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;

