import Icon from "../ui/Icon";

const Catalog = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col  sm:justify-between  sm:items-center sm:px-[100px] px-[50px] bg-[#F9F1E7] max-w-full py-[40px]">
        <div className="flex  justify-between items-center sm:w-[40%]">
          <div className="flex gap-x-3  items-center   ">
            <div className="flex gap-x-3 sm:mr-0 mr-3 items-center">
              <Icon.filter />
              Filter
            </div>
          </div>
          <div className="flex items-center  gap-x-3">
            <Icon.menu />
            <Icon.list />
            <span className="pl-[34px]  sm:border-l-2 sm:mb-0 mb-3 w-full text-[16px] ">
              Showing 1–16 of 32 results
            </span>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-3 gap-x-[29px] sm:items-center">
          <div className="flex sm:gap-x-3 gap-x-[27px] items-center">
            <span className="text-[20px]">Show</span>
            <input
              type="text"
              maxLength={2}
              placeholder="16"
              className="bg-white outline-0 max-w-[55px] text-center px-[17px] py-[12px] "
            />
          </div>
          <div className="flex gap-x-3 items-center">
            <span className="text-[20px]">Sort by</span>
            <input
              type="text"
              placeholder="Default"
              className="bg-white outline-0 max-w-[188px] px-[30px] py-[12px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
