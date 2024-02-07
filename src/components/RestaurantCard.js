import { CDN_URL } from "../utils/Constants";

const RestaurantCard = ({ data }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = data?.info;
  return (
    <div className="res-card">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="res" />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
