import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200 py-12 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
        
        {/* Brand Info (Left Side) */}
        <div className="space-y-2 flex flex-col items-center md:items-start">
          <img src="/logo12.png" alt="EduSupply Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-bold text-white">EduSupply</h2>
          <p className="text-sm opacity-75">Your one-stop shop for school essentials.</p>
          <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Contact Info (Centered) */}
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="text-sm opacity-75">📍 1234 EduSupply Rd, City, Country</p>
          <p className="text-sm opacity-75">📧 info@edusupply.com</p>
          <p className="text-sm opacity-75">📞 (123) 456-7890</p>
        </div>

        {/* Social Media Links (Right Side) */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="group relative p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF className="text-white text-lg group-hover:text-blue-400 transition-all duration-300" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="group relative p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-white text-lg group-hover:text-blue-300 transition-all duration-300" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="group relative p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-pink-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram className="text-white text-lg group-hover:text-pink-400 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Glowing Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-20 blur-2xl"></div>
    </footer>
  );
};

export default Footer;
