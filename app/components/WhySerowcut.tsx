import Link from "next/link";
import Image from "next/image";
import React from "react";

const WhySerowcut = () => {
  return (
    <section>
      <div className="bg-[#0b0c13] mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-gradient-to-tr from-sky-900 to-slate-700 p-8 md:p-12 lg:px-10 lg:py-10 rounded-xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Exclusive Products by Serowcut
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Serowcut specializes in manufacturing exclusive electrical
                products including advanced switches, high-quality sockets, and
                durable wires. Our products are crafted using state-of-the-art
                technology to ensure reliability and safety in every
                application. Whether for residential, commercial, or industrial
                use, Serowcut products stand out for their innovation and
                performance.
              </p>

              <Link
                href="contact"
                className="inline-block rounded border mt-8 border-white bg-white px-12 py-3 text-sm font-medium text-[#3172b3] transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <div className="relative h-40 w-full sm:h-56 md:h-64 lg:h-80 xl:h-96 rounded-xl overflow-hidden">
              <Image
                alt="switch"
                src="https://d32zxht0g2dn3w.cloudfront.net/s3fs-public/2024-02/2ae70dfe-60f2-4e1f-a389-b67a6002821a.png"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="relative h-40 w-full sm:h-56 md:h-64 lg:h-80 xl:h-96 rounded-xl overflow-hidden">
              <Image
                alt="socket"
                src="https://d32zxht0g2dn3w.cloudfront.net/s3fs-public/2024-02/d8359a25-8162-4f26-8f3e-c4e0ae38db04.png"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySerowcut;
