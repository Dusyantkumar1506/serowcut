"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-[100%] bg-black transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[12vh]  justify-between w-[90%] mx-auto">
        <Link href="/" className=" font-logo text-white text-[18px]">
          <img src="/serowcut.png" alt="logo" className=" w-48 h-auto" />
        </Link>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a
              className="nav__link"
              href="/"
              onClick={() => scrollToSection("/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="about"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="services"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="products"
              onClick={() => scrollToSection("products")}
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <RxHamburgerMenu
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        />
      </div>
    </nav>
  );
};

export default Nav;
