"use client";
import React from "react";
import InfoPdf from "./components/InfoPdf";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import WhySerowcut from "./components/WhySerowcut";
import Carousel from "./components/Carousel";
import CategorySlider from "./components/CategorySlider";
import NewArrival from "./components/NewArrival";
import ArrivalTabs from "./components/ArrivalTabs";
import ProductShowcase from "./components/ProductShowcase";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <CategorySlider />
      <Benefits />
      <WhySerowcut />
      <ProductShowcase />
      <NewArrival />
      <ArrivalTabs />
      <Carousel />
      <InfoPdf bgColor="bg-[#0b0c13]" />
    </div>
  );
}
