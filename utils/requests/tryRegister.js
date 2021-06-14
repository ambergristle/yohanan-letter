import axios from "axios";

const tryRegister = async (user) => {
  try {
    const response = await axios.post("/api/users/register", user);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default tryRegister;
