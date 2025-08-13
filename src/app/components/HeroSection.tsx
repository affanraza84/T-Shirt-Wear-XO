"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://ilogo.in/images/new/custom-tailormade-t-shirts.webp",
  "https://ilogo.in/images/new/t-shirt-printing.webp",
  "https://ilogo.in/images/new/team-custom-t-shirts.webp",
  "https://ilogo.in/images/new/custom-hoodies-for-team.webp",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[40vh] sm:h-[80vh] md:h-[80vh] lg:h-[70vh] overflow-hidden">
      <div className="w-full h-10 bg-gray-700 text-center p-2">
        Get Tailor-made t-shirts and stand unique
      </div>
      <div className="absolute inset-0 z-0 top-10">
        {images.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            alt="Tailor-Made T-shirt"
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-contain sm:object-contain md:object-contain lg:object-contain"
            style={{ margin: "0 auto", left: 0, right: 0 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
