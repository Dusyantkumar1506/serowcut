import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const products = [
  {
    title: "Switch",
    image: "/switch10.webp",
  },
  {
    title: "Socket",
    image: "/socket1.webp",
  },
  {
    title: "Switch & Socket",
    image: "/switch-socket1.webp",
  },
  {
    title: "KITKAT FUSE UNITS",
    image: "/kitkat/REGULAR KITKAT FUSE UNITS.webp",
  },
  {
    title: "MODULE BOX",
    image: "/modulebox/MODULE BOX ECO MS RANGE.webp",
  },
  {
    title: "Serowcut Wires",
    image: "/wires/wire1.webp",
  },
  {
    title: "LED EYE LIGHT1W",
    image: "/led-lights/LED EYE LIGHT1W.webp",
  },
  {
    title: "CHANGE OVERS",
    image: "/change-overs/AUTOMATIC CHANGE OVERS.webp",
  },
  {
    title: "CONCEALED BOX",
    image: "/concealed-box/CONCEALED BOX RING RANGE.webp",
  },
  {
    title: "TPN MCB BOXES",
    image: "/mcb-boxes/TPN MCB DISTRIBUTION BOXES.webp",
  },
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 bg-[#0b0c13] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our{" "}
        <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
          Products
        </span>{" "}
      </h2>
      <Slider {...settings} className="bg-[#0b0c13]">
        {products.map((product, index) => (
          <div key={index} className="px-2 sm:px-4 md:px-6 lg:px-8">
            <Link href="/products">
              <div className="bg-gradient-to-br from-sky-100 to-neutral-50 rounded-lg shadow-lg p-6">
                <div className="relative h-48 w-full mb-3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="rounded-lg object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
