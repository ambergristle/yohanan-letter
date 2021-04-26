import React from "react";

import { Formik, Form } from "formik";
import * as yup from "yup";
import { Paper, Button, FormHelperText } from "@material-ui/core";

import LoginField from "./LoginField";
import tryLogin from "./tryLogin";

// defines validation parameters for email and password
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

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      validateOnChange
      onSubmit={async (
        { email, password },
        { setSubmitting, setFieldError }
      ) => {
        setSubmitting(true);
        tryLogin(email, password, setSubmitting, setFieldError);
      }}
    >
      {({ isSubmitting, isValid, dirty, errors }) => {
        const pending = !isValid || !dirty || isSubmitting; // disable form submission during login attempt
        const loginError = errors.login; // display form error

        return (
          <Paper variant="outlined">
            <Form>
              <LoginField name="email" type="email" placeholder="Email" />
              <LoginField
                name="password"
                type="password"
                placeholder="Password"
              />
              <Button
                type="submit"
                disabled={pending}
                variant="contained"
                disableElevation
              >
                Login
              </Button>
              {loginError ? (
                <FormHelperText error>{loginError}</FormHelperText>
              ) : null}
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
