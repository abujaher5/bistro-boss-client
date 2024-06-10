import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-10">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div>
        <div className="grid grid-cols-2 gap-4 text-[#737373]">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center pt-2">
          <button className="uppercase text-center text-black border-b-4 border-black font-semibold rounded-lg p-4">
            View Full Menu
          </button>
        </div>
        <div className="mt-32 h-48 flex items-center justify-center bg-black">
          <h2 className="text-3xl text-white font-semibold text-center">
            Call Us: +88 01912121212
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
