// import { useState } from 'react';
// import { Menu, X, Layers } from 'lucide-react';
// import ThemeToggle from './ThemeToggle';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const navItems = ['Home', 'Services', 'Testimonials', 'Contact'];

//     return (
//         <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow">
//             <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">

//                 <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-2">
//                     <Layers className="w-8 h-8" />
//                     SoftSell
//                 </div>

//                 <div className="hidden md:flex items-center gap-8 text-md font-medium">
//                     {navItems.map((item) => (
//                         <a
//                             key={item}
//                             href={`#${item.toLowerCase()}`}
//                             className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-all duration-300 ease-in-out"
//                         >
//                             {item}
//                         </a>
//                     ))}

//                     <ThemeToggle />
//                 </div>


//                 <div className="md:hidden">
//                     <button onClick={() => setIsOpen(!isOpen)}>
//                         {isOpen ? <X className="text-gray-700 dark:text-white" /> : <Menu className="text-gray-700 dark:text-white" />}
//                     </button>
//                 </div>
//             </div>


//             <div
//                 className={`md:hidden bg-white dark:bg-gray-900 px-4 space-y-2 shadow transition-all duration-500 ease-in-out ${isOpen ? 'h-screen opacity-100 text-center space-y-10 py-10' : ' opacity-0 overflow-hidden'
//                     }`}
//             >
//                 {isOpen &&
//                     <>
//                         {navItems.map((item) => (
//                             <a
//                                 key={item}
//                                 href={`#${item.toLowerCase()}`}
//                                 className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 {item}
//                             </a>
//                         ))}

//                         <div className="flex justify-center pt-4">
//                             <ThemeToggle />
//                         </div>
//                     </>
//                 }
//             </div>

//         </nav>
//     );
// };

// export default Navbar;




import { useState } from 'react';
import { Menu, X, Layers } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">

                <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-2">
                    <Link to="/" className="flex items-center gap-2">
                        <Layers className="w-8 h-8" />
                        SoftSell
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8 text-md font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-all duration-300 ease-in-out"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>


                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="text-gray-700 dark:text-white" /> : <Menu className="text-gray-700 dark:text-white" />}
                    </button>
                </div>
            </div>


            <div
                className={`md:hidden bg-white dark:bg-gray-900 px-4 space-y-2 shadow transition-all duration-500 ease-in-out ${isOpen ? 'h-screen opacity-100 text-center space-y-10 py-10' : ' opacity-0 overflow-hidden'
                    }`}
            >
                {isOpen && (
                    <>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex justify-center pt-4">
                            <ThemeToggle />
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
