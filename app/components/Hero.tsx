import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    { img: "/serowcut-banner.webp", text: "Switches and Sockets" },
    {
      img: "/decor-light-banner.jpg",
      text: "Decorative Lights",
    },
    {
      img: "/ceiling-fans.jpg",
      text: "Ceiling Fans",
    },
    { img: "/access.webp", text: "All Accessories" },
    { img: "/roma_banner_0.webp", text: "Serowcut Switches and Sockets" },
    {
      img: "/PVC-Conduits-and-Accessories.jpg",
      text: "PVC Conduits and Accessories",
    },
    {
      img: "/bulb-banner.jpg",
      text: "Bulbs",
    },
    {
      img: "/geyser-bannerr.jpg",
      text: "Serowcut Geysers",
    },
  ];

  return (
    <section className="w-full bg-[#0b0c13]">
      <div className="max-w-screen-xl mx-auto px-0">
        <Slider
          className="image-slider pt-[5rem] pb-[1rem] sm:pt-[4rem] sm:pb-5"
          {...settings}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full">
              <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[72vh] xl:h-[80vh] max-h-[calc(100vh-160px)] overflow-hidden rounded-md">
                <Image
                  src={slide.img}
                  alt={slide.text}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-10 max-w-xl">
                  <p className="text-xs uppercase tracking-wider text-cyan-300/90 font-semibold mb-2">
                    New Collection
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
                    {slide.text}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageSlider;
