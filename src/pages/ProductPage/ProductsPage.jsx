import React, { useState } from "react";
import shirt1 from "../assets/shirt.jpeg";
import shirt2 from "../assets/shirt2.jpeg";
import hat1 from "../assets/hat1.jpeg";
import hat2 from "../assets/hat2.jpeg";
import pant1 from "../assets/pants.jpeg";
import pant2 from "../assets/pants2.jpeg";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const items = [
  {
    id: 1,
    title: "Majestic Mountain Graphic",
    price: 44,
    image: shirt1,
    category: "shirts",
  },
  {
    id: 2,
    title: "Classic Red Pullover",
    price: 30,
    image: shirt2,
    category: "shirts",
  },
  {
    id: 3,
    title: "Classic Comfort Fit Joggers",
    price: 50,
    image: pant1,
    category: "pants",
  },
  {
    id: 4,
    title: "Classic Comfort Drawstring",
    price: 45,
    image: pant2,
    category: "pants",
  },
  {
    id: 5,
    title: "Classic Navy Blue Baseball Cap",
    price: 45,
    image: hat1,
    category: "hats",
  },
  {
    id: 6,
    title: " Classic Blue Baseball Cap",
    price: 45,
    image: hat2,
    category: "hats",
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);
  return (
    <div className="p-8 sm:mr-64 pt-28 bg-purple-100">
      <div className="my-8">
        <label className="text-purple-950 mr-2">Select Category: </label>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-purple-400 text-purple-950 p-2 rounded"
        >
          <option value="all">All</option>
          <option value="hats">Hats</option>
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
        </select>
      </div>
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <div
              key={item.id}
              className="bg-purple-200 p-4 shadow-md rounded-lg border"
            >
              <img src={item.image} alt={item.title} />
              <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
              <p className="text-purple-800 my-2">{item.category}</p>
              <p className="text-purple-600 font-bold">{item.price} $</p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ProductsPage;
