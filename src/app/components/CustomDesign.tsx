"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DesignCard {
  text?: string;
  bgColor: string;
  textColor?: string;
  rotate?: string;
}

const designCards: DesignCard[] = [
  { text: "BLEED BLUE", bgColor: "bg-blue-100", textColor: "text-blue-700", rotate: "-rotate-6" },
  { bgColor: "bg-pink-100", rotate: "rotate-3" },
  { bgColor: "bg-white", rotate: "-rotate-3" },
];

const CustomDesign: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 uppercase tracking-wide">
          Choose From Various Design Ideas
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Design Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isMounted ? 1 : 0, x: isMounted ? 0 : -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full lg:w-1/2 h-64 sm:h-80 flex justify-center items-center"
        >
          {designCards.map((card: DesignCard, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isMounted ? 1 : 0, scale: isMounted ? 1 : 0.8 }}
              transition={{ delay: 0.2 * index, duration: 0.5, ease: "easeOut" }}
              className={`absolute w-40 h-40 sm:w-48 sm:h-48 rounded-lg shadow-lg ${card.bgColor} ${card.rotate || ""} flex items-center justify-center text-center border border-gray-200`}
              style={{
                zIndex: designCards.length - index,
                transformOrigin: "center",
              }}
            >
              {card.text ? (
                <p className={`text-xl sm:text-2xl font-bold ${card.textColor}`}>
                  {card.text}
                </p>
              ) : (
                <div className="w-3/4 h-3/4 bg-gray-300 rounded"></div> // Placeholder for images
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isMounted ? 1 : 0, x: isMounted ? 0 : 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            T-Shirt Design Templates
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Quality T-Shirt Design templates for all occasions.
          </p>
          <button className="bg-blue-500 text-white uppercase text-sm sm:text-base font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300">
            Explore T-Shirts Design Templates
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomDesign;