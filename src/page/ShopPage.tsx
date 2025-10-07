import Card from "../components/Shop/Card";
import Catalog from "../components/Shop/Catalog";
import Main from "../components/Shop/Main";
import Info from "../components/ui/Info";
const ShopPage = () => {
  return (
    <>
      <div className="">
        <Main />
        <Catalog />
        <Card />
        <Info/>
      </div>
    </>
  );
};

export default ShopPage;
