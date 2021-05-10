import { useFormikContext } from "formik";

import { Button } from "@material-ui/core";

// button with form-wide error display
const FormikButton = ({ type, label, startIcon, endIcon }) => {
  const { isSubmitting, isValid, dirty, errors, values } = useFormikContext();
  const pending = !isValid || !dirty || isSubmitting; // disable form submission during login attempt
  const error = errors.action; // display form action error

  return (
    <>
      <Button
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
