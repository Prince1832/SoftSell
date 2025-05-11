import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex flex-col justify-center items-left h-full">
      <button
        className={`w-14 h-7 rounded-full cursor-pointer transition-all duration-500 ease-in-out px-1 flex items-center ${darkMode ? "bg-gray-400" : "bg-green-500"
          }`}
        onClick={toggleDarkMode}
      >
        <div
          className={`w-5 h-5 bg-white text-gray-400 text-md rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${darkMode ? "translate-x-[29px]" : "translate-x-0"
            }`}
        >
          {darkMode ? <FaMoon /> : <MdOutlineWbSunny />}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;