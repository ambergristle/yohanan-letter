import Router from "next/router";
import * as yup from "yup";

import { Box, Paper, makeStyles } from "@material-ui/core";

import FormikForm from "./FormikForm/FormikForm";
import FormikField from "./FormikForm/FormikField";
import FormikButton from "./FormikForm/FormikButton";

import { useStore, toggleLoggedInSelector } from "../../utils/store/store";
import tryLoginUser from "../../utils/requests/tryLoginUser";

const useStyles = makeStyles((theme) => ({
  validatedInput: { marginBottom: "20px" },
}));

const initialValues = { email: "", password: "" };

// input requirements and error messages
const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(10, "Enter a valid password"),
});

// log in for auth access (admin, publishing)
const LoginForm = () => {
  const { loginForm, validatedInput } = useStyles();

  const toggleLoggedIn = useStore(toggleLoggedInSelector);

  const handleLogin = (values, actions) =>
    tryLoginUser(values, actions, toggleLoggedIn);

  return (
    <Box display="flex" justifyContent="center">
      <Paper variant="outlined">
        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          handleSubmit={handleLogin}
        >
          <FormikField
            name="email"
            type="email"
            placeholder="Email"
            className={validatedInput}
          />
          <FormikField
            name="password"
            type="password"
            placeholder="Password"
            className={validatedInput}
          />
          <FormikButton type="submit" label="log in" color="primary" />
        </FormikForm>
      </Paper>
    </Box>
  );
};

export default LoginForm;
