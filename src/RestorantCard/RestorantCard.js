import { Images } from "../../appConstant"; // Corrected import
const RestorantCard = (props) => {
  const { RESTO_CARD } = Images; // Extracting RESTO_CARD from Images
  const { data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = data?.info;
  console.log('name',name)
  return (
    <div className="res-card">
      <div className="card">
        <img
          className="card-img"
          alt="restaurant-img"
          src={`${RESTO_CARD}${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestorantCard;
