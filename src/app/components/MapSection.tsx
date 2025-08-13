"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import React from "react";

const MapSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Find Us on the Map
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Here&apos;s where we&apos;re located. Feel free to visit us or get in touch
          through the map.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl shadow-2xl max-w-6xl mx-auto"
        style={{ height: "450px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.621230134324!2d77.59502707592228!3d12.972218814847802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672c2f5c429%3A0xa9672c69e5317b7e!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Info Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl p-4 sm:p-6 max-w-xs w-[80%] sm:w-auto"
        >
          <div className="flex items-start gap-3">
            <MapPin className="text-red-500 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                MG Road, Bangalore
              </h4>
              <p className="text-sm text-gray-600">
                MG Road, Bengaluru, Karnataka <br /> India - 560001
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MapSection;
