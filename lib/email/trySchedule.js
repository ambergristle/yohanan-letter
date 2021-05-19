import axios from "axios";

const trySchedule = async (draft, { setSubmitting, resetForm }) => {
  // const message = newLetter(draft);

  try {
    // const response = await axios.post("/api/emails/send", message);
    // resetForm();
    setSubmitting(false);
    // return response.status;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
    }
    console.error(error);
    setSubmitting(false);
    return setFieldError("feedback", "Request could not be proccessed"); // axios error;
  }
};

export default trySchedule;
