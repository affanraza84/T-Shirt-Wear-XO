"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ApparelSection from "./ApparelSection";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useUser, SignInButton } from "@clerk/nextjs"; // ✅ Clerk auth

const ProductsPage = () => {
  const { addToCart } = useCart();
  const { isSignedIn } = useUser(); // ✅ check login status

  const Product = [
    { id: "1", name: "T-shirt 1", price: 499, image: "/Images/prod1.jpg" },
    { id: "2", name: "T-shirt 2", price: 499, image: "/Images/prod2.jpg" },
    { id: "3", name: "T-shirt 3", price: 499, image: "/Images/prod3.jpg" },
    { id: "4", name: "T-shirt 4", price: 499, image: "/Images/prod23.jpg" },
    { id: "5", name: "T-shirt 5", price: 499, image: "/Images/prod4.jpg" },
    { id: "6", name: "T-shirt 6", price: 499, image: "/Images/prod25.jpg" },
    { id: "7", name: "T-shirt 7", price: 499, image: "/Images/prod24.jpg" },
    { id: "8", name: "T-shirt 8", price: 499, image: "/Images/prod22.jpg" },
    { id: "9", name: "T-shirt 9", price: 499, image: "/Images/prod6.jpg" },
    { id: "10", name: "T-shirt 10", price: 499, image: "/Images/prod7.jpg" },
    { id: "11", name: "T-shirt 11", price: 499, image: "/Images/prod8.jpg" },
    { id: "12", name: "T-shirt 12", price: 499, image: "/Images/prod9.jpg" },
    { id: "13", name: "T-shirt 13", price: 499, image: "/Images/prod10.jpg" },
    { id: "14", name: "T-shirt 14", price: 499, image: "/Images/prod5.jpg" },
    { id: "15", name: "T-shirt 15", price: 499, image: "/Images/prod12.jpg" },
    { id: "16", name: "T-shirt 16", price: 499, image: "/Images/prod13.jpg" },
    { id: "17", name: "T-shirt 17", price: 499, image: "/Images/prod14.jpg" },
    { id: "18", name: "T-shirt 18", price: 499, image: "/Images/prod15.jpg" },
    { id: "19", name: "T-shirt 19", price: 499, image: "/Images/prod16.jpg" },
    { id: "20", name: "T-shirt 20", price: 499, image: "/Images/prod18.jpg" },
    { id: "21", name: "T-shirt 21", price: 499, image: "/Images/prod19.jpg" },
    { id: "22", name: "T-shirt 22", price: 499, image: "/Images/prod20.jpg" },
    { id: "23", name: "T-shirt 23", price: 499, image: "/Images/prod21.jpg" },
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
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
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

                {/* ✅ Auth Protected Add to Cart */}
                {isSignedIn ? (
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
                ) : (
                  <SignInButton mode="modal">
                    <button className="mt-3 w-full py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-700 transition cursor-pointer">
                      Sign in to Add
                    </button>
                  </SignInButton>
                )}
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
