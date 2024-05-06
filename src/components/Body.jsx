import { resList } from "../utils/mockdata";
import { RestCard } from "./RestCard";
import { useState } from "react";

export const Body = () => {
  const [allRestraunts , setallRestraunts] = useState(resList);
    return (
      <div className="Body">
        <div className="Filter"><button className="filter-btn" onClick={() => {
          
          const temp = allRestraunts.filter((res) =>res.info.avgRating > 4);
          setallRestraunts(temp);
        }}>TOpREstaurants</button></div>
        <div className="Rest-container">
          {allRestraunts.map((resData, index) => (
            <RestCard key={index} resData={resData} />
          ))}
        </div>
      </div>
    );
  };
  