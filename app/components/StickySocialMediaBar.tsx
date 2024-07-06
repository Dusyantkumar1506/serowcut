import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const StickySocialMediaBar = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-0 p-2 bg-gray-800 rounded-r-lg">
      <ul className="space-y-4">
        <li className="group relative">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebookF size={24} />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Facebook
            </span>
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <FaLinkedinIn size={24} />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaWhatsapp size={24} />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 w-max px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StickySocialMediaBar;
