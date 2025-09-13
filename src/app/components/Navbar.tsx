"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiShoppingCart,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const { cartItems, wishlistItems } = useCart();
  const router = useRouter();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // Close menu on outside click
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    // Navbar shrink on scroll
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      {/* Top Image Tagline */}
      <div className="bg-lime-400 text-center py-2">
        <Image
          src="/Images/vibe4.png"
          alt="Vibe"
          width={180}
          height={40}
          className="mx-auto object-contain"
        />
      </div>

      {/* Sticky Navbar */}
      <div
        className={`sticky top-0 z-50 bg-white flex items-center justify-between border-b shadow-md transition-all duration-300 ${
          scrolled ? "h-14 px-6 sm:px-8" : "h-20 px-6 sm:px-10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Images/logo6.png"
            alt="Business Logo"
            width={scrolled ? 140 : 180}
            height={50}
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/account"
            className="text-gray-700 font-medium hover:text-lime-500 hover:scale-105 transition-all duration-200"
          >
            Your Account
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 font-medium hover:text-lime-500 hover:scale-105 transition-all duration-200"
          >
            Shop Now
          </Link>
          <Link
            href="/teams"
            className="text-gray-700 font-medium hover:text-lime-500 hover:scale-105 transition-all duration-200"
          >
            Our Team
          </Link>
          <Link
            href="/designs"
            className="text-gray-700 font-medium hover:text-lime-500 hover:scale-105 transition-all duration-200"
          >
            T-Shirt Design
          </Link>
        </nav>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className={`relative hidden sm:block transition-all duration-300 ${
            scrolled ? "w-1/3" : "w-1/2 max-w-xl"
          }`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-400 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lime-400 hover:text-black"
          >
            <FiSearch size={20} />
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center space-x-5 text-lime-400">
          {/* Wishlist */}
          <Link href="/wishlist">
            <div className="relative cursor-pointer">
              <FaHeart
                size={20}
                className="hover:text-black transition-colors"
              />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <FiShoppingCart
                size={22}
                className="hover:text-black transition-colors"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>

          {/* Auth Section */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-500 transition cursor-pointer">
                LOGIN
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-lime-400 focus:outline-none hover:text-black transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link
            href="/account"
            className="block text-gray-700 font-medium hover:text-lime-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Your Account
          </Link>
          <Link
            href="/shop"
            className="block text-gray-700 font-medium hover:text-lime-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </Link>
          <Link
            href="/team"
            className="block text-gray-700 font-medium hover:text-lime-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            href="/designs"
            className="block text-gray-700 font-medium hover:text-lime-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            T-Shirt Design
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
