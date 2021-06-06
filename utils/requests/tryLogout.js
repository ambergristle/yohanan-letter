import Router from "next/router";
import axios from "axios";

const tryLogout = async () => {
  try {
    const response = await axios.delete("/api/users/logout");
    if (response.ok) return Router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export default tryLogout;
