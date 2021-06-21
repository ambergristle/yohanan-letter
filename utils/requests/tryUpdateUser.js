import axios from "axios";

const tryUpdateUser = async (user) => {
  try {
    const response = await axios.patch("/api/users/update", user);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default tryUpdateUser;
