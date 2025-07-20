"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Headphones,
} from "lucide-react";

const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 30 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300 py-10 px-4 sm:px-6 lg:px-20">
      <motion.div {...motionProps} className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-1">
            Let T-Shirts Spread Your Story
          </h2>
          <p className="text-base text-gray-600">
            Custom T-Shirts for your Team, Group or Event
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-gray-800 uppercase mb-4">
              About Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Our Story",
                "iLogo CASH",
                "Contact Us",
                "FAQs",
                "Size Chart",
                "iLogo T-Shirt Contests",
                "Retrieve a Saved Design",
                "Track your Order",
                "Place a Reorder",
                "Retrieve Invoice",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Talk to a Real Person */}
          <div>
            <h3 className="font-semibold text-gray-800 uppercase mb-4">
              Talk to a Real Person, <br /> 6 Days a Week!
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              Monday - Friday: 9am - 6pm IST
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Saturday: 10am - 6pm IST
            </p>
            <div className="flex items-center text-sm text-gray-700 mb-2">
              <Headphones size={20} className="text-orange-500 mr-2" />
              +91 8369833275
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Mail size={20} className="text-orange-500 mr-2" />
              Send us an Email
            </div>
          </div>

          {/* Service Center & Social Media */}
          <div>
            <h3 className="font-semibold text-gray-800 uppercase mb-4">
              Service Center
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>Help Center</li>
              <li>Get a Quick Quote</li>
            </ul>
            <h3 className="font-semibold text-gray-800 uppercase mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-orange-500">
              {[Facebook, GoogleIcon, Twitter, Instagram, Linkedin].map(
                (Icon, idx) => (
                  <Icon key={idx} size={24} />
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

// Placeholder for Google icon
const GoogleIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={props.size || 24}
    height={props.size || 24}
    className="fill-orange-500"
  >
    <path d="M44.5 20H24v8.5h11.9C34.2 33.8 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.2 0 6.1 1.2 8.3 3.1l6.2-6.2C34.2 4.6 29.4 2 24 2 12.4 2 3 11.4 3 23s9.4 21 21 21c10.5 0 20.3-7.5 20.3-21 0-1.2-.1-2.2-.3-3z" />
  </svg>
);

export default Footer;
