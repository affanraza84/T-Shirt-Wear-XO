"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  { name: "Cotton Tank Tops", image: "/Images/prod.webp" },
  { name: "Full Sleeves T-Shirts", image: "/Images/prod2.webp" },
  { name: "Aprons", image: "/Images/prod3.webp" },
  { name: "Baby Romper", image: "/Images/prod4.webp" },
  { name: "Dri Fit Vest", image: "/Images/prod5.webp" },
];

const FeaturedProducts: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 uppercase tracking-wide">
          Featured Products
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {products.map((product: Product, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 30 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              <div className="w-full h-48 sm:h-56 lg:h-64 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="mt-4 text-sm sm:text-base font-semibold text-gray-900 uppercase text-center">
                {product.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <button className="bg-blue-500 text-white uppercase text-sm sm:text-base font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
