import Image from "next/image";
import React from "react";
import Link from "next/link";

const pentaFeatures = [
  { title: "Modular Plates", image: "/switch7.webp" },
  { title: "T-woody Modular", image: "/switch-socket2.webp" },
  { title: "Modular Switch", image: "/switch10.webp" },
];

const PentaModularSection: React.FC = () => (
  <section className="w-full bg-[#0b0c13] py-12">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Left: Headline and subtitle */}
        <div className="md:w-2/5 w-full flex flex-col justify-center md:pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3 text-center md:text-left">
            Experience Innovation
            <br />
            with{" "}
            <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
              Serowcut
            </span>{" "}
            Modular
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto md:mx-0 text-center md:text-left">
            Advanced modular switches and plates — precision engineering for
            reliable, modern living.
          </p>
        </div>

        {/* Right: Card Grid */}
        <div className="md:w-3/5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pentaFeatures.map((feature, idx) => (
              <article
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/40 border border-white/6 rounded-xl overflow-hidden shadow-lg transform transition will-change-transform hover:-translate-y-2 hover:shadow-2xl"
                aria-labelledby={`feature-${idx}-title`}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-square bg-slate-900/10 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 320px"
                    unoptimized
                  />
                  {/* subtle overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <h3
                    id={`feature-${idx}-title`}
                    className="text-sm md:text-base font-semibold text-white"
                  >
                    {feature.title}
                  </h3>
                  <Link href="/products">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-white/8 text-white">
                      View
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-28 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-500 rounded" />
      </div>
    </div>
  </section>
);

export default PentaModularSection;
