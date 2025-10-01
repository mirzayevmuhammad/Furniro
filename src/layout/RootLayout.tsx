import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const RootLayout = () => {

  return (
    <>
      <div>
        <Header />
        <Outlet />

        <div className=" pt-[48px] pb-[38px] px-[50px] sm:px-[100px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
