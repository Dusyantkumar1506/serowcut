import Image from "next/image";
import React from "react";

const wiresImages = [
  {
    src: "/wires-bannner.webp",
    alt: "Serowcut Wire Main Product",
    big: true,
  },
  {
    src: "/serowcut-wire.webp",
    alt: "Triple Insulation Advantage",
    big: false,
  },
  {
    src: "/wire-bannner2.webp",
    alt: "Wire Product Features",
    big: false,
  },
];

const SerowcutWireShowcase = () => (
  <section className="w-full bg-[#0b0c13] py-14">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Trusted{" "}
          <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
            Serowcut Wires
          </span>
        </h2>
        <p className="text-base text-gray-300 font-medium">
          Advanced insulation, lifetime durability, and engineered safety for
          modern spaces.
        </p>
      </div>
      {/* Main Image and Feature Cards */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="md:w-[50%] w-full flex justify-center">
          <div className="relative w-full max-w-lg h-96 bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
            <Image
              src={wiresImages[0].src}
              alt={wiresImages[0].alt}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        {/* Right */}
        <div className="md:w-[50%] w-full flex flex-col gap-8">
          {[wiresImages[1], wiresImages[2]].map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-32 sm:h-44 bg-white rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain md:object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SerowcutWireShowcase;
