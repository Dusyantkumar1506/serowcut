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
    <div className="fixed top-1/2 transform -translate-y-1/2 right-0  p-2 bg-gray-800 rounded-l-lg">
      <ul className="space-y-4">
        <li className="group relative">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebookF size={24} />
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
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StickySocialMediaBar;
