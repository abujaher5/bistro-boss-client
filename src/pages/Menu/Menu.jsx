import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={dessertImg} title={"Our Menu"}></Cover>
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={desserts}
        title="Dessert Items"
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="Salad Items"
        img={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="Salad Items"
        img={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title="Pizza Items"
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title="Soup Items"
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
