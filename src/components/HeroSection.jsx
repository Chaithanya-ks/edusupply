
import React from 'react';
import banner from '../assets/banner.png'; 

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center h-screen"  
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to EduSupply</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">Your one-stop shop for all school supplies and more.</p>
        <a 
          href="#products" 
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
