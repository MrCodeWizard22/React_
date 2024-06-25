import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestCategory } from "./RestCategory";

export const RestMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showIndex, setShowIndex] = useState(0);

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.913562&lng=78.080701&restaurantId=${id}`
    );
    const res = await data.json();

    setCategories(res?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {categories.map((category, index) =>
        category?.card?.card?.itemCards ? (
          <RestCategory
            key={index}
            category={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              // if (!showIndex)
              setShowIndex(index);
              // else
              // setShowIndex(-1);
            }}
          />
        ) : null
      )}
    </div>
  );
};
