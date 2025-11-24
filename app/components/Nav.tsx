"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Serowcut from "../../public/serowcut.png";
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

  return (
    <nav
      className={`fixed w-[100%] bg-black transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[12vh]  justify-between max-w-screen-xl px-8 mx-auto">
        <Link href="/" className="font-logo text-white text-[18px]">
          <Image
            src={Serowcut}
            alt="logo"
            width={192}
            height={48}
            className="w-48 h-auto"
            unoptimized
          />
        </Link>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <Link href="/">
              <p className="nav__link">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="nav__link">About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="nav__link">Our Services</p>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <p className="nav__link">Products</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="nav__link">Contact Us</p>
            </Link>
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
