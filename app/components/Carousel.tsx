import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const products = [
  {
    title: "Product 1",
    description: "This is the description for product 1.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 2",
    description: "This is the description for product 2.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 3",
    description: "This is the description for product 3.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 4",
    description: "This is the description for product 4.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 5",
    description: "This is the description for product 5.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 6",
    description: "This is the description for product 1.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 7",
    description: "This is the description for product 2.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 8",
    description: "This is the description for product 3.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 9",
    description: "This is the description for product 4.",
    image: "/switch-btn.png",
  },
  {
    title: "Product 10",
    description: "This is the description for product 5.",
    image: "/switch-btn.png",
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
          infinite: true,
          dots: true,
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
    <div className="container mx-auto py-8 bg-[#0b0c13] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our{" "}
        <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
          {" "}
          Products
        </span>{" "}
      </h2>
      <Slider {...settings} className="bg-[#0b0c13]">
        {products.map((product, index) => (
          <div key={index} className="px-8">
            <Link href="/products">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
