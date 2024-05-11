import { RestCard } from "./RestCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.91378&lng=78.080016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();
      console.log(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestraunts(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  const filterTopRestaurants = () => {
    const temp = allRestraunts.filter((res) => res.info.avgRating > 4);
    setAllRestraunts(temp);
  };

  if (allRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="Filter">
        <button className="filter-btn" onClick={filterTopRestaurants}>
          Top Restaurants
        </button>
      </div>
      <div className="Rest-container">
        {allRestraunts.map((resData, index) => (
          <RestCard key={index} resData={resData?.info} />
        ))}
      </div>
    </div>
  );
};
