import { RestCard } from "./RestCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const filterTopRestaurants = () => {
    const temp = allRestraunts.filter((res) => res.info.avgRating > 4);
    setFilterRestaurants(temp);
  };
  const filterFun = () => {
    const filterRes = allRestraunts.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterRes);
    setFilterRestaurants(filterRes);
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.91378&lng=78.080016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    setAllRestraunts(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (allRestraunts?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="Filter">
        <button className="filter-btn" onClick={filterTopRestaurants}>
          Top Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              filterFun();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="Rest-container">
        {filteredRestaurants?.map((resData, index) => (
          <RestCard key={index} resData={resData?.info} />
        ))}
      </div>
    </div>
  );
};
