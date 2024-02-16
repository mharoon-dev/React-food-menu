import "./App.css";
import { useState } from "react";
import NavBar from "./navbar.js";
import FoodList from "./Components/FoodList/foodList.js";

// importing images
import pizzaImage from "./assets/pizza .jpg";
import bbqImage from "./assets/bbq.jpg";
import burgerImage from "./assets/burger.jpg";
import drinksImage from "./assets/drinks.jpg";

function App() {
  let foodList = [
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage,
      price: "$12.99",
      category: "pizza",
    },
    {
      name: "BBQ",
      desc: "Tikka",
      image: bbqImage,
      price: "$15.78",
      category: "bbq",
    },
    {
      name: "Burger",
      desc: "Zinger",
      image: burgerImage,
      price: "$10.10",
      category: "burger",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage,
      price: "$5.99",
      category: "drinks",
    },
  ];
  const [foodListItems, setfoodListItems] = useState(foodList);
  return (
    <>
      <NavBar />
      <FoodList foodListItems={foodListItems} setfoodList={setfoodListItems} />
    </>
  );
}

export default App;
