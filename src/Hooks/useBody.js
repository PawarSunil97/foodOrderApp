import React from "react";
import { useState, useEffect } from "react";
export const useBody = () => {
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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const jsonData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(jsonData);
      setFilterList(jsonData);
      setLoading(false);
    } catch (error) {
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

  return {
    listOfRestaurant,
    setListOfRestaurant,
    loading,
    setLoading,
    filterList,
    setFilterList,
    searchText,
    setSearchText,
    handleSearch,
    filterListData,
  };
};
