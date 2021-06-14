import * as yup from "yup";

import trySendFeedback from "../../utils/requests/trySendFeedback";

import { Paper, makeStyles } from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

import FormikForm from "./FormikForm/FormikForm";
import FormikField from "./FormikForm/FormikField";
import FormikButton from "./FormikForm/FormikButton";

const useStyles = makeStyles((theme) => ({
  validatedInput: { marginBottom: "20px" },
}));

const initialValues = { from: "", message: "" };

// input requirements and error messages
const validationSchema = yup.object({
  from: yup.string().required("Email is required").email("Enter a valid email"),
  message: yup.string().required("Include a message"),
});

// post user feedback email
const FeedbackForm = () => {
  const { validatedInput } = useStyles();

  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={trySendFeedback}
    >
      <Paper variant="outlined" elevation={0}>
        <FormikField
          name="from"
          type="email"
          placeholder="Email"
          className={validatedInput}
        />
        <FormikField
          name="message"
          type="password"
          placeholder="Let me know what you think!"
          multiline
          rows={6}
          className={validatedInput}
        />
        <FormikButton type="submit" label="send" endIcon={<SendIcon />} />
      </Paper>
    </FormikForm>
  );
};

export default FeedbackForm;
