import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoPdfProps {
  bgColor?: string;
}

const InfoPdf: React.FC<InfoPdfProps> = ({ bgColor = "" }) => {
  const handleOpenInNewTab = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1cHa7c1d-ySuX6SCL3FM3Bwdf5kNx-KtW/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`w-full bg-[#0b0c13] ${bgColor} box-border py-12 px-4`}>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Card 1 */}
        <div className="flex-1 bg-gradient-to-br from-[#232d3c] to-[#274372] rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6 info-card-shadow w-full">
          <div className="md:flex-1 md:mr-4 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Explore Our Range of Products
            </h2>
            <p className="mb-4 text-sm md:pb-[2.5rem] pb-0 text-gray-300">
             Download our brochure for details.
            </p>
            <button
              onClick={handleOpenInNewTab}
              className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-[#3172b3] transition"
            >
              Download Now
            </button>
          </div>
          <div className="md:flex-1 flex justify-center">
            <Image
              src="/Apna Showroom (3).webp"
              alt="Qrcode"
              width={220}
              height={220}
              className="rounded-md"
              unoptimized
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-gradient-to-br from-[#232d3c] to-[#274372] rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6 info-card-shadow w-full">
          <div className="md:flex-1 md:mr-4 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2 text-white">Get in Touch</h2>
            <p className="mb-4 text-sm md:pb-[2.5rem] pb-0 text-gray-300">
              Connect with us for any support, grievance, queries or feedback. Our executives will be happy to assist you.
            </p>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-[#3172b3] transition">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="md:flex-1 flex justify-center">
            <Image
              src="https://cumbriasmiles.co.uk/wp-content/uploads/elementor/thumbs/Untitled-design-2023-07-25T162509.190-qajxez8xw7chwol8v0fj6jdt7r7ve4zdxm5no12vd0.png"
              alt="Qrcode"
              width={220}
              height={220}
              className="rounded-md"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPdf;
