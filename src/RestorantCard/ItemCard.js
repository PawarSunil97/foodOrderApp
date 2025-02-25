import { useDispatch } from "react-redux";
import { Images } from "../../appConstant";
import  {addItem}  from "../store/cardSlice";

const ItemCard = ({ itemCardInfo }) => {
  const { RESTO_MENU_CARD } = Images;
  const dispatch = useDispatch(); 
  const handleAddItem = (item) => {
    dispatch(addItem(item)); 
  };
  return (
    <div>
      {itemCardInfo.map((item, index) => {
        const cardInfo = item.card.info;
        return (
          <div data-testid="foodItems" key={index}>
            <div className="flex items-start mb-6 mt-2 px-1">
              <div className="flex-grow">
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {cardInfo.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  ₹{cardInfo.defaultPrice / 100 || cardInfo.price / 100}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {cardInfo.description}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <img
                  className="w-24 h-24 object-cover rounded-md"
                  src={`${RESTO_MENU_CARD}${cardInfo.imageId}`}
                  alt={cardInfo.name}
                />
                <button className="mt-2 w-full bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-md hover:bg-green-600" onClick={()=>handleAddItem(item)}>
                  ADD +
                </button>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
