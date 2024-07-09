import React from "react";
import Image from "next/image";
import Accordion from "../components/Accordian";

const servicesData = [
  {
    title: "Switches",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "/switchess.jpg",
  },
  {
    title: "Sockets",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "/red-switch.jpg",
  },
  {
    title: "Plugs",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "/plugs.jpg",
  },
  {
    title: "Wires, Cables and Tapes",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "/wire.jpg",
  },
  {
    title: "Module box",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "/modulebox.jpg",
  },
  {
    title: "Switchgear & Protection Devices",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "/plugs.jpg",
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden bg-[#0b0c13] ">
      <section className="text-gray-400 body-font pt-20">
        <div className="container px-5 py-20 mx-auto">
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
                <div className="flex relative">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      alt={service.title}
                      className="object-cover object-center"
                      src={service.imageSrc}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
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
      <section>
        <Accordion />
      </section>
    </div>
  );
};

export default Services;
