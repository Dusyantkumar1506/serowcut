"use client";
import { useState } from "react";
import data from "../db";
import dynamic from "next/dynamic";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import InfoPdf from "../components/InfoPdf";
const ProductImage = dynamic(() => import("../components/ProductImage"));

const Products = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 12;
  const emailAddress = "serowcut@gmail.com";
  const phoneNumber = "+919370000038";

  const filteredProducts = data.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? product.category === category : true)
    );
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="container mx-auto px-4 md:pt-32 pb-16 pt-40">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-1/4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border border-gray-300 rounded shadow-custom"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Category</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded shadow-custom"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="sockets">Sockets</option>
              <option value="switches">Switches</option>
              <option value="sockets&switches">Sockets & Switches</option>
              <option value="modulebox">Module box</option>
              <option value="ledlights">LED Lights</option>
              <option value="wires">Wires & cabels</option>
              <option value="pipes-bend">Pipes & Bend</option>
              <option value="changeovers">Change overs</option>
              <option value="concealed-box">Concealed box</option>
              <option value="mcb-boxes">MCB box</option>
              <option value="warmer">Room Warmer</option>
              <option value="fans">Fans</option>
              <option value="fan-box">Fan box</option>
              <option value="kitkat">Kitkat</option>
              {/* Add more categories */}
            </select>
          </div>
          <div className="p-4 hidden md:block">
            <div className="mb-8">
              <p className="mb-1">
                PERFECT ENTERPRISES A1, BUILDING NO.1, GALA NO.110 OM INDUSTRIAL
                ESTATE WALIV VASIA (EAST)- 4011208
              </p>
              <p>
                <Link href={`tel:${phoneNumber}`} className="text-base">
                  {phoneNumber}
                </Link>
              </p>
              <p>
                <Link href={`mailto:${emailAddress}`} className="text-base">
                  {emailAddress}
                </Link>
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-red-500">Information</h3>
              <ul>
                <Link href="/about">
                  <li>About Us</li>
                </Link>
                <Link href="/contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="flex space-x-4">
              {/* Social media icons */}
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
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product, index: number) => (
              <div
                key={index}
                className="border p-4 rounded shadow-custom bg-[#fcfefe]"
              >
                <ProductImage src={product.img} alt={product.title} />
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-600">Company: {product.company}</p>
                <p className="text-gray-600">Category: {product.category}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex flex-wrap justify-center">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 my-1 px-3 py-2 border ${
                    currentPage === index + 1
                      ? "bg-gradient-to-tr from-sky-900 to-slate-700 text-white"
                      : "bg-gray-200 text-gray-800"
                  } rounded-md text-sm md:px-4 md:py-2`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
      {/* Pdf section */}
      <div className="mt-8">
        <InfoPdf bgColor="bg-white" />
      </div>
    </section>
  );
};

export default Products;
