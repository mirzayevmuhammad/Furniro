import Catalog from "../components/Shop/Catalog";
import Info from "../components/Shop/Info";
import Main from "../components/Shop/Main";
import { useLocation } from "react-router-dom";
import Card from "../components/Shop/Card";
const ShopPage = () => {
  const location = useLocation();
  const hidPaths = ["/home", "/single-product"];

  return (
    <>
      <div className="">
        <Main />
        <Catalog />
        {!hidPaths.includes(location.pathname) && (
          <div className="pt-[46px] pb-[85px]">
            <Card />
          </div>
        )}
        <Info />
      </div>
    </>
  );
};

export default ShopPage;
