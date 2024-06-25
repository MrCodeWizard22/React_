import { User } from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";
import { useContext } from "react";
export const About = () => {
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-center mb-4">This is the About page... </h1>
      <h2 className="mb-4 text-green-800 font-bold">
        userName : {loggedInUser}
      </h2>
      <User
        name={"Piyush Varshney"}
        location={"GZB"}
        contact={"@piyushvarshney_"}
      />
      <UserClass
        name={"Piyush Varshney"}
        location={"GZB"}
        contact={"@piyushvarshney_"}
      />
    </div>
  );
};
