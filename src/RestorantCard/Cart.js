import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cardSlice";
import { Images } from "../../appConstant";

const Cart = () => {
  const cartItems = useSelector((store) => store.card.item); // Ensure 'card' is the correct slice
  const dispatch = useDispatch();
 const { RESTO_MENU_CARD } = Images;
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
const handleClearCard =()=>{
  dispatch(clearCart())
}
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-gray-100 shadow-lg rounded-lg">
      <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Your Cart</h2>
      <button
    onClick={handleClearCard}
    className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300 font-semibold"
  >
    Clear
  </button>
</div>

      {cartItems?.length === 0 ? ( // Optional chaining to prevent errors
        <p className="text-gray-600 text-lg mt-3">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 mt-3">
          {cartItems.map((item, index) => {
            const cardInfo = item.card.info;
            return (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                     src={`${RESTO_MENU_CARD}${cardInfo.imageId}`}
                    alt={cardInfo.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {cardInfo.name}
                    </h3>
                    <p className="text-gray-600 text-sm">₹{cardInfo.price / 100 || cardInfo.defaultPrice / 100}</p>
                  </div>
                </div>

                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleRemove(cardInfo.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
