"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/products"
          className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="object-contain mb-4"
            />
            <h2 className="font-semibold text-lg text-center mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600 mb-4">₹{item.price}</p>
            <div className="flex space-x-3">
              <button
                onClick={() => addToCart(item)}
                className="bg-lime-400 px-4 py-2 rounded-lg text-black font-medium hover:bg-lime-500 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
