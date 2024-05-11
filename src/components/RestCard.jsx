import { CDN_URL } from "../utils/constants";
export const RestCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData;
    return (
      <div className="rest-card">
        <img
          className="resLogo"
          alt="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        {/* <h4>{resData.info.sla.deliveryTime} minutes</h4> */}
      </div>
    );
  };
  