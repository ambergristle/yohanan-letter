import axios from "axios";

// save draft
const scheduleDraft = async (draft, setSubmitting, setFieldError) => {
  try {
    const response = await axios.post("/api/drafts", draft);
    return response.status;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    }
    return setFieldError("schedule", "Schedule failed"); // axios error
  }
};

export default scheduleDraft;
