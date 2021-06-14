import axios from "axios";

const tryUpdateUser = (user) => {
  try {
    const response = axios.patch("/api/users/update", user);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default tryUpdateUser;
