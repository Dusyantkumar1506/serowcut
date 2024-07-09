"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "What types of electrical products does Serowcut manufacture?",
    content:
      "Serowcut specializes in manufacturing advanced electrical products, including switches, sockets, and wires. Our products are crafted with state-of-the-art technology to ensure reliability and safety for residential, commercial, and industrial use.",
  },
  {
    title: "How can I purchase Serowcut products?",
    content:
      "You can browse and purchase our products directly from our website. Visit our Products Page to explore our range of electrical products and make a purchase.",
  },
  {
    title: "What makes Serowcut products stand out from competitors?",
    content:
      "Our products are known for their innovation, quality, and durability. We use cutting-edge technology to manufacture electrical solutions that exceed industry standards and customer expectations.",
  },
  {
    title: "Are Serowcut products safe for all applications?",
    content:
      "Yes, Serowcut products are designed to ensure safety and reliability in every application. Whether for residential, commercial, or industrial use, our products undergo rigorous testing to meet the highest safety standards.",
  },
  {
    title: "How can I get support for Serowcut products?",
    content:
      "If you need support or have any questions about our products, please visit our Contact Page or reach out to our customer service team. We are here to assist you with any inquiries or issues you may have.",
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0 md:mr-8">
        <div className="w-full h-auto mb-4 relative ">
          <Image
            src="/serowcut-map.png"
            alt="Serowcut Products"
            layout="responsive"
            width={400}
            height={400}
            className="object-contain  rounded-xl"
          />
        </div>
        <Link
          href="/contact"
          className="service-btn bg-[#3172b3] hover:bg-[#215c97] text-white py-2 px-4 rounded"
        >
          Contact Us
        </Link>
      </div>
      <div className="md:w-2/3">
        {accordionData.map((item, index) => (
          <div className="py-2" key={index}>
            <h2 onClick={() => handleAccordionClick(index)}>
              <button
                className={`w-full text-left p-4 font-semibold border rounded-2xl ${
                  index === activeIndex
                    ? "bg-[#3172b3] hover:bg-[#215c97] text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                type="button"
                aria-expanded={index === activeIndex}
              >
                {item.title}
              </button>
            </h2>
            {index === activeIndex && (
              <div className="p-4 bg-gray-100 border-l-2 border-[#3172b3] rounded-2xl">
                <p className="text-gray-800">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
