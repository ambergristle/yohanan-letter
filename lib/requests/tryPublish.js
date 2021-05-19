import axios from "axios";

const tryPublish = async (draft, action) => {
  try {
    switch (action) {
      // save draft
      case "SAVE": {
        const response = await axios.patch("/api/drafts", draft);
        return console.log(response.status);
      }
      // schedule newsletter, add post to archive
      case "SCHEDULE": {
        const response = await axios.post("/api/drafts", draft);
        return console.log(response.status);
      }
    }
  } catch (error) {
    if (error.response) {
      console.error(error.response);
    }
  }
};

export default tryPublish;
