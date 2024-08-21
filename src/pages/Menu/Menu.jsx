import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import drinksImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
// import { useParams } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={dessertImg} title={"Our Menu"}></Cover>

      {/* main cover  */}

      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>

      {/* offered items */}

      <MenuCategory items={drinks} img={drinksImg}></MenuCategory>
      <MenuCategory
        items={desserts}
        title="Desserts"
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
      <MenuCategory
        items={drinks}
        title="Drinks"
        img={drinksImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
