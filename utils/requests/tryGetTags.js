import axios from "axios";

const tryGetTags = async () => {
  try {
    const response = await axios.get("/api/tags");

    return response?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default tryGetTags;
