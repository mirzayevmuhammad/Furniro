import { useState } from "react";
import ProductCard from "../ui/ProductCard";

const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "New Chair",
    desc: "Modern office chair",
    price: "Rp 3.000.000",
    image:
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Wooden Desk",
    desc: "Minimalist wooden desk",
    price: "Rp 5.500.000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Sofa Set",
    desc: "Comfortable sofa set",
    price: "Rp 12.000.000",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Table Lamp",
    desc: "Modern table lamp",
    price: "Rp 850.000",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Classic Chair",
    desc: "Elegant wooden chair",
    price: "Rp 2.000.000",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Modern Desk",
    desc: "Office desk",
    price: "Rp 6.500.000",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Luxury Bed",
    desc: "King size bed",
    price: "Rp 15.000.000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Study Lamp",
    desc: "Adjustable desk lamp",
    price: "Rp 950.000",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Minimal Sofa",
    desc: "Small sofa",
    price: "Rp 8.000.000",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Coffee Table",
    desc: "Round coffee table",
    price: "Rp 3.500.000",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Kitchen Stool",
    desc: "Wooden kitchen stool",
    price: "Rp 1.200.000",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Bookshelf",
    desc: "Tall wooden bookshelf",
    price: "Rp 4.500.000",
    image:
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 21,
    name: "Wall Clock",
    desc: "Modern design clock",
    price: "Rp 700.000",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 22,
    name: "Wardrobe",
    desc: "Large wardrobe",
    price: "Rp 9.000.000",
    image:
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 23,
    name: "Office Chair",
    desc: "Comfortable office chair",
    price: "Rp 3.800.000",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 24,
    name: "Dining Set",
    desc: "Table with 4 chairs",
    price: "Rp 11.000.000",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
];

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="pt-[17px] max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:pl-0 pl-19 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <div className="flex  justify-center mt-8 gap-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-4 py-2 rounded-md font-medium ${
              currentPage === num
                ? "bg-yellow-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
