import { useState } from "react";
import * as yup from "yup";

// import trySubscribe from "../../utils/requests/trySubscribe";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import FormikForm from "./FormikForm/FormikForm";
import FormikField from "./FormikForm/FormikField";
import FormikButton from "./FormikForm/FormikButton";

const useStyles = makeStyles((theme) => ({
  validatedInput: { marginBottom: "20px" },
  subscribeButton: {
    position: "fixed",
    bottom: "5%",
    left: "5%",
    color: "rgba(238, 238, 238, 1)",
    backgroundColor: "rgba(50, 130, 184, 1)",
    "&:hover": {
      color: "rgba(50, 130, 184, 1)",
      backgroundColor: "rgba(238, 238, 238, 1)",
    },
  },
}));

const initialValues = { email: "" };

const validationSchema = yup.object({
  email: yup.string().required().email("Enter a valid email"),
});

const SubscribeForm = () => {
  const { validatedInput, subscribeButton } = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [subscribeOpen, setSubscribeOpen] = useState(false);

  const toggleDialog = () => setSubscribeOpen(!subscribeOpen);

  const handleSubmit = (values) => {
    // trySubscribe(values);
    toggleDialog();
  };

  return (
    <>
      <Button
        variant="contained"
        className={subscribeButton}
        onClick={toggleDialog}
      >
        subscribe
      </Button>
      <Dialog
        open={subscribeOpen}
        onClose={toggleDialog}
        fullWidth
        fullScreen={fullScreen}
      >
        <DialogContent>
          <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
          >
            <FormikField
              name="email"
              type="email"
              placeholder="email"
              className={validatedInput}
            />
            <FormikButton type="submit" label="subscribe" />
          </FormikForm>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscribeForm;
