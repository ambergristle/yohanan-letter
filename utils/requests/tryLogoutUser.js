import Router from "next/router";
import axios from "axios";

const tryLogoutUser = async (toggleLoggedIn) => {
  try {
    const response = await axios.delete("/api/users/logout");

    // redirect and set loggedIn state
    Router.push("/");
    return toggleLoggedIn();
  } catch (error) {
    console.log(error);
  }
};

export default tryLogoutUser;
