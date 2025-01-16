import React from "react";
import { useState, useEffect } from "react";
import RestorantCard from "../RestorantCard/RestorantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0173611&lng=72.5202951&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const jsonData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(jsonData);
      setFilterList(jsonData);
      setLoading(false);
    } catch (error) {
      console.log("errror", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = listOfRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filtered);
  };

  const filterListData = () => {
    setFilterList(listOfRestaurant.filter((e) => e.info.avgRating > 4.3));
    setLoading(false);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="filter-btn" onClick={filterListData}>
          filter Restorant
        </button>
      </div>
      <div className="res-container">
        {filterList?.length > 0 ? (
          filterList.map((restaurant, idx) => (
            <RestorantCard key={idx} data={restaurant} />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
