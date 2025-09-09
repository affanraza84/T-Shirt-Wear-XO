"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiPhoneCall,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Tailor-Made T-shirts", href: "/tailor-made" },
    { name: "Buy 1", href: "/buy-one" },
    { name: "T-shirt Designs", href: "/designs" },
    { name: "Our Team", href: "/teams" },
    { name: "Shop Now", href: "/shop" },
    { name: "Your Account", href: "/account" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showStickyCart, setShowStickyCart] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const { cartItems } = useCart();
  const router = useRouter();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Handle scroll for sticky cart
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowStickyCart(scrollTop > 200); // Show after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md px-6 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="h-1 w-full flex items-center cursor-pointer">
            <Image
              src="/Images/logo6.jpg"
              alt="Business Logo"
              className="object-contain w-32 sm:w-40 md:w-48 p-6 lg:w-56 xl:w-64 h-auto"
              width={200}
              height={50}
            />
            <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl xl:text-3xl font-extrabold uppercase bg-gradient-to-r from-[#a18cd1] via-[#fbc2eb] to-[#fad0c4] text-transparent bg-clip-text animate-text transition-all duration-500 ease-in-out hover:scale-105 text-center sm:text-left">
              Our Own Vibe
            </h2>
          </div>
        </Link>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="relative w-1/3 min-w-[200px] hidden sm:block group"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find products, designs"
            className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 text-sm text-gray-700 transition-all duration-300 ease-in-out group-hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:scale-105"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black transition-all duration-300"
          >
            <FiSearch size={18} />
          </button>
        </form>

        {/* Contact + Cart */}
        <div className="hidden sm:flex items-center space-x-5">
          <div className="flex flex-col text-xs text-gray-600">
            <span className="text-[11px]">Talk to a real person</span>
            <div className="flex items-center space-x-2">
              <FiPhoneCall className="text-orange-500" />
              <a 
                href="tel:+919263296921"
                className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200 cursor-pointer"
              >
                +91 9263296921
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" />
              <a 
                href="https://wa.me/917091909872"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold text-sm hover:text-green-600 transition-colors duration-200 cursor-pointer"
              >
                +91 7091909872
              </a>
            </div>
          </div>

          {/* 🛒 Cart Icon with Badge */}
          <div className="relative">
            <Link href="/cart">
              <div className="relative cursor-pointer text-gray-700 hover:text-black transition duration-300">
                <FiShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Main Navigation Menu */}
      <nav className="sticky top-0 bg-white z-50 shadow-md px-8 py-3 hidden sm:block">
        <ul className="flex space-x-8 text-gray-700 font-medium text-base justify-center">
          {navItems.map(({ name, href }) => (
            <li key={name} className="relative group">
              <Link
                href={href}
                className="transition-all duration-600 group-hover:text-black cursor-pointer"
              >
                {name}
              </Link>
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-400 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ease-in-out cursor-pointer"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav
          ref={menuRef}
          className="fixed top-16 left-0 right-0 bg-white z-50 shadow-md py-4 sm:hidden"
        >
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium text-base px-8">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="block w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Cart in Dropdown */}
          <div className="border-t border-gray-200 mt-4 pt-4 px-8">
            <Link
              href="/cart"
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative">
                <FiShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="font-medium">Cart ({totalItems})</span>
            </Link>

            {/* Mobile Contact Numbers */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <span className="text-[11px] text-gray-600 block mb-2">Talk to a real person</span>
              
              <div className="flex items-center space-x-2 mb-2">
                <FiPhoneCall className="text-orange-500" size={16} />
                <a 
                  href="tel:+919263296921"
                  className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  +91 9263296921
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-500" size={16} />
                <a 
                  href="https://wa.me/917091909872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-semibold text-sm hover:text-green-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  +91 7091909872
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Sticky Floating Cart Button */}
      <div
        className={`fixed top-4 right-4 z-[60] transition-all duration-300 ease-in-out ${
          showStickyCart
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-[-20px] scale-95 pointer-events-none"
        }`}
      >
        <Link href="/cart">
          <div className="relative bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200">
            <FiShoppingCart 
              size={24} 
              className="text-gray-700 hover:text-black transition-colors duration-200" 
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;