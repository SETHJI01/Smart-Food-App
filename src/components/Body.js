import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Filter the top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
