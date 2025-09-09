"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Customer {
  title: string;
  image: string;
}

const customers: Customer[] = [
  { title: "Team Jayanagar Jaguars", image: "/Images/pic1.webp" },
  { title: "50th ICC Navy Reunion T-Shirts", image: "/Images/pic2.webp" },
  { title: "51 IC", image: "/Images/pic3.jpg" },
  { title: "Corporate Client", image: "/Images/pic4.jpg" },
  { title: "School Group", image: "/Images/pic5.jpeg" },
  { title: "Sports Team", image: "/Images/pic6.jpeg" },
  { title: "University", image: "/Images/pic7.jpg" },
  { title: "Non-Profit", image: "/Images/pic8.webp" },
];

const CustomerPhotos: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive layout state
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardSpacing, setCardSpacing] = useState(16);

  // 🟢 Handle responsive layout
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCards(4);
        setCardSpacing(24);
      } else if (width >= 1024) {
        setVisibleCards(3);
        setCardSpacing(20);
      } else if (width >= 768) {
        setVisibleCards(2);
        setCardSpacing(16);
      } else {
        setVisibleCards(1);
        setCardSpacing(16);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // 🟢 Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % customers.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  }, [isAutoPlaying]);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? customers.length - 1 : prev - 1));
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  }, [isAutoPlaying]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % customers.length);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  }, [isAutoPlaying]);

  // 🟢 Calculate carousel transform
  const calculateTransform = () => {
    if (!carouselRef.current) return 0;

    const containerWidth = carouselRef.current.offsetWidth;
    const cardWidth = containerWidth / Math.min(visibleCards, customers.length);
    const centerOffset = (containerWidth - cardWidth) / 2;
    return centerOffset - activeIndex * (cardWidth + cardSpacing);
  };

  // 🟢 Touch swipe handling
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) goToNext();
    if (diff < -50) goToPrevious();

    touchStartX.current = null;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Our Valued Customers
          </span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the diverse range of clients who trust us for their custom apparel needs.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div
          ref={carouselRef}
          className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track */}
          <div
            className="absolute top-0 left-0 h-full flex transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
            style={{
              transform: `translateX(${calculateTransform()}px)`,
              gap: `${cardSpacing}px`,
            }}
          >
            {customers.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                    isActive ? "ring-4 ring-blue-400" : "ring-1 ring-gray-200"
                  }`}
                  style={{
                    width: `calc(${100 / Math.min(visibleCards + 1, customers.length)}vw - ${cardSpacing * 2}px)`,
                    maxWidth: "500px",
                    minWidth: "300px",
                    transform: `scale(${isActive ? 1 : 0.9})`,
                    opacity: isActive ? 1 : 0.7,
                    zIndex: isActive ? 10 : 1,
                  }}
                  onClick={() => goToIndex(index)}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                    {isActive && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                        Featured
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {customers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={goToPrevious}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotos;
