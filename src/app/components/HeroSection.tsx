"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Desktop/Large screen images (light themed)
const desktopImages = [
  {
    src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1920&h=800&fit=crop&crop=center&q=85",
    quote: "Wear Your Story",
    subtext: "Premium Custom T-Shirts Made Just for You"
  },
  {
    src: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=1920&h=800&fit=crop&crop=center&q=85",
    quote: "Threads That Speak",
    subtext: "Quality Fabrics • Bold Designs • Perfect Fit"
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&h=800&fit=crop&crop=center&q=85",
    quote: "Own Your Look",
    subtext: "From Concept to Closet in Days"
  },
  {
    src: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=1920&h=800&fit=crop&crop=center&q=85",
    quote: "Shirt Happens",
    subtext: "Make It Count with Custom Tees"
  },
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=800&fit=crop&crop=center&q=85",
    quote: "Cotton Dreams",
    subtext: "Soft Touch • Lasting Print • Endless Style"
  }
];

// Mobile/Small screen images (light themed)
const mobileImages = [
  {
    src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=768&h=600&fit=crop&crop=center&q=85",
    quote: "Wear Your Story",
    subtext: "Premium Custom T-Shirts Made Just for You"
  },
  {
    src: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=768&h=600&fit=crop&crop=center&q=85",
    quote: "Threads That Speak",
    subtext: "Quality Fabrics • Bold Designs • Perfect Fit"
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=768&h=600&fit=crop&crop=center&q=85",
    quote: "Own Your Look",
    subtext: "From Concept to Closet in Days"
  },
  {
    src: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=768&h=600&fit=crop&crop=center&q=85",
    quote: "Shirt Happens",
    subtext: "Make It Count with Custom Tees"
  },
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=768&h=600&fit=crop&crop=center&q=85",
    quote: "Cotton Dreams",
    subtext: "Soft Touch • Lasting Print • Endless Style"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) =>
          (prev + 1) %
          (isMobile ? mobileImages.length : desktopImages.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Preload images
  useEffect(() => {
    const imagesToPreload = isMobile ? mobileImages : desktopImages;
    let loadedCount = 0;
    imagesToPreload.forEach((imageObj) => {
      const img = new window.Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          setIsLoaded(true);
        }
      };
      img.src = imageObj.src;
    });
  }, [isMobile]);

  const currentImages = isMobile ? mobileImages : desktopImages;

  return (
    <section className="relative w-full h-[45vh] sm:h-[85vh] md:h-[85vh] lg:h-[75vh] overflow-hidden bg-gray-100">
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
        </div>
      )}

      {/* Image Section */}
      <div className="absolute inset-0 z-0">
        {currentImages.map((imageObj, index) => (
          <motion.div
            key={`${isMobile ? "mobile" : "desktop"}-${imageObj.src}-${index}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.1
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={imageObj.src}
              alt={`${imageObj.quote} - Custom T-Shirts`}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />

            {/* Light overlay instead of dark for light theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-start pl-6 sm:pl-12 md:pl-16 lg:pl-20">
              <div className="text-gray-900 max-w-lg">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: current === index ? 1 : 0,
                    y: current === index ? 0 : 30
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight"
                >
                  {imageObj.quote}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: current === index ? 1 : 0,
                    y: current === index ? 0 : 20
                  }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-700 mb-4 sm:mb-6"
                >
                  {imageObj.subtext}
                </motion.p>
                <Link href="/products">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20
                    }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base cursor-pointer"
                  >
                    Get Your Tee
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {currentImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-black scale-110"
                : "bg-black/40 hover:bg-black/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
