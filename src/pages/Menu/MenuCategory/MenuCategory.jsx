import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-10">
      {title && <Cover img={img} title="Our Menu"></Cover>}
      <div className="grid grid-cols-2 gap-4 my-3 text-[#737373]">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
