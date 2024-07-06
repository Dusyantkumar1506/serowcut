"use client";
import { useState } from "react";
import NavMobile from "./NavMobile";
import Nav from "./Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <section className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
    </section>
  );
};

export default Header;
