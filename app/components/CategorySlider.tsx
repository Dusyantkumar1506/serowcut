"use client";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const productsCategory = [
  {
    id: 1,
    image: "/switch-btn.webp",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    image: "/red-switch.webp",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    image: "/wire.webp",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    image: "/led.webp",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    image: "/switchess.webp",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    image: "/modulebox.webp",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    image: "/plugs.webp",
    width: 800,
    height: 600,
  },
];

const CategorySlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 bg-[#0b0c13] text-white pb-16 relative">
      <h2 className="text-center font-bold text-3xl mb-10">
        Our{" "}
        <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
          Product Category
        </span>
      </h2>
      <div className="slider relative">
        <Slider ref={sliderRef} {...settings}>
          {productsCategory.map((product, index) => (
            <div
              key={product.id}
              className={`slide ${index === slideIndex ? "slide-active" : ""}`}
            >
              <Image
                src={product.image}
                alt="Product category"
                width={product.width}
                height={product.height}
                className="mx-auto"
                unoptimized
              />
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-4 mt-8">
          <div
            className="arrow arrow-left bg-gray-100 text-gray-700 hover:bg-[#3172b3] hover:text-white p-2 mx-2 rounded-full cursor-pointer"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FaLongArrowAltLeft />
          </div>
          <div
            className="arrow arrow-right bg-gray-100 text-gray-700 hover:bg-[#3172b3] hover:text-white p-2 mx-2 rounded-full cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
