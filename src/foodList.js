import "./foodList.css";
import { useState } from "react";
import FoodFunction from "./foodFunction.js";
// images
import pizzaImage from "./assets/pizza .jpg";
import bbqImage from "./assets/bbq.jpg";
import burgerImage from "./assets/burger.jpg";
import drinksImage from "./assets/drinks.jpg";
import FoodOptionsFunction from "./foodOptionsFunction.js";

export default function FoodList() {

  // food list
  let foodList = [
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage,
      price: "$12.99",
    },
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage,
      price: "$12.99",
    },
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage,
      price: "$12.99",
    },
    {
      name: "Pizza",
      desc: "Italian food",
      image: pizzaImage,
      price: "$12.99",
    },
  ];

  let foodOptions = [
    {
      name: "Pizza",
      image: pizzaImage,
    },
    {
      name: "BBQ",
      image: bbqImage,
    },
    {
      name: "Burger",
      image: burgerImage,
    },
    {
      name: "Drinks",
      image: drinksImage,
    },
  ];

  const [foodItems, setFoodItems] = useState(foodList);

  let filteredFoodList = foodList.filter( ( foodItem ) => {
    if ( foodItem.name === category ) return foodItem
  })
  setFoodItems(filteredFoodList);

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          {/* left bar */}
          <div
            id="leftBar"
            className="col-md-4 col-12 ms-md-4 d-flex flex-column justify-content-center align-items-center"
          >
            <div>
              <p
                className="mb-2 ratingText"
                style={{ textAlign: "center", color: "rgb(182, 180, 180)" }}
              >
                4.5 &nbsp;
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                &nbsp; (548 reviews)
              </p>

              <h2
                id="heading"
                style={{ textAlign: "center", color: "white", fontWeight: 600 }}
              >
                The Brooklyn Tree
              </h2>

              <p
                className="para"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "center",
                  color: "rgb(238, 236, 236)",
                  fontSize: "small",
                }}
              >
                Address: 6 Yukon Drive Reaford, NC 28376
              </p>
              <div
                className="paraDiv d-flex mx-auto justify-content-between align-items-center"
                style={{ width: "18rem" }}
              >
                <p
                  className="mb-0 para"
                  style={{ color: "rgb(238, 236, 236)", fontSize: "small" }}
                >
                  Call (530) 625-9694
                </p>
                <p
                  className="mb-0 para"
                  style={{ color: "rgb(238, 236, 236)", fontSize: "small" }}
                >
                  5:00 - 23:00
                </p>
              </div>
            </div>

            <div className="container-fluid imgDiv">
              <div className="row imgRow optionsDiv gap-3 gap-md-0 ">
                {foodOptions.map((food) => (
                  <FoodOptionsFunction food={food} />
                ))}
              </div>
            </div>
          </div>

          <div class="ms-lg-5 col-7 options">
            <div class="container-fluid">
              <div class="row">
                {foodList.map((foodItem) => (
                  <FoodFunction foodItem={foodItem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
