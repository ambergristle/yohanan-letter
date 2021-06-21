import axios from "axios";

const tryRegisterUser = async (user) => {
  try {
    const response = await axios.post("api/users/register", user);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default tryRegisterUser;
