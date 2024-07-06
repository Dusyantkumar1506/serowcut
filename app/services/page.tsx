import React from "react";
import Image from "next/image";
import Accordion from "../components/Accordian";

const servicesData = [
  {
    title: "Sockets",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "https://dummyimage.com/600x360",
  },
  {
    title: "Switches",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "https://dummyimage.com/601x361",
  },
  {
    title: "Switchgear & Protection Devices",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "https://dummyimage.com/603x363",
  },
  {
    title: "Wires, Cables and Tapes",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "https://dummyimage.com/602x362",
  },
  {
    title: "Holden Caulfield",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "https://dummyimage.com/605x365",
  },
  {
    title: "Alper Kamu",
    subtitle: "SEROWCUT",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    imageSrc: "https://dummyimage.com/606x366",
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden bg-[#0b0c13] ">
      <section className="text-gray-400 body-font pt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {servicesData.map((service, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={service.imageSrc}
                    layout="fill"
                    objectFit="cover"
                  />
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
