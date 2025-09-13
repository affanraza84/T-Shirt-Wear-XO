"use client";

import React, { useState, useEffect } from "react";
import { motion, MotionProps } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Headphones, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 30 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300 py-12 px-4 sm:px-6 lg:px-20">
      <motion.div {...motionProps} className="max-w-7xl mx-auto">
        {/* Footer Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-1">
            Spread Your Story with Our T-Shirts
          </h2>
          <p className="text-base text-gray-600">
            Custom T-Shirts for Teams, Events & Groups
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-gray-800 uppercase mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Our Story</li>
              <li>FAQs</li>
              <li>Size Chart</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="font-semibold text-gray-800 uppercase mb-4">
              Contact Us
            </h3>
            <div className="flex items-center text-sm text-gray-700 mb-2">
              <Headphones size={20} className="text-orange-500 mr-2" />
              +91 7091909872
            </div>
            <div className="flex items-center text-sm text-gray-700 mb-2">
              <Headphones size={20} className="text-orange-500 mr-2" />
              +91 9263296921
            </div>
            <div className="flex items-center text-sm text-gray-700 mb-2">
              <Mail size={20} className="text-orange-500 mr-2" />
              wearxo@gmail.com
            </div>
            <div className="flex items-start text-sm text-gray-700">
              <MapPin size={20} className="text-orange-500 mr-2 mt-1" />
              <p>
                4,5 Madhu Nagar, near Limbayat Police Station, <br />
                Limbayat, Surat - 394210, Gujarat, India
              </p>
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
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Icon key={idx} size={24} className="hover:text-blue-900 transition-colors" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} T-Shirt Company. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
