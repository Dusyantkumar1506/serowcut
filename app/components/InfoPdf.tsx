import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoPdfProps {
  bgColor: string;
}

const InfoPdf: React.FC<InfoPdfProps> = ({ bgColor }) => {
  const handleOpenInNewTab = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1cHa7c1d-ySuX6SCL3FM3Bwdf5kNx-KtW/view?usp=sharing";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank"; // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className={`flex flex-wrap gap-6 pt-12 pb-12 ${bgColor} bg-[#0b0c13] px-8`}
    >
      {/* Card 1 */}
      <div className="w-full mx-auto bg-gradient-to-br from-sky-100 to-neutral-50 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6 md:w-[48%] info-card-shadow">
        <div className="md:flex-1 md:mr-4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">
            Explore Our Range of Products
          </h2>
          <p className="mb-4 text-sm md:pb-[2.5rem] pb-0">
            Looking for something specific? Download our brochure to get all the
            details.
          </p>
          <button
            onClick={handleOpenInNewTab}
            className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-[#3172b3]"
          >
            Download Now
          </button>
        </div>
        <div className="md:flex-1 flex justify-center">
          <Image
            src="/Apna Showroom (3).webp"
            alt="Qrcode"
            width={250}
            height={250}
            className="rounded-md"
            unoptimized
          />
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-full mx-auto bg-gradient-to-br from-sky-100 to-neutral-50 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6 md:w-[48%] info-card-shadow">
        <div className="md:flex-1 md:mr-4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4 text-sm md:pb-[2.5rem] pb-0">
            Connect with us for any support, grievance, queries or feedback. Our
            executives will be happy to assist you.
          </p>
          <Link href="/contact">
            <button className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-[#3172b3]">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="md:flex-1 flex justify-center">
          <Image
            src="https://cumbriasmiles.co.uk/wp-content/uploads/elementor/thumbs/Untitled-design-2023-07-25T162509.190-qajxez8xw7chwol8v0fj6jdt7r7ve4zdxm5no12vd0.png"
            alt="Qrcode"
            width={250}
            height={250}
            className="rounded-md"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default InfoPdf;
