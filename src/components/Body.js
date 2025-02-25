import React, { useContext } from "react";
import RestorantCard from "../RestorantCard/RestorantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useBody } from "../Hooks/useBody";
import { useOnlineStatus } from "../Hooks/useOnlineStatus";
import userContext from "../utils/userContaxt";

const Body = () => {
  const { isOnline } = useOnlineStatus();

  const {
    loading,
    filterList,
    searchText,
    setSearchText,
    handleSearch,
    filterListData,
  } = useBody();
  const { loggedInUser, setUserName } = useContext(userContext);
  // Offline Message
  console.log(filterList)
  if (!isOnline) {
    return (
      <h1 className="text-center text-red-600 text-xl font-bold mt-10">
        Looks like you are offline. Please check your network connection.
      </h1>
    );
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Box */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            data-testid="search"
            placeholder="Search Restaurants..."
            className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={filterListData}
        >
          Filter Restaurants
        </button>
        <input
          className="border black"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      {/* Restaurants List */}
      <div data-testid="restCard" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterList?.length > 0 ? (
          filterList.map((restaurant, idx) => (
            <Link data-testid={"cards"} key={idx} to={"/restaurant/" + restaurant.info.id}>
              <RestorantCard data={restaurant} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Body;
