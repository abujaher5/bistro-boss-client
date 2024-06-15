import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderFoodImg from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
// import ChefRecommends from "../Home/ChefRecommends/ChefRecommends";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  console.log(salad);
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={orderFoodImg} title={"Order Food"}></Cover>

      <div className="my-4">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza </Tab>
            <Tab>Soup </Tab>
            <Tab>Dessert </Tab>
            <Tab>Drinks </Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
      {/* <ChefRecommends></ChefRecommends> */}
    </div>
  );
};

export default Order;
