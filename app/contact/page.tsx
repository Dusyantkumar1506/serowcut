import React from "react";
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const emailAddress = "serowcut@gmail.com";
  const phoneNumber = "+919370000038";

  return (
    <div className="overflow-hidden ">
      <section className="relative mt-16">
        <div className="relative w-full h-96 md:h-96">
          <Image
            src="/banner.png"
            alt="Contact Banner"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <h1 className="text-2xl md:text-5xl font-semibold">Contact us</h1>
          </div>
        </div>
      </section>

      <section className="relative  flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-10 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-lg text-[#3172b3]">SEND US EMAIL</p>
            <h1 className="text-2xl font-bold sm:text-3xl">
              FEEL FREE TO CONTACT US
            </h1>
          </div>

          <ContactForm />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-lg text-[#3172b3]">NEED ANY HELP?</p>
            <h1 className="text-2xl font-bold sm:text-3xl">
              GET IN TOUCH WITH US
            </h1>
            <p className="mt-4 text-gray-500">
              Get in touch through any of the channels below. We're eager to
              hear from you!
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-10">
            <div className="flex gap-6">
              <div className="bg-[#3172b3] rounded-full w-16 h-16 flex items-center justify-center">
                <BsTelephonePlus className="w-6 h-6" color="white" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="font-semibold text-lg">Have any question?</h1>
                <Link href={`tel:${phoneNumber}`} className="text-base">
                  {phoneNumber}
                </Link>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-[#3172b3] rounded-full w-16 h-16 flex items-center justify-center">
                <MdOutlineMarkEmailRead className="w-6 h-6" color="white" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="font-semibold text-lg">Our email</h1>
                <Link href={`mailto:${emailAddress}`} className="text-base">
                  {emailAddress}
                </Link>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-[#3172b3] rounded-full w-16 h-16 flex items-center justify-center">
                <IoLocationOutline className="w-6 h-6" color="white" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="font-semibold text-lg">Visit anytime</h1>
                <p className="text-base">Perfect Enterprises</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <h1 className="text-lg font-semibold">Social Links: </h1>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
                <Link href="" className=" flex justify-center items-center">
                  <IoLogoInstagram className=" w-5 h-5" color="white" />
                </Link>
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
                <Link href="" className=" flex justify-center items-center">
                  <FaFacebook className=" w-5 h-5" color="white" />
                </Link>
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
                <Link href="" className=" flex justify-center items-center ">
                  <FaLinkedinIn className=" w-5 h-5" color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-[5rem] pt-[1rem]">
        <iframe
          className="w-full md:h-[60vh] object-cover h-[40vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.6237998442894!2d76.91554787386247!3d30.813182581743227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8d184ce38c95%3A0xa4909b426b552bc6!2sApna%20showroom!5e0!3m2!1sen!2sin!4v1719899039200!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
