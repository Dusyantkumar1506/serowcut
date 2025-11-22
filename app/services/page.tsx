import React from "react";
import Image from "next/image";
import Accordion from "../components/Accordian";

const servicesData = [
  {
    title: "Switches",
    subtitle: "SEROWCUT",
    description:
      "High-quality switches for style and reliable performance. Perfect for modern and traditional designs.",
    imageSrc: "/switchess.webp",
  },
  {
    title: "Sockets",
    subtitle: "SEROWCUT",
    description:
      "Convenient, safe, and sleek designed sockets. Meets rigorous safety standards while complementing interiors.",
    imageSrc: "/red-switch.webp",
  },
  {
    title: "Plugs",
    subtitle: "SEROWCUT",
    description:
      "Durable plugs for all your electrical needs. Designed for long-lasting performance and ease of use.",
    imageSrc: "/plugs.webp",
  },
  {
    title: "Wires, Cables and Tapes",
    subtitle: "SEROWCUT",
    description:
      "Premium wires, cables, and tapes for superior conductivity. Ideal for residential and commercial applications.",
    imageSrc: "/wire.webp",
  },
  {
    title: "LED Lights",
    subtitle: "SEROWCUT",
    description:
      "Efficient LED lights for residential and commercial use. Engineered for superior performance and energy efficiency.",
    imageSrc: "/led.webp",
  },
  {
    title: "Module box",
    subtitle: "SEROWCUT",
    description:
      "Safe and organized housing for electrical components. Robust construction and easy installation.",
    imageSrc: "/modulebox.webp",
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden bg-[#0b0c13]">
      <section className="w-full bg-[#0b0c13] text-gray-400 body-font pt-20">
        <div className="max-w-screen-xl mx-auto px-4 py-20">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
              Our{" "}
              <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
                Premium Electrical Services
              </span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              At SEROWCUT, we provide a comprehensive range of high-quality
              electrical services, from sockets and switches to advanced
              switchgear and protection devices. Our commitment to excellence
              ensures that you receive top-notch solutions tailored to your
              needs.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {servicesData.map((service, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative group">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      alt={service.title}
                      className="object-cover object-center"
                      src={service.imageSrc}
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                      {service.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {service.title}
                    </h1>
                    <p className="leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* video */}
      <section className="w-full bg-[#0b0c13] mt-8 pb-10">
        <div className="max-w-screen-xl mx-auto ">
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/DU-x6eLFYKc?autoplay=1&mute=1&loop=1&playlist=DU-x6eLFYKc&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&playsinline=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <Accordion />
      </section>
    </div>
  );
};

export default Services;
