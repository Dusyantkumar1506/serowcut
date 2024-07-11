import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const slides = [
    {
      img: "/switch.webp",
      text: "Switches and Sockets",
      width: 800,
      height: 600,
    },
    {
      img: "/access.webp",
      text: "All Accessories",
      width: 800,
      height: 600,
    },
    {
      img: "/roma_banner_0.webp",
      text: "Serowcut Switches and Sockets",
      width: 800,
      height: 600,
    },
    {
      img: "/wires.webp",
      text: "Wires, Cables and Tapes",
      width: 800,
      height: 600,
    },
    {
      img: "/switches.webp",
      text: "Switchgear & Protection Devices",
      width: 800,
      height: 600,
    },
  ];

  return (
    <Slider
      className="image-slider pt-[5rem] pb-[1rem] sm:pt-[4rem] sm:pb-5 bg-[#0b0c13]"
      {...settings}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <Image
            src={slide.img}
            alt={`Slide ${index + 1}`}
            width={slide.width}
            height={slide.height}
            className="w-full h-auto sm:h-96 object-cover"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-opacity-50 text-lg sm:text-3xl px-6 sm:px-10 font-semibold text-white p-2">
            {slide.text}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
