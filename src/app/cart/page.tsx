"use client";

import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { isSignedIn } = useUser();

  // 🧹 Clear cart when user logs out
  useEffect(() => {
    if (!isSignedIn) {
      clearCart();
    }
  }, [isSignedIn, clearCart]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="p-6 min-h-screen bg-gray-50">
      {/* Title */}
      <motion.h1
        className="text-3xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        🛒 Shopping Cart
      </motion.h1>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center min-h-[50vh] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 mb-4">
            Your cart is currently empty.
          </p>
          <Link
            href="/products"
            className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition"
          >
            Browse Products
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {/* Cart Items */}
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm font-medium hover:underline cursor-pointer"
              >
                Remove
              </button>
            </motion.div>
          ))}

          {/* Cart Summary */}
          <motion.div
            className="bg-white rounded-xl shadow p-6 border text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl font-bold mb-4 text-gray-800">
              Total: ₹{total}
            </p>
            <button
              onClick={clearCart}
              className="bg-lime-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-lime-500 transition"
            >
              Place Order
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
