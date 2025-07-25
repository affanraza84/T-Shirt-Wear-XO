"use client";

import ProductCard from "../components/ProductCard";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    description: "100% cotton, soft and breathable.",
    price: 799,
    image: "/Images/tee1.webp",
  },
  {
    id: "2",
    name: "Graphic Tee",
    description: "Trendy design, high quality print.",
    price: 999,
    image: "/Images/shirt2.jpg",
  },
  {
    id: "3",
    name: "Retro Vibe Shirt",
    description: "Vintage patterns and soft fabric.",
    price: 899,
    image: "/Images/shirt3.jpg",
  },
  {
    id: "4",
    name: "Minimal Tee",
    description: "Subtle and sleek design.",
    price: 699,
    image: "/Images/shirt4.jpg",
  },
  {
    id: "5",
    name: "Bold Print Shirt",
    description: "Make a statement wherever you go.",
    price: 1099,
    image: "/Images/shirt5.jpg",
  },
  {
    id: "6",
    name: "Abstract Art Tee",
    description: "Inspired by modern art.",
    price: 999,
    image: "/Images/shirt6.jpg",
  },
  {
    id: "7",
    name: "Monochrome Tee",
    description: "Classic black and white.",
    price: 849,
    image: "/Images/shirt7.jpg",
  },
  {
    id: "8",
    name: "Street Style T-Shirt",
    description: "Urban and edgy.",
    price: 950,
    image: "/Images/shirt8.jpg",
  },
  {
    id: "9",
    name: "Soft Pastel Shirt",
    description: "Perfect for spring days.",
    price: 780,
    image: "/Images/shirt9.jpg",
  },
  {
    id: "10",
    name: "Ocean Blue Tee",
    description: "Cool and refreshing.",
    price: 920,
    image: "/Images/shirt10.jpg",
  },
  {
    id: "11",
    name: "Tropical Shirt",
    description: "Feel the vacation vibes.",
    price: 999,
    image: "/Images/shirt11.jpg",
  },
  {
    id: "12",
    name: "Sunset Gradient Tee",
    description: "Color fade style.",
    price: 1049,
    image: "/Images/shirt12.jpg",
  },
  {
    id: "13",
    name: "Modern Art Tee",
    description: "Bold prints and color splash.",
    price: 980,
    image: "/Images/shirt13.jpg",
  },
  {
    id: "14",
    name: "Camo Shirt",
    description: "Rugged and outdoorsy.",
    price: 875,
    image: "/Images/shirt14.jpg",
  },
  {
    id: "15",
    name: "Festival Tee",
    description: "Celebrate with vibrant colors.",
    price: 1095,
    image: "/Images/shirt15.jpg",
  },
  {
    id: "3",
    name: "Vintage Wash Tee",
    description: "Faded look with a premium vintage finish.",
    price: 899,
    image: "/Images/shirt3.jpg",
  },
];

export default function ShopPage() {
  return (
    <div className="relative bg-gray-50 min-h-screen overflow-hidden">
      {/* Background SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 -z-10"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="512" cy="512" r="400" fill="url(#grad1)" />
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center gap-2">
          <SparklesIcon className="w-8 h-8 text-orange-400 animate-pulse" />
          Explore Our Collection
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Find the best t-shirts designed with love, comfort, and a pinch of
          creativity.
        </p>
      </div>

      <motion.div
        className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sampleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
}
