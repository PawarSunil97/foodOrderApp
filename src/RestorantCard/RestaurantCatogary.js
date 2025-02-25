import React, { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data,setItem,setToggleAction }) => {
  

  const { title, itemCards } = data?.card?.card || {};

  return (
    <div className="border-b border-gray-200 m-auto rounded-md shadow-lg">
      <div
        className="flex justify-between items-center py-4 px-6 bg-white-100 hover:bg-gray-100 cursor-pointer"
        onClick={setToggleAction}
      >
        <h2 className="text-lg font-medium">
          {title} ({itemCards?.length || 0})
        </h2>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            setItem ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {setItem && (
        <div className="bg-white border border-gray-200">
          <ItemCard itemCardInfo={itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
