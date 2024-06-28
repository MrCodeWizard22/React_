import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlices";
import { useDispatch } from "react-redux";

export const Item = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {itemCards.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="border border-gray-300 p-4 my-4 flex flex-row items-start rounded-lg shadow-md"
          style={{ maxWidth: "1000px" }}
        >
          <div className="flex-1 pr-4">
            <h2 className="text-lg font-medium text-gray-800">
              {item?.card?.info?.name}
            </h2>
            <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis whitespace-normal max-h-20">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="relative w-36 flex-shrink-0">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-auto rounded-lg"
              alt={item?.card?.info?.name}
            />
            <button
              className="absolute bottom-2 right-2 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => handleClick(item)}
            >
              + Add -
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
