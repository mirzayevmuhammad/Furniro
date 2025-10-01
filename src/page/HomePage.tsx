import Browse from "../components/Home/Browse";
import Forniture from "../components/Home/Forniture";
import MaskGroup from "../components/Home/MaskGroup";
import Product from "../components/Home/Product";
import RoomSection from "../components/Home/Rooms";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <MaskGroup />
      <div className="sm:ml-[131px] sm:mr-[126px] px-[17px] mt-[57px] mb-[69px]">
        <Browse />
        <Product />
      </div>
      <RoomSection />
      <Forniture />
    </div>
  );
};

export default HomePage;
