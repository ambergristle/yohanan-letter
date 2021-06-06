import { useFormikContext } from "formik";
import { IconButton } from "@material-ui/core";

const FormikIconButton = ({ disabled, icon, handleClick, ...props }) => {
  const { isSubmitting } = useFormikContext();
  const pending = isSubmitting; // disable during form submission

  return (
    <IconButton {...props} disabled={disabled || pending} onClick={handleClick}>
      {icon}
    </IconButton>
  );
};

export default FormikIconButton;
