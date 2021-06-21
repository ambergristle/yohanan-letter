import * as yup from "yup";
import { v4 as uuid } from "uuid";

import { Box, Button } from "@material-ui/core";

import FormikForm from "../FormikForm/FormikForm";
import FormikArray from "../FormikForm/FormikArray";
import UserItem from "./UserItem";

const mustInclude = (charType) =>
  `Password must include at least two ${charType}`;

const validationSchema = yup.object({
  users: yup.array().of(
    yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email"),
      password: yup.lazy((value) => {
        if (!value) return yup.string();
        return yup
          .string()
          .min(10, "Password must be at least 10 characters")
          .matches(/[A-Z].*[A-Z]/, mustInclude("upper-case characters"))
          .matches(/[a-z].*[a-z]/, mustInclude("lower-case characters"))
          .matches(/[0-9].*[0-9]/, mustInclude("digits"))
          .matches(/[\W].*[\W]/, mustInclude("symbols"));
      }),
    })
  ),
});

const UserForm = ({ users }) => {
  const initialValues = { users };

  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <FormikArray name="users">
        <UserItem />
      </FormikArray>
    </FormikForm>
  );
};

export default UserForm;
