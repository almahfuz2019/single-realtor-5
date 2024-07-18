"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex bg-[#f2e8e4] h-screen rounded-lg  overflow-hidden">
      {/* Left section with social icons */}
      <div className="flex flex-col items-center justify-center p-4 bg-[#d2b48c]">
        <div className="mb-8 transform -rotate-90">
          <p className="text-lg font-semibold text-gray-800">Follow Us</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaFacebook size={30} />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      {/* Right section with heading, subheading, and buttons */}
      <div className="grid grid-cols-2 justify-center items-center">
        
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Unlock A Brighter Future. Find Your Dream Home.
          </h1>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
              Explore Condos
            </button>
            <button className="px-6 py-2 text-blue-600 border border-blue-600 hover:bg-blue-100 rounded-lg flex items-center">
              <span className="mr-2">📞</span> Book A Call
            </button>
          </div>
        </div>
        <Image
            src="https://i.ibb.co/pKsVYsR/Rectangle-3883.png"
            alt="Living Room"
            height={815}
            width={960}
            className="h-full object-cover"
            c
          />{" "}
      </div>
    </div>
  );
};

export default HeroSection;
