import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import {
  FaRegSmileBeam,
  FaShippingFast,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { TbPaywall } from "react-icons/tb";

const Benefits = () => {
  const benefitsData = [
    {
      icon: <MdOutlineShoppingCart size={40} color="" />,
      title: "One Stop Shop",
      description: "Wide product range",
    },
    {
      icon: <VscWorkspaceTrusted size={40} />,
      title: "Most trusted Brands",
      description: "Best in class products",
    },
    {
      icon: <FaHandHoldingUsd size={40} />,
      title: "Great value for Money",
      description: "Competitive prices",
    },
    {
      icon: <FaRegSmileBeam size={40} />,
      title: "Shop with Satisfaction",
      description: "Friendly customer service",
    },
    {
      icon: <TbPaywall size={40} />,
      title: "Secure Transactions",
      description: "100% secured payment",
    },
    {
      icon: <FaShippingFast size={40} />,
      title: "Secure Shipment",
      description: "Safe & timely shipping",
    },
  ];

  return (
    <section className="bg-[#0b0c13] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose{" "}
            <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
              Serowcut
            </span>{" "}
            ?
          </h2>
          <p className="mt-4 text-gray-300">
            At Serowcut, enjoy top-quality products, competitive prices, secure
            transactions, and exceptional customer service. Choose us for a
            seamless shopping experience.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 rounded-2xl">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className="block bg-gradient-to-tr from-sky-900 to-slate-700 rounded-xl border border-gray-800 p-8 shadow-2xl transition hover:border-blue-500/60 hover:shadow-blue-500/40"
            >
              {item.icon}
              <h2 className="mt-4 text-base font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-1 text-[12px] text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
