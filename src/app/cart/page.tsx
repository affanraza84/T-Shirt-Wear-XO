"use client";

import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="p-6 min-h-screen bg-gray-50">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        🛒 Your Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.p
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your cart is currently empty.
        </motion.p>
      ) : (
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div>
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline cursor-pointer"
              >
                Remove
              </button>
            </motion.div>
          ))}

          <motion.div
            className="text-right bg-white rounded-xl shadow p-4 mt-6 border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl font-semibold mb-2 text-gray-800">
              Total: ₹{total}
            </p>
            <button
              onClick={clearCart}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
