import React from "react";

import { Formik, Form } from "formik";

const FormikForm = ({
  initialValues,
  validationSchema,
  handleSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);
        handleSubmit(values, setSubmitting, setFieldError);
      }}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormikForm;
