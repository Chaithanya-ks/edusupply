// src/components/LogoIntro.jsx
import React from "react";
import { motion } from "framer-motion";

const LogoIntro = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-500 to-black z-50">
      <motion.img
        src="/logo12.png"
        alt="EduSupply Logo"
        className="w-58 h-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 4, ease: "linear" }}
      />
    </div>
  );
};

export default LogoIntro;
