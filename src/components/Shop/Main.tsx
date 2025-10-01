import img from "../../assets//image/Rectangle 1.svg";
const Main = () => {
  return (
    <>
      <div className="sm:pt-[105px] pt-[89px]  relative z-0 ">
        <img src={img} alt="main-photo" className="  w-full " />
        <div className="absolute sm:left-173 sm:bottom-35 sm:top-[170px] top-[50px] z-10 pl-37 sm:pl-0">
          <img src="logo1.svg" alt="" className="mx-auto" />
          <h1 className="text-[48px] font-medium">Shop</h1>
          <a href="/" className="font-semibold hover:opacity-70">
            Home
          </a>
          <span className="mx-2 cursor-default">›</span>
          <span className="cursor-default">Shop</span>
        </div>
      </div>
    </>
  );
};

export default Main;
