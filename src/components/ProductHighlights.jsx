import React, { useState } from "react";
import bag1 from "../assets/bag1.jpeg"; 
import image1 from "../assets/image1.jpeg"; 
import gadgets from "../assets/gagets.jpeg"; 

const products = [
  {
    id: 1,
    title: "Stationery",
    description: "Pens, notebooks, markers and more.",
    image: image1,
  },
  {
    id: 2,
    title: "Backpacks",
    description: "Durable and stylish backpacks for students.",
    image: bag1,
  },
  {
    id: 3,
    title: "Tech Gadgets",
    description: "Laptops, tablets, and accessories.",
    image: gadgets,
  },
];

const ProductHighlights = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="products" className="py-16 bg-gray-200 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {products.map((product) => {
            let extraClasses = "transition-transform duration-300";
            if (hoveredId !== null) {
              if (hoveredId === product.id) {
                extraClasses += " scale-110 z-50"; // Hovered card scales up
              } else {
                extraClasses += " scale-90"; // Other cards scale down
              }
            } else {
              extraClasses += " hover:scale-105"; // Default hover effect when no card is hovered
            }

            return (
              <div
                key={product.id}
                className={`bg-white dark:bg-black shadow-lg dark:shadow-[0_4px_26px_rgba(255,255,255,0.5)] rounded-lg overflow-hidden cursor-pointer ${extraClasses}`}
                onMouseEnter={() => {
                  setHoveredId(product.id);
                  document.body.style.cursor = "pointer"; // Set cursor to pointer
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  document.body.style.cursor = "default"; // Reset cursor
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
