"use client";
import React from "react";
import InfoPdf from "./components/InfoPdf";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import WhySerowcut from "./components/WhySerowcut";
import Carousel from "./components/Carousel";
import CategorySlider from "./components/CategorySlider";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <CategorySlider />
      <Benefits />
      <WhySerowcut />
      <Carousel />
      <InfoPdf />
    </div>
  );
}
