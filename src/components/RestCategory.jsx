import React, { useState } from "react";
import { Item } from "./Items";

export const RestCategory = ({ category, showItems, setShowIndex }) => {
  const { card } = category;
  const numCards = card?.card?.itemCards.length || 0;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      <div
        className="justify-between flex flex-row cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-red-500 text-xl font-semibold mb-2">
          {category?.card?.card?.title}--
          {numCards}
        </h2>
        <h2>🔽</h2>
      </div>
      <div>
        {showItems && <Item itemCards={category.card.card.itemCards} />}
      </div>
    </div>
  );
};
