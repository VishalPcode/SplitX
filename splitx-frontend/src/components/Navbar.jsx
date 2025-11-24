import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <ul className="flex justify-center gap-10 text-lg font-normal bg-green-700 p-4">
        <li><Link to="/" className="text-white cursor-pointer">Home</Link></li>
        <li><Link to="/about" className="text-white cursor-pointer">About</Link></li>
        <li><Link to="/contact" className="text-white cursor-pointer">Contact</Link></li>
        <li><Link to="/login" className="text-white cursor-pointer">Login</Link></li>
        <li><Link to="/signup" className="text-white cursor-pointer">Sign Up</Link></li>
      </ul>
    </div>
  );
}
