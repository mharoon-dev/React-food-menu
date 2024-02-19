import "./App.css";
import { useState } from "react";
import NavBar from "./navbar.js";
import FoodList from "./Components/FoodList/foodList.js";

// importing pizza images
import pizzaImage1 from "./assets/pizza pictures/1.jpg";
import pizzaImage2 from "./assets/pizza pictures/2.jpg";
import pizzaImage3 from "./assets/pizza pictures/3.png";
import pizzaImage4 from "./assets/pizza pictures/4.png";
import pizzaImage5 from "./assets/pizza pictures/5.png";
import pizzaImage6 from "./assets/pizza pictures/6.png";

// importing bbq images
import burgerImage1 from "./assets/burger pictures/1.jpg";
import burgerImage2 from "./assets/burger pictures/2.jpg";
import burgerImage3 from "./assets/burger pictures/3.jpg";
import burgerImage4 from "./assets/burger pictures/4.jpg";
import burgerImage5 from "./assets/burger pictures/5.jpg";
import burgerImage6 from "./assets/burger pictures/6.jpg";

// importing bbq images
import bbqImage1 from "./assets/bbq pictures/1.jpg";
import bbqImage2 from "./assets/bbq pictures/2.jpg";
import bbqImage3 from "./assets/bbq pictures/3.jpg";
import bbqImage4 from "./assets/bbq pictures/4.jpeg";
import bbqImage5 from "./assets/bbq pictures/5.avif";
import bbqImage6 from "./assets/bbq pictures/6.webp";

// importing drinks images
import drinksImage1 from "./assets/drinks pictures/1.png";
import drinksImage2 from "./assets/drinks pictures/2.png";
import drinksImage3 from "./assets/drinks pictures/3.jpeg";
import drinksImage4 from "./assets/drinks pictures/4.png";
import drinksImage5 from "./assets/drinks pictures/5.webp";
import drinksImage6 from "./assets/drinks pictures/6.jpg";

function App() {
  let foodList = [
    // 1
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage1,
      price: "$12.99",
      category: "pizza",
    },
    {
      name: "Burger",
      desc: "Beef Burger",
      image: burgerImage1,
      price: "$15.78",
      category: "burger",
    },
    {
      name: "BBQ",
      desc: "Chicken Boti",
      image: bbqImage1,
      price: "$10.10",
      category: "bbq",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage1,
      price: "$5.99",
      category: "drinks",
    },

    // 2
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage2,
      price: "$15.99",
      category: "pizza",
    },
    {
      name: "Burger",
      desc: "Beef Burger",
      image: burgerImage2,
      price: "$18.78",
      category: "burger",
    },
    {
      name: "BBQ",
      desc: "Chicken Boti",
      image: bbqImage2,
      price: "$20.10",
      category: "bbq",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage2,
      price: "$3.99",
      category: "drinks",
    },

    // 3
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage3,
      price: "$11.99",
      category: "pizza",
    },
    {
      name: "Burger",
      desc: "Beef Burger",
      image: burgerImage3,
      price: "$11.78",
      category: "burger",
    },
    {
      name: "BBQ",
      desc: "Chicken Boti",
      image: bbqImage3,
      price: "$17.10",
      category: "bbq",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage3,
      price: "$4.99",
      category: "drinks",
    },

    // 4
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage4,
      price: "$10.99",
      category: "pizza",
    },
    {
      name: "Burger",
      desc: "Beef Burger",
      image: burgerImage4,
      price: "$11.78",
      category: "burger",
    },
    {
      name: "BBQ",
      desc: "Chicken Boti",
      image: bbqImage4,
      price: "$17.10",
      category: "bbq",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage4,
      price: "$4.99",
      category: "drinks",
    },

    // 5
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage5,
      price: "$8.99",
      category: "pizza",
    },
    {
      name: "Burger",
      desc: "Beef Burger",
      image: burgerImage5,
      price: "$12.78",
      category: "burger",
    },
    {
      name: "BBQ",
      desc: "Chicken Boti",
      image: bbqImage5,
      price: "$15.10",
      category: "bbq",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage5,
      price: "$6.99",
      category: "drinks",
    },

    // 6
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage6,
      price: "$9.99",
      category: "pizza",
    },
    {
      name: "Burger",
      desc: "Beef Burger",
      image: burgerImage6,
      price: "$11.78",
      category: "burger",
    },
    {
      name: "BBQ",
      desc: "Chicken Boti",
      image: bbqImage6,
      price: "$12.10",
      category: "bbq",
    },
    {
      name: "Soda",
      desc: "Coke",
      image: drinksImage6,
      price: "$3.99",
      category: "drinks",
    },
  ];
  const [foodListItems, setfoodListItems] = useState(foodList);
  return (
    <>
      <NavBar />
      <FoodList
        foodListItems={foodListItems}
        setfoodListItems={setfoodListItems}
      />
    </>
  );
}
export default App;
