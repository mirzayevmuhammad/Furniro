import { useState } from "react";
import { Heart, Share2, Copy } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  desc: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  tag?: string;
}

export default function ProductCard({
  image,
  name,
  desc,
  price,
  oldPrice,
  discount,
  tag,
}: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-64 rounded-lg overflow-hidden shadow group cursor-pointer">
      <img src={image} alt={name} className="w-full h-72 object-cover" />

      {discount && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-sm px-2 py-4 rounded-full">
          {discount}
        </span>
      )}
      {tag && (
        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-sm px-2 py-3 rounded-full">
          {tag}
        </span>
      )}

      <div className="p-3 bg-[#f4f5f7]">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-black font-bold">{price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {oldPrice}
            </span>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition">
        <button className="bg-white  px-7 py-2 text-[#b88e2f] border border-[#b88e2f] hover:bg-gray-200 ">
          Add to cart
        </button>
        <div className="flex gap-6 text-sm items-center">
          <button className="flex items-center gap-1 hover:text-gray-300">
            <Share2 size={18} /> Share
          </button>
          <button className="flex items-center gap-1 hover:text-gray-300">
            <Copy size={18} /> Compare
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-1"
          >
            <Heart
              size={18}
              className={liked ? "fill-red-500 text-red-500" : "text-white"}
            />
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
