const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-col mr-[137px]">
          <h3 className="font-black text-[24px] mb-[50px]">Funiro.</h3>
          <span className="sm:max-w-[285px] opacity-55 flex gap-y-1 flex-col">
            400 University Drive Suite 200 Coral Gables,
            <span>FL 33134 USA</span>
          </span>
        </div>
        <div className="flex sm:flex-row flex-col mb-[47px] sm:mt-0 mt-9">
          <div className="flex flex-col mr-[147px] gap-y-9 sm:mt-0 mt-5">
            <span className="opacity-50 mb-5">Links</span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              Home
            </span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              Shop
            </span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              About
            </span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              Contact
            </span>
          </div>
          <div className="flex flex-col mr-[73px] gap-y-9 sm:mt-0 mt-9">
            <span className="opacity-50 mb-5">Help</span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              Payment Options
            </span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              Returns
            </span>
            <span className="cursor-pointer font-medium hover:opacity-70 active:opacity-100">
              Privacy Policies
            </span>
          </div>
          <div className="sm:mt-0 mt-9">
            <span className="opacity-50 mb-5">Newsletter</span>
            <div className="flex gap-x-3 mt-[53px]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b-2 max-w-[200px] outline-0 pl-0.5 text-[14px]"
              />
              <button className="border-b-2 font-medium text-[14px] cursor-pointer active:bg-gray-100 h-[27px] py-1 transition-all ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-x-1 border-t-2 border-[#d9d9d9] flex pt-[35px] flex-col sm:flex-row">
        <span>2025 Furino. (mirzayevmukhammad)</span>

        <span>All rights reverved</span>
      </div>
    </>
  );
};

export default Footer;
