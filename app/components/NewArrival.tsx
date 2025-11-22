import Link from "next/link";
import React from "react";

const NewArrival = () => {
  return (
    <section className="bg-[#0b0c13]">
      <div className="max-w-screen-xl mx-auto sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Discover Our New Arrival Products
            </h2>

            <p className="hidden text-gray-400 md:mt-4 md:block">
              Upgrade your lifestyle with our latest collection of innovative
              and trendy products. Curated for quality and style, these new
              arrivals are here to redefine your shopping experience.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                href="/products"
                className="service-btn bg-[#3172b3] hover:bg-[#215c97] text-white py-2 px-6 rounded"
              >
                Explore New Arrivals
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="New Arrival Products"
          src="/new-arrival.webp"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </div>
    </section>
  );
};

export default NewArrival;
