import React from "react";

import * as yup from "yup";

import SendIcon from "@material-ui/icons/Send";

import FormikForm from "../FormikForm/FormikForm";
import FormikField from "../FormikForm/FormikField";
import FormikButton from "../FormikForm/FormikButton";

const initialValues = { email: "", message: "" };

// input requirements and error messages
const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  message: yup.string().required("Password is required"),
});

const sendFeedback = (values) => {
  console.log(values);
};

const FeedbackForm = () => {
  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={sendFeedback}
    >
      <FormikField name="email" type="email" placeholder="Email" />
      <FormikField
        name="message"
        type="password"
        placeholder="Let me know what you think!"
        multiline
        rows={6}
      />
      <FormikButton label="send" endIcon={<SendIcon />} />
    </FormikForm>
  );
};

export default FeedbackForm;
