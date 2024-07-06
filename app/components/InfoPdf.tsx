import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoPdf = () => {
  return (
    <section className="flex flex-wrap gap-6 pt-12 pb-12 bg-[#0b0c13] px-8">
      {/* Card 1 */}
      <div className="w-[100%] mx-auto bg-gradient-to-br from-sky-100 to-neutral-50 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6  md:w-[48%]">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className=" text-xl font-semibold mb-2">
            Explore Our Range of Products
          </h2>
          <p className="mb-4 text-sm md:pb-[2.5rem] pb-0">
            Looking for something specific? Download our brochure to get all the
            details.
          </p>
          <button className="px-4 py-2 text-sm bg-black text-white  rounded-full hover:bg-[#3172b3]">
            Download Now
          </button>
        </div>
        <div>
          <Image
            src="/Apna Showroom (3).png"
            alt="Qrcode"
            width={450}
            height={450}
          />
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-[100%] mx-auto bg-gradient-to-br from-sky-100 to-neutral-50 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6 md:w-[48%]">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className=" text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4 text-sm md:pb-[2.5rem] pb-0">
            Connect with us for any support, grievance, queries or feedback. Our
            executives will be happy to assist you.
          </p>
          <button className="px-4 py-2 text-sm bg-black text-white  rounded-full hover:bg-[#3172b3]">
            Contact Us
          </button>
        </div>
        <div>
          <Image
            src="https://d32zxht0g2dn3w.cloudfront.net/s3fs-public/2023-12/customer.jpg"
            alt="Qrcode"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoPdf;
