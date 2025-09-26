import Button from "./ui/Button";
import img from "../assets/image/maskgroup.svg";
const MaskGroup = () => {
  return (
    <>
      <div className="pt-[88px] w-full z-0 ">
        <img src={img} alt="" className="w-full" />
        <div className=" sm:absolute sm:max-w-[643px]     flex flex-col gap-y-1 bg-[#FFF3E3] z-20 left-[785px] top-[195px] pt-[62px] pl-[39px] pr-[43px] pb-[37px]">
          <div className="flex flex-col justify-between min-h-[344px]">
            <div>
              <span className="tracking-[3px]">New Arrival</span>
              <h1 className="text-[#b88e2f] sm:text-[52px] text-[48px] font-black w-[380px] ">
                Discover Our New Collection
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus sed fugiat eos voluptates ratione qui.
              </span>
            </div>
            <Button
              text="BUY NOW"
              buttonClassName="max-w-[222px] px-[72px] py-[25px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MaskGroup;
