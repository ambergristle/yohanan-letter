import axios from "axios";

const newMessage = ({ from, message }) => ({
  to: "hello@yohananletter.com",
  from: "feedback@yohananletter.com",
  replyTo: from,
  subject: "Reader Feedback",
  text: message,
});

const sendFeedback = async (form, { setSubmitting, resetForm }) => {
  const message = newMessage(form);

  try {
    const response = await axios.post("/api/emails/send", message);
    resetForm();
    setSubmitting(false);
    return response.status;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
    }
    console.error(error);
    setSubmitting(false);
    return setFieldError("feedback", "Request could not be proccessed"); // axios error;
  }
};

export default sendFeedback;
