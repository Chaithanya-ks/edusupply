import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const testimonials = [
  { id: 1, text: "EduSupply helped me get everything I needed for the new school year!", author: "Jane Doe" },
  { id: 2, text: "The quality and service are excellent. Highly recommended!", author: "John Smith" },
  { id: 3, text: "Fast shipping and great customer support. Love their products.", author: "Alice Johnson" },
];

const AnimatedPerson = () => {
  const { scene } = useGLTF("/smile_yellow_ball.glb"); 

  
  scene.traverse((child) => {
    if (child.isMesh && !child.material.map) {
      child.material.color.set("yellow"); 
    }
  });

  // Handle cursor pointer effect
  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <primitive
      object={scene}
      scale={2.0}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialCount = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialCount]);

  return (
    <section id="testimonials" className="py-16 bg-blue-100 dark:bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* 3D Model on Left */}
        <div className="w-full md:w-1/3 h-72">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Environment preset="sunset" />
            <Suspense fallback={null}>
              <AnimatedPerson />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Testimonials on Right */}
        <div className="w-full md:w-2/3 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Testimonials</h2>
          <div 
            className="max-w-xl mx-auto bg-gradient-to-r from-blue-400 to-green-400 dark:from-purple-700 dark:to-indigo-700 shadow-lg 
                       dark:shadow-[0_4px_6px_rgba(220,20,60,0.5)] p-8 rounded-lg 
                       transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-xl italic text-gray-100 dark:text-gray-200">
              "{testimonials[current].text}"
            </p>
            <p className="mt-4 font-bold text-gray-100 dark:text-gray-200">
              - {testimonials[current].author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
