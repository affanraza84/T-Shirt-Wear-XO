"use client";

import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import { motion } from "framer-motion";
import React from "react";

const Page = () => {
  const { user } = useUser();

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-sky-200 via-white to-sky-100 flex items-center justify-center p-6 overflow-hidden">
      {/* Floating T-shirt SVGs in background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <svg
            key={i}
            className="absolute text-sky-200 animate-floatAndDrift"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 60}px`,
              height: `${60 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 3l5 3v4l-3 1v10H6V11L3 10V6l5-3h2v4h4V3h2z" />
          </svg>
        ))}
      </div>

      {/* Foreground card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center space-y-6"
      >
        <h1 className="text-3xl font-bold text-sky-700">Manage Your Account</h1>

        <SignedIn>
          <div className="space-y-4">
            <p className="text-gray-600">
              Welcome, <span className="font-semibold">{user?.firstName}</span> 👋
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <SignOutButton>
                <button className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition">
                  Sign Out
                </button>
              </SignOutButton>
            </motion.div>
          </div>
        </SignedIn>

        <SignedOut>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-600">You&apos;re not signed in yet.</p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <SignInButton>
                <button className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold transition">
                  Sign In
                </button>
              </SignInButton>
            </motion.div>
          </motion.div>
        </SignedOut>
      </motion.div>
    </div>
  );
};

export default Page;
