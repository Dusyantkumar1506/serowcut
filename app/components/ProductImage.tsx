import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-transform duration-300 ease-out hover:scale-110"
        loading="lazy"
        unoptimized
      />
    </div>
  );
};

export default ProductImage;
