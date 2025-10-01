import Icon from "../ui/Icon";

const Info = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-y-5 justify-between w-full p-[100px_53px] bg-[#FAF3EA]">
        <div className="flex gap-x-3">
          <Icon.cub />
          <div className="flex flex-col gap-y-[3px] justify-center">
            <h5 className="font-medium text-[25px]">High Quality</h5>
            <span className="text-[17px] opacity-50">crafted from top materials</span>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Icon.tick />
          <div className="flex flex-col gap-y-[3px] justify-center">
            <h5 className="font-medium text-[25px]">Warranty Protection</h5>
            <span className="text-[17px] opacity-50">Over 2 years</span>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Icon.shipping />
          <div className="flex flex-col gap-y-[3px] justify-center">
            <h5 className="font-medium text-[25px]">Free Shipping</h5>
            <span className="text-[17px] opacity-50">Order over 150 $</span>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Icon.support />
          <div className="flex flex-col gap-y-[3px] justify-center">
            <h5 className="font-medium text-[25px]">24 / 7 Support</h5>
            <span className="text-[17px] opacity-50">Dedicated support</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
