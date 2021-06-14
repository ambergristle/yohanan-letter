import axios from "axios";

const tryUpdate = (user) => {
  try {
    const response = axios.patch("/api/users/update", user);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default tryUpdate;
