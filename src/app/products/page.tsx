"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ApparelSection from "./ApparelSection";
// import { Fullscreen } from "lucide-react";

const ProductsPage = () => {
  return (
    <div>
      <div className="pt-12 px-8 bg-white min-h-screen">
        <div className="flex justify-center mb-5">
          <Image
            src="/Images/pic5.jpeg"
            alt="Custom Apparel Group"
            width={900}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/Images/t2.png",
            "/Images/t10.png",
            "/Images/t3.png",
            "/Images/t4.webp",
            "/Images/t5.png",
            "/Images/t6.webp",
            "/Images/t7.png",
            "/Images/t8.png",
          ].map((src, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition"
            >
              <Image
                src={src}
                alt={`Product ${idx + 1}`}
                width={200}
                height={250}
                className="rounded mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800">
                T-shirt {idx + 1}
              </h3>
              <p className="text-sm text-gray-500">High quality cotton. ₹499</p>
            </div>
          ))}
        </div>
      </div>
      <Carousel />
      <ApparelSection />
      <Footer />
    </div>
  );
};

export default ProductsPage;
