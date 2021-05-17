import { useFormikContext } from "formik";

import { Button } from "@material-ui/core";

// map formik props to Button component
// display form-wide errors; disable when invalid or submitting
const FormikButton = ({ type, label, startIcon, endIcon, ...props }) => {
  const { isSubmitting, isValid, dirty, errors, values } = useFormikContext();
  const pending = !isValid || !dirty || isSubmitting; // disable form submission during login attempt
  const error = errors.action; // display form action error

  return (
    <>
      <Button
        {...props}
        type={type}
        disabled={pending}
        variant="contained"
        disableElevation
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {label}
      </Button>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};

export default FormikButton;
