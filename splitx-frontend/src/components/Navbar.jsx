import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold hover:text-green-200">
              SplitX
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-200 transition-colors duration-200">Home</Link>
            <Link to="/about" className="hover:text-green-200 transition-colors duration-200">About</Link>
            <Link to="/contact" className="hover:text-green-200 transition-colors duration-200">Contact</Link>
            <Link to="/login" className="bg-white text-green-700 px-4 py-1 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200">Login</Link>
            <Link to="/signup" className="bg-white text-green-700 px-4 py-1 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200">Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-green-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-green-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-green-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="block bg-white text-green-700 px-4 py-1 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200"onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="block bg-white text-green-700 px-4 py-1 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
