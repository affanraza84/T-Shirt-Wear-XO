"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface DesignCard {
  images: string[];
  rotate?: string;
}

const designCards: DesignCard[] = [
  {
    images: [
      "https://images.unsplash.com/photo-1602810318383-e7f12b1c77b6?w=400&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593032457861-6fdb6e3da3a5?w=400&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop&q=80"
    ],
    rotate: "-rotate-6"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975918318-3a1b66d14f59?w=400&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719478191-9fbb9a9ddf39?w=400&h=400&fit=crop&q=80"
    ],
    rotate: "rotate-3"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542060748-10c28b62716d?w=400&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603208705783-3c2d3e8d302f?w=400&h=400&fit=crop&q=80"
    ],
    rotate: "-rotate-3"
  }
];

const CustomDesign: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(designCards.map(() => 0));

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((i, cardIdx) => (i + 1) % designCards[cardIdx].images.length)
      );
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
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
          {designCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isMounted ? 1 : 0, scale: isMounted ? 1 : 0.8 }}
              transition={{ delay: 0.2 * index, duration: 0.5, ease: "easeOut" }}
              className={`absolute w-40 h-40 sm:w-48 sm:h-48 rounded-lg shadow-lg overflow-hidden ${card.rotate || ""} flex items-center justify-center border border-gray-200`}
              style={{
                zIndex: designCards.length - index,
                transformOrigin: "center"
              }}
            >
              <motion.div
                key={currentIndexes[index]} // re-render on image change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src={card.images[currentIndexes[index]]}
                  alt={`Design ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
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
          <Link href="/products">
            <button className="bg-blue-500 text-white uppercase text-sm sm:text-base font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer">
              Explore T-Shirts Design Templates
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomDesign;
