import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 mt-16 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-1 flex flex-col md:flex-row justify-between  items-center">
        {/* Left Side */}
        <p className="text-sm">
          {new Date().getFullYear()} <span className="font-semibold text-[15px] ">designed and developed by <a href="https://www.instagram.com/_zaid_401/?hl=en " className="text-blue-700 hover:underline">Zaid ♥</a>  </span>
        </p>

        
        {/* Right Side - Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/_zaid_401/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300 cursor-pointer" />
          </a>

          <a
            href="https://github.com/zaid401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-700 transition duration-300 cursor-pointer" />
          </a>

          <a
            href="https://linkedin.com/in/zaid401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}
