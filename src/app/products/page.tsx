"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ApparelSection from "./ApparelSection";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // ⬅ Import your cart context


const ProductsPage = () => {
  const { addToCart } = useCart(); // ⬅ Get addToCart function from context

  const Product = [
    { id: "1", name: "T-shirt 1", price: 499, image: "/Images/t2.png" },
    { id: "2", name: "T-shirt 2", price: 499, image: "/Images/t10.png" },
    { id: "3", name: "T-shirt 3", price: 499, image: "/Images/t3.png" },
    { id: "4", name: "T-shirt 4", price: 499, image: "/Images/t4.webp" },
    { id: "5", name: "T-shirt 5", price: 499, image: "/Images/t5.png" },
    { id: "6", name: "T-shirt 6", price: 499, image: "/Images/t6.webp" },
    { id: "7", name: "T-shirt 7", price: 499, image: "/Images/t7.png" },
    { id: "8", name: "T-shirt 8", price: 499, image: "/Images/t8.png" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-16 pb-12 px-8"
      >
        <div className="flex justify-center">
          <Image
            src="/Images/pic5.jpeg"
            alt="Custom Apparel Group"
            width={900}
            height={400}
            className="rounded-xl shadow-lg border border-gray-200"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-3xl md:text-4xl font-bold mt-8 text-gray-800"
        >
          Explore Our Premium T-Shirts
        </motion.h1>
        <p className="text-center text-gray-500 mt-2 max-w-2xl mx-auto">
          Handpicked designs with comfort in mind — wear your vibe.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="px-8 pb-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {Product.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  High quality cotton. ₹{product.price}
                </p>
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image,
                    })
                  }
                  className="mt-3 w-full py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-700 transition cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Carousel & Apparel Section */}
      <Carousel />
      <ApparelSection />
      <Footer />
    </div>
  );
};

export default ProductsPage;
