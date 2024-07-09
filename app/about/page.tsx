import React from "react";
import Image from "next/image";
import { GiLovers } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";

const specialItems = [
  {
    icon: <GiLovers color="white" className="w-5 h-5" />,
    title: "Integrity and Honesty",
    description:
      "We shall be ethical, sincere and honest in all our internal and external relationships. We commit to uphold the highest ethical standards in all our business dealings.",
  },
  {
    icon: <BsFillPeopleFill color="white" className="w-5 h-5" />,
    title: "Teamwork",
    description:
      "We believe that people are our key performance differentiator. We nurture an environment where teamwork is most valued.",
  },
  {
    icon: <RiCustomerService2Fill color="white" className="w-5 h-5" />,
    title: "Customer Focus",
    description:
      "We are committed to surpassing the expectations of our customers at all times. We believe that our quality of customer responsiveness will lead to greater customer loyalty.",
  },
  {
    icon: <FaPeopleCarry color="white" className="w-5 h-5" />,
    title: "Accountability",
    description:
      "We shall be fully accountable for our actions and we commit to be objective and transaction oriented, thereby earning respect from others.",
  },
  {
    icon: <MdPublishedWithChanges color="white" className="w-5 h-5" />,
    title: "Adaptability",
    description:
      "We will continually adapt our thinking and behaviour to meet the ever-changing conditions around us, taking care to act in harmony with nature to ensure progress and success in our endeavours.",
  },
  {
    icon: <FaLightbulb color="white" className="w-5 h-5" />,
    title: "Innovation",
    description:
      "We shall continuously encourage entrepreneurial and innovative ideas in pursuit of excellence so as to become the best.",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-slate-950 to-slate-700 pt-20 md:pt-12">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              <span className="bg-gradient-to-b from-sky-600 to-slate-700 bg-clip-text text-transparent">
                About Serowcut
              </span>{" "}
              : Leading the Future of Electrical Solutions
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                src="/serow-service.jpg"
                alt="serowcut"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-xl"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-400">
                <p>
                  Founded 7 years ago, Serowcut specializes in manufacturing
                  exclusive electrical products, including advanced switches,
                  high-quality sockets, and durable wires. Our products are
                  crafted using state-of-the-art technology to ensure
                  reliability and safety in every application.
                </p>

                <p>
                  Our mission is to provide exceptional electrical solutions
                  that exceed expectations in performance, durability, and
                  design. Serowcut products stand out for their innovation and
                  quality across residential, commercial, and industrial
                  applications.
                </p>
                <p>
                  Thank you for choosing Serowcut. We are committed to
                  delivering the finest electrical products on the market.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 to-slate-700 pt-10 md:pt-10 text-white">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What makes us special
            </h2>
            <p className="mt-4 text-gray-300">
              Serowcut emphasizes integrity, teamwork, and customer focus in
              business. It values accountability, adapts to change, and promotes
              innovation for continuous improvement and excellence.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {specialItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 shadow-slate-900 shadow-xl transition hover:border-blue-500/60 hover:shadow-blue-500/40 p-3 rounded-xl"
              >
                <span className="shrink-0 rounded-lg bg-gradient-to-br from-sky-600 to-slate-700 p-4">
                  {item.icon}
                </span>
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
