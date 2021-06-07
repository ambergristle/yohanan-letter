import * as yup from "yup";

import trySend from "../../utils/requests/trySend";

import { Paper } from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

import FormikForm from "./FormikForm/FormikForm";
import FormikField from "./FormikForm/FormikField";
import FormikButton from "./FormikForm/FormikButton";

const initialValues = { from: "", message: "" };

// input requirements and error messages
const validationSchema = yup.object({
  from: yup.string().required("Email is required").email("Enter a valid email"),
  message: yup.string().required("Include a message"),
});

// post user feedback email
const FeedbackForm = () => {
  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={trySend}
    >
      <Paper variant="outlined" elevation={0}>
        <FormikField name="from" type="email" placeholder="Email" />
        <FormikField
          name="message"
          type="password"
          placeholder="Let me know what you think!"
          multiline
          rows={6}
        />
        <FormikButton type="submit" label="send" endIcon={<SendIcon />} />
      </Paper>
    </FormikForm>
  );
};

export default FeedbackForm;
