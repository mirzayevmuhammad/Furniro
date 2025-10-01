const images = [
  {
    id: 1,
    title: "Dining",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
  },
  {
    id: 2,
    title: "Living",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800",
  },
  {
    id: 3,
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
  },
];

const Browse = () => {
  return (
    <div className="mb-[59px]">
      <h3 className="font-black text-[32px] text-[#333] text-center">
        Browse The Range
      </h3>
      <h6 className="opacity-70 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        incidunt?
      </h6>

      <div className="flex sm:flex-row flex-col items-center justify-between gap-6 mt-10">
        {images.map((item) => (
          <div key={item.id} className="text-center max-w-[380px]">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-[380px] h-[480px] object-cover"
            />
            <h5 className="mt-2 font-medium text-[#333]">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
