import { Images } from "../../appConstant";

const RestorantCard = (props) => {
  const { RESTO_CARD } = Images; // Extracting RESTO_CARD from Images
  const { data } = props;

  // Destructure the restaurant data
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = data?.info;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      {/* Restaurant Image */}
      <img
        className="w-full h-48 object-cover"
        alt="restaurant-img"
        src={`${RESTO_CARD}${cloudinaryImageId}`}
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 mt-2 truncate">
          {cuisines.join(", ")}
        </h4>

        {/* Ratings and Delivery Time */}
        <div className="mt-3 flex justify-between items-center">
          <span
            className={`px-2 py-1 text-sm font-semibold rounded-lg ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            ⭐ {avgRating} stars
          </span>
          <h4 className="text-sm text-gray-500">{sla.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestorantCard;
