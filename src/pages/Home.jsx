// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductHighlights from '../components/ProductHighlights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
