import { User } from "./User";
import UserClass from "./UserClass";
export const About = () => {
  return (
    <div>
      <h1>This is the About page... </h1>
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
