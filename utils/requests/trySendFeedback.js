import axios from "axios";

const newMessage = ({ from, message }) => ({
  to: "hello@yohananletter.com",
  from: "feedback@yohananletter.com",
  replyTo: from,
  subject: "Reader Feedback",
  text: message,
});

const trySendFeedback = async (feedback, { setSubmitting, resetForm }) => {
  const message = newMessage(feedback);

  try {
    const response = await axios.post("/api/feedback", message);
    resetForm();
    setSubmitting(false);
    return response.status;
  } catch (error) {
    console.log(error);
    setSubmitting(false);
    // return setFieldError("feedback", "Request could not be proccessed"); // axios error;
    return 500; // axios error
  }
};

export default trySendFeedback;
