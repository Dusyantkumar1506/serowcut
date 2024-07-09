"use client";
import { useState } from "react";
import data from "../db";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import Image from "next/image";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const filteredProducts = data.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? product.category === category : true) &&
      (color ? product.color === color : true)
    );
  });

  return (
    <div className="container mx-auto px-4 md:pt-32 pb-16 pt-40 ">
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
              <option value="sneakers">Sneakers</option>
              <option value="flats">Flats</option>
              <option value="heels">Heels</option>
              <option value="sandals">Sandals</option>
              <option value="sockets">Sockets</option>
              <option value="switches">Switches</option>
              <option value="sockets&switches">Sockets & Switches</option>
              <option value="modulebox">Module box</option>
              <option value="wires">Wires & cabels</option>
              <option value="wires">pipes & concealed box</option>
              <option value="wires">MVC box</option>
              <option value="wires">Fan box</option>

              {/* Add more categories */}
            </select>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Color</h3>
            <div className="flex space-x-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="white"
                  checked={color === "white"}
                  onChange={(e) => setColor(e.target.value)}
                  className="mr-2"
                />
                White
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="red"
                  checked={color === "red"}
                  onChange={(e) => setColor(e.target.value)}
                  className="mr-2"
                />
                Red
              </label>
              {/* Add more colors */}
            </div>
          </div>

          <div className="p-4">
            <div className="mb-8">
              <p>328 STEWART AVENUE, BETHPAGE, NEWYORK. 11714</p>
              <p>Phone: +1516.965.2193</p>
              <p>Email: Serowcut@gmail.com</p>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-red-500">Quick Link</h3>
              <ul>
                <li>Store Location</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-red-500">Information</h3>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex space-x-4">
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
            {filteredProducts.map((product, index: number) => (
              <div key={index} className="border p-4 rounded shadow-custom">
                <div className="relative w-full h-48">
                  <Image
                    src={product.img}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-600">Company: {product.company}</p>
                <p className="text-gray-600">Color: {product.color}</p>
                <p className="text-gray-600">Category: {product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
