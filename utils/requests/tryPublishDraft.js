import axios from "axios";

const tryPublishDraft = async (draft, action) => {
  try {
    switch (action) {
      // save draft
      case "SAVE": {
        const response = await axios.patch("/api/drafts", draft);
        return { saved: true };
      }
      // schedule newsletter, add post to archive
      case "SCHEDULE": {
        const response = await axios.post("/api/drafts", draft);
        return { scheduled: true };
      }
    }
  } catch (error) {
    return false;
  }
};

export default tryPublishDraft;
