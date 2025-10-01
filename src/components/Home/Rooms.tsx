"use client";

import { useState } from "react";
import Button from "../ui/Button";

const roomImages = [
  {
    id: 1,
    category: "Bed Room",
    title: "Inner Peace",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Living Room",
    title: "Bright Space",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Kitchen",
    title: "Modern Cook",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Bathroom",
    title: "Clean Lines",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
];

const RoomSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#FCF8F3] py-16 px-4 mb-[67px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <Button
            text="Explore More"
            buttonClassName=" text-white px-8 py-3 text-base font-medium"
          />
        </div>

        <div className="flex h-[400px] gap-2">
          {roomImages.map((room) => (
            <div
              key={room.id}
              onMouseEnter={() => setActive(room.id)}
              onMouseLeave={() => setActive(null)}
              className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                active === room.id ? "flex-[4]" : "flex-1"
              }`}
            >
              <img
                src={room.image}
                alt={room.title}
                className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                  active === room.id ? "grayscale-0" : "grayscale"
                }`}
              />
              <div
                className={`absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-lg transition-all duration-500 ${
                  active === room.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 font-medium">
                    0{room.id}
                  </span>
                  <div className="w-8 h-px bg-gray-300"></div>
                  <span className="text-sm text-gray-500 font-medium">
                    {room.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  {room.title}
                </h3>
                <Button
                  text="⟶"
                  buttonClassName=" text-white mt-3 px-4 py-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
