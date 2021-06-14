import { useFormikContext } from "formik";

import { Typography } from "@material-ui/core";

// display form values for testing
const FormikValues = () => {
  const { values, isValid } = useFormikContext();

  return (
    <>
      <Typography color="secondary">{`${isValid}`}</Typography>
      <Typography color="secondary">
        {JSON.stringify(values, null, 2)}
      </Typography>
    </>
  );
};

export default FormikValues;
