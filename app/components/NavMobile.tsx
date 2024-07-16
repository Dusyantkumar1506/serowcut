import { RxCross1 } from "react-icons/rx";
import React from "react";
import Link from "next/link";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "-translate-x-full";
  const overlayOpacity = showNav ? "opacity-70" : "opacity-0";

  return (
    <div>
      <div
        className={`fixed top-0 left-0 transform ${navOpenStyle} transition-transform duration-500 z-[10000] left-0 right-0 bottom-0 bg-black ${overlayOpacity} w-screen h-screen`}
      ></div>
      <ul
        className={`text-white fixed flex items-center flex-col justify-center h-screen transform ${navOpenStyle} transition-transform duration-500 delay-300 w-4/5 bg-[#3172b3] space-y-14 z-[10006]`}
      >
        <li>
          <Link href="/">
            <p
              className="nav__link text-[25px] sm:text-[30px]"
              onClick={closeNav}
            >
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p
              className="nav__link text-[25px] sm:text-[30px]"
              onClick={closeNav}
            >
              About Us
            </p>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <p
              className="nav__link text-[25px] sm:text-[30px]"
              onClick={closeNav}
            >
              Our Services
            </p>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <p
              className="nav__link text-[25px] sm:text-[30px]"
              onClick={closeNav}
            >
              Products
            </p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p
              className="nav__link text-[25px] sm:text-[30px]"
              onClick={closeNav}
            >
              Contact Us
            </p>
          </Link>
        </li>

        <RxCross1
          onClick={closeNav}
          className="absolute top-4 right-4 w-10 h-10 text-white"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
