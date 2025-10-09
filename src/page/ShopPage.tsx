import Card from "../components/Shop/Card";
import Catalog from "../components/Shop/Catalog";
import Info from "../components/ui/Info";
import Main from "../components/ui/Main";
const ShopPage = () => {
  return (
    <>
      <div className="">
        <Main tittle="Shop" span="Home" span1="Shop" />
        <Catalog />
        <Card />
        <Info />
      </div>
    </>
  );
};

export default ShopPage;
