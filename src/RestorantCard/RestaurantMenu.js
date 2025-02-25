import React, { useState } from "react";
import Shimmer from "../components/Shimmer";
import { Images } from "../../appConstant";
import { useRestaurantMenu } from "../Hooks/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantCatogary from "./RestaurantCatogary";

const RestaurantMenu = () => {
  const { RESTO_MENU_CARD } = Images;
  const { restId } = useParams();
  const { resMenuInfo } = useRestaurantMenu(restId);
  const [showIndex, setShowIndex] = useState(0);

  const toggleAction = () => {
    setShowIndex(showIndex+1);
  };
  if (resMenuInfo === null) {
    return <Shimmer />;
  }

  // Extract restaurant and menu details
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resMenuInfo?.cards[2]?.card?.card?.info || {};
  console.log(
    "itemCards",
    resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const catagories =
    resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("catagory", catagories);
  return (
    <div  className="container mx-auto p-4">
      {/* Restaurant Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
        <div className="flex items-center space-x-4">
          <img
            className="w-40 h-40 rounded-lg object-cover"
            alt="Restaurant"
            src={`${RESTO_MENU_CARD}${cloudinaryImageId}`}
          />
          <div>
            <h3 className="text-lg text-gray-700">
              {cuisines?.join(", ")} - {costForTwoMessage}
            </h3>
            <div className="mt-2">
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  avgRating >= 4
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                ⭐ {avgRating || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {catagories.map((catagory, idx) => (
        <RestaurantCatogary
          key={idx}
          setItem={idx === showIndex && true}
          data={catagory}
          setToggleAction={toggleAction}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
