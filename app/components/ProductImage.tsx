import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded object-contain"
        loading="lazy"
        unoptimized
      />
    </div>
  );
};

export default ProductImage;
