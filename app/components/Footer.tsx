import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const emailAddress = "serowcut@gmail.com";
  const phoneNumber = "+919370000038";

  return (
    <footer className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="pb-4">
            <Link href="/" className=" font-logo text-white text-[18px]">
              <Image
                src="/serowcut.png"
                alt="logo"
                width={192}
                height={48}
                className="w-48 h-auto"
              />
            </Link>
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70 mb-3">
            Serowcut specializes in crafting advanced electrical products like
            switches, sockets, and wires using cutting-edge technology for
            superior reliability and innovation across all applications.
          </h1>
          <Link
            href={`mailto:${emailAddress}`}
            className="text-[#3172b3] underline font-semibold"
          >
            {emailAddress}
          </Link>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Links
          </h1>
          <Link href="/about">
            <p className="text-[15px] text-white opacity-80 mb-[1rem] block hover:text-[#3172b3]">
              About Us
            </p>
          </Link>
          <Link href="/services">
            <p className="text-[15px] text-white opacity-80 mb-[1rem] block hover:text-[#3172b3]">
              Our Services
            </p>
          </Link>
          <Link href="/products">
            <p className="text-[15px] text-white opacity-80 mb-[1rem] block hover:text-[#3172b3]">
              Products
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-[15px] text-white opacity-80 mb-[1rem] block hover:text-[#3172b3]">
              Contact Us
            </p>
          </Link>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <FaMapMarkerAlt className="w-[1rem] h-[1rem] text-[#3172b3]" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Perfect Enterprises
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MdMarkEmailRead className="w-[1rem] h-[1rem] text-[#3172b3]" />
            <Link
              href={`mailto:${emailAddress}`}
              className="text-[17px] font-normal text-white opacity-75"
            >
              {emailAddress}
            </Link>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <FaPhoneAlt className="w-[1rem] h-[1rem] text-[#3172b3]" />
            <Link
              href={`tel:${phoneNumber}`}
              className="text-[17px] font-normal text-white opacity-75"
            >
              {phoneNumber}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[90%] mx-auto text-white opacity-70 flex justify-between items-center">
        &#169; Copyright Serowcut {new Date().getFullYear()}
        <div className="flex items-center gap-5">
          <h1 className="text-lg font-semibold hidden md:block">
            Social Links:{" "}
          </h1>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
            <Link
              href="https://www.instagram.com"
              className="flex justify-center items-center"
            >
              <IoLogoInstagram className="w-5 h-5" color="white" />
            </Link>
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
            <Link
              href="https://www.facebook.com"
              className="flex justify-center items-center"
            >
              <FaFacebook className="w-5 h-5" color="white" />
            </Link>
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
            <Link
              href="https://www.linkedin.com"
              className="flex justify-center items-center"
            >
              <FaLinkedinIn className="w-5 h-5" color="white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
