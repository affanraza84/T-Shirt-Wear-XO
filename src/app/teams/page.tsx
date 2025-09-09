"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mohammad Affan Raza",
    role: "Web Developer",
    img: "/Images/me.png",
    linkedin: "https://www.linkedin.com/in/mohammad-affan-raza-b6039b288/",
    instagram: "https://www.instagram.com/affanraza8083/",
  },
  {
    name: "Md Raja Istekhar",
    role: "Founder",
    img: "/Images/raja.jpeg",
    linkedin: "https://www.linkedin.com/in/md-raja-istekhar-785a34252/",
    instagram: "https://www.instagram.com/raza_mri5?igsh=NTUzMzU4NDBiOXNz",
  },
  {
    name: "Aditya Singh",
    role: "Designer",
    img: "/Images/aditya.png",
    linkedin: "https://www.linkedin.com/in/aditya-singh7/",
    instagram: "https://www.instagram.com/aaadi.s_?igsh=MWZ4anRidGtieG9zMw%3D%3D",
  },
];

export default function OurTeam() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden flex flex-col items-center justify-center py-16 px-6">
      {/* Animated Background */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, 50, 0], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-40 right-20"
        animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold text-orange-700 z-10 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team
      </motion.h1>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.3 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full border-4 border-orange-400 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                  {member.name}
                </h2>
                <p className="text-orange-600 font-medium">{member.role}</p>

                <div className="flex gap-4 mt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-400 hover:bg-orange-100"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="w-5 h-5 text-orange-600" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-400 hover:bg-orange-100"
                    asChild
                  >
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="w-5 h-5 text-orange-600" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
