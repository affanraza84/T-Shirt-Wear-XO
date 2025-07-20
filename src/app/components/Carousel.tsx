"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Customer {
  title: string;
  image: string;
}

const customers: Customer[] = [
  { title: "Team Jayanagar Jaguars", image: "/images/pic1.webp" },
  { title: "50th ICC Navy Reunion T-Shirts", image: "/images/pic2.webp" },
  { title: "51 IC", image: "/images/pic3.jpg" },
  { title: "Corporate Client", image: "/images/pic4.jpg" },
  { title: "School Group", image: "/images/pic5.jpeg" },
  { title: "Sports Team", image: "/images/pic6.jpeg" },
  { title: "University", image: "/images/pic7.jpg" },
  { title: "Non-Profit", image: "/images/pic8.webp" },
];

const CustomerPhotos: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width: number = window.innerWidth;
      if (width >= 1280) {
        setVisibleCards(4);
      } else if (width >= 1024) {
        setVisibleCards(3);
      } else if (width >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const goToPrevious = (): void => {
    setStartIndex((prev: number) =>
      prev === 0 ? customers.length - visibleCards : prev - 1
    );
  };

  const goToNext = (): void => {
    setStartIndex((prev: number) =>
      prev + visibleCards >= customers.length ? 0 : prev + 1
    );
  };

  const cardWidthPercent: number = 100 / visibleCards;

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-wide">
          Our Satisfied Customers
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Explore the diverse groups and organizations we've proudly served with
          our custom solutions.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={20} className="text-gray-600 hover:text-black" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
          aria-label="Next"
        >
          <ChevronRight size={20} className="text-gray-600 hover:text-black" />
        </button>

        <div className="overflow-hidden rounded-md">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-2"
            style={{
              transform: `translateX(-${(startIndex * 100) / visibleCards}%)`,
              width: `${(customers.length * 100) / visibleCards}%`,
            }}
          >
            {customers.map((item: Customer, index: number) => (
              <div
                key={index}
                className="flex-shrink-0 px-1"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <div className="group bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition">
                  <div className="relative h-36 sm:h-40 md:h-48 lg:h-52 xl:h-56">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 w-full text-center text-white text-xs sm:text-sm py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </div>
                  </div>
                  <div className="text-center py-2 px-2 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-700 group-hover:text-black transition">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotos;
