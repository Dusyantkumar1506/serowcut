import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { title: "Switch", image: "/switch10.webp" },
  { title: "Socket", image: "/socket1.webp" },
  { title: "Switch & Socket", image: "/switch-socket1.webp" },
  { title: "Gold Infrared Cooktop", image: "/cooker-hood/gold-cooktop.webp" },
  {
    title: "Titanium Black Hood",
    image: "/cooker-hood/titanium-black-hood.webp",
  },
  {
    title: "KITKAT FUSE UNITS",
    image: "/kitkat/REGULAR KITKAT FUSE UNITS.webp",
  },
  { title: "MODULE BOX", image: "/modulebox/MODULE BOX ECO MS RANGE.webp" },
  { title: "Serowcut Wires", image: "/wires/wire1.webp" },
  { title: "LED EYE LIGHT1W", image: "/led-lights/LED EYE LIGHT1W.webp" },
  { title: "CHANGE OVERS", image: "/change-overs/AUTOMATIC CHANGE OVERS.webp" },
  {
    title: "CONCEALED BOX",
    image: "/concealed-box/CONCEALED BOX RING RANGE.webp",
  },
  {
    title: "TPN MCB BOXES",
    image: "/mcb-boxes/TPN MCB DISTRIBUTION BOXES.webp",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const ProductCarousel = () => (
  <section className="w-full bg-[#0b0c13] py-10">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Our{" "}
        <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
          Products
        </span>
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2 sm:px-4 md:px-6">
            <Link href="/products" className="block group h-full">
              <div className="bg-gradient-to-br from-[#151921] to-[#232b36] rounded-2xl shadow-lg p-4 flex flex-col items-center justify-between overflow-hidden h-full transition-shadow duration-300 hover:shadow-sky-800/50">
                <div className="relative w-full h-56 sm:h-56 md:h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-100 text-center group-hover:text-sky-400 transition-colors duration-200">
                  {product.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default ProductCarousel;
