import * as yup from "yup";

import FormikForm from "./FormikForm/FormikForm";
import FormikField from "./FormikForm/FormikField";
import FormikButton from "./FormikForm/FormikButton";

import tryLogin from "../../lib/requests/tryLogin";

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
  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={tryLogin}
    >
      <FormikField name="email" type="email" placeholder="Email" />
      <FormikField name="password" type="password" placeholder="Password" />
      <FormikButton type="submit" label="log in" />
    </FormikForm>
  );
};

export default LoginForm;
