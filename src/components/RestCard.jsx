import { CDN_URL } from "../utils/constants";
export const WithLabel = (RestCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          htmlFor=""
          className="absolute top-3 left-0 px-2 py-1 z-10 rounded-md text-white bg-slate-600"
        >
          promoted
        </label>
        <RestCard {...props} className="relative z-0" />
      </div>
    );
  };
};
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
    <div className="rest-card w-48 border border-black-500 mr-5 mt-5 rounded-md shadow-md ">
      <img
        className="resLogo w-full h-48 object-fit"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
      </div>
      {/* <h4>{resData.info.sla.deliveryTime} minutes</h4> */}
    </div>
  );
};
