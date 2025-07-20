"use client";

import { Product } from "@/types";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="relative group bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-contain bg-gray-50 p-2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-green-600">
            ₹{product.price}
          </span>
          <motion.button
            onClick={() => addToCart(product)}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
