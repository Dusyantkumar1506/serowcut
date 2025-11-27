"use client";
import { LuArrowRight, LuClock } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Modular Plates",
      category: "switches",
      badge: "New",
      img: "/switch7.webp",
    },
    {
      id: 2,
      name: "Modular Plate",
      category: "switches",
      badge: "New",
      img: "/switch9.webp",
    },
    {
      id: 3,
      name: "T-woody Modular Plates",
      category: "switches",
      badge: "New",
      img: "/switch-socket2.webp",
    },
    {
      id: 4,
      name: "Switch Board",
      category: "switchboards",
      badge: "Popular",
      img: "/switchboards/Switch-Board-3.webp",
    },
    {
      id: 5,
      name: "Switch Board",
      category: "switchboards",
      badge: "Popular",
      img: "/switchboards/Switch-Board-10.webp",
    },
    {
      id: 6,
      name: "Switch Board",
      category: "switchboards",
      badge: "Popular",
      img: "/switchboards/Switch-Board-9.webp",
    },
    {
      id: 7,
      name: "Serowcut Wire",
      category: "wiring",
      badge: "Premium",
      img: "/wires/wire1.webp",
    },
    {
      id: 8,
      name: "Serowcut Wire and Cables",
      category: "wiring",
      badge: "Premium",
      img: "/wires/wire2.webp",
    },
    {
      id: 9,
      name: "Serowcut Geyser",
      category: "geyser",
      badge: "New",
      img: "/geyser/geyser-1.webp",
    },
    {
      id: 10,
      name: "Serowcut Geyser",
      category: "geyser",
      badge: "New",
      img: "/geyser/geyser-2.webp",
    },
    {
      id: 11,
      name: "Serowcut Geyser",
      category: "geyser",
      badge: "New",
      img: "/geyser/geyser-3.webp",
    },
    {
      id: 12,
      name: "Serowcut Battery",
      category: "battery",
      badge: "Bestseller",
      img: "/battery/Battery.webp",
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "switches", name: "Switches" },
    { id: "switchboards", name: "Switch Boards" },
    { id: "wiring", name: "Wiring" },
    { id: "geyser", name: "Geyser" },
    { id: "battery", name: "Battery" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden  bg-[#0b0c13] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <LuClock size={16} className="text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              Latest Additions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              New Arrival Products
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Upgrade your lifestyle with our latest collection of innovative and
            trendy products. Curated for quality and style.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group relative transform transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: `fadeIn 0.5s ease-out`,
                animationDelay: `${idx * 0.06}s`,
                animationFillMode: "both",
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

              <div className="relative h-full bg-gradient-to-br from-slate-700/50 to-slate-800/40 backdrop-blur rounded-xl overflow-hidden shadow-lg">
                {/* Image area */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800/10">
                  {product.img ? (
                    <div className="absolute inset-0 transform transition-transform duration-500 ease-out group-hover:scale-105">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-contain w-full h-full"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-4xl text-gray-400">
                      No Image
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur ${
                        product.badge === "New"
                          ? "bg-blue-500/85"
                          : product.badge === "Popular"
                          ? "bg-cyan-500/85"
                          : product.badge === "Premium"
                          ? "bg-indigo-500/85"
                          : product.badge === "Bestseller"
                          ? "bg-green-500/85"
                          : "bg-purple-500/85"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Explore All Products
            <LuArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
