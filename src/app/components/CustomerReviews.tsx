"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Review {
  name: string;
  timeAgo: string;
  rating: number;
  review: string;
  source: string;
}

const reviews: Review[] = [
  {
    name: "Vinod Kandavalli",
    timeAgo: "4 weeks ago",
    rating: 5,
    review:
      "We recently ordered custom-designed caps for our cricket club from iLogo, and the entire experience was outstanding. The iLogo team was extremely professional, assisting us through the design process, and ensuring top-notch quality. We are truly impressed with both their service and product. I",
    source: "Google",
  },
  {
    name: "The Heritage Project",
    timeAgo: "1 month ago",
    rating: 5,
    review:
      "We had a fantastic experience working with iLogo! They went above and beyond to deliver custom T-shirts for our event on very short notice, and the quality of both the fabric and the print was excellent. The team was responsive, helpful, and made sure everything was ready in time. One small",
    source: "Google",
  },
  {
    name: "Vipen Kumar",
    timeAgo: "7 months ago",
    rating: 5,
    review:
      "I had a fantastic experience with i-Logo for custom t-shirts made for my Squadron (Indian Air Force). The quality of the t-shirts exceeded my expectations, with a great finish and attention to detail. The embroidery was exactly as per my specifications. Moreover, the pricing was very",
    source: "Google",
  },
];

const CustomerReviews: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-wide">
          Verified Customer Reviews
        </h2>
        <div className="flex justify-center items-center mt-2 sm:mt-3 lg:mt-4">
          {renderStars(4.6)}
          <span className="ml-1 sm:ml-2 text-sm sm:text-base md:text-lg font-semibold text-gray-700">
            4.6 rating of 1439 reviews
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {reviews.map((review: Review, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 30 }}
            transition={{ delay: 0.2 * index, duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm sm:text-base">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {review.timeAgo}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-400 text-xs sm:text-sm">via</span>
                <span className="text-gray-600 font-semibold text-xs sm:text-sm">
                  {review.source}
                </span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.5 18.5C7.5 18.5 6 18.5 6 17C6 15.5 7.5 13 9.5 13C11.5 13 13 15.5 13 15.5C13 17 11.5 18.5 9.5 18.5H7.5ZM14.5 13C16.5 13 18 15.5 18 15.5C18 17 16.5 18.5 14.5 18.5H14C13.45 18.5 13 18.05 13 17.5C13 16.95 13.45 16.5 14 16.5H14.5C15.33 16.5 16 15.83 16 15.5C16 15.17 15.33 14.5 14.5 14.5C13.67 14.5 13 15.17 13 15.5C13 16.05 13.45 16.5 14 16.5H14.5C14.78 16.5 15 16.28 15 16C15 15.72 14.78 15.5 14.5 15.5H14C13.45 15.5 13 15.05 13 14.5C13 13.95 13.45 13.5 14 13.5H14.5C15.33 13.5 16 13.17 16 12.5C16 11.67 15.33 11 14.5 11C13.67 11 13 11.67 13 12.5C13 13.05 13.45 13.5 14 13.5H14.5Z"
                    fill="#4285F4"
                  />
                </svg>
              </div>
            </div>

            <div className="flex mb-  mb-2 sm:mb-3">
              {renderStars(review.rating)}
            </div>

            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              {review.review}
              <span className="text-gray-500">...</span>
            </p>

            <button className="text-blue-600 text-xs sm:text-sm font-medium mt-2 sm:mt-3 hover:underline">
              See more
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
