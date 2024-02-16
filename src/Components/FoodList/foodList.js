import "./foodList.css";
import FoodFunction from "../FoodFunction/foodFunction.js";
// images
import pizzaImage from "../../assets/pizza .jpg";
import bbqImage from "../../assets/bbq.jpg";
import burgerImage from "../../assets/burger.jpg";
import drinksImage from "../../assets/drinks.jpg";
import FoodOptionsFunction from "../FoodOptionsFunction/foodOptionsFunction.js";
import { useState } from "react";

export default function FoodList({ foodListItems, setfoodListItems }) {
  const [category, setCategory] = useState("all");
  console.log(category + " =====>>> Category");
  let myFoodListItems = [...foodListItems];
  console.log(myFoodListItems);

  // food options array
  const foodOptions = [
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

  // filter food list
  if (category != "all") {
    myFoodListItems = myFoodListItems.filter((food) => {
      return food.category === category;
    });
    console.log(myFoodListItems);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Left bar */}
          <div
            id="leftBar"
            className="col-md-4 col-12 ms-md-4 d-flex flex-column justify-content-center align-items-center"
          >
            {/* Restaurant information */}
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

            {/* Food options */}
            <div className="container-fluid imgDiv">
              <div className="row imgRow optionsDiv gap-3 gap-md-0 ">
                {foodOptions.map((food) => (
                  <FoodOptionsFunction
                    food={food}
                    category={category}
                    setCategory={setCategory}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* food items display */}
          <div className="ms-lg-5 col-7 options">
            <div className="container-fluid">
              <div className="row">
                {foodListItems.map((foodItem) => (
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
