import { useFormikContext } from "formik";
import { IconButton } from "@material-ui/core";

const FormikIconButton = ({ icon, handleClick }) => {
  const { isSubmitting } = useFormikContext();
  const pending = isSubmitting; // disable during form submission

  return (
    <IconButton disabled={pending} onClick={handleClick}>
      {icon}
    </IconButton>
  );
};

export default FormikIconButton;
