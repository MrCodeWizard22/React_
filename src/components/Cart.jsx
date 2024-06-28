import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlices";
import Item from "./Items";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-center items-center font-bold text-lg my-5">
      <h1>Cart</h1>
      <button onClick={handleClick}>Clear Cart</button>
      <div>
        <Item itemCards={cartItems} />
      </div>
    </div>
  );
};
