import Icon from "../ui/Icon";

const Catalog = () => {
  return (
    <section className="bg-[#F9F1E7] w-full py-6 px-4 sm:px-8 md:px-[100px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-6">
        {/* Left side (Filter and Showing) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full sm:w-[45%] gap-y-4 sm:gap-y-0">
          <div className="flex items-center gap-x-3 text-[17px]">
            <Icon.filter />
            <span>Filter</span>
          </div>

          <div className="flex items-center gap-x-4 sm:gap-x-6">
            <div className="flex items-center gap-x-3">
              <Icon.menu />
              <Icon.list />
            </div>
            <span className="hidden sm:inline-block h-6 border-l border-gray-400"></span>
            <span className="text-[15px] sm:text-[16px] text-gray-700">
              Showing 1–16 of 32 results
            </span>
          </div>
        </div>

        {/* Right side (Show and Sort by) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-6 w-full sm:w-auto">
          <div className="flex items-center gap-x-3">
            <span className="text-[18px]">Show</span>
            <input
              type="text"
              maxLength={2}
              placeholder="16"
              className="bg-white rounded-md outline-none w-[60px] text-center py-2 border border-gray-300"
            />
          </div>

          <div className="flex items-center gap-x-3">
            <span className="text-[18px]">Sort by</span>
            <input
              type="text"
              placeholder="Default"
              className="bg-white rounded-md outline-none w-[150px] sm:w-[180px] py-2 px-3 border border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
