import Router from "next/router";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

const tryLogout = async () => {
  try {
    const response = await axios.delete("/api/users/logout");

    cookies.remove("lia");
    return Router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export default tryLogout;
