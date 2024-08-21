import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-4 my-3 text-[#737373]">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-2 ">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-green-500">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
