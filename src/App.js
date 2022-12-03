import "./styles.css";
import { useState } from "react";

const foodDB = {
  Indian: [
    { name: "Dosa", rating: "9/10" },
    { name: "Dhokla", rating: "6/10" },
    { name: "Samosa", rating: "8/10" },
    { name: "Pav bhaji", rating: "7/5" }
  ],
  Chinese: [
    { name: "Noodles", rating: "8/10" },
    { name: "Spring Rolls", rating: "7/10" },
    { name: "Hot and Sour Soup", rating: "8/10" }
  ],
  Italian: [
    { name: "Pizza", rating: "7/10" },
    { name: "Pasta", rating: "8/10" }
  ],
  American: [
    { name: "Hot Dogs", rating: "6/10" },
    { name: "Burger", rating: "8/10" },
    { name: "French Fries", rating: "7/10" }
  ]
};
const foodTypes = Object.keys(foodDB);
// console.log(foodTypes);

export default function App() {
  const [foodType, setFoodType] = useState("Indian");

  function foodClickHandle(foodtype) {
    setFoodType(foodtype);
  }
  return (
    <div className="App">
      <h1>🍲 Food items</h1>
      <p>Check the food items, please select food groups</p>
      <div>
        {foodTypes.map((foodtype) => (
          <button
            onClick={() => foodClickHandle(foodtype)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              padding: "0.4rem 0.8rem",
              margin: "0.6rem 0.5rem",
              borderRadius: "1rem",
              border: "1px solid black"
            }}
          >
            {foodtype}
          </button>
        ))}
      </div>
      {/* <hr style={{ width: "30%" }} /> */}
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[foodType].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "large" }}>{food.name}</div>
              <div style={{ fontSize: "large" }}>{food.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
