import img from "../../assets/image/Rectangle 1.svg";

interface MainProps{
  tittle:string
  span:string
  span1:string
}

const Main = ({tittle,span,span1}:MainProps) => {
  return (
    <section className="relative pt-[89px] sm:pt-[105px]">
      <img src={img} alt="main-photo" className="w-full object-cover" />

      <div className="absolute inset-0 flex flex-col items-center mt-9 justify-center text-center px-4 sm:px-8">
        <img
          src="logo1.svg"
          alt="logo"
          className="w-[60px] sm:w-[80px] md:w-[100px] mb-3 sm:mb-4"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
          {tittle}
        </h1>

        <div className="flex items-center justify-center text-base sm:text-lg">
          <a
            href="/"
            className="font-semibold hover:opacity-70 transition-opacity"
          >
            {span}
          </a>
          <span className="mx-2 opacity-70">›</span>
          <span className="opacity-90">{span1}</span>
        </div>
      </div>
    </section>
  );
};

export default Main;
