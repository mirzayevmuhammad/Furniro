import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />

        <div className=" border-t-2 border-[#5c5c5c4b] pt-[48px] pb-[38px] px-[50px] sm:px-[100px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
