import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-white dark:bg-black shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side: Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img src="/logo12.png" alt="EduSupply Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            EduSupply
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "Products", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 
                         hover:bg-yellow-400 hover:text-black dark:hover:text-black"
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="relative w-20 h-10 bg-gray-300 dark:bg-yellow-400 rounded-full transition duration-300 shadow-lg focus:outline-none"
          >
            <div
              className={`absolute top-1 left-1 w-8 h-8 bg-white dark:bg-black rounded-full shadow transform transition-transform duration-300 ${
                darkMode ? "translate-x-10" : ""
              }`}
            ></div>
            <span
              className={`absolute top-2 left-2 text-sm ${
                darkMode ? "text-black" : "text-gray-700"
              }`}
            >
              {darkMode ? "ON" : "OFF"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="mr-4 focus:outline-none">
            {darkMode ? (
              <span className="text-yellow-500">ON</span>
            ) : (
              <span className="text-gray-600">OFF</span>
            )}
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
          {["Home", "Products", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 
                         hover:bg-yellow-400 hover:text-black dark:hover:text-black"
            >
              {item}
            </a>
          ))}
          <div className="mt-4 text-center">
            <button
              onClick={toggleDarkMode}
              className="relative w-20 h-10 bg-gray-300 dark:bg-yellow-400 rounded-full transition duration-300 shadow-lg focus:outline-none"
            >
              <div
                className={`absolute top-1 left-1 w-8 h-8 bg-white dark:bg-black rounded-full shadow transform transition-transform duration-300 ${
                  darkMode ? "translate-x-10" : ""
                }`}
              ></div>
              <span
                className={`absolute top-2 left-2 text-sm ${
                  darkMode ? "text-black" : "text-gray-700"
                }`}
              >
                {darkMode ? "ON" : "OFF"}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
