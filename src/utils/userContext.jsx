import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "abc",
});

export default userContext;
