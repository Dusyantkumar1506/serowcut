import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const emailAddress = "support@serowcut.in";
  const phoneNumber = "+919370000038";
  const developerNo = "+917988064796";

  const socialLinks = [
    {
      icon: <IoLogoInstagram className="w-5 h-5" color="white" />,
      url: "https://www.instagram.com",
    },
    {
      icon: <FaFacebook className="w-5 h-5" color="white" />,
      url: "https://www.facebook.com",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" color="white" />,
      url: "https://www.linkedin.com",
    },
  ];
  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Our Services", href: "/services" },
    { text: "Products", href: "/products" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-black pt-16 pb-12">
      <div className="max-w-screen-xl mx-auto md:px-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-600/40 pb-7">
          {/* Logo & Intro */}
          <div>
            <Link href="/">
              <span className="inline-block font-logo text-white text-xl">
                <Image
                  src="/serowcut.png"
                  alt="logo"
                  width={192}
                  height={48}
                  className="w-48 h-auto"
                  unoptimized
                />
              </span>
            </Link>
            <p className="text-sm mt-4 text-white/70 leading-relaxed mb-4">
              Serowcut crafts advanced switches, sockets, and wires using
              cutting-edge technology for reliability and innovation in every
              application.
            </p>
            <Link href={`mailto:${emailAddress}`}>
              <span className="text-[#3172b3] underline font-semibold text-sm">
                {emailAddress}
              </span>
            </Link>
          </div>
          {/* Quick Links */}
          <div className="md:mx-auto">
            <h2 className="text-white font-semibold mb-6 text-lg tracking-wide">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-white/80 text-base hover:text-[#3172b3] transition">
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Address */}
          <div className="lg:mx-auto">
            <h2 className="text-white font-semibold mb-6 text-lg tracking-wide">
              Address
            </h2>
            <div className="flex items-center gap-2 mb-5">
              <FaMapMarkerAlt className="w-4 h-4 text-[#3172b3]" />
              <span className="text-base text-white/80">Serowcut Pvt Ltd.</span>
            </div>
            <div className="flex items-center gap-2">
              <MdMarkEmailRead className="w-4 h-4 text-[#3172b3]" />
              <Link href={`mailto:${emailAddress}`}>
                <span className="text-base text-white/80">{emailAddress}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-white/70 text-sm gap-3">
          <span>&#169; Serowcut {new Date().getFullYear()}</span>
          <div className="flex items-center gap-5">
            <span className="text-base font-semibold hidden md:block">
              Social Links:
            </span>
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <span className="w-8 h-8 bg-[#191a23] rounded-full flex items-center justify-center hover:bg-[#3172b3] transition">
                  {link.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-white/80 text-base">
          <Link href={`https://wa.me/${developerNo}`} target="_blank">
            <span>
              Design & Developed by{" "}
              <span className="text-[#3172b3] underline">Dusyant Kumar</span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
