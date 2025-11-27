"use client";
import { useState, useMemo } from "react";
import data from "../db";
import dynamic from "next/dynamic";
import {
  FaFacebook,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import InfoPdf from "../components/InfoPdf";
const ProductImage = dynamic(() => import("../components/ProductImage"));

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const emailAddress = "support@serowcut.in";

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category ? product.category === category : true)
      );
    });
  }, [data, searchTerm, category]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pageWindow = 9; // Number of pages shown at a time
  const halfWindow = Math.floor(pageWindow / 2);

  let startPage = Math.max(1, currentPage - halfWindow);
  let endPage = Math.min(totalPages, startPage + pageWindow - 1);
  if (endPage - startPage + 1 < pageWindow) {
    startPage = Math.max(1, endPage - pageWindow + 1);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

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
              <option value="switchboards">Switch Boards</option>
              <option value="bulbholder">Bulb Holder</option>
              <option value="modulebox">Module box</option>
              <option value="ledlights">LED Lights</option>
              <option value="wires">Wires & cabels</option>
              <option value="pipes-bend">Pipes & Bend</option>
              <option value="changeovers">Change overs</option>
              <option value="concealed-box">Concealed box</option>
              <option value="mcb-boxes">MCB box</option>
              <option value="warmer">Room Warmer</option>
              <option value="geyser">Geyser</option>
              <option value="fans">Fans</option>
              <option value="fan-box">Fan box</option>
              <option value="kitkat">Kitkat</option>
              <option value="cookerhoods-hobs">Cooker hoods & Hobs</option>
              <option value="battery">Battery</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="p-4 hidden md:block">
            <div className="mb-8">
              <p className="mb-1">SEROWCUT INDUSTRIES AI, BUILDING</p>
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
                <Link href="" className="flex justify-center items-center">
                  <IoLogoInstagram className="w-5 h-5" color="white" />
                </Link>
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-[#3172b3]">
                <Link href="" className="flex justify-center items-center">
                  <FaFacebook className="w-5 h-5" color="white" />
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
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="border p-4 rounded shadow-custom bg-[#f8fbfb]"
              >
                <ProductImage src={product.img} alt={product.title} />
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-600">Company: {product.company}</p>
                <p className="text-gray-600">Category: {product.category}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Pagination */}
          <div className="mt-8 flex flex-wrap justify-center items-center space-x-1">
            {/* Previous Button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <FaChevronLeft />
            </button>

            {/* First page and ellipsis */}
            {startPage > 1 && (
              <>
                <button
                  onClick={() => paginate(1)}
                  className="mx-1 px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-slate-700 hover:text-white"
                >
                  1
                </button>
                {startPage > 2 && <span className="px-2">...</span>}
              </>
            )}

            {/* Middle Page Numbers */}
            {Array.from({ length: endPage - startPage + 1 }, (_, idx) => {
              const page = startPage + idx;
              return (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`mx-1 px-3 py-2 rounded-md text-sm ${
                    currentPage === page
                      ? "bg-gradient-to-tr from-sky-900 to-slate-700 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Last page and ellipsis */}
            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && <span className="px-2">...</span>}
                <button
                  onClick={() => paginate(totalPages)}
                  className="mx-1 px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-slate-700 hover:text-white"
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Next Button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <FaChevronRight />
            </button>
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
