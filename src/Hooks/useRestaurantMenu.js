import React, { useState, useEffect } from "react";
import { MENU_API_URL } from "../../appConstant";
export const useRestaurantMenu = (restId) => {
  const [resMenuInfo, setRestMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + restId);
    const json = await data.json();
    setRestMenuInfo(json.data);
    console.log(json.data?.cards[2]?.card?.card?.info);
  };
  return {
    resMenuInfo,
    setRestMenuInfo,
  };
};
