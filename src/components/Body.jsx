import { RestCard, WithLabel } from "./RestCard";
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { Link } from "react-router-dom";

export const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const EnhancedRestCard = WithLabel(RestCard);

  const { loggedInUser, setUserInfo } = useContext(userContext);

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
    // console.log(filterRes);
    setFilterRestaurants(filterRes);
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.91378&lng=78.080016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    // console.log(res);

    setAllRestraunts(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1 className="justify-center">The page is loading</h1>;
  }

  if (allRestraunts?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="Filter flex items-center justify-center mb-7 mt-7">
        <button
          className="filter-btn mr-6 p-2 rounded-md border border-black bg-green-300 hover:bg-green-400"
          onClick={filterTopRestaurants}
        >
          Top Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box border border-black mr-2 ml-7 p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border bg-pink-600 rounded-lg p-2 hover:bg-pink-400"
            onClick={() => {
              filterFun();
            }}
          >
            Search
          </button>
        </div>
        <div className="ml-5">
          <label className="ml-4">Username : </label>
          <input
            className="border border-black p-1 "
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="Rest-container flex flex-wrap justify-center">
        {filteredRestaurants?.map((resData, index) =>
          resData?.info?.avgRating > 4 ? (
            <Link
              to={"/restaurants/" + resData?.info?.id}
              key={resData?.info?.id}
            >
              <EnhancedRestCard resData={resData?.info} />
            </Link>
          ) : (
            <Link
              to={"/restaurants/" + +resData?.info?.id}
              key={resData?.info?.id}
            >
              <RestCard resData={resData?.info} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};
