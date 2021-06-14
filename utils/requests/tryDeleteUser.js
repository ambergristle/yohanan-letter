import axios from "axios";

const tryDeleteUser = async (user) => {
  try {
    const response = await axios.delete("api/users/delete", user);
    return response;
  } catch (error) {
    console.log(error);
  }
};
