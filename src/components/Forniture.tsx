"use client";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
];

export default function AutoScrollGallery() {
  return (
    <section className="overflow-hidden py-16 ">
      <div className="mb-5">
        <h6 className="opacity-70 text-center">Share your setup with</h6>
        <h3 className="font-black text-[32px] text-[#333] text-center">
          #FuniroFurniture
        </h3>
      </div>
      <div className="flex gap-6 animate-scroll">
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className={`flex-none rounded-xl overflow-hidden w-[300px] h-[400px] 
                        transform ${
                          index % 2 === 0 ? "translate-y-0" : "translate-y-8"
                        }`}
          >
            <img
              src={src}
              alt={`Room ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
