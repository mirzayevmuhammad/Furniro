import Browse from "../components/Browse";
import Forniture from "../components/Forniture";
import MaskGroup from "../components/MaskGroup";
import Product from "../components/Product";
import RoomSection from "../components/Rooms";

const HomePage = () => {
  return (
    <div>
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
